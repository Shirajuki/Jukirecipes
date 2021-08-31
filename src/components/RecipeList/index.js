import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { sanity, imageUrlBuilder } from "../../sanity";
import SearchBar from "../SearchBar";
import Button from "../Button";
import FilterSelect from "../FilterSelect";
import Spinner from "../Spinner";
import styles from "./RecipeList.module.scss";

const query = `
  *[ _type == 'recipe' ] { title, image, slug, tags }
`;
const filterValueList = ["pasta", "noodle", "soup", "rice", "desert"];
const normalizeLower = (value) =>
  value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
const RecipeList = () => {
  // in this one line, data is fetched from sanity via the sanity client and
  // stored into application state via react-query!
  const { data: recipes } = useQuery("recipeList", () => sanity.fetch(query));
  const [searchValue, setSearchValue] = useState("");
  const [searched, setSearched] = useState("");
  const [filterValues, setFilterValues] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);
  const searchValueRef = useRef(searchValue);
  searchValueRef.current = searchValue;

  useEffect(() => {
    const filterRecipes = (recipes, filters) => {
      if (filters.length === 0 && searched === "") return recipes;
      else
        return recipes.filter((r) => {
          let bool = false;
          for (let i = 0; i < (r?.tags?.length ?? 0); i++) {
            if (filters.includes(r.tags[i].toLowerCase())) bool = true;
          }
          if (
            !normalizeLower(r.title).includes(
              normalizeLower(searchValueRef.current)
            ) ||
            (searchValueRef.current === "" && bool === false)
          )
            bool = false;
          else bool = true;
          return bool;
        });
    };
    setFilteredRecipes(filterRecipes(recipes, filterValues) || []);
  }, [recipes, filterValues, searched]);

  const search = (value) => {
    setTimeout(() => setLoading(false), 1000);
    setSearched(value);
    return true;
  };
  const goToRecipeList = () => {
    if (search(searchValue)) {
      setLoading(true);
    }
    listRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  return (
    <div className={styles.listWrapper}>
      <div className={styles.heroWrapper}>
        <img
          className={styles.heroLogo}
          src="https://cdn.discordapp.com/attachments/443508931453648907/879377259939635292/unknown.png"
          alt="jukirecipes logo"
        />
        <h1>Jukirecipes</h1>
        <p>The infamous open-source recipe book.</p>
        <p>Aka my journey in mastering the kitchen.</p>
        <SearchBar
          value={searchValue}
          setValue={setSearchValue}
          style={{ margin: 20, marginTop: 25 }}
        />
        <Button onClick={() => goToRecipeList()}>Let’s go cooooooook</Button>
      </div>
      <div className={styles.recipes}>
        {recipes ? (
          <>
            <h3>Filters:</h3>
            <FilterSelect
              selected={filterValues}
              setSelected={setFilterValues}
              values={filterValueList}
            />
            <div className={styles.list} ref={listRef}>
              {loading ? (
                <Spinner />
              ) : (
                filteredRecipes.map(({ title, slug, image }, index) => (
                  <div key={slug.current + index}>
                    <Link className={styles.tile} to={`/${slug.current}`}>
                      <img
                        alt={title}
                        // use the sanity `imageUrlBuilder` to
                        // generate optimized images on the fly
                        src={imageUrlBuilder
                          .width(375)
                          .height(375)
                          .image(image)
                          .url()}
                        width="300px"
                        height="300px"
                      />
                      <h2 className={styles.tileTitle}>{title}</h2>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default RecipeList;
