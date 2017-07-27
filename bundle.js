!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";function r(e){return"[object Array]"===A.call(e)}function o(e){return"[object ArrayBuffer]"===A.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function a(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function s(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===A.call(e)}function l(e){return"[object File]"===A.call(e)}function p(e){return"[object Blob]"===A.call(e)}function h(e){return"[object Function]"===A.call(e)}function m(e){return f(e)&&h(e.pipe)}function v(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function y(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document}function w(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function b(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=b(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function E(e,t,n){return w(t,function(t,r){e[r]=n&&"function"==typeof t?T(t,n):t}),e}var T=n(3),x=n(10),A=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:x,isFormData:i,isArrayBufferView:a,isString:u,isNumber:s,isObject:f,isUndefined:c,isDate:d,isFile:l,isBlob:p,isFunction:h,isStream:m,isURLSearchParams:v,isStandardBrowserEnv:g,forEach:w,merge:b,extend:E,trim:y}},function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(0),i=n(13),a={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(4):void 0!==t&&(e=n(4)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){u.headers[e]={}}),o.forEach(["post","put","patch"],function(e){u.headers[e]=o.merge(a)}),e.exports=u}).call(t,n(12))},function(e,t,n){e.exports=n(9)},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0),o=n(14),i=n(16),a=n(17),u=n(18),s=n(5),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(19);e.exports=function(e){return new Promise(function(t,f){var d=e.data,l=e.headers;r.isFormData(d)&&delete l["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||u(e.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var v=e.auth.username||"",y=e.auth.password||"";l.Authorization="Basic "+c(v+":"+y)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,i={data:r,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};o(t,f,i),p=null}},p.onerror=function(){f(s("Network Error",e,null,p)),p=null},p.ontimeout=function(){f(s("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=n(20),w=(e.withCredentials||u(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;w&&(l[e.xsrfHeaderName]=w)}if("setRequestHeader"in p&&r.forEach(l,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),f(e),p=null)}),void 0===d&&(d=null),p.send(d)})}},function(e,t,n){"use strict";var r=n(15);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){console.log("ddddd"),f.remove(e+t),document.getElementsByTagName("body")[0].removeChild(document.getElementById("div-"+t))}function a(e,t){var n=document.createElement("textarea");n.setAttribute("id","edit-area-"+v.id),n.setAttribute("cols",30),n.setAttribute("rows",1),document.getElementById("div-"+t).appendChild(n),document.getElementById("update-"+t).style.display="none";var r=document.createElement("button");r.setAttribute("id","done-"+v.id),r.innerHTML="done",document.getElementById("div-"+t).appendChild(r),r.addEventListener("click",function(e){var o={title:n.value};f.update("https://todo-simple-api.herokuapp.com/todos/"+t,o).then(function(e){1==e.data.success&&(document.getElementById("small-div-"+t).innerHTML=e.data.data.title,document.getElementById("update-"+t).style.display="initial",r.style.display="none",n.style.display="none")})})}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),c=(r(s),n(28)),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),d=n(29),l=r(d),p=n(30),h=r(p),m=function(){function e(t){o(this,e),this.id=t}return u(e,[{key:"init",value:function(){var e=this;this.element=document.getElementById(this.id),console.log(this.id);var t=new l.default;t.create();var n=new h.default("text","to-do","id1");n.create();var r=new h.default("submit","submit","id2","submit");r.create(),t.append(n.element),t.append(r.element),this.element.appendChild(t.element),t.element.addEventListener("submit",function(t){t.preventDefault();var r={title:n.element.value,description:"aanchal"};e.postToDo("https://todo-simple-api.herokuapp.com/todos?page=1&page_size=2000",r)})}},{key:"postToDo",value:function(e,t){f.post(e,t).then(function(e){var t=document.createElement("div");t.setAttribute("id","div-"+e.data.data.id);var n=document.createElement("div");n.setAttribute("id","small-div-"+e.data.data.id),n.innerHTML=e.data.data.title,t.appendChild(n),document.getElementsByTagName("body")[0].appendChild(t);var r=document.createElement("button");r.setAttribute("id","button-"+e.data.data.id),r.innerHTML="remove",r.addEventListener("click",function(t){i("https://todo-simple-api.herokuapp.com/todos/",e.data.data.id)}),t.appendChild(r);var o=document.createElement("button");o.setAttribute("id","update-"+e.data.data.id),o.innerHTML="edit",o.addEventListener("click",function(t){a("https://todo-simple-api.herokuapp.com/todos/",e.data.data.id)}),t.appendChild(o)})}}]),e}(),v=new m("container-id");v.init(),f.get("https://todo-simple-api.herokuapp.com/todos?page=1&page_size=2000").then(function(e){e.data.data.forEach(function(e){if("aanchal"==e.description){var t=document.createElement("div");t.setAttribute("id","div-"+e.id);var n=document.createElement("div");n.setAttribute("id","small-div-"+e.id),n.innerHTML=e.title,t.appendChild(n),document.getElementsByTagName("body")[0].appendChild(t);var r=document.createElement("button");r.setAttribute("id","remove-"+e.id),r.innerHTML="remove",r.addEventListener("click",function(t){i("https://todo-simple-api.herokuapp.com/todos/",e.id)}),t.appendChild(r);var o=document.createElement("button");o.setAttribute("id","update-"+e.id),o.innerHTML="edit",o.addEventListener("click",function(t){a("https://todo-simple-api.herokuapp.com/todos/",e.id)}),t.appendChild(o)}})})},function(e,t,n){"use strict";function r(e){var t=new a(e),n=i(a.prototype.request,t);return o.extend(n,a.prototype,t),o.extend(n,t),n}var o=n(0),i=n(3),a=n(11),u=n(1),s=r(u);s.Axios=a,s.create=function(e){return r(o.merge(u,e))},s.Cancel=n(7),s.CancelToken=n(26),s.isCancel=n(6),s.all=function(e){return Promise.all(e)},s.spread=n(27),e.exports=s,e.exports.default=s},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new a,response:new a}}var o=n(1),i=n(0),a=n(21),u=n(22),s=n(24),c=n(25);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url));var t=[u,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){m&&p&&(m=!1,p.length?h=p.concat(h):v=-1,h.length&&u())}function u(){if(!m){var e=o(a);m=!0;for(var t=h.length;t;){for(p=h,h=[];++v<t;)p&&p[v].run();v=-1,t=h.length}p=null,m=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var f,d,l=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}}();var p,h=[],m=!1,v=-1;l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||m||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=c,l.addListener=c,l.once=c,l.off=c,l.removeListener=c,l.removeAllListeners=c,l.emit=c,l.prependListener=c,l.prependOnceListener=c,l.listeners=function(e){return[]},l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(5);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(0);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var a=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))}))}),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),a="",u=0,s=i;o.charAt(0|u)||(s="=",u%1);a+=s.charAt(63&t>>8-u%1*8)){if((n=o.charCodeAt(u+=.75))>255)throw new r;t=t<<8|n}return a}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,a){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),!0===a&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(0);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(0),i=n(23),a=n(6),u=n(1);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||u.adapter)(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(7);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";function r(e){return(0,s.default)({method:"GET",url:e})}function o(e,t){return(0,s.default)({method:"POST",url:e,data:t})}function i(e,t){return(0,s.default)({method:"PUT",url:e,data:t})}function a(e){return(0,s.default)({method:"DELETE",url:e})}Object.defineProperty(t,"__esModule",{value:!0}),t.get=r,t.post=o,t.update=i,t.remove=a;var u=n(2),s=function(e){return e&&e.__esModule?e:{default:e}}(u)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return o(e,[{key:"create",value:function(){console.log("form"),this.element=document.createElement("form"),this.element.setAttribute("action",""),this.element.setAttribute("method","POST")}},{key:"append",value:function(e){console.log(e),this.element.appendChild(e)}}]),e}();t.default=i},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t,n,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"da";r(this,e),this.type=t,this.name=n,this.id=o,this.value=i}return o(e,[{key:"create",value:function(){if(console.log("input"),this.element=document.createElement("input"),this.element.setAttribute("type",this.type),this.element.setAttribute("name",this.name),this.element.setAttribute("id",this.id),"submit"==this.type)this.element.setAttribute("value",this.value);else{var e="enter your "+this.name;this.element.setAttribute("placeholder",e)}}}]),e}();t.default=i}]);