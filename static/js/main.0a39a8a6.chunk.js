(this.webpackJsonpscreener=this.webpackJsonpscreener||[]).push([[0],[,,,,,,,function(e,t,r){"use strict";t.a={ADD_TEXT:"ADD_TEXT",ADD_STOCKS:"ADD_STOCKS",ADD_FILTERS:"ADD_FILTERS",ADD_AVG:"ADD_AVG",ADD_SEARCH:"ADD_SEARCH",UPD_FILTERS:"UPD_FILTERS",UPD_AVG:"UPD_AVG",DELETE_STOCK:"DELETE_STOCK",UPD_HIGH_AVG:"UPD_HIGH_AVG",UPD_LOW_AVG:"UPD_LOW_AVG",UPD_MAX_PER:"UPD_MAX_PER",UPD_STOCKS:"UPD_STOCKS",ADD_TO_COMPARE:"ADD_TO_COMPARE"}},function(e,t,r){"use strict";r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return O}));var n=r(2),c=r(11),a=r(3),s=r(9),i={txt:"",highAvg:100,lowAvg:100,maxPer:10,stocks:[],filtersList:[],average:{},searchParams:{},filtersCnt:0,compare:[]},o=function(e,t){var r,n=t.type,i=t.data;switch(n){case"ADD_TEXT":return Object(a.a)(Object(a.a)({},e),{},{txt:i.txt});case"ADD_STOCKS":var o=Object(s.f)(e.txt);return Object(a.a)(Object(a.a)({},e),{},(r={stocks:o,filtersList:[]},Object(c.a)(r,"filtersList",[]),Object(c.a)(r,"average",{}),Object(c.a)(r,"searchParams",{}),Object(c.a)(r,"filtersCnt",0),r));case"ADD_FILTERS":var l=Object(s.b)(e.stocks);return Object(a.a)(Object(a.a)({},e),{},{filtersList:l});case"ADD_AVG":var j=Object(s.e)(e.stocks,e.maxPer,e.highAvg,e.lowAvg);return Object(a.a)(Object(a.a)({},e),{},{average:j});case"ADD_SEARCH":var _=Object(s.a)(e.filtersList),O=_.cnt,b=_.searchObj;return Object(a.a)(Object(a.a)({},e),{},{searchParams:b,filtersCnt:O});case"UPD_FILTERS":var u=Object(s.h)(e.filtersList,i.key,i.col,i.value);return Object(a.a)(Object(a.a)({},e),{},{filtersList:u});case"UPD_AVG":var d=Object(s.g)(Object(a.a)(Object(a.a)({},i),{},{average:e.average}));return Object(a.a)(Object(a.a)({},e),{},{average:d});case"DELETE_STOCK":var h=Object(s.c)(i.key,e.stocks);return Object(a.a)(Object(a.a)({},e),{},{stocks:h});case"UPD_HIGH_AVG":return Object(a.a)(Object(a.a)({},e),{},{highAvg:i.value});case"UPD_LOW_AVG":return Object(a.a)(Object(a.a)({},e),{},{lowAvg:i.value});case"UPD_MAX_PER":return Object(a.a)(Object(a.a)({},e),{},{maxPer:i.value});case"UPD_STOCKS":return Object(a.a)(Object(a.a)({},e),{},{stocks:i.stocks});case"ADD_TO_COMPARE":return Object(a.a)(Object(a.a)({},e),{},{compare:i.compare});default:return e}},l=r(0),j=Object(n.createContext)({}),_=function(e){var t=e.children,r=Object(n.useReducer)(o,i);return Object(l.jsx)(j.Provider,{value:r,children:t})},O=function(){return Object(n.useContext)(j)}},function(e,t,r){"use strict";r.d(t,"f",(function(){return s})),r.d(t,"b",(function(){return i})),r.d(t,"e",(function(){return o})),r.d(t,"a",(function(){return l})),r.d(t,"h",(function(){return j})),r.d(t,"g",(function(){return _})),r.d(t,"c",(function(){return O})),r.d(t,"d",(function(){return b}));var n=r(1),c=r(3),a=r(11),s=function(e){try{var t=JSON.parse(e);return Array.isArray(t)||(t=[t]),t}catch(r){alert("Invlaid JSON")}},i=function(e){return(null===e||void 0===e?void 0:e.length)?Object.keys(e[0].filters).map((function(e){return{label:e,value:"",operator:"",checked:!1,exclude:[]}})):[]},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;if(Array.isArray(e)&&(null===e||void 0===e?void 0:e.length)){var c={},a={};return e.forEach((function(e){var t=e.filters;Object.keys(t).forEach((function(e){var r,n,s,i=parseFloat((null===(r=c[e])||void 0===r?void 0:r.val)||0)+parseFloat(t[e]||0),o=""!=t[e]?((null===(n=c[e])||void 0===n?void 0:n.len)||0)+1:null===(s=c[e])||void 0===s?void 0:s.len;""!=t[e]&&(a[e]=(a[e]||[]).concat(parseFloat(t[e]))),c[e]={val:i,len:o}}))})),Object.keys(a).forEach((function(e){a[e].sort((function(e,t){return e-t}));var s=d(a[e],t,r,n);s.forEach((function(t){c[e].val-=t,c[e].len--})),c[e].rm=s})),c}},l=function(e){var t=0,r=e.reduce((function(e,r){if(r.checked){t++;var n=Object(a.a)({},r.label,{value:r.value,operator:r.operator});return Object(c.a)(Object(c.a)({},e),n)}return e}),{});return{cnt:t,searchObj:r}},j=function(e,t,r,c){var a=Object(n.a)(e);return a[t][r]=c,a},_=function(e){var t=e.updType,r=e.filter,n=e.num,c=e.average,a=parseFloat(n)||0,s=JSON.parse(JSON.stringify(c));return s[r].val="sub"===t?s[r].val-a:parseFloat(s[r].val)+a,s[r].len="sub"===t?s[r].len-1:parseFloat(s[r].len)+1,s},O=function(e,t){return[].concat(Object(n.a)(t.slice(0,e)),Object(n.a)(t.slice(e+1)))},b=function(e,t){return(e-t)/t*100},u=function(e){return e.reduce((function(t,r,c){var a={diff:0,val:r};return 0===c?[a]:(a.diff=b(r,e[c-1]),[].concat(Object(n.a)(t),[a]))}),[])},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;e.sort((function(e,t){return e-t}));var a=e.length,s=Math.ceil(a/100*t),i=e.slice(0,s).reverse(),o=e.slice(a-s),l=u(i),j=u(o),_=l.findIndex((function(e){return e.diff>c})),O=j.findIndex((function(e){return e.diff>r})),b=[].concat(Object(n.a)(_>-1?i.slice(_):[]),Object(n.a)(O>-1?o.slice(O):[]));return b}},function(e,t,r){"use strict";r.d(t,"d",(function(){return l})),r.d(t,"b",(function(){return j})),r.d(t,"c",(function(){return _})),r.d(t,"a",(function(){return O}));var n,c,a,s,i=r(5),o=r(6),l=o.a.div(n||(n=Object(i.a)(["\n    position:fixed;\n    width:100%;\n    height:100%;\n    right:0;\n    left:0;\n    top:0;\n    z-index:1000;\n    background:rgb(0, 0, 0, 0.4);\n    display:flex;\n    justify-content:center;\n    align-items:center;    \n    overflow:hidden;\n"]))),j=o.a.div(c||(c=Object(i.a)(["\n    position:relative;\n    background:white;\n    max-width:100%;\n    max-height:100%;\n    padding:5px;\n    overflow:auto;\n"]))),_=o.a.div(a||(a=Object(i.a)(["\n    position:absolute;\n    top:0;\n    right:0;\n    padding:5px;\n"]))),O=o.a.div(s||(s=Object(i.a)(["\n    display:flex;\n    flex-wrap: wrap;\n    \n    >\n    div{\n        margin:5px;\n        max-width:20%;        \n    }\n    table tr th{\n        position:relative;\n    }\n    \n"])))},,function(e,t,r){"use strict";var n,c,a,s,i=r(3),o=r(1),l=r(4),j=r(7),_={">":function(e,t){return parseFloat(e)>parseFloat(t)},">=":function(e,t){return parseFloat(e)>=parseFloat(t)},"<":function(e,t){return parseFloat(e)<parseFloat(t)&&e>=0},"<=":function(e,t){return parseFloat(e)<=parseFloat(t)&&e>=0},"!=":function(e,t){return parseFloat(e)!=parseFloat(t)},"==":function(e,t){return parseFloat(e)==parseFloat(t)},GT:function(e,t){return parseFloat(e)>=parseFloat(t)},LT:function(e,t){return parseFloat(e)<=parseFloat(t)},GTA:function(e,t){return parseFloat(e)>=parseFloat(t)},LTA:function(e,t){return parseFloat(e)<=parseFloat(t)&&e>=0}},O=r(5),b=r(6),u=(b.a.table(n||(n=Object(O.a)(["\nborder:1px solid;\n"]))),b.a.div(c||(c=Object(O.a)(["\n    background: skyblue;\n    border-radius:50%;\n    font-size:9px;\n"])))),d=(b.a.th(a||(a=Object(O.a)([""]))),b.a.th(s||(s=Object(O.a)([""]))),{ABOVE_NINTY:{background:"green",color:"rgb(255,255,255)"},ABOVE_EIGHTY:{background:"lightgreen",color:"rgb(255,255,255)"},ABOVE_SEVENTY:{background:"skyblue",color:"rgb(255,255,255)"},ABOVE_SIXTY:{background:"orange",color:"rgb(255,255,255)"},ABOVE_FIFTY:{background:"yellow",color:"rgb(255,255,255)"},BELOW_FIFTY:{background:"red",color:"rgb(255,255,255)"}}),h=r(2),p=(r(34),r(0)),v=function(e){var t=e.stocks,r=e.average,n=e.dispatch,c=Object(h.useState)(!1),a=Object(l.a)(c,2),s=a[0],i=a[1],o=t[0].filters,_=Object.keys(o),O=function(e){var r=JSON.parse(JSON.stringify(t));r.sort((function(t,r){return s?r.filters[e]-t.filters[e]:t.filters[e]-r.filters[e]})),i(!s),n({type:j.a.UPD_STOCKS,data:{stocks:r}})};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("th",{children:"StockName"}),_.map((function(e){return Object(p.jsxs)("th",{onClick:O.bind(null,e),children:[e,Object(p.jsx)(u,{children:Math.round(r[e].val/r[e].len)})]})})),Object(p.jsx)("th",{children:"Matches"}),Object(p.jsx)("th",{children:"Action"})]})},f=function(e){var t=e.name,r=e.value,n=e.onChange,c=e.average[t].rm,a=!(""!==r&&!c.includes(parseFloat(r))),s=Object(h.useState)(a),i=Object(l.a)(s,2),o=i[0],j=i[1];Object(h.useEffect)((function(){var e=!(""!==r&&!c.includes(parseFloat(r)));j(e)}));return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("input",{type:"checkbox",name:t,value:r,onChange:function(e){j(!o),n(e)},checked:o})})},x=function(e){var t=e.stock,r=e.rowNum,n=e.average,c=e.filtersCnt,a=e.searchParams,s=e.compare,i=e.dispatch,O=t.Name,b=t.filters,u=Object.keys(b),v=Object(h.useState)(!1),x=Object(l.a)(v,2),P=x[0],E=x[1],g=0,m=function(e){var t=e.target,r=t.checked,n=t.value,c=t.name,a=r?"sub":"add";i({type:j.a.UPD_AVG,data:{updType:a,filter:c,num:n}})};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("td",{className:P?"highlight":"",children:[Object(p.jsx)("input",{type:"checkbox",onChange:function(){var e=Object(o.a)(s);if(P){var t=e.indexOf(r);t>=0&&(e=[].concat(Object(o.a)(e.slice(0,t)),Object(o.a)(e.slice(t+1))))}else e.push(r);E(!P),i({type:j.a.ADD_TO_COMPARE,data:{compare:e}})}}),O]}),u.map((function(e,t){var r=function(e){var t=a[e];if(t&&_[t.operator]){var r="LT"===t.operator||"GT"===t.operator?b[t.value]||0:t.value,n=_[t.operator](b[e],r)?"greenCol":"redCol";return"greenCol"===n&&g++,n}}(e)||"";return Object(p.jsxs)("td",{className:"".concat(r," ").concat(P?"highlight":""),children:[Object(p.jsx)(f,{name:e,value:b[e],average:n,onChange:m}),b[e]]})})),Object(p.jsx)("td",{className:P?"highlight":"",style:function(e){if(!(c<=0)){var t=e/c*100;return t>=90?d.ABOVE_NINTY:t>=80?d.ABOVE_EIGHTY:t>=70?d.ABOVE_SEVENTY:t>=60?d.ABOVE_SIXTY:t>=50?d.ABOVE_FIFTY:d.BELOW_FIFTY}}(g),children:g}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{onClick:function(e){i({type:j.a.DELETE_STOCK,data:{key:e}}),i({type:j.a.ADD_AVG})}.bind(null,r),children:"Delete"})})]})},P=function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("tr",{children:Object(p.jsx)(x,Object(i.a)({},e))})})};t.a=function(e){var t=e.average,r=e.stocks,n=e.filtersCnt,c=e.searchParams,a=e.compare,s=e.dispatch;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("table",{border:"1",children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:Object(p.jsx)(v,{average:t,stocks:r,dispatch:s})})}),Object(p.jsx)("tbody",{children:r.map((function(e,r){return Object(p.jsx)(P,{stock:e,compare:a,rowNum:r,average:t,filtersCnt:n,searchParams:c,dispatch:s})}))}),Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{bold:"1",children:Object(p.jsx)(v,{average:t,stocks:r,dispatch:s})})})]})})}},,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}));var n={eps:{cols:["EPSQtrRs","EPSPrevQtrRs","EPS12M","EPSAnnRs","EPSPrevAnnRs","EPSPYQtrRs"],order:"desc"},npm:{cols:["NPMAnn","NPMPrevAnn","NPMQtr","NPMPrevQtr","NPMPYQtr"],order:"desc"},opm:{cols:["OPM","OPMAnn","OPMPrevAnn","OPMQtr","OPMPrevQtr","OPMPYQtr"],order:"desc"},sales:{cols:["Salesgrowth","QtrSalesVar"],order:"desc"},roe:{cols:["ROE","ROCE","ROEPrevAnn","ROCEPrevYr"],order:"desc"},cashFlow:{cols:["FreeCashFlowRsCr","FCFPrevAnnRsCr"],order:"desc"},debt:{cols:["Debt to Eq"],order:"asc"},pe:{cols:["PERatio"],order:"asc"}},c=["eps","npm","opm","sales","roe","cashFlow","debt","pe"]},,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var E_node_js_applications_screener_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_store__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_view_TblView__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(12),_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(16),_bestPick_Style__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__),round5=function(e){e||(e=0);var t=e<0?Math.abs(e):Number(e),r=t%5,n=r>=3?t+(5-r):t-r;return Number(e<0?-n:n)},sortStocks=function sortStocks(stocks,sortByCol,avg){var asc=function(e,t){return round5(e)-round5(t)},desc=function(e,t){return round5(t)-round5(e)};return stocks.sort((function(a,b){var res=sortByCol.map((function(e){var t=_constants__WEBPACK_IMPORTED_MODULE_4__.a[e];return t.cols.map((function(e){return avg[e]&&(avg[e].rm.includes(parseFloat(a.filters[e]))||avg[e].rm.includes(parseFloat(b.filters[e])))?(console.log("col-===="+e+"vala==="+a.filters[e]+"valb==="+a.filters[e]),0):"asc"===t.order?asc(a.filters[e],b.filters[e]):desc(a.filters[e],b.filters[e])})).join("||")})).join("||");return eval(res)}))},SortedStocks=function(){var e=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),t=Object(E_node_js_applications_screener_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(e,2),r=t[0],n=t[1],c=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants__WEBPACK_IMPORTED_MODULE_4__.b),a=Object(E_node_js_applications_screener_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(c,2),s=a[0],i=a[1],o=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants__WEBPACK_IMPORTED_MODULE_4__.b),l=Object(E_node_js_applications_screener_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(o,2),j=l[0],_=l[1],O=Object(_store__WEBPACK_IMPORTED_MODULE_2__.b)(),b=Object(E_node_js_applications_screener_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(O,1)[0],u=JSON.parse(JSON.stringify(b)),d=sortStocks(u.stocks,j,u.average);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:function(e){return n(!r)},children:"Sort"}),r&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bestPick_Style__WEBPACK_IMPORTED_MODULE_5__.d,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_bestPick_Style__WEBPACK_IMPORTED_MODULE_5__.b,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bestPick_Style__WEBPACK_IMPORTED_MODULE_5__.c,{onClick:function(e){return n(!r)},children:"X"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bestPick_Style__WEBPACK_IMPORTED_MODULE_5__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}})," ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:function(){_(s.split(","))},children:"Sort"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_view_TblView__WEBPACK_IMPORTED_MODULE_3__.a,{average:u.average,stocks:d,dispatch:function(){},filtersCnt:u.filtersCnt,searchParams:u.searchParams,compare:u.compare})]})})]})})]})};__webpack_exports__.a=SortedStocks},,,,,function(e,t,r){},function(e,t,r){},,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n,c,a,s,i,o,l,j=r(2),_=r.n(j),O=r(20),b=r.n(O),u=(r(29),r(4)),d=(r(30),r(5)),h=r(6),p=h.a.textarea(n||(n=Object(d.a)(["\n    height:100px;\n"]))),v=h.a.button(c||(c=Object(d.a)(["\n    width:10%;\n    margin:10px 0 0 0;    \n"]))),f=h.a.div(a||(a=Object(d.a)(["\n    width:100%;\n    display:flex;\n    flex-direction:column;\n"]))),x=h.a.div(s||(s=Object(d.a)(["\nmargin: 5px 0 0 0;\ninput{\n    margin:0 5px 0 5px;\n}\nlabel{\n    font-weight:bold;\n    font-size:0.9rem;\n}\n\n"]))),P=r(7),E=r(8),g=r(0),m=function(){var e=Object(E.b)(),t=Object(u.a)(e,2),r=t[0],n=t[1],c=r.txt,a=function(e){var t,r=e.target.value,c=e.target.name;t="highAvg"===c?P.a.UPD_HIGH_AVG:"maxPer"===c?P.a.UPD_MAX_PER:P.a.UPD_LOW_AVG,n({data:{value:r},type:t})};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(f,{children:[Object(g.jsx)(p,{value:c,onChange:function(e){var t=e.target.value,r=P.a.ADD_TEXT;n({data:{txt:t},type:r})},placeholder:"Enter your JSON"}),Object(g.jsxs)(x,{children:[Object(g.jsx)("label",{children:"HighAvg"}),Object(g.jsx)("input",{type:"text",name:"highAvg",value:r.highAvg,onChange:a}),Object(g.jsx)("label",{children:"LowAvg"}),Object(g.jsx)("input",{type:"text",name:"lowAvg",value:r.lowAvg,onChange:a}),Object(g.jsx)("label",{children:"Diff"}),Object(g.jsx)("input",{type:"text",name:"maxPer",value:r.maxPer,onChange:a})]}),Object(g.jsx)(v,{onClick:function(){n({type:P.a.ADD_STOCKS}),n({type:P.a.ADD_FILTERS}),n({type:P.a.ADD_AVG})},children:"Add"})]})})},D=function(e){var t=e.handleChange,r=Object(E.b)(),n=Object(u.a)(r,1)[0];return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("select",{name:"value",onChange:t,children:[Object(g.jsx)("option",{value:"",children:"Select"}),n.filtersList.map((function(e){return Object(g.jsx)("option",{value:e.label,children:e.label})}))]})})},A=function(e){var t=e.rowNum,r=e.label,n=e.value,c=e.checked,a=Object(E.b)(),s=Object(u.a)(a,2),i=s[0],o=s[1],l=Object(j.useState)(!1),_=Object(u.a)(l,2),O=_[0],b=_[1],d=function(e){var n=e.target.value,a=e.target.name;"checked"===a&&(n=!c),"operator"===a&&(b("GT"===n||"LT"===n),o("GTA"===n||"LTA"===n?{type:P.a.UPD_FILTERS,data:{key:t,col:"value",value:Math.round(i.average[r].val/i.average[r].len)}}:{type:P.a.UPD_FILTERS,data:{key:t,col:"value",value:""}})),o({type:P.a.UPD_FILTERS,data:{key:t,col:a,value:n}}),"operator"!==a&&"value"!==a||!n||o({type:P.a.UPD_FILTERS,data:{key:t,col:"checked",value:!0}})};return Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"50%",margin:"10px"},children:[Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"checkbox",onChange:d,name:"checked",checked:c})}),Object(g.jsxs)("div",{style:{width:"33%"},children:[Object(g.jsx)("label",{children:r}),"\xa0"]}),Object(g.jsx)("div",{style:{width:"33%"},children:Object(g.jsxs)("select",{name:"operator",onChange:d,children:[Object(g.jsx)("option",{value:"",children:"Select"}),Object(g.jsx)("option",{value:">",children:"Greater"}),Object(g.jsx)("option",{value:">=",children:"Greater & Equal"}),Object(g.jsx)("option",{value:"<",children:"Less"}),Object(g.jsx)("option",{value:"<=",children:"Less & equal"}),Object(g.jsx)("option",{value:"!=",children:"Not equal"}),Object(g.jsx)("option",{value:"==",children:"Equal"}),Object(g.jsx)("option",{value:"GT",children:"Greater than"}),Object(g.jsx)("option",{value:"LT",children:"Less than"}),Object(g.jsx)("option",{value:"GTA",children:"Greater than AVG"}),Object(g.jsx)("option",{value:"LTA",children:"Less than AVG"})]})}),Object(g.jsx)("div",{style:{width:"33%"},children:O?Object(g.jsx)(D,{handleChange:d}):Object(g.jsx)("input",{type:"text",placeholder:"Value",name:"value",value:n,onChange:d,autoComplete:"off"})})]})},C=function(){var e=Object(E.b)(),t=Object(u.a)(e,2),r=t[0],n=t[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h5",{children:"Filters:"}),Object(g.jsxs)("div",{className:"filters",children:[r.filtersList.map((function(e,t){return Object(g.jsx)(A,{label:e.label,operator:e.operator,value:e.value,checked:e.checked,rowNum:t},t)})),Object(g.jsx)("br",{})]}),Object(g.jsx)(v,{onClick:function(){n({type:P.a.ADD_SEARCH})},children:"Filter"})]})},M=r(12),T=function(){var e=Object(E.b)(),t=Object(u.a)(e,2),r=t[0],n=t[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(M.a,{average:r.average,stocks:r.stocks,dispatch:n,filtersCnt:r.filtersCnt,searchParams:r.searchParams,compare:r.compare})})},k=r(1),S=r(9),y=function(e){var t=e.precentages;return Object(g.jsx)("table",{style:{width:"10rem",textAlign:"left"},children:t.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.val}),Object(g.jsxs)("td",{children:[Math.round(e.diff),"%"]})]})}))})},R=function(e){var t=e.label,r=Object(j.useState)(""),n=Object(u.a)(r,2),c=n[0],a=n[1],s=Object(j.useState)([]),i=Object(u.a)(s,2),o=i[0],l=i[1],_=c.split(/\s|%/).filter((function(e){return e})).map((function(e){return e.split(",").join("")}));return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{style:{margin:"0 20px 0 0"},children:[Object(g.jsx)("h6",{children:t}),Object(g.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)}}),Object(g.jsx)("button",{onClick:function(){var e=_.reduce((function(e,t,r){var n={diff:0,val:t};return 0===r?[n]:(n.diff=Object(S.d)(t,_[r-1]),[].concat(Object(k.a)(e),[n]))}),[]);l(e)},children:"Calc"}),Object(g.jsx)(y,{precentages:o})]})})},L=function(){var e=Object(j.useState)([]),t=Object(u.a)(e,2),r=t[0],n=t[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:"Calculate Diff:"}),Object(g.jsx)("button",{onClick:function(){var e=prompt("Enter diff name");e&&n([].concat(Object(k.a)(r),[{CmpName:R,label:e}]))},children:"Add"}),Object(g.jsx)("div",{style:{display:"flex",width:"90%",flexWrap:"wrap"},children:r.map((function(e){var t=e.CmpName,r=e.label;return Object(g.jsx)(t,{label:r})}))})]})},B=h.a.div(i||(i=Object(d.a)(["\nmargin:40px;\nposition:relative;\n"]))),w=h.a.div(o||(o=Object(d.a)(["\n    position:absolute;\n    top:0;    \n    width:auto;\n    height:auto;\n    background:white;\n\n"]))),F=h.a.div(l||(l=Object(d.a)(["\n"]))),I=function(e){var t=e.showModal,r=Object(E.b)(),n=Object(u.a)(r,2),c=n[0],a=n[1],s=c.stocks.filter((function(e,t){return c.compare.indexOf(t)>-1}));return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(w,{children:Object(g.jsxs)(F,{children:[Object(g.jsx)("button",{onClick:t,children:"Close"}),Object(g.jsx)(M.a,{average:c.average,stocks:s,dispatch:a,filtersCnt:c.filtersCnt,searchParams:c.searchParams,compare:c.compare})]})})})},U=r(10),N=function(e,t,r){return Object(S.d)(e[t],e[r])},K=function(e,t){return e.sort((function(e,r){return parseFloat(r.filters[t])-parseFloat(e.filters[t])})).slice(0,5)},W=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t,r){var n=(r+1)%5,c=0===n?5:n;return e[t.Name]?(e[t.Name].cnt+=1,e[t.Name].avgPos+=c,e[t.Name].t.push(c)):e[t.Name]={cnt:1,avgPos:c,t:[n],name:t.Name},e}),{})},G=function(e){return Object.values(e).sort((function(e,t){return t.cnt-e.cnt||e.avgPos-t.avgPos})).slice(0,5)},V=function(e){var t=function(e){return e.forEach((function(t,r){e[r].filters.epsAnnGrowthPercent=N(e[r].filters,"EPS12M","EPSAnnRs"),e[r].filters.epsPrevAnnGrowthPercent=N(e[r].filters,"EPSAnnRs","EPSPrevAnnRs"),e[r].filters.epsPreYearQtrPercent=N(e[r].filters,"EPSQtrRs","EPSPYQtrRs"),e[r].filters.epsPreQtrPercent=N(e[r].filters,"EPSQtrRs","EPSPrevQtrRs"),e[r].filters.roePercent=N(e[r].filters,"ROE","ROEPrevAnn"),e[r].filters.rocePercent=N(e[r].filters,"ROCE","ROCEPrevYr")})),e}(function(e){return e.filter((function(e){return!0}))}(JSON.parse(JSON.stringify(e)))),r=K(t,"ROE"),n=K(t,"ROCE"),c=K(t,"Salesgrowth"),a=K(t,"QtrSalesVar"),s=K(t,"NPMAnn"),i=K(t,"OPM"),o=W.apply(void 0,Object(k.a)(r).concat(Object(k.a)(n),Object(k.a)(c),Object(k.a)(a),Object(k.a)(s),Object(k.a)(i))),l=G(o),j=K(t,"ROEPrevAnn"),_=K(t,"ROCEPrevYr"),O=W.apply(void 0,Object(k.a)(j).concat(Object(k.a)(_))),b=G(O),u=K(t,"ROE3Yr"),d=K(t,"ROCE3Yr"),h=K(t,"SalesVar3Yrs"),p=W.apply(void 0,Object(k.a)(u).concat(Object(k.a)(d),Object(k.a)(h))),v=G(p),f=K(t,"ROE5Yr"),x=K(t,"ROCE5Yr"),P=K(t,"SalesVar5Yrs"),E=W.apply(void 0,Object(k.a)(f).concat(Object(k.a)(x),Object(k.a)(P))),g=G(E),m=K(t,"epsAnnGrowthPercent"),D=W.apply(void 0,Object(k.a)(m)),A=G(D),C=K(t,"epsPrevAnnGrowth"),M=W.apply(void 0,Object(k.a)(C)),T=G(M),S=K(t,"epsPreYearQtr"),y=W.apply(void 0,Object(k.a)(S)),R=G(y),L=K(t,"epsPreQtrPercent"),B=W.apply(void 0,Object(k.a)(L)),w=G(B),F=K(t,"roePercent"),I=W.apply(void 0,Object(k.a)(F)),U=G(I),V=K(t,"rocePercent"),Y=W.apply(void 0,Object(k.a)(V)),Q=G(Y),q=K(t,"OPM"),H=K(t,"OPMAnn"),J=K(t,"OPMPrevAnn"),X=K(t,"OPMQtr"),z=K(t,"OPMPrevQtr"),Z=K(t,"OPMPYQtr"),$=W.apply(void 0,Object(k.a)(q).concat(Object(k.a)(H),Object(k.a)(J),Object(k.a)(X),Object(k.a)(z),Object(k.a)(Z))),ee=G($),te=K(t,"NPMAnn"),re=K(t,"NPMPrevAnn"),ne=K(t,"NPMQtr"),ce=K(t,"NPMPrevQtr"),ae=K(t,"NPMPYQtr"),se=W.apply(void 0,Object(k.a)(te).concat(Object(k.a)(re),Object(k.a)(ne),Object(k.a)(ce),Object(k.a)(ae))),ie=G(se),oe=W.apply(void 0,Object(k.a)(r).concat(Object(k.a)(n),Object(k.a)(c),Object(k.a)(a),Object(k.a)(j),Object(k.a)(_),Object(k.a)(u),Object(k.a)(d),Object(k.a)(h),Object(k.a)(f),Object(k.a)(x),Object(k.a)(P),Object(k.a)(m),Object(k.a)(C),Object(k.a)(S),Object(k.a)(L),Object(k.a)(F),Object(k.a)(V),Object(k.a)(q),Object(k.a)(H),Object(k.a)(J),Object(k.a)(X),Object(k.a)(z),Object(k.a)(Z),Object(k.a)(te),Object(k.a)(re),Object(k.a)(ne),Object(k.a)(ce),Object(k.a)(ae)));return{currentBest:l,histBest:b,avg3Best:v,avg5Best:g,epsCmp12MnthBest:A,epsCmpLastYrBest:T,epsCmpLastYrQtrBest:R,epsCmpPrevQtrBest:w,roePercentBest:U,rocePercentBest:Q,opmPercentBest:ee,npmPercentBest:ie,finalBest:G(oe)}},Y=function(e){var t=e.rows;return Object(g.jsxs)("table",{border:"1",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Name"}),Object(g.jsx)("th",{children:"Cnt"}),Object(g.jsx)("th",{children:"Position"})]})}),Object(g.jsx)("tbody",{children:t.map((function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.name}),Object(g.jsx)("td",{children:e.cnt}),Object(g.jsx)("td",{children:e.avgPos})]})})}))})]})},Q=function(){var e=Object(j.useState)(!1),t=Object(u.a)(e,2),r=t[0],n=t[1],c=Object(E.b)(),a=Object(u.a)(c,1)[0],s=V(a.stocks),i=s.currentBest,o=s.histBest,l=s.avg3Best,_=s.avg5Best,O=s.finalBest,b=s.epsCmp12MnthBest,d=s.epsCmpLastYrBest,h=s.epsCmpLastYrQtrBest,p=s.epsCmpPrevQtrBest,v=s.roePercentBest,f=s.rocePercentBest,x=s.opmPercentBest,P=s.npmPercentBest;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{onClick:function(e){return n(!r)},children:"BestPick"}),r&&Object(g.jsx)(U.d,{children:Object(g.jsxs)(U.b,{children:[Object(g.jsx)(U.c,{onClick:function(e){return n(!r)},children:"X"}),Object(g.jsxs)(U.a,{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:"Current"}),Object(g.jsx)(Y,{rows:i})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:"History"}),Object(g.jsx)(Y,{rows:o})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:"Avg 3 Years"}),Object(g.jsx)(Y,{rows:l})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:"Avg 5 Years"}),Object(g.jsx)(Y,{rows:_})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:"EPS12M vs Last yr"}),Object(g.jsx)(Y,{rows:b})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:"EPS last yr vs prev yr"}),Object(g.jsx)(Y,{rows:d})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:"Eps last qtr vs prev qtr"}),Object(g.jsx)(Y,{rows:p})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:"EPS prev yr qtr"}),Object(g.jsx)(Y,{rows:h})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:"Roe vs prev yr"}),Object(g.jsx)(Y,{rows:v})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:"Roce vs prev yr"}),Object(g.jsx)(Y,{rows:f})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:"OPM"}),Object(g.jsx)(Y,{rows:x})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:"NPM"}),Object(g.jsx)(Y,{rows:P})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:"Consolidated"}),Object(g.jsx)(Y,{rows:O})]})]})]})})]})},q=r(24);function H(){var e=Object(E.b)(),t=Object(u.a)(e,1)[0],r=Object(j.useState)(!1),n=Object(u.a)(r,2),c=n[0],a=n[1],s=function(){a(!c)};return Object(g.jsxs)(B,{children:[Object(g.jsx)(m,{}),t.stocks&&t.stocks.length>0&&Object(g.jsx)(C,{}),t.stocks&&t.stocks.length>0&&Object(g.jsxs)("h5",{children:["Filters added: ",t.filtersCnt]}),t.compare&&t.compare.length>1&&Object(g.jsx)("button",{onClick:s,children:"Compare"}),t.stocks&&t.stocks.length>0&&Object(g.jsx)(Q,{}),t.stocks&&t.stocks.length>0&&Object(g.jsx)(q.a,{}),t.stocks&&t.stocks.length>0&&Object(g.jsx)(T,{}),c&&Object(g.jsx)(I,{showModal:s}),Object(g.jsx)(L,{})]})}var J=function(){return Object(g.jsx)(E.a,{children:Object(g.jsx)(H,{})})},X=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,36)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))};b.a.render(Object(g.jsx)(_.a.StrictMode,{children:Object(g.jsx)(J,{})}),document.getElementById("root")),X()}],[[35,1,2]]]);
//# sourceMappingURL=main.0a39a8a6.chunk.js.map