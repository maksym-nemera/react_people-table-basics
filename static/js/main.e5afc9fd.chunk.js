(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{21:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),r=(c(19),c(20),c(2)),s=c(6),j=c.n(s),i=(c(21),c(0)),l=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},o=c(4),b=c(1),h=(c(23),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function d(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var O=function(e){var t=e.person,c=t.name,n=t.sex,r=t.slug;return Object(i.jsx)(a.b,{to:"/people/".concat(r),className:j()("has-text-link",{"has-text-danger":"f"===n}),children:c})},x=function(e){var t=e.peoples,c=e.selectedPersonSlug;return Object(i.jsx)("div",{className:"block",children:Object(i.jsx)("div",{className:"box table-container",children:0===t.length?Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}):Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var t=e.sex,n=e.born,a=e.died,r=e.fatherName,s=e.motherName,l=e.slug,o=e.mother,b=e.father;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c===l}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(O,{person:e})}),Object(i.jsx)("td",{children:t}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:o?Object(i.jsx)(O,{person:o}):Object(i.jsx)(i.Fragment,{children:s?"".concat(s):"-"})}),Object(i.jsx)("td",{children:b?Object(i.jsx)(O,{person:b}):Object(i.jsx)(i.Fragment,{children:r?"".concat(r):"-"})})]},l)}))})]})})})},u=c(8),m=function(){var e=Object(b.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)(!1),s=Object(o.a)(a,2),j=s[0],l=s[1],O=Object(b.useState)(""),m=Object(o.a)(O,2),p=m[0],f=m[1],v=Object(r.h)().slug,g=void 0===v?"carolus-haverbeke-1832":v;Object(b.useEffect)((function(){l(!0),d().then((function(e){n(e),l(!1)})).catch((function(){l(!1),f("Something went wrong")}))}),[]);var N=function(e){return e.map((function(t){var c=e.find((function(e){return e.name===t.motherName})),n=e.find((function(e){return e.name===t.fatherName}));return Object(u.a)(Object(u.a)({},t),{},{mother:c,father:n})}))}(c);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),j?Object(i.jsx)(h,{}):Object(i.jsx)(i.Fragment,{children:p?Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:p}):Object(i.jsx)(x,{peoples:N,selectedPersonSlug:g})})]})},p=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},f=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(r.d,{children:[Object(i.jsxs)(r.b,{path:"people",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(m,{})}),Object(i.jsx)(r.b,{path:":slug",element:Object(i.jsx)(m,{})})]}),Object(i.jsx)(r.b,{path:"/",element:Object(i.jsx)(l,{})}),Object(i.jsx)(r.b,{path:"home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsx)(r.b,{path:"*",element:Object(i.jsx)(p,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(f,{})}))}},[[24,1,2]]]);
//# sourceMappingURL=main.e5afc9fd.chunk.js.map