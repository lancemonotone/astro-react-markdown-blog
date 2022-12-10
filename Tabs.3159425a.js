import{r as c}from"./chunks/index.4e3357e0.js";/* empty css                              */var n={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=c.exports,u=Symbol.for("react.element"),m=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,x=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(s,e,a){var r,o={},t=null,l=null;a!==void 0&&(t=""+a),e.key!==void 0&&(t=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)_.call(e,r)&&!d.hasOwnProperty(r)&&(o[r]=e[r]);if(s&&s.defaultProps)for(r in e=s.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:u,type:s,key:t,ref:l,props:o,_owner:x.current}}p.Fragment=m;p.jsx=i;p.jsxs=i;(function(s){s.exports=p})(n);const b=({headings:s,content:e})=>{const[a,r]=c.exports.useState(0);return n.exports.jsxs("div",{className:"tabs",children:[n.exports.jsx("ul",{className:"tabs-header",children:s.map((o,t)=>n.exports.jsx("li",{className:t===a?"active":"",onClick:l=>{r(t)},children:o},t))}),n.exports.jsx("div",{className:"tabs-content",children:e.map((o,t)=>t===a&&n.exports.jsx("div",{children:o},t))})]})};export{b as default};
