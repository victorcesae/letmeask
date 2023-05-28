(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var bg={exports:{}},Rl={},Dg={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io=Symbol.for("react.element"),K0=Symbol.for("react.portal"),q0=Symbol.for("react.fragment"),Q0=Symbol.for("react.strict_mode"),Y0=Symbol.for("react.profiler"),J0=Symbol.for("react.provider"),X0=Symbol.for("react.context"),Z0=Symbol.for("react.forward_ref"),eE=Symbol.for("react.suspense"),tE=Symbol.for("react.memo"),nE=Symbol.for("react.lazy"),tp=Symbol.iterator;function rE(t){return t===null||typeof t!="object"?null:(t=tp&&t[tp]||t["@@iterator"],typeof t=="function"?t:null)}var Lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mg=Object.assign,Fg={};function Mi(t,e,n){this.props=t,this.context=e,this.refs=Fg,this.updater=n||Lg}Mi.prototype.isReactComponent={};Mi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ug(){}Ug.prototype=Mi.prototype;function Gd(t,e,n){this.props=t,this.context=e,this.refs=Fg,this.updater=n||Lg}var Kd=Gd.prototype=new Ug;Kd.constructor=Gd;Mg(Kd,Mi.prototype);Kd.isPureReactComponent=!0;var np=Array.isArray,jg=Object.prototype.hasOwnProperty,qd={current:null},Wg={key:!0,ref:!0,__self:!0,__source:!0};function zg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jg.call(e,r)&&!Wg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Io,type:t,key:s,ref:o,props:i,_owner:qd.current}}function iE(t,e){return{$$typeof:Io,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Io}function sE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rp=/\/+/g;function ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sE(""+t.key):e.toString(36)}function pa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Io:case K0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ku(o,0):r,np(i)?(n="",t!=null&&(n=t.replace(rp,"$&/")+"/"),pa(i,e,n,"",function(u){return u})):i!=null&&(Qd(i)&&(i=iE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",np(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ku(s,a);o+=pa(s,e,n,l,i)}else if(l=rE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ku(s,a++),o+=pa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qo(t,e,n){if(t==null)return t;var r=[],i=0;return pa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function oE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},ma={transition:null},aE={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:ma,ReactCurrentOwner:qd};z.Children={map:qo,forEach:function(t,e,n){qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qo(t,function(){e++}),e},toArray:function(t){return qo(t,function(e){return e})||[]},only:function(t){if(!Qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=Mi;z.Fragment=q0;z.Profiler=Y0;z.PureComponent=Gd;z.StrictMode=Q0;z.Suspense=eE;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aE;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jg.call(e,l)&&!Wg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Io,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:X0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:J0,_context:t},t.Consumer=t};z.createElement=zg;z.createFactory=function(t){var e=zg.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Z0,render:t}};z.isValidElement=Qd;z.lazy=function(t){return{$$typeof:nE,_payload:{_status:-1,_result:t},_init:oE}};z.memo=function(t,e){return{$$typeof:tE,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=ma.transition;ma.transition={};try{t()}finally{ma.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return ze.current.useCallback(t,e)};z.useContext=function(t){return ze.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};z.useEffect=function(t,e){return ze.current.useEffect(t,e)};z.useId=function(){return ze.current.useId()};z.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return ze.current.useMemo(t,e)};z.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};z.useRef=function(t){return ze.current.useRef(t)};z.useState=function(t){return ze.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return ze.current.useTransition()};z.version="18.2.0";Dg.exports=z;var S=Dg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lE=S,uE=Symbol.for("react.element"),cE=Symbol.for("react.fragment"),dE=Object.prototype.hasOwnProperty,hE=lE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fE={key:!0,ref:!0,__self:!0,__source:!0};function Bg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dE.call(e,r)&&!fE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:uE,type:t,key:s,ref:o,props:i,_owner:hE.current}}Rl.Fragment=cE;Rl.jsx=Bg;Rl.jsxs=Bg;bg.exports=Rl;var y=bg.exports,vc={},Vg={exports:{}},ut={},$g={exports:{}},Hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,L){var U=P.length;P.push(L);e:for(;0<U;){var ae=U-1>>>1,ye=P[ae];if(0<i(ye,L))P[ae]=L,P[U]=ye,U=ae;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var L=P[0],U=P.pop();if(U!==L){P[0]=U;e:for(var ae=0,ye=P.length,Go=ye>>>1;ae<Go;){var cr=2*(ae+1)-1,Su=P[cr],dr=cr+1,Ko=P[dr];if(0>i(Su,U))dr<ye&&0>i(Ko,Su)?(P[ae]=Ko,P[dr]=U,ae=dr):(P[ae]=Su,P[cr]=U,ae=cr);else if(dr<ye&&0>i(Ko,U))P[ae]=Ko,P[dr]=U,ae=dr;else break e}}return L}function i(P,L){var U=P.sortIndex-L.sortIndex;return U!==0?U:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,h=3,g=!1,_=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=P)r(u),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(u)}}function w(P){if(v=!1,m(P),!_)if(n(l)!==null)_=!0,Iu(T);else{var L=n(u);L!==null&&Cu(w,L.startTime-P)}}function T(P,L){_=!1,v&&(v=!1,p(x),x=-1),g=!0;var U=h;try{for(m(L),c=n(l);c!==null&&(!(c.expirationTime>L)||P&&!It());){var ae=c.callback;if(typeof ae=="function"){c.callback=null,h=c.priorityLevel;var ye=ae(c.expirationTime<=L);L=t.unstable_now(),typeof ye=="function"?c.callback=ye:c===n(l)&&r(l),m(L)}else r(l);c=n(l)}if(c!==null)var Go=!0;else{var cr=n(u);cr!==null&&Cu(w,cr.startTime-L),Go=!1}return Go}finally{c=null,h=U,g=!1}}var N=!1,A=null,x=-1,J=5,W=-1;function It(){return!(t.unstable_now()-W<J)}function Zi(){if(A!==null){var P=t.unstable_now();W=P;var L=!0;try{L=A(!0,P)}finally{L?es():(N=!1,A=null)}}else N=!1}var es;if(typeof f=="function")es=function(){f(Zi)};else if(typeof MessageChannel<"u"){var ep=new MessageChannel,G0=ep.port2;ep.port1.onmessage=Zi,es=function(){G0.postMessage(null)}}else es=function(){k(Zi,0)};function Iu(P){A=P,N||(N=!0,es())}function Cu(P,L){x=k(function(){P(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Iu(T))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var U=h;h=L;try{return P()}finally{h=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var U=h;h=P;try{return L()}finally{h=U}},t.unstable_scheduleCallback=function(P,L,U){var ae=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ae+U:ae):U=ae,P){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=U+ye,P={id:d++,callback:L,priorityLevel:P,startTime:U,expirationTime:ye,sortIndex:-1},U>ae?(P.sortIndex=U,e(u,P),n(l)===null&&P===n(u)&&(v?(p(x),x=-1):v=!0,Cu(w,U-ae))):(P.sortIndex=ye,e(l,P),_||g||(_=!0,Iu(T))),P},t.unstable_shouldYield=It,t.unstable_wrapCallback=function(P){var L=h;return function(){var U=h;h=L;try{return P.apply(this,arguments)}finally{h=U}}}})(Hg);$g.exports=Hg;var pE=$g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg=S,ot=pE;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kg=new Set,Us={};function Wr(t,e){Ii(t,e),Ii(t+"Capture",e)}function Ii(t,e){for(Us[t]=e,t=0;t<e.length;t++)Kg.add(e[t])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yc=Object.prototype.hasOwnProperty,mE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ip={},sp={};function gE(t){return yc.call(sp,t)?!0:yc.call(ip,t)?!1:mE.test(t)?sp[t]=!0:(ip[t]=!0,!1)}function _E(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vE(t,e,n,r){if(e===null||typeof e>"u"||_E(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xe[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xe[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xe[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xe[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xe[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xe[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xe[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xe[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xe[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yd=/[\-:]([a-z])/g;function Jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yd,Jd);xe[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yd,Jd);xe[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yd,Jd);xe[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xe[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xe[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xd(t,e,n,r){var i=xe.hasOwnProperty(e)?xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vE(e,n,i,r)&&(n=null),r||i===null?gE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gn=Gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qo=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),qg=Symbol.for("react.provider"),Qg=Symbol.for("react.context"),eh=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Ic=Symbol.for("react.suspense_list"),th=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),Yg=Symbol.for("react.offscreen"),op=Symbol.iterator;function ts(t){return t===null||typeof t!="object"?null:(t=op&&t[op]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,Tu;function gs(t){if(Tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tu=e&&e[1]||""}return`
`+Tu+t}var Ru=!1;function Pu(t,e){if(!t||Ru)return"";Ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ru=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?gs(t):""}function yE(t){switch(t.tag){case 5:return gs(t.type);case 16:return gs("Lazy");case 13:return gs("Suspense");case 19:return gs("SuspenseList");case 0:case 2:case 15:return t=Pu(t.type,!1),t;case 11:return t=Pu(t.type.render,!1),t;case 1:return t=Pu(t.type,!0),t;default:return""}}function Cc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Jr:return"Portal";case wc:return"Profiler";case Zd:return"StrictMode";case Ec:return"Suspense";case Ic:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qg:return(t.displayName||"Context")+".Consumer";case qg:return(t._context.displayName||"Context")+".Provider";case eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case th:return e=t.displayName||null,e!==null?e:Cc(t.type)||"Memo";case Sn:e=t._payload,t=t._init;try{return Cc(t(e))}catch{}}return null}function wE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cc(e);case 8:return e===Zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function EE(t){var e=Jg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yo(t){t._valueTracker||(t._valueTracker=EE(t))}function Xg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sc(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ap(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zg(t,e){e=e.checked,e!=null&&Xd(t,"checked",e,!1)}function kc(t,e){Zg(t,e);var n=Kn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tc(t,e.type,Kn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tc(t,e,n){(e!=="number"||xa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _s=Array.isArray;function ci(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(_s(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kn(n)}}function e_(t,e){var n=Kn(e.value),r=Kn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jo,n_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IE=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(t){IE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Is[e]=Is[t]})});function r_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Is.hasOwnProperty(t)&&Is[t]?(""+e).trim():e+"px"}function i_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=r_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var CE=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nc(t,e){if(e){if(CE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Ac(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function nh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oc=null,di=null,hi=null;function dp(t){if(t=ko(t)){if(typeof Oc!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Ol(e),Oc(t.stateNode,t.type,e))}}function s_(t){di?hi?hi.push(t):hi=[t]:di=t}function o_(){if(di){var t=di,e=hi;if(hi=di=null,dp(t),e)for(t=0;t<e.length;t++)dp(e[t])}}function a_(t,e){return t(e)}function l_(){}var Nu=!1;function u_(t,e,n){if(Nu)return t(e,n);Nu=!0;try{return a_(t,e,n)}finally{Nu=!1,(di!==null||hi!==null)&&(l_(),o_())}}function Ws(t,e){var n=t.stateNode;if(n===null)return null;var r=Ol(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var bc=!1;if(cn)try{var ns={};Object.defineProperty(ns,"passive",{get:function(){bc=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{bc=!1}function SE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Cs=!1,Oa=null,ba=!1,Dc=null,kE={onError:function(t){Cs=!0,Oa=t}};function TE(t,e,n,r,i,s,o,a,l){Cs=!1,Oa=null,SE.apply(kE,arguments)}function RE(t,e,n,r,i,s,o,a,l){if(TE.apply(this,arguments),Cs){if(Cs){var u=Oa;Cs=!1,Oa=null}else throw Error(E(198));ba||(ba=!0,Dc=u)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hp(t){if(zr(t)!==t)throw Error(E(188))}function PE(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hp(i),t;if(s===r)return hp(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function d_(t){return t=PE(t),t!==null?h_(t):null}function h_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=h_(t);if(e!==null)return e;t=t.sibling}return null}var f_=ot.unstable_scheduleCallback,fp=ot.unstable_cancelCallback,NE=ot.unstable_shouldYield,AE=ot.unstable_requestPaint,le=ot.unstable_now,xE=ot.unstable_getCurrentPriorityLevel,rh=ot.unstable_ImmediatePriority,p_=ot.unstable_UserBlockingPriority,Da=ot.unstable_NormalPriority,OE=ot.unstable_LowPriority,m_=ot.unstable_IdlePriority,Pl=null,$t=null;function bE(t){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:ME,DE=Math.log,LE=Math.LN2;function ME(t){return t>>>=0,t===0?32:31-(DE(t)/LE|0)|0}var Xo=64,Zo=4194304;function vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function La(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=vs(a):(s&=o,s!==0&&(r=vs(s)))}else o=n&~i,o!==0?r=vs(o):s!==0&&(r=vs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nt(e),i=1<<n,r|=t[n],e&=~i;return r}function FE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Nt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=FE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Lc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g_(){var t=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),t}function Au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nt(e),t[e]=n}function jE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ih(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function __(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v_,sh,y_,w_,E_,Mc=!1,ea=[],Dn=null,Ln=null,Mn=null,zs=new Map,Bs=new Map,Tn=[],WE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pp(t,e){switch(t){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bs.delete(e.pointerId)}}function rs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ko(e),e!==null&&sh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function zE(t,e,n,r,i){switch(e){case"focusin":return Dn=rs(Dn,t,e,n,r,i),!0;case"dragenter":return Ln=rs(Ln,t,e,n,r,i),!0;case"mouseover":return Mn=rs(Mn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return zs.set(s,rs(zs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Bs.set(s,rs(Bs.get(s)||null,t,e,n,r,i)),!0}return!1}function I_(t){var e=gr(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=c_(n),e!==null){t.blockedOn=e,E_(t.priority,function(){y_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ga(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xc=r,n.target.dispatchEvent(r),xc=null}else return e=ko(n),e!==null&&sh(e),t.blockedOn=n,!1;e.shift()}return!0}function mp(t,e,n){ga(t)&&n.delete(e)}function BE(){Mc=!1,Dn!==null&&ga(Dn)&&(Dn=null),Ln!==null&&ga(Ln)&&(Ln=null),Mn!==null&&ga(Mn)&&(Mn=null),zs.forEach(mp),Bs.forEach(mp)}function is(t,e){t.blockedOn===e&&(t.blockedOn=null,Mc||(Mc=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,BE)))}function Vs(t){function e(i){return is(i,t)}if(0<ea.length){is(ea[0],t);for(var n=1;n<ea.length;n++){var r=ea[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dn!==null&&is(Dn,t),Ln!==null&&is(Ln,t),Mn!==null&&is(Mn,t),zs.forEach(e),Bs.forEach(e),n=0;n<Tn.length;n++)r=Tn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Tn.length&&(n=Tn[0],n.blockedOn===null);)I_(n),n.blockedOn===null&&Tn.shift()}var fi=gn.ReactCurrentBatchConfig,Ma=!0;function VE(t,e,n,r){var i=G,s=fi.transition;fi.transition=null;try{G=1,oh(t,e,n,r)}finally{G=i,fi.transition=s}}function $E(t,e,n,r){var i=G,s=fi.transition;fi.transition=null;try{G=4,oh(t,e,n,r)}finally{G=i,fi.transition=s}}function oh(t,e,n,r){if(Ma){var i=Fc(t,e,n,r);if(i===null)Wu(t,e,r,Fa,n),pp(t,r);else if(zE(i,t,e,n,r))r.stopPropagation();else if(pp(t,r),e&4&&-1<WE.indexOf(t)){for(;i!==null;){var s=ko(i);if(s!==null&&v_(s),s=Fc(t,e,n,r),s===null&&Wu(t,e,r,Fa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Wu(t,e,r,null,n)}}var Fa=null;function Fc(t,e,n,r){if(Fa=null,t=nh(r),t=gr(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fa=t,null}function C_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xE()){case rh:return 1;case p_:return 4;case Da:case OE:return 16;case m_:return 536870912;default:return 16}default:return 16}}var Pn=null,ah=null,_a=null;function S_(){if(_a)return _a;var t,e=ah,n=e.length,r,i="value"in Pn?Pn.value:Pn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return _a=i.slice(t,1<r?1-r:void 0)}function va(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ta(){return!0}function gp(){return!1}function ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ta:gp,this.isPropagationStopped=gp,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),e}var Fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lh=ct(Fi),So=se({},Fi,{view:0,detail:0}),HE=ct(So),xu,Ou,ss,Nl=se({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ss&&(ss&&t.type==="mousemove"?(xu=t.screenX-ss.screenX,Ou=t.screenY-ss.screenY):Ou=xu=0,ss=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),_p=ct(Nl),GE=se({},Nl,{dataTransfer:0}),KE=ct(GE),qE=se({},So,{relatedTarget:0}),bu=ct(qE),QE=se({},Fi,{animationName:0,elapsedTime:0,pseudoElement:0}),YE=ct(QE),JE=se({},Fi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),XE=ct(JE),ZE=se({},Fi,{data:0}),vp=ct(ZE),eI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nI[t])?!!e[t]:!1}function uh(){return rI}var iI=se({},So,{key:function(t){if(t.key){var e=eI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uh,charCode:function(t){return t.type==="keypress"?va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sI=ct(iI),oI=se({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yp=ct(oI),aI=se({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uh}),lI=ct(aI),uI=se({},Fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),cI=ct(uI),dI=se({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hI=ct(dI),fI=[9,13,27,32],ch=cn&&"CompositionEvent"in window,Ss=null;cn&&"documentMode"in document&&(Ss=document.documentMode);var pI=cn&&"TextEvent"in window&&!Ss,k_=cn&&(!ch||Ss&&8<Ss&&11>=Ss),wp=String.fromCharCode(32),Ep=!1;function T_(t,e){switch(t){case"keyup":return fI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function mI(t,e){switch(t){case"compositionend":return R_(e);case"keypress":return e.which!==32?null:(Ep=!0,wp);case"textInput":return t=e.data,t===wp&&Ep?null:t;default:return null}}function gI(t,e){if(Zr)return t==="compositionend"||!ch&&T_(t,e)?(t=S_(),_a=ah=Pn=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return k_&&e.locale!=="ko"?null:e.data;default:return null}}var _I={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_I[t.type]:e==="textarea"}function P_(t,e,n,r){s_(r),e=Ua(e,"onChange"),0<e.length&&(n=new lh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ks=null,$s=null;function vI(t){j_(t,0)}function Al(t){var e=ni(t);if(Xg(e))return t}function yI(t,e){if(t==="change")return e}var N_=!1;if(cn){var Du;if(cn){var Lu="oninput"in document;if(!Lu){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Lu=typeof Cp.oninput=="function"}Du=Lu}else Du=!1;N_=Du&&(!document.documentMode||9<document.documentMode)}function Sp(){ks&&(ks.detachEvent("onpropertychange",A_),$s=ks=null)}function A_(t){if(t.propertyName==="value"&&Al($s)){var e=[];P_(e,$s,t,nh(t)),u_(vI,e)}}function wI(t,e,n){t==="focusin"?(Sp(),ks=e,$s=n,ks.attachEvent("onpropertychange",A_)):t==="focusout"&&Sp()}function EI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al($s)}function II(t,e){if(t==="click")return Al(e)}function CI(t,e){if(t==="input"||t==="change")return Al(e)}function SI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ot=typeof Object.is=="function"?Object.is:SI;function Hs(t,e){if(Ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yc.call(e,i)||!Ot(t[i],e[i]))return!1}return!0}function kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tp(t,e){var n=kp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kp(n)}}function x_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?x_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function O_(){for(var t=window,e=xa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xa(t.document)}return e}function dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kI(t){var e=O_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&x_(n.ownerDocument.documentElement,n)){if(r!==null&&dh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Tp(n,s);var o=Tp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TI=cn&&"documentMode"in document&&11>=document.documentMode,ei=null,Uc=null,Ts=null,jc=!1;function Rp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jc||ei==null||ei!==xa(r)||(r=ei,"selectionStart"in r&&dh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ts&&Hs(Ts,r)||(Ts=r,r=Ua(Uc,"onSelect"),0<r.length&&(e=new lh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ei)))}function na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ti={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Mu={},b_={};cn&&(b_=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function xl(t){if(Mu[t])return Mu[t];if(!ti[t])return t;var e=ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in b_)return Mu[t]=e[n];return t}var D_=xl("animationend"),L_=xl("animationiteration"),M_=xl("animationstart"),F_=xl("transitionend"),U_=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){U_.set(t,e),Wr(e,[t])}for(var Fu=0;Fu<Pp.length;Fu++){var Uu=Pp[Fu],RI=Uu.toLowerCase(),PI=Uu[0].toUpperCase()+Uu.slice(1);ir(RI,"on"+PI)}ir(D_,"onAnimationEnd");ir(L_,"onAnimationIteration");ir(M_,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(F_,"onTransitionEnd");Ii("onMouseEnter",["mouseout","mouseover"]);Ii("onMouseLeave",["mouseout","mouseover"]);Ii("onPointerEnter",["pointerout","pointerover"]);Ii("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NI=new Set("cancel close invalid load scroll toggle".split(" ").concat(ys));function Np(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,RE(r,e,void 0,t),t.currentTarget=null}function j_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Np(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Np(i,a,u),s=l}}}if(ba)throw t=Dc,ba=!1,Dc=null,t}function X(t,e){var n=e[$c];n===void 0&&(n=e[$c]=new Set);var r=t+"__bubble";n.has(r)||(W_(e,t,2,!1),n.add(r))}function ju(t,e,n){var r=0;e&&(r|=4),W_(n,t,r,e)}var ra="_reactListening"+Math.random().toString(36).slice(2);function Gs(t){if(!t[ra]){t[ra]=!0,Kg.forEach(function(n){n!=="selectionchange"&&(NI.has(n)||ju(n,!1,t),ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ra]||(e[ra]=!0,ju("selectionchange",!1,e))}}function W_(t,e,n,r){switch(C_(e)){case 1:var i=VE;break;case 4:i=$E;break;default:i=oh}n=i.bind(null,e,n,t),i=void 0,!bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=gr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}u_(function(){var u=s,d=nh(n),c=[];e:{var h=U_.get(t);if(h!==void 0){var g=lh,_=t;switch(t){case"keypress":if(va(n)===0)break e;case"keydown":case"keyup":g=sI;break;case"focusin":_="focus",g=bu;break;case"focusout":_="blur",g=bu;break;case"beforeblur":case"afterblur":g=bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=KE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=lI;break;case D_:case L_:case M_:g=YE;break;case F_:g=cI;break;case"scroll":g=HE;break;case"wheel":g=hI;break;case"copy":case"cut":case"paste":g=XE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=yp}var v=(e&4)!==0,k=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Ws(f,p),w!=null&&v.push(Ks(f,w,m)))),k)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==xc&&(_=n.relatedTarget||n.fromElement)&&(gr(_)||_[dn]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?gr(_):null,_!==null&&(k=zr(_),_!==k||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=_p,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=yp,w="onPointerLeave",p="onPointerEnter",f="pointer"),k=g==null?h:ni(g),m=_==null?h:ni(_),h=new v(w,f+"leave",g,n,d),h.target=k,h.relatedTarget=m,w=null,gr(d)===u&&(v=new v(p,f+"enter",_,n,d),v.target=m,v.relatedTarget=k,w=v),k=w,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=qr(m))f++;for(m=0,w=p;w;w=qr(w))m++;for(;0<f-m;)v=qr(v),f--;for(;0<m-f;)p=qr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=qr(v),p=qr(p)}v=null}else v=null;g!==null&&Ap(c,h,g,v,!1),_!==null&&k!==null&&Ap(c,k,_,v,!0)}}e:{if(h=u?ni(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=yI;else if(Ip(h))if(N_)T=CI;else{T=EI;var N=wI}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=II);if(T&&(T=T(t,u))){P_(c,T,n,d);break e}N&&N(t,h,u),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Tc(h,"number",h.value)}switch(N=u?ni(u):window,t){case"focusin":(Ip(N)||N.contentEditable==="true")&&(ei=N,Uc=u,Ts=null);break;case"focusout":Ts=Uc=ei=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Rp(c,n,d);break;case"selectionchange":if(TI)break;case"keydown":case"keyup":Rp(c,n,d)}var A;if(ch)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Zr?T_(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(k_&&n.locale!=="ko"&&(Zr||x!=="onCompositionStart"?x==="onCompositionEnd"&&Zr&&(A=S_()):(Pn=d,ah="value"in Pn?Pn.value:Pn.textContent,Zr=!0)),N=Ua(u,x),0<N.length&&(x=new vp(x,t,null,n,d),c.push({event:x,listeners:N}),A?x.data=A:(A=R_(n),A!==null&&(x.data=A)))),(A=pI?mI(t,n):gI(t,n))&&(u=Ua(u,"onBeforeInput"),0<u.length&&(d=new vp("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=A))}j_(c,e)})}function Ks(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ua(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ws(t,n),s!=null&&r.unshift(Ks(t,s,i)),s=Ws(t,e),s!=null&&r.push(Ks(t,s,i))),t=t.return}return r}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ap(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ws(n,s),l!=null&&o.unshift(Ks(n,l,a))):i||(l=Ws(n,s),l!=null&&o.push(Ks(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var AI=/\r\n?/g,xI=/\u0000|\uFFFD/g;function xp(t){return(typeof t=="string"?t:""+t).replace(AI,`
`).replace(xI,"")}function ia(t,e,n){if(e=xp(e),xp(t)!==e&&n)throw Error(E(425))}function ja(){}var Wc=null,zc=null;function Bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vc=typeof setTimeout=="function"?setTimeout:void 0,OI=typeof clearTimeout=="function"?clearTimeout:void 0,Op=typeof Promise=="function"?Promise:void 0,bI=typeof queueMicrotask=="function"?queueMicrotask:typeof Op<"u"?function(t){return Op.resolve(null).then(t).catch(DI)}:Vc;function DI(t){setTimeout(function(){throw t})}function zu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vs(e)}function Fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ui=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Ui,qs="__reactProps$"+Ui,dn="__reactContainer$"+Ui,$c="__reactEvents$"+Ui,LI="__reactListeners$"+Ui,MI="__reactHandles$"+Ui;function gr(t){var e=t[Ut];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dn]||n[Ut]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bp(t);t!==null;){if(n=t[Ut])return n;t=bp(t)}return e}t=n,n=t.parentNode}return null}function ko(t){return t=t[Ut]||t[dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Ol(t){return t[qs]||null}var Hc=[],ri=-1;function sr(t){return{current:t}}function Z(t){0>ri||(t.current=Hc[ri],Hc[ri]=null,ri--)}function Q(t,e){ri++,Hc[ri]=t.current,t.current=e}var qn={},Fe=sr(qn),qe=sr(!1),Rr=qn;function Ci(t,e){var n=t.type.contextTypes;if(!n)return qn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(t){return t=t.childContextTypes,t!=null}function Wa(){Z(qe),Z(Fe)}function Dp(t,e,n){if(Fe.current!==qn)throw Error(E(168));Q(Fe,e),Q(qe,n)}function z_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,wE(t)||"Unknown",i));return se({},n,r)}function za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qn,Rr=Fe.current,Q(Fe,t),Q(qe,qe.current),!0}function Lp(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=z_(t,e,Rr),r.__reactInternalMemoizedMergedChildContext=t,Z(qe),Z(Fe),Q(Fe,t)):Z(qe),Q(qe,n)}var Xt=null,bl=!1,Bu=!1;function B_(t){Xt===null?Xt=[t]:Xt.push(t)}function FI(t){bl=!0,B_(t)}function or(){if(!Bu&&Xt!==null){Bu=!0;var t=0,e=G;try{var n=Xt;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xt=null,bl=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(t+1)),f_(rh,or),i}finally{G=e,Bu=!1}}return null}var ii=[],si=0,Ba=null,Va=0,dt=[],ht=0,Pr=null,Zt=1,en="";function hr(t,e){ii[si++]=Va,ii[si++]=Ba,Ba=t,Va=e}function V_(t,e,n){dt[ht++]=Zt,dt[ht++]=en,dt[ht++]=Pr,Pr=t;var r=Zt;t=en;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var s=32-Nt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zt=1<<32-Nt(e)+i|n<<i|r,en=s+t}else Zt=1<<s|n<<i|r,en=t}function hh(t){t.return!==null&&(hr(t,1),V_(t,1,0))}function fh(t){for(;t===Ba;)Ba=ii[--si],ii[si]=null,Va=ii[--si],ii[si]=null;for(;t===Pr;)Pr=dt[--ht],dt[ht]=null,en=dt[--ht],dt[ht]=null,Zt=dt[--ht],dt[ht]=null}var st=null,rt=null,ee=!1,Rt=null;function $_(t,e){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Mp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,st=t,rt=Fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,st=t,rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:Zt,overflow:en}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,st=t,rt=null,!0):!1;default:return!1}}function Gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kc(t){if(ee){var e=rt;if(e){var n=e;if(!Mp(t,e)){if(Gc(t))throw Error(E(418));e=Fn(n.nextSibling);var r=st;e&&Mp(t,e)?$_(r,n):(t.flags=t.flags&-4097|2,ee=!1,st=t)}}else{if(Gc(t))throw Error(E(418));t.flags=t.flags&-4097|2,ee=!1,st=t}}}function Fp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;st=t}function sa(t){if(t!==st)return!1;if(!ee)return Fp(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bc(t.type,t.memoizedProps)),e&&(e=rt)){if(Gc(t))throw H_(),Error(E(418));for(;e;)$_(t,e),e=Fn(e.nextSibling)}if(Fp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rt=Fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rt=null}}else rt=st?Fn(t.stateNode.nextSibling):null;return!0}function H_(){for(var t=rt;t;)t=Fn(t.nextSibling)}function Si(){rt=st=null,ee=!1}function ph(t){Rt===null?Rt=[t]:Rt.push(t)}var UI=gn.ReactCurrentBatchConfig;function kt(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $a=sr(null),Ha=null,oi=null,mh=null;function gh(){mh=oi=Ha=null}function _h(t){var e=$a.current;Z($a),t._currentValue=e}function qc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function pi(t,e){Ha=t,mh=oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ge=!0),t.firstContext=null)}function vt(t){var e=t._currentValue;if(mh!==t)if(t={context:t,memoizedValue:e,next:null},oi===null){if(Ha===null)throw Error(E(308));oi=t,Ha.dependencies={lanes:0,firstContext:t}}else oi=oi.next=t;return e}var _r=null;function vh(t){_r===null?_r=[t]:_r.push(t)}function G_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vh(e)):(n.next=i.next,i.next=n),e.interleaved=n,hn(t,r)}function hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kn=!1;function yh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Un(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hn(t,n)}return i=r.interleaved,i===null?(e.next=e,vh(r)):(e.next=i.next,i.next=e),r.interleaved=e,hn(t,n)}function ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ih(t,n)}}function Up(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ga(t,e,n,r){var i=t.updateQueue;kn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=se({},c,h);break e;case 2:kn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=c):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ar|=o,t.lanes=o,t.memoizedState=c}}function jp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var q_=new Gg.Component().refs;function Qc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dl={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=We(),i=Wn(t),s=sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Un(t,s,i),e!==null&&(At(e,t,i,r),ya(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=We(),i=Wn(t),s=sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Un(t,s,i),e!==null&&(At(e,t,i,r),ya(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=We(),r=Wn(t),i=sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Un(t,i,r),e!==null&&(At(e,t,r,n),ya(e,t,r))}};function Wp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Hs(n,r)||!Hs(i,s):!0}function Q_(t,e,n){var r=!1,i=qn,s=e.contextType;return typeof s=="object"&&s!==null?s=vt(s):(i=Qe(e)?Rr:Fe.current,r=e.contextTypes,s=(r=r!=null)?Ci(t,i):qn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function zp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dl.enqueueReplaceState(e,e.state,null)}function Yc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=q_,yh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vt(s):(s=Qe(e)?Rr:Fe.current,i.context=Ci(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dl.enqueueReplaceState(i,i.state,null),Ga(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===q_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function oa(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bp(t){var e=t._init;return e(t._payload)}function Y_(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=zn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Qu(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var T=m.type;return T===Xr?d(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Sn&&Bp(T)===f.type)?(w=i(f,m.props),w.ref=os(p,f,m),w.return=p,w):(w=ka(m.type,m.key,m.props,null,p.mode,w),w.ref=os(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Yu(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,w,T){return f===null||f.tag!==7?(f=Ir(m,p.mode,w,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Qu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qo:return m=ka(f.type,f.key,f.props,null,p.mode,m),m.ref=os(p,null,f),m.return=p,m;case Jr:return f=Yu(f,p.mode,m),f.return=p,f;case Sn:var w=f._init;return c(p,w(f._payload),m)}if(_s(f)||ts(f))return f=Ir(f,p.mode,m,null),f.return=p,f;oa(p,f)}return null}function h(p,f,m,w){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qo:return m.key===T?l(p,f,m,w):null;case Jr:return m.key===T?u(p,f,m,w):null;case Sn:return T=m._init,h(p,f,T(m._payload),w)}if(_s(m)||ts(m))return T!==null?null:d(p,f,m,w,null);oa(p,m)}return null}function g(p,f,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Qo:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,T);case Jr:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,T);case Sn:var N=w._init;return g(p,f,m,N(w._payload),T)}if(_s(w)||ts(w))return p=p.get(m)||null,d(f,p,w,T,null);oa(f,w)}return null}function _(p,f,m,w){for(var T=null,N=null,A=f,x=f=0,J=null;A!==null&&x<m.length;x++){A.index>x?(J=A,A=null):J=A.sibling;var W=h(p,A,m[x],w);if(W===null){A===null&&(A=J);break}t&&A&&W.alternate===null&&e(p,A),f=s(W,f,x),N===null?T=W:N.sibling=W,N=W,A=J}if(x===m.length)return n(p,A),ee&&hr(p,x),T;if(A===null){for(;x<m.length;x++)A=c(p,m[x],w),A!==null&&(f=s(A,f,x),N===null?T=A:N.sibling=A,N=A);return ee&&hr(p,x),T}for(A=r(p,A);x<m.length;x++)J=g(A,p,x,m[x],w),J!==null&&(t&&J.alternate!==null&&A.delete(J.key===null?x:J.key),f=s(J,f,x),N===null?T=J:N.sibling=J,N=J);return t&&A.forEach(function(It){return e(p,It)}),ee&&hr(p,x),T}function v(p,f,m,w){var T=ts(m);if(typeof T!="function")throw Error(E(150));if(m=T.call(m),m==null)throw Error(E(151));for(var N=T=null,A=f,x=f=0,J=null,W=m.next();A!==null&&!W.done;x++,W=m.next()){A.index>x?(J=A,A=null):J=A.sibling;var It=h(p,A,W.value,w);if(It===null){A===null&&(A=J);break}t&&A&&It.alternate===null&&e(p,A),f=s(It,f,x),N===null?T=It:N.sibling=It,N=It,A=J}if(W.done)return n(p,A),ee&&hr(p,x),T;if(A===null){for(;!W.done;x++,W=m.next())W=c(p,W.value,w),W!==null&&(f=s(W,f,x),N===null?T=W:N.sibling=W,N=W);return ee&&hr(p,x),T}for(A=r(p,A);!W.done;x++,W=m.next())W=g(A,p,x,W.value,w),W!==null&&(t&&W.alternate!==null&&A.delete(W.key===null?x:W.key),f=s(W,f,x),N===null?T=W:N.sibling=W,N=W);return t&&A.forEach(function(Zi){return e(p,Zi)}),ee&&hr(p,x),T}function k(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Xr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Qo:e:{for(var T=m.key,N=f;N!==null;){if(N.key===T){if(T=m.type,T===Xr){if(N.tag===7){n(p,N.sibling),f=i(N,m.props.children),f.return=p,p=f;break e}}else if(N.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Sn&&Bp(T)===N.type){n(p,N.sibling),f=i(N,m.props),f.ref=os(p,N,m),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===Xr?(f=Ir(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=ka(m.type,m.key,m.props,null,p.mode,w),w.ref=os(p,f,m),w.return=p,p=w)}return o(p);case Jr:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Yu(m,p.mode,w),f.return=p,p=f}return o(p);case Sn:return N=m._init,k(p,f,N(m._payload),w)}if(_s(m))return _(p,f,m,w);if(ts(m))return v(p,f,m,w);oa(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Qu(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return k}var ki=Y_(!0),J_=Y_(!1),To={},Ht=sr(To),Qs=sr(To),Ys=sr(To);function vr(t){if(t===To)throw Error(E(174));return t}function wh(t,e){switch(Q(Ys,e),Q(Qs,t),Q(Ht,To),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pc(e,t)}Z(Ht),Q(Ht,e)}function Ti(){Z(Ht),Z(Qs),Z(Ys)}function X_(t){vr(Ys.current);var e=vr(Ht.current),n=Pc(e,t.type);e!==n&&(Q(Qs,t),Q(Ht,n))}function Eh(t){Qs.current===t&&(Z(Ht),Z(Qs))}var ne=sr(0);function Ka(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vu=[];function Ih(){for(var t=0;t<Vu.length;t++)Vu[t]._workInProgressVersionPrimary=null;Vu.length=0}var wa=gn.ReactCurrentDispatcher,$u=gn.ReactCurrentBatchConfig,Nr=0,ie=null,me=null,Ee=null,qa=!1,Rs=!1,Js=0,jI=0;function be(){throw Error(E(321))}function Ch(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ot(t[n],e[n]))return!1;return!0}function Sh(t,e,n,r,i,s){if(Nr=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wa.current=t===null||t.memoizedState===null?VI:$I,t=n(r,i),Rs){s=0;do{if(Rs=!1,Js=0,25<=s)throw Error(E(301));s+=1,Ee=me=null,e.updateQueue=null,wa.current=HI,t=n(r,i)}while(Rs)}if(wa.current=Qa,e=me!==null&&me.next!==null,Nr=0,Ee=me=ie=null,qa=!1,e)throw Error(E(300));return t}function kh(){var t=Js!==0;return Js=0,t}function Ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ie.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function yt(){if(me===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=Ee===null?ie.memoizedState:Ee.next;if(e!==null)Ee=e,me=t;else{if(t===null)throw Error(E(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Ee===null?ie.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function Xs(t,e){return typeof e=="function"?e(t):e}function Hu(t){var e=yt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Nr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,ie.lanes|=d,Ar|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ot(r,e.memoizedState)||(Ge=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,Ar|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gu(t){var e=yt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ot(s,e.memoizedState)||(Ge=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Z_(){}function ev(t,e){var n=ie,r=yt(),i=e(),s=!Ot(r.memoizedState,i);if(s&&(r.memoizedState=i,Ge=!0),r=r.queue,Th(rv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Zs(9,nv.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(E(349));Nr&30||tv(n,e,i)}return i}function tv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nv(t,e,n,r){e.value=n,e.getSnapshot=r,iv(e)&&sv(t)}function rv(t,e,n){return n(function(){iv(e)&&sv(t)})}function iv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ot(t,n)}catch{return!0}}function sv(t){var e=hn(t,1);e!==null&&At(e,t,1,-1)}function Vp(t){var e=Ft();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:t},e.queue=t,t=t.dispatch=BI.bind(null,ie,t),[e.memoizedState,t]}function Zs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ov(){return yt().memoizedState}function Ea(t,e,n,r){var i=Ft();ie.flags|=t,i.memoizedState=Zs(1|e,n,void 0,r===void 0?null:r)}function Ll(t,e,n,r){var i=yt();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&Ch(r,o.deps)){i.memoizedState=Zs(e,n,s,r);return}}ie.flags|=t,i.memoizedState=Zs(1|e,n,s,r)}function $p(t,e){return Ea(8390656,8,t,e)}function Th(t,e){return Ll(2048,8,t,e)}function av(t,e){return Ll(4,2,t,e)}function lv(t,e){return Ll(4,4,t,e)}function uv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cv(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4,4,uv.bind(null,e,t),n)}function Rh(){}function dv(t,e){var n=yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ch(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hv(t,e){var n=yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ch(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function fv(t,e,n){return Nr&21?(Ot(n,e)||(n=g_(),ie.lanes|=n,Ar|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ge=!0),t.memoizedState=n)}function WI(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=$u.transition;$u.transition={};try{t(!1),e()}finally{G=n,$u.transition=r}}function pv(){return yt().memoizedState}function zI(t,e,n){var r=Wn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mv(t))gv(e,n);else if(n=G_(t,e,n,r),n!==null){var i=We();At(n,t,r,i),_v(n,e,r)}}function BI(t,e,n){var r=Wn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mv(t))gv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ot(a,o)){var l=e.interleaved;l===null?(i.next=i,vh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=G_(t,e,i,r),n!==null&&(i=We(),At(n,t,r,i),_v(n,e,r))}}function mv(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function gv(t,e){Rs=qa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _v(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ih(t,n)}}var Qa={readContext:vt,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},VI={readContext:vt,useCallback:function(t,e){return Ft().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:$p,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ea(4194308,4,uv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ea(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ea(4,2,t,e)},useMemo:function(t,e){var n=Ft();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ft();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=zI.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=Ft();return t={current:t},e.memoizedState=t},useState:Vp,useDebugValue:Rh,useDeferredValue:function(t){return Ft().memoizedState=t},useTransition:function(){var t=Vp(!1),e=t[0];return t=WI.bind(null,t[1]),Ft().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=Ft();if(ee){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ke===null)throw Error(E(349));Nr&30||tv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$p(rv.bind(null,r,s,t),[t]),r.flags|=2048,Zs(9,nv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ft(),e=ke.identifierPrefix;if(ee){var n=en,r=Zt;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Js++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$I={readContext:vt,useCallback:dv,useContext:vt,useEffect:Th,useImperativeHandle:cv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:hv,useReducer:Hu,useRef:ov,useState:function(){return Hu(Xs)},useDebugValue:Rh,useDeferredValue:function(t){var e=yt();return fv(e,me.memoizedState,t)},useTransition:function(){var t=Hu(Xs)[0],e=yt().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1},HI={readContext:vt,useCallback:dv,useContext:vt,useEffect:Th,useImperativeHandle:cv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:hv,useReducer:Gu,useRef:ov,useState:function(){return Gu(Xs)},useDebugValue:Rh,useDeferredValue:function(t){var e=yt();return me===null?e.memoizedState=t:fv(e,me.memoizedState,t)},useTransition:function(){var t=Gu(Xs)[0],e=yt().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1};function Ri(t,e){try{var n="",r=e;do n+=yE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ku(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GI=typeof WeakMap=="function"?WeakMap:Map;function vv(t,e,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ja||(Ja=!0,ad=r),Jc(t,e)},n}function yv(t,e,n){n=sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jc(t,e),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new GI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=oC.bind(null,t,e,n),e.then(t,t))}function Gp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sn(-1,1),e.tag=2,Un(n,e,1))),n.lanes|=1),t)}var KI=gn.ReactCurrentOwner,Ge=!1;function Ue(t,e,n,r){e.child=t===null?J_(e,null,n,r):ki(e,t.child,n,r)}function qp(t,e,n,r,i){n=n.render;var s=e.ref;return pi(e,i),r=Sh(t,e,n,r,s,i),n=kh(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(ee&&n&&hh(e),e.flags|=1,Ue(t,e,r,i),e.child)}function Qp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Lh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wv(t,e,s,r,i)):(t=ka(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hs,n(o,r)&&t.ref===e.ref)return fn(t,e,i)}return e.flags|=1,t=zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function wv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Hs(s,r)&&t.ref===e.ref)if(Ge=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ge=!0);else return e.lanes=t.lanes,fn(t,e,i)}return Xc(t,e,n,r,i)}function Ev(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(li,et),et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(li,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(li,et),et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(li,et),et|=r;return Ue(t,e,i,n),e.child}function Iv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xc(t,e,n,r,i){var s=Qe(n)?Rr:Fe.current;return s=Ci(e,s),pi(e,i),n=Sh(t,e,n,r,s,i),r=kh(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(ee&&r&&hh(e),e.flags|=1,Ue(t,e,n,i),e.child)}function Yp(t,e,n,r,i){if(Qe(n)){var s=!0;za(e)}else s=!1;if(pi(e,i),e.stateNode===null)Ia(t,e),Q_(e,n,r),Yc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=Qe(n)?Rr:Fe.current,u=Ci(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&zp(e,o,r,u),kn=!1;var h=e.memoizedState;o.state=h,Ga(e,r,o,i),l=e.memoizedState,a!==r||h!==l||qe.current||kn?(typeof d=="function"&&(Qc(e,n,d,r),l=e.memoizedState),(a=kn||Wp(e,n,a,r,h,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,K_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:kt(e.type,a),o.props=u,c=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=Qe(n)?Rr:Fe.current,l=Ci(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||h!==l)&&zp(e,o,r,l),kn=!1,h=e.memoizedState,o.state=h,Ga(e,r,o,i);var _=e.memoizedState;a!==c||h!==_||qe.current||kn?(typeof g=="function"&&(Qc(e,n,g,r),_=e.memoizedState),(u=kn||Wp(e,n,u,r,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Zc(t,e,n,r,s,i)}function Zc(t,e,n,r,i,s){Iv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Lp(e,n,!1),fn(t,e,s);r=e.stateNode,KI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ki(e,t.child,null,s),e.child=ki(e,null,a,s)):Ue(t,e,a,s),e.memoizedState=r.state,i&&Lp(e,n,!0),e.child}function Cv(t){var e=t.stateNode;e.pendingContext?Dp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dp(t,e.context,!1),wh(t,e.containerInfo)}function Jp(t,e,n,r,i){return Si(),ph(i),e.flags|=256,Ue(t,e,n,r),e.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sv(t,e,n){var r=e.pendingProps,i=ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(ne,i&1),t===null)return Kc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ul(o,r,0,null),t=Ir(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=td(n),e.memoizedState=ed,t):Ph(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=zn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=zn(a,s):(s=Ir(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ed,r}return s=t.child,t=s.sibling,r=zn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ph(t,e){return e=Ul({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function aa(t,e,n,r){return r!==null&&ph(r),ki(e,t.child,null,n),t=Ph(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ku(Error(E(422))),aa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ul({mode:"visible",children:r.children},i,0,null),s=Ir(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ki(e,t.child,null,o),e.child.memoizedState=td(o),e.memoizedState=ed,s);if(!(e.mode&1))return aa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=Ku(s,r,void 0),aa(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ge||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hn(t,i),At(r,t,i,-1))}return Dh(),r=Ku(Error(E(421))),aa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=aC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,rt=Fn(i.nextSibling),st=e,ee=!0,Rt=null,t!==null&&(dt[ht++]=Zt,dt[ht++]=en,dt[ht++]=Pr,Zt=t.id,en=t.overflow,Pr=e),e=Ph(e,r.children),e.flags|=4096,e)}function Xp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qc(t.return,e,n)}function qu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ue(t,e,r.children,n),r=ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xp(t,n,e);else if(t.tag===19)Xp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ka(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ka(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qu(e,!0,n,null,s);break;case"together":qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ia(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ar|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function QI(t,e,n){switch(e.tag){case 3:Cv(e),Si();break;case 5:X_(e);break;case 1:Qe(e.type)&&za(e);break;case 4:wh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q($a,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(ne,ne.current&1),e.flags|=128,null):n&e.child.childLanes?Sv(t,e,n):(Q(ne,ne.current&1),t=fn(t,e,n),t!==null?t.sibling:null);Q(ne,ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ne,ne.current),r)break;return null;case 22:case 23:return e.lanes=0,Ev(t,e,n)}return fn(t,e,n)}var Tv,nd,Rv,Pv;Tv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nd=function(){};Rv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,vr(Ht.current);var s=null;switch(n){case"input":i=Sc(t,i),r=Sc(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=Rc(t,i),r=Rc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ja)}Nc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Us.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Us.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&X("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Pv=function(t,e,n,r){n!==r&&(e.flags|=4)};function as(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function De(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function YI(t,e,n){var r=e.pendingProps;switch(fh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(e),null;case 1:return Qe(e.type)&&Wa(),De(e),null;case 3:return r=e.stateNode,Ti(),Z(qe),Z(Fe),Ih(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rt!==null&&(cd(Rt),Rt=null))),nd(t,e),De(e),null;case 5:Eh(e);var i=vr(Ys.current);if(n=e.type,t!==null&&e.stateNode!=null)Rv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return De(e),null}if(t=vr(Ht.current),sa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ut]=e,r[qs]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<ys.length;i++)X(ys[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":ap(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":up(r,s),X("invalid",r)}Nc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ia(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ia(r.textContent,a,t),i=["children",""+a]):Us.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":Yo(r),lp(r,s,!0);break;case"textarea":Yo(r),cp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ja)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ut]=e,t[qs]=r,Tv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ac(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<ys.length;i++)X(ys[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":ap(t,r),i=Sc(t,r),X("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),X("invalid",t);break;case"textarea":up(t,r),i=Rc(t,r),X("invalid",t);break;default:i=r}Nc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?i_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&js(t,l):typeof l=="number"&&js(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Us.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",t):l!=null&&Xd(t,s,l,o))}switch(n){case"input":Yo(t),lp(t,r,!1);break;case"textarea":Yo(t),cp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ci(t,!!r.multiple,s,!1):r.defaultValue!=null&&ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ja)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return De(e),null;case 6:if(t&&e.stateNode!=null)Pv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=vr(Ys.current),vr(Ht.current),sa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ut]=e,(s=r.nodeValue!==n)&&(t=st,t!==null))switch(t.tag){case 3:ia(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ia(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ut]=e,e.stateNode=r}return De(e),null;case 13:if(Z(ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&rt!==null&&e.mode&1&&!(e.flags&128))H_(),Si(),e.flags|=98560,s=!1;else if(s=sa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Ut]=e}else Si(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;De(e),s=!1}else Rt!==null&&(cd(Rt),Rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ne.current&1?_e===0&&(_e=3):Dh())),e.updateQueue!==null&&(e.flags|=4),De(e),null);case 4:return Ti(),nd(t,e),t===null&&Gs(e.stateNode.containerInfo),De(e),null;case 10:return _h(e.type._context),De(e),null;case 17:return Qe(e.type)&&Wa(),De(e),null;case 19:if(Z(ne),s=e.memoizedState,s===null)return De(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)as(s,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ka(t),o!==null){for(e.flags|=128,as(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(ne,ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&le()>Pi&&(e.flags|=128,r=!0,as(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ka(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),as(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return De(e),null}else 2*le()-s.renderingStartTime>Pi&&n!==1073741824&&(e.flags|=128,r=!0,as(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=le(),e.sibling=null,n=ne.current,Q(ne,r?n&1|2:n&1),e):(De(e),null);case 22:case 23:return bh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?et&1073741824&&(De(e),e.subtreeFlags&6&&(e.flags|=8192)):De(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function JI(t,e){switch(fh(e),e.tag){case 1:return Qe(e.type)&&Wa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ti(),Z(qe),Z(Fe),Ih(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Eh(e),null;case 13:if(Z(ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Si()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(ne),null;case 4:return Ti(),null;case 10:return _h(e.type._context),null;case 22:case 23:return bh(),null;case 24:return null;default:return null}}var la=!1,Le=!1,XI=typeof WeakSet=="function"?WeakSet:Set,R=null;function ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(t,e,r)}else n.current=null}function rd(t,e,n){try{n()}catch(r){oe(t,e,r)}}var Zp=!1;function ZI(t,e){if(Wc=Ma,t=O_(),dh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++d===r&&(l=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zc={focusedElem:t,selectionRange:n},Ma=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,k=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:kt(e.type,v),k);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){oe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return _=Zp,Zp=!1,_}function Ps(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rd(e,n,s)}i=i.next}while(i!==r)}}function Ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function id(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nv(t){var e=t.alternate;e!==null&&(t.alternate=null,Nv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ut],delete e[qs],delete e[$c],delete e[LI],delete e[MI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Av(t){return t.tag===5||t.tag===3||t.tag===4}function em(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ja));else if(r!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}function od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}var Pe=null,Tt=!1;function En(t,e,n){for(n=n.child;n!==null;)xv(t,e,n),n=n.sibling}function xv(t,e,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:Le||ai(n,e);case 6:var r=Pe,i=Tt;Pe=null,En(t,e,n),Pe=r,Tt=i,Pe!==null&&(Tt?(t=Pe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(Tt?(t=Pe,n=n.stateNode,t.nodeType===8?zu(t.parentNode,n):t.nodeType===1&&zu(t,n),Vs(t)):zu(Pe,n.stateNode));break;case 4:r=Pe,i=Tt,Pe=n.stateNode.containerInfo,Tt=!0,En(t,e,n),Pe=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rd(n,e,o),i=i.next}while(i!==r)}En(t,e,n);break;case 1:if(!Le&&(ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,e,a)}En(t,e,n);break;case 21:En(t,e,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,En(t,e,n),Le=r):En(t,e,n);break;default:En(t,e,n)}}function tm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XI),e.forEach(function(r){var i=lC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,Tt=!1;break e;case 3:Pe=a.stateNode.containerInfo,Tt=!0;break e;case 4:Pe=a.stateNode.containerInfo,Tt=!0;break e}a=a.return}if(Pe===null)throw Error(E(160));xv(s,o,i),Pe=null,Tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ov(e,t),e=e.sibling}function Ov(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ct(e,t),Mt(t),r&4){try{Ps(3,t,t.return),Ml(3,t)}catch(v){oe(t,t.return,v)}try{Ps(5,t,t.return)}catch(v){oe(t,t.return,v)}}break;case 1:Ct(e,t),Mt(t),r&512&&n!==null&&ai(n,n.return);break;case 5:if(Ct(e,t),Mt(t),r&512&&n!==null&&ai(n,n.return),t.flags&32){var i=t.stateNode;try{js(i,"")}catch(v){oe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zg(i,s),Ac(a,o);var u=Ac(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?i_(i,c):d==="dangerouslySetInnerHTML"?n_(i,c):d==="children"?js(i,c):Xd(i,d,c,u)}switch(a){case"input":kc(i,s);break;case"textarea":e_(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ci(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?ci(i,!!s.multiple,s.defaultValue,!0):ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[qs]=s}catch(v){oe(t,t.return,v)}}break;case 6:if(Ct(e,t),Mt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){oe(t,t.return,v)}}break;case 3:if(Ct(e,t),Mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vs(e.containerInfo)}catch(v){oe(t,t.return,v)}break;case 4:Ct(e,t),Mt(t);break;case 13:Ct(e,t),Mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xh=le())),r&4&&tm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Le=(u=Le)||d,Ct(e,t),Le=u):Ct(e,t),Mt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(R=t,d=t.child;d!==null;){for(c=R=d;R!==null;){switch(h=R,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ps(4,h,h.return);break;case 1:ai(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){oe(r,n,v)}}break;case 5:ai(h,h.return);break;case 22:if(h.memoizedState!==null){rm(c);continue}}g!==null?(g.return=h,R=g):rm(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=r_("display",o))}catch(v){oe(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){oe(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ct(e,t),Mt(t),r&4&&tm(t);break;case 21:break;default:Ct(e,t),Mt(t)}}function Mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Av(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(js(i,""),r.flags&=-33);var s=em(t);od(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=em(t);sd(t,a,o);break;default:throw Error(E(161))}}catch(l){oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eC(t,e,n){R=t,bv(t)}function bv(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||la;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Le;a=la;var u=Le;if(la=o,(Le=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?im(i):l!==null?(l.return=o,R=l):im(i);for(;s!==null;)R=s,bv(s),s=s.sibling;R=i,la=a,Le=u}nm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):nm(t)}}function nm(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Le||Ml(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Vs(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Le||e.flags&512&&id(e)}catch(h){oe(e,e.return,h)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function rm(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function im(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ml(4,e)}catch(l){oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){oe(e,i,l)}}var s=e.return;try{id(e)}catch(l){oe(e,s,l)}break;case 5:var o=e.return;try{id(e)}catch(l){oe(e,o,l)}}}catch(l){oe(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var tC=Math.ceil,Ya=gn.ReactCurrentDispatcher,Nh=gn.ReactCurrentOwner,_t=gn.ReactCurrentBatchConfig,B=0,ke=null,he=null,Ne=0,et=0,li=sr(0),_e=0,eo=null,Ar=0,Fl=0,Ah=0,Ns=null,$e=null,xh=0,Pi=1/0,Jt=null,Ja=!1,ad=null,jn=null,ua=!1,Nn=null,Xa=0,As=0,ld=null,Ca=-1,Sa=0;function We(){return B&6?le():Ca!==-1?Ca:Ca=le()}function Wn(t){return t.mode&1?B&2&&Ne!==0?Ne&-Ne:UI.transition!==null?(Sa===0&&(Sa=g_()),Sa):(t=G,t!==0||(t=window.event,t=t===void 0?16:C_(t.type)),t):1}function At(t,e,n,r){if(50<As)throw As=0,ld=null,Error(E(185));Co(t,n,r),(!(B&2)||t!==ke)&&(t===ke&&(!(B&2)&&(Fl|=n),_e===4&&Rn(t,Ne)),Ye(t,r),n===1&&B===0&&!(e.mode&1)&&(Pi=le()+500,bl&&or()))}function Ye(t,e){var n=t.callbackNode;UE(t,e);var r=La(t,t===ke?Ne:0);if(r===0)n!==null&&fp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fp(n),e===1)t.tag===0?FI(sm.bind(null,t)):B_(sm.bind(null,t)),bI(function(){!(B&6)&&or()}),n=null;else{switch(__(r)){case 1:n=rh;break;case 4:n=p_;break;case 16:n=Da;break;case 536870912:n=m_;break;default:n=Da}n=zv(n,Dv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dv(t,e){if(Ca=-1,Sa=0,B&6)throw Error(E(327));var n=t.callbackNode;if(mi()&&t.callbackNode!==n)return null;var r=La(t,t===ke?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Za(t,r);else{e=r;var i=B;B|=2;var s=Mv();(ke!==t||Ne!==e)&&(Jt=null,Pi=le()+500,Er(t,e));do try{iC();break}catch(a){Lv(t,a)}while(1);gh(),Ya.current=s,B=i,he!==null?e=0:(ke=null,Ne=0,e=_e)}if(e!==0){if(e===2&&(i=Lc(t),i!==0&&(r=i,e=ud(t,i))),e===1)throw n=eo,Er(t,0),Rn(t,r),Ye(t,le()),n;if(e===6)Rn(t,r);else{if(i=t.current.alternate,!(r&30)&&!nC(i)&&(e=Za(t,r),e===2&&(s=Lc(t),s!==0&&(r=s,e=ud(t,s))),e===1))throw n=eo,Er(t,0),Rn(t,r),Ye(t,le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:fr(t,$e,Jt);break;case 3:if(Rn(t,r),(r&130023424)===r&&(e=xh+500-le(),10<e)){if(La(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){We(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vc(fr.bind(null,t,$e,Jt),e);break}fr(t,$e,Jt);break;case 4:if(Rn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Nt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tC(r/1960))-r,10<r){t.timeoutHandle=Vc(fr.bind(null,t,$e,Jt),r);break}fr(t,$e,Jt);break;case 5:fr(t,$e,Jt);break;default:throw Error(E(329))}}}return Ye(t,le()),t.callbackNode===n?Dv.bind(null,t):null}function ud(t,e){var n=Ns;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=Za(t,e),t!==2&&(e=$e,$e=n,e!==null&&cd(e)),t}function cd(t){$e===null?$e=t:$e.push.apply($e,t)}function nC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ot(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rn(t,e){for(e&=~Ah,e&=~Fl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nt(e),r=1<<n;t[n]=-1,e&=~r}}function sm(t){if(B&6)throw Error(E(327));mi();var e=La(t,0);if(!(e&1))return Ye(t,le()),null;var n=Za(t,e);if(t.tag!==0&&n===2){var r=Lc(t);r!==0&&(e=r,n=ud(t,r))}if(n===1)throw n=eo,Er(t,0),Rn(t,e),Ye(t,le()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,$e,Jt),Ye(t,le()),null}function Oh(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(Pi=le()+500,bl&&or())}}function xr(t){Nn!==null&&Nn.tag===0&&!(B&6)&&mi();var e=B;B|=1;var n=_t.transition,r=G;try{if(_t.transition=null,G=1,t)return t()}finally{G=r,_t.transition=n,B=e,!(B&6)&&or()}}function bh(){et=li.current,Z(li)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,OI(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(fh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wa();break;case 3:Ti(),Z(qe),Z(Fe),Ih();break;case 5:Eh(r);break;case 4:Ti();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:_h(r.type._context);break;case 22:case 23:bh()}n=n.return}if(ke=t,he=t=zn(t.current,null),Ne=et=e,_e=0,eo=null,Ah=Fl=Ar=0,$e=Ns=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_r=null}return t}function Lv(t,e){do{var n=he;try{if(gh(),wa.current=Qa,qa){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qa=!1}if(Nr=0,Ee=me=ie=null,Rs=!1,Js=0,Nh.current=null,n===null||n.return===null){_e=1,eo=e,he=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Gp(o);if(g!==null){g.flags&=-257,Kp(g,o,a,s,e),g.mode&1&&Hp(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){Hp(s,u,e),Dh();break e}l=Error(E(426))}}else if(ee&&a.mode&1){var k=Gp(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Kp(k,o,a,s,e),ph(Ri(l,a));break e}}s=l=Ri(l,a),_e!==4&&(_e=2),Ns===null?Ns=[s]:Ns.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=vv(s,l,e);Up(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(jn===null||!jn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=yv(s,a,e);Up(s,w);break e}}s=s.return}while(s!==null)}Uv(n)}catch(T){e=T,he===n&&n!==null&&(he=n=n.return);continue}break}while(1)}function Mv(){var t=Ya.current;return Ya.current=Qa,t===null?Qa:t}function Dh(){(_e===0||_e===3||_e===2)&&(_e=4),ke===null||!(Ar&268435455)&&!(Fl&268435455)||Rn(ke,Ne)}function Za(t,e){var n=B;B|=2;var r=Mv();(ke!==t||Ne!==e)&&(Jt=null,Er(t,e));do try{rC();break}catch(i){Lv(t,i)}while(1);if(gh(),B=n,Ya.current=r,he!==null)throw Error(E(261));return ke=null,Ne=0,_e}function rC(){for(;he!==null;)Fv(he)}function iC(){for(;he!==null&&!NE();)Fv(he)}function Fv(t){var e=Wv(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?Uv(t):he=e,Nh.current=null}function Uv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=JI(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,he=null;return}}else if(n=YI(n,e,et),n!==null){he=n;return}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);_e===0&&(_e=5)}function fr(t,e,n){var r=G,i=_t.transition;try{_t.transition=null,G=1,sC(t,e,n,r)}finally{_t.transition=i,G=r}return null}function sC(t,e,n,r){do mi();while(Nn!==null);if(B&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jE(t,s),t===ke&&(he=ke=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ua||(ua=!0,zv(Da,function(){return mi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_t.transition,_t.transition=null;var o=G;G=1;var a=B;B|=4,Nh.current=null,ZI(t,n),Ov(n,t),kI(zc),Ma=!!Wc,zc=Wc=null,t.current=n,eC(n),AE(),B=a,G=o,_t.transition=s}else t.current=n;if(ua&&(ua=!1,Nn=t,Xa=i),s=t.pendingLanes,s===0&&(jn=null),bE(n.stateNode),Ye(t,le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ja)throw Ja=!1,t=ad,ad=null,t;return Xa&1&&t.tag!==0&&mi(),s=t.pendingLanes,s&1?t===ld?As++:(As=0,ld=t):As=0,or(),null}function mi(){if(Nn!==null){var t=__(Xa),e=_t.transition,n=G;try{if(_t.transition=null,G=16>t?16:t,Nn===null)var r=!1;else{if(t=Nn,Nn=null,Xa=0,B&6)throw Error(E(331));var i=B;for(B|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Ps(8,d,s)}var c=d.child;if(c!==null)c.return=d,R=c;else for(;R!==null;){d=R;var h=d.sibling,g=d.return;if(Nv(d),d===u){R=null;break}if(h!==null){h.return=g,R=h;break}R=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ps(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,R=p;break e}R=s.return}}var f=t.current;for(R=f;R!==null;){o=R;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,R=m;else e:for(o=f;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ml(9,a)}}catch(T){oe(a,a.return,T)}if(a===o){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(B=i,or(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Pl,t)}catch{}r=!0}return r}finally{G=n,_t.transition=e}}return!1}function om(t,e,n){e=Ri(n,e),e=vv(t,e,1),t=Un(t,e,1),e=We(),t!==null&&(Co(t,1,e),Ye(t,e))}function oe(t,e,n){if(t.tag===3)om(t,t,n);else for(;e!==null;){if(e.tag===3){om(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){t=Ri(n,t),t=yv(e,t,1),e=Un(e,t,1),t=We(),e!==null&&(Co(e,1,t),Ye(e,t));break}}e=e.return}}function oC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=We(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Ne&n)===n&&(_e===4||_e===3&&(Ne&130023424)===Ne&&500>le()-xh?Er(t,0):Ah|=n),Ye(t,e)}function jv(t,e){e===0&&(t.mode&1?(e=Zo,Zo<<=1,!(Zo&130023424)&&(Zo=4194304)):e=1);var n=We();t=hn(t,e),t!==null&&(Co(t,e,n),Ye(t,n))}function aC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jv(t,n)}function lC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),jv(t,n)}var Wv;Wv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qe.current)Ge=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ge=!1,QI(t,e,n);Ge=!!(t.flags&131072)}else Ge=!1,ee&&e.flags&1048576&&V_(e,Va,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ia(t,e),t=e.pendingProps;var i=Ci(e,Fe.current);pi(e,n),i=Sh(null,e,r,t,i,n);var s=kh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qe(r)?(s=!0,za(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yh(e),i.updater=Dl,e.stateNode=i,i._reactInternals=e,Yc(e,r,t,n),e=Zc(null,e,r,!0,s,n)):(e.tag=0,ee&&s&&hh(e),Ue(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ia(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=cC(r),t=kt(r,t),i){case 0:e=Xc(null,e,r,t,n);break e;case 1:e=Yp(null,e,r,t,n);break e;case 11:e=qp(null,e,r,t,n);break e;case 14:e=Qp(null,e,r,kt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Xc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Yp(t,e,r,i,n);case 3:e:{if(Cv(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,K_(t,e),Ga(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ri(Error(E(423)),e),e=Jp(t,e,r,n,i);break e}else if(r!==i){i=Ri(Error(E(424)),e),e=Jp(t,e,r,n,i);break e}else for(rt=Fn(e.stateNode.containerInfo.firstChild),st=e,ee=!0,Rt=null,n=J_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Si(),r===i){e=fn(t,e,n);break e}Ue(t,e,r,n)}e=e.child}return e;case 5:return X_(e),t===null&&Kc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bc(r,i)?o=null:s!==null&&Bc(r,s)&&(e.flags|=32),Iv(t,e),Ue(t,e,o,n),e.child;case 6:return t===null&&Kc(e),null;case 13:return Sv(t,e,n);case 4:return wh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ki(e,null,r,n):Ue(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),qp(t,e,r,i,n);case 7:return Ue(t,e,e.pendingProps,n),e.child;case 8:return Ue(t,e,e.pendingProps.children,n),e.child;case 12:return Ue(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q($a,r._currentValue),r._currentValue=o,s!==null)if(Ot(s.value,o)){if(s.children===i.children&&!qe.current){e=fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),qc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ue(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,pi(e,n),i=vt(i),r=r(i),e.flags|=1,Ue(t,e,r,n),e.child;case 14:return r=e.type,i=kt(r,e.pendingProps),i=kt(r.type,i),Qp(t,e,r,i,n);case 15:return wv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Ia(t,e),e.tag=1,Qe(r)?(t=!0,za(e)):t=!1,pi(e,n),Q_(e,r,i),Yc(e,r,i,n),Zc(null,e,r,!0,t,n);case 19:return kv(t,e,n);case 22:return Ev(t,e,n)}throw Error(E(156,e.tag))};function zv(t,e){return f_(t,e)}function uC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(t,e,n,r){return new uC(t,e,n,r)}function Lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cC(t){if(typeof t=="function")return Lh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===eh)return 11;if(t===th)return 14}return 2}function zn(t,e){var n=t.alternate;return n===null?(n=pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ka(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Lh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xr:return Ir(n.children,i,s,e);case Zd:o=8,i|=8;break;case wc:return t=pt(12,n,e,i|2),t.elementType=wc,t.lanes=s,t;case Ec:return t=pt(13,n,e,i),t.elementType=Ec,t.lanes=s,t;case Ic:return t=pt(19,n,e,i),t.elementType=Ic,t.lanes=s,t;case Yg:return Ul(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qg:o=10;break e;case Qg:o=9;break e;case eh:o=11;break e;case th:o=14;break e;case Sn:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ir(t,e,n,r){return t=pt(7,t,r,e),t.lanes=n,t}function Ul(t,e,n,r){return t=pt(22,t,r,e),t.elementType=Yg,t.lanes=n,t.stateNode={isHidden:!1},t}function Qu(t,e,n){return t=pt(6,t,null,e),t.lanes=n,t}function Yu(t,e,n){return e=pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Au(0),this.expirationTimes=Au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Au(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mh(t,e,n,r,i,s,o,a,l){return t=new dC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yh(s),t}function hC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Bv(t){if(!t)return qn;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Qe(n))return z_(t,n,e)}return e}function Vv(t,e,n,r,i,s,o,a,l){return t=Mh(n,r,!0,t,i,s,o,a,l),t.context=Bv(null),n=t.current,r=We(),i=Wn(n),s=sn(r,i),s.callback=e??null,Un(n,s,i),t.current.lanes=i,Co(t,i,r),Ye(t,r),t}function jl(t,e,n,r){var i=e.current,s=We(),o=Wn(i);return n=Bv(n),e.context===null?e.context=n:e.pendingContext=n,e=sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Un(i,e,o),t!==null&&(At(t,i,o,s),ya(t,i,o)),o}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function am(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fh(t,e){am(t,e),(t=t.alternate)&&am(t,e)}function fC(){return null}var $v=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uh(t){this._internalRoot=t}Wl.prototype.render=Uh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));jl(t,e,null,null)};Wl.prototype.unmount=Uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){jl(null,t,null,null)}),e[dn]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=w_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tn.length&&e!==0&&e<Tn[n].priority;n++);Tn.splice(n,0,t),n===0&&I_(t)}};function jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lm(){}function pC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=el(o);s.call(u)}}var o=Vv(e,r,t,0,null,!1,!1,"",lm);return t._reactRootContainer=o,t[dn]=o.current,Gs(t.nodeType===8?t.parentNode:t),xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=el(l);a.call(u)}}var l=Mh(t,0,!1,null,null,!1,!1,"",lm);return t._reactRootContainer=l,t[dn]=l.current,Gs(t.nodeType===8?t.parentNode:t),xr(function(){jl(e,l,n,r)}),l}function Bl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=el(o);a.call(l)}}jl(e,o,t,i)}else o=pC(n,e,t,i,r);return el(o)}v_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vs(e.pendingLanes);n!==0&&(ih(e,n|1),Ye(e,le()),!(B&6)&&(Pi=le()+500,or()))}break;case 13:xr(function(){var r=hn(t,1);if(r!==null){var i=We();At(r,t,1,i)}}),Fh(t,1)}};sh=function(t){if(t.tag===13){var e=hn(t,134217728);if(e!==null){var n=We();At(e,t,134217728,n)}Fh(t,134217728)}};y_=function(t){if(t.tag===13){var e=Wn(t),n=hn(t,e);if(n!==null){var r=We();At(n,t,e,r)}Fh(t,e)}};w_=function(){return G};E_=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};Oc=function(t,e,n){switch(e){case"input":if(kc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ol(r);if(!i)throw Error(E(90));Xg(r),kc(r,i)}}}break;case"textarea":e_(t,n);break;case"select":e=n.value,e!=null&&ci(t,!!n.multiple,e,!1)}};a_=Oh;l_=xr;var mC={usingClientEntryPoint:!1,Events:[ko,ni,Ol,s_,o_,Oh]},ls={findFiberByHostInstance:gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gC={bundleType:ls.bundleType,version:ls.version,rendererPackageName:ls.rendererPackageName,rendererConfig:ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=d_(t),t===null?null:t.stateNode},findFiberByHostInstance:ls.findFiberByHostInstance||fC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ca.isDisabled&&ca.supportsFiber)try{Pl=ca.inject(gC),$t=ca}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mC;ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(e))throw Error(E(200));return hC(t,e,null,n)};ut.createRoot=function(t,e){if(!jh(t))throw Error(E(299));var n=!1,r="",i=$v;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mh(t,1,!1,null,null,n,!1,r,i),t[dn]=e.current,Gs(t.nodeType===8?t.parentNode:t),new Uh(e)};ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=d_(e),t=t===null?null:t.stateNode,t};ut.flushSync=function(t){return xr(t)};ut.hydrate=function(t,e,n){if(!zl(e))throw Error(E(200));return Bl(null,t,e,!0,n)};ut.hydrateRoot=function(t,e,n){if(!jh(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$v;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Vv(e,null,t,1,n??null,i,!1,s,o),t[dn]=e.current,Gs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wl(e)};ut.render=function(t,e,n){if(!zl(e))throw Error(E(200));return Bl(null,t,e,!1,n)};ut.unmountComponentAtNode=function(t){if(!zl(t))throw Error(E(40));return t._reactRootContainer?(xr(function(){Bl(null,null,t,!1,function(){t._reactRootContainer=null,t[dn]=null})}),!0):!1};ut.unstable_batchedUpdates=Oh;ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zl(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Bl(t,e,n,!1,r)};ut.version="18.2.0-next-9e3b772b8-20220608";function Hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hv)}catch(t){console.error(t)}}Hv(),Vg.exports=ut;var _C=Vg.exports,um=_C;vc.createRoot=um.createRoot,vc.hydrateRoot=um.hydrateRoot;/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},to.apply(this,arguments)}var An;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(An||(An={}));const cm="popstate";function vC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return dd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:tl(i)}return wC(e,n,null,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Wh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yC(){return Math.random().toString(36).substr(2,8)}function dm(t,e){return{usr:t.state,key:t.key,idx:e}}function dd(t,e,n,r){return n===void 0&&(n=null),to({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ji(e):e,{state:n,key:e&&e.key||r||yC()})}function tl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ji(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function wC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=An.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(to({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=An.Pop;let k=d(),p=k==null?null:k-u;u=k,l&&l({action:a,location:v.location,delta:p})}function h(k,p){a=An.Push;let f=dd(v.location,k,p);n&&n(f,k),u=d()+1;let m=dm(f,u),w=v.createHref(f);try{o.pushState(m,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function g(k,p){a=An.Replace;let f=dd(v.location,k,p);n&&n(f,k),u=d();let m=dm(f,u),w=v.createHref(f);o.replaceState(m,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function _(k){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof k=="string"?k:tl(k);return ue(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return a},get location(){return t(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(cm,c),l=k,()=>{i.removeEventListener(cm,c),l=null}},createHref(k){return e(i,k)},createURL:_,encodeLocation(k){let p=_(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(k){return o.go(k)}};return v}var hm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(hm||(hm={}));function EC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ji(e):e,i=zh(r.pathname||"/",n);if(i==null)return null;let s=Gv(t);IC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=xC(s[a],DC(i));return o}function Gv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Bn([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Gv(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:NC(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Kv(s.path))i(s,o,l)}),e}function Kv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Kv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function IC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:AC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const CC=/^:\w+$/,SC=3,kC=2,TC=1,RC=10,PC=-2,fm=t=>t==="*";function NC(t,e){let n=t.split("/"),r=n.length;return n.some(fm)&&(r+=PC),e&&(r+=kC),n.filter(i=>!fm(i)).reduce((i,s)=>i+(CC.test(s)?SC:s===""?TC:RC),r)}function AC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function xC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=OC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;s.push({params:r,pathname:Bn([i,d.pathname]),pathnameBase:UC(Bn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Bn([i,d.pathnameBase]))}return s}function OC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=bC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let h=a[c]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=LC(a[c]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function bC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Wh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function DC(t){try{return decodeURI(t)}catch(e){return Wh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function LC(t,e){try{return decodeURIComponent(t)}catch(n){return Wh(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function zh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function MC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ji(t):t;return{pathname:n?n.startsWith("/")?n:FC(n,e):e,search:jC(r),hash:WC(i)}}function FC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ju(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bh(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ji(t):(i=to({},t),ue(!i.pathname||!i.pathname.includes("?"),Ju("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),Ju("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),Ju("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let c=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}a=c>=0?e[c]:"/"}let l=MC(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Bn=t=>t.join("/").replace(/\/\/+/g,"/"),UC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),jC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,WC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function zC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const qv=["post","put","patch","delete"];new Set(qv);const BC=["get",...qv];new Set(BC);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nl.apply(this,arguments)}const $h=S.createContext(null),VC=S.createContext(null),Wi=S.createContext(null),Vl=S.createContext(null),_n=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Qv=S.createContext(null);function $C(t,e){let{relative:n}=e===void 0?{}:e;zi()||ue(!1);let{basename:r,navigator:i}=S.useContext(Wi),{hash:s,pathname:o,search:a}=Jv(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Bn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function zi(){return S.useContext(Vl)!=null}function Ro(){return zi()||ue(!1),S.useContext(Vl).location}function Yv(t){S.useContext(Wi).static||S.useLayoutEffect(t)}function Bi(){let{isDataRoute:t}=S.useContext(_n);return t?rS():HC()}function HC(){zi()||ue(!1);let t=S.useContext($h),{basename:e,navigator:n}=S.useContext(Wi),{matches:r}=S.useContext(_n),{pathname:i}=Ro(),s=JSON.stringify(Bh(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return Yv(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=Vh(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Bn([e,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[e,n,s,i,t])}function $l(){let{matches:t}=S.useContext(_n),e=t[t.length-1];return e?e.params:{}}function Jv(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(_n),{pathname:i}=Ro(),s=JSON.stringify(Bh(r).map(o=>o.pathnameBase));return S.useMemo(()=>Vh(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function GC(t,e){return KC(t,e)}function KC(t,e,n){zi()||ue(!1);let{navigator:r}=S.useContext(Wi),{matches:i}=S.useContext(_n),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ro(),u;if(e){var d;let v=typeof e=="string"?ji(e):e;a==="/"||(d=v.pathname)!=null&&d.startsWith(a)||ue(!1),u=v}else u=l;let c=u.pathname||"/",h=a==="/"?c:c.slice(a.length)||"/",g=EC(t,{pathname:h}),_=XC(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Bn([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Bn([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&_?S.createElement(Vl.Provider,{value:{location:nl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:An.Pop}},_):_}function qC(){let t=nS(),e=zC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const QC=S.createElement(qC,null);class YC extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(_n.Provider,{value:this.props.routeContext},S.createElement(Qv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JC(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext($h);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(_n.Provider,{value:e},r)}function XC(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ue(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let d=l.route.id?o==null?void 0:o[l.route.id]:null,c=null;n&&(c=l.route.errorElement||QC);let h=e.concat(s.slice(0,u+1)),g=()=>{let _;return d?_=c:l.route.Component?_=S.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,S.createElement(JC,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(YC,{location:n.location,revalidation:n.revalidation,component:c,error:d,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var hd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(hd||(hd={}));var no;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(no||(no={}));function ZC(t){let e=S.useContext($h);return e||ue(!1),e}function eS(t){let e=S.useContext(VC);return e||ue(!1),e}function tS(t){let e=S.useContext(_n);return e||ue(!1),e}function Xv(t){let e=tS(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function nS(){var t;let e=S.useContext(Qv),n=eS(no.UseRouteError),r=Xv(no.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function rS(){let{router:t}=ZC(hd.UseNavigateStable),e=Xv(no.UseNavigateStable),n=S.useRef(!1);return Yv(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,nl({fromRouteId:e},s)))},[t,e])}function iS(t){let{to:e,replace:n,state:r,relative:i}=t;zi()||ue(!1);let{matches:s}=S.useContext(_n),{pathname:o}=Ro(),a=Bi(),l=Vh(e,Bh(s).map(d=>d.pathnameBase),o,i==="path"),u=JSON.stringify(l);return S.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Cn(t){ue(!1)}function sS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=An.Pop,navigator:s,static:o=!1}=t;zi()&&ue(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ji(r));let{pathname:u="/",search:d="",hash:c="",state:h=null,key:g="default"}=r,_=S.useMemo(()=>{let v=zh(u,a);return v==null?null:{location:{pathname:v,search:d,hash:c,state:h,key:g},navigationType:i}},[a,u,d,c,h,g,i]);return _==null?null:S.createElement(Wi.Provider,{value:l},S.createElement(Vl.Provider,{children:n,value:_}))}function oS(t){let{children:e,location:n}=t;return GC(fd(e),n)}var pm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(pm||(pm={}));new Promise(()=>{});function fd(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,fd(r.props.children,s));return}r.type!==Cn&&ue(!1),!r.props.index||!r.props.children||ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=fd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pd(){return pd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pd.apply(this,arguments)}function aS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function lS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function uS(t,e){return t.button===0&&(!e||e==="_self")&&!lS(t)}const cS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function dS(t){let{basename:e,children:n,window:r}=t,i=S.useRef();i.current==null&&(i.current=vC({window:r,v5Compat:!0}));let s=i.current,[o,a]=S.useState({action:s.action,location:s.location});return S.useLayoutEffect(()=>s.listen(a),[s]),S.createElement(sS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const hS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pS=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d}=e,c=aS(e,cS),{basename:h}=S.useContext(Wi),g,_=!1;if(typeof u=="string"&&fS.test(u)&&(g=u,hS))try{let f=new URL(window.location.href),m=u.startsWith("//")?new URL(f.protocol+u):new URL(u),w=zh(m.pathname,h);m.origin===f.origin&&w!=null?u=w+m.search+m.hash:_=!0}catch{}let v=$C(u,{relative:i}),k=mS(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i});function p(f){r&&r(f),f.defaultPrevented||k(f)}return S.createElement("a",pd({},c,{href:g||v,onClick:_||s?r:p,ref:n,target:l}))});var mm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(mm||(mm={}));var gm;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gm||(gm={}));function mS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Bi(),l=Ro(),u=Jv(t,{relative:o});return S.useCallback(d=>{if(uS(d,n)){d.preventDefault();let c=r!==void 0?r:tl(l)===tl(u);a(t,{replace:c,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw Vi(e)},Vi=function(t){return new Error("Firebase Database ("+Zv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ey(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new _S;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ty=function(t){const e=ey(t);return Hh.encodeByteArray(e,!0)},rl=function(t){return ty(t).replace(/\./g,"")},il=function(t){try{return Hh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t){return ro(void 0,t)}function ro(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!yS(n)||(t[n]=ro(t[n],e[n]));return t}function yS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=()=>wS().__FIREBASE_DEFAULTS__,IS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&il(t[1]);return e&&JSON.parse(e)},Gh=()=>{try{return ES()||IS()||CS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ny=()=>{var t;return(t=Gh())===null||t===void 0?void 0:t.config},SS=t=>{var e;return(e=Gh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[rl(JSON.stringify(n)),rl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function ry(){var t;const e=(t=Gh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TS(){return typeof self=="object"&&self.self===self}function iy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sy(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oy(){return Zv.NODE_ADMIN===!0}function sl(){try{return typeof indexedDB=="object"}catch{return!1}}function RS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="FirebaseError";class Je extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=PS,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?NS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Je(i,a,r)}}function NS(t,e){return t.replace(AS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const AS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=io(il(s[0])||""),n=io(il(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},xS=function(t){const e=ay(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},OS=function(t){const e=ay(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Or(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ol(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function al(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function md(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_m(s)&&_m(o)){if(!md(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _m(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ui(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ws(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ly(t,e){const n=new DS(t,e);return n.subscribe.bind(n)}class DS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xu),i.error===void 0&&(i.error=Xu),i.complete===void 0&&(i.complete=Xu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xu(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function Xe(t,e){return`${t} failed: ${e} argument `}function Ie(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(Xe(t,e)+"must be a valid function.")}function vm(t,e,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(Xe(t,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){return t&&t._delegate?t._delegate:t}class bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new He;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(US(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FS(t){return t===pr?void 0:t}function US(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=[];var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const dy={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},jS=H.INFO,WS={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},zS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=WS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Po{constructor(e){this.name=e,this._logLevel=jS,this._logHandler=zS,this._userLogHandler=null,qh.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}function BS(t){qh.forEach(e=>{e.setLogLevel(t)})}function VS(t,e){for(const n of qh){let r=null;e&&e.level&&(r=dy[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:H[s].toLowerCase(),message:a,args:o,type:i.name})}}}const $S=(t,e)=>e.some(n=>t instanceof n);let ym,wm;function HS(){return ym||(ym=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GS(){return wm||(wm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hy=new WeakMap,gd=new WeakMap,fy=new WeakMap,Zu=new WeakMap,Qh=new WeakMap;function KS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hy.set(n,t)}).catch(()=>{}),Qh.set(e,t),e}function qS(t){if(gd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gd.set(t,e)}let _d={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QS(t){_d=t(_d)}function YS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ec(this),e,...n);return fy.set(r,e.sort?e.sort():[e]),Vn(r)}:GS().includes(t)?function(...e){return t.apply(ec(this),e),Vn(hy.get(this))}:function(...e){return Vn(t.apply(ec(this),e))}}function JS(t){return typeof t=="function"?YS(t):(t instanceof IDBTransaction&&qS(t),$S(t,HS())?new Proxy(t,_d):t)}function Vn(t){if(t instanceof IDBRequest)return KS(t);if(Zu.has(t))return Zu.get(t);const e=JS(t);return e!==t&&(Zu.set(t,e),Qh.set(e,t)),e}const ec=t=>Qh.get(t);function XS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Vn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Vn(o.result),l.oldVersion,l.newVersion,Vn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ZS=["get","getKey","getAll","getAllKeys","count"],ek=["put","add","delete","clear"],tc=new Map;function Em(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tc.get(e))return tc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ek.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return tc.set(e,s),s}QS(t=>({...t,get:(e,n,r)=>Em(e,n)||t.get(e,n,r),has:(e,n)=>!!Em(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vd="@firebase/app",Im="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new Po("@firebase/app"),rk="@firebase/app-compat",ik="@firebase/analytics-compat",sk="@firebase/analytics",ok="@firebase/app-check-compat",ak="@firebase/app-check",lk="@firebase/auth",uk="@firebase/auth-compat",ck="@firebase/database",dk="@firebase/database-compat",hk="@firebase/functions",fk="@firebase/functions-compat",pk="@firebase/installations",mk="@firebase/installations-compat",gk="@firebase/messaging",_k="@firebase/messaging-compat",vk="@firebase/performance",yk="@firebase/performance-compat",wk="@firebase/remote-config",Ek="@firebase/remote-config-compat",Ik="@firebase/storage",Ck="@firebase/storage-compat",Sk="@firebase/firestore",kk="@firebase/firestore-compat",Tk="firebase",Rk="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="[DEFAULT]",Pk={[vd]:"fire-core",[rk]:"fire-core-compat",[sk]:"fire-analytics",[ik]:"fire-analytics-compat",[ak]:"fire-app-check",[ok]:"fire-app-check-compat",[lk]:"fire-auth",[uk]:"fire-auth-compat",[ck]:"fire-rtdb",[dk]:"fire-rtdb-compat",[hk]:"fire-fn",[fk]:"fire-fn-compat",[pk]:"fire-iid",[mk]:"fire-iid-compat",[gk]:"fire-fcm",[_k]:"fire-fcm-compat",[vk]:"fire-perf",[yk]:"fire-perf-compat",[wk]:"fire-rc",[Ek]:"fire-rc-compat",[Ik]:"fire-gcs",[Ck]:"fire-gcs-compat",[Sk]:"fire-fst",[kk]:"fire-fst-compat","fire-js":"fire-js",[Tk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Map,so=new Map;function ll(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function py(t,e){t.container.addOrOverwriteComponent(e)}function Jn(t){const e=t.name;if(so.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;so.set(e,t);for(const n of Yn.values())ll(n,t);return!0}function my(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nk(t,e,n=Qn){my(t,e).clearInstance(n)}function Ak(){so.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},on=new Br("app","Firebase",xk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ok=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=Rk;function Yh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(n||(n=ny()),!n)throw on.create("no-options");const s=Yn.get(i);if(s){if(md(n,s.options)&&md(r,s.config))return s;throw on.create("duplicate-app",{appName:i})}const o=new cy(i);for(const l of so.values())o.addComponent(l);const a=new Ok(n,r,o);return Yn.set(i,a),a}function bk(t=Qn){const e=Yn.get(t);if(!e&&t===Qn&&ny())return Yh();if(!e)throw on.create("no-app",{appName:t});return e}function Dk(){return Array.from(Yn.values())}async function gy(t){const e=t.name;Yn.has(e)&&(Yn.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Gt(t,e,n){var r;let i=(r=Pk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(a.join(" "));return}Jn(new bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function _y(t,e){if(t!==null&&typeof t!="function")throw on.create("invalid-log-argument");VS(t,e)}function vy(t){BS(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="firebase-heartbeat-database",Mk=1,oo="firebase-heartbeat-store";let nc=null;function yy(){return nc||(nc=XS(Lk,Mk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oo)}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),nc}async function Fk(t){try{return await(await yy()).transaction(oo).objectStore(oo).get(wy(t))}catch(e){if(e instanceof Je)br.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function Cm(t,e){try{const r=(await yy()).transaction(oo,"readwrite");await r.objectStore(oo).put(e,wy(t)),await r.done}catch(n){if(n instanceof Je)br.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(r.message)}}}function wy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=1024,jk=30*24*60*60*1e3;class Wk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=jk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sm(),{heartbeatsToSend:n,unsentEntries:r}=zk(this._heartbeatsCache.heartbeats),i=rl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sm(){return new Date().toISOString().substring(0,10)}function zk(t,e=Uk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),km(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),km(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sl()?RS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Fk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function km(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){Jn(new bt("platform-logger",e=>new tk(e),"PRIVATE")),Jn(new bt("heartbeat",e=>new Wk(e),"PRIVATE")),Gt(vd,Im,t),Gt(vd,Im,"esm2017"),Gt("fire-js","")}Vk("");const $k=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Je,SDK_VERSION:ar,_DEFAULT_ENTRY_NAME:Qn,_addComponent:ll,_addOrOverwriteComponent:py,_apps:Yn,_clearComponents:Ak,_components:so,_getProvider:my,_registerComponent:Jn,_removeServiceInstance:Nk,deleteApp:gy,getApp:bk,getApps:Dk,initializeApp:Yh,onLog:_y,registerVersion:Gt,setLogLevel:vy},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n){this._delegate=e,this.firebase=n,ll(e,new bt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),gy(this._delegate)))}_getService(e,n=Qn){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Qn){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){ll(this._delegate,e)}_addOrOverwriteComponent(e){py(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Tm=new Br("app-compat","Firebase",Gk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Gt,setLogLevel:vy,onLog:_y,apps:null,SDK_VERSION:ar,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:$k}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Qn,!at(e,u))throw Tm.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,d={}){const c=Yh(u,d);if(at(e,c.name))return e[c.name];const h=new t(c,n);return e[c.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const d=u.name,c=d.replace("-compat","");if(Jn(u)&&u.type==="PUBLIC"){const h=(g=i())=>{if(typeof g[c]!="function")throw Tm.create("invalid-app-argument",{appName:d});return g[c]()};u.serviceProps!==void 0&&ro(h,u.serviceProps),n[c]=h,t.prototype[c]=function(...g){return this._getService.bind(this,d).apply(this,u.multipleInstances?g:[])}}return u.type==="PUBLIC"?n[c]:null}function l(u,d){return d==="serverAuth"?null:d}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(){const t=Kk(Hk);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Ey,extendNamespace:e,createSubscribe:ly,ErrorFactory:Br,deepExtend:ro});function e(n){ro(t,n)}return t}const qk=Ey();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=new Po("@firebase/app-compat"),Qk="@firebase/app-compat",Yk="0.2.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(t){Gt(Qk,Yk,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(TS()&&self.firebase!==void 0){Rm.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Rm.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const vn=qk;Jk();var Xk="firebase",Zk="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn.registerVersion(Xk,Zk,"app-compat");function Jh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const us={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Qr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function Iy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tT=eT,nT=Iy,Cy=new Br("auth","Firebase",Iy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Po("@firebase/auth");function rT(t,...e){ul.logLevel<=H.WARN&&ul.warn(`Auth (${ar}): ${t}`,...e)}function Ta(t,...e){ul.logLevel<=H.ERROR&&ul.error(`Auth (${ar}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t,...e){throw Xh(t,...e)}function Ae(t,...e){return Xh(t,...e)}function Sy(t,e,n){const r=Object.assign(Object.assign({},nT()),{[e]:n});return new Br("auth","Firebase",r).create(e,{appName:t.name})}function $i(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Oe(t,"argument-error"),Sy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Cy.create(t,...e)}function I(t,e,...n){if(!t)throw Xh(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ta(e),new Error(e)}function Dt(t,e){t||Vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zh(){return Pm()==="http:"||Pm()==="https:"}function Pm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zh()||iy()||"connection"in navigator)?navigator.onLine:!0}function sT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dt(n>e,"Short delay should be less than long delay!"),this.isMobile=Kh()||Hl()}get(){return iT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t,e){Dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new No(3e4,6e4);function pe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ve(t,e,n,r,i={}){return Ty(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Vr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ky.fetch()(Ry(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ty(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},oT),e);try{const i=new lT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Es(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Es(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Es(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Es(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Sy(t,d,u);Oe(t,d)}}catch(i){if(i instanceof Je)throw i;Oe(t,"network-request-failed",{message:String(i)})}}async function yn(t,e,n,r,i={}){const s=await ve(t,e,n,r,i);return"mfaPendingCredential"in s&&Oe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ry(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ef(t.config,i):`${t.config.apiScheme}://${i}`}class lT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ae(this.auth,"network-request-failed")),aT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Es(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ae(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(t,e){return ve(t,"POST","/v1/accounts:delete",e)}async function cT(t,e){return ve(t,"POST","/v1/accounts:update",e)}async function dT(t,e){return ve(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hT(t,e=!1){const n=D(t),r=await n.getIdToken(e),i=Kl(r);I(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xs(rc(i.auth_time)),issuedAtTime:xs(rc(i.iat)),expirationTime:xs(rc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rc(t){return Number(t)*1e3}function Kl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ta("JWT malformed, contained fewer than 3 sections"),null;try{const i=il(n);return i?JSON.parse(i):(Ta("Failed to decode base64 JWT payload"),null)}catch(i){return Ta("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fT(t){const e=Kl(t);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Je&&pT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pn(t,dT(n,{idToken:r}));I(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vT(s.providerUserInfo):[],a=_T(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Py(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function gT(t){const e=D(t);await lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _T(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vT(t){return t.map(e=>{var{providerId:n}=e,r=Jh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yT(t,e){const n=await Ty(t,{},async()=>{const r=Vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ry(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ky.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new uo;return r&&(I(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(I(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,e){I(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Py(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pn(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hT(this,e)}reload(){return gT(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pn(this,uT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:N,stsTokenManager:A}=n;I(m&&A,e,"internal-error");const x=uo.fromJSON(this.name,A);I(typeof m=="string",e,"internal-error"),In(c,e.name),In(h,e.name),I(typeof w=="boolean",e,"internal-error"),I(typeof T=="boolean",e,"internal-error"),In(g,e.name),In(_,e.name),In(v,e.name),In(k,e.name),In(p,e.name),In(f,e.name);const J=new Cr({uid:m,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:T,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(J.providerData=N.map(W=>Object.assign({},W))),k&&(J._redirectEventId=k),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new uo;i.updateFromServerResponse(n);const s=new Cr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lo(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new Map;function it(t){Dt(t instanceof Function,"Expected a class definition");let e=Nm.get(t);return e?(Dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ny.type="NONE";const Ni=Ny;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Sr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Sr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gi(it(Ni),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||it(Ni);const o=Sr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Cr._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new gi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new gi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Oy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ay(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(by(e))return"Blackberry";if(Dy(e))return"Webos";if(tf(e))return"Safari";if((e.includes("chrome/")||xy(e))&&!e.includes("edge/"))return"Chrome";if(Ao(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ay(t=fe()){return/firefox\//i.test(t)}function tf(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xy(t=fe()){return/crios\//i.test(t)}function Oy(t=fe()){return/iemobile/i.test(t)}function Ao(t=fe()){return/android/i.test(t)}function by(t=fe()){return/blackberry/i.test(t)}function Dy(t=fe()){return/webos/i.test(t)}function Hi(t=fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wT(t=fe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function ET(t=fe()){var e;return Hi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IT(){return sy()&&document.documentMode===10}function Ly(t=fe()){return Hi(t)||Ao(t)||Dy(t)||by(t)||/windows phone/i.test(t)||Oy(t)}function CT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t,e=[]){let n;switch(t){case"Browser":n=Am(fe());break;case"Worker":n=`${Am(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ar}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(t){return(await ve(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Fy(t,e){return ve(t,"GET","/v2/recaptchaConfig",pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){return t!==void 0&&t.getResponse!==void 0}function Om(t){return t!==void 0&&t.enterprise!==void 0}class Uy{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nf(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ae("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kT().appendChild(r)})}function jy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TT="https://www.google.com/recaptcha/enterprise.js?render=",RT="recaptcha-enterprise",PT="NO_RECAPTCHA";class Wy{constructor(e){this.type=RT,this.auth=ce(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Fy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Uy(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Om(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(PT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Om(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}nf(TT+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Xn(t,e,n,r=!1){const i=new Wy(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bm(this),this.idTokenSubscription=new bm(this),this.beforeStateQueue=new NT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?D(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}async initializeRecaptchaConfig(){const e=await Fy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Uy(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Wy(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&it(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=My(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ce(t){return D(t)}class bm{constructor(e){this.auth=e,this.observer=null,this.addObserver=ly(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function xT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OT(t,e,n){const r=ce(t);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=zy(e),{host:o,port:a}=bT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||DT()}function zy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bT(t){const e=zy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Dm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Dm(o)}}}function Dm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(t,e){return ve(t,"POST","/v1/accounts:resetPassword",pe(t,e))}async function Vy(t,e){return ve(t,"POST","/v1/accounts:update",e)}async function LT(t,e){return ve(t,"POST","/v1/accounts:update",pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t,e){return yn(t,"POST","/v1/accounts:signInWithPassword",pe(t,e))}async function ql(t,e){return ve(t,"POST","/v1/accounts:sendOobCode",pe(t,e))}async function MT(t,e){return ql(t,e)}async function sc(t,e){return ql(t,e)}async function oc(t,e){return ql(t,e)}async function FT(t,e){return ql(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(t,e){return yn(t,"POST","/v1/accounts:signInWithEmailLink",pe(t,e))}async function jT(t,e){return yn(t,"POST","/v1/accounts:signInWithEmailLink",pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends Gi{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new co(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new co(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Xn(e,r,"signInWithPassword");return ic(e,i)}else return ic(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Xn(e,r,"signInWithPassword");return ic(e,s)}else return Promise.reject(i)});case"emailLink":return UT(e,{email:this._email,oobCode:this._password});default:Oe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Vy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jT(e,{idToken:n,email:this._email,oobCode:this._password});default:Oe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(t,e){return yn(t,"POST","/v1/accounts:signInWithIdp",pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="http://localhost";class qt extends Gi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Oe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return an(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,an(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,an(e,n)}buildRequest(){const e={requestUri:WT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT(t,e){return ve(t,"POST","/v1/accounts:sendVerificationCode",pe(t,e))}async function BT(t,e){return yn(t,"POST","/v1/accounts:signInWithPhoneNumber",pe(t,e))}async function VT(t,e){const n=await yn(t,"POST","/v1/accounts:signInWithPhoneNumber",pe(t,e));if(n.temporaryProof)throw Es(t,"account-exists-with-different-credential",n);return n}const $T={USER_NOT_FOUND:"user-not-found"};async function HT(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return yn(t,"POST","/v1/accounts:signInWithPhoneNumber",pe(t,n),$T)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Gi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new kr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new kr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return BT(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return VT(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return HT(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new kr({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KT(t){const e=ui(ws(t)).link,n=e?ui(ws(e)).deep_link_id:null,r=ui(ws(t)).deep_link_id;return(r?ui(ws(r)).link:null)||r||n||e||t}class Ql{constructor(e){var n,r,i,s,o,a;const l=ui(ws(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=GT((i=l.mode)!==null&&i!==void 0?i:null);I(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=KT(e);try{return new Ql(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.providerId=lr.PROVIDER_ID}static credential(e,n){return co._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ql.parseLink(n);return I(r,"argument-error"),co._fromEmailAndCode(e,r.code,r.tenantId)}}lr.PROVIDER_ID="password";lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends wn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class _i extends Ki{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return I("providerId"in n&&"signInMethod"in n,"argument-error"),qt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),qt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return _i.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return _i.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new _i(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Ki{constructor(){super("facebook.com")}static credential(e){return qt._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qt._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Ki{constructor(){super("github.com")}static credential(e){return qt._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.GITHUB_SIGN_IN_METHOD="github.com";zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="http://localhost";class Ai extends Gi{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return an(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,an(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,an(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Ai(r,s)}static _create(e,n){return new Ai(e,n)}buildRequest(){return{requestUri:qT,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="saml.";class cl extends wn{constructor(e){I(e.startsWith(QT),"argument-error"),super(e)}static credentialFromResult(e){return cl.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return cl.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Ai.fromJSON(e);return I(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Ai._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Ki{constructor(){super("twitter.com")}static credential(e,n){return qt._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(t,e){return yn(t,"POST","/v1/accounts:signUp",pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cr._fromIdTokenResponse(e,r,i),o=Lm(r);return new wt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lm(r);return new wt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YT(t){var e;const n=ce(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new wt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ra(n,{returnSecureToken:!0}),i=await wt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends Je{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dl(e,n,r,i)}}function $y(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dl._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT(t,e){const n=D(t);await Yl(!0,n,e);const{providerUserInfo:r}=await cT(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Hy(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function rf(t,e,n=!1){const r=await pn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wt._forOperation(t,"link",r)}async function Yl(t,e,n){await lo(e);const r=Hy(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";I(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await pn(t,$y(r,i,e,t),n);I(s.idToken,r,"internal-error");const o=Kl(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(t.uid===a,r,"user-mismatch"),wt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Oe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(t,e,n=!1){const r="signIn",i=await $y(t,r,e),s=await wt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Jl(t,e){return Ky(ce(t),e)}async function qy(t,e){const n=D(t);return await Yl(!1,n,e.providerId),rf(n,e)}async function Qy(t,e){return Gy(D(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(t,e){return yn(t,"POST","/v1/accounts:signInWithCustomToken",pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(t,e){const n=ce(t),r=await XT(n,{token:e,returnSecureToken:!0}),i=await wt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?sf._fromServerResponse(e,n):"totpInfo"in n?of._fromServerResponse(e,n):Oe(e,"internal-error")}}class sf extends xo{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new sf(n)}}class of extends xo{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new of(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t,e,n){var r;I(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),I(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(t,e,n){var r;const i=ce(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Xn(i,s,"getOobCode",!0);n&&vi(i,o,n),await sc(i,o)}else n&&vi(i,s,n),await sc(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Xn(i,s,"getOobCode",!0);n&&vi(i,a,n),await sc(i,a)}else return Promise.reject(o)})}async function t1(t,e,n){await By(D(t),{oobCode:e,newPassword:n})}async function n1(t,e){await LT(D(t),{oobCode:e})}async function Yy(t,e){const n=D(t),r=await By(n,{oobCode:e}),i=r.requestType;switch(I(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(r.mfaInfo,n,"internal-error");default:I(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=xo._fromServerResponse(ce(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function r1(t,e){const{data:n}=await Yy(D(t),e);return n.email}async function i1(t,e,n){var r;const i=ce(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Xn(i,s,"signUpPassword");o=Ra(i,u)}else o=Ra(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const d=await Xn(i,s,"signUpPassword");return Ra(i,d)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await wt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function s1(t,e,n){return Jl(D(t),lr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(t,e,n){var r;const i=ce(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){I(l.handleCodeInApp,i,"argument-error"),l&&vi(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Xn(i,s,"getOobCode",!0);o(a,n),await oc(i,a)}else o(s,n),await oc(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await Xn(i,s,"getOobCode",!0);o(l,n),await oc(i,l)}else return Promise.reject(a)})}function a1(t,e){const n=Ql.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function l1(t,e,n){const r=D(t),i=lr.credentialWithLink(e,n||ao());return I(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Jl(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(t,e){return ve(t,"POST","/v1/accounts:createAuthUri",pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c1(t,e){const n=Zh()?ao():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await u1(D(t),r);return i||[]}async function d1(t,e){const n=D(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&vi(n.auth,i,e);const{email:s}=await MT(n.auth,i);s!==t.email&&await t.reload()}async function h1(t,e,n){const r=D(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&vi(r.auth,s,n);const{email:o}=await FT(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(t,e){return ve(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=D(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await pn(r,f1(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function m1(t,e){return Jy(D(t),e,null)}function g1(t,e){return Jy(D(t),null,e)}async function Jy(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await pn(t,Vy(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Kl(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new yi(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new v1(s,i);case"github.com":return new y1(s,i);case"google.com":return new w1(s,i);case"twitter.com":return new E1(s,i,t.screenName||null);case"custom":case"anonymous":return new yi(s,null);default:return new yi(s,r,i)}}class yi{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Xy extends yi{constructor(e,n,r,i){super(e,n,r),this.username=i}}class v1 extends yi{constructor(e,n){super(e,"facebook.com",n)}}class y1 extends Xy{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class w1 extends yi{constructor(e,n){super(e,"google.com",n)}}class E1 extends Xy{constructor(e,n,r){super(e,"twitter.com",n,r)}}function I1(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:_1(n)}class yr{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new yr("enroll",e,n)}static _fromMfaPendingCredential(e){return new yr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return yr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return yr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ce(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>xo._fromServerResponse(r,a));I(i.mfaPendingCredential,r,"internal-error");const o=yr._fromMfaPendingCredential(i.mfaPendingCredential);return new af(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await wt._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return I(n.user,r,"internal-error"),wt._forOperation(n.user,n.operationType,u);default:Oe(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function C1(t,e){var n;const r=D(t),i=e;return I(e.customData.operationType,r,"argument-error"),I((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),af._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(t,e){return ve(t,"POST","/v2/accounts/mfaEnrollment:start",pe(t,e))}function k1(t,e){return ve(t,"POST","/v2/accounts/mfaEnrollment:finalize",pe(t,e))}function T1(t,e){return ve(t,"POST","/v2/accounts/mfaEnrollment:withdraw",pe(t,e))}class lf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>xo._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new lf(e)}async getSession(){return yr._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await pn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await pn(this.user,T1(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ac=new WeakMap;function R1(t){const e=D(t);return ac.has(e)||ac.set(e,lf._fromUser(e)),ac.get(e)}const hl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hl,"1"),this.storage.removeItem(hl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(){const t=fe();return tf(t)||Hi(t)}const N1=1e3,A1=10;class ew extends Zy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=P1()&&CT(),this.fallbackToPolling=Ly(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);IT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,A1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},N1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ew.type="LOCAL";const uf=ew;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw extends Zy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tw.type="SESSION";const Dr=tw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await x1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Oo("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return window}function b1(t){de().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(){return typeof de().WorkerGlobalScope<"u"&&typeof de().importScripts=="function"}async function D1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function L1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function M1(){return cf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="firebaseLocalStorageDb",F1=1,fl="firebaseLocalStorage",rw="fbase_key";class bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zl(t,e){return t.transaction([fl],e?"readwrite":"readonly").objectStore(fl)}function U1(){const t=indexedDB.deleteDatabase(nw);return new bo(t).toPromise()}function yd(){const t=indexedDB.open(nw,F1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fl,{keyPath:rw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fl)?e(r):(r.close(),await U1(),e(await yd()))})})}async function Mm(t,e,n){const r=Zl(t,!0).put({[rw]:e,value:n});return new bo(r).toPromise()}async function j1(t,e){const n=Zl(t,!1).get(e),r=await new bo(n).toPromise();return r===void 0?null:r.value}function Fm(t,e){const n=Zl(t,!0).delete(e);return new bo(n).toPromise()}const W1=800,z1=3;class iw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>z1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xl._getInstance(M1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await D1(),!this.activeServiceWorker)return;this.sender=new O1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||L1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yd();return await Mm(e,hl,"1"),await Fm(e,hl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>j1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zl(i,!1).getAll();return new bo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iw.type="LOCAL";const ho=iw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(t,e){return ve(t,"POST","/v2/accounts/mfaSignIn:start",pe(t,e))}function V1(t,e){return ve(t,"POST","/v2/accounts/mfaSignIn:finalize",pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=500,H1=6e4,da=1e12;class G1{constructor(e){this.auth=e,this.counter=da,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new K1(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||da;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||da;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||da;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class K1{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;I(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=q1(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},H1)},$1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function q1(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=jy("rcb"),Q1=new No(3e4,6e4),Y1="https://www.google.com/recaptcha/api.js?";class J1{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=de().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return I(X1(n),e,"argument-error"),this.shouldResolveImmediately(n)&&xm(de().grecaptcha)?Promise.resolve(de().grecaptcha):new Promise((r,i)=>{const s=de().setTimeout(()=>{i(Ae(e,"network-request-failed"))},Q1.get());de()[lc]=()=>{de().clearTimeout(s),delete de()[lc];const a=de().grecaptcha;if(!a||!xm(a)){i(Ae(e,"internal-error"));return}const l=a.render;a.render=(u,d)=>{const c=l(u,d);return this.counter++,c},this.hostLanguage=n,r(a)};const o=`${Y1}?${Vr({onload:lc,render:"explicit",hl:n})}`;nf(o).catch(()=>{clearTimeout(s),i(Ae(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=de().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function X1(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Z1{async load(e){return new G1(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="recaptcha",eR={theme:"light",type:"image"};let tR=class{constructor(e,n=Object.assign({},eR),r){this.parameters=n,this.type=sw,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ce(r),this.isInvisible=this.parameters.size==="invisible",I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;I(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Z1:new J1,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=de()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(Zh()&&!cf(),this.auth,"internal-error"),await nR(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ST(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function nR(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=kr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function rR(t,e,n){const r=ce(t),i=await eu(r,e,D(n));return new df(i,s=>Jl(r,s))}async function iR(t,e,n){const r=D(t);await Yl(!1,r,"phone");const i=await eu(r.auth,e,D(n));return new df(i,s=>qy(r,s))}async function sR(t,e,n){const r=D(t),i=await eu(r.auth,e,D(n));return new df(i,s=>Qy(r,s))}async function eu(t,e,n){var r;const i=await n.verify();try{I(typeof i=="string",t,"argument-error"),I(n.type===sw,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return I(o.type==="enroll",t,"internal-error"),(await S1(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{I(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return I(a,t,"missing-multi-factor-info"),(await B1(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await zT(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function oR(t,e){await rf(D(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr=class Pa{constructor(e){this.providerId=Pa.PROVIDER_ID,this.auth=ce(e)}verifyPhoneNumber(e,n){return eu(this.auth,e,D(n))}static credential(e,n){return kr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Pa.credentialFromTaggedObject(n)}static credentialFromError(e){return Pa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?kr._fromTokenResponse(n,r):null}};Lr.PROVIDER_ID="phone";Lr.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t,e){return e?it(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf extends Gi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,n){return an(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aR(t){return Ky(t.auth,new hf(t),t.bypassAuthState)}function lR(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Gy(n,new hf(t),t.bypassAuthState)}async function uR(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),rf(n,new hf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aR;case"linkViaPopup":case"linkViaRedirect":return uR;case"reauthViaPopup":case"reauthViaRedirect":return lR;default:Oe(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new No(2e3,1e4);async function dR(t,e,n){const r=ce(t);$i(t,e,wn);const i=$r(r,n);return new tn(r,"signInViaPopup",e,i).executeNotNull()}async function hR(t,e,n){const r=D(t);$i(r.auth,e,wn);const i=$r(r.auth,n);return new tn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function fR(t,e,n){const r=D(t);$i(r.auth,e,wn);const i=$r(r.auth,n);return new tn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class tn extends ow{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=Oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cR.get())};e()}}tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="pendingRedirect",Os=new Map;class mR extends ow{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Os.get(this.auth._key());if(!e){try{const r=await gR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Os.set(this.auth._key(),e)}return this.bypassAuthState||Os.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gR(t,e){const n=lw(e),r=aw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function ff(t,e){return aw(t)._set(lw(e),"true")}function _R(){Os.clear()}function pf(t,e){Os.set(t._key(),e)}function aw(t){return it(t._redirectPersistence)}function lw(t){return Sr(pR,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t,e,n){return yR(t,e,n)}async function yR(t,e,n){const r=ce(t);$i(t,e,wn),await r._initializationPromise;const i=$r(r,n);return await ff(i,r),i._openRedirect(r,e,"signInViaRedirect")}function wR(t,e,n){return ER(t,e,n)}async function ER(t,e,n){const r=D(t);$i(r.auth,e,wn),await r.auth._initializationPromise;const i=$r(r.auth,n);await ff(i,r.auth);const s=await uw(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function IR(t,e,n){return CR(t,e,n)}async function CR(t,e,n){const r=D(t);$i(r.auth,e,wn),await r.auth._initializationPromise;const i=$r(r.auth,n);await Yl(!1,r,e.providerId),await ff(i,r.auth);const s=await uw(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function SR(t,e){return await ce(t)._initializationPromise,tu(t,e,!1)}async function tu(t,e,n=!1){const r=ce(t),i=$r(r,e),o=await new mR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function uw(t){const e=Oo(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=10*60*1e3;class cw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ae(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Um(e))}saveEventToCache(e){this.cachedEventUids.add(Um(e)),this.lastProcessedEventTime=Date.now()}}function Um(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(t,e={}){return ve(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PR=/^https?/;async function NR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hw(t);for(const n of e)try{if(AR(n))return}catch{}Oe(t,"unauthorized-domain")}function AR(t){const e=ao(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PR.test(n))return!1;if(RR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new No(3e4,6e4);function jm(){const t=de().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OR(t){return new Promise((e,n)=>{var r,i,s;function o(){jm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jm(),n(Ae(t,"network-request-failed"))},timeout:xR.get()})}if(!((i=(r=de().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=de().gapi)===null||s===void 0)&&s.load)o();else{const a=jy("iframefcb");return de()[a]=()=>{gapi.load?o():n(Ae(t,"network-request-failed"))},nf(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Na=null,e})}let Na=null;function bR(t){return Na=Na||OR(t),Na}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=new No(5e3,15e3),LR="__/auth/iframe",MR="emulator/auth/iframe",FR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jR(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ef(e,MR):`https://${t.config.authDomain}/${LR}`,r={apiKey:e.apiKey,appName:t.name,v:ar},i=UR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vr(r).slice(1)}`}async function WR(t){const e=await bR(t),n=de().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:jR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ae(t,"network-request-failed"),a=de().setTimeout(()=>{s(o)},DR.get());function l(){de().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BR=500,VR=600,$R="_blank",HR="http://localhost";class Wm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GR(t,e,n,r=BR,i=VR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=fe().toLowerCase();n&&(a=xy(u)?$R:n),Ay(u)&&(e=e||HR,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(ET(u)&&a!=="_self")return KR(e||"",a),new Wm(null);const c=window.open(e||"",a,d);I(c,t,"popup-blocked");try{c.focus()}catch{}return new Wm(c)}function KR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR="__/auth/handler",QR="emulator/auth/handler",YR=encodeURIComponent("fac");async function wd(t,e,n,r,i,s){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ar,eventId:i};if(e instanceof wn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ol(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof Ki){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${YR}=${encodeURIComponent(l)}`:"";return`${JR(t)}?${Vr(a).slice(1)}${u}`}function JR({config:t}){return t.emulator?ef(t,QR):`https://${t.authDomain}/${qR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="webStorageSupport";class XR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dr,this._completeRedirectFn=tu,this._overrideRedirectResult=pf}async _openPopup(e,n,r,i){var s;Dt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wd(e,n,r,ao(),i);return GR(e,o,Oo())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await wd(e,n,r,ao(),i);return b1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WR(e),r=new cw(e);return n.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uc,{type:uc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[uc];o!==void 0&&n(!!o),Oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ly()||tf()||Hi()}}const ZR=XR;class eP{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Vt("unexpected MultiFactorSessionType")}}}class mf extends eP{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new mf(e)}_finalizeEnroll(e,n,r){return k1(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return V1(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class fw{constructor(){}static assertion(e){return mf._fromCredential(e)}}fw.FACTOR_ID="phone";var zm="@firebase/auth",Bm="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rP(t){Jn(new bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;I(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:My(t)},u=new AT(r,i,s,l);return xT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jn(new bt("auth-internal",e=>{const n=ce(e.getProvider("auth").getImmediate());return(r=>new tP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(zm,Bm,nP(t)),Gt(zm,Bm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=5*60;SS("authIdTokenMaxAge");rP("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=2e3;async function oP(t,e,n){var r;const{BuildInfo:i}=Mr();Dt(e.sessionId,"AuthEvent did not contain a session ID");const s=await dP(e.sessionId),o={};return Hi()?o.ibi=i.packageName:Ao()?o.apn=i.packageName:Oe(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,wd(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function aP(t){const{BuildInfo:e}=Mr(),n={};Hi()?n.iosBundleId=e.packageName:Ao()?n.androidPackageName=e.packageName:Oe(t,"operation-not-supported-in-this-environment"),await hw(t,n)}function lP(t){const{cordova:e}=Mr();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,wT()?"_blank":"_system","location=yes"),n(i)})})}async function uP(t,e,n){const{cordova:r}=Mr();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var c;s();const h=(c=r.plugins.browsertab)===null||c===void 0?void 0:c.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(Ae(t,"redirect-cancelled-by-user"))},sP))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Ao()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function cP(t){var e,n,r,i,s,o,a,l,u,d;const c=Mr();I(typeof((e=c==null?void 0:c.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I(typeof((n=c==null?void 0:c.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I(typeof((s=(i=(r=c==null?void 0:c.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((l=(a=(o=c==null?void 0:c.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((d=(u=c==null?void 0:c.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function dP(t){const e=hP(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function hP(t){if(Dt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=20;class pP extends cw{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function mP(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:vP(),postBody:null,tenantId:t.tenantId,error:Ae(t,"no-auth-event")}}function gP(t,e){return Ed()._set(Id(t),e)}async function Vm(t){const e=await Ed()._get(Id(t));return e&&await Ed()._remove(Id(t)),e}function _P(t,e){var n,r;const i=wP(e);if(i.includes("/__/auth/callback")){const s=Aa(i),o=s.firebaseError?yP(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Ae(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function vP(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<fP;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Ed(){return it(uf)}function Id(t){return Sr("authEvent",t.config.apiKey,t.name)}function yP(t){try{return JSON.parse(t)}catch{return null}}function wP(t){const e=Aa(t),n=e.link?decodeURIComponent(e.link):void 0,r=Aa(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Aa(i).link||i||r||n||t}function Aa(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return ui(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=500;class IP{constructor(){this._redirectPersistence=Dr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=tu,this._overrideRedirectResult=pf}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new pP(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Oe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){cP(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),_R(),await this._originValidation(e);const o=mP(e,r,i);await gP(e,o);const a=await oP(e,o,n),l=await lP(a);return uP(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aP(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Mr(),o=setTimeout(async()=>{await Vm(e),n.onEvent($m())},EP),a=async d=>{clearTimeout(o);const c=await Vm(e);let h=null;c&&(d!=null&&d.url)&&(h=_P(c,d.url)),n.onEvent(h||$m())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Mr().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(u)&&a({url:d}),typeof l=="function")try{l(d)}catch(c){console.error(c)}}}}const CP=IP;function $m(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ae("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t,e){ce(t)._logFramework(e)}var kP="@firebase/auth-compat",TP="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=1e3;function bs(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function PP(){return bs()==="http:"||bs()==="https:"}function pw(t=fe()){return!!((bs()==="file:"||bs()==="ionic:"||bs()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function NP(){return Hl()||ry()}function AP(){return sy()&&(document==null?void 0:document.documentMode)===11}function xP(t=fe()){return/Edge\/\d+/.test(t)}function OP(t=fe()){return AP()||xP(t)}function mw(){try{const t=self.localStorage,e=Oo();if(t)return t.setItem(e,"1"),t.removeItem(e),OP()?sl():!0}catch{return gf()&&sl()}return!1}function gf(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function cc(){return(PP()||iy()||pw())&&!NP()&&mw()&&!gf()}function gw(){return pw()&&typeof document<"u"}async function bP(){return gw()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},RP);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function DP(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt={LOCAL:"local",NONE:"none",SESSION:"session"},cs=I,_w="persistence";function LP(t,e){if(cs(Object.values(tt).includes(e),t,"invalid-persistence-type"),Hl()){cs(e!==tt.SESSION,t,"unsupported-persistence-type");return}if(ry()){cs(e===tt.NONE,t,"unsupported-persistence-type");return}if(gf()){cs(e===tt.NONE||e===tt.LOCAL&&sl(),t,"unsupported-persistence-type");return}cs(e===tt.NONE||mw(),t,"unsupported-persistence-type")}async function Cd(t){await t._initializationPromise;const e=vw(),n=Sr(_w,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function MP(t,e){const n=vw();if(!n)return[];const r=Sr(_w,t,e);switch(n.getItem(r)){case tt.NONE:return[Ni];case tt.LOCAL:return[ho,Dr];case tt.SESSION:return[Dr];default:return[]}}function vw(){var t;try{return((t=DP())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=I;class xn{constructor(){this.browserResolver=it(ZR),this.cordovaResolver=it(CP),this.underlyingResolver=null,this._redirectPersistence=Dr,this._completeRedirectFn=tu,this._overrideRedirectResult=pf}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return gw()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return FP(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await bP();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t){return t.unwrap()}function UP(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){return ww(t)}function WP(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new zP(t,C1(t,e))}else if(r){const i=ww(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function ww(t){const{_tokenResponse:e}=t instanceof Je?t.customData:t;if(!e)return null;if(!(t instanceof Je)&&"temporaryProof"in e&&"phoneNumber"in e)return Lr.credentialFromResult(t);const n=e.providerId;if(!n||n===us.PASSWORD)return null;let r;switch(n){case us.GOOGLE:r=Wt;break;case us.FACEBOOK:r=jt;break;case us.GITHUB:r=zt;break;case us.TWITTER:r=Bt;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Ai._create(n,a):qt._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new _i(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Je?r.credentialFromError(t):r.credentialFromResult(t)}function Ve(t,e){return e.catch(n=>{throw n instanceof Je&&WP(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:jP(n),additionalUserInfo:I1(n),user:nn.getOrCreate(i)}})}async function Sd(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ve(t,n.confirm(r))}}class zP{constructor(e,n){this.resolver=n,this.auth=UP(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ve(yw(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this._delegate=e,this.multiFactor=R1(e)}static getOrCreate(e){return nn.USER_MAP.has(e)||nn.USER_MAP.set(e,new nn(e)),nn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ve(this.auth,qy(this._delegate,e))}async linkWithPhoneNumber(e,n){return Sd(this.auth,iR(this._delegate,e,n))}async linkWithPopup(e){return Ve(this.auth,fR(this._delegate,e,xn))}async linkWithRedirect(e){return await Cd(ce(this.auth)),IR(this._delegate,e,xn)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ve(this.auth,Qy(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Sd(this.auth,sR(this._delegate,e,n))}reauthenticateWithPopup(e){return Ve(this.auth,hR(this._delegate,e,xn))}async reauthenticateWithRedirect(e){return await Cd(ce(this.auth)),wR(this._delegate,e,xn)}sendEmailVerification(e){return d1(this._delegate,e)}async unlink(e){return await JT(this._delegate,e),this}updateEmail(e){return m1(this._delegate,e)}updatePassword(e){return g1(this._delegate,e)}updatePhoneNumber(e){return oR(this._delegate,e)}updateProfile(e){return p1(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return h1(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}nn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=I;class kd{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ds(r,"invalid-api-key",{appName:e.name}),ds(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?xn:void 0;this._delegate=n.initialize({options:{persistence:BP(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(tT),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?nn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){OT(this._delegate,e,n)}applyActionCode(e){return n1(this._delegate,e)}checkActionCode(e){return Yy(this._delegate,e)}confirmPasswordReset(e,n){return t1(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ve(this._delegate,i1(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return c1(this._delegate,e)}isSignInWithEmailLink(e){return a1(this._delegate,e)}async getRedirectResult(){ds(cc(),this._delegate,"operation-not-supported-in-this-environment");const e=await SR(this._delegate,xn);return e?Ve(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){SP(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Hm(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Hm(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return o1(this._delegate,e,n)}sendPasswordResetEmail(e,n){return e1(this._delegate,e,n||void 0)}async setPersistence(e){LP(this._delegate,e);let n;switch(e){case tt.SESSION:n=Dr;break;case tt.LOCAL:n=await it(ho)._isAvailable()?ho:uf;break;case tt.NONE:n=Ni;break;default:return Oe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ve(this._delegate,YT(this._delegate))}signInWithCredential(e){return Ve(this._delegate,Jl(this._delegate,e))}signInWithCustomToken(e){return Ve(this._delegate,ZT(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ve(this._delegate,s1(this._delegate,e,n))}signInWithEmailLink(e,n){return Ve(this._delegate,l1(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Sd(this._delegate,rR(this._delegate,e,n))}async signInWithPopup(e){return ds(cc(),this._delegate,"operation-not-supported-in-this-environment"),Ve(this._delegate,dR(this._delegate,e,xn))}async signInWithRedirect(e){return ds(cc(),this._delegate,"operation-not-supported-in-this-environment"),await Cd(this._delegate),vR(this._delegate,e,xn)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r1(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}kd.Persistence=tt;function Hm(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&nn.getOrCreate(o)),error:e,complete:n}}function BP(t,e){const n=MP(t,e);if(typeof self<"u"&&!n.includes(ho)&&n.push(ho),typeof window<"u")for(const r of[uf,Dr])n.includes(r)||n.push(r);return n.includes(Ni)||n.push(Ni),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.providerId="phone",this._delegate=new Lr(yw(vn.auth()))}static credential(e,n){return Lr.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}_f.PHONE_SIGN_IN_METHOD=Lr.PHONE_SIGN_IN_METHOD;_f.PROVIDER_ID=Lr.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=I;class $P{constructor(e,n,r=vn.app()){var i;VP((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new tR(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP="auth-compat";function GP(t){t.INTERNAL.registerComponent(new bt(HP,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new kd(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Qr.EMAIL_SIGNIN,PASSWORD_RESET:Qr.PASSWORD_RESET,RECOVER_EMAIL:Qr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Qr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Qr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Qr.VERIFY_EMAIL}},EmailAuthProvider:lr,FacebookAuthProvider:jt,GithubAuthProvider:zt,GoogleAuthProvider:Wt,OAuthProvider:_i,SAMLAuthProvider:cl,PhoneAuthProvider:_f,PhoneMultiFactorGenerator:fw,RecaptchaVerifier:$P,TwitterAuthProvider:Bt,Auth:kd,AuthCredential:Gi,Error:Je}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(kP,TP)}GP(vn);const Gm="@firebase/database",Km="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ew="";function Iw(t){Ew=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:io(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return at(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new KP(e)}}catch{}return new qP},wr=Cw("localStorage"),Td=Cw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Po("@firebase/database"),Sw=function(){let t=1;return function(){return t++}}(),kw=function(t){const e=MS(t),n=new bS;n.update(e);const r=n.digest();return Hh.encodeByteArray(r)},Do=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Do.apply(null,r):typeof r=="object"?e+=ge(r):e+=r,e+=" "}return e};let Tr=null,qm=!0;const Tw=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(wi.logLevel=H.VERBOSE,Tr=wi.log.bind(wi),e&&Td.set("logging_enabled",!0)):typeof t=="function"?Tr=t:(Tr=null,Td.remove("logging_enabled"))},Se=function(...t){if(qm===!0&&(qm=!1,Tr===null&&Td.get("logging_enabled")===!0&&Tw(!0)),Tr){const e=Do.apply(null,t);Tr(e)}},Lo=function(t){return function(...e){Se(t,...e)}},Rd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Do(...t);wi.error(e)},Qt=function(...t){const e=`FIREBASE FATAL ERROR: ${Do(...t)}`;throw wi.error(e),new Error(e)},Me=function(...t){const e="FIREBASE WARNING: "+Do(...t);wi.warn(e)},QP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},YP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Zn="[MIN_NAME]",mn="[MAX_NAME]",Hr=function(t,e){if(t===e)return 0;if(t===Zn||e===mn)return-1;if(e===Zn||t===mn)return 1;{const n=Qm(t),r=Qm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},JP=function(t,e){return t===e?0:t<e?-1:1},hs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},vf=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ge(e[r]),n+=":",n+=vf(t[e[r]]);return n+="}",n},Rw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Pw=function(t){C(!nu(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},XP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ZP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function eN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const tN=new RegExp("^-?(0*)\\d{1,10}$"),nN=-2147483648,rN=2147483647,Qm=function(t){if(tN.test(t)){const e=Number(t);if(e>=nN&&e<=rN)return e}return null},qi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Me("Exception was thrown by user callback.",n),e},Math.floor(0))}},iN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ds=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Me(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Me(e)}}class Ei{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ei.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="5",Nw="v",Aw="s",xw="r",Ow="f",bw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Dw="ls",Lw="p",Pd="ac",Mw="websocket",Fw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function aN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jw(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===Mw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Fw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aN(t)&&(n.ns=t.namespace);const i=[];return Te(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(){this.counters_={}}incrementCounter(e,n=1){at(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return vS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc={},hc={};function wf(t){const e=t.toString();return dc[e]||(dc[e]=new lN),dc[e]}function uN(t,e){const n=t.toString();return hc[n]||(hc[n]=e()),hc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&qi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="start",dN="close",hN="pLPCommand",fN="pRTLPCB",Ww="id",zw="pw",Bw="ser",pN="cb",mN="seg",gN="ts",_N="d",vN="dframe",Vw=1870,$w=30,yN=Vw-$w,wN=25e3,EN=3e4;class On{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Lo(e),this.stats_=wf(n),this.urlFn=l=>(this.appCheckToken&&(l[Pd]=this.appCheckToken),jw(n,Fw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(EN)),YP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ef((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ym)this.id=a,this.password=l;else if(o===dN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ym]="t",r[Bw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[pN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Nw]=yf,this.transportSessionId&&(r[Aw]=this.transportSessionId),this.lastSessionId&&(r[Dw]=this.lastSessionId),this.applicationId&&(r[Lw]=this.applicationId),this.appCheckToken&&(r[Pd]=this.appCheckToken),typeof location<"u"&&location.hostname&&bw.test(location.hostname)&&(r[xw]=Ow);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){On.forceAllow_=!0}static forceDisallow(){On.forceDisallow_=!0}static isAvailable(){return On.forceAllow_?!0:!On.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!XP()&&!ZP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ty(n),i=Rw(r,yN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[vN]="t",r[Ww]=e,r[zw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ef{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Sw(),window[hN+this.uniqueCallbackIdentifier]=e,window[fN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ef.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Se("frame writing exception"),a.stack&&Se(a.stack),Se(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ww]=this.myID,e[zw]=this.myPW,e[Bw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$w+r.length<=Vw;){const o=this.pendingSegs.shift();r=r+"&"+mN+i+"="+o.seg+"&"+gN+i+"="+o.ts+"&"+_N+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(wN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=16384,CN=45e3;let pl=null;typeof MozWebSocket<"u"?pl=MozWebSocket:typeof WebSocket<"u"&&(pl=WebSocket);class ft{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Lo(this.connId),this.stats_=wf(n),this.connURL=ft.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Nw]=yf,typeof location<"u"&&location.hostname&&bw.test(location.hostname)&&(o[xw]=Ow),n&&(o[Aw]=n),r&&(o[Dw]=r),i&&(o[Pd]=i),s&&(o[Lw]=s),jw(e,Mw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wr.set("previous_websocket_failure",!0);try{let r;oy(),this.mySock=new pl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&pl!==null&&!ft.forceDisallow_}static previouslyFailed(){return wr.isInMemoryStorage||wr.get("previous_websocket_failure")===!0}markConnectionHealthy(){wr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=io(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Rw(n,IN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(CN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ft.responsesRequiredToBeHealthy=2;ft.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[On,ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ft&&ft.isAvailable();let r=n&&!ft.previouslyFailed();if(e.webSocketOnly&&(n||Me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ft];else{const i=this.transports_=[];for(const s of xi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);xi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=6e4,kN=5e3,TN=10*1024,RN=100*1024,fc="t",Jm="d",PN="s",Xm="r",NN="e",Zm="o",eg="a",tg="n",ng="p",AN="h";class xN{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Lo("c:"+this.id+":"),this.transportManager_=new xi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ds(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>RN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fc in e){const n=e[fc];n===eg?this.upgradeIfSecondaryHealthy_():n===Xm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=hs("t",e),r=hs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ng,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:eg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=hs("t",e),r=hs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=hs(fc,e);if(Jm in e){const r=e[Jm];if(n===AN){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===tg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===PN?this.onConnectionShutdown_(r):n===Xm?this.onReset_(r):n===NN?Rd("Server Error: "+r):n===Zm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),yf!==r&&Me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ds(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(SN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ds(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ng,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends Gw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ml}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=32,ig=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new $("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function er(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function If(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ON(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Kw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function te(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return je(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function bN(t,e){const n=fo(t,0),r=fo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Hr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Cf(t,e){if(er(t)!==er(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function mt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(er(t)>er(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class DN{constructor(e,n){this.errorPrefix_=n,this.parts_=fo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Gl(this.parts_[r]);qw(this)}}function LN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Gl(e),qw(t)}function MN(t){const e=t.parts_.pop();t.byteLength_-=Gl(e),t.parts_.length>0&&(t.byteLength_-=1)}function qw(t){if(t.byteLength_>ig)throw new Error(t.errorPrefix_+"has a key path longer than "+ig+" bytes ("+t.byteLength_+").");if(t.parts_.length>rg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rg+") or object contains a cycle "+mr(t))}function mr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends Gw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Sf}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=1e3,FN=60*5*1e3,sg=30*1e3,UN=1.3,jN=3e4,WN="server_kill",og=3;class ln extends Hw{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ln.nextPersistentConnectionId_++,this.log_=Lo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fs,this.maxReconnectDelay_=FN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!oy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ml.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ge(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new He,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;ln.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&at(e,"w")){const r=Or(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||OS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=xS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Rd("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jN&&(this.reconnectDelay_=fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*UN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ln.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,a=new xN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Me(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(WN)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Me(c),l())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ol(this.interruptReasons_)&&(this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>vf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=og&&(this.reconnectDelay_=sg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=og&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ew.replace(/\./g,"-")]=1,Kh()?e["framework.cordova"]=1:Hl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ml.getInstance().currentlyOnline();return ol(this.interruptReasons_)&&e}}ln.nextPersistentConnectionId_=0;ln.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(Zn,e),i=new j(Zn,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha;class Qw extends ru{static get __EMPTY_NODE(){return ha}static set __EMPTY_NODE(e){ha=e}compare(e,n){return Hr(e.name,n.name)}isDefinedOn(e){throw Vi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(mn,ha)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,ha)}toString(){return".key"}}const Kt=new Qw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ce.RED,this.left=i??Ke.EMPTY_NODE,this.right=s??Ke.EMPTY_NODE}copy(e,n,r,i,s){return new Ce(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class zN{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new fa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new fa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new fa(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new zN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t,e){return Hr(t.name,e.name)}function kf(t,e){return Hr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nd;function VN(t){Nd=t}const Yw=function(t){return typeof t=="number"?"number:"+Pw(t):"string:"+t},Jw=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&at(e,".sv"),"Priority must be a string or number.")}else C(t===Nd||t.isEmpty(),"priority of unexpected type.");C(t===Nd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ag;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jw(this.priorityNode_)}static set __childrenNodeConstructor(e){ag=e}static get __childrenNodeConstructor(){return ag}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:M(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Pw(this.value_):e+=this.value_,this.lazyHash_=kw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),s=we.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xw,Zw;function $N(t){Xw=t}function HN(t){Zw=t}class GN extends ru{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Hr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(mn,new we("[PRIORITY-POST]",Zw))}makePost(e,n){const r=Xw(e);return new j(n,new we("[PRIORITY-POST]",r))}toString(){return".priority"}}const Y=new GN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=Math.log(2);class qN{constructor(e){const n=s=>parseInt(Math.log(s)/KN,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gl=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,h;if(d===0)return null;if(d===1)return c=t[l],h=n?n(c):c,new Ce(h,c.node,Ce.BLACK,null,null);{const g=parseInt(d/2,10)+l,_=i(l,g),v=i(g+1,u);return c=t[g],h=n?n(c):c,new Ce(h,c.node,Ce.BLACK,_,v)}},s=function(l){let u=null,d=null,c=t.length;const h=function(_,v){const k=c-_,p=c;c-=_;const f=i(k+1,p),m=t[k],w=n?n(m):m;g(new Ce(w,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),k=Math.pow(2,l.count-(_+1));v?h(k,Ce.BLACK):(h(k,Ce.BLACK),h(k,Ce.RED))}return d},o=new qN(t.length),a=s(o);return new Ke(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc;const Yr={};class rn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Yr&&Y,"ChildrenNode.ts has not been loaded"),pc=pc||new rn({".priority":Yr},{".priority":Y}),pc}get(e){const n=Or(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return at(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Kt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=gl(r,e.getCompare()):a=Yr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new rn(d,u)}addToIndexes(e,n){const r=al(this.indexes_,(i,s)=>{const o=Or(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===Yr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),gl(a,o.getCompare())}else return Yr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new rn(r,this.indexSet_)}removeFromIndexes(e,n){const r=al(this.indexes_,i=>{if(i===Yr)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new rn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Jw(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ps||(ps=new O(new Ke(kf),null,rn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ps}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ps:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ps:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{C(M(e)!==".priority"||er(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Y,(o,a)=>{n[o]=a.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yw(this.getPriority().val())+":"),this.forEachChild(Y,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":kw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mo?-1:0}withIndex(e){if(e===Kt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Kt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Y),i=n.getIterator(Y);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Kt?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QN extends O{constructor(){super(new Ke(kf),O.EMPTY_NODE,rn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const Mo=new QN;Object.defineProperties(j,{MIN:{value:new j(Zn,O.EMPTY_NODE)},MAX:{value:new j(mn,Mo)}});Qw.__EMPTY_NODE=O.EMPTY_NODE;we.__childrenNodeConstructor=O;VN(Mo);HN(Mo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=!0;function re(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,re(e))}if(!(t instanceof Array)&&YN){const n=[];let r=!1;if(Te(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=re(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return O.EMPTY_NODE;const s=gl(n,BN,o=>o.name,kf);if(r){const o=gl(n,Y.getCompare());return new O(s,re(e),new rn({".priority":o},{".priority":Y}))}else return new O(s,re(e),rn.Default)}else{let n=O.EMPTY_NODE;return Te(t,(r,i)=>{if(at(t,r)&&r.substring(0,1)!=="."){const s=re(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(re(e))}}$N(re);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends ru{constructor(e){super(),this.indexPath_=e,C(!F(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Hr(e.name,n.name):s}makePost(e,n){const r=re(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,Mo);return new j(mn,e)}toString(){return fo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN extends ru{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Hr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=re(e);return new j(n,r)}toString(){return".value"}}const Rf=new JN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t){return{type:"value",snapshotNode:t}}function Oi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function po(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function mo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function XN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(po(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Oi(n,r)):o.trackChildChange(mo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Y,(i,s)=>{n.hasChild(i)||r.trackChildChange(po(i,s))}),n.isLeafNode()||n.forEachChild(Y,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(mo(i,s,o))}else r.trackChildChange(Oi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.indexedFilter_=new Pf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=go.getStartPost_(e),this.endPost_=go.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(Y,(o,a)=>{s.matches(new j(o,a))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new go(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new j(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(mo(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(po(n,c));const v=a.updateImmediateChild(n,O.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Oi(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(po(u.name,u.node)),s.trackChildChange(Oi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Y}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zn}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Y}copy(){const e=new iu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function eA(t){return t.loadsAllData()?new Pf(t.getIndex()):t.hasLimit()?new ZN(t):new go(t)}function tA(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function nA(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Ad(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function rA(t,e,n){let r;return t.index_===Kt||n?r=Ad(t,e,n):r=Ad(t,e,mn),r.startAfterSet_=!0,r}function xd(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function iA(t,e,n){let r;return t.index_===Kt||n?r=xd(t,e,n):r=xd(t,e,Zn),r.endBeforeSet_=!0,r}function su(t,e){const n=t.copy();return n.index_=e,n}function lg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Y?n="$priority":t.index_===Rf?n="$value":t.index_===Kt?n="$key":(C(t.index_ instanceof Tf,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ge(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ge(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ge(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ug(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Y&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends Hw{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Lo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=_l.getListenId_(e,r),a={};this.listens_[o]=a;const l=lg(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Or(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=_l.getListenId_(e,n);delete this.listens_[r]}get(e){const n=lg(e._queryParams),r=e._path.toString(),i=new He;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=io(a.responseText)}catch{Me("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Me("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){return{value:null,children:new Map}}function Qi(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,vl());const i=t.children.get(r);e=K(e),Qi(i,e,n)}}function Od(t,e){if(F(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Y,(r,i)=>{Qi(t,new $(r),i)}),Od(t,e)}}else if(t.children.size>0){const n=M(e);return e=K(e),t.children.has(n)&&Od(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function bd(t,e,n){t.value!==null?n(e,t.value):oA(t,(r,i)=>{const s=new $(e.toString()+"/"+r);bd(i,s,n)})}function oA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=10*1e3,lA=30*1e3,uA=5*60*1e3;class cA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new aA(e);const r=cg+(lA-cg)*Math.random();Ds(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Te(e,(i,s)=>{s>0&&at(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ds(this.reportStats_.bind(this),Math.floor(Math.random()*2*uA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function Nf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Af(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Pt.ACK_USER_WRITE,this.source=Nf()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new yl(V(),n,this.revert)}}else return C(M(this.path)===e,"operationForChild called for unrelated child."),new yl(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.source=e,this.path=n,this.type=Pt.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new _o(this.source,V()):new _o(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Pt.OVERWRITE}operationForChild(e){return F(this.path)?new Fr(this.source,V(),this.snap.getImmediateChild(e)):new Fr(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Pt.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new Fr(this.source,V(),n.value):new bi(this.source,V(),n)}else return C(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bi(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hA(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(XN(o.childName,o.snapshotNode))}),ms(t,i,"child_removed",e,r,n),ms(t,i,"child_added",e,r,n),ms(t,i,"child_moved",s,r,n),ms(t,i,"child_changed",e,r,n),ms(t,i,"value",e,r,n),i}function ms(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>pA(t,a,l)),o.forEach(a=>{const l=fA(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function fA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function pA(t,e,n){if(e.childName==null||n.childName==null)throw Vi("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t,e){return{eventCache:t,serverCache:e}}function Ls(t,e,n,r){return ou(new tr(e,n,r),t.serverCache)}function t0(t,e,n,r){return ou(t.eventCache,new tr(e,n,r))}function wl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ur(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc;const mA=()=>(mc||(mc=new Ke(JP)),mc);class q{constructor(e,n=mA()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return Te(e,(r,i)=>{n=n.set(new $(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(F(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:te(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new q(null)}}set(e,n){if(F(e))return new q(n,this.children);{const r=M(e),s=(this.children.get(r)||new q(null)).set(K(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(F(e))return n;{const r=M(e),s=(this.children.get(r)||new q(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(te(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(K(e),te(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),te(n,i),r):new q(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(te(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.writeTree_=e}static empty(){return new xt(new q(null))}}function Ms(t,e,n){if(F(e))return new xt(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=je(i,e);return s=s.updateChild(o,n),new xt(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new xt(s)}}}function Dd(t,e,n){let r=t;return Te(n,(i,s)=>{r=Ms(r,te(e,i),s)}),r}function dg(t,e){if(F(e))return xt.empty();{const n=t.writeTree_.setTree(e,new q(null));return new xt(n)}}function Ld(t,e){return Gr(t,e)!=null}function Gr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function hg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Y,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function $n(t,e){if(F(e))return t;{const n=Gr(t,e);return n!=null?new xt(new q(n)):new xt(t.writeTree_.subtree(e))}}function Md(t){return t.writeTree_.isEmpty()}function Di(t,e){return n0(V(),t.writeTree_,e)}function n0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=n0(te(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(te(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e){return o0(e,t)}function gA(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ms(t.visibleWrites,e,n)),t.lastWriteId=r}function _A(t,e,n,r){C(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Dd(t.visibleWrites,e,n),t.lastWriteId=r}function vA(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function yA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&wA(a,r.path)?i=!1:mt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return EA(t),!0;if(r.snap)t.visibleWrites=dg(t.visibleWrites,r.path);else{const a=r.children;Te(a,l=>{t.visibleWrites=dg(t.visibleWrites,te(r.path,l))})}return!0}else return!1}function wA(t,e){if(t.snap)return mt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&mt(te(t.path,n),e))return!0;return!1}function EA(t){t.visibleWrites=r0(t.allWrites,IA,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function IA(t){return t.visible}function r0(t,e,n){let r=xt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)mt(n,o)?(a=je(n,o),r=Ms(r,a,s.snap)):mt(o,n)&&(a=je(o,n),r=Ms(r,V(),s.snap.getChild(a)));else if(s.children){if(mt(n,o))a=je(n,o),r=Dd(r,a,s.children);else if(mt(o,n))if(a=je(o,n),F(a))r=Dd(r,V(),s.children);else{const l=Or(s.children,M(a));if(l){const u=l.getChild(K(a));r=Ms(r,V(),u)}}}else throw Vi("WriteRecord should have .snap or .children")}}return r}function i0(t,e,n,r,i){if(!r&&!i){const s=Gr(t.visibleWrites,e);if(s!=null)return s;{const o=$n(t.visibleWrites,e);if(Md(o))return n;if(n==null&&!Ld(o,V()))return null;{const a=n||O.EMPTY_NODE;return Di(o,a)}}}else{const s=$n(t.visibleWrites,e);if(!i&&Md(s))return n;if(!i&&n==null&&!Ld(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(mt(u.path,e)||mt(e,u.path))},a=r0(t.allWrites,o,e),l=n||O.EMPTY_NODE;return Di(a,l)}}}function CA(t,e,n){let r=O.EMPTY_NODE;const i=Gr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Y,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=$n(t.visibleWrites,e);return n.forEachChild(Y,(o,a)=>{const l=Di($n(s,new $(o)),a);r=r.updateImmediateChild(o,l)}),hg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=$n(t.visibleWrites,e);return hg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function SA(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=te(e,n);if(Ld(t.visibleWrites,s))return null;{const o=$n(t.visibleWrites,s);return Md(o)?i.getChild(n):Di(o,i.getChild(n))}}function kA(t,e,n,r){const i=te(e,n),s=Gr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=$n(t.visibleWrites,i);return Di(o,r.getNode().getImmediateChild(n))}else return null}function TA(t,e){return Gr(t.visibleWrites,e)}function RA(t,e,n,r,i,s,o){let a;const l=$n(t.visibleWrites,e),u=Gr(l,V());if(u!=null)a=u;else if(n!=null)a=Di(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function PA(){return{visibleWrites:xt.empty(),allWrites:[],lastWriteId:-1}}function El(t,e,n,r){return i0(t.writeTree,t.treePath,e,n,r)}function Of(t,e){return CA(t.writeTree,t.treePath,e)}function fg(t,e,n,r){return SA(t.writeTree,t.treePath,e,n,r)}function Il(t,e){return TA(t.writeTree,te(t.treePath,e))}function NA(t,e,n,r,i,s){return RA(t.writeTree,t.treePath,e,n,r,i,s)}function bf(t,e,n){return kA(t.writeTree,t.treePath,e,n)}function s0(t,e){return o0(te(t.treePath,e),t.writeTree)}function o0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,mo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,po(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Oi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,mo(r,e.snapshotNode,i.oldSnap));else throw Vi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const a0=new xA;class Df{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ur(this.viewCache_),s=NA(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t){return{filter:t}}function bA(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function DA(t,e,n,r,i){const s=new AA;let o,a;if(n.type===Pt.OVERWRITE){const u=n;u.source.fromUser?o=Fd(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!F(u.path),o=Cl(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Pt.MERGE){const u=n;u.source.fromUser?o=MA(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Ud(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Pt.ACK_USER_WRITE){const u=n;u.revert?o=jA(t,e,u.path,r,i,s):o=FA(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Pt.LISTEN_COMPLETE)o=UA(t,e,n.path,r,s);else throw Vi("Unknown operation type: "+n.type);const l=s.getChanges();return LA(e,o,l),{viewCache:o,changes:l}}function LA(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=wl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(e0(wl(e)))}}function l0(t,e,n,r,i,s){const o=e.eventCache;if(Il(r,n)!=null)return e;{let a,l;if(F(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ur(e),d=u instanceof O?u:O.EMPTY_NODE,c=Of(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=El(r,Ur(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){C(er(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=fg(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=K(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=fg(r,n,o.getNode(),l);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=bf(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return Ls(e,a,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function Cl(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(F(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),g,null)}else{const g=M(n);if(!l.isCompleteForPath(n)&&er(n)>1)return e;const _=K(n),k=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(l.getNode(),k):u=d.updateChild(l.getNode(),g,k,_,a0,null)}const c=t0(e,u,l.isFullyInitialized()||F(n),d.filtersNodes()),h=new Df(i,c,s);return l0(t,c,n,i,h,a)}function Fd(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new Df(i,e,s);if(F(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ls(e,u,!0,t.filter.filtersNodes());else{const c=M(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ls(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=K(n),g=a.getNode().getImmediateChild(c);let _;if(F(h))_=r;else{const v=d.getCompleteChild(c);v!=null?If(h)===".priority"&&v.getChild(Kw(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=O.EMPTY_NODE}if(g.equals(_))l=e;else{const v=t.filter.updateChild(a.getNode(),c,_,h,d,o);l=Ls(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function pg(t,e){return t.eventCache.isCompleteForChild(e)}function MA(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=te(n,l);pg(e,M(d))&&(a=Fd(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=te(n,l);pg(e,M(d))||(a=Fd(t,a,d,u,i,s,o))}),a}function mg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ud(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;F(n)?u=r:u=new q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=mg(t,g,h);l=Cl(t,l,new $(c),_,i,s,o,a)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=mg(t,_,h);l=Cl(t,l,new $(c),v,i,s,o,a)}}),l}function FA(t,e,n,r,i,s,o){if(Il(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(F(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Cl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(F(n)){let u=new q(null);return l.getNode().forEachChild(Kt,(d,c)=>{u=u.set(new $(d),c)}),Ud(t,e,n,u,i,s,a,o)}else return e}else{let u=new q(null);return r.foreach((d,c)=>{const h=te(n,d);l.isCompleteForPath(h)&&(u=u.set(d,l.getNode().getChild(h)))}),Ud(t,e,n,u,i,s,a,o)}}function UA(t,e,n,r,i){const s=e.serverCache,o=t0(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return l0(t,o,n,r,a0,i)}function jA(t,e,n,r,i,s){let o;if(Il(r,n)!=null)return e;{const a=new Df(r,e,i),l=e.eventCache.getNode();let u;if(F(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=El(r,Ur(e));else{const c=e.serverCache.getNode();C(c instanceof O,"serverChildren would be complete if leaf node"),d=Of(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=M(n);let c=bf(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,K(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,O.EMPTY_NODE,K(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=El(r,Ur(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Il(r,V())!=null,Ls(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Pf(r.getIndex()),s=eA(r);this.processor_=OA(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,a.getNode(),null),d=new tr(l,o.isFullyInitialized(),i.filtersNodes()),c=new tr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ou(c,d),this.eventGenerator_=new dA(this.query_)}get query(){return this.query_}}function zA(t){return t.viewCache_.serverCache.getNode()}function BA(t){return wl(t.viewCache_)}function VA(t,e){const n=Ur(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function gg(t){return t.eventRegistrations_.length===0}function $A(t,e){t.eventRegistrations_.push(e)}function _g(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function vg(t,e,n,r){e.type===Pt.MERGE&&e.source.queryId!==null&&(C(Ur(t.viewCache_),"We should always have a full cache before handling merges"),C(wl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=DA(t.processor_,i,e,n,r);return bA(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,u0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function HA(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Y,(s,o)=>{r.push(Oi(s,o))}),n.isFullyInitialized()&&r.push(e0(n.getNode())),u0(t,r,n.getNode(),e)}function u0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return hA(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl;class c0{constructor(){this.views=new Map}}function GA(t){C(!Sl,"__referenceConstructor has already been defined"),Sl=t}function KA(){return C(Sl,"Reference.ts has not been loaded"),Sl}function qA(t){return t.views.size===0}function Lf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),vg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(vg(o,e,n,r));return s}}function d0(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=El(n,i?r:null),l=!1;a?l=!0:r instanceof O?(a=Of(n,r),l=!1):(a=O.EMPTY_NODE,l=!1);const u=ou(new tr(a,l,!1),new tr(r,i,!1));return new WA(e,u)}return o}function QA(t,e,n,r,i,s){const o=d0(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),$A(o,n),HA(o,n)}function YA(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=nr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(_g(u,n,r)),gg(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(_g(l,n,r)),gg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!nr(t)&&s.push(new(KA())(e._repo,e._path)),{removed:s,events:o}}function h0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Hn(t,e){let n=null;for(const r of t.views.values())n=n||VA(r,e);return n}function f0(t,e){if(e._queryParams.loadsAllData())return lu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function p0(t,e){return f0(t,e)!=null}function nr(t){return lu(t)!=null}function lu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl;function JA(t){C(!kl,"__referenceConstructor has already been defined"),kl=t}function XA(){return C(kl,"Reference.ts has not been loaded"),kl}let ZA=1;class yg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=PA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Mf(t,e,n,r,i){return gA(t.pendingWriteTree_,e,n,r,i),i?Yi(t,new Fr(Nf(),e,n)):[]}function ex(t,e,n,r){_A(t.pendingWriteTree_,e,n,r);const i=q.fromObject(n);return Yi(t,new bi(Nf(),e,i))}function bn(t,e,n=!1){const r=vA(t.pendingWriteTree_,e);if(yA(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(V(),!0):Te(r.children,o=>{s=s.set(new $(o),!0)}),Yi(t,new yl(r.path,s,n))}else return[]}function Fo(t,e,n){return Yi(t,new Fr(Af(),e,n))}function tx(t,e,n){const r=q.fromObject(n);return Yi(t,new bi(Af(),e,r))}function nx(t,e){return Yi(t,new _o(Af(),e))}function rx(t,e,n){const r=Ff(t,n);if(r){const i=Uf(r),s=i.path,o=i.queryId,a=je(s,e),l=new _o(xf(o),a);return jf(t,s,l)}else return[]}function Tl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||p0(o,e))){const l=YA(o,e,n,r);qA(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>nr(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=ox(h);for(let _=0;_<g.length;++_){const v=g[_],k=v.query,p=v0(t,v);t.listenProvider_.startListening(Fs(k),vo(t,k),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Fs(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(cu(h));t.listenProvider_.stopListening(Fs(h),g)}))}ax(t,u)}return a}function m0(t,e,n,r){const i=Ff(t,r);if(i!=null){const s=Uf(i),o=s.path,a=s.queryId,l=je(o,e),u=new Fr(xf(a),l,n);return jf(t,o,u)}else return[]}function ix(t,e,n,r){const i=Ff(t,r);if(i){const s=Uf(i),o=s.path,a=s.queryId,l=je(o,e),u=q.fromObject(n),d=new bi(xf(a),l,u);return jf(t,o,d)}else return[]}function jd(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=je(h,i);s=s||Hn(g,_),o=o||nr(g)});let a=t.syncPointTree_.get(i);a?(o=o||nr(a),s=s||Hn(a,V())):(a=new c0,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=Hn(_,V());v&&(s=s.updateImmediateChild(g,v))}));const u=p0(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=cu(e);C(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=lx();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=au(t.pendingWriteTree_,i);let c=QA(a,e,n,d,s,l);if(!u&&!o&&!r){const h=f0(a,e);c=c.concat(ux(t,e,h))}return c}function uu(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=je(o,e),u=Hn(a,l);if(u)return u});return i0(i,e,s,n,!0)}function sx(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=je(u,n);r=r||Hn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||Hn(i,V()):(i=new c0,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new tr(r,!0,!1):null,a=au(t.pendingWriteTree_,e._path),l=d0(i,e,a,s?o.getNode():O.EMPTY_NODE,s);return BA(l)}function Yi(t,e){return g0(e,t.syncPointTree_,null,au(t.pendingWriteTree_,V()))}function g0(t,e,n,r){if(F(t.path))return _0(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=Hn(i,V()));let s=[];const o=M(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=s0(r,o);s=s.concat(g0(a,l,u,d))}return i&&(s=s.concat(Lf(i,t,r,n))),s}}function _0(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=Hn(i,V()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=s0(r,o),d=t.operationForChild(o);d&&(s=s.concat(_0(d,a,l,u)))}),i&&(s=s.concat(Lf(i,t,r,n))),s}function v0(t,e){const n=e.query,r=vo(t,n);return{hashFn:()=>(zA(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?rx(t,n._path,r):nx(t,n._path);{const s=eN(i,n);return Tl(t,n,null,s)}}}}function vo(t,e){const n=cu(e);return t.queryToTagMap.get(n)}function cu(t){return t._path.toString()+"$"+t._queryIdentifier}function Ff(t,e){return t.tagToQueryMap.get(e)}function Uf(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function jf(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=au(t.pendingWriteTree_,e);return Lf(r,n,i,null)}function ox(t){return t.fold((e,n,r)=>{if(n&&nr(n))return[lu(n)];{let i=[];return n&&(i=h0(n)),Te(r,(s,o)=>{i=i.concat(o)}),i}})}function Fs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(XA())(t._repo,t._path):t}function ax(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=cu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function lx(){return ZA++}function ux(t,e,n){const r=e._path,i=vo(t,e),s=v0(t,n),o=t.listenProvider_.startListening(Fs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)C(!nr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!F(u)&&d&&nr(d))return[lu(d).query];{let h=[];return d&&(h=h.concat(h0(d).map(g=>g.query))),Te(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Fs(d),vo(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wf(n)}node(){return this.node_}}class zf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=te(this.path_,e);return new zf(this.syncTree_,n)}node(){return uu(this.syncTree_,this.path_)}}const cx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wg=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return dx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return hx(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},dx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},hx=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},y0=function(t,e,n,r){return Vf(e,new zf(n,t),r)},Bf=function(t,e,n){return Vf(t,new Wf(e),n)};function Vf(t,e,n){const r=t.getPriority().val(),i=wg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=wg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new we(a,re(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new we(i))),o.forEachChild(Y,(a,l)=>{const u=Vf(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function du(t,e){let n=e instanceof $?e:new $(e),r=t,i=M(n);for(;i!==null;){const s=Or(r.node.children,i)||{children:{},childCount:0};r=new $f(i,r,s),n=K(n),i=M(n)}return r}function Kr(t){return t.node.value}function Hf(t,e){t.node.value=e,Wd(t)}function w0(t){return t.node.childCount>0}function fx(t){return Kr(t)===void 0&&!w0(t)}function hu(t,e){Te(t.node.children,(n,r)=>{e(new $f(n,t,r))})}function E0(t,e,n,r){n&&!r&&e(t),hu(t,i=>{E0(i,e,!0,r)}),n&&r&&e(t)}function px(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Uo(t){return new $(t.parent===null?t.name:Uo(t.parent)+"/"+t.name)}function Wd(t){t.parent!==null&&mx(t.parent,t.name,t)}function mx(t,e,n){const r=fx(n),i=at(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Wd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Wd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=/[\[\].#$\/\u0000-\u001F\u007F]/,_x=/[\[\].#$\u0000-\u001F\u007F]/,gc=10*1024*1024,fu=function(t){return typeof t=="string"&&t.length!==0&&!gx.test(t)},I0=function(t){return typeof t=="string"&&t.length!==0&&!_x.test(t)},vx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),I0(t)},yo=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!nu(t)||t&&typeof t=="object"&&at(t,".sv")},Yt=function(t,e,n,r){r&&e===void 0||jo(Xe(t,"value"),e,n)},jo=function(t,e,n){const r=n instanceof $?new DN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+mr(r));if(typeof e=="function")throw new Error(t+"contains a function "+mr(r)+" with contents = "+e.toString());if(nu(e))throw new Error(t+"contains "+e.toString()+" "+mr(r));if(typeof e=="string"&&e.length>gc/3&&Gl(e)>gc)throw new Error(t+"contains a string greater than "+gc+" utf8 bytes "+mr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Te(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!fu(o)))throw new Error(t+" contains an invalid key ("+o+") "+mr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LN(r,o),jo(t,a,r),MN(r)}),i&&s)throw new Error(t+' contains ".value" child '+mr(r)+" in addition to actual children.")}},yx=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=fo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!fu(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(bN);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&mt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},C0=function(t,e,n,r){if(r&&e===void 0)return;const i=Xe(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Te(e,(o,a)=>{const l=new $(o);if(jo(i,a,te(n,l)),If(l)===".priority"&&!yo(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),yx(i,s)},Gf=function(t,e,n){if(!(n&&e===void 0)){if(nu(e))throw new Error(Xe(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!yo(e))throw new Error(Xe(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Wo=function(t,e,n,r){if(!(r&&n===void 0)&&!fu(n))throw new Error(Xe(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},wo=function(t,e,n,r){if(!(r&&n===void 0)&&!I0(n))throw new Error(Xe(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wx=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),wo(t,e,n,r)},gt=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},S0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!vx(n))throw new Error(Xe(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Cf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function k0(t,e,n){pu(t,n),T0(t,r=>Cf(r,e))}function lt(t,e,n){pu(t,n),T0(t,r=>mt(r,e)||mt(e,r))}function T0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Ix(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ix(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Tr&&Se("event: "+n.toString()),qi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="repo_interrupt",Cx=25;class Sx{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ex,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vl(),this.transactionQueueTree_=new $f,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kx(t,e,n){if(t.stats_=wf(t.repoInfo_),t.forceRestClient_||iN())t.server_=new _l(t.repoInfo_,(r,i,s,o)=>{Eg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ig(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new ln(t.repoInfo_,e,(r,i,s,o)=>{Eg(t,r,i,s,o)},r=>{Ig(t,r)},r=>{Tx(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=uN(t.repoInfo_,()=>new cA(t.stats_,t.server_)),t.infoData_=new sA,t.infoSyncTree_=new yg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Fo(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Kf(t,"connected",!1),t.serverSyncTree_=new yg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);lt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function P0(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zo(t){return cx({timestamp:P0(t)})}function Eg(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=al(n,u=>re(u));o=ix(t.serverSyncTree_,s,l,i)}else{const l=re(n);o=m0(t.serverSyncTree_,s,l,i)}else if(r){const l=al(n,u=>re(u));o=tx(t.serverSyncTree_,s,l)}else{const l=re(n);o=Fo(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Li(t,s)),lt(t.eventQueue_,a,o)}function Ig(t,e){Kf(t,"connected",e),e===!1&&Nx(t)}function Tx(t,e){Te(e,(n,r)=>{Kf(t,n,r)})}function Kf(t,e,n){const r=new $("/.info/"+e),i=re(n);t.infoData_.updateSnapshot(r,i);const s=Fo(t.infoSyncTree_,r,i);lt(t.eventQueue_,r,s)}function mu(t){return t.nextWriteId_++}function Rx(t,e,n){const r=sx(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=re(i).withIndex(e._queryParams.getIndex());jd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Fo(t.serverSyncTree_,e._path,s);else{const a=vo(t.serverSyncTree_,e);o=m0(t.serverSyncTree_,e._path,s,a)}return lt(t.eventQueue_,e._path,o),Tl(t.serverSyncTree_,e,n,null,!0),s},i=>(Ji(t,"get for query "+ge(e)+" failed: "+i),Promise.reject(new Error(i))))}function qf(t,e,n,r,i){Ji(t,"set",{path:e.toString(),value:n,priority:r});const s=zo(t),o=re(n,r),a=uu(t.serverSyncTree_,e),l=Bf(o,a,s),u=mu(t),d=Mf(t.serverSyncTree_,e,l,u,!0);pu(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||Me("set at "+e+" failed: "+h);const v=bn(t.serverSyncTree_,u,!_);lt(t.eventQueue_,e,v),rr(t,i,h,g)});const c=Yf(t,e);Li(t,c),lt(t.eventQueue_,c,[])}function Px(t,e,n,r){Ji(t,"update",{path:e.toString(),value:n});let i=!0;const s=zo(t),o={};if(Te(n,(a,l)=>{i=!1,o[a]=y0(te(e,a),re(l),t.serverSyncTree_,s)}),i)Se("update() called with empty data.  Don't do anything."),rr(t,r,"ok",void 0);else{const a=mu(t),l=ex(t.serverSyncTree_,e,o,a);pu(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||Me("update at "+e+" failed: "+u);const h=bn(t.serverSyncTree_,a,!c),g=h.length>0?Li(t,e):e;lt(t.eventQueue_,g,h),rr(t,r,u,d)}),Te(n,u=>{const d=Yf(t,te(e,u));Li(t,d)}),lt(t.eventQueue_,e,[])}}function Nx(t){Ji(t,"onDisconnectEvents");const e=zo(t),n=vl();bd(t.onDisconnect_,V(),(i,s)=>{const o=y0(i,s,t.serverSyncTree_,e);Qi(n,i,o)});let r=[];bd(n,V(),(i,s)=>{r=r.concat(Fo(t.serverSyncTree_,i,s));const o=Yf(t,i);Li(t,o)}),t.onDisconnect_=vl(),lt(t.eventQueue_,V(),r)}function Ax(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Od(t.onDisconnect_,e),rr(t,n,r,i)})}function Cg(t,e,n,r){const i=re(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Qi(t.onDisconnect_,e,i),rr(t,r,s,o)})}function xx(t,e,n,r,i){const s=re(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Qi(t.onDisconnect_,e,s),rr(t,i,o,a)})}function Ox(t,e,n,r){if(ol(n)){Se("onDisconnect().update() called with empty data.  Don't do anything."),rr(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Te(n,(o,a)=>{const l=re(a);Qi(t.onDisconnect_,te(e,o),l)}),rr(t,r,i,s)})}function bx(t,e,n){let r;M(e._path)===".info"?r=jd(t.infoSyncTree_,e,n):r=jd(t.serverSyncTree_,e,n),k0(t.eventQueue_,e._path,r)}function zd(t,e,n){let r;M(e._path)===".info"?r=Tl(t.infoSyncTree_,e,n):r=Tl(t.serverSyncTree_,e,n),k0(t.eventQueue_,e._path,r)}function N0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(R0)}function Dx(t){t.persistentConnection_&&t.persistentConnection_.resume(R0)}function Ji(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function rr(t,e,n,r){e&&qi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Lx(t,e,n,r,i,s){Ji(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:Sw(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Qf(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{jo("transaction failed: Data returned ",l,o.path),o.status=0;const u=du(t.transactionQueueTree_,e),d=Kr(u)||[];d.push(o),Hf(u,d);let c;typeof l=="object"&&l!==null&&at(l,".priority")?(c=Or(l,".priority"),C(yo(c),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):c=(uu(t.serverSyncTree_,e)||O.EMPTY_NODE).getPriority().val();const h=zo(t),g=re(l,c),_=Bf(g,a,h);o.currentOutputSnapshotRaw=g,o.currentOutputSnapshotResolved=_,o.currentWriteId=mu(t);const v=Mf(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);lt(t.eventQueue_,e,v),gu(t,t.transactionQueueTree_)}}function Qf(t,e,n){return uu(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function gu(t,e=t.transactionQueueTree_){if(e||_u(t,e),Kr(e)){const n=x0(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Mx(t,Uo(e),n)}else w0(e)&&hu(e,n=>{gu(t,n)})}function Mx(t,e,n){const r=n.map(u=>u.currentWriteId),i=Qf(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];C(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=je(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ji(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(bn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();_u(t,du(t.transactionQueueTree_,e)),gu(t,t.transactionQueueTree_),lt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)qi(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Me("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Li(t,e)}},o)}function Li(t,e){const n=A0(t,e),r=Uo(n),i=x0(t,n);return Fx(t,i,r),r}function Fx(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=je(n,l.path);let d=!1,c;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Cx)d=!0,c="maxretry",i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Qf(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){jo("transaction failed: Data returned ",g,l.path);let _=re(g);typeof g=="object"&&g!=null&&at(g,".priority")||(_=_.updatePriority(h.getPriority()));const k=l.currentWriteId,p=zo(t),f=Bf(_,h,p);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=f,l.currentWriteId=mu(t),o.splice(o.indexOf(k),1),i=i.concat(Mf(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(bn(t.serverSyncTree_,k,!0))}else d=!0,c="nodata",i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0))}lt(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}_u(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)qi(r[a]);gu(t,t.transactionQueueTree_)}function A0(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&Kr(r)===void 0;)r=du(r,n),e=K(e),n=M(e);return r}function x0(t,e){const n=[];return O0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function O0(t,e,n){const r=Kr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);hu(e,i=>{O0(t,i,n)})}function _u(t,e){const n=Kr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Hf(e,n.length>0?n:void 0)}hu(e,r=>{_u(t,r)})}function Yf(t,e){const n=Uo(A0(t,e)),r=du(t.transactionQueueTree_,e);return px(r,i=>{_c(t,i)}),_c(t,r),E0(r,i=>{_c(t,i)}),n}function _c(t,e){const n=Kr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Hf(e,void 0):n.length=s+1,lt(t.eventQueue_,Uo(e),i);for(let o=0;o<r.length;o++)qi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function jx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Me(`Invalid query segment '${n}' in query '${t}'`)}return e}const Bd=function(t,e){const n=Wx(t),r=n.namespace;n.domain==="firebase.com"&&Qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||QP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Uw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},Wx=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=Ux(t.substring(d,c)));const h=jx(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",zx=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Sg.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Sg.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class D0{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bx=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new He;return Ax(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){gt("OnDisconnect.remove",this._path);const e=new He;return Cg(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){gt("OnDisconnect.set",this._path),Yt("OnDisconnect.set",e,this._path,!1);const n=new He;return Cg(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){gt("OnDisconnect.setWithPriority",this._path),Yt("OnDisconnect.setWithPriority",e,this._path,!1),Gf("OnDisconnect.setWithPriority",n,!1);const r=new He;return xx(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){gt("OnDisconnect.update",this._path),C0("OnDisconnect.update",e,this._path,!1);const n=new He;return Ox(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:If(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=ug(this._queryParams),n=vf(e);return n==="{}"?"default":n}get _queryObject(){return ug(this._queryParams)}isEqual(e){if(e=D(e),!(e instanceof Ze))return!1;const n=this._repo===e._repo,r=Cf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ON(this._path)}}function vu(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function ur(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Kt){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Zn)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==mn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Y){if(e!=null&&!yo(e)||n!=null&&!yo(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(C(t.getIndex()instanceof Tf||t.getIndex()===Rf,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function yu(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Et extends Ze{constructor(e,n){super(e,n,new iu,!1)}get parent(){const e=Kw(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let wu=class Vd{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=jr(this.ref,e);return new Vd(this._node.getChild(n),r,Y)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Vd(i,jr(this.ref,r),Y)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function L0(t,e){return t=D(t),t._checkNotDeleted("ref"),e!==void 0?jr(t._root,e):t._root}function kg(t,e){t=D(t),t._checkNotDeleted("refFromURL");const n=Bd(e,t._repo.repoInfo_.nodeAdmin);S0("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&Qt("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),L0(t,n.path.toString())}function jr(t,e){return t=D(t),M(t._path)===null?wx("child","path",e,!1):wo("child","path",e,!1),new Et(t._repo,te(t._path,e))}function Vx(t,e){t=D(t),gt("push",t._path),Yt("push",e,t._path,!0);const n=P0(t._repo),r=zx(n),i=jr(t,r),s=jr(t,r);let o;return e!=null?o=Xf(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function $x(t){return gt("remove",t._path),Xf(t,null)}function Xf(t,e){t=D(t),gt("set",t._path),Yt("set",e,t._path,!1);const n=new He;return qf(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Hx(t,e){t=D(t),gt("setPriority",t._path),Gf("setPriority",e,!1);const n=new He;return qf(t._repo,te(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function Gx(t,e,n){if(gt("setWithPriority",t._path),Yt("setWithPriority",e,t._path,!1),Gf("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new He;return qf(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function Kx(t,e){C0("update",e,t._path,!1);const n=new He;return Px(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function qx(t){t=D(t);const e=new Jf(()=>{}),n=new Bo(e);return Rx(t._repo,t,n).then(r=>new wu(r,new Et(t._repo,t._path),t._queryParams.getIndex()))}class Bo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new b0("value",this,new wu(e.snapshotNode,new Et(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new D0(this,e,n):null}matches(e){return e instanceof Bo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Eu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new D0(this,e,n):null}createEvent(e,n){C(e.childName!=null,"Child events should have a childName.");const r=jr(new Et(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new b0(e.type,this,new wu(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Eu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Vo(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(d,c)=>{zd(t._repo,t,a),l(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Jf(n,s||void 0),a=e==="value"?new Bo(o):new Eu(e,o);return bx(t._repo,t,a),()=>zd(t._repo,t,a)}function $d(t,e,n,r){return Vo(t,"value",e,n,r)}function Tg(t,e,n,r){return Vo(t,"child_added",e,n,r)}function Rg(t,e,n,r){return Vo(t,"child_changed",e,n,r)}function Pg(t,e,n,r){return Vo(t,"child_moved",e,n,r)}function Ng(t,e,n,r){return Vo(t,"child_removed",e,n,r)}function Ag(t,e,n){let r=null;const i=n?new Jf(n):null;e==="value"?r=new Bo(i):e&&(r=new Eu(e,i)),zd(t._repo,t,r)}class Lt{}class M0 extends Lt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Yt("endAt",this._value,e._path,!0);const n=xd(e._queryParams,this._value,this._key);if(yu(n),ur(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ze(e._repo,e._path,n,e._orderByCalled)}}function Qx(t,e){return Wo("endAt","key",e,!0),new M0(t,e)}class Yx extends Lt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Yt("endBefore",this._value,e._path,!1);const n=iA(e._queryParams,this._value,this._key);if(yu(n),ur(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ze(e._repo,e._path,n,e._orderByCalled)}}function Jx(t,e){return Wo("endBefore","key",e,!0),new Yx(t,e)}class F0 extends Lt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Yt("startAt",this._value,e._path,!0);const n=Ad(e._queryParams,this._value,this._key);if(yu(n),ur(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ze(e._repo,e._path,n,e._orderByCalled)}}function Xx(t=null,e){return Wo("startAt","key",e,!0),new F0(t,e)}class Zx extends Lt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Yt("startAfter",this._value,e._path,!1);const n=rA(e._queryParams,this._value,this._key);if(yu(n),ur(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Ze(e._repo,e._path,n,e._orderByCalled)}}function eO(t,e){return Wo("startAfter","key",e,!0),new Zx(t,e)}class tO extends Lt{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ze(e._repo,e._path,tA(e._queryParams,this._limit),e._orderByCalled)}}function nO(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new tO(t)}class rO extends Lt{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ze(e._repo,e._path,nA(e._queryParams,this._limit),e._orderByCalled)}}function iO(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new rO(t)}class sO extends Lt{constructor(e){super(),this._path=e}_apply(e){vu(e,"orderByChild");const n=new $(this._path);if(F(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Tf(n),i=su(e._queryParams,r);return ur(i),new Ze(e._repo,e._path,i,!0)}}function oO(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return wo("orderByChild","path",t,!1),new sO(t)}class aO extends Lt{_apply(e){vu(e,"orderByKey");const n=su(e._queryParams,Kt);return ur(n),new Ze(e._repo,e._path,n,!0)}}function lO(){return new aO}class uO extends Lt{_apply(e){vu(e,"orderByPriority");const n=su(e._queryParams,Y);return ur(n),new Ze(e._repo,e._path,n,!0)}}function cO(){return new uO}class dO extends Lt{_apply(e){vu(e,"orderByValue");const n=su(e._queryParams,Rf);return ur(n),new Ze(e._repo,e._path,n,!0)}}function hO(){return new dO}class fO extends Lt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(Yt("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new M0(this._value,this._key)._apply(new F0(this._value,this._key)._apply(e))}}function pO(t,e){return Wo("equalTo","key",e,!0),new fO(t,e)}function St(t,...e){let n=D(t);for(const r of e)n=r._apply(n);return n}GA(Et);JA(Et);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO="FIREBASE_DATABASE_EMULATOR_HOST",Hd={};let gO=!1;function _O(t,e,n,r){t.repoInfo_=new Uw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function U0(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Bd(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[mO]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Bd(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new Ei(Ei.OWNER):new oN(t.name,t.options,e);S0("Invalid Firebase Database URL",o),F(o.path)||Qt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=yO(a,t,d,new sN(t.name,n));return new wO(c,t)}function vO(t,e){const n=Hd[e];(!n||n[t.key]!==t)&&Qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),N0(t),delete n[t.key]}function yO(t,e,n,r){let i=Hd[e.name];i||(i={},Hd[e.name]=i);let s=i[t.toURLString()];return s&&Qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Sx(t,gO,n,r),i[t.toURLString()]=s,s}let wO=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qt("Cannot call "+e+" on a deleted database.")}};function j0(){xi.IS_TRANSPORT_INITIALIZED&&Me("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function EO(){j0(),On.forceDisallow()}function IO(){j0(),ft.forceDisallow(),On.forceAllow()}function CO(t,e,n,r={}){t=D(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Qt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ei(Ei.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:kS(r.mockUserToken,t.app.options.projectId);s=new Ei(o)}_O(i,e,n,s)}function SO(t){t=D(t),t._checkNotDeleted("goOffline"),N0(t._repo)}function kO(t){t=D(t),t._checkNotDeleted("goOnline"),Dx(t._repo)}function TO(t,e){Tw(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(t){Iw(ar),Jn(new bt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return U0(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Gt(Gm,Km,t),Gt(Gm,Km,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO={".sv":"timestamp"};function NO(){return PO}function AO(t){return{".sv":{increment:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xO=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function OO(t,e,n){var r;if(t=D(t),gt("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new He,o=(l,u,d)=>{let c=null;l?s.reject(l):(c=new wu(d,new Et(t._repo,t._path),Y),s.resolve(new xO(u,c)))},a=$d(t,()=>{});return Lx(t._repo,t._path,e,o,a,i),s.promise}ln.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ln.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};RO();const bO="@firebase/database-compat",DO="0.3.4";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO=new Po("@firebase/database-compat"),W0=function(t){const e="FIREBASE WARNING: "+t;LO.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO=function(t,e,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(Xe(t,e)+"must be a boolean.")},FO=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Xe(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e){this._delegate=e}cancel(e){b("OnDisconnect.cancel",0,1,arguments.length),Ie("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){b("OnDisconnect.remove",0,1,arguments.length),Ie("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){b("OnDisconnect.set",1,2,arguments.length),Ie("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){b("OnDisconnect.setWithPriority",2,3,arguments.length),Ie("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(b("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,W0("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ie("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return b("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){this._database=e,this._delegate=n}val(){return b("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return b("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return b("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return b("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return b("DataSnapshot.child",0,1,arguments.length),e=String(e),wo("DataSnapshot.child","path",e,!1),new Gn(this._database,this._delegate.child(e))}hasChild(e){return b("DataSnapshot.hasChild",1,1,arguments.length),wo("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return b("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return b("DataSnapshot.forEach",1,1,arguments.length),Ie("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new Gn(this._database,n)))}hasChildren(){return b("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return b("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return b("DataSnapshot.ref",0,0,arguments.length),new nt(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Re{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;b("Query.on",2,4,arguments.length),Ie("Query.on","callback",n,!1);const o=Re.getCancelAndContextArgs_("Query.on",r,i),a=(u,d)=>{n.call(o.context,new Gn(this.database,u),d)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return $d(this._delegate,a,l),n;case"child_added":return Tg(this._delegate,a,l),n;case"child_removed":return Ng(this._delegate,a,l),n;case"child_changed":return Rg(this._delegate,a,l),n;case"child_moved":return Pg(this._delegate,a,l),n;default:throw new Error(Xe("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(b("Query.off",0,3,arguments.length),FO("Query.off",e,!0),Ie("Query.off","callback",n,!0),vm("Query.off","context",r,!0),n){const i=()=>{};i.userCallback=n,i.context=r,Ag(this._delegate,e,i)}else Ag(this._delegate,e)}get(){return qx(this._delegate).then(e=>new Gn(this.database,e))}once(e,n,r,i){b("Query.once",1,4,arguments.length),Ie("Query.once","callback",n,!0);const s=Re.getCancelAndContextArgs_("Query.once",r,i),o=new He,a=(u,d)=>{const c=new Gn(this.database,u);n&&n.call(s.context,c,d),o.resolve(c)};a.userCallback=n,a.context=s.context;const l=u=>{s.cancel&&s.cancel.call(s.context,u),o.reject(u)};switch(e){case"value":$d(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":Tg(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":Ng(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":Rg(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":Pg(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(Xe("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return b("Query.limitToFirst",1,1,arguments.length),new Re(this.database,St(this._delegate,nO(e)))}limitToLast(e){return b("Query.limitToLast",1,1,arguments.length),new Re(this.database,St(this._delegate,iO(e)))}orderByChild(e){return b("Query.orderByChild",1,1,arguments.length),new Re(this.database,St(this._delegate,oO(e)))}orderByKey(){return b("Query.orderByKey",0,0,arguments.length),new Re(this.database,St(this._delegate,lO()))}orderByPriority(){return b("Query.orderByPriority",0,0,arguments.length),new Re(this.database,St(this._delegate,cO()))}orderByValue(){return b("Query.orderByValue",0,0,arguments.length),new Re(this.database,St(this._delegate,hO()))}startAt(e=null,n){return b("Query.startAt",0,2,arguments.length),new Re(this.database,St(this._delegate,Xx(e,n)))}startAfter(e=null,n){return b("Query.startAfter",0,2,arguments.length),new Re(this.database,St(this._delegate,eO(e,n)))}endAt(e=null,n){return b("Query.endAt",0,2,arguments.length),new Re(this.database,St(this._delegate,Qx(e,n)))}endBefore(e=null,n){return b("Query.endBefore",0,2,arguments.length),new Re(this.database,St(this._delegate,Jx(e,n)))}equalTo(e,n){return b("Query.equalTo",1,2,arguments.length),new Re(this.database,St(this._delegate,pO(e,n)))}toString(){return b("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return b("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(b("Query.isEqual",1,1,arguments.length),!(e instanceof Re)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,Ie(e,"cancel",i.cancel,!0),i.context=r,vm(e,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(Xe(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new nt(this.database,new Et(this._delegate._repo,this._delegate._path))}}class nt extends Re{constructor(e,n){super(e,new Ze(n._repo,n._path,new iu,!1)),this.database=e,this._delegate=n}getKey(){return b("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return b("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new nt(this.database,jr(this._delegate,e))}getParent(){b("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new nt(this.database,e):null}getRoot(){return b("Reference.root",0,0,arguments.length),new nt(this.database,this._delegate.root)}set(e,n){b("Reference.set",1,2,arguments.length),Ie("Reference.set","onComplete",n,!0);const r=Xf(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(b("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,W0("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}gt("Reference.update",this._delegate._path),Ie("Reference.update","onComplete",n,!0);const r=Kx(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){b("Reference.setWithPriority",2,3,arguments.length),Ie("Reference.setWithPriority","onComplete",r,!0);const i=Gx(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){b("Reference.remove",0,1,arguments.length),Ie("Reference.remove","onComplete",e,!0);const n=$x(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){b("Reference.transaction",1,3,arguments.length),Ie("Reference.transaction","transactionUpdate",e,!1),Ie("Reference.transaction","onComplete",n,!0),MO("Reference.transaction","applyLocally",r,!0);const i=OO(this._delegate,e,{applyLocally:r}).then(s=>new jO(s.committed,new Gn(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){b("Reference.setPriority",1,2,arguments.length),Ie("Reference.setPriority","onComplete",n,!0);const r=Hx(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){b("Reference.push",0,2,arguments.length),Ie("Reference.push","onComplete",n,!0);const r=Vx(this._delegate,e),i=r.then(o=>new nt(this.database,o));n&&i.then(()=>n(null),o=>n(o));const s=new nt(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return gt("Reference.onDisconnect",this._delegate._path),new UO(new Bx(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:EO,forceLongPolling:IO}}useEmulator(e,n,r={}){CO(this._delegate,e,n,r)}ref(e){if(b("database.ref",0,1,arguments.length),e instanceof nt){const n=kg(this._delegate,e.toString());return new nt(this,n)}else{const n=L0(this._delegate,e);return new nt(this,n)}}refFromURL(e){b("database.refFromURL",1,1,arguments.length);const r=kg(this._delegate,e);return new nt(this,r)}goOffline(){return b("database.goOffline",0,0,arguments.length),SO(this._delegate)}goOnline(){return b("database.goOnline",0,0,arguments.length),kO(this._delegate)}}Eo.ServerValue={TIMESTAMP:NO(),increment:t=>AO(t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO({app:t,url:e,version:n,customAuthImpl:r,namespace:i,nodeAdmin:s=!1}){Iw(n);const o=new uy("auth-internal",new cy("database-standalone"));return o.setComponent(new bt("auth-internal",()=>r,"PRIVATE")),{instance:new Eo(U0(t,o,void 0,e,s),t),namespace:i}}var zO=Object.freeze({__proto__:null,initStandalone:WO});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=Eo.ServerValue;function VO(t){t.INTERNAL.registerComponent(new bt("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new Eo(i,r)},"PUBLIC").setServiceProps({Reference:nt,Query:Re,Database:Eo,DataSnapshot:Gn,enableLogging:TO,INTERNAL:zO,ServerValue:BO}).setMultipleInstances(!0)),t.registerVersion(bO,DO)}VO(vn);const $O={apiKey:"AIzaSyBdZjBILPzx9ISW9wuTxIFua7XPHXYNxTo",authDomain:"letmeask-learning-victorcesae.firebaseapp.com",databaseURL:"https://letmeask-learning-victorcesae-default-rtdb.firebaseio.com",projectId:"letmeask-learning-victorcesae",storageBucket:"letmeask-learning-victorcesae.appspot.com",messagingSenderId:"408143335272",appId:"1:408143335272:web:4427327e671fb85380d0dd",measurementId:"G-NRXF93PZ8Y"};console.log("🚀 ~ file: firebase.ts:16 ~ firebaseConfig.import.meta.env.VITE_APP_API_KEY:","AIzaSyBdZjBILPzx9ISW9wuTxIFua7XPHXYNxTo");vn.initializeApp($O);const xg=vn.auth(),un=vn.database(),z0=S.createContext({});function HO(t){const[e,n]=S.useState();S.useEffect(()=>{const i=xg.onAuthStateChanged(s=>{if(s){const{displayName:o,photoURL:a,uid:l}=s;if(!o||!a)throw new Error("Missing information from Google account.");n({id:l,name:o,avatar:a})}});return()=>{i()}},[]);async function r(){const i=new vn.auth.GoogleAuthProvider,s=await xg.signInWithPopup(i);if(s.user){const{displayName:o,photoURL:a,uid:l}=s.user;if(!o||!a)throw new Error("Missing information from Google account.");n({id:l,name:o,avatar:a})}}return y.jsx(z0.Provider,{value:{user:e,signInWithGoogle:r},children:t.children})}function Xi(){return S.useContext(z0)}const B0="/letmeask/assets/illustration-21d391aa.svg",$o="/letmeask/assets/logo-f474bede.svg",GO="/letmeask/assets/google-icon-a667ddf7.svg";function Ho({isOutlined:t=!1,...e}){return y.jsx("button",{className:`button ${t?"outlined":""}`,...e})}function KO(){const t=Bi(),{user:e,signInWithGoogle:n}=Xi(),[r,i]=S.useState("");async function s(){e||await n(),t("/rooms/new")}async function o(a){if(a.preventDefault(),r.trim()==="")return;const l=await un.ref(`rooms/${r}`).get();if(!l.exists()){alert("Room does not exists.");return}l.val().endedAt&&alert("Room already closed"),t(`/rooms/${r}`)}return y.jsxs("div",{id:"page-auth",children:[y.jsxs("aside",{children:[y.jsx("img",{src:B0,alt:"Ilustração simbolizando perguntas e respostas"}),y.jsx("strong",{children:"Crie salas de Q&A ao-vivo"}),y.jsx("p",{children:"Tire as dúvidas em tempo real."})]}),y.jsx("main",{children:y.jsxs("div",{className:"main-content",children:[y.jsx("img",{src:$o,alt:"Letmeask"}),y.jsxs("button",{className:"create-room",onClick:s,children:[y.jsx("img",{src:GO,alt:""}),"Crie sua sala com o Google"]}),y.jsx("div",{className:"separator",children:"ou entre em uma sala"}),y.jsxs("form",{onSubmit:o,children:[y.jsx("input",{type:"text",placeholder:"Digite o código da sala",onChange:a=>i(a.target.value),value:r}),y.jsx(Ho,{type:"submit",children:"Entrar na sala"})]})]})})]})}function qO(){const{user:t}=Xi(),[e,n]=S.useState(""),r=Bi();async function i(s){if(s.preventDefault(),e.trim()==="")return;const a=await un.ref("rooms").push({title:e,authorId:t==null?void 0:t.id});r(`/rooms/admin/${a.key}`)}return y.jsxs("div",{id:"page-auth",children:[y.jsxs("aside",{children:[y.jsx("img",{src:B0,alt:"Ilustração simbolizando perguntas e respostas"}),y.jsx("strong",{children:"Crie salas de Q&A ao-vivo"}),y.jsx("p",{children:"Tire as dúvidas em tempo real."})]}),y.jsx("main",{children:y.jsxs("div",{className:"main-content",children:[y.jsx("img",{src:$o,alt:"Letmeask"}),y.jsx("h2",{children:"Criar uma nova sala"}),y.jsxs("form",{onSubmit:i,children:[y.jsx("input",{type:"text",placeholder:"Nome da sala",onChange:s=>n(s.target.value),value:e}),y.jsx(Ho,{type:"submit",children:"Criar sala"})]}),y.jsxs("p",{children:["Quer entrar em uma sala existente? ",y.jsx(pS,{to:"/",children:"Clique aqui"})]})]})})]})}const QO="/letmeask/assets/copy-a1c593eb.svg";function V0(t){const e=S.useRef(null);function n(){var r;t.code&&(navigator.clipboard.writeText(t.code),(r=e.current)==null||r.show(),setTimeout(()=>{var i;(i=e.current)==null||i.close()},1e3))}return y.jsxs("div",{className:"container",children:[y.jsxs("button",{className:"room-code",onClick:n,children:[y.jsx("div",{children:y.jsx("img",{src:QO,alt:"Copiar código da sala"})}),y.jsxs("span",{children:["Sala #",t.code]})]}),y.jsxs("dialog",{ref:e,children:[y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 50 50",xmlSpace:"preserve",width:"25px",height:"25px",children:[y.jsx("circle",{cx:"25",cy:"25",r:"25",fill:"#25AE88"}),y.jsx("path",{fill:"none",stroke:"#FFF",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M38 15L22 33 12 25"})]}),"Copiado"]})]})}function Zf(t){const{user:e}=Xi(),[n,r]=S.useState([]),[i,s]=S.useState(""),[o,a]=S.useState(""),[l,u]=S.useState(!0),d=Bi();return S.useEffect(()=>{const c=un.ref(`rooms/${t}`);return c.on("value",h=>{if(u(!0),!h.exists())return d("/403");const g=h.val(),_=g.questions??{},v=Object.entries(_).map(([k,p])=>{var f;return{id:k,content:p.content,author:p.author,isHighlighted:p.isHighlighted,isAnswered:p.isAnswered,likeCount:Object.values(p.likes??{}).length,likeId:(f=Object.entries(p.likes??{}).find(([m,w])=>w.authorId===(e==null?void 0:e.id)))==null?void 0:f[0]}});s(g.title),r(v),a(g.authorId),u(!1)}),()=>{c.off("value")}},[t,e==null?void 0:e.id]),{questions:n,title:i,authorId:o,loading:l}}function $0(){const e=$l().id,{user:n,signInWithGoogle:r}=Xi(),[i,s]=S.useState("");async function o(a){if(a.preventDefault(),i.trim()==="")return;if(!n)throw new Error("You must be logged in");const l={content:i,author:{id:n==null?void 0:n.id,name:n==null?void 0:n.name,avatar:n==null?void 0:n.avatar},isHighlighted:!1,isAnswered:!1};await un.ref(`rooms/${e}/questions`).push(l),s("")}return y.jsxs("form",{onSubmit:o,children:[y.jsx("textarea",{placeholder:"O que você quer perguntar?",onChange:a=>s(a.target.value),value:i}),y.jsxs("div",{className:"form-footer",children:[n?y.jsxs("div",{className:"user-info",children:[y.jsx("img",{src:n==null?void 0:n.avatar,alt:n==null?void 0:n.name}),y.jsx("span",{children:n.name})]}):y.jsxs("span",{children:["Para enviar uma pergunta,"," ",y.jsx("button",{onClick:async()=>{await r()},children:"faça seu login"}),"."]}),y.jsx(Ho,{type:"submit",disabled:!n,children:"Enviar pergunta"})]})]})}function Og({content:t,author:e,children:n,inEditing:r,setInEditing:i}){const[s,o]=S.useState(t);async function a(l){if(l.preventDefault(),s.trim()===""||!r||!r.roomId||!r.questionId)return;const u={content:s};await un.ref(`rooms/${r.roomId}/questions/${r.questionId}`).update(u),r=void 0,i(r)}return y.jsxs("div",{className:"question",children:[r?y.jsxs("form",{onSubmit:a,children:[y.jsx("textarea",{placeholder:"Editar pergunta",onChange:l=>o(l.target.value),value:s}),y.jsx("div",{className:"form-footer",children:y.jsx(Ho,{type:"submit",children:"Atualizar pergunta"})})]}):y.jsx("p",{children:t}),y.jsxs("footer",{children:[y.jsxs("div",{className:"user-info",children:[y.jsx("img",{src:e.avatar,alt:e.name}),y.jsx("span",{children:e.name})]}),y.jsx("div",{children:n})]})]})}const YO="/letmeask/assets/delete-920b3ea8.svg";function H0(){const e=$l().id,{user:n}=Xi(),{questions:r}=Zf(e),[i,s]=S.useState();async function o(u,d){d?await un.ref(`rooms/${e}/questions/${u}/likes/${d}`).remove():await un.ref(`rooms/${e}/questions/${u}/likes`).push({authorId:n==null?void 0:n.id})}async function a(u){s(i?void 0:{questionId:u,roomId:e})}async function l(u){window.confirm("Tem certeza que você deseja excluir esta pergunta?")&&await un.ref(`rooms/${e}/questions/${u}`).remove()}return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"question-list my",children:[y.jsx("div",{className:"question-title",children:"Your Questions"}),r.map(u=>u.author.id===(n==null?void 0:n.id)?y.jsx(Og,{content:u.content,author:u.author,inEditing:u.id===(i==null?void 0:i.questionId)?i:void 0,setInEditing:s,children:y.jsxs("div",{className:"buttons-list",children:[y.jsxs("button",{className:`like-button ${u.likeId?"liked":""}`,type:"button","aria-label":"Marcar como gostei",onClick:()=>o(u.id,u.likeId),children:[u.likeCount>0&&y.jsx("span",{children:u.likeCount}),y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),y.jsx("button",{className:`edit-button ${u.id===(i==null?void 0:i.questionId)?"editing":""}`,type:"button",onClick:()=>a(u.id),children:y.jsx("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",children:y.jsxs("g",{transform:"translate(0,24) scale(0.005,-0.005)",fill:"#737380",stroke:"none",children:[y.jsx("path",{d:`M4253 5080 c-78 -20 -114 -37 -183 -83 -44 -29 -2323 -2296 -2361\r
                        -2349 -21 -29 -329 -1122 -329 -1168 0 -56 65 -120 122 -120 44 0 1138 309\r
                        1166 329 15 11 543 536 1174 1168 837 838 1157 1165 1187 1212 74 116 105 270\r
                        82 407 -7 39 -30 105 -53 154 -36 76 -55 99 -182 226 -127 127 -150 145 -226\r
                        182 -135 65 -260 78 -397 42z m290 -272 c55 -27 258 -231 288 -288 20 -38 24\r
                        -60 24 -140 0 -121 -18 -160 -132 -279 l-82 -86 -303 303 -303 303 88 84 c49\r
                        46 108 93 132 105 87 42 203 41 288 -2z m-383 -673 l295 -295 -933 -932 -932\r
                        -933 -295 295 c-162 162 -295 299 -295 305 0 13 1842 1855 1855 1855 6 0 143\r
                        -133 305 -295z m-1822 -2284 c-37 -12 -643 -179 -645 -178 -1 1 30 115 68 252\r
                        38 138 79 285 91 329 l21 78 238 -238 c132 -132 233 -241 227 -243z`}),y.jsx("path",{d:`M480 4584 c-209 -56 -370 -206 -444 -414 l-31 -85 0 -1775 c0 -1693\r
                        1 -1778 18 -1834 37 -120 77 -187 167 -277 63 -63 104 -95 157 -121 146 -73 3\r
                        -69 2113 -66 l1895 3 67 26 c197 77 336 218 401 409 22 64 22 74 25 710 3 579\r
                        2 648 -13 676 -21 40 -64 64 -114 64 -33 0 -49 -7 -79 -34 l-37 -34 -5 -634\r
                        c-5 -631 -5 -633 -28 -690 -41 -102 -118 -179 -220 -220 l-57 -23 -1834 -3\r
                        c-1211 -1 -1853 1 -1890 8 -120 22 -227 104 -277 213 l-29 62 0 1760 0 1760\r
                        29 63 c37 80 122 161 203 194 l58 23 630 5 c704 6 664 1 700 77 23 48 13 95\r
                        -31 138 l-35 35 -642 -1 c-533 0 -651 -3 -697 -15z`})]})})}),y.jsx("button",{type:"button",onClick:()=>l(u.id),children:y.jsx("img",{src:YO,alt:"Remover a pergunta"})})]})},u.id):"")]}),y.jsx("div",{className:"question-list",children:r.map(u=>u.author.id!==(n==null?void 0:n.id)?y.jsx(Og,{content:u.content,author:u.author,setInEditing:s,children:y.jsxs("button",{className:`like-button ${u.likeId?"liked":""}`,type:"button","aria-label":"Marcar como gostei",onClick:()=>o(u.id,u.likeId),children:[u.likeCount>0&&y.jsx("span",{children:u.likeCount}),y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},u.id):"")})]})}function JO(){const e=$l().id,{title:n,questions:r}=Zf(e);return y.jsxs("div",{id:"page-room",children:[y.jsx("header",{children:y.jsxs("div",{className:"content",children:[y.jsx("img",{src:$o,alt:"Letmeask"}),y.jsx(V0,{code:e})]})}),y.jsxs("main",{className:"content",children:[y.jsxs("div",{className:"room-title",children:[y.jsxs("h1",{children:["Sala ",n]}),r.length>0&&y.jsxs("span",{children:[r.length," pergunta(s)"]})]}),y.jsx($0,{}),y.jsx(H0,{})]})]})}function XO(){return y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",height:"100vh"},children:[y.jsx("img",{src:$o,alt:"Letmeask"}),y.jsx("h1",{children:"403 - Not Found"}),y.jsx("a",{href:"/",children:"Vá para página principal"})]})}function ZO(){const e=$l().id,n=Bi(),{user:r}=Xi(),{title:i,questions:s,authorId:o,loading:a}=Zf(e);async function l(){await un.ref(`rooms/${e}`).update({endedAt:new Date}),n("/")}return o!==(r==null?void 0:r.id)&&!a&&n(`/rooms/${e}`),y.jsxs("div",{id:"page-room",children:[y.jsx("header",{children:y.jsxs("div",{className:"content",children:[y.jsx("img",{src:$o,alt:"Letmeask"}),y.jsxs("div",{children:[y.jsx(V0,{code:e}),y.jsxs(Ho,{isOutlined:!0,onClick:l,children:["Encerrar Sala"," "]})]})]})}),y.jsxs("main",{className:"content",children:[y.jsxs("div",{className:"room-title",children:[y.jsxs("h1",{children:["Sala ",i]}),s.length>0&&y.jsxs("span",{children:[s.length," pergunta(s)"]})]}),y.jsx($0,{}),y.jsx(H0,{})]})]})}function eb(){return y.jsx(dS,{children:y.jsx(HO,{children:y.jsxs(oS,{children:[y.jsx(Cn,{index:!0,element:y.jsx(KO,{})}),y.jsx(Cn,{path:"403",element:y.jsx(XO,{})}),y.jsxs(Cn,{path:"rooms",children:[y.jsx(Cn,{index:!0,element:y.jsx(iS,{to:"/rooms/new",replace:!0})}),y.jsx(Cn,{path:"new",element:y.jsx(qO,{})}),y.jsx(Cn,{path:":id",element:y.jsx(JO,{})}),y.jsx(Cn,{path:"admin/:id",element:y.jsx(ZO,{})})]})]})})})}vc.createRoot(document.getElementById("root")).render(y.jsx(eb,{}));
