(function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],s=0,f=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"2be5a1a9"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/app/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5465:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("e4fd"),o=n.n(r),a=n("2b88"),i=n.n(a),u=(n("def6"),n("2b0e")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],s=(n("a5d2"),n("2877")),d={},f=Object(s["a"])(d,c,l,!1,null,null,null),p=f.exports,h=(n("d3b7"),n("8c4f"));u["default"].use(h["a"]);var v=[{path:"index.html",redirect:"/"},{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"*",redirect:"/"}],b=new h["a"]({routes:v}),g=b,m=n("9483");Object(m["a"])("".concat("/app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var y=n("c820");u["default"].use(i.a),u["default"].use(o.a),Object(y["b"])(),u["default"].config.productionTip=!1,new u["default"]({router:g,render:function(e){return e(p)}}).$mount("#app")},"6b3b":function(e,t,n){},a5d2:function(e,t,n){"use strict";var r=n("5465"),o=n.n(r);o.a},c820:function(e,t,n){"use strict";n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return j}));var r={};n.r(r),n.d(r,"TextInput",(function(){return f})),n.d(r,"Loading",(function(){return m}));var o=n("e4fd"),a=(n("4160"),n("b0c0"),n("07ac"),n("159b"),n("2b0e")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block",attrs:{for:e.$attrs.id||e.$attrs.name}},[e._t("label"),e.multiline?n("textarea",{staticClass:"block w-full px-2 py-4 font-medium rounded-lg border-2 border-pink-300 focus:outline-none focus:shadow-outline resize-y bg-pink-100 hover:bg-white transition duration-300",class:{"border-orange-700":""!==e.error},attrs:{name:e.$attrs.name||e.$attrs.id,id:e.$attrs.id||e.$attrs.name,placeholder:e.$attrs.placeholder},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}):n("input",{staticClass:"block w-full px-2 py-4 font-medium rounded-lg border-2 border-pink-300 focus:outline-none focus:shadow-outline bg-pink-100 hover:bg-white transition duration-300",class:{"border-orange-700":""!==e.error},attrs:{type:e.$attrs.type||"text",name:e.$attrs.name||e.$attrs.id,id:e.$attrs.id||e.$attrs.name,placeholder:e.$attrs.placeholder},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e.error?n("p",{staticClass:"mt-1 text-sm font-medium text-orange-700"},[e._v(" "+e._s(e.error)+" ")]):e._e()],2)},u=[],c={name:"TextInput",props:{multiline:{type:Boolean,default:!1},value:{type:String,required:!0},error:{type:String,default:""}}},l=c,s=n("2877"),d=Object(s["a"])(l,i,u,!1,null,null,null),f=d.exports,p=function(e,t){var n=t._c;return n("div",{staticClass:"loading"})},h=[],v={name:"Loading"},b=v,g=(n("d583"),Object(s["a"])(b,p,h,!0,null,"467871f5",null)),m=g.exports;function y(){Object.values(r).forEach((function(e){a["default"].component(e.name,e)}))}n("a15b"),n("d3b7");function w(e){var t=e.url,n=e.method,r=e.body,o=e.cb;return fetch(t,{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){var t=e.json();return o(e),t})).catch((function(e){console.error("Error:",e)}))}function j(){var e=Object(o["reactive"])({error:!1,result:{},loading:!1});function t(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.loading=!0;var o=!0;var a="http://localhost:4000/".concat([t,r].join("/"));o&&(a="https://short.colehollant.com/".concat([t,r].join("/")));var i=-1;w({url:a,method:"POST",body:n,cb:function(e){i=e.status}}).then((function(t){if(200!==i)return e.error=!0,e.result=t,void(e.loading=!1);e.error=!1,e.result=t,e.loading=!1}))}function n(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.loading=!0;var r=!0;var o="http://localhost:4000/".concat([t,n].join("/"));r&&(o="https://short.colehollant.com/".concat([t,n].join("/")));var a=-1;w({url:o,method:"GET",cb:function(e){a=e.status}}).then((function(t){if(200!==a)return e.error=!0,e.result=t,void(e.loading=!1);e.error=!1,e.result=t.data,e.loading=!1}))}return{responseState:e,post:t,get:n}}},d583:function(e,t,n){"use strict";var r=n("6b3b"),o=n.n(r);o.a},def6:function(e,t,n){}});
//# sourceMappingURL=app.83dacb0e.js.map