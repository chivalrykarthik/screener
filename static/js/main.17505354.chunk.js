(this.webpackJsonpscreener=this.webpackJsonpscreener||[]).push([[0],{22:function(e,t,r){},23:function(e,t,r){},27:function(e,t,r){"use strict";r.r(t);var n,a,c,l,s,o,i,j,u=r(1),b=r.n(u),d=r(14),O=r.n(d),h=(r(22),r(3)),v=(r(23),r(4)),x=r(5),p=x.a.textarea(n||(n=Object(v.a)(["\n    height:100px;\n"]))),f=x.a.button(a||(a=Object(v.a)(["\n    width:10%;\n    margin:10px 0 0 0;    \n"]))),g=x.a.div(c||(c=Object(v.a)(["\n    width:100%;\n    display:flex;\n    flex-direction:column;\n"]))),k={ADD_TEXT:"ADD_TEXT",ADD_STOCKS:"ADD_STOCKS",ADD_FILTERS:"ADD_FILTERS",ADD_AVG:"ADD_AVG",ADD_SEARCH:"ADD_SEARCH",UPD_FILTERS:"UPD_FILTERS",UPD_AVG:"UPD_AVG",DELETE_STOCK:"DELETE_STOCK"},T=r(2),F=r(6),D=r(10),A={txt:"",stocks:[],filtersList:[],average:{},searchParams:{},filtersCnt:0},E=function(e,t){var r=t.type,n=t.data;switch(r){case"ADD_TEXT":return Object(T.a)(Object(T.a)({},e),{},{txt:n.txt});case"ADD_STOCKS":var a=function(e){try{var t=JSON.parse(e);return Array.isArray(t)||(t=[t]),t}catch(r){alert("Invlaid JSON")}}(e.txt);return Object(T.a)(Object(T.a)({},e),{},{stocks:a});case"ADD_FILTERS":var c=function(e){return(null===e||void 0===e?void 0:e.length)?Object.keys(e[0].filters).map((function(e){return{label:e,value:"",operator:"",checked:!1}})):[]}(e.stocks);return Object(T.a)(Object(T.a)({},e),{},{filtersList:c});case"ADD_AVG":var l=function(e){if(Array.isArray(e)&&(null===e||void 0===e?void 0:e.length)){var t={};return e.forEach((function(e){var r=e.filters;Object.keys(r).forEach((function(e){var n,a,c,l=parseFloat((null===(n=t[e])||void 0===n?void 0:n.val)||0)+parseFloat(r[e]||0),s=""!=r[e]?((null===(a=t[e])||void 0===a?void 0:a.len)||0)+1:null===(c=t[e])||void 0===c?void 0:c.len;t[e]={val:l,len:s}}))})),t}}(e.stocks);return Object(T.a)(Object(T.a)({},e),{},{average:l});case"ADD_SEARCH":var s=function(e){var t=0,r=e.reduce((function(e,r){if(r.checked){t++;var n=Object(D.a)({},r.label,{value:r.value,operator:r.operator});return Object(T.a)(Object(T.a)({},e),n)}return e}),{});return{cnt:t,searchObj:r}}(e.filtersList),o=s.cnt,i=s.searchObj;return Object(T.a)(Object(T.a)({},e),{},{searchParams:i,filtersCnt:o});case"UPD_FILTERS":var j=function(e,t,r,n){var a=Object(F.a)(e);return a[t][r]=n,a}(e.filtersList,n.key,n.col,n.value);return Object(T.a)(Object(T.a)({},e),{},{filtersList:j});case"UPD_AVG":var u=function(e){var t=e.updType,r=e.filter,n=e.num,a=e.average,c=parseFloat(n)||0,l=JSON.parse(JSON.stringify(a));return l[r].val="sub"===t?l[r].val-c:parseFloat(l[r].val)+c,l[r].len="sub"===t?l[r].len-1:parseFloat(l[r].len)+1,l}(Object(T.a)(Object(T.a)({},n),{},{average:e.average}));return Object(T.a)(Object(T.a)({},e),{},{average:u});case"DELETE_STOCK":var b=function(e,t){return[].concat(Object(F.a)(t.slice(0,e)),Object(F.a)(t.slice(e+1)))}(n.key,e.stocks);return Object(T.a)(Object(T.a)({},e),{},{stocks:b});default:return e}},m=r(0),y=Object(u.createContext)({}),_=function(e){var t=e.children,r=Object(u.useReducer)(E,A);return Object(m.jsx)(y.Provider,{value:r,children:t})},C=function(){return Object(u.useContext)(y)},S=function(){var e=C(),t=Object(h.a)(e,2),r=t[0],n=t[1],a=r.txt;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(g,{children:[Object(m.jsx)(p,{value:a,onChange:function(e){var t=e.target.value;n({data:{txt:t},type:k.ADD_TEXT})},placeholder:"Enter your JSON"}),Object(m.jsx)(f,{onClick:function(){n({type:k.ADD_STOCKS}),n({type:k.ADD_FILTERS}),n({type:k.ADD_AVG})},children:"Add"})]})})},L=function(e){var t=e.handleChange,r=C(),n=Object(h.a)(r,1)[0];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("select",{name:"value",onChange:t,children:[Object(m.jsx)("option",{value:"",children:"Select"}),n.filtersList.map((function(e){return Object(m.jsx)("option",{value:e.label,children:e.label})}))]})})},I=function(e){var t=e.rowNum,r=e.label,n=e.value,a=e.checked,c=C(),l=Object(h.a)(c,2),s=l[0],o=l[1],i=Object(u.useState)(!1),j=Object(h.a)(i,2),b=j[0],d=j[1],O=function(e){var n=e.target.value,c=e.target.name;"checked"===c&&(n=!a),"operator"===c&&(d("GT"===n||"LT"===n),o("GTA"===n||"LTA"===n?{type:k.UPD_FILTERS,data:{key:t,col:"value",value:Math.round(s.average[r].val/s.average[r].len)}}:{type:k.UPD_FILTERS,data:{key:t,col:"value",value:""}})),o({type:k.UPD_FILTERS,data:{key:t,col:c,value:n}}),"operator"!==c&&"value"!==c||!n||o({type:k.UPD_FILTERS,data:{key:t,col:"checked",value:!0}})};return Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"50%",margin:"10px"},children:[Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"checkbox",onChange:O,name:"checked",checked:a})}),Object(m.jsxs)("div",{style:{width:"33%"},children:[Object(m.jsx)("label",{children:r}),"\xa0"]}),Object(m.jsx)("div",{style:{width:"33%"},children:Object(m.jsxs)("select",{name:"operator",onChange:O,children:[Object(m.jsx)("option",{value:"",children:"Select"}),Object(m.jsx)("option",{value:">",children:"Greater"}),Object(m.jsx)("option",{value:">=",children:"Greater & Equal"}),Object(m.jsx)("option",{value:"<",children:"Less"}),Object(m.jsx)("option",{value:"<=",children:"Less & equal"}),Object(m.jsx)("option",{value:"!=",children:"Not equal"}),Object(m.jsx)("option",{value:"==",children:"Equal"}),Object(m.jsx)("option",{value:"GT",children:"Greater than"}),Object(m.jsx)("option",{value:"LT",children:"Less than"}),Object(m.jsx)("option",{value:"GTA",children:"Greater than AVG"}),Object(m.jsx)("option",{value:"LTA",children:"Less than AVG"})]})}),Object(m.jsx)("div",{style:{width:"33%"},children:b?Object(m.jsx)(L,{handleChange:O}):Object(m.jsx)("input",{type:"text",placeholder:"Value",name:"value",value:n,onChange:O,autoComplete:"off"})})]})},G=function(){var e=C(),t=Object(h.a)(e,2),r=t[0],n=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h5",{children:"Filters:"}),Object(m.jsxs)("div",{className:"filters",children:[r.filtersList.map((function(e,t){return Object(m.jsx)(I,{label:e.label,operator:e.operator,value:e.value,checked:e.checked,rowNum:t},t)})),Object(m.jsx)("br",{})]}),Object(m.jsx)(f,{onClick:function(){n({type:k.ADD_SEARCH})},children:"Filter"})]})},V={">":function(e,t){return parseFloat(e)>parseFloat(t)},">=":function(e,t){return parseFloat(e)>=parseFloat(t)},"<":function(e,t){return parseFloat(e)<parseFloat(t)},"<=":function(e,t){return parseFloat(e)<=parseFloat(t)},"!=":function(e,t){return parseFloat(e)!=parseFloat(t)},"==":function(e,t){return parseFloat(e)==parseFloat(t)},GT:function(e,t){return parseFloat(e)>=parseFloat(t)},LT:function(e,t){return parseFloat(e)<=parseFloat(t)},GTA:function(e,t){return parseFloat(e)>=parseFloat(t)},LTA:function(e,t){return parseFloat(e)<=parseFloat(t)}},N=(x.a.table(l||(l=Object(v.a)(["\nborder:1px solid;\n"]))),x.a.div(s||(s=Object(v.a)(["\n    background: skyblue;\n    border-radius:50%;\n    font-size:9px;\n"])))),w=(x.a.th(o||(o=Object(v.a)([""]))),x.a.th(i||(i=Object(v.a)([""]))),{ABOVE_NINTY:{background:"green",color:"rgb(255,255,255)"},ABOVE_EIGHTY:{background:"lightgreen",color:"rgb(255,255,255)"},ABOVE_SEVENTY:{background:"skyblue",color:"rgb(255,255,255)"},ABOVE_SIXTY:{background:"orange",color:"rgb(255,255,255)"},ABOVE_FIFTY:{background:"yellow",color:"rgb(255,255,255)"},BELOW_FIFTY:{background:"red",color:"rgb(255,255,255)"}}),P=function(e){var t=e.stock,r=e.average,n=t.filters,a=Object.keys(n);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("th",{children:"StockName"}),a.map((function(e){return Object(m.jsxs)("th",{children:[e,Object(m.jsx)(N,{children:Math.round(r[e].val/r[e].len)})]})})),Object(m.jsx)("th",{children:"Matches"}),Object(m.jsx)("th",{children:"Action"})]})},R=function(e){var t=e.name,r=e.value,n=e.onChange,a=""===r,c=Object(u.useState)(a),l=Object(h.a)(c,2),s=l[0],o=l[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("input",{type:"checkbox",name:t,value:r,onChange:function(e){o(!s),n(e)},checked:s})})},B=function(e){var t=e.stock,r=e.rowNum,n=C(),a=Object(h.a)(n,2),c=a[0],l=a[1],s=t.Name,o=t.filters,i=Object.keys(o),j=c.filtersCnt,u=0,b=function(e){var t=e.target,r=t.checked,n=t.value,a=t.name;l({type:k.UPD_AVG,data:{updType:r?"sub":"add",filter:a,num:n}})};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("td",{children:s}),i.map((function(e,t){var r=function(e){var t=c.searchParams[e];if(t&&V[t.operator]){var r="LT"===t.operator||"GT"===t.operator?o[t.value]||0:t.value,n=V[t.operator](o[e],r)?"greenCol":"redCol";return"greenCol"===n&&u++,n}}(e)||"";return Object(m.jsxs)("td",{className:r,children:[Object(m.jsx)(R,{name:e,value:o[e],onChange:b}),o[e]]})})),Object(m.jsx)("td",{style:function(e){if(!(j<=0)){var t=e/j*100;return t>=90?w.ABOVE_NINTY:t>=80?w.ABOVE_EIGHTY:t>=70?w.ABOVE_SEVENTY:t>=60?w.ABOVE_SIXTY:t>=50?w.ABOVE_FIFTY:w.BELOW_FIFTY}}(u),children:u}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{onClick:function(e){l({type:k.DELETE_STOCK,data:{key:e}})}.bind(null,r),children:"Delete"})})]})},Y=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("tr",{children:Object(m.jsx)(B,Object(T.a)({},e))})})},U=function(){var e=C(),t=Object(h.a)(e,1)[0];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("table",{border:"1",children:[Object(m.jsx)("thead",{children:Object(m.jsx)("tr",{children:Object(m.jsx)(P,{average:t.average,stock:t.stocks[0]})})}),Object(m.jsx)("tbody",{children:t.stocks.map((function(e,t){return Object(m.jsx)(Y,{stock:e,rowNum:t})}))}),Object(m.jsx)("thead",{children:Object(m.jsx)("tr",{bold:"1",children:Object(m.jsx)(P,{average:t.average,stock:t.stocks[0]})})})]})})},K=function(e){var t=e.precentages;return Object(m.jsx)("table",{style:{width:"10rem",textAlign:"left"},children:t.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.val}),Object(m.jsxs)("td",{children:[Math.round(e.diff),"%"]})]})}))})},J=function(e){var t=e.label,r=Object(u.useState)(""),n=Object(h.a)(r,2),a=n[0],c=n[1],l=Object(u.useState)([]),s=Object(h.a)(l,2),o=s[0],i=s[1],j=a.split(/\s|%/).filter((function(e){return e})).map((function(e){return e.split(",").join("")}));return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{style:{margin:"0 20px 0 0"},children:[Object(m.jsx)("h6",{children:t}),Object(m.jsx)("input",{type:"text",onChange:function(e){return c(e.target.value)}}),Object(m.jsx)("button",{onClick:function(){var e=j.reduce((function(e,t,r){var n,a,c={diff:0,val:t};return 0===r?[c]:(c.diff=(n=t,a=j[r-1],(n-a)/a*100),[].concat(Object(F.a)(e),[c]))}),[]);i(e)},children:"Calc"}),Object(m.jsx)(K,{precentages:o})]})})},H=function(){var e=Object(u.useState)([]),t=Object(h.a)(e,2),r=t[0],n=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:"Calculate Diff:"}),Object(m.jsx)("button",{onClick:function(){var e=prompt("Enter diff name");e&&n([].concat(Object(F.a)(r),[{CmpName:J,label:e}]))},children:"Add"}),Object(m.jsx)("div",{style:{display:"flex",width:"90%",flexWrap:"wrap"},children:r.map((function(e){var t=e.CmpName,r=e.label;return Object(m.jsx)(t,{label:r})}))})]})},X=x.a.div(j||(j=Object(v.a)(["\nmargin:40px;\nposition:relative;\n"])));function M(){var e=C(),t=Object(h.a)(e,1)[0];return Object(m.jsxs)(X,{children:[Object(m.jsx)(S,{}),t.stocks&&t.stocks.length>0&&Object(m.jsx)(G,{}),t.stocks&&t.stocks.length>0&&Object(m.jsxs)("h5",{children:["Filters added: ",t.filtersCnt]}),t.stocks&&t.stocks.length>0&&Object(m.jsx)(U,{}),Object(m.jsx)(H,{})]})}var q=function(){return Object(m.jsx)(_,{children:Object(m.jsx)(M,{})})},W=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,28)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,l=t.getTTFB;r(e),n(e),a(e),c(e),l(e)}))};O.a.render(Object(m.jsx)(b.a.StrictMode,{children:Object(m.jsx)(q,{})}),document.getElementById("root")),W()}},[[27,1,2]]]);
//# sourceMappingURL=main.17505354.chunk.js.map