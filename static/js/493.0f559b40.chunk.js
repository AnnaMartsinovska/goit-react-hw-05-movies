"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{493:function(t,r,e){e.r(r);var n=e(439),a=e(791),c=e(881),u=e(689),i=e(390),s=e(184);r.default=function(){var t=(0,u.UO)().movieId,r=(0,a.useState)(null),e=(0,n.Z)(r,2),o=e[0],p=e[1];return(0,a.useEffect)((function(){(0,i.xc)(t).then((function(t){p(t.cast)}))}),[t]),o?(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:null===o||void 0===o?void 0:o.map((function(t){return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):"https://st3.depositphotos.com/2546551/18320/v/1600/depositphotos_183205204-stock-illustration-male-avatar-profile-picture-silhouette.jpg",alt:t.name,width:150}),(0,s.jsx)("p",{children:t.name}),(0,s.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})}):(0,s.jsx)(c.no,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"})}},390:function(t,r,e){e.d(r,{Hx:function(){return h},Mc:function(){return f},bI:function(){return p},wr:function(){return o},xc:function(){return l}});var n=e(683),a=e(861),c=e(757),u=e.n(c),i=e(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="ca7c7084b600eecae0e2f34ff34fb9e6",o=function(){var t=(0,a.Z)(u().mark((function t(r){var e,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/trending/all/day",{params:(0,n.Z)((0,n.Z)({},r),{},{api_key:s})});case 2:return e=t.sent,a=e.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)(u().mark((function t(r,e){var a,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/search/movie",{params:(0,n.Z)((0,n.Z)({query:r},e),{},{api_key:s})});case 2:return a=t.sent,c=a.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(r),{params:{api_key:s}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(r,"/credits"),{params:{api_key:s}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(r,"/reviews"),{params:{api_key:s}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=493.0f559b40.chunk.js.map