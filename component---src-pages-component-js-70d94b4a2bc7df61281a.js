webpackJsonp([0xc694120a6f32],{76:function(e,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,n=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,o=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,p=c&&c(Object);e.exports=function e(t,d,f){if("string"!=typeof d){if(p){var i=c(d);i&&i!==p&&e(t,i,f)}var s=n(d);u&&(s=s.concat(u(d)));for(var m=0;m<s.length;++m){var y=s[m];if(!(a[y]||l[y]||f&&f[y])){var g=o(d,y);try{r(t,y,g)}catch(e){}}}return t}return t}},239:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=a(5),n=l(r),u=a(8),o=l(u),c=a(179),p=l(c),d=function(e){var t=e.data.componentsMetadata,a=t.edges[0].node;return n.default.createElement("div",null,n.default.createElement("h1",null,a.displayName),n.default.createElement("p",null," ",a.description&&a.description.text),n.default.createElement("h4",null,"Props:"),n.default.createElement("table",null,n.default.createElement("tr",null,n.default.createElement("th",null,"Name"),n.default.createElement("th",null,"Required"),n.default.createElement("th",null,"Options")),a.props.map(function(e,t){return n.default.createElement("tr",{key:t},n.default.createElement("td",null,e.name),n.default.createElement("td",null,e.required?"yes":"no"),n.default.createElement("td",null,e.type.value&&e.type.value.map&&e.type.value.map(function(e){return e.value}).join(", ")))})),n.default.createElement(p.default,{to:"/"},"Go back to the homepage"))};d.propTypes={data:o.default.shape({componentsMetadata:o.default.object}).isRequired},t.default=d;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-component-js-70d94b4a2bc7df61281a.js.map