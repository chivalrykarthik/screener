(this.webpackJsonpscreener=this.webpackJsonpscreener||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n,r,a,l,i=c(1),s=c.n(i),j=c(14),o=c.n(j),u=(c(22),c(6)),d=c(8),b=c(3),h=c(2),O=(c.p,c(23),c(4)),x=c(5),p=x.a.textarea(n||(n=Object(O.a)(["\n    height:100px;\n"]))),f=x.a.button(r||(r=Object(O.a)(["\n    width:10%;\n    margin:10px 0 0 0;    \n"]))),v=x.a.div(a||(a=Object(O.a)(["\n    width:100%;\n    display:flex;\n    flex-direction:column;\n"]))),m=c(0),g=function(e){var t=e.value,c=e.setVal,n=e.onSubmit;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(v,{children:[Object(m.jsx)(p,{value:t,onChange:function(e){return c(e.target.value)},placeholder:"Enter your JSON"}),Object(m.jsx)(f,{onClick:n,children:"Add"})]})})},k=function(e){var t=e.rowNum,c=e.label,n=(e.operator,e.value),r=e.checked,a=e.updFilter,l=function(e){var c=e.target.value,n=e.target.name;"checked"===n&&(c=!r),a(t,n,c),"operator"!==n&&"value"!==n||!c||a(t,"checked",!0)};return Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"50%",margin:"0 0 5px 0"},children:[Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"checkbox",onChange:l,name:"checked",checked:r})}),Object(m.jsxs)("div",{style:{width:"10em"},children:[Object(m.jsx)("label",{children:c}),"\xa0"]}),Object(m.jsx)("div",{children:Object(m.jsxs)("select",{name:"operator",onChange:l,children:[Object(m.jsx)("option",{value:"",children:"Select"}),Object(m.jsx)("option",{value:">",children:"Greater"}),Object(m.jsx)("option",{value:">=",children:"Greater & Equal"}),Object(m.jsx)("option",{value:"<",children:"Less"}),Object(m.jsx)("option",{value:"<=",children:"Less & equal"}),Object(m.jsx)("option",{value:"!=",children:"Not equal"}),Object(m.jsx)("option",{value:"==",children:"Equal"})]})}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"text",placeholder:"Value",name:"value",value:n,onChange:l,autoComplete:"off"})})]})},F=function(e){var t=e.filtersList,c=e.updFilter,n=e.addToSearch;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h5",{children:"Filters:"}),Object(m.jsxs)("div",{className:"filters",children:[t.map((function(e,t){return Object(m.jsx)(k,{label:e.label,operator:e.operator,value:e.value,checked:e.checked,rowNum:t,updFilter:c},t)})),Object(m.jsx)("br",{})]}),Object(m.jsx)(f,{onClick:n.bind(null,t),children:"Filter"})]})},S={">":function(e,t){return parseFloat(e)>parseFloat(t)},">=":function(e,t){return parseFloat(e)>=parseFloat(t)},"<":function(e,t){return parseFloat(e)<parseFloat(t)},"<=":function(e,t){return parseFloat(e)<=parseFloat(t)},"!=":function(e,t){return parseFloat(e)!=parseFloat(t)},"==":function(e,t){return parseFloat(e)==parseFloat(t)}},C=function(e){var t=e.stock.filters,c=Object.keys(t);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("th",{children:"StockName"}),c.map((function(e){return Object(m.jsx)("th",{children:e})})),Object(m.jsx)("th",{children:"Matches"}),Object(m.jsx)("th",{children:"Action"})]})},y=function(e){var t=e.stock,c=e.searchParams,n=e.deleteStock,r=e.rowNum,a=t.Name,l=t.filters,i=Object.keys(l),s=0;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("td",{children:a}),i.map((function(e,t){var n=function(e,t){var n=c[e];if(n&&S[n.operator]){var r=S[n.operator](l[e],n.value)?"greenCol":"redCol";return"greenCol"===r&&s++,r}}(e)||"";return Object(m.jsx)("td",{className:n,children:l[e]})})),Object(m.jsx)("td",{children:s}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{onClick:n.bind(null,r),children:"Delete"})})]})},w=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("tr",{children:Object(m.jsx)(y,Object(u.a)({},e))})})},N=function(e){var t=e.stocks,c=e.searchParams,n=e.deleteStock;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("table",{border:"1",children:[Object(m.jsx)("thead",{children:Object(m.jsx)("tr",{children:Object(m.jsx)(C,{stock:t[0]})})}),Object(m.jsx)("tbody",{children:t.map((function(e,t){return Object(m.jsx)(w,{stock:e,searchParams:c,rowNum:t,deleteStock:n})}))}),Object(m.jsx)("thead",{children:Object(m.jsx)("tr",{bold:"1",children:Object(m.jsx)(C,{stock:t[0]})})})]})})},A=function(e){var t=e.precentages;return Object(m.jsx)("table",{style:{width:"10rem",textAlign:"left"},children:t.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.val}),Object(m.jsxs)("td",{children:[Math.round(e.diff),"%"]})]})}))})},L=function(e){var t=e.label,c=Object(i.useState)(""),n=Object(h.a)(c,2),r=n[0],a=n[1],l=Object(i.useState)([]),s=Object(h.a)(l,2),j=s[0],o=s[1],u=r.split(/\s|%/).filter((function(e){return e})).map((function(e){return e.split(",").join("")}));return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{style:{margin:"0 20px 0 0"},children:[Object(m.jsx)("h6",{children:t}),Object(m.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)}}),Object(m.jsx)("button",{onClick:function(){var e=u.reduce((function(e,t,c){var n,r,a={diff:0,val:t};return 0===c?[a]:(a.diff=(n=t,r=u[c-1],(n-r)/r*100),[].concat(Object(b.a)(e),[a]))}),[]);console.log(e),o(e)},children:"Calc"}),Object(m.jsx)(A,{precentages:j})]})})},P=function(){var e=Object(i.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:"Calculate Diff:"}),Object(m.jsx)("button",{onClick:function(){var e=prompt("Enter diff name");e&&n([].concat(Object(b.a)(c),[{CmpName:L,label:e}]))},children:"Add"}),Object(m.jsx)("div",{style:{display:"flex",width:"90%",flexWrap:"wrap"},children:c.map((function(e){var t=e.CmpName,c=e.label;return Object(m.jsx)(t,{label:c})}))})]})},E=x.a.div(l||(l=Object(O.a)(["\nmargin:40px;\nposition:relative;\n"])));var J=function(){var e=Object(i.useState)(""),t=Object(h.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)([]),a=Object(h.a)(r,2),l=a[0],s=a[1],j=Object(i.useState)([]),o=Object(h.a)(j,2),O=o[0],x=o[1],p=Object(i.useState)({}),f=Object(h.a)(p,2),v=f[0],k=f[1],S=Object(i.useState)(0),C=Object(h.a)(S,2),y=C[0],w=C[1];return Object(m.jsxs)(E,{children:[Object(m.jsx)(g,{value:c,setVal:n,onSubmit:function(){try{var e=JSON.parse(c);Array.isArray(e)||(e=[e]),s(e),function(e){if(null===e||void 0===e?void 0:e.length){var t=Object.keys(e[0].filters).map((function(e){return{label:e,value:"",operator:"",checked:!1}}));x(t)}else x([])}(e)}catch(t){alert("Invlaid JSON")}}}),l&&l.length>0&&Object(m.jsx)(F,{filtersList:O,updFilter:function(e,t,c){var n=Object(b.a)(O);n[e][t]=c,x(n)},addToSearch:function(e){var t=0,c=e.reduce((function(e,c){if(c.checked){t++;var n=Object(d.a)({},c.label,{value:c.value,operator:c.operator});return Object(u.a)(Object(u.a)({},e),n)}return e}),{});w(t),k(c)}}),l&&l.length>0&&Object(m.jsxs)("h5",{children:["Filters added: ",y]}),l&&l.length>0&&Object(m.jsx)(N,{stocks:l,searchParams:v,deleteStock:function(e){var t=[].concat(Object(b.a)(l.slice(0,e)),Object(b.a)(l.slice(e+1)));s(t)}}),Object(m.jsx)(P,{})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),r(e),a(e),l(e)}))};o.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root")),q()}},[[27,1,2]]]);
//# sourceMappingURL=main.a521255c.chunk.js.map