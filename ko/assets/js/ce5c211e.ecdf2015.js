"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85535],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),c=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=c(t.components);return a.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),g=c(n),m=r,s=g["".concat(d,".").concat(m)]||g[m]||o[m]||l;return n?a.createElement(s,i(i({ref:e},k),{},{components:n})):a.createElement(s,i({ref:e},k))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},33742:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return o}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={custom_edit_url:null},d=void 0,c={unversionedId:"api/AnimatingState",id:"version-4.10.7/api/AnimatingState",title:"AnimatingState",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.10.7/api/AnimatingState.mdx",sourceDirName:"api",slug:"/api/AnimatingState",permalink:"/egjs-flicking/ko/docs/api/AnimatingState",draft:!1,editUrl:null,tags:[],version:"4.10.7",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"StrictControl",permalink:"/egjs-flicking/ko/docs/api/StrictControl"},next:{title:"DisabledState",permalink:"/egjs-flicking/ko/docs/api/DisabledState"}},k={},o=[{value:"Properties",id:"properties",level:2},{value:"holding",id:"holding",level:3},{value:"animating",id:"animating",level:3},{value:"delta",id:"delta",level:3},{value:"targetPanel",id:"targetPanel",level:3},{value:"Methods",id:"methods",level:2},{value:"onEnter",id:"onEnter",level:3},{value:"onHold",id:"onHold",level:3},{value:"onChange",id:"onChange",level:3},{value:"onRelease",id:"onRelease",level:3},{value:"onAnimationEnd",id:"onAnimationEnd",level:3},{value:"onFinish",id:"onFinish",level:3}],g={toc:o};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class AnimatingState extends State\n")),(0,l.kt)("div",null),(0,l.kt)("p",null,"\uc0ac\uc6a9\uc790 \uc785\ub825\uc774\ub098 \uba54\uc18c\ub4dc \ud638\ucd9c\uc5d0 \uc758\ud574 Flicking\uc758 \uc560\ub2c8\uba54\uc774\uc158\uc774 \ub3d9\uc791\uc911\uc778 \uc0c1\ud0dc"),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Methods"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#holding"},"holding"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#animating"},"animating"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#delta"},"delta"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#targetPanel"},"targetPanel")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#onEnter"},"onEnter"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#onHold"},"onHold"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#onChange"},"onChange"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#onRelease"},"onRelease"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#onAnimationEnd"},"onAnimationEnd"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#onFinish"},"onFinish")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"holding"},"holding"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly")),(0,l.kt)("p",null,"\ud604\uc7ac \uc0ac\uc6a9\uc790\uac00 \ud074\ub9ad/\ud130\uce58\uc911\uc778\uc9c0 \uc5ec\ubd80"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": false"),(0,l.kt)("h3",{id:"animating"},"animating"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly")),(0,l.kt)("p",null,"\ud604\uc7ac \uc560\ub2c8\uba54\uc774\uc158 \ub3d9\uc791 \uc5ec\ubd80"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": true"),(0,l.kt)("h3",{id:"delta"},"delta"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly"),(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"\uc774\uc804 hold\uc774\ubca4\ud2b8\ubd80\ud130 change\uc5d0 \uc758\ud574 \ubc1c\uc0dd\ud55c \uc774\ub3d9 delta\uac12\uc758 \ud569\uc0b0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"targetPanel"},"targetPanel"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly"),(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"\uc560\ub2c8\uba54\uc774\uc158 \uc885\ub8cc\uc2dc ",(0,l.kt)("a",{parentName:"p",href:"Control#activePanel"},"Control#activePanel"),"\ub85c \uc124\uc815\ud560 \ud328\ub110"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"onEnter"},"onEnter"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"\ud604\uc7ac \uc0c1\ud0dc\ub85c \ub3cc\uc785\ud588\uc744\ub54c \ud638\ucd9c\ub418\ub294 \ucf5c\ubc31 \ud568\uc218"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"prevState"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"State"},"State")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc774\uc804 \uc0c1\ud0dc\uac12")))),(0,l.kt)("h3",{id:"onHold"},"onHold"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Axes\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:hold"},"hold")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,l.kt)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:hold"},"hold")," \uc774\ubca4\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,l.kt)("h3",{id:"onChange"},"onChange"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Axes\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:change"},"change")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,l.kt)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:change"},"change")," \uc774\ubca4\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,l.kt)("h3",{id:"onRelease"},"onRelease"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Axes\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:release"},"release")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,l.kt)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:release"},"release")," \uc774\ubca4\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,l.kt)("h3",{id:"onAnimationEnd"},"onAnimationEnd"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Axes\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:animationEnd"},"animationEnd")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,l.kt)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:animationEnd"},"animationEnd")," \uc774\ubca4\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,l.kt)("h3",{id:"onFinish"},"onFinish"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Axes\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:finish"},"finish")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,l.kt)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:finish"},"finish")," \uc774\ubca4\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))))}m.isMDXComponent=!0}}]);