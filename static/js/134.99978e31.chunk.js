"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(e,n,r){r.r(n);var t,a=r(168),u=r(439),c=r(791),i=r(881),o=r(87),s=r(689),p=r(390),f=r(867),l=r(184),v=f.ZP.input(t||(t=(0,a.Z)(["\n  width: 300px;\n  margin-bottom: 80px;\n  margin-right: 10px;\n\n  &:hover,\n  &:focus {\n    border-color: blue;\n  }\n"])));n.default=function(){var e,n=(0,c.useState)(""),r=(0,u.Z)(n,2),t=r[0],a=r[1],f=(0,c.useState)(null),d=(0,u.Z)(f,2),h=d[0],m=d[1],x=(0,o.lr)(),w=(0,u.Z)(x,2),b=w[0],k=w[1],Z=null!==(e=b.get("query"))&&void 0!==e?e:"",y=(0,s.TH)();(0,c.useEffect)((function(){(0,p.bI)(Z).then((function(e){m(e.results)}))}),[Z]);var g=function(){k(t?{query:t}:{})};return h?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(v,{type:"text",value:t,onChange:function(e){a(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&g()}}),(0,l.jsx)("button",{onClick:g,children:"Search"})]}),(0,l.jsx)("ul",{children:h.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsxs)(o.rU,{state:{from:y},to:"/movies/".concat(null===e||void 0===e?void 0:e.id),children:[e.title,e.name]})},e.id)}))})]}):(0,l.jsx)(i.no,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"})}},390:function(e,n,r){r.d(n,{Hx:function(){return v},Mc:function(){return f},bI:function(){return p},wr:function(){return s},xc:function(){return l}});var t=r(683),a=r(861),u=r(757),c=r.n(u),i=r(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="ca7c7084b600eecae0e2f34ff34fb9e6",s=function(){var e=(0,a.Z)(c().mark((function e(n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/all/day",{params:(0,t.Z)((0,t.Z)({},n),{},{api_key:o})});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(c().mark((function e(n,r){var a,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie",{params:(0,t.Z)((0,t.Z)({query:n},r),{},{api_key:o})});case 2:return a=e.sent,u=a.data,e.abrupt("return",u);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n),{params:{api_key:o}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n,"/credits"),{params:{api_key:o}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n,"/reviews"),{params:{api_key:o}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.99978e31.chunk.js.map