"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[871],{25:function(r,t,e){e.d(t,{Hg:function(){return s},TP:function(){return o},qF:function(){return i},tx:function(){return p},zv:function(){return f}});var n=e(861),a=e(757),u=e.n(a),c=e(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"339c4970f6f5303b0e27671505cfa5b0"}}),s=function(){var r=(0,n.Z)(u().mark((function r(){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("trending/movie/week");case 2:return t=r.sent,e=t.data,r.abrupt("return",e.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("search/movie",{params:{query:t}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(t));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(t,"/credits"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n.cast);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(t,"/reviews"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},871:function(r,t,e){e.r(t),e.d(t,{default:function(){return p}});var n=e(861),a=e(439),u=e(757),c=e.n(u),s=e(689),i=e(791),o=e(25),f=e(184);function p(){var r=(0,s.UO)().movieId,t=(0,i.useState)([]),e=(0,a.Z)(t,2),u=e[0],p=e[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.tx)(r);case 3:e=t.sent,p(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]),(0,f.jsx)("ul",{className:"rewievsList",children:0===u.length?(0,f.jsx)("p",{children:"We don't have any reviews for this movie"}):u.map((function(r){var t=r.id,e=r.author,n=r.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author: ",e]}),(0,f.jsxs)("p",{children:[" ",n]})]},t)}))})}}}]);
//# sourceMappingURL=871.65529e8f.chunk.js.map