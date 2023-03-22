/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.103
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */var requirejs,require,define;function setTimeout(e){e()}/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.20 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */typeof self>"u"&&(self={}),self.onmessage=function(e){var t=e.data;require(t.loaderConfig,[t.workerModule],function(e){self.onmessage=e,self.CESIUM_BASE_URL=t.loaderConfig.baseUrl})},function(global){var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.20",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,isBrowser=!!("u">typeof window&&"u">typeof navigator&&window.document),isWebWorker=!isBrowser&&"u">typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="u">typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){if(e){var i;for(i=0;i<e.length&&!(e[i]&&t(e[i],i,e));i+=1);}}function eachReverse(e,t){if(e){var i;for(i=e.length-1;i>-1&&!(e[i]&&t(e[i],i,e));i-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var i;for(i in e)if(hasProp(e,i)&&t(e[i],i))break}function mixin(e,t,i,n){return t&&eachProp(t,function(t,r){(i||!hasProp(e,r))&&(!n||"object"!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp?e[r]=t:(e[r]||(e[r]={}),mixin(e[r],t,i,n)))}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,i,n){var r=Error(t+`
http://requirejs.org/docs/errors.html#`+e);return r.requireType=e,r.requireModules=n,i&&(r.originalError=i),r}if(!("u">typeof define)){if("u">typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"u">typeof require&&!isFunction(require)&&(cfg=require,require=void 0),req=requirejs=function(e,t,i,n){var r,o,a=defContextName;return isArray(e)||"string"==typeof e||(o=e,isArray(t)?(e=t,t=i,i=n):e=[]),o&&o.context&&(a=o.context),(r=getOwn(contexts,a))||(r=contexts[a]=req.s.newContext(a)),o&&r.configure(o),r.require(e,t,i)},req.config=function(e){return req(e)},req.nextTick=function(e){setTimeout(e,4)},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts,newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,i){var n=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return n.type=e.scriptType||"text/javascript",n.charset="utf-8",n.async=!0,n},req.load=function(e,t,i){var n,r=e&&e.config||{};if(isBrowser)return n=req.createNode(r,t,i),r.onNodeCreated&&r.onNodeCreated(n,r,t,i),n.setAttribute("data-requirecontext",e.contextName),n.setAttribute("data-requiremodule",t),!n.attachEvent||n.attachEvent.toString&&0>n.attachEvent.toString().indexOf("[native code")||isOpera?(n.addEventListener("load",e.onScriptLoad,!1),n.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,n.attachEvent("onreadystatechange",e.onScriptLoad)),n.src=i,currentlyAddingScript=n,baseElement?head.insertBefore(n,baseElement):head.appendChild(n),currentlyAddingScript=null,n;if(isWebWorker)try{importScripts(i),e.completeLoad(t)}catch(n){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+i,n,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute("data-main"))return mainScript=dataMain,cfg.baseUrl||(mainScript=(src=mainScript.split("/")).pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,t,i){var n,r;"string"!=typeof e&&(i=t,t=e,e=null),isArray(t)||(i=t,t=null),!t&&isFunction(i)&&(t=[],i.length&&(i.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,i){t.push(i)}),t=(1===i.length?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(n=currentlyAddingScript||getInteractiveScript())&&(e||(e=n.getAttribute("data-requiremodule")),r=contexts[n.getAttribute("data-requirecontext")]),r?(r.defQueue.push([e,t,i]),r.defQueueMap[e]=!0):globalDefQueue.push([e,t,i])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}function newContext(e){var t,i,n,r,o,a={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},s={},u={},f={},c=[],d={},p={},l={},h=1,m=1;function g(e){var t,i;for(t=0;t<e.length;t++)if("."===(i=e[t]))e.splice(t,1),t-=1;else if(".."===i){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}function v(e,t,i){var n,r,o,s,u,f,c,d,p,l,h=t&&t.split("/"),m=a.map,v=m&&m["*"];if(e&&(f=(e=e.split("/")).length-1,a.nodeIdCompat&&jsSuffixRegExp.test(e[f])&&(e[f]=e[f].replace(jsSuffixRegExp,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),g(e),e=e.join("/")),i&&m&&(h||v)){r=e.split("/");e:for(o=r.length;o>0;o-=1){if(u=r.slice(0,o).join("/"),h){for(s=h.length;s>0;s-=1)if((n=getOwn(m,h.slice(0,s).join("/")))&&(n=getOwn(n,u))){c=n,d=o;break e}}!p&&v&&getOwn(v,u)&&(p=getOwn(v,u),l=o)}!c&&p&&(c=p,d=l),c&&(r.splice(0,d,c),e=r.join("/"))}return getOwn(a.pkgs,e)||e}function x(e){isBrowser&&each(scripts(),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===n.contextName)return t.parentNode.removeChild(t),!0})}function b(e){var t=getOwn(a.paths,e);if(t&&isArray(t)&&t.length>1)return t.shift(),n.require.undef(e),n.makeRequire(null,{skipMap:!0})([e]),!0}function q(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function y(e,t,i,r){var o,a,s,u,f=null,c=t?t.name:null,p=e,l=!0,g="";return e||(l=!1,e="_@r"+(h+=1)),f=(u=q(e))[0],e=u[1],f&&(a=getOwn(d,f=v(f,c,r))),e&&(f?g=a&&a.normalize?a.normalize(e,function(e){return v(e,c,r)}):-1===e.indexOf("!")?v(e,c,r):e:(f=(u=q(g=v(e,c,r)))[0],g=u[1],i=!0,o=n.nameToUrl(g))),s=!f||a||i?"":"_unnormalized"+(m+=1),{prefix:f,name:g,parentMap:t,unnormalized:!!s,url:o,originalName:p,isDefine:l,id:(f?f+"!"+g:g)+s}}function E(e){var t=e.id,i=getOwn(s,t);return i||(i=s[t]=new n.Module(e)),i}function M(e,t,i){var n=e.id,r=getOwn(s,n);hasProp(d,n)&&(!r||r.defineEmitComplete)?"defined"===t&&i(d[n]):(r=E(e)).error&&"error"===t?i(r.error):r.on(t,i)}function k(e,t){var i=e.requireModules,n=!1;t?t(e):(each(i,function(t){var i=getOwn(s,t);i&&(i.error=e,i.events.error&&(n=!0,i.emit("error",e)))}),n||req.onError(e))}function S(){globalDefQueue.length&&(each(globalDefQueue,function(e){var t=e[0];"string"==typeof t&&(n.defQueueMap[t]=!0),c.push(e)}),globalDefQueue=[])}function T(e){delete s[e],delete u[e]}function j(e,t,i){var n=e.map.id;e.error?e.emit("error",e.error):(t[n]=!0,each(e.depMaps,function(n,r){var o=n.id,a=getOwn(s,o);!a||e.depMatched[r]||i[o]||(getOwn(t,o)?(e.defineDep(r,d[o]),e.check()):j(a,t,i))}),i[n]=!0)}function C(){var e,i,r=1e3*a.waitSeconds,s=r&&n.startTime+r<new Date().getTime(),f=[],c=[],d=!1,p=!0;if(!t){if(t=!0,eachProp(u,function(e){var t=e.map,n=t.id;if(e.enabled&&(t.isDefine||c.push(e),!e.error)){if(!e.inited&&s)b(n)?(i=!0,d=!0):(f.push(n),x(n));else if(!e.inited&&e.fetched&&t.isDefine&&(d=!0,!t.prefix))return p=!1}}),s&&f.length)return(e=makeError("timeout","Load timeout for modules: "+f,null,f)).contextName=n.contextName,k(e);p&&each(c,function(e){j(e,{},{})}),(!s||i)&&d&&(isBrowser||isWebWorker)&&!o&&(o=setTimeout(function(){o=0,C()},50)),t=!1}}function w(e){hasProp(d,e[0])||E(y(e[0],null,!0)).init(e[1],e[2])}function N(e,t,i,n){e.detachEvent&&!isOpera?n&&e.detachEvent(n,t):e.removeEventListener(i,t,!1)}function U(e){var t=e.currentTarget||e.srcElement;return N(t,n.onScriptLoad,"load","onreadystatechange"),N(t,n.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function A(){var e;for(S();c.length;){if(null===(e=c.shift())[0])return k(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));w(e)}n.defQueueMap={}}return r={require:function(e){return e.require?e.require:e.require=n.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?d[e.map.id]=e.exports:e.exports=d[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(a.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},(i=function(e){this.events=getOwn(f,e.id)||{},this.map=e,this.shim=getOwn(a.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0}).prototype={init:function(e,t,i,n){n=n||{},this.inited||(this.factory=t,i?this.on("error",i):this.events.error&&(i=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=i,this.inited=!0,this.ignore=n.ignore,n.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,n.startTime=new Date().getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();n.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;p[e]||(p[e]=!0,n.load(this.map.id,e))},check:function(){if(!(!this.enabled||this.enabling)){var e,t,i=this.map.id,r=this.depExports,o=this.exports,a=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(a)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{o=n.execCb(i,a,r,o)}catch(t){e=t}else o=n.execCb(i,a,r,o);if(this.map.isDefine&&void 0===o&&((t=this.module)?o=t.exports:this.usingExports&&(o=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",k(this.error=e)}else o=a;this.exports=o,this.map.isDefine&&!this.ignore&&(d[i]=o,req.onResourceLoad&&req.onResourceLoad(n,this.map,this.depMaps)),T(i),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else hasProp(n.defQueueMap,i)||this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,i=y(e.prefix);this.depMaps.push(i),M(i,"defined",bind(this,function(i){var r,o,u,f=getOwn(l,this.map.id),c=this.map.name,d=this.map.parentMap?this.map.parentMap.name:null,p=n.makeRequire(e.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){i.normalize&&(c=i.normalize(c,function(e){return v(e,d,!0)})||""),M(o=y(e.prefix+"!"+c,this.map.parentMap),"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),(u=getOwn(s,o.id))&&(this.depMaps.push(o),this.events.error&&u.on("error",bind(this,function(e){this.emit("error",e)})),u.enable());return}if(f){this.map.url=n.nameToUrl(f),this.load();return}(r=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})})).error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(s,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&T(e.map.id)}),k(e)}),r.fromText=bind(this,function(i,o){var s=e.name,u=y(s),f=useInteractive;o&&(i=o),f&&(useInteractive=!1),E(u),hasProp(a.config,t)&&(a.config[s]=a.config[t]);try{req.exec(i)}catch(e){return k(makeError("fromtexteval","fromText eval for "+t+" failed: "+e,e,[t]))}f&&(useInteractive=!0),this.depMaps.push(u),n.completeLoad(s),p([s],r)}),i.load(e.name,p,r,a)})),n.enable(i,this),this.pluginMaps[i.id]=i},enable:function(){u[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var i,o,a;if("string"==typeof e){if(e=y(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,a=getOwn(r,e.id)){this.depExports[t]=a(this);return}this.depCount+=1,M(e,"defined",bind(this,function(e){this.undefed||(this.defineDep(t,e),this.check())})),this.errback?M(e,"error",bind(this,this.errback)):this.events.error&&M(e,"error",bind(this,function(e){this.emit("error",e)}))}o=s[i=e.id],hasProp(r,i)||!o||o.enabled||n.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(s,e.id);t&&!t.enabled&&n.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var i=this.events[e];i||(i=this.events[e]=[]),i.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},(n={config:a,contextName:e,registry:s,defined:d,urlFetched:p,defQueue:c,defQueueMap:{},Module:i,makeModuleMap:y,nextTick:req.nextTick,onError:k,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var t=a.shim,i={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){i[t]?(a[t]||(a[t]={}),mixin(a[t],e,!0,!0)):a[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(l[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,i){isArray(e)&&(e={deps:e}),(e.exports||e.init)&&!e.exportsFn&&(e.exportsFn=n.makeShimExports(e)),t[i]=e}),a.shim=t),e.packages&&each(e.packages,function(e){var t;t=(e="string"==typeof e?{name:e}:e).name,e.location&&(a.paths[t]=e.location),a.pkgs[t]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(s,function(e,t){e.inited||e.map.unnormalized||(e.map=y(t,null,!0))}),(e.deps||e.callback)&&n.require(e.deps||[],e.callback)},makeShimExports:function(e){return function(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}},makeRequire:function(t,i){function o(a,u,f){var c,p;return i.enableBuildCallback&&u&&isFunction(u)&&(u.__requireJsBuild=!0),"string"==typeof a?isFunction(u)?k(makeError("requireargs","Invalid require call"),f):t&&hasProp(r,a)?r[a](s[t.id]):req.get?req.get(n,a,t,o):(c=y(a,t,!1,!0).id,hasProp(d,c)?d[c]:k(makeError("notloaded",'Module name "'+c+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(A(),n.nextTick(function(){A(),(p=E(y(null,t))).skipMap=i.skipMap,p.init(a,u,f,{enabled:!0}),C()}),o)}return i=i||{},mixin(o,{isBrowser,toUrl:function(e){var i,r=e.lastIndexOf("."),o=e.split("/")[0],a="."===o||".."===o;return -1!==r&&(!a||r>1)&&(i=e.substring(r,e.length),e=e.substring(0,r)),n.nameToUrl(v(e,t&&t.id,!0),i,!0)},defined:function(e){return hasProp(d,y(e,t,!1,!0).id)},specified:function(e){return e=y(e,t,!1,!0).id,hasProp(d,e)||hasProp(s,e)}}),t||(o.undef=function(e){S();var i=y(e,t,!0),r=getOwn(s,e);r.undefed=!0,x(e),delete d[e],delete p[i.url],delete f[e],eachReverse(c,function(t,i){t[0]===e&&c.splice(i,1)}),delete n.defQueueMap[e],r&&(r.events.defined&&(f[e]=r.events),T(e))}),o},enable:function(e){getOwn(s,e.id)&&E(e).enable()},completeLoad:function(e){var t,i,r,o=getOwn(a.shim,e)||{},u=o.exports;for(S();c.length;){if(null===(i=c.shift())[0]){if(i[0]=e,t)break;t=!0}else i[0]===e&&(t=!0);w(i)}if(n.defQueueMap={},r=getOwn(s,e),!t&&!hasProp(d,e)&&r&&!r.inited){if(a.enforceDefine&&(!u||!getGlobal(u)))return b(e)?void 0:k(makeError("nodefine","No define call for "+e,null,[e]));w([e,o.deps||[],o.exportsFn])}C()},nameToUrl:function(e,t,i){var r,o,s,u,f,c,d=getOwn(a.pkgs,e);if(d&&(e=d),c=getOwn(l,e))return n.nameToUrl(c,t,i);if(req.jsExtRegExp.test(e))u=e+(t||"");else{for(r=a.paths,s=(o=e.split("/")).length;s>0;s-=1)if(f=getOwn(r,o.slice(0,s).join("/"))){isArray(f)&&(f=f[0]),o.splice(0,s,f);break}u=o.join("/"),u+=t||(/^data\:|\?/.test(u)||i?"":".js"),u=("/"===u.charAt(0)||u.match(/^[\w\+\.\-]+:/)?"":a.baseUrl)+u}return a.urlArgs?u+(-1===u.indexOf("?")?"?":"&")+a.urlArgs:u},load:function(e,t){req.load(n,e,t)},execCb:function(e,t,i,n){return t.apply(n,i)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=U(e);n.completeLoad(t.id)}},onScriptError:function(e){var t=U(e);if(!b(t.id))return k(makeError("scripterror","Script error for: "+t.id,e,[t.id]))}}).require=n.makeRequire(),n}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState||eachReverse(scripts(),function(e){if("interactive"===e.readyState)return interactiveScript=e}),interactiveScript}}(this);