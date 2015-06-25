/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.0
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
function FastClick(e){"use strict";function t(e,t){return function(){return e.apply(t,arguments)}}var n;this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=e,FastClick.notNeeded(e)||(deviceIsAndroid&&(e.addEventListener("mouseover",t(this.onMouse,this),!0),e.addEventListener("mousedown",t(this.onMouse,this),!0),e.addEventListener("mouseup",t(this.onMouse,this),!0)),e.addEventListener("click",t(this.onClick,this),!0),e.addEventListener("touchstart",t(this.onTouchStart,this),!1),e.addEventListener("touchmove",t(this.onTouchMove,this),!1),e.addEventListener("touchend",t(this.onTouchEnd,this),!1),e.addEventListener("touchcancel",t(this.onTouchCancel,this),!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,i){var o=Node.prototype.removeEventListener;"click"===t?o.call(e,t,n.hijacked||n,i):o.call(e,t,n,i)},e.addEventListener=function(t,n,i){var o=Node.prototype.addEventListener;"click"===t?o.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),i):o.call(e,t,n,i)}),"function"==typeof e.onclick&&(n=e.onclick,e.addEventListener("click",function(e){n(e)},!1),e.onclick=null))}!function(e,t,n){"use strict";var i=function(i,o){var s=!!t.getComputedStyle;s||(t.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"===t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this});var r=function(e,t,n,i){if("addEventListener"in e)try{e.addEventListener(t,n,i)}catch(o){if("object"!=typeof n||!n.handleEvent)throw o;e.addEventListener(t,function(e){n.handleEvent.call(n,e)},i)}else"attachEvent"in e&&("object"==typeof n&&n.handleEvent?e.attachEvent("on"+t,function(){n.handleEvent.call(n)}):e.attachEvent("on"+t,n))},a=function(e,t,n,i){if("removeEventListener"in e)try{e.removeEventListener(t,n,i)}catch(o){if("object"!=typeof n||!n.handleEvent)throw o;e.removeEventListener(t,function(e){n.handleEvent.call(n,e)},i)}else"detachEvent"in e&&("object"==typeof n&&n.handleEvent?e.detachEvent("on"+t,function(){n.handleEvent.call(n)}):e.detachEvent("on"+t,n))},c=function(e){if(e.children.length<1)throw new Error("The Nav container has no containing elements");for(var t=[],n=0;n<e.children.length;n++)1===e.children[n].nodeType&&t.push(e.children[n]);return t},l=function(e,t){for(var n in t)e.setAttribute(n,t[n])},u=function(e,t){0!==e.className.indexOf(t)&&(e.className+=" "+t,e.className=e.className.replace(/(^\s*)|(\s*$)/g,""))},d=function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/(^\s*)|(\s*$)/g,"")},h=function(e,t,n){for(var i=0;i<e.length;i++)t.call(n,i,e[i])},f,p,v,m=e.createElement("style"),g=e.documentElement,y,k,E,C=function(t,n){var i;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(i in n)this.options[i]=n[i];if(u(g,this.options.jsClass),this.wrapperEl=t.replace("#",""),e.getElementById(this.wrapperEl))this.wrapper=e.getElementById(this.wrapperEl);else{if(!e.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=e.querySelector(this.wrapperEl)}this.wrapper.inner=c(this.wrapper),p=this.options,f=this.wrapper,this._init(this)};return C.prototype={destroy:function(){this._removeStyles(),d(f,"closed"),d(f,"opened"),d(f,p.navClass),d(f,p.navClass+"-"+this.index),d(g,p.navActiveClass),f.removeAttribute("style"),f.removeAttribute("aria-hidden"),a(t,"resize",this,!1),a(e.body,"touchmove",this,!1),a(v,"touchstart",this,!1),a(v,"touchend",this,!1),a(v,"mouseup",this,!1),a(v,"keyup",this,!1),a(v,"click",this,!1),p.customToggle?v.removeAttribute("aria-hidden"):v.parentNode.removeChild(v)},toggle:function(){y===!0&&(E?this.close():this.open())},open:function(){E||(d(f,"closed"),u(f,"opened"),u(g,p.navActiveClass),u(v,"active"),f.style.position=p.openPos,l(f,{"aria-hidden":"false"}),E=!0,p.open())},close:function(){E&&(u(f,"closed"),d(f,"opened"),d(g,p.navActiveClass),d(v,"active"),l(f,{"aria-hidden":"true"}),p.animate?(y=!1,setTimeout(function(){f.style.position="absolute",y=!0},p.transition+10)):f.style.position="absolute",E=!1,p.close())},resize:function(){"none"!==t.getComputedStyle(v,null).getPropertyValue("display")?(k=!0,l(v,{"aria-hidden":"false"}),f.className.match(/(^|\s)closed(\s|$)/)&&(l(f,{"aria-hidden":"true"}),f.style.position="absolute"),this._createStyles(),this._calcHeight()):(k=!1,l(v,{"aria-hidden":"true"}),l(f,{"aria-hidden":"false"}),f.style.position=p.openPos,this._removeStyles())},handleEvent:function(e){var n=e||t.event;switch(n.type){case"touchstart":this._onTouchStart(n);break;case"touchmove":this._onTouchMove(n);break;case"touchend":case"mouseup":this._onTouchEnd(n);break;case"click":this._preventDefault(n);break;case"keyup":this._onKeyUp(n);break;case"resize":this.resize(n)}},_init:function(){this.index=n++,u(f,p.navClass),u(f,p.navClass+"-"+this.index),u(f,"closed"),y=!0,E=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize();var i=this;setTimeout(function(){i.resize()},20),r(t,"resize",this,!1),r(e.body,"touchmove",this,!1),r(v,"touchstart",this,!1),r(v,"touchend",this,!1),r(v,"mouseup",this,!1),r(v,"keyup",this,!1),r(v,"click",this,!1),p.init()},_createStyles:function(){m.parentNode||(m.type="text/css",e.getElementsByTagName("head")[0].appendChild(m))},_removeStyles:function(){m.parentNode&&m.parentNode.removeChild(m)},_createToggle:function(){if(p.customToggle){var t=p.customToggle.replace("#","");if(e.getElementById(t))v=e.getElementById(t);else{if(!e.querySelector(t))throw new Error("The custom nav toggle you are trying to select doesn't exist");v=e.querySelector(t)}}else{var n=e.createElement("a");n.innerHTML=p.label,l(n,{href:"#","class":"nav-toggle"}),"after"===p.insert?f.parentNode.insertBefore(n,f.nextSibling):f.parentNode.insertBefore(n,f),v=n}},_closeOnNavClick:function(){if(p.closeOnNavClick&&"querySelectorAll"in e){var t=f.querySelectorAll("a"),n=this;h(t,function(e,i){r(t[e],"click",function(){k&&n.toggle()},!1)})}},_preventDefault:function(e){e.preventDefault?(e.preventDefault(),e.stopPropagation()):e.returnValue=!1},_onTouchStart:function(t){t.stopPropagation(),"after"===p.insert&&u(e.body,"disable-pointer-events"),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY,this.touchHasMoved=!1,a(v,"mouseup",this,!1)},_onTouchMove:function(e){(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10)&&(this.touchHasMoved=!0)},_onTouchEnd:function(n){if(this._preventDefault(n),!this.touchHasMoved){if("touchend"===n.type)return this.toggle(),void("after"===p.insert&&setTimeout(function(){d(e.body,"disable-pointer-events")},p.transition+300));var i=n||t.event;3!==i.which&&2!==i.button&&this.toggle()}},_onKeyUp:function(e){var n=e||t.event;13===n.keyCode&&this.toggle()},_transitions:function(){if(p.animate){var e=f.style,t="max-height "+p.transition+"ms";e.WebkitTransition=t,e.MozTransition=t,e.OTransition=t,e.transition=t}},_calcHeight:function(){for(var e=0,t=0;t<f.inner.length;t++)e+=f.inner[t].offsetHeight;var n="."+p.jsClass+" ."+p.navClass+"-"+this.index+".opened{max-height:"+e+"px !important}";m.styleSheet?m.styleSheet.cssText=n:m.innerHTML=n,n=""}},new C(i,o)};t.responsiveNav=i}(document,window,0);var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===e.type||e.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(e.className)},FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},FastClick.prototype.sendClick=function(e,t){"use strict";var n,i;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),i=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},FastClick.prototype.determineEventType=function(e){"use strict";return deviceIsAndroid&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(e){"use strict";var t;deviceIsIOS&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";return e.nodeType===Node.TEXT_NODE?e.parentNode:e},FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,i;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],deviceIsIOS){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<200&&e.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n?!0:!1},FastClick.prototype.onTouchMove=function(e){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(e){"use strict";return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,i,o,s,r=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(s=e.changedTouches[0],r=document.elementFromPoint(s.pageX-window.pageXOffset,s.pageY-window.pageYOffset)||r,r.fastClickScrollParent=this.targetElement.fastClickScrollParent),i=r.tagName.toLowerCase(),"label"===i){if(t=this.findControl(r)){if(this.focus(r),deviceIsAndroid)return!1;r=t}}else if(this.needsFocus(r))return e.timeStamp-n>100||deviceIsIOS&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(r),this.sendClick(r,e),deviceIsIOS4&&"select"===i||(this.targetElement=null,e.preventDefault()),!1);return deviceIsIOS&&!deviceIsIOS4&&(o=r.fastClickScrollParent,o&&o.fastClickLastScrollTop!==o.scrollTop)?!0:(this.needsClick(r)||(e.preventDefault(),this.sendClick(r,e)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(e){"use strict";return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0},FastClick.prototype.onClick=function(e){"use strict";var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail?!0:(t=this.onMouse(e),t||(this.targetElement=null),t)},FastClick.prototype.destroy=function(){"use strict";var e=this.layer;deviceIsAndroid&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(e){"use strict";var t,n;if("undefined"==typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(n>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===e.style.msTouchAction?!0:!1},FastClick.attach=function(e){"use strict";return new FastClick(e)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick,window.smoothScroll=function(e,t,n){"use strict";var i={speed:500,easing:"easeInOutCubic",updateURL:!1,callbackBefore:function(){},callbackAfter:function(){}},o=function(e,t){for(var n in t)e[n]=t[n];return e},s=function(e,t){return"easeInQuad"==e?t*t:"easeOutQuad"==e?t*(2-t):"easeInOutQuad"==e?.5>t?2*t*t:-1+(4-2*t)*t:"easeInCubic"==e?t*t*t:"easeOutCubic"==e?--t*t*t+1:"easeInOutCubic"==e?.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1:"easeInQuart"==e?t*t*t*t:"easeOutQuart"==e?1- --t*t*t*t:"easeInOutQuart"==e?.5>t?8*t*t*t*t:1-8*--t*t*t*t:"easeInQuint"==e?t*t*t*t*t:"easeOutQuint"==e?1+--t*t*t*t*t:"easeInOutQuint"==e?.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t:t},r=function(e,t){var n=0;if(e.offsetParent)do n+=e.offsetTop,e=e.offsetParent;while(e);return n-=t,n>=0?n:0},a=function(e){if(null===e||e===n)return{};var t={};return e=e.split(";"),e.forEach(function(e){e=e.trim(),""!==e&&(e=e.split(":"),t[e[0]]=e[1].trim())}),t},c=function(e,t){t!==!0&&"true"!==t||!history.pushState||history.pushState({pos:e.id},"",e)},l=function(n,l,u,d){u=o(i,u||{});var h=a(n?n.getAttribute("data-options"):null),f=h.speed||u.speed,p=h.easing||u.easing,v=h.updateURL||u.updateURL,m=55,g=e.pageYOffset,y=r(t.querySelector(l),m),k,E=y-g,C=0,S,w;n&&"A"===n.tagName&&d&&d.preventDefault(),c(l,v);var b=function(i,o,s){var r=e.pageYOffset;(i==o||r==o||e.innerHeight+r>=t.body.scrollHeight)&&(clearInterval(s),u.callbackAfter(n,l))},T=function(){C+=16,S=C/f,S=S>1?1:S,w=g+E*s(p,S),e.scrollTo(0,Math.floor(w)),b(w,y,k)},I=function(){u.callbackBefore(n,l),k=setInterval(T,16)};0===e.pageYOffset&&e.scrollTo(0,0),I()},u=function(n){if("querySelector"in t&&"addEventListener"in e&&Array.prototype.forEach){n=o(i,n||{});var s=t.querySelectorAll("[data-scroll]");Array.prototype.forEach.call(s,function(e,t){e.addEventListener("click",l.bind(null,e,e.getAttribute("href"),n),!1)})}};return{init:u,animateScroll:l}}(window,document),function(){"use strict";if("querySelector"in document&&"addEventListener"in window){var e=function(e,t,n){for(var i=0;i<e.length;i++)t.call(n,i,e[i])};FastClick.attach(document.body),smoothScroll.init();var t=responsiveNav(".nav-collapse",{closeOnNavClick:!0}),n=document.createElement("div");n.className="mask",document.body.appendChild(n),null!==navigator.userAgent.match(/Android/i)&&(document.documentElement.className+=" android");var i=document.querySelector(".nav-collapse ul"),o=i.querySelectorAll("a"),s,r=function(){s=[],e(o,function(e,t){var n=o[e].getAttribute("href").replace("#","");s.push(document.getElementById(n).offsetTop+200)})};r(),window.addEventListener("resize",function(){r()},!1);var a=function(t){e(o,function(e,t){o[e].parentNode.className=""}),o[t].parentNode.className="active"},c=!1;window.addEventListener("scroll",function(){var t=window.pageYOffset,n=document.body,i=document.documentElement,o=window.innerHeight,r=Math.max(n.scrollHeight,n.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight);c||e(s,function(e,n){n>t&&(t+300>n||t+o>=r)&&a(e)})},!1),n.addEventListener("click",function(e){e.preventDefault(),t.close()},!1);var l=function(){setTimeout(function(){c=!1},500)};document.querySelector(".logo").addEventListener("click",function(e){e.preventDefault(),c=!0,a(0),t.close(),history.pushState&&history.pushState("",document.title,window.location.pathname),l()},!1),e(o,function(e,t){o[e].addEventListener("click",function(t){t.preventDefault(),c=!0,a(e);var n=this.getAttribute("href").replace("#",""),i=document.getElementById(n);"home"!==n?(i.removeAttribute("id"),location.hash="#"+n,i.setAttribute("id",n)):history.pushState&&history.pushState("",document.title,window.location.pathname),l()},!1)})}}(),$(document).ready(function(){$(".section-bg").slick({fade:!0,draggable:!1,swipe:!1,lazyLoad:"progressive"})});