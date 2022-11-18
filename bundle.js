/*! For license information please see bundle.js.LICENSE.txt */
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,j=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,L=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${N} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${j} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,D=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,F=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${D} 1s linear infinite;
`,z=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,q=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,H=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${q} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,K=w("div")`
  position: absolute;
`,G=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,V=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${V} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:t})=>{let{icon:r,type:n,iconTheme:i}=t;return void 0!==r?"string"==typeof r?e.createElement(W,null,r):r:"blank"===n?null:e.createElement(G,null,e.createElement(F,{...i}),"loading"!==n&&e.createElement(K,null,"error"===n?e.createElement(L,{...i}):e.createElement(H,{...i})))},Y=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Q=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,X=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Z=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,$=e.memo((({toast:t,position:r,style:n,children:i})=>{let o=t.height?((e,t)=>{let r=e.includes("top")?1:-1,[n,i]=S()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(r),Q(r)];return{animation:t?`${g(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||r||"top-center",t.visible):{opacity:0},a=e.createElement(J,{toast:t}),s=e.createElement(Z,{...t.ariaProps},_(t.message,t));return e.createElement(X,{className:t.className,style:{...o,...n,...t.style}},"function"==typeof i?i({icon:a,message:s}):e.createElement(e.Fragment,null,a,s))}));!function(e,t,r,n){f.p=void 0,y=e,m=void 0,v=void 0}(e.createElement);var ee,te=({id:t,className:r,style:n,onHeightUpdate:i,children:o})=>{let a=e.useCallback((e=>{if(e){let r=()=>{let r=e.getBoundingClientRect().height;i(t,r)};r(),new MutationObserver(r).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,i]);return e.createElement("div",{ref:a,className:r,style:n},o)},re=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ne=({reverseOrder:t,position:r="top-center",toastOptions:n,gutter:i,children:o,containerStyle:a,containerClassName:s})=>{let{toasts:u,handlers:c}=(t=>{let{toasts:r,pausedAt:n}=((t={})=>{let[r,n]=(0,e.useState)(O);(0,e.useEffect)((()=>(P.push(n),()=>{let e=P.indexOf(n);e>-1&&P.splice(e,1)})),[r]);let i=r.toasts.map((e=>{var r,n;return{...t,...t[e.type],...e,duration:e.duration||(null==(r=t[e.type])?void 0:r.duration)||(null==t?void 0:t.duration)||M[e.type],style:{...t.style,...null==(n=t[e.type])?void 0:n.style,...e.style}}}));return{...r,toasts:i}})(t);(0,e.useEffect)((()=>{if(n)return;let e=Date.now(),t=r.map((t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(r<0))return setTimeout((()=>C.dismiss(t.id)),r);t.visible&&C.dismiss(t.id)}));return()=>{t.forEach((e=>e&&clearTimeout(e)))}}),[r,n]);let i=(0,e.useCallback)((()=>{n&&T({type:6,time:Date.now()})}),[n]),o=(0,e.useCallback)(((e,t)=>{let{reverseOrder:n=!1,gutter:i=8,defaultPosition:o}=t||{},a=r.filter((t=>(t.position||o)===(e.position||o)&&t.height)),s=a.findIndex((t=>t.id===e.id)),u=a.filter(((e,t)=>t<s&&e.visible)).length;return a.filter((e=>e.visible)).slice(...n?[u+1]:[0,u]).reduce(((e,t)=>e+(t.height||0)+i),0)}),[r]);return{toasts:r,handlers:{updateHeight:B,startPause:I,endPause:i,calculateOffset:o}}})(n);return e.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map((n=>{let a=n.position||r,s=((e,t)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...i}})(a,c.calculateOffset(n,{reverseOrder:t,gutter:i,defaultPosition:r}));return e.createElement(te,{id:n.id,key:n.id,onHeightUpdate:c.updateHeight,className:n.visible?re:"",style:s},"custom"===n.type?_(n.message,n):o?o(n):e.createElement($,{toast:n,position:a}))})))},ie=C;function oe(e){return oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe(e)}function ae(){ae=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,i){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),s=new E(i||[]);return n(a,"_invoke",{value:_(e,r,s)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function d(){}function h(){}function p(){}var b={};u(b,o,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(x([])));m&&m!==t&&r.call(m,o)&&(b=m);var v=p.prototype=d.prototype=Object.create(b);function g(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function i(n,o,a,s){var u=f(e[n],e,o);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==oe(l)&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){i("next",e,a,s)}),(function(e){i("throw",e,a,s)})):t.resolve(l).then((function(e){c.value=e,a(c)}),(function(e){return i("throw",e,a,s)}))}s(u.arg)}var o;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){i(e,r,t,n)}))}return o=o?o.then(n,n):n()}})}function _(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return{value:void 0,done:!0}}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=k(a,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function k(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function x(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=p,n(v,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:h,configurable:!0}),h.displayName=u(p,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,u(e,s,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(w.prototype),u(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new w(c(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(v),u(v,s,"Generator"),u(v,o,(function(){return this})),u(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;A(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}function se(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}function ue(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){se(o,n,i,a,s,"next",e)}function s(e){se(o,n,i,a,s,"throw",e)}a(void 0)}))}}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){le(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function le(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function de(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return he(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?he(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var pe=6e4,be="0x37e97312DFbF16dEB489875751a2B982aA17b2cF",ye="0x54fCe65792cbC7ad71c7220D6461D023A4d413a6";const me=function(){var t=de((0,e.useState)(""),2),r=t[0],n=t[1],o=de((0,e.useState)([]),2),a=o[0],s=o[1],u=de((0,e.useState)(0),2),c=u[0],f=u[1],l=de((0,e.useState)(-1),2),d=l[0],h=l[1],p=de((0,e.useState)(!1),2),b=p[0],y=p[1],m=function(e){ie.error("Error ".concat(e.code,": ").concat(e.message))},v=function(e,t){var r=[ee.utils.sha3(e).substring(0,10)];if(!t)return r.join("");for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];for(var a=0;a<t;a++)"number"==typeof i[a]&&r.push(Number(i[a]).toString(16).padStart(64,"0")),"string"==typeof i[a]&&r.push(i[a].substring(2).padStart(64,"0"));return console.log(e,r),r.join("")},g=window.ethereum;(0,e.useEffect)((function(){if(void 0!==g){ee=new(i())(g),g.on("accountsChanged",(function(e){s(e),y(e.includes(ye.toLowerCase()))})),g.request({method:"eth_accounts"}).then((function(e){ie.success("Metamask connected"),s(e),y(e.includes(ye.toLowerCase()))})).catch(m);var e={to:be,chainId:"0xaa36a7"};g.request({method:"eth_call",params:[fe(fe({},e),{},{data:v("_faucetLimit()",0)})]}).then((function(e){return f(Number(e).toString(10))})).catch(m),g.request({method:"eth_call",params:[fe(fe({},e),{},{data:v("balanceOf(address)",1,ye)})]}).then((function(e){return h(Number(e).toString(10))})).catch(m)}}),[]);var w=function(){var e=ue(ae().mark((function e(){var t,r,n,i,o=arguments;return ae().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},r=t.refillAmount,n={from:a[0],to:be,data:v("refillFaucet(uint256)",1,r),gasLimit:Number(pe).toString(16),maxFeePerGas:Number(ee.utils.toWei(String(1.8),"gwei")).toString(16),maxPriorityFeePerGas:Number(ee.utils.toWei(String(1.8),"gwei")).toString(16),chainId:"0xaa36a7"},e.next=5,g.request({method:"eth_sendTransaction",params:[n]}).catch(m);case 5:return n.data=v("balanceOf(address)",1,ye),e.next=8,g.request({method:"eth_call",params:[n]}).catch(m);case 8:i=e.sent,h(Number(i).toString(10));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=ue(ae().mark((function e(){return ae().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.request({method:"eth_requestAccounts"}).then(s).catch(m);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=ue(ae().mark((function e(t){var r,i,o,a,s;return ae().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target,e.next=4,fetch("https://geolocation-db.com/json/");case 4:return e.next=6,e.sent.json();case 6:if(i=e.sent,!(((o=localStorage.getItem(i.IPv4))?o-Date.now():0)<=0)){e.next=15;break}return s=[ee.utils.sha3("faucet(uint256)").substring(0,10),Number(1e3).toString(16).padStart(64,"0")],a={from:r.key.value,to:be,maxFeePerGas:Number(ee.utils.toWei(String(1.8),"gwei")).toString(16),maxPriorityFeePerGas:Number(ee.utils.toWei(String(1.8),"gwei")).toString(16),gasLimit:Number(pe).toString(16),data:s.join(""),chainId:"0xaa36a7"},console.log(a),g.request({method:"eth_sendTransaction",params:[a]}).then((function(e){localStorage.setItem(String(i.IPv4),Date.now()+216e5),n(e)})).catch(m),e.abrupt("return");case 15:m({code:400,message:"Try again on ".concat(new Date(Number(o)))});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return e.createElement(e.Fragment,null,e.createElement("div",{className:"container"},e.createElement("div",{className:"heading"},"Aurora Token (AURA) faucet"),r&&e.createElement("span",null,"Go to transaction:"," ",e.createElement("a",{href:"https://sepolia.etherscan.io/tx/".concat(r),target:"_blank"},"Here")),!a[0]&&e.createElement("button",{name:"metamask-connect",onClick:_},"Connect to metamask"),b&&e.createElement("div",null,e.createElement("span",null,"Faucet Limit: ",c),e.createElement("span",null,"Owner balance: ",d),e.createElement("button",{name:"faucet-properties",onClick:function(){return w({refillAmount:15e5})}},"Add 1500000 tokens to faucet")),e.createElement("form",{className:"key-form",onSubmit:function(e){return k(e)}},e.createElement("input",{name:"key",placeholder:"Enter account address for free tokens:"}),e.createElement("button",null,"Drink")),e.createElement("span",null,"Current rate: ",e.createElement("strong",null,"1000 tokens per use")),e.createElement("span",null,"Contract addr: ",e.createElement("a",{href:"https://sepolia.etherscan.io/token/".concat(be),target:"_blank"},be)),e.createElement("span",null,"Dont have enough SepoliaETH? Try"," ",e.createElement("a",{href:"https://faucet.sepolia.dev/",target:"_blank"},"Here")),e.createElement("span",{className:"disclaimer"},"Unfortunately sepolia testnet does not support metamask mobile. Check"," ",e.createElement("a",{href:"https://github.com/MetaMask/metamask-mobile/issues/5259"},"here")," for updates."),e.createElement(ne,{position:"top-left",toastOptions:{className:"toast"}})))};var ve=r(379),ge=r.n(ve),we=r(795),_e=r.n(we),ke=r(569),Se=r.n(ke),Ae=r(565),Ee=r.n(Ae),xe=r(216),Pe=r.n(xe),Oe=r(589),Te=r.n(Oe),Me=r(28),Re={};Re.styleTagTransform=Te(),Re.setAttributes=Ee(),Re.insert=Se().bind(null,"head"),Re.domAPI=_e(),Re.insertStyleElement=Pe(),ge()(Me.Z,Re),Me.Z&&Me.Z.locals&&Me.Z.locals;var Ce=document.getElementById("root");(0,t.s)(Ce).render(e.createElement(me,null))})()})();