/*! For license information please see main.751deee3.chunk.js.LICENSE.txt */
(this["webpackJsonpbng-react-lib-example"]=this["webpackJsonpbng-react-lib-example"]||[]).push([[0],{13:function(e,t,n){e.exports={ContentBox:"styles_ContentBox__1lZvL",Header:"styles_Header__i53Qq",Small:"styles_Small__236TL",Link:"styles_Link__Kzt7v",Paragraph:"styles_Paragraph__28437"}},15:function(e,t,n){e.exports={LabeledInput:"styles_LabeledInput__2nct9",Label:"styles_Label__1jRDc",Input:"styles_Input__19woE",LabelDisabled:"styles_LabelDisabled__34sib",InputRow:"styles_InputRow__3KeEV"}},31:function(e,t,n){e.exports=n(53)},32:function(e,t,n){},39:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);n(32);var r=n(1),a=n.n(r),o=n(10),l=n.n(o),i=n(11);n(39);function c(e){var t=e.title,n=void 0===t?"Home":t,r=e.subTitle,o=void 0===r?"Welcome to My Homepage":r,l=e.data,c=void 0===l?[]:l,u=e.version,s=void 0===u?"":u,d=a.a.useState(0),m=Object(i.a)(d,2),f=m[0],p=m[1],y=c[f]||{},h=y.component,b=y.label;return a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{id:"top"},a.a.createElement("h2",null,n),a.a.createElement("p",null,o)),a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{id:"menubar"},a.a.createElement("ul",{id:"menulist"},c.map((function(e,t){var n,r=e.id,o=e.label;return a.a.createElement("li",{key:r,className:"menuitem ".concat(f===t?"menuitemSelected":""),onClick:(n=t,function(){p(n)})},o)})))),a.a.createElement("div",{id:"main"},a.a.createElement("h1",{style:{marginTop:0,marginBottom:16}},b),a.a.createElement("div",{style:{height:500}},h))),s&&a.a.createElement("div",{id:"bottom"},"v.".concat(s)))}var u=n(16);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function p(e,t){return e(t={exports:{}},t.exports),t.exports}var y="function"===typeof Symbol&&Symbol.for,h=y?Symbol.for("react.element"):60103,b=y?Symbol.for("react.portal"):60106,v=y?Symbol.for("react.fragment"):60107,g=y?Symbol.for("react.strict_mode"):60108,w=y?Symbol.for("react.profiler"):60114,C=y?Symbol.for("react.provider"):60109,_=y?Symbol.for("react.context"):60110,E=y?Symbol.for("react.async_mode"):60111,x=y?Symbol.for("react.concurrent_mode"):60111,O=y?Symbol.for("react.forward_ref"):60112,S=y?Symbol.for("react.suspense"):60113,R=y?Symbol.for("react.suspense_list"):60120,j=y?Symbol.for("react.memo"):60115,I=y?Symbol.for("react.lazy"):60116,T=y?Symbol.for("react.block"):60121,k=y?Symbol.for("react.fundamental"):60117,P=y?Symbol.for("react.responder"):60118,L=y?Symbol.for("react.scope"):60119;function H(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case h:switch(e=e.type){case E:case x:case v:case w:case g:case S:return e;default:switch(e=e&&e.$$typeof){case _:case O:case I:case j:case C:return e;default:return t}}case b:return t}}}function $(e){return H(e)===x}var N={AsyncMode:E,ConcurrentMode:x,ContextConsumer:_,ContextProvider:C,Element:h,ForwardRef:O,Fragment:v,Lazy:I,Memo:j,Portal:b,Profiler:w,StrictMode:g,Suspense:S,isAsyncMode:function(e){return $(e)||H(e)===E},isConcurrentMode:$,isContextConsumer:function(e){return H(e)===_},isContextProvider:function(e){return H(e)===C},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===h},isForwardRef:function(e){return H(e)===O},isFragment:function(e){return H(e)===v},isLazy:function(e){return H(e)===I},isMemo:function(e){return H(e)===j},isPortal:function(e){return H(e)===b},isProfiler:function(e){return H(e)===w},isStrictMode:function(e){return H(e)===g},isSuspense:function(e){return H(e)===S},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===v||e===x||e===w||e===g||e===S||e===R||"object"===typeof e&&null!==e&&(e.$$typeof===I||e.$$typeof===j||e.$$typeof===C||e.$$typeof===_||e.$$typeof===O||e.$$typeof===k||e.$$typeof===P||e.$$typeof===L||e.$$typeof===T)},typeOf:H},D=(p((function(e,t){0})),p((function(e){e.exports=N})),Object.getOwnPropertySymbols),M=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;function G(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}})()&&Object.assign;var K="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function B(e,t,n,r,a){}B.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function A(){}function q(){}q.resetWarningCache=A;var z=p((function(e){e.exports=function(){function e(e,t,n,r,a,o){if(o!==K){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:q,resetWarningCache:A};return n.PropTypes=n,n}()}));function V(e){var t,n,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=V(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function W(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=V(e))&&(r&&(r+=" "),r+=t);return r}var J="_16YeN",Q="_2TPaZ",Z="_21GDQ",U="_Xcu6K",Y="_17FZq",X="_1K6-F",ee="_1rdwQ",te=["columns","rowHeight","headerHeight","rows"],ne=["dataKey","flexGrow"],re=function(e){var t={};return Array.isArray(e)&&e.forEach((function(e){t[e]=e})),t},ae=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={selectedItems:""},t.getIdByIndex=function(e){var n=t.props,r=n.rows,a=n.rowKey;return r[e]?r[e][a]:null},t.getRowClassName=function(e){var n,r=e.index,a=t.props,o=a.onRowClick,l=a.multi,i=t.state.selectedItems,c=!1;if(i){var u=t.getIdByIndex(r);c=l?i[u]:i===u}return W(Z,J,((n={})[U]=-1!==r&&null!=o,n[ee]=c,n))},t.cellRenderer=function(e){var n,r=e.cellData,o=e.columnIndex,l=t.props,i=l.columns,c=l.rowHeight,u=l.onRowClick;return a.a.createElement("div",{className:W(Y,J,(n={},n[X]=null==u,n)),variant:"body",style:{height:c},align:null!=o&&i[o].numeric?"right":"left"},a.a.createElement("span",null,r))},t.headerRenderer=function(e){var n=e.label,r=e.columnIndex,o=t.props,l=o.headerHeight,i=o.columns;return a.a.createElement("div",{className:W(Y,J,X),variant:"head",style:{height:l},align:i[r].numeric?"right":"left"},a.a.createElement("span",null,n))},t.onRowClick=function(e){var n=e.event,r=e.index,a=e.rowData,o=t.props,l=o.onRowClick,i=o.multi,c=t.getIdByIndex(r),u=c;if(i){var s=t.state.selectedItems;(u="object"===typeof s?s:{})[c]?delete u[c]:u[c]=c,u=Object.values(u)}l(u,a,r,n)},t}return d(t,e),t.getDerivedStateFromProps=function(e,t){return e.selectedItems!==t.selectedItems?{selectedItems:e.multi?re(e.selectedItems):e.selectedItems}:null},t.prototype.render=function(){var e=this,t=this.props,n=t.columns,r=t.rowHeight,o=t.headerHeight,l=t.rows,i=f(t,te);return a.a.createElement(u.a,null,(function(t){var c=t.height,d=t.width;return a.a.createElement(u.d,s({height:c,width:d,rowHeight:r,gridStyle:{direction:"inherit"},headerHeight:o,className:Q,rowCount:l.length,rowGetter:function(e){var t=e.index;return l[t]}},i,{rowClassName:e.getRowClassName,onRowClick:e.onRowClick}),n.map((function(t,n){var r=t.dataKey,o=t.flexGrow,l=void 0===o?1:o,i=f(t,ne);return a.a.createElement(u.b,s({key:r,headerRenderer:function(t){return e.headerRenderer(s({},t,{columnIndex:n}))},className:J,cellRenderer:e.cellRenderer,dataKey:r,flexGrow:l},i))})))}))},t}(a.a.PureComponent);ae.defaultProps={headerHeight:40,rowHeight:40,rowKey:"id",multi:!1,selectedItems:"",rows:[]},ae.propTypes={columns:z.arrayOf(z.shape({dataKey:z.string.isRequired,label:z.string.isRequired,numeric:z.bool,width:z.number.isRequired})).isRequired,headerHeight:z.number,rowHeight:z.number,rowKey:z.string,multi:z.bool,selectedItems:z.oneOfType([z.string,z.number,z.instanceOf(Array)]),onRowClick:z.func,rows:z.arrayOf(Object)};var oe="_16PIM",le={border:"1px solid #ddd"},ie={borderRight:"2px solid #aaa",backgroundColor:"#f7f7f7"},ce={borderBottom:"2px solid #aaa",borderRight:"2px solid #aaa",fontWeight:"bold"},ue={borderBottom:"2px solid #aaa",fontWeight:"bold"},se=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).cellRenderer=function(e){var t=e.columnIndex,n=e.key,r=e.rowIndex,o=e.style;return a.a.createElement("div",{className:oe,key:n,style:o},t,", ",r)},t}return d(t,e),t.prototype.render=function(){var e=this,t=s({},this.props);return a.a.createElement(u.a,{disableHeight:!1},(function(n){var r=n.width,o=n.height;return a.a.createElement(u.c,s({},t,{height:o,width:r,enableFixedColumnScroll:!0,enableFixedRowScroll:!0,hideTopRightGridScrollbar:!0,hideBottomLeftGridScrollbar:!0,style:le,styleBottomLeftGrid:ie,styleTopLeftGrid:ce,styleTopRightGrid:ue,columnWidth:75,columnCount:50,rowCount:100,cellRenderer:e.cellRenderer}))}))},t}(a.a.PureComponent);se.defaultProps={fixedColumnCount:0,fixedRowCount:1,scrollToColumn:0,scrollToRow:0,rowHeight:40},se.propTypes={fixedColumnCount:z.number,fixedRowCount:z.number,scrollToColumn:z.number,scrollToRow:z.number};var de={__proto__:null,VirtualizedTable:ae,MultiGrid:se},me=function(e){void 0===e&&(e=200);var t=null;return function(n){t&&clearTimeout(t),t=setTimeout((function(){n()}),e)}},fe=n(25),pe=function(e){var t=e.children,n=e.label,r=e.style;return a.a.createElement("div",{style:Object(fe.a)({display:"flex",marginBottom:8},r)},n&&a.a.createElement("div",{style:{marginRight:10}},n),a.a.createElement("div",{style:{flex:1}},t))},ye=me(),he=function(){var e=a.a.useState(""),t=Object(i.a)(e,2),n=t[0],r=t[1],o=a.a.useState(""),l=Object(i.a)(o,2),c=l[0],u=l[1];return a.a.createElement("div",null,a.a.createElement(pe,{label:"Delay:"},"200ms"),a.a.createElement(pe,{label:"Search:"},a.a.createElement("input",{value:n,onChange:function(e){var t=e.target.value;r(t),ye((function(){u(t)}))}})),a.a.createElement(pe,{label:"Search Value:"},c))},be=n(29),ve=de.VirtualizedTable,ge=[["Frozen yoghurt",159,6,24,4],["Ice cream sandwich",237,9,37,4.3],["Eclair",262,16,24,6],["Cupcake",305,3.7,67,4.3],["Gingerbread long long long long long long",356,16,49,3.9]];function we(e,t,n,r,a,o){return{id:e,dessert:t,calories:n,fat:r,carbs:a,protein:o}}for(var Ce=[],_e=1;_e<2e3;_e+=1){var Ee=ge[Math.floor(Math.random()*ge.length)];Ce.push(we.apply(void 0,[_e].concat(Object(be.a)(Ee))))}var xe=[{width:300,label:"Dessert",dataKey:"dessert"},{width:120,label:"Calories\xa0(g)",dataKey:"calories",numeric:!0},{width:120,label:"Fat\xa0(g)",dataKey:"fat",numeric:!0},{width:120,label:"Carbs\xa0(g)",dataKey:"carbs",numeric:!0},{width:120,label:"Protein\xa0(g)",dataKey:"protein",numeric:!0}];function Oe(){var e=a.a.useState(""),t=Object(i.a)(e,2),n=t[0],r=t[1],o=a.a.useState(!1),l=Object(i.a)(o,2),c=l[0],u=l[1];return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(pe,{label:"Multi Mode",style:{width:400}},a.a.createElement("input",{type:"checkbox",checked:c,onChange:function(){u(!c),r("")}}))),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",{style:{height:"calc(100vh - 150px)",width:"100%"}},a.a.createElement(ve,{selectedItems:n,rows:Ce,columns:xe,onRowClick:function(e){r(e)},multi:c})),a.a.createElement(pe,{label:"Value",style:{width:400}},a.a.createElement("textarea",{style:{width:"100%",height:"100%"},readOnly:!0,value:JSON.stringify(n,void 0,2)}))))}var Se=n(14),Re=n(26),je=n(27),Ie=n(30),Te=n(28),ke=n(20),Pe=n(13),Le=n.n(Pe);function He(e){var t=e.className,n=e.children,a=e.style;return r.createElement("div",{className:Object(ke.a)(Le.a.ContentBox,t),style:a},n)}var $e=n(15),Ne=n.n($e);function De(e){var t=e.disabled,n=e.label,a=e.name,o=e.onChange,l=e.placeholder,i=e.value,c=Object(ke.a)(Ne.a.Label,Object(Se.a)({},Ne.a.LabelDisabled,t));return r.createElement("div",{className:Ne.a.LabeledInput},r.createElement("label",{className:c,title:n},n),r.createElement("input",{"aria-label":n,className:Ne.a.Input,name:a,placeholder:l,onChange:o,value:i,disabled:t}))}function Me(e){var t=e.children;return r.createElement("div",{className:Ne.a.InputRow},t)}var Fe=de.MultiGrid,Ge=function(e){Object(Ie.a)(n,e);var t=Object(Te.a)(n);function n(e,r){var a;return Object(Re.a)(this,n),(a=t.call(this,e,r)).state={fixedColumnCount:1,fixedRowCount:1,scrollToColumn:0,scrollToRow:0},a._onFixedColumnCountChange=a._createEventHandler("fixedColumnCount"),a._onFixedRowCountChange=a._createEventHandler("fixedRowCount"),a._onScrollToColumnChange=a._createEventHandler("scrollToColumn"),a._onScrollToRowChange=a._createEventHandler("scrollToRow"),a}return Object(je.a)(n,[{key:"_createEventHandler",value:function(e){var t=this;return function(n){var r=parseInt(n.target.value,10)||0;t.setState(Object(Se.a)({},e,r))}}},{key:"_createLabeledInput",value:function(e,t){var n=this.state[e];return a.a.createElement(De,{label:e,name:e,onChange:t,value:n})}},{key:"render",value:function(){return a.a.createElement(He,null,a.a.createElement(Me,null,this._createLabeledInput("fixedColumnCount",this._onFixedColumnCountChange),this._createLabeledInput("fixedRowCount",this._onFixedRowCountChange),this._createLabeledInput("scrollToColumn",this._onScrollToColumnChange),this._createLabeledInput("scrollToRow",this._onScrollToRowChange)),a.a.createElement("br",null),a.a.createElement("div",{style:{width:"100%",height:400}},a.a.createElement(Fe,this.state)))}}]),n}(a.a.PureComponent),Ke=(n(52),[{id:"MultiGridDemo",label:"Multi Grid",component:a.a.createElement(Ge,null)},{id:"DelaySearchDemo",label:"Delay Search",component:a.a.createElement(he,null)},{id:"VirtualizedTableDemo",label:"Virtualized Table",component:a.a.createElement(Oe,null)}]),Be=function(){return a.a.createElement(c,{title:"BNG Demo",data:Ke,version:"1.0.6"})};l.a.render(a.a.createElement(Be,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.751deee3.chunk.js.map