(this.webpackJsonpscreener=this.webpackJsonpscreener||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r,a,c,l,i,s,o,j,u,b=n(1),O=n.n(b),d=n(14),h=n.n(d),v=(n(22),n(3)),f=(n(23),n(4)),x=n(5),p=x.a.textarea(r||(r=Object(f.a)(["\n    height:100px;\n"]))),g=x.a.button(a||(a=Object(f.a)(["\n    width:10%;\n    margin:10px 0 0 0;    \n"]))),A=x.a.div(c||(c=Object(f.a)(["\n    width:100%;\n    display:flex;\n    flex-direction:column;\n"]))),D=x.a.div(l||(l=Object(f.a)(["\nmargin: 5px 0 0 0;\ninput{\n    margin:0 5px 0 5px;\n}\nlabel{\n    font-weight:bold;\n    font-size:0.9rem;\n}\n\n"]))),_={ADD_TEXT:"ADD_TEXT",ADD_STOCKS:"ADD_STOCKS",ADD_FILTERS:"ADD_FILTERS",ADD_AVG:"ADD_AVG",ADD_SEARCH:"ADD_SEARCH",UPD_FILTERS:"UPD_FILTERS",UPD_AVG:"UPD_AVG",DELETE_STOCK:"DELETE_STOCK",UPD_HIGH_AVG:"UPD_HIGH_AVG",UPD_LOW_AVG:"UPD_LOW_AVG",UPD_MAX_PER:"UPD_MAX_PER",UPD_STOCKS:"UPD_STOCKS"},m=n(7),k=n(2),T=n(6),E=function(e,t){return(e-t)/t*100},F=function(e){return e.reduce((function(t,n,r){var a={diff:0,val:n};return 0===r?[a]:(a.diff=E(n,e[r-1]),[].concat(Object(T.a)(t),[a]))}),[])},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;e.sort((function(e,t){return e-t}));var a=e.length,c=Math.ceil(a/100*t),l=e.slice(0,c).reverse(),i=e.slice(a-c),s=F(l),o=F(i),j=s.findIndex((function(e){return e.diff>r})),u=o.findIndex((function(e){return e.diff>n})),b=[].concat(Object(T.a)(j>-1?l.slice(j):[]),Object(T.a)(u>-1?i.slice(u):[]));return b},S={txt:"",highAvg:100,lowAvg:100,maxPer:10,stocks:[],filtersList:[],average:{},searchParams:{},filtersCnt:0},C=function(e,t){var n,r=t.type,a=t.data;switch(r){case"ADD_TEXT":return Object(k.a)(Object(k.a)({},e),{},{txt:a.txt});case"ADD_STOCKS":var c=function(e){try{var t=JSON.parse(e);return Array.isArray(t)||(t=[t]),t}catch(n){alert("Invlaid JSON")}}(e.txt);return Object(k.a)(Object(k.a)({},e),{},(n={stocks:c,filtersList:[]},Object(m.a)(n,"filtersList",[]),Object(m.a)(n,"average",{}),Object(m.a)(n,"searchParams",{}),Object(m.a)(n,"filtersCnt",0),n));case"ADD_FILTERS":var l=function(e){return(null===e||void 0===e?void 0:e.length)?Object.keys(e[0].filters).map((function(e){return{label:e,value:"",operator:"",checked:!1,exclude:[]}})):[]}(e.stocks);return Object(k.a)(Object(k.a)({},e),{},{filtersList:l});case"ADD_AVG":var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;if(Array.isArray(e)&&(null===e||void 0===e?void 0:e.length)){var a={},c={};return e.forEach((function(e){var t=e.filters;Object.keys(t).forEach((function(e){var n,r,l,i=parseFloat((null===(n=a[e])||void 0===n?void 0:n.val)||0)+parseFloat(t[e]||0),s=""!=t[e]?((null===(r=a[e])||void 0===r?void 0:r.len)||0)+1:null===(l=a[e])||void 0===l?void 0:l.len;""!=t[e]&&(c[e]=(c[e]||[]).concat(parseFloat(t[e]))),a[e]={val:i,len:s}}))})),Object.keys(c).forEach((function(e){c[e].sort((function(e,t){return e-t}));var l=y(c[e],t,n,r);l.forEach((function(t){a[e].val-=t,a[e].len--})),a[e].rm=l})),a}}(e.stocks,e.maxPer,e.highAvg,e.lowAvg);return Object(k.a)(Object(k.a)({},e),{},{average:i});case"ADD_SEARCH":var s=function(e){var t=0,n=e.reduce((function(e,n){if(n.checked){t++;var r=Object(m.a)({},n.label,{value:n.value,operator:n.operator});return Object(k.a)(Object(k.a)({},e),r)}return e}),{});return{cnt:t,searchObj:n}}(e.filtersList),o=s.cnt,j=s.searchObj;return Object(k.a)(Object(k.a)({},e),{},{searchParams:j,filtersCnt:o});case"UPD_FILTERS":var u=function(e,t,n,r){var a=Object(T.a)(e);return a[t][n]=r,a}(e.filtersList,a.key,a.col,a.value);return Object(k.a)(Object(k.a)({},e),{},{filtersList:u});case"UPD_AVG":var b=function(e){var t=e.updType,n=e.filter,r=e.num,a=e.average,c=parseFloat(r)||0,l=JSON.parse(JSON.stringify(a));return l[n].val="sub"===t?l[n].val-c:parseFloat(l[n].val)+c,l[n].len="sub"===t?l[n].len-1:parseFloat(l[n].len)+1,l}(Object(k.a)(Object(k.a)({},a),{},{average:e.average}));return Object(k.a)(Object(k.a)({},e),{},{average:b});case"DELETE_STOCK":var O=function(e,t){return[].concat(Object(T.a)(t.slice(0,e)),Object(T.a)(t.slice(e+1)))}(a.key,e.stocks);return Object(k.a)(Object(k.a)({},e),{},{stocks:O});case"UPD_HIGH_AVG":return Object(k.a)(Object(k.a)({},e),{},{highAvg:a.value});case"UPD_LOW_AVG":return Object(k.a)(Object(k.a)({},e),{},{lowAvg:a.value});case"UPD_MAX_PER":return Object(k.a)(Object(k.a)({},e),{},{maxPer:a.value});case"UPD_STOCKS":return Object(k.a)(Object(k.a)({},e),{},{stocks:a.stocks});default:return e}},L=n(0),P=Object(b.createContext)({}),G=function(e){var t=e.children,n=Object(b.useReducer)(C,S);return Object(L.jsx)(P.Provider,{value:n,children:t})},V=function(){return Object(b.useContext)(P)},I=function(){var e=V(),t=Object(v.a)(e,2),n=t[0],r=t[1],a=n.txt,c=function(e){var t=e.target.value,n=e.target.name;r({data:{value:t},type:"highAvg"===n?_.UPD_HIGH_AVG:"maxPer"===n?_.UPD_MAX_PER:_.UPD_LOW_AVG})};return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(A,{children:[Object(L.jsx)(p,{value:a,onChange:function(e){var t=e.target.value;r({data:{txt:t},type:_.ADD_TEXT})},placeholder:"Enter your JSON"}),Object(L.jsxs)(D,{children:[Object(L.jsx)("label",{children:"HighAvg"}),Object(L.jsx)("input",{type:"text",name:"highAvg",value:n.highAvg,onChange:c}),Object(L.jsx)("label",{children:"LowAvg"}),Object(L.jsx)("input",{type:"text",name:"lowAvg",value:n.lowAvg,onChange:c}),Object(L.jsx)("label",{children:"Diff"}),Object(L.jsx)("input",{type:"text",name:"maxPer",value:n.maxPer,onChange:c})]}),Object(L.jsx)(g,{onClick:function(){r({type:_.ADD_STOCKS}),r({type:_.ADD_FILTERS}),r({type:_.ADD_AVG})},children:"Add"})]})})},U=function(e){var t=e.handleChange,n=V(),r=Object(v.a)(n,1)[0];return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("select",{name:"value",onChange:t,children:[Object(L.jsx)("option",{value:"",children:"Select"}),r.filtersList.map((function(e){return Object(L.jsx)("option",{value:e.label,children:e.label})}))]})})},w=function(e){var t=e.rowNum,n=e.label,r=e.value,a=e.checked,c=V(),l=Object(v.a)(c,2),i=l[0],s=l[1],o=Object(b.useState)(!1),j=Object(v.a)(o,2),u=j[0],O=j[1],d=function(e){var r=e.target.value,c=e.target.name;"checked"===c&&(r=!a),"operator"===c&&(O("GT"===r||"LT"===r),s("GTA"===r||"LTA"===r?{type:_.UPD_FILTERS,data:{key:t,col:"value",value:Math.round(i.average[n].val/i.average[n].len)}}:{type:_.UPD_FILTERS,data:{key:t,col:"value",value:""}})),s({type:_.UPD_FILTERS,data:{key:t,col:c,value:r}}),"operator"!==c&&"value"!==c||!r||s({type:_.UPD_FILTERS,data:{key:t,col:"checked",value:!0}})};return Object(L.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"50%",margin:"10px"},children:[Object(L.jsx)("div",{children:Object(L.jsx)("input",{type:"checkbox",onChange:d,name:"checked",checked:a})}),Object(L.jsxs)("div",{style:{width:"33%"},children:[Object(L.jsx)("label",{children:n}),"\xa0"]}),Object(L.jsx)("div",{style:{width:"33%"},children:Object(L.jsxs)("select",{name:"operator",onChange:d,children:[Object(L.jsx)("option",{value:"",children:"Select"}),Object(L.jsx)("option",{value:">",children:"Greater"}),Object(L.jsx)("option",{value:">=",children:"Greater & Equal"}),Object(L.jsx)("option",{value:"<",children:"Less"}),Object(L.jsx)("option",{value:"<=",children:"Less & equal"}),Object(L.jsx)("option",{value:"!=",children:"Not equal"}),Object(L.jsx)("option",{value:"==",children:"Equal"}),Object(L.jsx)("option",{value:"GT",children:"Greater than"}),Object(L.jsx)("option",{value:"LT",children:"Less than"}),Object(L.jsx)("option",{value:"GTA",children:"Greater than AVG"}),Object(L.jsx)("option",{value:"LTA",children:"Less than AVG"})]})}),Object(L.jsx)("div",{style:{width:"33%"},children:u?Object(L.jsx)(U,{handleChange:d}):Object(L.jsx)("input",{type:"text",placeholder:"Value",name:"value",value:r,onChange:d,autoComplete:"off"})})]})},N=function(){var e=V(),t=Object(v.a)(e,2),n=t[0],r=t[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("h5",{children:"Filters:"}),Object(L.jsxs)("div",{className:"filters",children:[n.filtersList.map((function(e,t){return Object(L.jsx)(w,{label:e.label,operator:e.operator,value:e.value,checked:e.checked,rowNum:t},t)})),Object(L.jsx)("br",{})]}),Object(L.jsx)(g,{onClick:function(){r({type:_.ADD_SEARCH})},children:"Filter"})]})},R={">":function(e,t){return parseFloat(e)>parseFloat(t)},">=":function(e,t){return parseFloat(e)>=parseFloat(t)},"<":function(e,t){return parseFloat(e)<parseFloat(t)&&e>=0},"<=":function(e,t){return parseFloat(e)<=parseFloat(t)&&e>=0},"!=":function(e,t){return parseFloat(e)!=parseFloat(t)},"==":function(e,t){return parseFloat(e)==parseFloat(t)},GT:function(e,t){return parseFloat(e)>=parseFloat(t)},LT:function(e,t){return parseFloat(e)<=parseFloat(t)},GTA:function(e,t){return parseFloat(e)>=parseFloat(t)},LTA:function(e,t){return parseFloat(e)<=parseFloat(t)&&e>=0}},H=(x.a.table(i||(i=Object(f.a)(["\nborder:1px solid;\n"]))),x.a.div(s||(s=Object(f.a)(["\n    background: skyblue;\n    border-radius:50%;\n    font-size:9px;\n"])))),B=(x.a.th(o||(o=Object(f.a)([""]))),x.a.th(j||(j=Object(f.a)([""]))),{ABOVE_NINTY:{background:"green",color:"rgb(255,255,255)"},ABOVE_EIGHTY:{background:"lightgreen",color:"rgb(255,255,255)"},ABOVE_SEVENTY:{background:"skyblue",color:"rgb(255,255,255)"},ABOVE_SIXTY:{background:"orange",color:"rgb(255,255,255)"},ABOVE_FIFTY:{background:"yellow",color:"rgb(255,255,255)"},BELOW_FIFTY:{background:"red",color:"rgb(255,255,255)"}}),K=function(e){var t=e.stocks,n=e.average,r=V(),a=Object(v.a)(r,2)[1],c=Object(b.useState)(!1),l=Object(v.a)(c,2),i=l[0],s=l[1],o=t[0].filters,j=Object.keys(o),u=function(e){var n=JSON.parse(JSON.stringify(t));n.sort((function(t,n){return i?n.filters[e]-t.filters[e]:t.filters[e]-n.filters[e]})),s(!i),a({type:_.UPD_STOCKS,data:{stocks:n}})};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("th",{children:"StockName"}),j.map((function(e){return Object(L.jsxs)("th",{onClick:u.bind(null,e),children:[e,Object(L.jsx)(H,{children:Math.round(n[e].val/n[e].len)})]})})),Object(L.jsx)("th",{children:"Matches"}),Object(L.jsx)("th",{children:"Action"})]})},Y=function(e){var t=e.name,n=e.value,r=e.onChange,a=V(),c=Object(v.a)(a,1)[0].average[t].rm,l=!(""!==n&&!c.includes(parseFloat(n))),i=Object(b.useState)(l),s=Object(v.a)(i,2),o=s[0],j=s[1];Object(b.useEffect)((function(){var e=!(""!==n&&!c.includes(parseFloat(n)));j(e)}),Object(T.a)(c));return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("input",{type:"checkbox",name:t,value:n,onChange:function(e){j(!o),r(e)},checked:o})})},M=function(e){var t=e.stock,n=e.rowNum,r=V(),a=Object(v.a)(r,2),c=a[0],l=a[1],i=t.Name,s=t.filters,o=Object.keys(s),j=c.filtersCnt,u=0,b=function(e){var t=e.target,n=t.checked,r=t.value,a=t.name;l({type:_.UPD_AVG,data:{updType:n?"sub":"add",filter:a,num:r}})};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("td",{children:i}),o.map((function(e,t){var n=function(e){var t=c.searchParams[e];if(t&&R[t.operator]){var n="LT"===t.operator||"GT"===t.operator?s[t.value]||0:t.value,r=R[t.operator](s[e],n)?"greenCol":"redCol";return"greenCol"===r&&u++,r}}(e)||"";return Object(L.jsxs)("td",{className:n,children:[Object(L.jsx)(Y,{name:e,value:s[e],onChange:b}),s[e]]})})),Object(L.jsx)("td",{style:function(e){if(!(j<=0)){var t=e/j*100;return t>=90?B.ABOVE_NINTY:t>=80?B.ABOVE_EIGHTY:t>=70?B.ABOVE_SEVENTY:t>=60?B.ABOVE_SIXTY:t>=50?B.ABOVE_FIFTY:B.BELOW_FIFTY}}(u),children:u}),Object(L.jsx)("td",{children:Object(L.jsx)("button",{onClick:function(e){l({type:_.DELETE_STOCK,data:{key:e}}),l({type:_.ADD_AVG})}.bind(null,n),children:"Delete"})})]})},X=function(e){return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("tr",{children:Object(L.jsx)(M,Object(k.a)({},e))})})},J=function(){var e=V(),t=Object(v.a)(e,1)[0];return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("table",{border:"1",children:[Object(L.jsx)("thead",{children:Object(L.jsx)("tr",{children:Object(L.jsx)(K,{average:t.average,stocks:t.stocks})})}),Object(L.jsx)("tbody",{children:t.stocks.map((function(e,t){return Object(L.jsx)(X,{stock:e,rowNum:t})}))}),Object(L.jsx)("thead",{children:Object(L.jsx)("tr",{bold:"1",children:Object(L.jsx)(K,{average:t.average,stocks:t.stocks})})})]})})},W=function(e){var t=e.precentages;return Object(L.jsx)("table",{style:{width:"10rem",textAlign:"left"},children:t.map((function(e){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:e.val}),Object(L.jsxs)("td",{children:[Math.round(e.diff),"%"]})]})}))})},q=function(e){var t=e.label,n=Object(b.useState)(""),r=Object(v.a)(n,2),a=r[0],c=r[1],l=Object(b.useState)([]),i=Object(v.a)(l,2),s=i[0],o=i[1],j=a.split(/\s|%/).filter((function(e){return e})).map((function(e){return e.split(",").join("")}));return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("div",{style:{margin:"0 20px 0 0"},children:[Object(L.jsx)("h6",{children:t}),Object(L.jsx)("input",{type:"text",onChange:function(e){return c(e.target.value)}}),Object(L.jsx)("button",{onClick:function(){var e=j.reduce((function(e,t,n){var r={diff:0,val:t};return 0===n?[r]:(r.diff=E(t,j[n-1]),[].concat(Object(T.a)(e),[r]))}),[]);o(e)},children:"Calc"}),Object(L.jsx)(W,{precentages:s})]})})},z=function(){var e=Object(b.useState)([]),t=Object(v.a)(e,2),n=t[0],r=t[1];return Object(L.jsxs)("div",{children:[Object(L.jsx)("h5",{children:"Calculate Diff:"}),Object(L.jsx)("button",{onClick:function(){var e=prompt("Enter diff name");e&&r([].concat(Object(T.a)(n),[{CmpName:q,label:e}]))},children:"Add"}),Object(L.jsx)("div",{style:{display:"flex",width:"90%",flexWrap:"wrap"},children:n.map((function(e){var t=e.CmpName,n=e.label;return Object(L.jsx)(t,{label:n})}))})]})},Q=x.a.div(u||(u=Object(f.a)(["\nmargin:40px;\nposition:relative;\n"])));function Z(){var e=V(),t=Object(v.a)(e,1)[0];return Object(L.jsxs)(Q,{children:[Object(L.jsx)(I,{}),t.stocks&&t.stocks.length>0&&Object(L.jsx)(N,{}),t.stocks&&t.stocks.length>0&&Object(L.jsxs)("h5",{children:["Filters added: ",t.filtersCnt]}),t.stocks&&t.stocks.length>0&&Object(L.jsx)(J,{}),Object(L.jsx)(z,{})]})}var $=function(){return Object(L.jsx)(G,{children:Object(L.jsx)(Z,{})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),r(e),a(e),c(e),l(e)}))};h.a.render(Object(L.jsx)(O.a.StrictMode,{children:Object(L.jsx)($,{})}),document.getElementById("root")),ee()}},[[27,1,2]]]);
//# sourceMappingURL=main.5620f4e8.chunk.js.map