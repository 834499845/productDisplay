webpackJsonp([7,5],{0:function(e,t,n){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}n(201);var u=n(64),o=t(u),i=n(480),a=t(i),r=n(199),s=t(r),d=n(197),l=t(d),c=n(513),f=t(c),h=n(512),p=t(h),m=n(514),v=t(m);n(475);var g=n(196),b=t(g);n(458),o.default.use(b.default),o.default.use(v.default),o.default.use(f.default),o.default.use(p.default),o.default.http.options.emulateJSON=!0,o.default.prototype.$vuescrollConfig={bar:{vBar:{background:"#ccc"}}};var y=new f.default({mode:"history",base:e,routes:l.default});new o.default({store:s.default,router:y,render:function(e){return e(a.default)}}).$mount("#app")}).call(t,"/")},178:function(e,t){"use strict"},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(39);t.default={components:{},data:function(){return{heiVal:0,isPcShow:!0,isHeaderSelect:!1,isRightLiSelect:0,mainLists:[{name:"首页",id:"1",swiper:"swiper1",path:"home",pathb:"bhome",ptheight:0,height:1265},{name:"微应用",id:"2",swiper:"swiper2",path:"mApp",pathb:"mApp",ptheight:0,height:868},{name:"解决方案",id:"4",swiper:"swiper4",path:"solution",pathb:"solution",ptheight:0,height:731},{name:"支持与服务",id:"6",swiper:"swiper6",path:"server",pathb:"server",ptheight:0,height:819}]}},filters:{},computed:{},mounted:function(){var e=this;e.isPcShow=!0;e.$route.path;"/home"!=e.$route.path&&"/bhome"!=e.$route.path||(document.body.clientWidth>1280&&document.body.clientHeight>900?e.$router.push({path:"/bhome"}):e.$router.push({path:"/home"})),window.onresize=function(){"/home"!=e.$route.path&&"/bhome"!=e.$route.path||(document.body.clientWidth>1220&&document.body.clientHeight>850?e.$router.push({path:"/bhome"}):e.$router.push({path:"/home"}))}},created:function(){var e=this;e.isRightLiSelect=sessionStorage.getItem("selectIndex")||0},methods:{headliCLick:function(e){var t=this;document.body.clientWidth>1220&&document.body.clientHeight>850?"支持与服务"==t.mainLists[e].name?t.heiVal=t.mainLists[e].name+"?"+(new Date).getTime():(t.isRightLiSelect=e,sessionStorage.setItem("selectIndex",e),t.$router.push({path:"/"+t.mainLists[e].pathb})):"支持与服务"==t.mainLists[e].name?t.heiVal=t.mainLists[e].name+"?"+(new Date).getTime():(t.isRightLiSelect=e,sessionStorage.setItem("selectIndex",e),t.$router.push({path:"/"+t.mainLists[e].path}))}}}},195:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(203),i=u(o),a=n(64),r=u(a),s={remoteIndex:function(e,t){return r.default.http.get(e,{}).then(function(e){return 200===e.status?i.default.resolve(e.body):i.default.reject(e.data)})},apimenu:function(e,t){return r.default.http.get(e,{}).then(function(e){return 200===e.status?i.default.resolve(e.body):i.default.reject(e.data.message)})},remoteProduct:function(e,t){var n="";return n=t.id?e+"/"+t.id:e,r.default.http.get(n,{}).then(function(e){return 200===e.status?i.default.resolve(e.body):i.default.reject(e.data.message)})},remoteSolution:function(e,t){var n="";return n=t.id?e+"/"+t.id:e+"?type="+t.type+"&size="+t.size,r.default.http.get(n,{}).then(function(e){return 200===e.status?i.default.resolve(e.body):i.default.reject(e.data.message)})},remoteLab:function(e,t){var n="";return n=t.id?e+"/"+t.id:e+"?size="+t.size,r.default.http.get(n,{}).then(function(e){return 200===e.status?i.default.resolve(e.body):i.default.reject(e.data.message)})},remoteNews:function(e,t){var n="";return n=t.id?e+"/"+t.id:e+"?type="+t.type+"&size="+t.size+"&no="+t.no,r.default.http.get(n,{}).then(function(e){return 200===e.status?i.default.resolve(e.body):i.default.reject(e.data.message)})},remotepartner:function(e,t){var n=e+"?size="+t.size;return r.default.http.get(n,{}).then(function(e){return 200===e.status?i.default.resolve(e.body):i.default.reject(e.data.message)})},remoteJoinus:function(e,t){var n="";return n=t.id?e+"/"+t.id:e+"?size="+t.size+"&no="+t.no,r.default.http.get(n,{}).then(function(e){return 200===e.status?i.default.resolve(e.body):i.default.reject(e.data.message)})},remoteContactus:function(e,t){return r.default.http.get(e,{}).then(function(e){return 200===e.status?i.default.resolve(e.body):i.default.reject(e.data.message)})}};t.default=s},196:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={install:function(e,t){e.prototype.addEventListenerHide=function(e,t){var n=function(e){e.preventDefault()};document.body.style.overflow="hidden",document.addEventListener("touchmove",n,!1)},e.prototype.addEventListenerShow=function(e,t){var n=function(e){e.preventDefault()};document.body.style.overflow="",document.removeEventListener("touchmove",n,!1)}}}},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/",redirect:"/home"},{path:"/bhome",component:function(e){n.e(0,function(t){var n=[t(493)];e.apply(null,n)}.bind(this))}},{path:"/home",component:function(e){n.e(1,function(t){var n=[t(483)];e.apply(null,n)}.bind(this))}},{path:"/mApp",component:function(e){n.e(4,function(t){var n=[t(484)];e.apply(null,n)}.bind(this))}},{path:"/solution",component:function(e){n.e(2,function(t){var n=[t(487)];e.apply(null,n)}.bind(this))}},{path:"/server",component:function(e){n.e(3,function(t){var n=[t(486)];e.apply(null,n)}.bind(this))}}]},198:function(e,t,n){(function(e){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(205),i=u(o),a=n(64),r=(u(a),n(195)),s=u(r);n(178),t.default={getremoteIndex:function(t,n){return(0,i.default)(t),s.default.remoteIndex(e.remoteIndex,n)},getapimenu:function(t,n){return(0,i.default)(t),s.default.apimenu(e.apimenu,n)},getremoteProduct:function(t,n){return(0,i.default)(t),s.default.remoteProduct(e.remoteProduct,n)},getremoteSolution:function(t,n){return(0,i.default)(t),s.default.remoteSolution(e.remoteSolution,n)},getremoteLab:function(t,n){return(0,i.default)(t),s.default.remoteLab(e.remoteLab,n)},getremoteNews:function(t,n){return(0,i.default)(t),s.default.remoteNews(e.remoteNews,n)},getremotepartner:function(t,n){return(0,i.default)(t),s.default.remotepartner(e.remotepartner,n)},getremoteJoinus:function(t,n){return(0,i.default)(t),s.default.remoteJoinus(e.remoteJoinus,n)},getremoteContactus:function(t,n){return(0,i.default)(t),s.default.remoteContactus(e.remoteContactus,n)}}}).call(t,function(){return this}())},199:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(64),i=u(o),a=n(39),r=u(a),s=n(198),d=u(s),l=n(200),c=u(l);i.default.use(r.default);var f=new r.default.Store({state:{joinuslists:[]},mutations:c.default,actions:d.default});t.default=f},200:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={MutVuexjoinuslists:function(e,t){e.joinuslists=t}}},458:function(e,t){},462:function(e,t){},475:function(e,t){},480:function(e,t,n){n(462);var u=n(12)(n(179),n(499),"data-v-1eb3bd6a",null);e.exports=u.exports},499:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{pcView:e.isPcShow}},[n("header",{class:{header:!0}},[n("div",{staticClass:"headerMain"},[n("div",{staticClass:"header-left"},[n("img",{attrs:{src:"/static/img/伯通logo.png",alt:""},on:{click:function(t){e.headliCLick(99)}}}),e._v(" "),n("div",[e._v("伯通办公")])]),e._v(" "),n("div",{staticClass:"header-right"},[n("ul",e._l(e.mainLists,function(t,u){return n("li",{key:u,class:{"header-rightLi":!0,"header-rightLiSelect":e.isRightLiSelect==u},on:{click:function(t){e.headliCLick(u)}}},[e._v("\n            "+e._s(t.name)+"\n          ")])}))])])]),e._v(" "),n("main",[n("router-view",{attrs:{hei:e.heiVal,"keep-alive":""}})],1)])},staticRenderFns:[]}},515:function(e,t){}});