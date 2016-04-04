webpackJsonp([1],[/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(t,e,n){(function(t){"use strict";n(9),n(2),n(10),t.mount("app")}).call(e,n(1))},,/*!***********************!*\
  !*** ./src/stores.js ***!
  \***********************/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),i=r(o),s={blog:i["default"]};e["default"]=s},/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
function(t,e,n){(function(t){"use strict";t.tag2("app",'<section> <header> <nav> <ul> <li><a href="#posts">Home</a></li> </ul> </nav> </header> <article> <div id="mainview"></div> </article> <footer> <nav> <a onclick="{resetData}">Reset Data</a> </nav> </footer> </section>',"","",function(e){var n=this;this._currentView=null,this.resetData=function(){t.control.trigger(t.VE.RESET_DATA)},this.loadView=function(e,r){n._currentView&&n._currentView.unmount(!0),n._currentView=t.mount("div#mainview",e,{data:r})[0]},this.studyRoute=function(t,e){switch(t){case"categories":n.loadView("categories-view");break;case"detail":n.loadView("detail-view",e);break;case"posts":n.loadView("posts-view");break;default:n.loadView("posts-view")}},t.route(this.studyRoute),this.on("mount",function(){t.control.trigger(t.VE.RESET_DATA),t.route.start(!0)})})}).call(e,n(1))},/*!*************************************!*\
  !*** ./src/component/postcell.html ***!
  \*************************************/
function(t,e,n){(function(t){"use strict";t.tag2("postcell",'<div> <span>Title: <a href="#detail/{opts.data._id}">{opts.data.data.title}</a></span> </div>',"","",function(t){})}).call(e,n(1))},/*!************************************!*\
  !*** ./src/component/rawhtml.html ***!
  \************************************/
function(t,e,n){(function(t){"use strict";t.tag2("rawhtml","<span></span>","","",function(t){this.on("updated",function(){this.root.innerHTML=t.content})})}).call(e,n(1))},/*!***************************************!*\
  !*** ./src/view/categories-view.html ***!
  \***************************************/
function(t,e,n){(function(t){"use strict";t.tag2("categories-view",'<div each="{category, posts in _postsInCategories}"> <h3>{category}</h3> <postcell each="{posts}" data="{this}"></postcell> <hr> </div>',"","",function(e){var n=this;this.mixin("controlMixin"),this._postsInCategories={},this.on("mount",function(){t.control.trigger(t.VE.LOAD_POSTS)}),this.onControl(t.SE.POSTS_CHANGED,function(t){n._postsInCategories=t.reduce(function(t,e){return t[e.category]=t[e.category]||[],t[e.category].push(e),t},{}),n.update()})})}).call(e,n(1))},/*!***********************************!*\
  !*** ./src/view/detail-view.html ***!
  \***********************************/
function(t,e,n){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var r=n(2),o=e(r);t.tag2("detail-view",'<h2>{_post.data.title}</h2> <rawhtml content="{_post.data.content}"></rawhtml>',"","",function(e){var n=this;this.mixin("controlMixin"),this.onControl(t.SE.POSTS_CHANGED,function(t){n.readData()}),this.readData=function(){n._post=o["default"].blog.getPostById(e.data),n._total=o["default"].blog._posts.length,n.update()},this.readData()})}).call(e,n(1))},/*!**********************************!*\
  !*** ./src/view/posts-view.html ***!
  \**********************************/
function(t,e,n){(function(t){"use strict";t.tag2("posts-view",'<postcell each="{_posts}" data="{this}"></postcell>',"","",function(e){var n=this;this.mixin("controlMixin"),this._posts=[],this.on("mount",function(){t.control.trigger(t.VE.LOAD_POSTS)}),this.onControl(t.SE.POSTS_CHANGED,function(t){n._posts=t,n.update()})})}).call(e,n(1))},/*!****************************!*\
  !*** ./src/RiotControl.js ***!
  \****************************/
function(t,e,n){(function(t){"use strict";var e=["on","one","off","trigger"],n={_stores:[],addStore:function(t){this._stores.push(t)}};e.forEach(function(t){n[t]=function(){for(var e=arguments.length,n=Array(e),r=0;e>r;r++)n[r]=arguments[r];this._stores.forEach(function(e){return e[t].apply(null,n)})}}),t.control=n,t.SE={POSTS_CHANGED:"se_posts_changed"},t.VE={RESET_DATA:"ve_reset_data",LOAD_POSTS:"ve_load_posts"},t.mixin("controlMixin",{onControl:function(e,n){t.control.on(e,n),this.on("unmount",function(){return t.control.off(e,n)})}})}).call(e,n(1))},/*!*************************!*\
  !*** ./src/riotTags.js ***!
  \*************************/
function(t,e,n){"use strict";n(4),n(5),n(8),n(6),n(7),n(3)},/*!**************************!*\
  !*** ./src/stackable.js ***!
  \**************************/
function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),n(16),n(15).polyfill();var o=function(){function t(e){r(this,t),this._token=e,this._apiVersion="v1",this._apiUrl="https://api.stackable.space"}return t.prototype.getContainerItems=function(t,e){this._get("containers/"+t+"/items",function(t,n){e(t,n)})},t.prototype._get=function(t,e){var n=this._apiUrl+"/"+this._apiVersion+"/"+t+"?token="+this._token;fetch(n).then(function(t){if(t.status>=400){var n={message:"There was an error with this request."};return e(n,!1)}return t.json()}).then(function(t){e(!1,t)})},t}();e["default"]=o},/*!********************************!*\
  !*** ./src/store/blogstore.js ***!
  \********************************/
function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),s=r(i),a=function(){function e(){o(this,e),t.observable(this),this.stackable=new s["default"](STACK_ID);var n=window.localStorage.getItem(LOCALSTORAGE_KEY);n?this._posts=n&&JSON.parse(n)||[]:this.initData()}return e.prototype.getPostById=function(t){return this._posts.filter(function(e){return e._id===t})[0]},e.prototype.initData=function(){var e=this;this.stackable.getContainerItems(CONTAINER_ID,function(n,r){e._posts=r.data,e.saveToStorage(),e.trigger(t.SE.POSTS_CHANGED,e._posts)})},e.prototype.saveToStorage=function(){window.localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(this._posts))},e}(),u=new a;u.on(t.VE.LOAD_POSTS,function(){u.trigger(t.SE.POSTS_CHANGED,u._posts)}),u.on(t.VE.RESET_DATA,function(){u.initData(),u.trigger(t.SE.POSTS_CHANGED,u._posts)}),t.control.addStore(u),e["default"]=u}).call(e,n(1))},,,/*!*******************************************!*\
  !*** ./~/es6-promise/dist/es6-promise.js ***!
  \*******************************************/
function(t,e,n){var r;(function(t,o,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.1.2
	 */
(function(){"use strict";function s(t){return"function"==typeof t||"object"==typeof t&&null!==t}function a(t){return"function"==typeof t}function u(t){K=t}function c(t){$=t}function f(){return function(){t.nextTick(y)}}function l(){return function(){J(y)}}function h(){var t=0,e=new tt(y),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function p(){var t=new MessageChannel;return t.port1.onmessage=y,function(){t.port2.postMessage(0)}}function d(){return function(){setTimeout(y,1)}}function y(){for(var t=0;W>t;t+=2){var e=rt[t],n=rt[t+1];e(n),rt[t]=void 0,rt[t+1]=void 0}W=0}function _(){try{var t=n(24);return J=t.runOnLoop||t.runOnContext,l()}catch(e){return d()}}function v(t,e){var n=this,r=n._state;if(r===at&&!t||r===ut&&!e)return this;var o=new this.constructor(m),i=n._result;if(r){var s=arguments[r-1];$(function(){j(r,o,s,i)})}else R(n,o,t,e);return o}function w(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(m);return D(n,t),n}function m(){}function b(){return new TypeError("You cannot resolve a promise with itself")}function g(){return new TypeError("A promises callback cannot return that same promise.")}function E(t){try{return t.then}catch(e){return ct.error=e,ct}}function T(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function A(t,e,n){$(function(t){var r=!1,o=T(n,e,function(n){r||(r=!0,e!==n?D(t,n):x(t,n))},function(e){r||(r=!0,C(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,C(t,o))},t)}function S(t,e){e._state===at?x(t,e._result):e._state===ut?C(t,e._result):R(e,void 0,function(e){D(t,e)},function(e){C(t,e)})}function O(t,e,n){e.constructor===t.constructor&&n===ot&&constructor.resolve===it?S(t,e):n===ct?C(t,ct.error):void 0===n?x(t,e):a(n)?A(t,e,n):x(t,e)}function D(t,e){t===e?C(t,b()):s(e)?O(t,e,E(e)):x(t,e)}function P(t){t._onerror&&t._onerror(t._result),B(t)}function x(t,e){t._state===st&&(t._result=e,t._state=at,0!==t._subscribers.length&&$(B,t))}function C(t,e){t._state===st&&(t._state=ut,t._result=e,$(P,t))}function R(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+at]=n,o[i+ut]=r,0===i&&t._state&&$(B,t)}function B(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?j(n,r,o,i):o(i);t._subscribers.length=0}}function I(){this.error=null}function k(t,e){try{return t(e)}catch(n){return ft.error=n,ft}}function j(t,e,n,r){var o,i,s,u,c=a(n);if(c){if(o=k(n,r),o===ft?(u=!0,i=o.error,o=null):s=!0,e===o)return void C(e,g())}else o=r,s=!0;e._state!==st||(c&&s?D(e,o):u?C(e,i):t===at?x(e,o):t===ut&&C(e,o))}function L(t,e){try{e(function(e){D(t,e)},function(e){C(t,e)})}catch(n){C(t,n)}}function H(t){return new _t(this,t).promise}function M(t){function e(t){D(o,t)}function n(t){C(o,t)}var r=this,o=new r(m);if(!z(t))return C(o,new TypeError("You must pass an array to race.")),o;for(var i=t.length,s=0;o._state===st&&i>s;s++)R(r.resolve(t[s]),void 0,e,n);return o}function N(t){var e=this,n=new e(m);return C(n,t),n}function V(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function U(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function F(t){this._id=dt++,this._state=void 0,this._result=void 0,this._subscribers=[],m!==t&&("function"!=typeof t&&V(),this instanceof F?L(this,t):U())}function G(t,e){this._instanceConstructor=t,this.promise=new t(m),Array.isArray(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?x(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&x(this.promise,this._result))):C(this.promise,this._validationError())}function q(){var t;if("undefined"!=typeof o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;n&&"[object Promise]"===Object.prototype.toString.call(n.resolve())&&!n.cast||(t.Promise=yt)}var Y;Y=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var J,K,X,z=Y,W=0,$=function(t,e){rt[W]=t,rt[W+1]=e,W+=2,2===W&&(K?K(y):X())},Q="undefined"!=typeof window?window:void 0,Z=Q||{},tt=Z.MutationObserver||Z.WebKitMutationObserver,et="undefined"!=typeof t&&"[object process]"==={}.toString.call(t),nt="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,rt=new Array(1e3);X=et?f():tt?h():nt?p():void 0===Q?_():d();var ot=v,it=w,st=void 0,at=1,ut=2,ct=new I,ft=new I,lt=H,ht=M,pt=N,dt=0,yt=F;F.all=lt,F.race=ht,F.resolve=it,F.reject=pt,F._setScheduler=u,F._setAsap=c,F._asap=$,F.prototype={constructor:F,then:ot,"catch":function(t){return this.then(null,t)}};var _t=G;G.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},G.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===st&&t>n;n++)this._eachEntry(e[n],n)},G.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===it){var o=E(t);if(o===ot&&t._state!==st)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===yt){var i=new n(m);O(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},G.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===st&&(this._remaining--,t===ut?C(r,n):this._result[e]=n),0===this._remaining&&x(r,this._result)},G.prototype._willSettleAt=function(t,e){var n=this;R(t,void 0,function(t){n._settledAt(at,e,t)},function(t){n._settledAt(ut,e,t)})};var vt=q,wt={Promise:yt,polyfill:vt};n(20).amd?(r=function(){return wt}.call(e,n,e,i),!(void 0!==r&&(i.exports=r))):"undefined"!=typeof i&&i.exports?i.exports=wt:"undefined"!=typeof this&&(this.ES6Promise=wt),vt()}).call(this)}).call(e,n(17),function(){return this}(),n(22)(t))},/*!****************************************************!*\
  !*** ./~/isomorphic-fetch/fetch-npm-browserify.js ***!
  \****************************************************/
function(t,e,n){n(23),t.exports=self.fetch.bind(self)},/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
function(t,e){function n(){c=!1,s.length?u=s.concat(u):f=-1,u.length&&r()}function r(){if(!c){var t=setTimeout(n);c=!0;for(var e=u.length;e;){for(s=u,u=[];++f<e;)s&&s[f].run();f=-1,e=u.length}s=null,c=!1,clearTimeout(t)}}function o(t,e){this.fun=t,this.array=e}function i(){}var s,a=t.exports={},u=[],c=!1,f=-1;a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new o(t,e)),1!==u.length||c||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=i,a.addListener=i,a.once=i,a.off=i,a.removeListener=i,a.removeAllListeners=i,a.emit=i,a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},,,/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},,/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},/*!*********************************!*\
  !*** ./~/whatwg-fetch/fetch.js ***!
  \*********************************/
function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!=typeof t&&(t=String(t)),t}function r(t){this.map={},t instanceof r?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function o(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function i(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function s(t){var e=new FileReader;return e.readAsArrayBuffer(t),i(e)}function a(t){var e=new FileReader;return e.readAsText(t),i(e)}function u(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(d.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(d.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(t){if(!d.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type&&this.headers.set("content-type",this._bodyBlob.type))},d.blob?(this.blob=function(){var t=o(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(s)},this.text=function(){var t=o(this);if(t)return t;if(this._bodyBlob)return a(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var t=o(this);return t?t:Promise.resolve(this._bodyText)},d.formData&&(this.formData=function(){return this.text().then(l)}),this.json=function(){return this.text().then(JSON.parse)},this}function c(t){var e=t.toUpperCase();return y.indexOf(e)>-1?e:t}function f(t,e){e=e||{};var n=e.body;if(f.prototype.isPrototypeOf(t)){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new r(t.headers)),this.method=t.method,this.mode=t.mode,n||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=t;if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new r(e.headers)),this.method=c(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function l(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function h(t){var e=new r,n=t.getAllResponseHeaders().trim().split("\n");return n.forEach(function(t){var n=t.trim().split(":"),r=n.shift().trim(),o=n.join(":").trim();e.append(r,o)}),e}function p(t,e){e||(e={}),this.type="default",this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof r?e.headers:new r(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){r.prototype.append=function(t,r){t=e(t),r=n(r);var o=this.map[t];o||(o=[],this.map[t]=o),o.push(r)},r.prototype["delete"]=function(t){delete this.map[e(t)]},r.prototype.get=function(t){var n=this.map[e(t)];return n?n[0]:null},r.prototype.getAll=function(t){return this.map[e(t)]||[]},r.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},r.prototype.set=function(t,r){this.map[e(t)]=[n(r)]},r.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(n){this.map[n].forEach(function(r){t.call(e,r,n,this)},this)},this)};var d={blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t},y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];f.prototype.clone=function(){return new f(this)},u.call(f.prototype),u.call(p.prototype),p.prototype.clone=function(){return new p(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new r(this.headers),url:this.url})},p.error=function(){var t=new p(null,{status:0,statusText:""});return t.type="error",t};var _=[301,302,303,307,308];p.redirect=function(t,e){if(-1===_.indexOf(e))throw new RangeError("Invalid status code");return new p(null,{status:e,headers:{location:t}})},t.Headers=r,t.Request=f,t.Response=p,t.fetch=function(t,e){return new Promise(function(n,r){function o(){return"responseURL"in s?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):void 0}var i;i=f.prototype.isPrototypeOf(t)&&!e?t:new f(t,e);var s=new XMLHttpRequest;s.onload=function(){var t=1223===s.status?204:s.status;if(100>t||t>599)return void r(new TypeError("Network request failed"));var e={status:t,statusText:s.statusText,headers:h(s),url:o()},i="response"in s?s.response:s.responseText;n(new p(i,e))},s.onerror=function(){r(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials&&(s.withCredentials=!0),"responseType"in s&&d.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
function(t,e){}]);
//# sourceMappingURL=bundle.js.map