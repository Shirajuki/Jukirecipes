(this.webpackJsonpjukirecipes=this.webpackJsonpjukirecipes||[]).push([[0],{10:function(e,t,n){e.exports={listWrapper:"RecipeList_listWrapper__8dUG_",heroWrapper:"RecipeList_heroWrapper__oWEGl",heroLogo:"RecipeList_heroLogo__yiori",recipes:"RecipeList_recipes__wJkGM",list:"RecipeList_list__1E5cX",tileTileWrapper:"RecipeList_tileTileWrapper__XUMnP",tile:"RecipeList_tile__3vmFu",tileTitle:"RecipeList_tileTitle__3yS_P",tileInstructionCount:"RecipeList_tileInstructionCount__1E9h7",tileIngredientCount:"RecipeList_tileIngredientCount__2zwfL",notFound:"RecipeList_notFound__2JC6p",filterDisplay:"RecipeList_filterDisplay__A6vj8",buttonWrapper:"RecipeList_buttonWrapper__1QTJu",filterTitleText:"RecipeList_filterTitleText__gTE-Z"}},157:function(e,t,n){"use strict";n.r(t);n(72),n(73);var r=n(1),c=n.n(r),i=n(60),a=n.n(i),o=n(14),s=n(160),l=n(65),d=n(71),u=n(70),p=n(8),j=n(7),h=n(19),_=n.n(h),b=n(0),f=function(e){var t=e.value,n=e.setValue,r=e.style,c=e.primary,i=e.onClick,a=void 0===i?void 0:i;return Object(b.jsxs)("p",{className:"".concat(c?_.a.wrapperPrimary:""," ").concat(_.a.inputWrapper),style:r||{},children:[Object(b.jsx)("input",{className:_.a.input,value:t,onChange:function(e){var t=e.target;return n(t.value)}}),Object(b.jsx)("button",{className:_.a.iconWrapper,onClick:function(){void 0!==a&&a&&a()},children:Object(b.jsx)("svg",{className:"".concat(c?_.a.primary:_.a.secondary," ").concat(_.a.icon),width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z",fill:"#305B9D"})})})]})},g=n(17),m=c.a.createContext(),O={searchValue:"",searched:"",loading:!1,darkmode:void 0},x=function(){return Object(r.useContext)(m)},v=function(e){var t=e.reducer,n=e.children,c=Object(r.useReducer)(t,O),i=Object(p.a)(c,2),a=i[0],o=i[1];return Object(b.jsx)(m.Provider,{value:[a,o],children:n})},k=n(32),w=n.n(k),y=function(){var e=x(),t=Object(p.a)(e,2),n=t[0].darkmode,c=t[1],i=function(e){c({type:"SET_DARKMODE",payload:e})},a=Object(r.useRef)(null);return a.current=i,Object(r.useEffect)((function(){var e=localStorage.getItem("jukirecipes-darkmode");"true"===e?a.current(!0):"false"===e?a.current(!1):"not all"!==window.matchMedia("(prefers-color-scheme)").media&&(window.matchMedia("(prefers-color-scheme: dark)").matches?(localStorage.setItem("jukirecipes-darkmode",String(!1)),a.current(!0)):window.matchMedia("(prefers-color-scheme: light)").matches&&localStorage.setItem("jukirecipes-darkmode",String(!0)))}),[]),Object(r.useEffect)((function(){localStorage.getItem("jukirecipes-darkmode")&&void 0!==n&&localStorage.setItem("jukirecipes-darkmode",String(n))}),[n]),Object(b.jsx)("button",{onClick:function(){return i(!n)},className:"".concat(w.a.themeButton," ").concat(n?w.a.dark:""),children:Object(b.jsxs)("svg",{className:w.a.themeIcon,width:"42",height:"42",viewBox:"0 0 42 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("path",{d:"M21 14C17.1325 14 14 17.1325 14 21C14 24.8675 17.1325 28 21 28C24.8675 28 28 24.8675 28 21C28 17.1325 24.8675 14 21 14Z",fill:"#E96271"}),Object(b.jsx)("path",{d:"M21 31.5C15.2075 31.5 10.5 26.7925 10.5 21C10.5 15.2075 15.2075 10.5 21 10.5C26.7925 10.5 31.5 15.2075 31.5 21C31.5 26.7925 26.7925 31.5 21 31.5ZM35 15.2075V7H26.7925L21 1.2075L15.2075 7H7.00002V15.2075L1.20752 21L7.00002 26.7925V35H15.2075L21 40.7925L26.7925 35H35V26.7925L40.7925 21L35 15.2075Z",fill:"#E96271"})]})})},C=n(25),N=n.n(C),W=function(e){var t=e.hidden,n=e.style,r=x(),c=Object(p.a)(r,2),i=c[0].searchValue,a=c[1],o=function(e){a({type:"SET_LOADING",payload:e})},s=function(e){return setTimeout((function(){return o(!1)}),1e3),function(e){a({type:"SET_SEARCHED",payload:e})}(e),!0};return Object(b.jsxs)("header",{className:"".concat(N.a.header," ").concat(t?N.a.hidden:""),style:null!==n&&void 0!==n?n:{},children:[Object(b.jsx)("a",{className:N.a.headerLink,href:"/#",children:Object(b.jsx)("img",{className:N.a.logo,src:"https://cdn.discordapp.com/attachments/443508931453648907/879377224472600677/unknown.png",alt:"jukirecipes logo"})}),Object(b.jsxs)("div",{className:N.a.themeWrapper,children:[Object(b.jsx)(f,{value:i,setValue:function(e){a({type:"SET_SEARCH_VALUE",payload:e})},primary:!0,onClick:function(){s(i)&&(document.querySelector("header").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),o(!0))}}),Object(b.jsx)(y,{})]})]})},S=n(61),L=n.n(S),I=function(){return Object(b.jsx)("footer",{className:L.a.footer,children:Object(b.jsx)("p",{children:"Powered by GitHub Pages + Sanity + React"})})},R=n(161),E=n(62),T=n.n(E),F=n(40),B=n.n(F),A=T()({projectId:"wmqsvcft",dataset:"production",apiVersion:"2021-08-31",useCdn:!0}),D=B()(A),H=n(63),V=n.n(H),M=function(e){var t=e.onClick,n=e.children,r=e.style;return Object(b.jsx)("button",{style:r||{},className:V.a.button,onClick:t,children:n})},P=n(31),Z=n(27),G=n.n(Z),J=function(e){var t=e.selected,n=e.onClick,r=e.children,c=e.readOnly,i=void 0!==c&&c,a=e.rounded,o=void 0!==a&&a;return Object(b.jsx)("button",{onClick:n,className:"".concat(G.a.filterButton," ").concat(t?G.a.active:""," ").concat(i?G.a.readOnly:""," ").concat(o?G.a.rounded:""),children:r})},U=n(41),z=n.n(U),Y=function(e){var t=e.selected,n=e.setSelected,r=e.values,c=e.readOnly,i=void 0!==c&&c,a=e.rounded,o=void 0!==a&&a;return Object(b.jsx)("div",{className:"".concat(z.a.filterWrapper," ").concat(i?z.a.readOnly:""),children:r.map((function(e,r){return Object(b.jsx)(J,{selected:t.includes(e),onClick:function(){return function(e){var r=t.includes(e)?t.filter((function(t){return t!==e})):[].concat(Object(P.a)(t),[e]);n(r)}(e)},readOnly:i,rounded:o,children:e},e+r)}))})},q=n(64),X=n.n(q),K=function(){return Object(b.jsxs)("div",{className:X.a.spinner,children:[Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{})]})},Q=n(10),$=n.n(Q),ee=["pasta","noodle","soup","rice","vegan","desert"],te=function(e){return e.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase()},ne=function(){var e=Object(R.a)("recipeList",(function(){return A.fetch("\n  *[ _type == 'recipe' ] { title, image, slug, tags, instructions, ingredients }\n")})).data,t=x(),n=Object(p.a)(t,2),c=n[0],i=c.searchValue,a=c.searched,s=c.loading,l=n[1],d=function(e){l({type:"SET_LOADING",payload:e})},u=Object(r.useState)([]),j=Object(p.a)(u,2),h=j[0],_=j[1],g=Object(r.useState)([]),m=Object(p.a)(g,2),O=m[0],v=m[1],k=Object(r.useRef)(null),w=Object(r.useRef)(i);w.current=i,Object(r.useEffect)((function(){v(function(e,t){return 0===t.length&&""===a?e:e.filter((function(e){for(var n=!1,r=0;r<(null!==(c=null===e||void 0===e||null===(i=e.tags)||void 0===i?void 0:i.length)&&void 0!==c?c:0);r++){var c,i;t.includes(e.tags[r].toLowerCase())&&(n=!0)}return n=!(!te(e.title).includes(te(w.current))||""===w.current&&!1===n)}))}(e,h)||[])}),[e,h,a]);var y=function(e){return setTimeout((function(){return d(!1)}),1e3),function(e){l({type:"SET_SEARCHED",payload:e})}(e),!0},C=function(){var e;y(i)&&d(!0),null===k||void 0===k||null===(e=k.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})};return Object(b.jsxs)("div",{className:$.a.listWrapper,children:[Object(b.jsxs)("div",{className:$.a.heroWrapper,children:[Object(b.jsx)("img",{className:$.a.heroLogo,src:"https://cdn.discordapp.com/attachments/443508931453648907/879377259939635292/unknown.png",alt:"jukirecipes logo"}),Object(b.jsx)("h1",{children:"Jukirecipes"}),Object(b.jsx)("p",{children:"The infamous open-source recipe book."}),Object(b.jsx)("p",{children:"Aka my journey in mastering the kitchen."}),Object(b.jsx)(f,{value:i,setValue:function(e){l({type:"SET_SEARCH_VALUE",payload:e})},style:{margin:20,marginTop:25},onClick:function(){return C()}}),Object(b.jsx)("div",{className:$.a.buttonWrapper,children:Object(b.jsx)(M,{onClick:function(){return C()},children:"Let\u2019s go cooooooook"})})]}),Object(b.jsx)("div",{className:$.a.recipes,children:e?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:$.a.filterTitleText,children:"Filters:"}),Object(b.jsx)(Y,{selected:h,setSelected:_,values:ee}),Object(b.jsx)("div",{className:$.a.list,ref:k,children:s?Object(b.jsx)(K,{}):O.length>0?O.map((function(e,t){var n=e.title,r=e.slug,c=e.image,i=e.instructions,a=e.ingredients,s=e.tags;return Object(b.jsx)("div",{className:$.a.tileTileWrapper,children:Object(b.jsxs)(o.b,{className:$.a.tile,to:"/jukirecipes/".concat(r.current),children:[Object(b.jsx)("img",{alt:n,src:D.width(375).height(375).image(c).url(),width:"300px",height:"300px"}),Object(b.jsx)("h2",{className:$.a.tileTitle,children:n}),Object(b.jsx)("div",{className:$.a.filterDisplay,children:Object(b.jsx)(Y,{selected:s,setSelected:function(){},values:s,readOnly:!0,rounded:!0})}),Object(b.jsx)("p",{className:$.a.tileInstructionCount,children:1===i.length?"".concat(i.length," Step"):"".concat(i.length," Steps")}),Object(b.jsx)("p",{className:$.a.tileIngredientCount,children:1===a.length?"".concat(a.length," Ingredient"):"".concat(a.length," Ingredients")})]})},r.current+t)})):Object(b.jsx)("p",{className:$.a.notFound,children:Object(b.jsx)("i",{children:"No recipes was found on this filter/search combination..."})})})]}):Object(b.jsx)(K,{})})]})},re=n(67),ce=n.n(re),ie=n(9),ae=n.n(ie),oe=n(33),se=n.n(oe),le=function(e){var t=e.ingredient,n=e.checked,r=e.onChange;return Object(b.jsxs)("div",{className:se.a.ingredientWrapper,children:[Object(b.jsx)("input",{id:t,type:"checkbox",checked:n,onChange:r,className:se.a.ingredientCheckbox}),Object(b.jsx)("label",{htmlFor:t,className:se.a.ingredientLabel,children:t})]})},de=["a","b","c","d"],ue=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(!1),a=Object(p.a)(i,2),s=a[0],l=a[1],d=Object(j.h)().slug;Object(r.useEffect)((function(){c([])}),[d]);var u=function(){l(!s)},h=Object(R.a)(d,(function(){return A.fetch("\n  *[ _type == 'recipe' && slug.current == $slug ]\n",{slug:d})})).data;if(0===(null===h||void 0===h?void 0:h.length))return Object(b.jsx)(j.a,{to:"/404"});var _=null!==h&&void 0!==h?h:[],f=Object(p.a)(_,1)[0];if(!f)return Object(b.jsx)(K,{});var g=f.ingredients.map((function(e){return e.children[0].text}));return Object(b.jsxs)("div",{className:ae.a.recipeWrapper,children:[Object(b.jsxs)("div",{className:ae.a.recipeInfoWrapper,children:[Object(b.jsx)(o.b,{className:ae.a.returnButton,to:"/jukirecipes/",children:Object(b.jsx)("svg",{width:"39",height:"20",viewBox:"0 0 39 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M9.72562 7.44245H39V12.3317H9.72562V19.6657L0 9.8871L9.72562 0.108505V7.44245Z",fill:"#E96271"})})}),Object(b.jsxs)("div",{className:ae.a.recipeInfo,children:[Object(b.jsx)("img",{className:ae.a.img,alt:f.title,src:D.width(240).height(240).image(f.image).url()}),Object(b.jsxs)("div",{className:ae.a.recipeInfoDiv,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:ae.a.title,children:f.title}),Object(b.jsx)("div",{className:ae.a.filterDisplay,children:Object(b.jsx)(Y,{selected:f.tags,setSelected:function(){},values:f.tags,readOnly:!0})}),Object(b.jsx)("div",{className:ae.a.buttonWrapper,children:Object(b.jsx)(M,{onClick:u,children:"Show ingredients"})})]}),Object(b.jsx)("div",{className:ae.a.imageGallery,children:de.map((function(e,t){return Object(b.jsx)("img",{className:ae.a.img,alt:f.title,src:D.width(80).height(80).image(f.image).url()},e+t)}))})]})]}),Object(b.jsxs)("div",{className:ae.a.recipeInstructions,children:[Object(b.jsx)("h2",{children:"Instructions"}),Object(b.jsx)(ce.a,{className:ae.a.blockContent,blocks:f.instructions})]})]}),Object(b.jsxs)("div",{className:"".concat(ae.a.recipeIngredientsWrapper," ").concat(s?ae.a.toggledIngredients:""),children:[Object(b.jsx)("h2",{children:"Ingredients"}),g.map((function(e,t){return Object(b.jsx)(le,{ingredient:e,checked:n.includes(e),onChange:function(){return function(e){var t=n.includes(e)?n.filter((function(t){return t!==e})):[].concat(Object(P.a)(n),[e]);c(t)}(e)}},e+t)}))]}),Object(b.jsx)("div",{className:ae.a.hiddenIngredientsWrapper,onClick:u})]})},pe=n(68),je=n.n(pe),he=function(){return Object(b.jsxs)("div",{className:je.a.wrapper,children:[Object(b.jsx)("h1",{children:"404"}),Object(b.jsx)("h2",{children:"I'm Sorry"}),Object(b.jsx)("p",{children:"We couldn't find the page you were looking for. "}),Object(b.jsx)(o.b,{to:"/jukirecipes/",children:Object(b.jsx)(M,{style:{margin:20,paddingLeft:60,paddingRight:60},onClick:function(){},children:"Click here to return to the homepage"})})]})},_e=n(69),be=n(34),fe=n.n(be),ge=n(44),me=n.n(ge),Oe=function(e){var t=e.reversed,n=e.style;return Object(b.jsxs)("svg",{style:null!==n&&void 0!==n?n:{},className:"".concat(me.a.wave," ").concat(t?me.a.reversed:""),width:"192",height:"93",viewBox:"0 0 192 93",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("path",{d:"M2 28.839C3.21795 2.04411 27.5769 2.04414 27.5769 2.04414C51.9359 2.0442 59.2436 28.839 81.1667 28.839C103.09 28.839 109.179 4.48012 134.756 2.04414C160.333 0.826219 167.641 25.1852 192 28.839",stroke:"#FFDFAC",strokeWidth:"4"}),Object(b.jsx)("path",{d:"M2 59.839C3.21795 33.0441 27.5769 33.0441 27.5769 33.0441C51.9359 33.0442 59.2436 59.839 81.1667 59.839C103.09 59.839 109.179 35.4801 134.756 33.0441C160.333 31.8262 167.641 56.1852 192 59.839",stroke:"#FFDFAC",strokeWidth:"4"}),Object(b.jsx)("path",{d:"M2 90.839C3.21795 64.0441 27.5769 64.0441 27.5769 64.0441C51.9359 64.0442 59.2436 90.839 81.1667 90.839C103.09 90.839 109.179 66.4801 134.756 64.0441C160.333 62.8262 167.641 87.1852 192 90.839",stroke:"#FFDFAC",strokeWidth:"4"})]})},xe=function(){var e=x(),t=Object(p.a)(e,2),n=t[0].darkmode,c=(t[1],Object(r.useState)(!0)),i=Object(p.a)(c,2),a=i[0],o=i[1],s=Object(j.g)();return Object(r.useEffect)((function(){o(!0),setTimeout((function(){return o(!0)}),100),window.scrollTo({top:0,left:0,behavior:"smooth"})}),[s.pathname]),Object(_e.useScrollPosition)((function(e){e.prevPos;e.currPos.y<-370&&"/jukirecipes/"===s.pathname?o(!1):o(!0)}),[a,s.pathname]),Object(b.jsxs)("div",{className:n?"darkmode":"",children:[Object(b.jsx)(W,{hidden:a,style:{display:"/jukirecipes/"===s.pathname?"flex":"none"}}),Object(b.jsx)("div",{className:"".concat(fe.a.themeButtonWrapper),children:Object(b.jsx)(y,{})}),Object(b.jsx)(Oe,{style:{top:165,right:0}}),Object(b.jsx)(Oe,{style:{top:380,left:0},reversed:!0}),Object(b.jsx)("main",{className:fe.a.main,children:Object(b.jsx)("div",{className:fe.a.container,children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{component:ne,path:"/jukirecipes/",exact:!0}),Object(b.jsx)(j.b,{component:he,path:"/jukirecipes/404"}),Object(b.jsx)(j.b,{component:ue,path:"/jukirecipes/:slug"})]})})}),Object(b.jsx)(I,{})]})},ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ke(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,162)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))},ye=new s.a({defaultOptions:{queries:{cacheTime:864e5}}}),Ce=Object(u.a)({storage:window.localStorage});Object(d.a)({queryClient:ye,persistor:Ce}),a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(l.a,{client:ye,children:Object(b.jsx)(o.a,{children:Object(b.jsx)(v,{reducer:function(e,t){switch(t.type){case"SET_SEARCH_VALUE":return Object(g.a)(Object(g.a)({},e),{},{searchValue:t.payload});case"SET_SEARCHED":return Object(g.a)(Object(g.a)({},e),{},{searched:t.payload});case"SET_LOADING":return Object(g.a)(Object(g.a)({},e),{},{loading:t.payload});case"SET_DARKMODE":return Object(g.a)(Object(g.a)({},e),{},{darkmode:t.payload});default:return e}},children:Object(b.jsx)(xe,{})})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/jukirecipes",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/jukirecipes","/service-worker.js");ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ke(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ke(t,e)}))}}(),we()},19:function(e,t,n){e.exports={inputWrapper:"SearchBar_inputWrapper___7rHI",wrapperPrimary:"SearchBar_wrapperPrimary__1Ph-Y",input:"SearchBar_input__2Y93q",iconWrapper:"SearchBar_iconWrapper__3arWj",icon:"SearchBar_icon__1LvqE",primary:"SearchBar_primary__1KHYj",secondary:"SearchBar_secondary__3YFyX"}},25:function(e,t,n){e.exports={header:"Header_header__1v0yI",hidden:"Header_hidden__2dMsw",headerLink:"Header_headerLink__3nrAr",logo:"Header_logo__3T0lc",themeWrapper:"Header_themeWrapper__39aQj"}},27:function(e,t,n){e.exports={filterButton:"Filter_filterButton__zxt5X",active:"Filter_active__3AQBW",readOnly:"Filter_readOnly__3kbZE",rounded:"Filter_rounded__3XFHh"}},32:function(e,t,n){e.exports={themeButton:"ThemeChangeButton_themeButton__1ZSnF",themeIcon:"ThemeChangeButton_themeIcon__3waQa",dark:"ThemeChangeButton_dark__2nja6"}},33:function(e,t,n){e.exports={ingredientWrapper:"Ingredient_ingredientWrapper__1ZNba",ingredientCheckbox:"Ingredient_ingredientCheckbox__2X9mz",ingredientLabel:"Ingredient_ingredientLabel__2IN19"}},34:function(e,t,n){e.exports={main:"App_main__uN9ca",container:"App_container__eSJ6i",themeButtonWrapper:"App_themeButtonWrapper__2SZWT",hidden:"App_hidden__2nbms"}},41:function(e,t,n){e.exports={filterWrapper:"FilterSelect_filterWrapper__UYuE-",readOnly:"FilterSelect_readOnly__1o4Np"}},44:function(e,t,n){e.exports={wave:"Wave_wave__3fdDm",reversed:"Wave_reversed__vTq57"}},61:function(e,t,n){e.exports={footer:"Footer_footer__7dIj9"}},63:function(e,t,n){e.exports={button:"Button_button__2Lf63"}},64:function(e,t,n){e.exports={spinner:"Spinner_spinner__1Nh-g",bounce:"Spinner_bounce__3Y2gd"}},68:function(e,t,n){e.exports={wrapper:"NotFound_wrapper__1nhFz",btn:"NotFound_btn__VFgQ0"}},73:function(e,t,n){},9:function(e,t,n){e.exports={blockContent:"Recipe_blockContent__3p14x",returnButton:"Recipe_returnButton__3p2Wh",recipeWrapper:"Recipe_recipeWrapper__t2LZm",recipeInfoWrapper:"Recipe_recipeInfoWrapper__2ZDK3",recipeInfo:"Recipe_recipeInfo__3505F",img:"Recipe_img__cY2rD",recipeInfoDiv:"Recipe_recipeInfoDiv__1CRNJ",buttonWrapper:"Recipe_buttonWrapper__2CzP-",title:"Recipe_title__1zrbL",filterDisplay:"Recipe_filterDisplay__24i6x",imageGallery:"Recipe_imageGallery__2EX7u",recipeInstructions:"Recipe_recipeInstructions__3JzYJ",recipeIngredientsWrapper:"Recipe_recipeIngredientsWrapper__3jgRv",hiddenIngredientsWrapper:"Recipe_hiddenIngredientsWrapper__3gllf",toggledIngredients:"Recipe_toggledIngredients__19G6M"}}},[[157,1,2]]]);
//# sourceMappingURL=main.64856be3.chunk.js.map