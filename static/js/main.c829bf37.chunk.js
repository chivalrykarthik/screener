(this.webpackJsonpscreener=this.webpackJsonpscreener||[]).push([[0],{22:function(e,t,r){},23:function(e,t,r){},27:function(e,t,r){"use strict";r.r(t);var n,a,c,l,s,i,o,j,u=r(1),b=r.n(u),d=r(14),O=r.n(d),h=(r(22),r(3)),v=(r(23),r(4)),p=r(5),x=p.a.textarea(n||(n=Object(v.a)(["\n    height:100px;\n"]))),f=p.a.button(a||(a=Object(v.a)(["\n    width:10%;\n    margin:10px 0 0 0;    \n"]))),g=p.a.div(c||(c=Object(v.a)(["\n    width:100%;\n    display:flex;\n    flex-direction:column;\n"]))),T={ADD_TEXT:"ADD_TEXT",ADD_STOCKS:"ADD_STOCKS",ADD_FILTERS:"ADD_FILTERS",ADD_AVG:"ADD_AVG",ADD_SEARCH:"ADD_SEARCH",UPD_FILTERS:"UPD_FILTERS",UPD_AVG:"UPD_AVG",DELETE_STOCK:"DELETE_STOCK"},k=r(2),D=r(6),F=r(10),A={txt:"",stocks:[],filtersList:[],average:{},searchParams:{},filtersCnt:0},E=function(e,t){var r=t.type,n=t.data;switch(r){case"ADD_TEXT":return Object(k.a)(Object(k.a)({},e),{},{txt:n.txt});case"ADD_STOCKS":var a=function(e){try{var t=JSON.parse(e);return Array.isArray(t)||(t=[t]),t}catch(r){alert("Invlaid JSON")}}(e.txt);return Object(k.a)(Object(k.a)({},e),{},{stocks:a});case"ADD_FILTERS":var c=function(e){return(null===e||void 0===e?void 0:e.length)?Object.keys(e[0].filters).map((function(e){return{label:e,value:"",operator:"",checked:!1}})):[]}(e.stocks);return Object(k.a)(Object(k.a)({},e),{},{filtersList:c});case"ADD_AVG":var l=function(e){if(Array.isArray(e)&&(null===e||void 0===e?void 0:e.length)){var t={};return e.forEach((function(r){var n=r.filters;Object.keys(n).forEach((function(r){var a;t[r]={val:parseFloat((null===(a=t[r])||void 0===a?void 0:a.val)||0)+parseFloat(n[r]||0),len:e.length}}))})),t}}(e.stocks);return Object(k.a)(Object(k.a)({},e),{},{average:l});case"ADD_SEARCH":var s=function(e){var t=0,r=e.reduce((function(e,r){if(r.checked){t++;var n=Object(F.a)({},r.label,{value:r.value,operator:r.operator});return Object(k.a)(Object(k.a)({},e),n)}return e}),{});return{cnt:t,searchObj:r}}(e.filtersList),i=s.cnt,o=s.searchObj;return Object(k.a)(Object(k.a)({},e),{},{searchParams:o,filtersCnt:i});case"UPD_FILTERS":var j=function(e,t,r,n){var a=Object(D.a)(e);return a[t][r]=n,a}(e.filtersList,n.key,n.col,n.value);return Object(k.a)(Object(k.a)({},e),{},{filtersList:j});case"UPD_AVG":var u=function(e){var t=e.updType,r=e.filter,n=e.num,a=e.average,c=parseFloat(n)||0,l=JSON.parse(JSON.stringify(a));return l[r].val="sub"===t?l[r].val-c:parseFloat(l[r].val)+c,l[r].len="sub"===t?l[r].len-1:parseFloat(l[r].len)+1,l}(Object(k.a)(Object(k.a)({},n),{},{average:e.average}));return Object(k.a)(Object(k.a)({},e),{},{average:u});case"DELETE_STOCK":var b=function(e,t){return[].concat(Object(D.a)(t.slice(0,e)),Object(D.a)(t.slice(e+1)))}(n.key,e.stocks);return Object(k.a)(Object(k.a)({},e),{},{stocks:b});default:return e}},y=r(0),m=Object(u.createContext)({}),_=function(e){var t=e.children,r=Object(u.useReducer)(E,A);return Object(y.jsx)(m.Provider,{value:r,children:t})},S=function(){return Object(u.useContext)(m)},C=function(){var e=S(),t=Object(h.a)(e,2),r=t[0],n=t[1],a=r.txt;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(g,{children:[Object(y.jsx)(x,{value:a,onChange:function(e){var t=e.target.value;n({data:{txt:t},type:T.ADD_TEXT})},placeholder:"Enter your JSON"}),Object(y.jsx)(f,{onClick:function(){n({type:T.ADD_STOCKS}),n({type:T.ADD_FILTERS}),n({type:T.ADD_AVG})},children:"Add"})]})})},L=function(e){var t=e.handleChange,r=S(),n=Object(h.a)(r,1)[0];return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("select",{name:"value",onChange:t,children:[Object(y.jsx)("option",{value:"",children:"Select"}),n.filtersList.map((function(e){return Object(y.jsx)("option",{value:e.label,children:e.label})}))]})})},I=function(e){var t=e.rowNum,r=e.label,n=e.value,a=e.checked,c=S(),l=Object(h.a)(c,2),s=l[0],i=l[1],o=Object(u.useState)(!1),j=Object(h.a)(o,2),b=j[0],d=j[1],O=function(e){var n=e.target.value,c=e.target.name;"checked"===c&&(n=!a),"operator"===c&&(d("GT"===n||"LT"===n),i("GTA"===n||"LTA"===n?{type:T.UPD_FILTERS,data:{key:t,col:"value",value:Math.round(s.average[r].val/s.average[r].len)}}:{type:T.UPD_FILTERS,data:{key:t,col:"value",value:""}})),i({type:T.UPD_FILTERS,data:{key:t,col:c,value:n}}),"operator"!==c&&"value"!==c||!n||i({type:T.UPD_FILTERS,data:{key:t,col:"checked",value:!0}})};return Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"50%",margin:"10px"},children:[Object(y.jsx)("div",{children:Object(y.jsx)("input",{type:"checkbox",onChange:O,name:"checked",checked:a})}),Object(y.jsxs)("div",{style:{width:"33%"},children:[Object(y.jsx)("label",{children:r}),"\xa0"]}),Object(y.jsx)("div",{style:{width:"33%"},children:Object(y.jsxs)("select",{name:"operator",onChange:O,children:[Object(y.jsx)("option",{value:"",children:"Select"}),Object(y.jsx)("option",{value:">",children:"Greater"}),Object(y.jsx)("option",{value:">=",children:"Greater & Equal"}),Object(y.jsx)("option",{value:"<",children:"Less"}),Object(y.jsx)("option",{value:"<=",children:"Less & equal"}),Object(y.jsx)("option",{value:"!=",children:"Not equal"}),Object(y.jsx)("option",{value:"==",children:"Equal"}),Object(y.jsx)("option",{value:"GT",children:"Greater than"}),Object(y.jsx)("option",{value:"LT",children:"Less than"}),Object(y.jsx)("option",{value:"GTA",children:"Greater than AVG"}),Object(y.jsx)("option",{value:"LTA",children:"Less than AVG"})]})}),Object(y.jsx)("div",{style:{width:"33%"},children:b?Object(y.jsx)(L,{handleChange:O}):Object(y.jsx)("input",{type:"text",placeholder:"Value",name:"value",value:n,onChange:O,autoComplete:"off"})})]})},G=function(){var e=S(),t=Object(h.a)(e,2),r=t[0],n=t[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h5",{children:"Filters:"}),Object(y.jsxs)("div",{className:"filters",children:[r.filtersList.map((function(e,t){return Object(y.jsx)(I,{label:e.label,operator:e.operator,value:e.value,checked:e.checked,rowNum:t},t)})),Object(y.jsx)("br",{})]}),Object(y.jsx)(f,{onClick:function(){n({type:T.ADD_SEARCH})},children:"Filter"})]})},V={">":function(e,t){return parseFloat(e)>parseFloat(t)},">=":function(e,t){return parseFloat(e)>=parseFloat(t)},"<":function(e,t){return parseFloat(e)<parseFloat(t)},"<=":function(e,t){return parseFloat(e)<=parseFloat(t)},"!=":function(e,t){return parseFloat(e)!=parseFloat(t)},"==":function(e,t){return parseFloat(e)==parseFloat(t)},GT:function(e,t){return parseFloat(e)>=parseFloat(t)},LT:function(e,t){return parseFloat(e)<=parseFloat(t)},GTA:function(e,t){return parseFloat(e)>=parseFloat(t)},LTA:function(e,t){return parseFloat(e)<=parseFloat(t)}},N=(p.a.table(l||(l=Object(v.a)(["\nborder:1px solid;\n"]))),p.a.div(s||(s=Object(v.a)(["\n    background: skyblue;\n    border-radius:50%;\n    font-size:9px;\n"])))),w=(p.a.th(i||(i=Object(v.a)([""]))),p.a.th(o||(o=Object(v.a)([""]))),{ABOVE_NINTY:{background:"green",color:"rgb(255,255,255)"},ABOVE_EIGHTY:{background:"lightgreen",color:"rgb(255,255,255)"},ABOVE_SEVENTY:{background:"skyblue",color:"rgb(255,255,255)"},ABOVE_SIXTY:{background:"orange",color:"rgb(255,255,255)"},ABOVE_FIFTY:{background:"yellow",color:"rgb(255,255,255)"},BELOW_FIFTY:{background:"red",color:"rgb(255,255,255)"}}),P=function(e){var t=e.stock,r=e.average,n=t.filters,a=Object.keys(n);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("th",{children:"StockName"}),a.map((function(e){return Object(y.jsxs)("th",{children:[e,Object(y.jsx)(N,{children:Math.round(r[e].val/r[e].len)})]})})),Object(y.jsx)("th",{children:"Matches"}),Object(y.jsx)("th",{children:"Action"})]})},R=function(e){var t=e.stock,r=e.rowNum,n=S(),a=Object(h.a)(n,2),c=a[0],l=a[1],s=t.Name,i=t.filters,o=Object.keys(i),j=c.filtersCnt,u=0,b=function(e){var t=e.target,r=t.checked,n=t.value,a=t.name;l({type:T.UPD_AVG,data:{updType:r?"sub":"add",filter:a,num:n}})};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("td",{children:s}),o.map((function(e,t){var r=function(e){var t=c.searchParams[e];if(t&&V[t.operator]){var r="LT"===t.operator||"GT"===t.operator?i[t.value]||0:t.value,n=V[t.operator](i[e],r)?"greenCol":"redCol";return"greenCol"===n&&u++,n}}(e)||"";return Object(y.jsxs)("td",{className:r,children:[Object(y.jsx)("input",{type:"checkbox",name:e,value:i[e],onChange:b}),i[e]]})})),Object(y.jsx)("td",{style:function(e){if(!(j<=0)){var t=e/j*100;return t>=90?w.ABOVE_NINTY:t>=80?w.ABOVE_EIGHTY:t>=70?w.ABOVE_SEVENTY:t>=60?w.ABOVE_SIXTY:t>=50?w.ABOVE_FIFTY:w.BELOW_FIFTY}}(u),children:u}),Object(y.jsx)("td",{children:Object(y.jsx)("button",{onClick:function(e){l({type:T.DELETE_STOCK,data:{key:e}})}.bind(null,r),children:"Delete"})})]})},B=function(e){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("tr",{children:Object(y.jsx)(R,Object(k.a)({},e))})})},Y=function(){var e=S(),t=Object(h.a)(e,1)[0];return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("table",{border:"1",children:[Object(y.jsx)("thead",{children:Object(y.jsx)("tr",{children:Object(y.jsx)(P,{average:t.average,stock:t.stocks[0]})})}),Object(y.jsx)("tbody",{children:t.stocks.map((function(e,t){return Object(y.jsx)(B,{stock:e,rowNum:t})}))}),Object(y.jsx)("thead",{children:Object(y.jsx)("tr",{bold:"1",children:Object(y.jsx)(P,{average:t.average,stock:t.stocks[0]})})})]})})},U=function(e){var t=e.precentages;return Object(y.jsx)("table",{style:{width:"10rem",textAlign:"left"},children:t.map((function(e){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.val}),Object(y.jsxs)("td",{children:[Math.round(e.diff),"%"]})]})}))})},K=function(e){var t=e.label,r=Object(u.useState)(""),n=Object(h.a)(r,2),a=n[0],c=n[1],l=Object(u.useState)([]),s=Object(h.a)(l,2),i=s[0],o=s[1],j=a.split(/\s|%/).filter((function(e){return e})).map((function(e){return e.split(",").join("")}));return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{style:{margin:"0 20px 0 0"},children:[Object(y.jsx)("h6",{children:t}),Object(y.jsx)("input",{type:"text",onChange:function(e){return c(e.target.value)}}),Object(y.jsx)("button",{onClick:function(){var e=j.reduce((function(e,t,r){var n,a,c={diff:0,val:t};return 0===r?[c]:(c.diff=(n=t,a=j[r-1],(n-a)/a*100),[].concat(Object(D.a)(e),[c]))}),[]);o(e)},children:"Calc"}),Object(y.jsx)(U,{precentages:i})]})})},J=function(){var e=Object(u.useState)([]),t=Object(h.a)(e,2),r=t[0],n=t[1];return Object(y.jsxs)("div",{children:[Object(y.jsx)("h5",{children:"Calculate Diff:"}),Object(y.jsx)("button",{onClick:function(){var e=prompt("Enter diff name");e&&n([].concat(Object(D.a)(r),[{CmpName:K,label:e}]))},children:"Add"}),Object(y.jsx)("div",{style:{display:"flex",width:"90%",flexWrap:"wrap"},children:r.map((function(e){var t=e.CmpName,r=e.label;return Object(y.jsx)(t,{label:r})}))})]})},H=p.a.div(j||(j=Object(v.a)(["\nmargin:40px;\nposition:relative;\n"])));function X(){var e=S(),t=Object(h.a)(e,1)[0];return Object(y.jsxs)(H,{children:[Object(y.jsx)(C,{}),t.stocks&&t.stocks.length>0&&Object(y.jsx)(G,{}),t.stocks&&t.stocks.length>0&&Object(y.jsxs)("h5",{children:["Filters added: ",t.filtersCnt]}),t.stocks&&t.stocks.length>0&&Object(y.jsx)(Y,{}),Object(y.jsx)(J,{})]})}var M=function(){return Object(y.jsx)(_,{children:Object(y.jsx)(X,{})})},q=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,28)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,l=t.getTTFB;r(e),n(e),a(e),c(e),l(e)}))};O.a.render(Object(y.jsx)(b.a.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root")),q()}},[[27,1,2]]]);
//# sourceMappingURL=main.c829bf37.chunk.js.map