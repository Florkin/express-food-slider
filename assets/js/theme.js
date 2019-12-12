/******/!function(e){/******/
/******/
// The require function
/******/
function t(o){/******/
/******/
// Check if module is in cache
/******/
if(i[o])/******/
return i[o].exports;/******/
// Create a new module (and put it into the cache)
/******/
var n=i[o]={/******/
i:o,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}// webpackBootstrap
/******/
// The module cache
/******/
var i={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
t.m=e,/******/
/******/
// expose the module cache
/******/
t.c=i,/******/
/******/
// identity function for calling harmony imports with the correct context
/******/
t.i=function(e){return e},/******/
/******/
// define getter function for harmony exports
/******/
t.d=function(e,i,o){/******/
t.o(e,i)||/******/
Object.defineProperty(e,i,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:o})},/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
t.n=function(e){/******/
var i=e&&e.__esModule?/******/
function(){return e.default}:/******/
function(){return e};/******/
/******/
return t.d(i,"a",i),i},/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},/******/
/******/
// __webpack_public_path__
/******/
t.p="",t(t.s=21)}([/* 0 */
/***/
function(e,t){e.exports=jQuery},/* 1 */
/***/
function(e,t,i){"use strict";
// Shoutout AngusCroll (https://goo.gl/pxwQGp)
function o(e){return{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()}function n(){return{bindType:l,delegateType:l,handle:function(e){if((0,a.default)(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}}function s(e){var t=this,i=!1;return(0,a.default)(this).one(d.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||d.triggerTransitionEnd(t)},e),this}/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
Object.defineProperty(t,"__esModule",{value:!0});var r=i(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),l="transitionend",d={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{
// eslint-disable-next-line no-bitwise
e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var i=e.getAttribute("href");t=i&&"#"!==i?i.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;
// Get transition-duration of the element
var t=(0,a.default)(e).css("transition-duration"),i=(0,a.default)(e).css("transition-delay"),o=parseFloat(t),n=parseFloat(i);
// Return 0 if element or transition duration is not found
// Return 0 if element or transition duration is not found
// If multiple durations are defined, take the first
return o||n?(t=t.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(t)+parseFloat(i))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){(0,a.default)(e).trigger(l)},
// TODO: Remove in v5
supportsTransitionEnd:function(){return Boolean(l)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,i){for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n)){var s=i[n],r=t[n],a=r&&d.isElement(r)?"element":o(r);if(!new RegExp(s).test(a))throw new Error(e.toUpperCase()+': Option "'+n+'" provided type "'+a+'" but expected type "'+s+'".')}},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;
// Can find the shadow root otherwise it'll return the document
if("function"==typeof e.getRootNode){var t=e.getRootNode();return t instanceof ShadowRoot?t:null}
// when we don't find a shadow root
return e instanceof ShadowRoot?e:e.parentNode?d.findShadowRoot(e.parentNode):null}};!function(){a.default.fn.emulateTransitionEnd=s,a.default.event.special[d.TRANSITION_END]=n()}(),t.default=d,e.exports=t.default},/* 2 */
/***/
function(e,t,i){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),s=i(0),r=function(e){return e&&e.__esModule?e:{default:e}}(s),a=function(){function e(){o(this,e)}return n(e,[{key:"init",value:function(){(0,r.default)("[data-slick]").not(".slick-initialized").each(function(){var e=(0,r.default)(this);1!==e.data("count")&&e.slick({prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons left">&#xE314;</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons right">&#xE315;</i></button>'})})}}]),e}();t.default=a,(0,r.default)(window).ready(function(){function e(e){(0,r.default)(window).on("wheel",{$slider:e},t)}function t(e){e.preventDefault();var t=e.data.$slider,i=e.originalEvent.deltaY;0!=(0,r.default)(".slider-nav:hover").length&&(i>0?t.slick("slickNext"):t.slick("slickPrev"))}
// initialize big slider
(0,r.default)(".slick-slides").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav"}),
// append all slider pages and title to create nav slider
(0,r.default)(".slick-slides .slick-track").children(".slick-slide").each(function(){if((0,r.default)(this).find(".h2 span").hasClass("smaller"))if((0,r.default)(this).find(".h2").hasClass("seq"))var e="SEQ - "+(0,r.default)(this).find(".h2 .smaller").html();else var e="CU - "+(0,r.default)(this).find(".h2 .smaller").html();else var e=(0,r.default)(this).find(".h2").html();(0,r.default)(".slider-nav").append('<div class="slide-nav"><p>'+e+"</p></div>")}),(0,r.default)("#startSlider").click(function(e){e.preventDefault(),(0,r.default)(".slick-slides").slick("slickGoTo",1)});
// mouse scroll
var i=(0,r.default)(".slider-nav");i.on("init",function(){e(i)}).slick({slidesToShow:18,slidesToScroll:1,asNavFor:".slick-slides",infinite:!1,centerMode:!1,focusOnSelect:!0,vertical:!0,verticalSwiping:!0})}),e.exports=t.default},/* 3 */
/***/
function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),a=i(19),l=i(0),d=o(l),c=i(4),u=o(c),p=i(1),f=o(p),h="tooltip",g=".bs.tooltip",v=d.default.fn[h],m=new RegExp("(^|\\s)bs-tooltip\\S+","g"),y=["sanitize","whiteList","sanitizeFn"],b={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},w={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},T={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:a.DefaultWhitelist},S={SHOW:"show",OUT:"out"},k={HIDE:"hide"+g,HIDDEN:"hidden"+g,SHOW:"show"+g,SHOWN:"shown"+g,INSERTED:"inserted"+g,CLICK:"click"+g,FOCUSIN:"focusin"+g,FOCUSOUT:"focusout"+g,MOUSEENTER:"mouseenter"+g,MOUSELEAVE:"mouseleave"+g},C={FADE:"fade",SHOW:"show"},x={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},$={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},_=function(){function e(t,i){/**
     * Check for Popper dependency
     * Popper - https://popper.js.org
     */
if(n(this,e),void 0===u.default)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
// private
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,
// Protected
this.element=t,this.config=this._getConfig(i),this.tip=null,this._setListeners()}/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
// Getters
return r(e,[{key:"enable",
// Public
value:function(){this._isEnabled=!0}},{key:"disable",value:function(){this._isEnabled=!1}},{key:"toggleEnabled",value:function(){this._isEnabled=!this._isEnabled}},{key:"toggle",value:function(e){if(this._isEnabled)if(e){var t=this.constructor.DATA_KEY,i=(0,d.default)(e.currentTarget).data(t);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),(0,d.default)(e.currentTarget).data(t,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if((0,d.default)(this.getTipElement()).hasClass(C.SHOW))return void this._leave(null,this);this._enter(null,this)}}},{key:"dispose",value:function(){clearTimeout(this._timeout),d.default.removeData(this.element,this.constructor.DATA_KEY),(0,d.default)(this.element).off(this.constructor.EVENT_KEY),(0,d.default)(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&(0,d.default)(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null}},{key:"show",value:function(){var e=this;if("none"===(0,d.default)(this.element).css("display"))throw new Error("Please use show on visible elements");var t=d.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){(0,d.default)(this.element).trigger(t);var i=f.default.findShadowRoot(this.element),o=d.default.contains(null!==i?i:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!o)return;var n=this.getTipElement(),s=f.default.getUID(this.constructor.NAME);n.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&(0,d.default)(n).addClass(C.FADE);var r="function"==typeof this.config.placement?this.config.placement.call(this,n,this.element):this.config.placement,a=this._getAttachment(r);this.addAttachmentClass(a);var l=this._getContainer();(0,d.default)(n).data(this.constructor.DATA_KEY,this),d.default.contains(this.element.ownerDocument.documentElement,this.tip)||(0,d.default)(n).appendTo(l),(0,d.default)(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u.default(this.element,n,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:x.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),(0,d.default)(n).addClass(C.SHOW),
// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&(0,d.default)(document.body).children().on("mouseover",null,d.default.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,(0,d.default)(e.element).trigger(e.constructor.Event.SHOWN),t===S.OUT&&e._leave(null,e)};if((0,d.default)(this.tip).hasClass(C.FADE)){var p=f.default.getTransitionDurationFromElement(this.tip);(0,d.default)(this.tip).one(f.default.TRANSITION_END,c).emulateTransitionEnd(p)}else c()}}},{key:"hide",value:function(e){var t=this,i=this.getTipElement(),o=d.default.Event(this.constructor.Event.HIDE),n=function(){t._hoverState!==S.SHOW&&i.parentNode&&i.parentNode.removeChild(i),t._cleanTipClass(),t.element.removeAttribute("aria-describedby"),(0,d.default)(t.element).trigger(t.constructor.Event.HIDDEN),null!==t._popper&&t._popper.destroy(),e&&e()};if((0,d.default)(this.element).trigger(o),!o.isDefaultPrevented()){if((0,d.default)(i).removeClass(C.SHOW),
// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&(0,d.default)(document.body).children().off("mouseover",null,d.default.noop),this._activeTrigger[$.CLICK]=!1,this._activeTrigger[$.FOCUS]=!1,this._activeTrigger[$.HOVER]=!1,(0,d.default)(this.tip).hasClass(C.FADE)){var s=f.default.getTransitionDurationFromElement(i);(0,d.default)(i).one(f.default.TRANSITION_END,n).emulateTransitionEnd(s)}else n();this._hoverState=""}}},{key:"update",value:function(){null!==this._popper&&this._popper.scheduleUpdate()}},{key:"isWithContent",value:function(){return Boolean(this.getTitle())}},{key:"addAttachmentClass",value:function(e){(0,d.default)(this.getTipElement()).addClass("bs-tooltip-"+e)}},{key:"getTipElement",value:function(){return this.tip=this.tip||(0,d.default)(this.config.template)[0],this.tip}},{key:"setContent",value:function(){var e=this.getTipElement();this.setElementContent((0,d.default)(e.querySelectorAll(x.TOOLTIP_INNER)),this.getTitle()),(0,d.default)(e).removeClass(C.FADE+" "+C.SHOW)}},{key:"setElementContent",value:function(e,t){if("object"==typeof t&&(t.nodeType||t.jquery))
// Content is a DOM node or a jQuery
return void(this.config.html?(0,d.default)(t).parent().is(e)||e.empty().append(t):e.text((0,d.default)(t).text()));this.config.html?(this.config.sanitize&&(t=(0,a.sanitizeHtml)(t,this.config.whiteList,this.config.sanitizeFn)),e.html(t)):e.text(t)}},{key:"getTitle",value:function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e}},{key:"_getOffset",value:function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=s({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t}},{key:"_getContainer",value:function(){return!1===this.config.container?document.body:f.default.isElement(this.config.container)?(0,d.default)(this.config.container):(0,d.default)(document).find(this.config.container)}},{key:"_getAttachment",value:function(e){return w[e.toUpperCase()]}},{key:"_setListeners",value:function(){var e=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)(0,d.default)(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(t!==$.MANUAL){var i=t===$.HOVER?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,o=t===$.HOVER?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;(0,d.default)(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(o,e.config.selector,function(t){return e._leave(t)})}}),(0,d.default)(this.element).closest(".modal").on("hide.bs.modal",function(){e.element&&e.hide()}),this.config.selector?this.config=s({},this.config,{trigger:"manual",selector:""}):this._fixTitle()}},{key:"_fixTitle",value:function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))}},{key:"_enter",value:function(e,t){var i=this.constructor.DATA_KEY;return t=t||(0,d.default)(e.currentTarget).data(i),t||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),(0,d.default)(e.currentTarget).data(i,t)),e&&(t._activeTrigger["focusin"===e.type?$.FOCUS:$.HOVER]=!0),(0,d.default)(t.getTipElement()).hasClass(C.SHOW)||t._hoverState===S.SHOW?void(t._hoverState=S.SHOW):(clearTimeout(t._timeout),t._hoverState=S.SHOW,t.config.delay&&t.config.delay.show?void(t._timeout=setTimeout(function(){t._hoverState===S.SHOW&&t.show()},t.config.delay.show)):void t.show())}},{key:"_leave",value:function(e,t){var i=this.constructor.DATA_KEY;if(t=t||(0,d.default)(e.currentTarget).data(i),t||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),(0,d.default)(e.currentTarget).data(i,t)),e&&(t._activeTrigger["focusout"===e.type?$.FOCUS:$.HOVER]=!1),!t._isWithActiveTrigger()){if(clearTimeout(t._timeout),t._hoverState=S.OUT,!t.config.delay||!t.config.delay.hide)return void t.hide();t._timeout=setTimeout(function(){t._hoverState===S.OUT&&t.hide()},t.config.delay.hide)}}},{key:"_isWithActiveTrigger",value:function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}},{key:"_getConfig",value:function(e){var t=(0,d.default)(this.element).data();return Object.keys(t).forEach(function(e){-1!==y.indexOf(e)&&delete t[e]}),e=s({},this.constructor.Default,t,"object"==typeof e&&e?e:{}),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),f.default.typeCheckConfig(h,e,this.constructor.DefaultType),e.sanitize&&(e.template=(0,a.sanitizeHtml)(e.template,e.whiteList,e.sanitizeFn)),e}},{key:"_getDelegateConfig",value:function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e}},{key:"_cleanTipClass",value:function(){var e=(0,d.default)(this.getTipElement()),t=e.attr("class").match(m);null!==t&&t.length&&e.removeClass(t.join(""))}},{key:"_handlePopperPlacementChange",value:function(e){var t=e.instance;this.tip=t.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))}},{key:"_fixTransition",value:function(){var e=this.getTipElement(),t=this.config.animation;null===e.getAttribute("x-placement")&&((0,d.default)(e).removeClass(C.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=t)}}],[{key:"_jQueryInterface",value:function(t){return this.each(function(){var i=(0,d.default)(this).data("bs.tooltip"),o="object"==typeof t&&t;if((i||!/dispose|hide/.test(t))&&(i||(i=new e(this,o),(0,d.default)(this).data("bs.tooltip",i)),"string"==typeof t)){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t]()}})}},{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return T}},{key:"NAME",get:function(){return h}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return k}},{key:"EVENT_KEY",get:function(){return g}},{key:"DefaultType",get:function(){return b}}]),e}();d.default.fn[h]=_._jQueryInterface,d.default.fn[h].Constructor=_,d.default.fn[h].noConflict=function(){return d.default.fn[h]=v,_._jQueryInterface},t.default=_,e.exports=t.default},/* 4 */
/***/
function(e,t,i){"use strict";/* WEBPACK VAR INJECTION */
(function(i){function o(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function n(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},fe))}}/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function s(e){var t={};return e&&"[object Function]"===t.toString.call(e)}/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function r(e,t){if(1!==e.nodeType)return[];
// NOTE: 1 DOM access here
var i=e.ownerDocument.defaultView,o=i.getComputedStyle(e,null);return t?o[t]:o}/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function a(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function l(e){for(var t=!0;t;){var i=e;
// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(t=!1,!i)return document.body;switch(i.nodeName){case"HTML":case"BODY":return i.ownerDocument.body;case"#document":return i.body}
// Firefox want us to check `-x` and `-y` variations as well
var o=r(i),n=o.overflow,s=o.overflowX,l=o.overflowY;if(/(auto|scroll|overlay)/.test(n+l+s))return i;e=a(i),t=!0,o=n=s=l=void 0}}/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function d(e){return e&&e.referenceNode?e.referenceNode:e}/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function c(e){return 11===e?ve:10===e?me:ve||me}/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function u(e){for(var t=!0;t;){var i=e;if(t=!1,!i)return document.documentElement;
// Skip hidden elements which don't have an offsetParent
for(var o=c(10)?document.body:null,n=i.offsetParent||null;n===o&&i.nextElementSibling;)n=(i=i.nextElementSibling).offsetParent;var s=n&&n.nodeName;if(!s||"BODY"===s||"HTML"===s)return i?i.ownerDocument.documentElement:document.documentElement;
// .offsetParent will return the closest TH, TD or TABLE in case
// no offsetParent is present, I hate this job...
if(-1===["TH","TD","TABLE"].indexOf(n.nodeName)||"static"!==r(n,"position"))return n;e=n,t=!0,o=n=s=void 0}}function p(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||u(e.firstElementChild)===e)}/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function f(e){for(var t=!0;t;){var i=e;t=!1;{if(null===i.parentNode)return i;e=i.parentNode,t=!0}}}/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function h(e,t){for(var i=!0;i;){var o=e,n=t;
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(i=!1,!(o&&o.nodeType&&n&&n.nodeType))return document.documentElement;
// Here we make sure to give as "start" the element that comes first in the DOM
var s=o.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING,r=s?o:n,a=s?n:o,l=document.createRange();l.setStart(r,0),l.setEnd(a,0);var d=l.commonAncestorContainer;
// Both nodes are inside #document
if(o!==d&&n!==d||r.contains(a))return p(d)?d:u(d);
// one of the nodes is inside shadowDOM, find which one
var c=f(o);c.host?(e=c.host,t=n,i=!0,s=r=a=l=d=c=void 0):(e=o,t=f(n).host,i=!0,s=r=a=l=d=c=void 0)}}/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",i="top"===t?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"===o||"HTML"===o){var n=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||n)[i]}return e[i]}/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function v(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=g(t,"top"),n=g(t,"left"),s=i?-1:1;return e.top+=o*s,e.bottom+=o*s,e.left+=n*s,e.right+=n*s,e}/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */
function m(e,t){var i="x"===t?"Left":"Top",o="Left"===i?"Right":"Bottom";return parseFloat(e["border"+i+"Width"],10)+parseFloat(e["border"+o+"Width"],10)}function y(e,t,i,o){return Math.max(t["offset"+e],t["scroll"+e],i["client"+e],i["offset"+e],i["scroll"+e],c(10)?parseInt(i["offset"+e])+parseInt(o["margin"+("Height"===e?"Top":"Left")])+parseInt(o["margin"+("Height"===e?"Bottom":"Right")]):0)}function b(e){var t=e.body,i=e.documentElement,o=c(10)&&getComputedStyle(i);return{height:y("Height",t,i,o),width:y("Width",t,i,o)}}/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function w(e){return Te({},e,{right:e.left+e.width,bottom:e.top+e.height})}/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function T(e){var t={};
// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(c(10)){t=e.getBoundingClientRect();var i=g(e,"top"),o=g(e,"left");t.top+=i,t.left+=o,t.bottom+=i,t.right+=o}else t=e.getBoundingClientRect()}catch(e){}var n={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},s="HTML"===e.nodeName?b(e.ownerDocument):{},a=s.width||e.clientWidth||n.width,l=s.height||e.clientHeight||n.height,d=e.offsetWidth-a,u=e.offsetHeight-l;
// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(d||u){var p=r(e);d-=m(p,"x"),u-=m(p,"y"),n.width-=d,n.height-=u}return w(n)}function S(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=c(10),n="HTML"===t.nodeName,s=T(e),a=T(t),d=l(e),u=r(t),p=parseFloat(u.borderTopWidth,10),f=parseFloat(u.borderLeftWidth,10);
// In cases where the parent is fixed, we must ignore negative scroll in offset calc
i&&n&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var h=w({top:s.top-a.top-p,left:s.left-a.left-f,width:s.width,height:s.height});
// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(h.marginTop=0,h.marginLeft=0,!o&&n){var g=parseFloat(u.marginTop,10),m=parseFloat(u.marginLeft,10);h.top-=p-g,h.bottom-=p-g,h.left-=f-m,h.right-=f-m,
// Attach marginTop and marginLeft because in some circumstances we may need them
h.marginTop=g,h.marginLeft=m}return(o&&!i?t.contains(d):t===d&&"BODY"!==d.nodeName)&&(h=v(h,t)),h}function k(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.ownerDocument.documentElement,o=S(e,i),n=Math.max(i.clientWidth,window.innerWidth||0),s=Math.max(i.clientHeight,window.innerHeight||0),r=t?0:g(i),a=t?0:g(i,"left");return w({top:r-o.top+o.marginTop,left:a-o.left+o.marginLeft,width:n,height:s})}/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function C(e){for(var t=!0;t;){var i=e;t=!1;var o=i.nodeName;if("BODY"===o||"HTML"===o)return!1;if("fixed"===r(i,"position"))return!0;var n=a(i);if(!n)return!1;e=n,t=!0,o=n=void 0}}/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */
function x(e){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!e||!e.parentElement||c())return document.documentElement;for(var t=e.parentElement;t&&"none"===r(t,"transform");)t=t.parentElement;return t||document.documentElement}/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function $(e,t,i,o){var n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},r=n?x(e):h(e,d(t));
// Handle viewport case
if("viewport"===o)s=k(r,n);else{
// Handle other cases based on DOM element used as boundaries
var c=void 0;"scrollParent"===o?(c=l(a(t)),"BODY"===c.nodeName&&(c=e.ownerDocument.documentElement)):c="window"===o?e.ownerDocument.documentElement:o;var u=S(c,r,n);
// In case of HTML, we need a different computation
if("HTML"!==c.nodeName||C(r))
// for all the other DOM elements, this one is good
s=u;else{var p=b(e.ownerDocument),f=p.height,g=p.width;s.top+=u.top-u.marginTop,s.bottom=f+u.top,s.left+=u.left-u.marginLeft,s.right=g+u.left}}
// Add paddings
i=i||0;var v="number"==typeof i;return s.left+=v?i:i.left||0,s.top+=v?i:i.top||0,s.right-=v?i:i.right||0,s.bottom-=v?i:i.bottom||0,s}function _(e){return e.width*e.height}/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function E(e,t,i,o,n){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var r=$(i,o,s,n),a={top:{width:r.width,height:t.top-r.top},right:{width:r.right-t.right,height:r.height},bottom:{width:r.width,height:r.bottom-t.bottom},left:{width:t.left-r.left,height:r.height}},l=Object.keys(a).map(function(e){return Te({key:e},a[e],{area:_(a[e])})}).sort(function(e,t){return t.area-e.area}),d=l.filter(function(e){var t=e.width,o=e.height;return t>=i.clientWidth&&o>=i.clientHeight}),c=d.length>0?d[0].key:l[0].key,u=e.split("-")[1];return c+(u?"-"+u:"")}/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function O(e,t,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return S(i,o?x(t):h(t,d(i)),o)}/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function A(e){var t=e.ownerDocument.defaultView,i=t.getComputedStyle(e),o=parseFloat(i.marginTop||0)+parseFloat(i.marginBottom||0),n=parseFloat(i.marginLeft||0)+parseFloat(i.marginRight||0);return{width:e.offsetWidth+n,height:e.offsetHeight+o}}/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function P(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function I(e,t,i){i=i.split("-")[0];
// Get popper node sizes
var o=A(e),n={width:o.width,height:o.height},s=-1!==["right","left"].indexOf(i),r=s?"top":"left",a=s?"left":"top",l=s?"height":"width",d=s?"width":"height";return n[r]=t[r]+t[l]/2-o[l]/2,n[a]=i===a?t[a]-o[d]:t[P(a)],n}/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function D(e,t){
// use native find if supported
// use native find if supported
return Array.prototype.find?e.find(t):e.filter(t)[0]}/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function L(e,t,i){
// use native findIndex if supported
if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===i});
// use `find` + `indexOf` if `findIndex` isn't supported
var o=D(e,function(e){return e[t]===i});return e.indexOf(o)}/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function H(e,t,i){return(void 0===i?e:e.slice(0,L(e,"name",i))).forEach(function(e){e.function;var i=e.function||e.fn;// eslint-disable-line dot-notation
e.enabled&&s(i)&&(
// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
t.offsets.popper=w(t.offsets.popper),t.offsets.reference=w(t.offsets.reference),t=i(t,e))}),t}/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function M(){
// if popper is destroyed, don't perform any further update
if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};
// compute reference element offsets
e.offsets.reference=O(this.state,this.popper,this.reference,this.options.positionFixed),
// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
e.placement=E(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),
// store the computed placement inside `originalPlacement`
e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,
// compute the popper offsets
e.offsets.popper=I(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",
// run the modifiers
e=H(this.modifiers,e),
// the first `update` will call `onCreate` callback
// the other ones will call `onUpdate` callback
this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function N(e,t){return e.some(function(e){var i=e.name;return e.enabled&&i===t})}/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function F(e){for(var t=[!1,"ms","Webkit","Moz","O"],i=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var n=t[o],s=n?""+n+i:e;if(void 0!==document.body.style[s])return s}return null}/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function j(){
// touch DOM only if `applyStyle` modifier is enabled
// remove the popper if user explicitly asked for the deletion on destroy
// do not use `remove` because IE11 doesn't support it
return this.state.isDestroyed=!0,N(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[F("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function z(e){var t=e.ownerDocument;return t?t.defaultView:window}function W(e,t,i,o){var n="BODY"===e.nodeName,s=n?e.ownerDocument.defaultView:e;s.addEventListener(t,i,{passive:!0}),n||W(l(s.parentNode),t,i,o),o.push(s)}/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function R(e,t,i,o){
// Resize event listener on window
i.updateBound=o,z(e).addEventListener("resize",i.updateBound,{passive:!0});
// Scroll event listener on scroll parents
var n=l(e);return W(n,"scroll",i.updateBound,i.scrollParents),i.scrollElement=n,i.eventsEnabled=!0,i}/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function B(){this.state.eventsEnabled||(this.state=R(this.reference,this.options,this.state,this.scheduleUpdate))}/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function U(e,t){
// Remove resize event listener on window
// Remove scroll event listener on scroll parents
// Reset state
return z(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function q(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=U(this.reference,this.state))}/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function Y(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function V(e,t){Object.keys(t).forEach(function(i){var o="";
// add unit if the value is numeric and is one of the following
-1!==["width","height","top","right","bottom","left"].indexOf(i)&&Y(t[i])&&(o="px"),e.style[i]=t[i]+o})}/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function X(e,t){Object.keys(t).forEach(function(i){!1!==t[i]?e.setAttribute(i,t[i]):e.removeAttribute(i)})}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function G(e){
// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
// if arrowElement is defined and arrowStyles has some properties
return V(e.instance.popper,e.styles),X(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e}/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function K(e,t,i,o,n){
// compute reference element offsets
var s=O(n,t,e,i.positionFixed),r=E(i.placement,s,t,e,i.modifiers.flip.boundariesElement,i.modifiers.flip.padding);
// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
return t.setAttribute("x-placement",r),V(t,{position:i.positionFixed?"fixed":"absolute"}),i}/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function Q(e,t){var i=e.offsets,o=i.popper,n=i.reference,s=Math.round,r=Math.floor,a=function(e){return e},l=s(n.width),d=s(o.width),c=-1!==["left","right"].indexOf(e.placement),u=-1!==e.placement.indexOf("-"),p=l%2==d%2,f=l%2==1&&d%2==1,h=t?c||u||p?s:r:a,g=t?s:a;return{left:h(f&&!u&&t?o.left-1:o.left),top:g(o.top),bottom:g(o.bottom),right:h(o.right)}}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function Z(e,t){var i=t.x,o=t.y,n=e.offsets.popper,s=D(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration,r=void 0!==s?s:t.gpuAcceleration,a=u(e.instance.popper),l=T(a),d={position:n.position},c=Q(e,window.devicePixelRatio<2||!Se),p="bottom"===i?"top":"bottom",f="right"===o?"left":"right",h=F("transform"),g=void 0,v=void 0;if(v="bottom"===p?
// when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
// and not the bottom of the html element
"HTML"===a.nodeName?-a.clientHeight+c.bottom:-l.height+c.bottom:c.top,g="right"===f?"HTML"===a.nodeName?-a.clientWidth+c.right:-l.width+c.right:c.left,r&&h)d[h]="translate3d("+g+"px, "+v+"px, 0)",d[p]=0,d[f]=0,d.willChange="transform";else{
// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
var m="bottom"===p?-1:1,y="right"===f?-1:1;d[p]=v*m,d[f]=g*y,d.willChange=p+", "+f}
// Attributes
var b={"x-placement":e.placement};
// Update `data` attributes, styles and arrowStyles
return e.attributes=Te({},b,e.attributes),e.styles=Te({},d,e.styles),e.arrowStyles=Te({},e.offsets.arrow,e.arrowStyles),e}/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function J(e,t,i){var o=D(e,function(e){return e.name===t}),n=!!o&&e.some(function(e){return e.name===i&&e.enabled&&e.order<o.order});if(!n);return n}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function ee(e,t){var i;
// arrow depends on keepTogether in order to work
if(!J(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;
// if arrowElement is a string, suppose it's a CSS selector
if("string"==typeof o){
// if arrowElement is not found, don't run the modifier
if(!(o=e.instance.popper.querySelector(o)))return e}else
// if the arrowElement isn't a query selector we must check that the
// provided DOM node is child of its popper node
if(!e.instance.popper.contains(o))return e;var n=e.placement.split("-")[0],s=e.offsets,a=s.popper,l=s.reference,d=-1!==["left","right"].indexOf(n),c=d?"height":"width",u=d?"Top":"Left",p=u.toLowerCase(),f=d?"left":"top",h=d?"bottom":"right",g=A(o)[c];
//
// extends keepTogether behavior making sure the popper and its
// reference have enough pixels in conjunction
//
// top/left side
l[h]-g<a[p]&&(e.offsets.popper[p]-=a[p]-(l[h]-g)),
// bottom/right side
l[p]+g>a[h]&&(e.offsets.popper[p]+=l[p]+g-a[h]),e.offsets.popper=w(e.offsets.popper);
// compute center of the popper
var v=l[p]+l[c]/2-g/2,m=r(e.instance.popper),y=parseFloat(m["margin"+u],10),b=parseFloat(m["border"+u+"Width"],10),T=v-e.offsets.popper[p]-y-b;
// prevent arrowElement from being placed not contiguously to its popper
return T=Math.max(Math.min(a[c]-g,T),0),e.arrowElement=o,e.offsets.arrow=(i={},we(i,p,Math.round(T)),we(i,f,""),i),e}/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function te(e){return"end"===e?"start":"start"===e?"end":e}/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function ie(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=Ce.indexOf(e),o=Ce.slice(i+1).concat(Ce.slice(0,i));return t?o.reverse():o}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function oe(e,t){
// if `inner` modifier is enabled, we can't use the `flip` modifier
if(N(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)
// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
return e;var i=$(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],n=P(o),s=e.placement.split("-")[1]||"",r=[];switch(t.behavior){case xe.FLIP:r=[o,n];break;case xe.CLOCKWISE:r=ie(o);break;case xe.COUNTERCLOCKWISE:r=ie(o,!0);break;default:r=t.behavior}return r.forEach(function(a,l){if(o!==a||r.length===l+1)return e;o=e.placement.split("-")[0],n=P(o);var d=e.offsets.popper,c=e.offsets.reference,u=Math.floor,p="left"===o&&u(d.right)>u(c.left)||"right"===o&&u(d.left)<u(c.right)||"top"===o&&u(d.bottom)>u(c.top)||"bottom"===o&&u(d.top)<u(c.bottom),f=u(d.left)<u(i.left),h=u(d.right)>u(i.right),g=u(d.top)<u(i.top),v=u(d.bottom)>u(i.bottom),m="left"===o&&f||"right"===o&&h||"top"===o&&g||"bottom"===o&&v,y=-1!==["top","bottom"].indexOf(o),b=!!t.flipVariations&&(y&&"start"===s&&f||y&&"end"===s&&h||!y&&"start"===s&&g||!y&&"end"===s&&v),w=!!t.flipVariationsByContent&&(y&&"start"===s&&h||y&&"end"===s&&f||!y&&"start"===s&&v||!y&&"end"===s&&g),T=b||w;(p||m||T)&&(
// this boolean to detect any flip loop
e.flipped=!0,(p||m)&&(o=r[l+1]),T&&(s=te(s)),e.placement=o+(s?"-"+s:""),
// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
e.offsets.popper=Te({},e.offsets.popper,I(e.instance.popper,e.offsets.reference,e.placement)),e=H(e.instance.modifiers,e,"flip"))}),e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function ne(e){var t=e.offsets,i=t.popper,o=t.reference,n=e.placement.split("-")[0],s=Math.floor,r=-1!==["top","bottom"].indexOf(n),a=r?"right":"bottom",l=r?"left":"top",d=r?"width":"height";return i[a]<s(o[l])&&(e.offsets.popper[l]=s(o[l])-i[d]),i[l]>s(o[a])&&(e.offsets.popper[l]=s(o[a])),e}/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function se(e,t,i,o){
// separate value from unit
var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),s=+n[1],r=n[2];
// If it's not a number it's an operator, I guess
if(!s)return e;if(0===r.indexOf("%")){var a=void 0;switch(r){case"%p":a=i;break;case"%":case"%r":default:a=o}return w(a)[t]/100*s}if("vh"===r||"vw"===r){return("vh"===r?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*s}
// if is an explicit pixel unit, we get rid of the unit and keep the value
// if is an implicit unit, it's px, and we return just the value
return s}/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function re(e,t,i,o){var n=[0,0],s=-1!==["right","left"].indexOf(o),r=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=r.indexOf(D(r,function(e){return-1!==e.search(/,|\s/)}));r[a]&&r[a].indexOf(",");
// If divider is found, we divide the list of values and operands to divide
// them by ofset X and Y.
var l=/\s*,\s*|\s+/,d=-1!==a?[r.slice(0,a).concat([r[a].split(l)[0]]),[r[a].split(l)[1]].concat(r.slice(a+1))]:[r];
// Convert the values with units to absolute pixels to allow our computations
// Loop trough the offsets arrays and execute the operations
return d=d.map(function(e,o){
// Most of the units rely on the orientation of the popper
var n=(1===o?!s:s)?"height":"width",r=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,r=!0,e):r?(e[e.length-1]+=t,r=!1,e):e.concat(t)},[]).map(function(e){return se(e,n,t,i)})}),d.forEach(function(e,t){e.forEach(function(i,o){Y(i)&&(n[t]+=i*("-"===e[o-1]?-1:1))})}),n}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function ae(e,t){var i=t.offset,o=e.placement,n=e.offsets,s=n.popper,r=n.reference,a=o.split("-")[0],l=void 0;return l=Y(+i)?[+i,0]:re(i,s,r,a),"left"===a?(s.top+=l[0],s.left-=l[1]):"right"===a?(s.top+=l[0],s.left+=l[1]):"top"===a?(s.left+=l[0],s.top-=l[1]):"bottom"===a&&(s.left+=l[0],s.top+=l[1]),e.popper=s,e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function le(e,t){var i=t.boundariesElement||u(e.instance.popper);
// If offsetParent is the reference element, we really want to
// go one step up and use the next offsetParent as reference to
// avoid to make this modifier completely useless and look like broken
e.instance.reference===i&&(i=u(i));
// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var o=F("transform"),n=e.instance.popper.style,s=n.top,r=n.left,a=n[o];n.top="",n.left="",n[o]="";var l=$(e.instance.popper,e.instance.reference,t.padding,i,e.positionFixed);
// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
n.top=s,n.left=r,n[o]=a,t.boundaries=l;var d=t.priority,c=e.offsets.popper,p={primary:function(e){var i=c[e];return c[e]<l[e]&&!t.escapeWithReference&&(i=Math.max(c[e],l[e])),we({},e,i)},secondary:function(e){var i="right"===e?"left":"top",o=c[i];return c[e]>l[e]&&!t.escapeWithReference&&(o=Math.min(c[i],l[e]-("right"===e?c.width:c.height))),we({},i,o)}};return d.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";c=Te({},c,p[t](e))}),e.offsets.popper=c,e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function de(e){var t=e.placement,i=t.split("-")[0],o=t.split("-")[1];
// if shift shiftvariation is specified, run the modifier
if(o){var n=e.offsets,s=n.reference,r=n.popper,a=-1!==["bottom","top"].indexOf(i),l=a?"left":"top",d=a?"width":"height",c={start:we({},l,s[l]),end:we({},l,s[l]+s[d]-r[d])};e.offsets.popper=Te({},r,c[o])}return e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function ce(e){if(!J(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,i=D(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<i.top||t.left>i.right||t.top>i.bottom||t.right<i.left){
// Avoid unnecessary DOM access if visibility hasn't changed
if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{
// Avoid unnecessary DOM access if visibility hasn't changed
if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function ue(e){var t=e.placement,i=t.split("-")[0],o=e.offsets,n=o.popper,s=o.reference,r=-1!==["left","right"].indexOf(i),a=-1===["top","left"].indexOf(i);return n[r?"left":"top"]=s[i]-(a?n[r?"width":"height"]:0),e.placement=P(t),e.offsets.popper=w(n),e}/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
Object.defineProperty(t,"__esModule",{value:!0});var pe="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,fe=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(pe&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}(),he=pe&&window.Promise,ge=he?o:n,ve=pe&&!(!window.MSInputMethodContext||!document.documentMode),me=pe&&/MSIE 10/.test(navigator.userAgent),ye=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},be=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),we=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e},Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Se=pe&&/Firefox/i.test(navigator.userAgent),ke=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Ce=ke.slice(3),xe={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},$e={/**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
shift:{/** @prop {number} order=100 - Index used to define the order of execution */
order:100,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:de},/**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
offset:{/** @prop {number} order=200 - Index used to define the order of execution */
order:200,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:ae,/** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
offset:0},/**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
preventOverflow:{/** @prop {number} order=300 - Index used to define the order of execution */
order:300,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:le,/**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
priority:["left","right","top","bottom"],/**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
boundariesElement:"scrollParent"},/**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
keepTogether:{/** @prop {number} order=400 - Index used to define the order of execution */
order:400,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:ne},/**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
arrow:{/** @prop {number} order=500 - Index used to define the order of execution */
order:500,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:ee,/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
element:"[x-arrow]"},/**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
flip:{/** @prop {number} order=600 - Index used to define the order of execution */
order:600,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:oe,/**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
behavior:"flip",/**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
boundariesElement:"viewport",/**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
flipVariations:!1,/**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
flipVariationsByContent:!1},/**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
inner:{/** @prop {number} order=700 - Index used to define the order of execution */
order:700,/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
enabled:!1,/** @prop {ModifierFn} */
fn:ue},/**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
hide:{/** @prop {number} order=800 - Index used to define the order of execution */
order:800,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:ce},/**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
computeStyle:{/** @prop {number} order=850 - Index used to define the order of execution */
order:850,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:Z,/**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
gpuAcceleration:!0,/**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
x:"bottom",/**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
y:"right"},/**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
applyStyle:{/** @prop {number} order=900 - Index used to define the order of execution */
order:900,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,/** @prop {ModifierFn} */
fn:G,/** @prop {Function} */
onLoad:K,/**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
gpuAcceleration:void 0}},_e={/**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
placement:"bottom",/**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
positionFixed:!1,/**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
eventsEnabled:!0,/**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
removeOnDestroy:!1,/**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
onCreate:function(){},/**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
onUpdate:function(){},/**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
modifiers:$e},Ee=function(){/**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
function e(t,i){var o=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ye(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},
// make update() debounced, so that it only runs at most once-per-tick
this.update=ge(this.update.bind(this)),
// with {} we create a new object with the options inside it
this.options=Te({},e.Defaults,n),
// init state
this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},
// get reference and popper elements (allow jQuery wrappers)
this.reference=t&&t.jquery?t[0]:t,this.popper=i&&i.jquery?i[0]:i,
// Deep merge modifiers options
this.options.modifiers={},Object.keys(Te({},e.Defaults.modifiers,n.modifiers)).forEach(function(t){o.options.modifiers[t]=Te({},e.Defaults.modifiers[t]||{},n.modifiers?n.modifiers[t]:{})}),
// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map(function(e){return Te({name:e},o.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),
// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach(function(e){e.enabled&&s(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),
// fire the first update to position the popper in the right place
this.update();var r=this.options.eventsEnabled;r&&
// setup event listeners, they will take care of update the position in specific situations
this.enableEventListeners(),this.state.eventsEnabled=r}
// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
return be(e,[{key:"update",value:function(){return M.call(this)}},{key:"destroy",value:function(){return j.call(this)}},{key:"enableEventListeners",value:function(){return B.call(this)}},{key:"disableEventListeners",value:function(){return q.call(this)}}]),e}();/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */
Ee.Utils=("undefined"!=typeof window?window:i).PopperUtils,Ee.placements=ke,Ee.Defaults=_e,t.default=Ee,
//# sourceMappingURL=popper.js.map
e.exports=t.default}).call(t,i(20))},/* 5 */
/***/
function(e,t,i){"use strict";i(1),i(11),i(12),i(13),i(14),i(15),i(16),i(17),i(18),i(3),
// import 'bootstrap-touchspin';
i(7),i(9),i(10);var o=i(2);!/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
function(e){e&&e.__esModule}(o);i(8),i(2)},/* 6 */
/***/
function(e,t){},/* 7 */
/***/
function(e,t,i){"use strict";var o,n,s;/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */
!function(r){n=[i(0)],o=r,void 0!==(s="function"==typeof o?o.apply(t,n):o)&&(e.exports=s)}(function(e){var t,i,o={interval:100,sensitivity:6,timeout:0},n=0,s=function(e){t=e.pageX,i=e.pageY},r=function e(o,n,r,a){if(Math.sqrt((r.pX-t)*(r.pX-t)+(r.pY-i)*(r.pY-i))<a.sensitivity)return n.off(r.event,s),delete r.timeoutId,r.isActive=!0,o.pageX=t,o.pageY=i,delete r.pX,delete r.pY,a.over.apply(n[0],[o]);r.pX=t,r.pY=i,r.timeoutId=setTimeout(function(){e(o,n,r,a)},a.interval)},a=function(e,t,i,o){return delete t.data("hoverIntent")[i.id],o.apply(t[0],[e])};e.fn.hoverIntent=function(t,i,l){var d=n++,c=e.extend({},o);e.isPlainObject(t)?(c=e.extend(c,t),e.isFunction(c.out)||(c.out=c.over)):c=e.isFunction(i)?e.extend(c,{over:t,out:i,selector:l}):e.extend(c,{over:t,out:t,selector:i});var u=function(t){var i=e.extend({},t),o=e(this),n=o.data("hoverIntent");n||o.data("hoverIntent",n={});var l=n[d];l||(n[d]=l={id:d}),l.timeoutId&&(l.timeoutId=clearTimeout(l.timeoutId));var u=l.event="mousemove.hoverIntent.hoverIntent"+d;if("mouseenter"===t.type){if(l.isActive)return;l.pX=i.pageX,l.pY=i.pageY,o.off(u,s).on(u,s),l.timeoutId=setTimeout(function(){r(i,o,l,c)},c.interval)}else{if(!l.isActive)return;o.off(u,s),l.timeoutId=setTimeout(function(){a(i,o,l,c.out)},c.timeout)}};return this.on({"mouseenter.hoverIntent":u,"mouseleave.hoverIntent":u},c.selector)}})},/* 8 */
/***/
function(e,t,i){"use strict";var o,n,s;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(r){n=[i(0)],o=r,void 0!==(s="function"==typeof o?o.apply(t,n):o)&&(e.exports=s)}(function(e){var t=window.Slick||{};t=function(){function t(t,o){var n,s=this;s.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:e(t),appendDots:e(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button"><i class="material-icons left">&#xE314;</i></button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button"><i class="material-icons right">&#xE315;</i></button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(t,i){return e('<button type="button" />').text(i+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},s.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(s,s.initials),s.activeBreakpoint=null,s.animType=null,s.animProp=null,s.breakpoints=[],s.breakpointSettings=[],s.cssTransitions=!1,s.focussed=!1,s.interrupted=!1,s.hidden="hidden",s.paused=!0,s.positionProp=null,s.respondTo=null,s.rowCount=1,s.shouldClick=!0,s.$slider=e(t),s.$slidesCache=null,s.transformType=null,s.transitionType=null,s.visibilityChange="visibilitychange",s.windowWidth=0,s.windowTimer=null,n=e(t).data("slick")||{},s.options=e.extend({},s.defaults,o,n),s.currentSlide=s.options.initialSlide,s.originalSettings=s.options,void 0!==document.mozHidden?(s.hidden="mozHidden",s.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(s.hidden="webkitHidden",s.visibilityChange="webkitvisibilitychange"),s.autoPlay=e.proxy(s.autoPlay,s),s.autoPlayClear=e.proxy(s.autoPlayClear,s),s.autoPlayIterator=e.proxy(s.autoPlayIterator,s),s.changeSlide=e.proxy(s.changeSlide,s),s.clickHandler=e.proxy(s.clickHandler,s),s.selectHandler=e.proxy(s.selectHandler,s),s.setPosition=e.proxy(s.setPosition,s),s.swipeHandler=e.proxy(s.swipeHandler,s),s.dragHandler=e.proxy(s.dragHandler,s),s.keyHandler=e.proxy(s.keyHandler,s),s.instanceUid=i++,s.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,s.registerBreakpoints(),s.init(!0)}var i=0;return t}(),t.prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.addSlide=t.prototype.slickAdd=function(t,i,o){var n=this;if("boolean"==typeof i)o=i,i=null;else if(i<0||i>=n.slideCount)return!1;n.unload(),"number"==typeof i?0===i&&0===n.$slides.length?e(t).appendTo(n.$slideTrack):o?e(t).insertBefore(n.$slides.eq(i)):e(t).insertAfter(n.$slides.eq(i)):!0===o?e(t).prependTo(n.$slideTrack):e(t).appendTo(n.$slideTrack),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slides.each(function(t,i){e(i).attr("data-slick-index",t)}),n.$slidesCache=n.$slides,n.reinit()},t.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},t.prototype.animateSlide=function(t,i){var o={},n=this;n.animateHeight(),!0===n.options.rtl&&!1===n.options.vertical&&(t=-t),!1===n.transformsEnabled?!1===n.options.vertical?n.$slideTrack.animate({left:t},n.options.speed,n.options.easing,i):n.$slideTrack.animate({top:t},n.options.speed,n.options.easing,i):!1===n.cssTransitions?(!0===n.options.rtl&&(n.currentLeft=-n.currentLeft),e({animStart:n.currentLeft}).animate({animStart:t},{duration:n.options.speed,easing:n.options.easing,step:function(e){e=Math.ceil(e),!1===n.options.vertical?(o[n.animType]="translate("+e+"px, 0px)",n.$slideTrack.css(o)):(o[n.animType]="translate(0px,"+e+"px)",n.$slideTrack.css(o))},complete:function(){i&&i.call()}})):(n.applyTransition(),t=Math.ceil(t),!1===n.options.vertical?o[n.animType]="translate3d("+t+"px, 0px, 0px)":o[n.animType]="translate3d(0px,"+t+"px, 0px)",n.$slideTrack.css(o),i&&setTimeout(function(){n.disableTransition(),i.call()},n.options.speed))},t.prototype.getNavTarget=function(){var t=this,i=t.options.asNavFor;return i&&null!==i&&(i=e(i).not(t.$slider)),i},t.prototype.asNavFor=function(t){var i=this,o=i.getNavTarget();null!==o&&"object"==typeof o&&o.each(function(){var i=e(this).slick("getSlick");i.unslicked||i.slideHandler(t,!0)})},t.prototype.applyTransition=function(e){var t=this,i={};!1===t.options.fade?i[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:i[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,!1===t.options.fade?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(!1===e.options.infinite&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1==0&&(e.direction=1))),e.slideHandler(t))},t.prototype.buildArrows=function(){var t=this;!0===t.options.arrows&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),!0!==t.options.infinite&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,i,o=this;if(!0===o.options.dots&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),i=e("<ul />").addClass(o.options.dotsClass),t=0;t<=o.getDotCount();t+=1)i.append(e("<li />").append(o.options.customPaging.call(this,o,t)));o.$dots=i.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,i){e(i).attr("data-slick-index",t).data("originalStyling",e(i).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),!0!==t.options.centerMode&&!0!==t.options.swipeToSlide||(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),!0===t.options.draggable&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,i,o,n,s,r,a=this;if(o=document.createDocumentFragment(),s=a.$slider.children(),a.options.rows>0){for(r=a.options.slidesPerRow*a.options.rows,n=Math.ceil(s.length/r),e=0;e<n;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var d=document.createElement("div");for(i=0;i<a.options.slidesPerRow;i++){var c=e*r+(t*a.options.slidesPerRow+i);s.get(c)&&d.appendChild(s.get(c))}l.appendChild(d)}o.appendChild(l)}a.$slider.empty().append(o),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.checkResponsive=function(t,i){var o,n,s,r=this,a=!1,l=r.$slider.width(),d=window.innerWidth||e(window).width();if("window"===r.respondTo?s=d:"slider"===r.respondTo?s=l:"min"===r.respondTo&&(s=Math.min(d,l)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){n=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?s<r.breakpoints[o]&&(n=r.breakpoints[o]):s>r.breakpoints[o]&&(n=r.breakpoints[o]));null!==n?null!==r.activeBreakpoint?(n!==r.activeBreakpoint||i)&&(r.activeBreakpoint=n,"unslick"===r.breakpointSettings[n]?r.unslick(n):(r.options=e.extend({},r.originalSettings,r.breakpointSettings[n]),!0===t&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),a=n):(r.activeBreakpoint=n,"unslick"===r.breakpointSettings[n]?r.unslick(n):(r.options=e.extend({},r.originalSettings,r.breakpointSettings[n]),!0===t&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),a=n):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===t&&(r.currentSlide=r.options.initialSlide),r.refresh(t),a=n),t||!1===a||r.$slider.trigger("breakpoint",[r,a])}},t.prototype.changeSlide=function(t,i){var o,n,s,r=this,a=e(t.currentTarget);switch(a.is("a")&&t.preventDefault(),a.is("li")||(a=a.closest("li")),s=r.slideCount%r.options.slidesToScroll!=0,o=s?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,t.data.message){case"previous":n=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-n,!1,i);break;case"next":n=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+n,!1,i);break;case"index":var l=0===t.data.index?0:t.data.index||a.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(l),!1,i),a.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,i;if(t=this.getNavigableIndexes(),i=0,e>t[t.length-1])e=t[t.length-1];else for(var o in t){if(e<t[o]){e=i;break}i=t[o]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&(e("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",e.proxy(t.interrupt,t,!0)).off("mouseleave.slick",e.proxy(t.interrupt,t,!1)),!0===t.options.accessibility&&t.$dots.off("keydown.slick",t.keyHandler)),t.$slider.off("focus.slick blur.slick"),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide),!0===t.options.accessibility&&(t.$prevArrow&&t.$prevArrow.off("keydown.slick",t.keyHandler),t.$nextArrow&&t.$nextArrow.off("keydown.slick",t.keyHandler))),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),!0===t.options.accessibility&&t.$list.off("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>0&&(e=t.$slides.children().children(),e.removeAttr("style"),t.$slider.empty().append(e))},t.prototype.clickHandler=function(e){!1===this.shouldClick&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var i=this;i.autoPlayClear(),i.touchObject={},i.cleanUpEvents(),e(".slick-cloned",i.$slider).detach(),i.$dots&&i.$dots.remove(),i.$prevArrow&&i.$prevArrow.length&&(i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.prevArrow)&&i.$prevArrow.remove()),i.$nextArrow&&i.$nextArrow.length&&(i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.nextArrow)&&i.$nextArrow.remove()),i.$slides&&(i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){e(this).attr("style",e(this).data("originalStyling"))}),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.detach(),i.$list.detach(),i.$slider.append(i.$slides)),i.cleanUpRows(),i.$slider.removeClass("slick-slider"),i.$slider.removeClass("slick-initialized"),i.$slider.removeClass("slick-dotted"),i.unslicked=!0,t||i.$slider.trigger("destroy",[i])},t.prototype.disableTransition=function(e){var t=this,i={};i[t.transitionType]="",!1===t.options.fade?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.fadeSlide=function(e,t){var i=this;!1===i.cssTransitions?(i.$slides.eq(e).css({zIndex:i.options.zIndex}),i.$slides.eq(e).animate({opacity:1},i.options.speed,i.options.easing,t)):(i.applyTransition(e),i.$slides.eq(e).css({opacity:1,zIndex:i.options.zIndex}),t&&setTimeout(function(){i.disableTransition(e),t.call()},i.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;!1===t.cssTransitions?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick","*",function(i){var o=e(this);setTimeout(function(){t.options.pauseOnFocus&&o.is(":focus")&&(t.focussed=!0,t.autoPlay())},0)}).on("blur.slick","*",function(i){e(this),t.options.pauseOnFocus&&(t.focussed=!1,t.autoPlay())})},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){return this.currentSlide},t.prototype.getDotCount=function(){var e=this,t=0,i=0,o=0;if(!0===e.options.infinite)if(e.slideCount<=e.options.slidesToShow)++o;else for(;t<e.slideCount;)++o,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(!0===e.options.centerMode)o=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++o,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else o=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return o-1},t.prototype.getLeft=function(e){var t,i,o,n,s=this,r=0;return s.slideOffset=0,i=s.$slides.first().outerHeight(!0),!0===s.options.infinite?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,n=-1,!0===s.options.vertical&&!0===s.options.centerMode&&(2===s.options.slidesToShow?n=-1.5:1===s.options.slidesToShow&&(n=-2)),r=i*s.options.slidesToShow*n),s.slideCount%s.options.slidesToScroll!=0&&e+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(e>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(e-s.slideCount))*s.slideWidth*-1,r=(s.options.slidesToShow-(e-s.slideCount))*i*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,r=s.slideCount%s.options.slidesToScroll*i*-1))):e+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(e+s.options.slidesToShow-s.slideCount)*s.slideWidth,r=(e+s.options.slidesToShow-s.slideCount)*i),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,r=0),!0===s.options.centerMode&&s.slideCount<=s.options.slidesToShow?s.slideOffset=s.slideWidth*Math.floor(s.options.slidesToShow)/2-s.slideWidth*s.slideCount/2:!0===s.options.centerMode&&!0===s.options.infinite?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:!0===s.options.centerMode&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),t=!1===s.options.vertical?e*s.slideWidth*-1+s.slideOffset:e*i*-1+r,!0===s.options.variableWidth&&(o=s.slideCount<=s.options.slidesToShow||!1===s.options.infinite?s.$slideTrack.children(".slick-slide").eq(e):s.$slideTrack.children(".slick-slide").eq(e+s.options.slidesToShow),t=!0===s.options.rtl?o[0]?-1*(s.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===s.options.centerMode&&(o=s.slideCount<=s.options.slidesToShow||!1===s.options.infinite?s.$slideTrack.children(".slick-slide").eq(e):s.$slideTrack.children(".slick-slide").eq(e+s.options.slidesToShow+1),t=!0===s.options.rtl?o[0]?-1*(s.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,t+=(s.$list.width()-o.outerWidth())/2)),t},t.prototype.getOption=t.prototype.slickGetOption=function(e){return this.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,i=0,o=0,n=[];for(!1===t.options.infinite?e=t.slideCount:(i=-1*t.options.slidesToScroll,o=-1*t.options.slidesToScroll,e=2*t.slideCount);i<e;)n.push(i),i=o+t.options.slidesToScroll,o+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return n},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,i,o,n=this;return o=!0===n.options.centerMode?Math.floor(n.$list.width()/2):0,i=-1*n.swipeLeft+o,!0===n.options.swipeToSlide?(n.$slideTrack.find(".slick-slide").each(function(o,s){var r,a,l;if(r=e(s).outerWidth(),a=s.offsetLeft,!0!==n.options.centerMode&&(a+=r/2),l=a+r,i<l)return t=s,!1}),Math.abs(e(t).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){this.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var i=this;e(i.$slider).hasClass("slick-initialized")||(e(i.$slider).addClass("slick-initialized"),i.buildRows(),i.buildOut(),i.setProps(),i.startLoad(),i.loadSlider(),i.initializeEvents(),i.updateArrows(),i.updateDots(),i.checkResponsive(!0),i.focusHandler()),t&&i.$slider.trigger("init",[i]),!0===i.options.accessibility&&i.initADA(),i.options.autoplay&&(i.paused=!1,i.autoPlay())},t.prototype.initADA=function(){var t=this,i=Math.ceil(t.slideCount/t.options.slidesToShow),o=t.getNavigableIndexes().filter(function(e){return e>=0&&e<t.slideCount});t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==t.$dots&&(t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i){var n=o.indexOf(i);if(e(this).attr({role:"tabpanel",id:"slick-slide"+t.instanceUid+i,tabindex:-1}),-1!==n){var s="slick-slide-control"+t.instanceUid+n;e("#"+s).length&&e(this).attr({"aria-describedby":s})}}),t.$dots.attr("role","tablist").find("li").each(function(n){var s=o[n];e(this).attr({role:"presentation"}),e(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+t.instanceUid+n,"aria-controls":"slick-slide"+t.instanceUid+s,"aria-label":n+1+" of "+i,"aria-selected":null,tabindex:"-1"})}).eq(t.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var n=t.currentSlide,s=n+t.options.slidesToShow;n<s;n++)t.options.focusOnChange?t.$slides.eq(n).attr({tabindex:"0"}):t.$slides.eq(n).removeAttr("tabindex");t.activateADA()},t.prototype.initArrowEvents=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow.on("keydown.slick",e.keyHandler),e.$nextArrow.on("keydown.slick",e.keyHandler)))},t.prototype.initDotEvents=function(){var t=this;!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&(e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),!0===t.options.accessibility&&t.$dots.on("keydown.slick",t.keyHandler)),!0===t.options.dots&&!0===t.options.pauseOnDotsHover&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.interrupt,t,!0)).on("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.interrupt,t,!1)))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),!0===t.options.accessibility&&t.$list.on("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(t.setPosition)},t.prototype.initUI=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},t.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&!0===t.options.accessibility?t.changeSlide({data:{message:!0===t.options.rtl?"next":"previous"}}):39===e.keyCode&&!0===t.options.accessibility&&t.changeSlide({data:{message:!0===t.options.rtl?"previous":"next"}}))},t.prototype.lazyLoad=function(){function t(t){e("img[data-lazy]",t).each(function(){var t=e(this),i=e(this).attr("data-lazy"),o=e(this).attr("data-srcset"),n=e(this).attr("data-sizes")||r.$slider.attr("data-sizes"),s=document.createElement("img");s.onload=function(){t.animate({opacity:0},100,function(){o&&(t.attr("srcset",o),n&&t.attr("sizes",n)),t.attr("src",i).animate({opacity:1},200,function(){t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,t,i])})},s.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,t,i])},s.src=i})}var i,o,n,s,r=this;if(!0===r.options.centerMode?!0===r.options.infinite?(n=r.currentSlide+(r.options.slidesToShow/2+1),s=n+r.options.slidesToShow+2):(n=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),s=r.options.slidesToShow/2+1+2+r.currentSlide):(n=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,s=Math.ceil(n+r.options.slidesToShow),!0===r.options.fade&&(n>0&&n--,s<=r.slideCount&&s++)),i=r.$slider.find(".slick-slide").slice(n,s),"anticipated"===r.options.lazyLoad)for(var a=n-1,l=s,d=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)a<0&&(a=r.slideCount-1),i=i.add(d.eq(a)),i=i.add(d.eq(l)),a--,l++;t(i),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),t(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),t(o)):0===r.currentSlide&&(o=r.$slider.find(".slick-cloned").slice(-1*r.options.slidesToShow),t(o))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},t.prototype.next=t.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){var e=this;e.checkResponsive(),e.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){var e=this;e.autoPlayClear(),e.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},t.prototype.postSlide=function(t){var i=this;if(!i.unslicked&&(i.$slider.trigger("afterChange",[i,t]),i.animating=!1,i.slideCount>i.options.slidesToShow&&i.setPosition(),i.swipeLeft=null,i.options.autoplay&&i.autoPlay(),!0===i.options.accessibility&&(i.initADA(),i.options.focusOnChange))){e(i.$slides.get(i.currentSlide)).attr("tabindex",0).focus()}},t.prototype.prev=t.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.progressiveLazyLoad=function(t){t=t||1;var i,o,n,s,r,a=this,l=e("img[data-lazy]",a.$slider);l.length?(i=l.first(),o=i.attr("data-lazy"),n=i.attr("data-srcset"),s=i.attr("data-sizes")||a.$slider.attr("data-sizes"),r=document.createElement("img"),r.onload=function(){n&&(i.attr("srcset",n),s&&i.attr("sizes",s)),i.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===a.options.adaptiveHeight&&a.setPosition(),a.$slider.trigger("lazyLoaded",[a,i,o]),a.progressiveLazyLoad()},r.onerror=function(){t<3?setTimeout(function(){a.progressiveLazyLoad(t+1)},500):(i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,i,o]),a.progressiveLazyLoad())},r.src=o):a.$slider.trigger("allImagesLoaded",[a])},t.prototype.refresh=function(t){var i,o,n=this;o=n.slideCount-n.options.slidesToShow,!n.options.infinite&&n.currentSlide>o&&(n.currentSlide=o),n.slideCount<=n.options.slidesToShow&&(n.currentSlide=0),i=n.currentSlide,n.destroy(!0),e.extend(n,n.initials,{currentSlide:i}),n.init(),t||n.changeSlide({data:{message:"index",index:i}},!1)},t.prototype.registerBreakpoints=function(){var t,i,o,n=this,s=n.options.responsive||null;if("array"===e.type(s)&&s.length){n.respondTo=n.options.respondTo||"window";for(t in s)if(o=n.breakpoints.length-1,s.hasOwnProperty(t)){for(i=s[t].breakpoint;o>=0;)n.breakpoints[o]&&n.breakpoints[o]===i&&n.breakpoints.splice(o,1),o--;n.breakpoints.push(i),n.breakpointSettings[i]=s[t].settings}n.breakpoints.sort(function(e,t){return n.options.mobileFirst?e-t:t-e})}},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=e(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()},50))},t.prototype.removeSlide=t.prototype.slickRemove=function(e,t,i){var o=this;return"boolean"==typeof e?(t=e,e=!0===t?0:o.slideCount-1):e=!0===t?--e:e,!(o.slideCount<1||e<0||e>o.slideCount-1)&&(o.unload(),!0===i?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(e).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},t.prototype.setCSS=function(e){var t,i,o=this,n={};!0===o.options.rtl&&(e=-e),t="left"==o.positionProp?Math.ceil(e)+"px":"0px",i="top"==o.positionProp?Math.ceil(e)+"px":"0px",n[o.positionProp]=e,!1===o.transformsEnabled?o.$slideTrack.css(n):(n={},!1===o.cssTransitions?(n[o.animType]="translate("+t+", "+i+")",o.$slideTrack.css(n)):(n[o.animType]="translate3d("+t+", "+i+", 0px)",o.$slideTrack.css(n)))},t.prototype.setDimensions=function(){var e=this;!1===e.options.vertical?!0===e.options.centerMode&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),!0===e.options.centerMode&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),!1===e.options.vertical&&!1===e.options.variableWidth?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):!0===e.options.variableWidth?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();!1===e.options.variableWidth&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,i=this;i.$slides.each(function(o,n){t=i.slideWidth*o*-1,!0===i.options.rtl?e(n).css({position:"relative",right:t,top:0,zIndex:i.options.zIndex-2,opacity:0}):e(n).css({position:"relative",left:t,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},t.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},t.prototype.setOption=t.prototype.slickSetOption=function(){var t,i,o,n,s,r=this,a=!1;if("object"===e.type(arguments[0])?(o=arguments[0],a=arguments[1],s="multiple"):"string"===e.type(arguments[0])&&(o=arguments[0],n=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===e.type(arguments[1])?s="responsive":void 0!==arguments[1]&&(s="single")),"single"===s)r.options[o]=n;else if("multiple"===s)e.each(o,function(e,t){r.options[e]=t});else if("responsive"===s)for(i in n)if("array"!==e.type(r.options.responsive))r.options.responsive=[n[i]];else{for(t=r.options.responsive.length-1;t>=0;)r.options.responsive[t].breakpoint===n[i].breakpoint&&r.options.responsive.splice(t,1),t--;r.options.responsive.push(n[i])}a&&(r.unload(),r.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),!1===e.options.fade?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=!0===e.options.vertical?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||!0===e.options.useCSS&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&!1!==e.animType&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&!1!==e.animType},t.prototype.setSlideClasses=function(e){var t,i,o,n,s=this;if(i=s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),s.$slides.eq(e).addClass("slick-current"),!0===s.options.centerMode){var r=s.options.slidesToShow%2==0?1:0;t=Math.floor(s.options.slidesToShow/2),!0===s.options.infinite&&(e>=t&&e<=s.slideCount-1-t?s.$slides.slice(e-t+r,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(o=s.options.slidesToShow+e,i.slice(o-t+1+r,o+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?i.eq(i.length-1-s.options.slidesToShow).addClass("slick-center"):e===s.slideCount-1&&i.eq(s.options.slidesToShow).addClass("slick-center")),s.$slides.eq(e).addClass("slick-center")}else e>=0&&e<=s.slideCount-s.options.slidesToShow?s.$slides.slice(e,e+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=s.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(n=s.slideCount%s.options.slidesToShow,o=!0===s.options.infinite?s.options.slidesToShow+e:e,s.options.slidesToShow==s.options.slidesToScroll&&s.slideCount-e<s.options.slidesToShow?i.slice(o-(s.options.slidesToShow-n),o+n).addClass("slick-active").attr("aria-hidden","false"):i.slice(o,o+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==s.options.lazyLoad&&"anticipated"!==s.options.lazyLoad||s.lazyLoad()},t.prototype.setupInfinite=function(){var t,i,o,n=this;if(!0===n.options.fade&&(n.options.centerMode=!1),!0===n.options.infinite&&!1===n.options.fade&&(i=null,n.slideCount>n.options.slidesToShow)){for(o=!0===n.options.centerMode?n.options.slidesToShow+1:n.options.slidesToShow,t=n.slideCount;t>n.slideCount-o;t-=1)i=t-1,e(n.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i-n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");for(t=0;t<o+n.slideCount;t+=1)i=t,e(n.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i+n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");n.$slideTrack.find(".slick-cloned").find("[id]").each(function(){e(this).attr("id","")})}},t.prototype.interrupt=function(e){var t=this;e||t.autoPlay(),t.interrupted=e},t.prototype.selectHandler=function(t){var i=this,o=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),n=parseInt(o.attr("data-slick-index"));return n||(n=0),i.slideCount<=i.options.slidesToShow?void i.slideHandler(n,!1,!0):void i.slideHandler(n)},t.prototype.slideHandler=function(e,t,i){var o,n,s,r,a,l=null,d=this;if(t=t||!1,!(!0===d.animating&&!0===d.options.waitForAnimate||!0===d.options.fade&&d.currentSlide===e))return!1===t&&d.asNavFor(e),o=e,l=d.getLeft(o),r=d.getLeft(d.currentSlide),d.currentLeft=null===d.swipeLeft?r:d.swipeLeft,!1===d.options.infinite&&!1===d.options.centerMode&&(e<0||e>d.getDotCount()*d.options.slidesToScroll)?void(!1===d.options.fade&&(o=d.currentSlide,!0!==i&&d.slideCount>d.options.slidesToShow?d.animateSlide(r,function(){d.postSlide(o)}):d.postSlide(o))):!1===d.options.infinite&&!0===d.options.centerMode&&(e<0||e>d.slideCount-d.options.slidesToScroll)?void(!1===d.options.fade&&(o=d.currentSlide,!0!==i&&d.slideCount>d.options.slidesToShow?d.animateSlide(r,function(){d.postSlide(o)}):d.postSlide(o))):(d.options.autoplay&&clearInterval(d.autoPlayTimer),n=o<0?d.slideCount%d.options.slidesToScroll!=0?d.slideCount-d.slideCount%d.options.slidesToScroll:d.slideCount+o:o>=d.slideCount?d.slideCount%d.options.slidesToScroll!=0?0:o-d.slideCount:o,d.animating=!0,d.$slider.trigger("beforeChange",[d,d.currentSlide,n]),s=d.currentSlide,d.currentSlide=n,d.setSlideClasses(d.currentSlide),d.options.asNavFor&&(a=d.getNavTarget(),a=a.slick("getSlick"),a.slideCount<=a.options.slidesToShow&&a.setSlideClasses(d.currentSlide)),d.updateDots(),d.updateArrows(),!0===d.options.fade?(!0!==i?(d.fadeSlideOut(s),d.fadeSlide(n,function(){d.postSlide(n)})):d.postSlide(n),void d.animateHeight()):void(!0!==i&&d.slideCount>d.options.slidesToShow?d.animateSlide(l,function(){d.postSlide(n)}):d.postSlide(n)))},t.prototype.startLoad=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,i,o,n=this;return e=n.touchObject.startX-n.touchObject.curX,t=n.touchObject.startY-n.touchObject.curY,i=Math.atan2(t,e),o=Math.round(180*i/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===n.options.rtl?"left":"right":o<=360&&o>=315?!1===n.options.rtl?"left":"right":o>=135&&o<=225?!1===n.options.rtl?"right":"left":!0===n.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},t.prototype.swipeEnd=function(e){var t,i,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(i=o.swipeDirection()){case"left":case"down":t=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":t=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=i&&(o.slideHandler(t),o.touchObject={},o.$slider.trigger("swipe",[o,i]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(!1===t.options.swipe||"ontouchend"in document&&!1===t.options.swipe||!1===t.options.draggable&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,!0===t.options.verticalSwiping&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,i,o,n,s,r,a=this;return s=void 0!==e.originalEvent?e.originalEvent.touches:null,!(!a.dragging||a.scrolling||s&&1!==s.length)&&(t=a.getLeft(a.currentSlide),a.touchObject.curX=void 0!==s?s[0].pageX:e.clientX,a.touchObject.curY=void 0!==s?s[0].pageY:e.clientY,a.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(a.touchObject.curX-a.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(a.touchObject.curY-a.touchObject.startY,2))),!a.options.verticalSwiping&&!a.swiping&&r>4?(a.scrolling=!0,!1):(!0===a.options.verticalSwiping&&(a.touchObject.swipeLength=r),i=a.swipeDirection(),void 0!==e.originalEvent&&a.touchObject.swipeLength>4&&(a.swiping=!0,e.preventDefault()),n=(!1===a.options.rtl?1:-1)*(a.touchObject.curX>a.touchObject.startX?1:-1),!0===a.options.verticalSwiping&&(n=a.touchObject.curY>a.touchObject.startY?1:-1),o=a.touchObject.swipeLength,a.touchObject.edgeHit=!1,!1===a.options.infinite&&(0===a.currentSlide&&"right"===i||a.currentSlide>=a.getDotCount()&&"left"===i)&&(o=a.touchObject.swipeLength*a.options.edgeFriction,a.touchObject.edgeHit=!0),!1===a.options.vertical?a.swipeLeft=t+o*n:a.swipeLeft=t+o*(a.$list.height()/a.listWidth)*n,!0===a.options.verticalSwiping&&(a.swipeLeft=t+o*n),!0!==a.options.fade&&!1!==a.options.touchMove&&(!0===a.animating?(a.swipeLeft=null,!1):void a.setCSS(a.swipeLeft))))},t.prototype.swipeStart=function(e){var t,i=this;return i.interrupted=!0,1!==i.touchObject.fingerCount||i.slideCount<=i.options.slidesToShow?(i.touchObject={},!1):(void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),i.touchObject.startX=i.touchObject.curX=void 0!==t?t.pageX:e.clientX,i.touchObject.startY=i.touchObject.curY=void 0!==t?t.pageY:e.clientY,void(i.dragging=!0))},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateArrows=function(){var e=this;Math.floor(e.options.slidesToShow/2),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&!1===e.options.centerMode?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&!0===e.options.centerMode&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").end(),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active"))},t.prototype.visibility=function(){var e=this;e.options.autoplay&&(document[e.hidden]?e.interrupted=!0:e.interrupted=!1)},e.fn.slick=function(){var e,i,o=this,n=arguments[0],s=Array.prototype.slice.call(arguments,1),r=o.length;for(e=0;e<r;e++)if("object"==typeof n||void 0===n?o[e].slick=new t(o[e],n):i=o[e].slick[n].apply(o[e].slick,s),void 0!==i)return i;return o}})},/* 9 */
/***/
function(e,t,i){"use strict";
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
!function(e,t,i,o){function n(e,t){var o,n,s,r=[],a=0;e&&e.isDefaultPrevented()||(e.preventDefault(),t=t||{},e&&e.data&&(t=h(e.data.options,t)),o=t.$target||i(e.currentTarget).trigger("blur"),(s=i.fancybox.getInstance())&&s.$trigger&&s.$trigger.is(o)||(t.selector?r=i(t.selector):(n=o.attr("data-fancybox")||"",n?(r=e.data?e.data.items:[],r=r.length?r.filter('[data-fancybox="'+n+'"]'):i('[data-fancybox="'+n+'"]')):r=[o]),a=i(r).index(o),a<0&&(a=0),s=i.fancybox.open(r,t,a),s.$trigger=o))}if(e.console=e.console||{info:function(e){}},i){if(i.fn.fancybox)return;var s={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeClose:i.noop,afterClose:i.noop,onActivate:i.noop,onDeactivate:i.noop,clickContent:function(e,t){return"image"===e.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(e,t){return"image"===e.type&&"toggleControls"},clickSlide:function(e,t){return"image"===e.type?"toggleControls":"close"},dblclickContent:function(e,t){return"image"===e.type&&"zoom"},dblclickSlide:function(e,t){return"image"===e.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},r=i(e),a=i(t),l=0,d=function(e){return e&&e.hasOwnProperty&&e instanceof i},c=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||function(t){return e.setTimeout(t,1e3/60)}}(),u=function(){return e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.oCancelAnimationFrame||function(t){e.clearTimeout(t)}}(),p=function(){var e,i=t.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in o)if(void 0!==i.style[e])return o[e];return"transitionend"}(),f=function(e){return e&&e.length&&e[0].offsetHeight},h=function(e,t){var o=i.extend(!0,{},e,t);return i.each(t,function(e,t){i.isArray(t)&&(o[e]=t)}),o},g=function(e){var o,n;return!(!e||e.ownerDocument!==t)&&(i(".fancybox-container").css("pointer-events","none"),o={x:e.getBoundingClientRect().left+e.offsetWidth/2,y:e.getBoundingClientRect().top+e.offsetHeight/2},n=t.elementFromPoint(o.x,o.y)===e,i(".fancybox-container").css("pointer-events",""),n)},v=function(e,t,o){var n=this;n.opts=h({index:o},i.fancybox.defaults),i.isPlainObject(t)&&(n.opts=h(n.opts,t)),i.fancybox.isMobile&&(n.opts=h(n.opts,n.opts.mobile)),n.id=n.opts.id||++l,n.currIndex=parseInt(n.opts.index,10)||0,n.prevIndex=null,n.prevPos=null,n.currPos=0,n.firstRun=!0,n.group=[],n.slides={},n.addContent(e),n.group.length&&n.init()};i.extend(v.prototype,{init:function(){var o,n,s=this,r=s.group[s.currIndex],a=r.opts;a.closeExisting&&i.fancybox.close(!0),i("body").addClass("fancybox-active"),!i.fancybox.getInstance()&&!1!==a.hideScrollbar&&!i.fancybox.isMobile&&t.body.scrollHeight>e.innerHeight&&(i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(e.innerWidth-t.documentElement.clientWidth)+"px;}</style>"),i("body").addClass("compensate-for-scrollbar")),n="",i.each(a.buttons,function(e,t){n+=a.btnTpl[t]||""}),o=i(s.translate(s,a.baseTpl.replace("{{buttons}}",n).replace("{{arrows}}",a.btnTpl.arrowLeft+a.btnTpl.arrowRight))).attr("id","fancybox-container-"+s.id).addClass(a.baseClass).data("FancyBox",s).appendTo(a.parentEl),s.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(e){s.$refs[e]=o.find(".fancybox-"+e)}),s.trigger("onInit"),s.activate(),s.jumpTo(s.currIndex)},translate:function(e,t){var i=e.opts.i18n[e.opts.lang]||e.opts.i18n.en;return t.replace(/\{\{(\w+)\}\}/g,function(e,t){return void 0===i[t]?e:i[t]})},addContent:function(e){var t,o=this,n=i.makeArray(e);i.each(n,function(e,t){var n,s,r,a,l,d={},c={};i.isPlainObject(t)?(d=t,c=t.opts||t):"object"===i.type(t)&&i(t).length?(n=i(t),c=n.data()||{},c=i.extend(!0,{},c,c.options),c.$orig=n,d.src=o.opts.src||c.src||n.attr("href"),d.type||d.src||(d.type="inline",d.src=t)):d={type:"html",src:t+""},d.opts=i.extend(!0,{},o.opts,c),i.isArray(c.buttons)&&(d.opts.buttons=c.buttons),i.fancybox.isMobile&&d.opts.mobile&&(d.opts=h(d.opts,d.opts.mobile)),s=d.type||d.opts.type,a=d.src||"",!s&&a&&((r=a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(s="video",d.opts.video.format||(d.opts.video.format="video/"+("ogv"===r[1]?"ogg":r[1]))):a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":a.match(/\.(pdf)((\?|#).*)?$/i)?(s="iframe",d=i.extend(!0,d,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===a.charAt(0)&&(s="inline")),s?d.type=s:o.trigger("objectNeedsType",d),d.contentType||(d.contentType=i.inArray(d.type,["html","inline","ajax"])>-1?"html":d.type),d.index=o.group.length,"auto"==d.opts.smallBtn&&(d.opts.smallBtn=i.inArray(d.type,["html","inline","ajax"])>-1),"auto"===d.opts.toolbar&&(d.opts.toolbar=!d.opts.smallBtn),d.$thumb=d.opts.$thumb||null,d.opts.$trigger&&d.index===o.opts.index&&(d.$thumb=d.opts.$trigger.find("img:first"),d.$thumb.length&&(d.opts.$orig=d.opts.$trigger)),d.$thumb&&d.$thumb.length||!d.opts.$orig||(d.$thumb=d.opts.$orig.find("img:first")),d.$thumb&&!d.$thumb.length&&(d.$thumb=null),d.thumb=d.opts.thumb||(d.$thumb?d.$thumb[0].src:null),"function"===i.type(d.opts.caption)&&(d.opts.caption=d.opts.caption.apply(t,[o,d])),"function"===i.type(o.opts.caption)&&(d.opts.caption=o.opts.caption.apply(t,[o,d])),d.opts.caption instanceof i||(d.opts.caption=void 0===d.opts.caption?"":d.opts.caption+""),"ajax"===d.type&&(l=a.split(/\s+/,2),l.length>1&&(d.src=l.shift(),d.opts.filter=l.shift())),d.opts.modal&&(d.opts=i.extend(!0,d.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(d)}),Object.keys(o.slides).length&&(o.updateControls(),(t=o.Thumbs)&&t.isActive&&(t.create(),t.focus()))},addEvents:function(){var t=this;t.removeEvents(),t.$refs.container.on("click.fb-close","[data-fancybox-close]",function(e){e.stopPropagation(),e.preventDefault(),t.close(e)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(e){e.stopPropagation(),e.preventDefault(),t.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(e){e.stopPropagation(),e.preventDefault(),t.next()}).on("click.fb","[data-fancybox-zoom]",function(e){t[t.isScaledDown()?"scaleToActual":"scaleToFit"]()}),r.on("orientationchange.fb resize.fb",function(e){e&&e.originalEvent&&"resize"===e.originalEvent.type?(t.requestId&&u(t.requestId),t.requestId=c(function(){t.update(e)})):(t.current&&"iframe"===t.current.type&&t.$refs.stage.hide(),setTimeout(function(){t.$refs.stage.show(),t.update(e)},i.fancybox.isMobile?600:250))}),a.on("keydown.fb",function(e){var o=i.fancybox?i.fancybox.getInstance():null,n=o.current,s=e.keyCode||e.which;return 9==s?void(n.opts.trapFocus&&t.focus(e)):!n.opts.keyboard||e.ctrlKey||e.altKey||e.shiftKey||i(e.target).is("input,textarea,video,audio,select")?void 0:8===s||27===s?(e.preventDefault(),void t.close(e)):37===s||38===s?(e.preventDefault(),void t.previous()):39===s||40===s?(e.preventDefault(),void t.next()):void t.trigger("afterKeydown",e,s)}),t.group[t.currIndex].opts.idleTime&&(t.idleSecondsCounter=0,a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(e){t.idleSecondsCounter=0,t.isIdle&&t.showControls(),t.isIdle=!1}),t.idleInterval=e.setInterval(function(){++t.idleSecondsCounter>=t.group[t.currIndex].opts.idleTime&&!t.isDragging&&(t.isIdle=!0,t.idleSecondsCounter=0,t.hideControls())},1e3))},removeEvents:function(){var t=this;r.off("orientationchange.fb resize.fb"),a.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),t.idleInterval&&(e.clearInterval(t.idleInterval),t.idleInterval=null)},previous:function(e){return this.jumpTo(this.currPos-1,e)},next:function(e){return this.jumpTo(this.currPos+1,e)},jumpTo:function(e,t){var o,n,s,r,a,l,d,c,u,p=this,h=p.group.length;if(!(p.isDragging||p.isClosing||p.isAnimating&&p.firstRun)){if(e=parseInt(e,10),!(s=p.current?p.current.opts.loop:p.opts.loop)&&(e<0||e>=h))return!1;if(o=p.firstRun=!Object.keys(p.slides).length,a=p.current,p.prevIndex=p.currIndex,p.prevPos=p.currPos,r=p.createSlide(e),h>1&&((s||r.index<h-1)&&p.createSlide(e+1),(s||r.index>0)&&p.createSlide(e-1)),p.current=r,p.currIndex=r.index,p.currPos=r.pos,p.trigger("beforeShow",o),p.updateControls(),r.forcedDuration=void 0,i.isNumeric(t)?r.forcedDuration=t:t=r.opts[o?"animationDuration":"transitionDuration"],t=parseInt(t,10),n=p.isMoved(r),r.$slide.addClass("fancybox-slide--current"),o)return r.opts.animationEffect&&t&&p.$refs.container.css("transition-duration",t+"ms"),p.$refs.container.addClass("fancybox-is-open").trigger("focus"),p.loadSlide(r),void p.preload("image");l=i.fancybox.getTranslate(a.$slide),d=i.fancybox.getTranslate(p.$refs.stage),i.each(p.slides,function(e,t){i.fancybox.stop(t.$slide,!0)}),a.pos!==r.pos&&(a.isComplete=!1),a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),n?(u=l.left-(a.pos*l.width+a.pos*a.opts.gutter),i.each(p.slides,function(e,o){o.$slide.removeClass("fancybox-animated").removeClass(function(e,t){return(t.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var n=o.pos*l.width+o.pos*o.opts.gutter;i.fancybox.setTranslate(o.$slide,{top:0,left:n-d.left+u}),o.pos!==r.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>r.pos?"next":"previous")),f(o.$slide),i.fancybox.animate(o.$slide,{top:0,left:(o.pos-r.pos)*l.width+(o.pos-r.pos)*o.opts.gutter},t,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===p.currPos&&p.complete()})})):t&&r.opts.transitionEffect&&(c="fancybox-animated fancybox-fx-"+r.opts.transitionEffect,a.$slide.addClass("fancybox-slide--"+(a.pos>r.pos?"next":"previous")),i.fancybox.animate(a.$slide,c,t,function(){a.$slide.removeClass(c).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),r.isLoaded?p.revealContent(r):p.loadSlide(r),p.preload("image")}},createSlide:function(e){var t,o,n=this;return o=e%n.group.length,o=o<0?n.group.length+o:o,!n.slides[e]&&n.group[o]&&(t=i('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage),n.slides[e]=i.extend(!0,{},n.group[o],{pos:e,$slide:t,isLoaded:!1}),n.updateSlide(n.slides[e])),n.slides[e]},scaleToActual:function(e,t,o){var n,s,r,a,l,d=this,c=d.current,u=c.$content,p=i.fancybox.getTranslate(c.$slide).width,f=i.fancybox.getTranslate(c.$slide).height,h=c.width,g=c.height;d.isAnimating||d.isMoved()||!u||"image"!=c.type||!c.isLoaded||c.hasError||(d.isAnimating=!0,i.fancybox.stop(u),e=void 0===e?.5*p:e,t=void 0===t?.5*f:t,n=i.fancybox.getTranslate(u),n.top-=i.fancybox.getTranslate(c.$slide).top,n.left-=i.fancybox.getTranslate(c.$slide).left,a=h/n.width,l=g/n.height,s=.5*p-.5*h,r=.5*f-.5*g,h>p&&(s=n.left*a-(e*a-e),s>0&&(s=0),s<p-h&&(s=p-h)),g>f&&(r=n.top*l-(t*l-t),r>0&&(r=0),r<f-g&&(r=f-g)),d.updateCursor(h,g),i.fancybox.animate(u,{top:r,left:s,scaleX:a,scaleY:l},o||366,function(){d.isAnimating=!1}),d.SlideShow&&d.SlideShow.isActive&&d.SlideShow.stop())},scaleToFit:function(e){var t,o=this,n=o.current,s=n.$content;o.isAnimating||o.isMoved()||!s||"image"!=n.type||!n.isLoaded||n.hasError||(o.isAnimating=!0,i.fancybox.stop(s),t=o.getFitPos(n),o.updateCursor(t.width,t.height),i.fancybox.animate(s,{top:t.top,left:t.left,scaleX:t.width/s.width(),scaleY:t.height/s.height()},e||366,function(){o.isAnimating=!1}))},getFitPos:function(e){var t,o,n,s,r=this,a=e.$content,l=e.$slide,d=e.width||e.opts.width,c=e.height||e.opts.height,u={};return!!(e.isLoaded&&a&&a.length)&&(t=i.fancybox.getTranslate(r.$refs.stage).width,o=i.fancybox.getTranslate(r.$refs.stage).height,t-=parseFloat(l.css("paddingLeft"))+parseFloat(l.css("paddingRight"))+parseFloat(a.css("marginLeft"))+parseFloat(a.css("marginRight")),o-=parseFloat(l.css("paddingTop"))+parseFloat(l.css("paddingBottom"))+parseFloat(a.css("marginTop"))+parseFloat(a.css("marginBottom")),d&&c||(d=t,c=o),n=Math.min(1,t/d,o/c),d*=n,c*=n,d>t-.5&&(d=t),c>o-.5&&(c=o),"image"===e.type?(u.top=Math.floor(.5*(o-c))+parseFloat(l.css("paddingTop")),u.left=Math.floor(.5*(t-d))+parseFloat(l.css("paddingLeft"))):"video"===e.contentType&&(s=e.opts.width&&e.opts.height?d/c:e.opts.ratio||16/9,c>d/s?c=d/s:d>c*s&&(d=c*s)),u.width=d,u.height=c,u)},update:function(e){var t=this;i.each(t.slides,function(i,o){t.updateSlide(o,e)})},updateSlide:function(e,t){var o=this,n=e&&e.$content,s=e.width||e.opts.width,r=e.height||e.opts.height,a=e.$slide;o.adjustCaption(e),n&&(s||r||"video"===e.contentType)&&!e.hasError&&(i.fancybox.stop(n),i.fancybox.setTranslate(n,o.getFitPos(e)),e.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(e),a.length&&(a.trigger("refresh"),e.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",a.get(0).scrollHeight>a.get(0).clientHeight)),o.trigger("onUpdate",e,t)},centerSlide:function(e){var t=this,o=t.current,n=o.$slide;!t.isClosing&&o&&(n.siblings().css({transform:"",opacity:""}),n.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),i.fancybox.animate(n,{top:0,left:0,opacity:1},void 0===e?0:e,function(){n.css({transform:"",opacity:""}),o.isComplete||t.complete()},!1))},isMoved:function(e){var t,o,n=e||this.current;return!!n&&(o=i.fancybox.getTranslate(this.$refs.stage),t=i.fancybox.getTranslate(n.$slide),!n.$slide.hasClass("fancybox-animated")&&(Math.abs(t.top-o.top)>.5||Math.abs(t.left-o.left)>.5))},updateCursor:function(e,t){var o,n,s=this,r=s.current,a=s.$refs.container;r&&!s.isClosing&&s.Guestures&&(a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=s.canPan(e,t),n=!!o||s.isZoomable(),a.toggleClass("fancybox-is-zoomable",n),i("[data-fancybox-zoom]").prop("disabled",!n),o?a.addClass("fancybox-can-pan"):n&&("zoom"===r.opts.clickContent||i.isFunction(r.opts.clickContent)&&"zoom"==r.opts.clickContent(r))?a.addClass("fancybox-can-zoomIn"):r.opts.touch&&(r.opts.touch.vertical||s.group.length>1)&&"video"!==r.contentType&&a.addClass("fancybox-can-swipe"))},isZoomable:function(){var e,t=this,i=t.current;if(i&&!t.isClosing&&"image"===i.type&&!i.hasError){if(!i.isLoaded)return!0;if((e=t.getFitPos(i))&&(i.width>e.width||i.height>e.height))return!0}return!1},isScaledDown:function(e,t){var o=this,n=!1,s=o.current,r=s.$content;return void 0!==e&&void 0!==t?n=e<s.width&&t<s.height:r&&(n=i.fancybox.getTranslate(r),n=n.width<s.width&&n.height<s.height),n},canPan:function(e,t){var o=this,n=o.current,s=null,r=!1;return"image"===n.type&&(n.isComplete||e&&t)&&!n.hasError&&(r=o.getFitPos(n),void 0!==e&&void 0!==t?s={width:e,height:t}:n.isComplete&&(s=i.fancybox.getTranslate(n.$content)),s&&r&&(r=Math.abs(s.width-r.width)>1.5||Math.abs(s.height-r.height)>1.5)),r},loadSlide:function(e){var t,o,n,s=this;if(!e.isLoading&&!e.isLoaded){if(e.isLoading=!0,!1===s.trigger("beforeLoad",e))return e.isLoading=!1,!1;switch(t=e.type,o=e.$slide,o.off("refresh").trigger("onReset").addClass(e.opts.slideClass),t){case"image":s.setImage(e);break;case"iframe":s.setIframe(e);break;case"html":s.setContent(e,e.src||e.content);break;case"video":s.setContent(e,e.opts.video.tpl.replace(/\{\{src\}\}/gi,e.src).replace("{{format}}",e.opts.videoFormat||e.opts.video.format||"").replace("{{poster}}",e.thumb||""));break;case"inline":i(e.src).length?s.setContent(e,i(e.src)):s.setError(e);break;case"ajax":s.showLoading(e),n=i.ajax(i.extend({},e.opts.ajax.settings,{url:e.src,success:function(t,i){"success"===i&&s.setContent(e,t)},error:function(t,i){t&&"abort"!==i&&s.setError(e)}})),o.one("onReset",function(){n.abort()});break;default:s.setError(e)}return!0}},setImage:function(e){var o,n=this;setTimeout(function(){var t=e.$image;n.isClosing||!e.isLoading||t&&t.length&&t[0].complete||e.hasError||n.showLoading(e)},50),n.checkSrcset(e),e.$content=i('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")),!1!==e.opts.preload&&e.opts.width&&e.opts.height&&e.thumb&&(e.width=e.opts.width,e.height=e.opts.height,o=t.createElement("img"),o.onerror=function(){i(this).remove(),e.$ghost=null},o.onload=function(){n.afterLoad(e)},e.$ghost=i(o).addClass("fancybox-image").appendTo(e.$content).attr("src",e.thumb)),n.setBigImage(e)},checkSrcset:function(t){var i,o,n,s,r=t.opts.srcset||t.opts.image.srcset;if(r){n=e.devicePixelRatio||1,s=e.innerWidth*n,o=r.split(",").map(function(e){var t={};return e.trim().split(/\s+/).forEach(function(e,i){var o=parseInt(e.substring(0,e.length-1),10);if(0===i)return t.url=e;o&&(t.value=o,t.postfix=e[e.length-1])}),t}),o.sort(function(e,t){return e.value-t.value});for(var a=0;a<o.length;a++){var l=o[a];if("w"===l.postfix&&l.value>=s||"x"===l.postfix&&l.value>=n){i=l;break}}!i&&o.length&&(i=o[o.length-1]),i&&(t.src=i.url,t.width&&t.height&&"w"==i.postfix&&(t.height=t.width/t.height*i.value,t.width=i.value),t.opts.srcset=r)}},setBigImage:function(e){var o=this,n=t.createElement("img"),s=i(n);e.$image=s.one("error",function(){o.setError(e)}).one("load",function(){var t;e.$ghost||(o.resolveImageSlideSize(e,this.naturalWidth,this.naturalHeight),o.afterLoad(e)),o.isClosing||(e.opts.srcset&&(t=e.opts.sizes,t&&"auto"!==t||(t=(e.width/e.height>1&&r.width()/r.height()>1?"100":Math.round(e.width/e.height*100))+"vw"),s.attr("sizes",t).attr("srcset",e.opts.srcset)),e.$ghost&&setTimeout(function(){e.$ghost&&!o.isClosing&&e.$ghost.hide()},Math.min(300,Math.max(1e3,e.height/1600))),o.hideLoading(e))}).addClass("fancybox-image").attr("src",e.src).appendTo(e.$content),(n.complete||"complete"==n.readyState)&&s.naturalWidth&&s.naturalHeight?s.trigger("load"):n.error&&s.trigger("error")},resolveImageSlideSize:function(e,t,i){var o=parseInt(e.opts.width,10),n=parseInt(e.opts.height,10);e.width=t,e.height=i,o>0&&(e.width=o,e.height=Math.floor(o*i/t)),n>0&&(e.width=Math.floor(n*t/i),e.height=n)},setIframe:function(e){var t,o=this,n=e.opts.iframe,s=e.$slide;e.$content=i('<div class="fancybox-content'+(n.preload?" fancybox-is-hidden":"")+'"></div>').css(n.css).appendTo(s),s.addClass("fancybox-slide--"+e.contentType),e.$iframe=t=i(n.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(n.attr).appendTo(e.$content),n.preload?(o.showLoading(e),t.on("load.fb error.fb",function(t){this.isReady=1,e.$slide.trigger("refresh"),o.afterLoad(e)}),s.on("refresh.fb",function(){var i,o,r=e.$content,a=n.css.width,l=n.css.height;if(1===t[0].isReady){try{i=t.contents(),o=i.find("body")}catch(e){}o&&o.length&&o.children().length&&(s.css("overflow","visible"),r.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===a&&(a=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),r.css("width",a||"").css("max-width",""),void 0===l&&(l=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),r.css("height",l||""),s.css("overflow","auto")),r.removeClass("fancybox-is-hidden")}})):o.afterLoad(e),t.attr("src",e.src),s.one("onReset",function(){try{i(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(e){}i(this).off("refresh.fb").empty(),e.isLoaded=!1,e.isRevealed=!1})},setContent:function(e,t){var o=this;o.isClosing||(o.hideLoading(e),e.$content&&i.fancybox.stop(e.$content),e.$slide.empty(),d(t)&&t.parent().length?((t.hasClass("fancybox-content")||t.parent().hasClass("fancybox-content"))&&t.parents(".fancybox-slide").trigger("onReset"),e.$placeholder=i("<div>").hide().insertAfter(t),t.css("display","inline-block")):e.hasError||("string"===i.type(t)&&(t=i("<div>").append(i.trim(t)).contents()),e.opts.filter&&(t=i("<div>").html(t).find(e.opts.filter))),e.$slide.one("onReset",function(){i(this).find("video,audio").trigger("pause"),e.$placeholder&&(e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(),e.$placeholder=null),e.$smallBtn&&(e.$smallBtn.remove(),e.$smallBtn=null),e.hasError||(i(this).empty(),e.isLoaded=!1,e.isRevealed=!1)}),i(t).appendTo(e.$slide),i(t).is("video,audio")&&(i(t).addClass("fancybox-video"),i(t).wrap("<div></div>"),e.contentType="video",e.opts.width=e.opts.width||i(t).attr("width"),e.opts.height=e.opts.height||i(t).attr("height")),e.$content=e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),e.$content.siblings().hide(),e.$content.length||(e.$content=e.$slide.wrapInner("<div></div>").children().first()),e.$content.addClass("fancybox-content"),e.$slide.addClass("fancybox-slide--"+e.contentType),o.afterLoad(e))},setError:function(e){e.hasError=!0,e.$slide.trigger("onReset").removeClass("fancybox-slide--"+e.contentType).addClass("fancybox-slide--error"),e.contentType="html",this.setContent(e,this.translate(e,e.opts.errorTpl)),e.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(e){var t=this;(e=e||t.current)&&!e.$spinner&&(e.$spinner=i(t.translate(t,t.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"))},hideLoading:function(e){var t=this;(e=e||t.current)&&e.$spinner&&(e.$spinner.stop().remove(),delete e.$spinner)},afterLoad:function(e){var t=this;t.isClosing||(e.isLoading=!1,e.isLoaded=!0,t.trigger("afterLoad",e),t.hideLoading(e),!e.opts.smallBtn||e.$smallBtn&&e.$smallBtn.length||(e.$smallBtn=i(t.translate(e,e.opts.btnTpl.smallBtn)).appendTo(e.$content)),e.opts.protect&&e.$content&&!e.hasError&&(e.$content.on("contextmenu.fb",function(e){return 2==e.button&&e.preventDefault(),!0}),"image"===e.type&&i('<div class="fancybox-spaceball"></div>').appendTo(e.$content)),t.adjustCaption(e),t.adjustLayout(e),e.pos===t.currPos&&t.updateCursor(),t.revealContent(e))},adjustCaption:function(e){var t,i=this,o=e||i.current,n=o.opts.caption,s=o.opts.preventCaptionOverlap,r=i.$refs.caption,a=!1;r.toggleClass("fancybox-caption--separate",s),s&&n&&n.length&&(o.pos!==i.currPos?(t=r.clone().appendTo(r.parent()),t.children().eq(0).empty().html(n),a=t.outerHeight(!0),t.empty().remove()):i.$caption&&(a=i.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",a||""))},adjustLayout:function(e){var t,i,o,n,s=this,r=e||s.current;r.isLoaded&&!0!==r.opts.disableLayoutFix&&(r.$content.css("margin-bottom",""),r.$content.outerHeight()>r.$slide.height()+.5&&(o=r.$slide[0].style["padding-bottom"],n=r.$slide.css("padding-bottom"),parseFloat(n)>0&&(t=r.$slide[0].scrollHeight,r.$slide.css("padding-bottom",0),Math.abs(t-r.$slide[0].scrollHeight)<1&&(i=n),r.$slide.css("padding-bottom",o))),r.$content.css("margin-bottom",i))},revealContent:function(e){var t,o,n,s,r=this,a=e.$slide,l=!1,d=!1,c=r.isMoved(e),u=e.isRevealed;return e.isRevealed=!0,t=e.opts[r.firstRun?"animationEffect":"transitionEffect"],n=e.opts[r.firstRun?"animationDuration":"transitionDuration"],n=parseInt(void 0===e.forcedDuration?n:e.forcedDuration,10),!c&&e.pos===r.currPos&&n||(t=!1),"zoom"===t&&(e.pos===r.currPos&&n&&"image"===e.type&&!e.hasError&&(d=r.getThumbPos(e))?l=r.getFitPos(e):t="fade"),"zoom"===t?(r.isAnimating=!0,l.scaleX=l.width/d.width,l.scaleY=l.height/d.height,s=e.opts.zoomOpacity,"auto"==s&&(s=Math.abs(e.width/e.height-d.width/d.height)>.1),s&&(d.opacity=.1,l.opacity=1),i.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"),d),f(e.$content),void i.fancybox.animate(e.$content,l,n,function(){r.isAnimating=!1,r.complete()})):(r.updateSlide(e),t?(i.fancybox.stop(a),o="fancybox-slide--"+(e.pos>=r.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+t,a.addClass(o).removeClass("fancybox-slide--current"),e.$content.removeClass("fancybox-is-hidden"),f(a),"image"!==e.type&&e.$content.hide().show(0),void i.fancybox.animate(a,"fancybox-slide--current",n,function(){a.removeClass(o).css({transform:"",opacity:""}),e.pos===r.currPos&&r.complete()},!0)):(e.$content.removeClass("fancybox-is-hidden"),u||!c||"image"!==e.type||e.hasError||e.$content.hide().fadeIn("fast"),void(e.pos===r.currPos&&r.complete())))},getThumbPos:function(e){var t,o,n,s,r,a=!1,l=e.$thumb;return!(!l||!g(l[0]))&&(t=i.fancybox.getTranslate(l),o=parseFloat(l.css("border-top-width")||0),n=parseFloat(l.css("border-right-width")||0),s=parseFloat(l.css("border-bottom-width")||0),r=parseFloat(l.css("border-left-width")||0),a={top:t.top+o,left:t.left+r,width:t.width-n-r,height:t.height-o-s,scaleX:1,scaleY:1},t.width>0&&t.height>0&&a)},complete:function(){var e,t=this,o=t.current,n={};!t.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),t.preload("inline"),f(o.$slide),o.$slide.addClass("fancybox-slide--complete"),i.each(t.slides,function(e,o){o.pos>=t.currPos-1&&o.pos<=t.currPos+1?n[o.pos]=o:o&&(i.fancybox.stop(o.$slide),o.$slide.off().remove())}),t.slides=n),t.isAnimating=!1,t.updateCursor(),t.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),t.next()}),o.opts.autoFocus&&"html"===o.contentType&&(e=o.$content.find("input[autofocus]:enabled:visible:first"),e.length?e.trigger("focus"):t.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(e){var t,i,o=this;o.group.length<2||(i=o.slides[o.currPos+1],t=o.slides[o.currPos-1],t&&t.type===e&&o.loadSlide(t),i&&i.type===e&&o.loadSlide(i))},focus:function(e,o){var n,s,r=this,a=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");r.isClosing||(n=!e&&r.current&&r.current.isComplete?r.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):r.$refs.container.find("*:visible"),n=n.filter(a).filter(function(){return"hidden"!==i(this).css("visibility")&&!i(this).hasClass("disabled")}),n.length?(s=n.index(t.activeElement),e&&e.shiftKey?(s<0||0==s)&&(e.preventDefault(),n.eq(n.length-1).trigger("focus")):(s<0||s==n.length-1)&&(e&&e.preventDefault(),n.eq(0).trigger("focus"))):r.$refs.container.trigger("focus"))},activate:function(){var e=this;i(".fancybox-container").each(function(){var t=i(this).data("FancyBox");t&&t.id!==e.id&&!t.isClosing&&(t.trigger("onDeactivate"),t.removeEvents(),t.isVisible=!1)}),e.isVisible=!0,(e.current||e.isIdle)&&(e.update(),e.updateControls()),e.trigger("onActivate"),e.addEvents()},close:function(e,t){var o,n,s,r,a,l,d,u=this,p=u.current,h=function(){u.cleanUp(e)};return!(u.isClosing||(u.isClosing=!0,!1===u.trigger("beforeClose",e)?(u.isClosing=!1,c(function(){u.update()}),1):(u.removeEvents(),s=p.$content,o=p.opts.animationEffect,n=i.isNumeric(t)?t:o?p.opts.animationDuration:0,p.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==e?i.fancybox.stop(p.$slide):o=!1,p.$slide.siblings().trigger("onReset").remove(),n&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",n+"ms"),u.hideLoading(p),u.hideControls(!0),u.updateCursor(),"zoom"!==o||s&&n&&"image"===p.type&&!u.isMoved()&&!p.hasError&&(d=u.getThumbPos(p))||(o="fade"),"zoom"===o?(i.fancybox.stop(s),r=i.fancybox.getTranslate(s),l={top:r.top,left:r.left,scaleX:r.width/d.width,scaleY:r.height/d.height,width:d.width,height:d.height},a=p.opts.zoomOpacity,"auto"==a&&(a=Math.abs(p.width/p.height-d.width/d.height)>.1),a&&(d.opacity=0),i.fancybox.setTranslate(s,l),f(s),i.fancybox.animate(s,d,n,h),0):(o&&n?i.fancybox.animate(p.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,n,h):!0===e?setTimeout(h,n):h(),0))))},cleanUp:function(t){var o,n,s,r=this,a=r.current.opts.$orig;r.current.$slide.trigger("onReset"),r.$refs.container.empty().remove(),r.trigger("afterClose",t),r.current.opts.backFocus&&(a&&a.length&&a.is(":visible")||(a=r.$trigger),a&&a.length&&(n=e.scrollX,s=e.scrollY,a.trigger("focus"),i("html, body").scrollTop(s).scrollLeft(n))),r.current=null,o=i.fancybox.getInstance(),o?o.activate():(i("body").removeClass("fancybox-active compensate-for-scrollbar"),i("#fancybox-style-noscroll").remove())},trigger:function(e,t){var o,n=Array.prototype.slice.call(arguments,1),s=this,r=t&&t.opts?t:s.current;if(r?n.unshift(r):r=s,n.unshift(s),i.isFunction(r.opts[e])&&(o=r.opts[e].apply(r,n)),!1===o)return o;"afterClose"!==e&&s.$refs?s.$refs.container.trigger(e+".fb",n):a.trigger(e+".fb",n)},updateControls:function(){var e=this,o=e.current,n=o.index,s=e.$refs.container,r=e.$refs.caption,a=o.opts.caption;o.$slide.trigger("refresh"),a&&a.length?(e.$caption=r,r.children().eq(0).html(a)):e.$caption=null,e.hasHiddenControls||e.isIdle||e.showControls(),s.find("[data-fancybox-count]").html(e.group.length),s.find("[data-fancybox-index]").html(n+1),s.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&n<=0),s.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&n>=e.group.length-1),"image"===o.type?s.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&s.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),i(t.activeElement).is(":hidden,[disabled]")&&e.$refs.container.trigger("focus")},hideControls:function(e){var t=this,i=["infobar","toolbar","nav"];!e&&t.current.opts.preventCaptionOverlap||i.push("caption"),this.$refs.container.removeClass(i.map(function(e){return"fancybox-show-"+e}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var e=this,t=e.current?e.current.opts:e.opts,i=e.$refs.container;e.hasHiddenControls=!1,e.idleSecondsCounter=0,i.toggleClass("fancybox-show-toolbar",!(!t.toolbar||!t.buttons)).toggleClass("fancybox-show-infobar",!!(t.infobar&&e.group.length>1)).toggleClass("fancybox-show-caption",!!e.$caption).toggleClass("fancybox-show-nav",!!(t.arrows&&e.group.length>1)).toggleClass("fancybox-is-modal",!!t.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),i.fancybox={version:"3.5.7",defaults:s,getInstance:function(e){var t=i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return t instanceof v&&("string"===i.type(e)?t[e].apply(t,o):"function"===i.type(e)&&e.apply(t,o),t)},open:function(e,t,i){return new v(e,t,i)},close:function(e){var t=this.getInstance();t&&(t.close(),!0===e&&this.close(e))},destroy:function(){this.close(!0),a.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var i=t.createElement("div");return e.getComputedStyle&&e.getComputedStyle(i)&&e.getComputedStyle(i).getPropertyValue("transform")&&!(t.documentMode&&t.documentMode<11)}(),getTranslate:function(e){var t;return!(!e||!e.length)&&(t=e[0].getBoundingClientRect(),{top:t.top||0,left:t.left||0,width:t.width,height:t.height,opacity:parseFloat(e.css("opacity"))})},setTranslate:function(e,t){var i="",o={};if(e&&t)return void 0===t.left&&void 0===t.top||(i=(void 0===t.left?e.position().left:t.left)+"px, "+(void 0===t.top?e.position().top:t.top)+"px",i=this.use3d?"translate3d("+i+", 0px)":"translate("+i+")"),void 0!==t.scaleX&&void 0!==t.scaleY?i+=" scale("+t.scaleX+", "+t.scaleY+")":void 0!==t.scaleX&&(i+=" scaleX("+t.scaleX+")"),i.length&&(o.transform=i),void 0!==t.opacity&&(o.opacity=t.opacity),void 0!==t.width&&(o.width=t.width),void 0!==t.height&&(o.height=t.height),e.css(o)},animate:function(e,t,o,n,s){var r,a=this;i.isFunction(o)&&(n=o,o=null),a.stop(e),r=a.getTranslate(e),e.on(p,function(l){(!l||!l.originalEvent||e.is(l.originalEvent.target)&&"z-index"!=l.originalEvent.propertyName)&&(a.stop(e),i.isNumeric(o)&&e.css("transition-duration",""),i.isPlainObject(t)?void 0!==t.scaleX&&void 0!==t.scaleY&&a.setTranslate(e,{top:t.top,left:t.left,width:r.width*t.scaleX,height:r.height*t.scaleY,scaleX:1,scaleY:1}):!0!==s&&e.removeClass(t),i.isFunction(n)&&n(l))}),i.isNumeric(o)&&e.css("transition-duration",o+"ms"),i.isPlainObject(t)?(void 0!==t.scaleX&&void 0!==t.scaleY&&(delete t.width,delete t.height,e.parent().hasClass("fancybox-slide--image")&&e.parent().addClass("fancybox-is-scaling")),i.fancybox.setTranslate(e,t)):e.addClass(t),e.data("timer",setTimeout(function(){e.trigger(p)},o+33))},stop:function(e,t){e&&e.length&&(clearTimeout(e.data("timer")),t&&e.trigger(p),e.off(p).css("transition-duration",""),e.parent().removeClass("fancybox-is-scaling"))}},i.fn.fancybox=function(e){var t;return e=e||{},t=e.selector||!1,t?i("body").off("click.fb-start",t).on("click.fb-start",t,{options:e},n):this.off("click.fb-start").on("click.fb-start",{items:this,options:e},n),this},a.on("click.fb-start","[data-fancybox]",n),a.on("click.fb-start","[data-fancybox-trigger]",function(e){i('[data-fancybox="'+i(this).attr("data-fancybox-trigger")+'"]').eq(i(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:i(this)})}),function(){var e=null;a.on("mousedown mouseup focus blur",".fancybox-button",function(t){switch(t.type){case"mousedown":e=i(this);break;case"mouseup":e=null;break;case"focusin":i(".fancybox-button").removeClass("fancybox-focus"),i(this).is(e)||i(this).is("[disabled]")||i(this).addClass("fancybox-focus");break;case"focusout":i(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(e){var t={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(e){return"//maps.google."+e[2]+"/?ll="+(e[9]?e[9]+"&z="+Math.floor(e[10])+(e[12]?e[12].replace(/^\//,"&"):""):e[12]+"").replace(/\?/,"&")+"&output="+(e[12]&&e[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(e){return"//maps.google."+e[2]+"/maps?q="+e[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},i=function(t,i,o){if(t)return o=o||"","object"===e.type(o)&&(o=e.param(o,!0)),e.each(i,function(e,i){t=t.replace("$"+e,i||"")}),o.length&&(t+=(t.indexOf("?")>0?"&":"?")+o),t};e(document).on("objectNeedsType.fb",function(o,n,s){var r,a,l,d,c,u,p,f=s.src||"",h=!1;r=e.extend(!0,{},t,s.opts.media),e.each(r,function(t,o){if(l=f.match(o.matcher)){if(h=o.type,p=t,u={},o.paramPlace&&l[o.paramPlace]){c=l[o.paramPlace],"?"==c[0]&&(c=c.substring(1)),c=c.split("&");for(var n=0;n<c.length;++n){var r=c[n].split("=",2);2==r.length&&(u[r[0]]=decodeURIComponent(r[1].replace(/\+/g," ")))}}return d=e.extend(!0,{},o.params,s.opts[t],u),f="function"===e.type(o.url)?o.url.call(this,l,d,s):i(o.url,l,d),a="function"===e.type(o.thumb)?o.thumb.call(this,l,d,s):i(o.thumb,l),"youtube"===t?f=f.replace(/&t=((\d+)m)?(\d+)s/,function(e,t,i,o){return"&start="+((i?60*parseInt(i,10):0)+parseInt(o,10))}):"vimeo"===t&&(f=f.replace("&%23","#")),!1}}),h?(s.opts.thumb||s.opts.$thumb&&s.opts.$thumb.length||(s.opts.thumb=a),"iframe"===h&&(s.opts=e.extend(!0,s.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),e.extend(s,{type:h,src:f,origSrc:s.src,contentSource:p,contentType:"image"===h?"image":"gmap_place"==p||"gmap_search"==p?"map":"video"})):f&&(s.type=s.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(e){var t,i=this;if(this[e].loaded)return void setTimeout(function(){i.done(e)});this[e].loading||(this[e].loading=!0,t=document.createElement("script"),t.type="text/javascript",t.src=this[e].src,"youtube"===e?window.onYouTubeIframeAPIReady=function(){i[e].loaded=!0,i.done(e)}:t.onload=function(){i[e].loaded=!0,i.done(e)},document.body.appendChild(t))},done:function(t){var i,o,n;"youtube"===t&&delete window.onYouTubeIframeAPIReady,(i=e.fancybox.getInstance())&&(o=i.current.$content.find("iframe"),"youtube"===t&&void 0!==YT&&YT?n=new YT.Player(o.attr("id"),{events:{onStateChange:function(e){0==e.data&&i.next()}}}):"vimeo"===t&&void 0!==Vimeo&&Vimeo&&(n=new Vimeo.Player(o),n.on("ended",function(){i.next()})))}};e(document).on({"afterShow.fb":function(e,t,i){t.group.length>1&&("youtube"===i.contentSource||"vimeo"===i.contentSource)&&o.load(i.contentSource)}})}(jQuery),function(e,t,i){var o=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||function(t){return e.setTimeout(t,1e3/60)}}(),n=function(){return e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.oCancelAnimationFrame||function(t){e.clearTimeout(t)}}(),s=function(t){var i=[];t=t.originalEvent||t||e.e,t=t.touches&&t.touches.length?t.touches:t.changedTouches&&t.changedTouches.length?t.changedTouches:[t];for(var o in t)t[o].pageX?i.push({x:t[o].pageX,y:t[o].pageY}):t[o].clientX&&i.push({x:t[o].clientX,y:t[o].clientY});return i},r=function(e,t,i){return t&&e?"x"===i?e.x-t.x:"y"===i?e.y-t.y:Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)):0},a=function(e){if(e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||i.isFunction(e.get(0).onclick)||e.data("selectable"))return!0;for(var t=0,o=e[0].attributes,n=o.length;t<n;t++)if("data-fancybox-"===o[t].nodeName.substr(0,14))return!0;return!1},l=function(t){var i=e.getComputedStyle(t)["overflow-y"],o=e.getComputedStyle(t)["overflow-x"],n=("scroll"===i||"auto"===i)&&t.scrollHeight>t.clientHeight,s=("scroll"===o||"auto"===o)&&t.scrollWidth>t.clientWidth;return n||s},d=function(e){for(var t=!1;!(t=l(e.get(0)))&&(e=e.parent(),e.length&&!e.hasClass("fancybox-stage")&&!e.is("body")););return t},c=function(e){var t=this;t.instance=e,t.$bg=e.$refs.bg,t.$stage=e.$refs.stage,t.$container=e.$refs.container,t.destroy(),t.$container.on("touchstart.fb.touch mousedown.fb.touch",i.proxy(t,"ontouchstart"))};c.prototype.destroy=function(){var e=this;e.$container.off(".fb.touch"),i(t).off(".fb.touch"),e.requestId&&(n(e.requestId),e.requestId=null),e.tapped&&(clearTimeout(e.tapped),e.tapped=null)},c.prototype.ontouchstart=function(o){var n=this,l=i(o.target),c=n.instance,u=c.current,p=u.$slide,f=u.$content,h="touchstart"==o.type;if(h&&n.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&p.length&&l.length&&!a(l)&&!a(l.parent())&&(l.is("img")||!(o.originalEvent.clientX>l[0].clientWidth+l.offset().left))){if(!u||c.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();n.realPoints=n.startPoints=s(o),n.startPoints.length&&(u.touch&&o.stopPropagation(),n.startEvent=o,n.canTap=!0,n.$target=l,n.$content=f,n.opts=u.opts.touch,n.isPanning=!1,n.isSwiping=!1,n.isZooming=!1,n.isScrolling=!1,n.canPan=c.canPan(),n.startTime=(new Date).getTime(),n.distanceX=n.distanceY=n.distance=0,n.canvasWidth=Math.round(p[0].clientWidth),n.canvasHeight=Math.round(p[0].clientHeight),n.contentLastPos=null,n.contentStartPos=i.fancybox.getTranslate(n.$content)||{top:0,left:0},n.sliderStartPos=i.fancybox.getTranslate(p),n.stagePos=i.fancybox.getTranslate(c.$refs.stage),n.sliderStartPos.top-=n.stagePos.top,n.sliderStartPos.left-=n.stagePos.left,n.contentStartPos.top-=n.stagePos.top,n.contentStartPos.left-=n.stagePos.left,i(t).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",i.proxy(n,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",i.proxy(n,"ontouchmove")),i.fancybox.isMobile&&t.addEventListener("scroll",n.onscroll,!0),((n.opts||n.canPan)&&(l.is(n.$stage)||n.$stage.find(l).length)||(l.is(".fancybox-image")&&o.preventDefault(),i.fancybox.isMobile&&l.parents(".fancybox-caption").length))&&(n.isScrollable=d(l)||d(l.parent()),i.fancybox.isMobile&&n.isScrollable||o.preventDefault(),(1===n.startPoints.length||u.hasError)&&(n.canPan?(i.fancybox.stop(n.$content),n.isPanning=!0):n.isSwiping=!0,n.$container.addClass("fancybox-is-grabbing")),2===n.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(n.canTap=!1,n.isSwiping=!1,n.isPanning=!1,n.isZooming=!0,i.fancybox.stop(n.$content),n.centerPointStartX=.5*(n.startPoints[0].x+n.startPoints[1].x)-i(e).scrollLeft(),n.centerPointStartY=.5*(n.startPoints[0].y+n.startPoints[1].y)-i(e).scrollTop(),n.percentageOfImageAtPinchPointX=(n.centerPointStartX-n.contentStartPos.left)/n.contentStartPos.width,n.percentageOfImageAtPinchPointY=(n.centerPointStartY-n.contentStartPos.top)/n.contentStartPos.height,n.startDistanceBetweenFingers=r(n.startPoints[0],n.startPoints[1]))))}},c.prototype.onscroll=function(e){var i=this;i.isScrolling=!0,t.removeEventListener("scroll",i.onscroll,!0)},c.prototype.ontouchmove=function(e){var t=this;return void 0!==e.originalEvent.buttons&&0===e.originalEvent.buttons?void t.ontouchend(e):t.isScrolling?void(t.canTap=!1):(t.newPoints=s(e),void((t.opts||t.canPan)&&t.newPoints.length&&t.newPoints.length&&(t.isSwiping&&!0===t.isSwiping||e.preventDefault(),t.distanceX=r(t.newPoints[0],t.startPoints[0],"x"),t.distanceY=r(t.newPoints[0],t.startPoints[0],"y"),t.distance=r(t.newPoints[0],t.startPoints[0]),t.distance>0&&(t.isSwiping?t.onSwipe(e):t.isPanning?t.onPan():t.isZooming&&t.onZoom()))))},c.prototype.onSwipe=function(t){var s,r=this,a=r.instance,l=r.isSwiping,d=r.sliderStartPos.left||0;if(!0!==l)"x"==l&&(r.distanceX>0&&(r.instance.group.length<2||0===r.instance.current.index&&!r.instance.current.opts.loop)?d+=Math.pow(r.distanceX,.8):r.distanceX<0&&(r.instance.group.length<2||r.instance.current.index===r.instance.group.length-1&&!r.instance.current.opts.loop)?d-=Math.pow(-r.distanceX,.8):d+=r.distanceX),r.sliderLastPos={top:"x"==l?0:r.sliderStartPos.top+r.distanceY,left:d},r.requestId&&(n(r.requestId),r.requestId=null),r.requestId=o(function(){r.sliderLastPos&&(i.each(r.instance.slides,function(e,t){var o=t.pos-r.instance.currPos;i.fancybox.setTranslate(t.$slide,{top:r.sliderLastPos.top,left:r.sliderLastPos.left+o*r.canvasWidth+o*t.opts.gutter})}),r.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(r.distance)>10){if(r.canTap=!1,a.group.length<2&&r.opts.vertical?r.isSwiping="y":a.isDragging||!1===r.opts.vertical||"auto"===r.opts.vertical&&i(e).width()>800?r.isSwiping="x":(s=Math.abs(180*Math.atan2(r.distanceY,r.distanceX)/Math.PI),r.isSwiping=s>45&&s<135?"y":"x"),"y"===r.isSwiping&&i.fancybox.isMobile&&r.isScrollable)return void(r.isScrolling=!0);a.isDragging=r.isSwiping,r.startPoints=r.newPoints,i.each(a.slides,function(e,t){var o,n;i.fancybox.stop(t.$slide),o=i.fancybox.getTranslate(t.$slide),n=i.fancybox.getTranslate(a.$refs.stage),t.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(e,t){return(t.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),t.pos===a.current.pos&&(r.sliderStartPos.top=o.top-n.top,r.sliderStartPos.left=o.left-n.left),i.fancybox.setTranslate(t.$slide,{top:o.top-n.top,left:o.left-n.left})}),a.SlideShow&&a.SlideShow.isActive&&a.SlideShow.stop()}},c.prototype.onPan=function(){var e=this;if(r(e.newPoints[0],e.realPoints[0])<(i.fancybox.isMobile?10:5))return void(e.startPoints=e.newPoints);e.canTap=!1,e.contentLastPos=e.limitMovement(),e.requestId&&n(e.requestId),e.requestId=o(function(){i.fancybox.setTranslate(e.$content,e.contentLastPos)})},c.prototype.limitMovement=function(){var e,t,i,o,n,s,r=this,a=r.canvasWidth,l=r.canvasHeight,d=r.distanceX,c=r.distanceY,u=r.contentStartPos,p=u.left,f=u.top,h=u.width,g=u.height;return n=h>a?p+d:p,s=f+c,e=Math.max(0,.5*a-.5*h),t=Math.max(0,.5*l-.5*g),i=Math.min(a-h,.5*a-.5*h),o=Math.min(l-g,.5*l-.5*g),d>0&&n>e&&(n=e-1+Math.pow(-e+p+d,.8)||0),d<0&&n<i&&(n=i+1-Math.pow(i-p-d,.8)||0),c>0&&s>t&&(s=t-1+Math.pow(-t+f+c,.8)||0),c<0&&s<o&&(s=o+1-Math.pow(o-f-c,.8)||0),{top:s,left:n}},c.prototype.limitPosition=function(e,t,i,o){var n=this,s=n.canvasWidth,r=n.canvasHeight;return i>s?(e=e>0?0:e,e=e<s-i?s-i:e):e=Math.max(0,s/2-i/2),o>r?(t=t>0?0:t,t=t<r-o?r-o:t):t=Math.max(0,r/2-o/2),{top:t,left:e}},c.prototype.onZoom=function(){var t=this,s=t.contentStartPos,a=s.width,l=s.height,d=s.left,c=s.top,u=r(t.newPoints[0],t.newPoints[1]),p=u/t.startDistanceBetweenFingers,f=Math.floor(a*p),h=Math.floor(l*p),g=(a-f)*t.percentageOfImageAtPinchPointX,v=(l-h)*t.percentageOfImageAtPinchPointY,m=(t.newPoints[0].x+t.newPoints[1].x)/2-i(e).scrollLeft(),y=(t.newPoints[0].y+t.newPoints[1].y)/2-i(e).scrollTop(),b=m-t.centerPointStartX,w=y-t.centerPointStartY,T=d+(g+b),S=c+(v+w),k={top:S,left:T,scaleX:p,scaleY:p};t.canTap=!1,t.newWidth=f,t.newHeight=h,t.contentLastPos=k,t.requestId&&n(t.requestId),t.requestId=o(function(){i.fancybox.setTranslate(t.$content,t.contentLastPos)})},c.prototype.ontouchend=function(e){var o=this,r=o.isSwiping,a=o.isPanning,l=o.isZooming,d=o.isScrolling;if(o.endPoints=s(e),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),i(t).off(".fb.touch"),t.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(n(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(e);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,a?o.endPanning():l?o.endZooming():o.endSwiping(r,d)},c.prototype.endSwiping=function(e,t){var o=this,n=!1,s=o.instance.group.length,r=Math.abs(o.distanceX),a="x"==e&&s>1&&(o.dMs>130&&r>10||r>50);o.sliderLastPos=null,"y"==e&&!t&&Math.abs(o.distanceY)>50?(i.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),n=o.instance.close(!0,250)):a&&o.distanceX>0?n=o.instance.previous(300):a&&o.distanceX<0&&(n=o.instance.next(300)),!1!==n||"x"!=e&&"y"!=e||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},c.prototype.endPanning=function(){var e,t,o,n=this;n.contentLastPos&&(!1===n.opts.momentum||n.dMs>350?(e=n.contentLastPos.left,t=n.contentLastPos.top):(e=n.contentLastPos.left+500*n.velocityX,t=n.contentLastPos.top+500*n.velocityY),o=n.limitPosition(e,t,n.contentStartPos.width,n.contentStartPos.height),o.width=n.contentStartPos.width,o.height=n.contentStartPos.height,i.fancybox.animate(n.$content,o,366))},c.prototype.endZooming=function(){var e,t,o,n,s=this,r=s.instance.current,a=s.newWidth,l=s.newHeight;s.contentLastPos&&(e=s.contentLastPos.left,t=s.contentLastPos.top,n={top:t,left:e,width:a,height:l,scaleX:1,scaleY:1},i.fancybox.setTranslate(s.$content,n),a<s.canvasWidth&&l<s.canvasHeight?s.instance.scaleToFit(150):a>r.width||l>r.height?s.instance.scaleToActual(s.centerPointStartX,s.centerPointStartY,150):(o=s.limitPosition(e,t,a,l),i.fancybox.animate(s.$content,o,150)))},c.prototype.onTap=function(t){var o,n=this,r=i(t.target),a=n.instance,l=a.current,d=t&&s(t)||n.startPoints,c=d[0]?d[0].x-i(e).scrollLeft()-n.stagePos.left:0,u=d[0]?d[0].y-i(e).scrollTop()-n.stagePos.top:0,p=function(e){var o=l.opts[e];if(i.isFunction(o)&&(o=o.apply(a,[l,t])),o)switch(o){case"close":a.close(n.startEvent);break;case"toggleControls":a.toggleControls();break;case"next":a.next();break;case"nextOrClose":a.group.length>1?a.next():a.close(n.startEvent);break;case"zoom":"image"==l.type&&(l.isLoaded||l.$ghost)&&(a.canPan()?a.scaleToFit():a.isScaledDown()?a.scaleToActual(c,u):a.group.length<2&&a.close(n.startEvent))}};if((!t.originalEvent||2!=t.originalEvent.button)&&(r.is("img")||!(c>r[0].clientWidth+r.offset().left))){if(r.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(r.is(".fancybox-slide"))o="Slide";else{if(!a.current.$content||!a.current.$content.find(r).addBack().filter(r).length)return;o="Content"}if(n.tapped){if(clearTimeout(n.tapped),n.tapped=null,Math.abs(c-n.tapX)>50||Math.abs(u-n.tapY)>50)return this;p("dblclick"+o)}else n.tapX=c,n.tapY=u,l.opts["dblclick"+o]&&l.opts["dblclick"+o]!==l.opts["click"+o]?n.tapped=setTimeout(function(){n.tapped=null,a.isAnimating||p("click"+o)},500):p("click"+o);return this}},i(t).on("onActivate.fb",function(e,t){t&&!t.Guestures&&(t.Guestures=new c(t))}).on("beforeClose.fb",function(e,t){t&&t.Guestures&&t.Guestures.destroy()})}(window,document,jQuery),function(e,t){t.extend(!0,t.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var i=function(e){this.instance=e,this.init()};t.extend(i.prototype,{timer:null,isActive:!1,$button:null,init:function(){var e=this,i=e.instance,o=i.group[i.currIndex].opts.slideShow;e.$button=i.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){e.toggle()}),i.group.length<2||!o?e.$button.hide():o.progress&&(e.$progress=t('<div class="fancybox-progress"></div>').appendTo(i.$refs.inner))},set:function(e){var i=this,o=i.instance,n=o.current;n&&(!0===e||n.opts.loop||o.currIndex<o.group.length-1)?i.isActive&&"video"!==n.contentType&&(i.$progress&&t.fancybox.animate(i.$progress.show(),{scaleX:1},n.opts.slideShow.speed),i.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},n.opts.slideShow.speed)):(i.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var e=this;clearTimeout(e.timer),e.timer=null,e.$progress&&e.$progress.removeAttr("style").hide()},start:function(){var e=this,t=e.instance.current;t&&(e.$button.attr("title",(t.opts.i18n[t.opts.lang]||t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),e.isActive=!0,t.isComplete&&e.set(!0),e.instance.trigger("onSlideShowChange",!0))},stop:function(){var e=this,t=e.instance.current;e.clear(),e.$button.attr("title",(t.opts.i18n[t.opts.lang]||t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),e.isActive=!1,e.instance.trigger("onSlideShowChange",!1),e.$progress&&e.$progress.removeAttr("style").hide()},toggle:function(){var e=this;e.isActive?e.stop():e.start()}}),t(e).on({"onInit.fb":function(e,t){t&&!t.SlideShow&&(t.SlideShow=new i(t))},"beforeShow.fb":function(e,t,i,o){var n=t&&t.SlideShow;o?n&&i.opts.slideShow.autoStart&&n.start():n&&n.isActive&&n.clear()},"afterShow.fb":function(e,t,i){var o=t&&t.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(i,o,n,s,r){var a=o&&o.SlideShow;!a||!n.opts.slideShow||80!==r&&32!==r||t(e.activeElement).is("button,a,input")||(s.preventDefault(),a.toggle())},"beforeClose.fb onDeactivate.fb":function(e,t){var i=t&&t.SlideShow;i&&i.stop()}}),t(e).on("visibilitychange",function(){var i=t.fancybox.getInstance(),o=i&&i.SlideShow;o&&o.isActive&&(e.hidden?o.clear():o.set())})}(document,jQuery),function(e,t){var i=function(){for(var t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i={},o=0;o<t.length;o++){var n=t[o];if(n&&n[1]in e){for(var s=0;s<n.length;s++)i[t[0][s]]=n[s];return i}}return!1}();if(i){var o={request:function(t){t=t||e.documentElement,t[i.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)},exit:function(){e[i.exitFullscreen]()},toggle:function(t){t=t||e.documentElement,this.isFullscreen()?this.exit():this.request(t)},isFullscreen:function(){return Boolean(e[i.fullscreenElement])},enabled:function(){return Boolean(e[i.fullscreenEnabled])}};t.extend(!0,t.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),t(e).on(i.fullscreenchange,function(){var e=o.isFullscreen(),i=t.fancybox.getInstance();i&&(i.current&&"image"===i.current.type&&i.isAnimating&&(i.isAnimating=!1,i.update(!0,!0,0),i.isComplete||i.complete()),i.trigger("onFullscreenChange",e),i.$refs.container.toggleClass("fancybox-is-fullscreen",e),i.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!e).toggleClass("fancybox-button--fsexit",e))})}t(e).on({"onInit.fb":function(e,t){var n;if(!i)return void t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();t&&t.group[t.currIndex].opts.fullScreen?(n=t.$refs.container,n.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(e){e.stopPropagation(),e.preventDefault(),o.toggle()}),t.opts.fullScreen&&!0===t.opts.fullScreen.autoStart&&o.request(),t.FullScreen=o):t&&t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(e,t,i,o,n){t&&t.FullScreen&&70===n&&(o.preventDefault(),t.FullScreen.toggle())},"beforeClose.fb":function(e,t){t&&t.FullScreen&&t.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(e,t){var i="fancybox-thumbs";t.fancybox.defaults=t.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},t.fancybox.defaults);var o=function(e){this.init(e)};t.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(e){var t=this,i=e.group,o=0;t.instance=e,t.opts=i[e.currIndex].opts.thumbs,e.Thumbs=t,t.$button=e.$refs.toolbar.find("[data-fancybox-thumbs]");for(var n=0,s=i.length;n<s&&(i[n].thumb&&o++,!(o>1));n++);o>1&&t.opts?(t.$button.removeAttr("style").on("click",function(){t.toggle()}),t.isActive=!0):t.$button.hide()},create:function(){var e,o=this,n=o.instance,s=o.opts.parentEl,r=[];o.$grid||(o.$grid=t('<div class="'+i+" "+i+"-"+o.opts.axis+'"></div>').appendTo(n.$refs.container.find(s).addBack().filter(s)),o.$grid.on("click","a",function(){n.jumpTo(t(this).attr("data-index"))})),o.$list||(o.$list=t('<div class="'+i+'__list">').appendTo(o.$grid)),t.each(n.group,function(t,i){e=i.thumb,e||"image"!==i.type||(e=i.src),r.push('<a href="javascript:;" tabindex="0" data-index="'+t+'"'+(e&&e.length?' style="background-image:url('+e+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=r.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+n.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(e){var t,i,o=this,n=o.$list,s=o.$grid;o.instance.current&&(t=n.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),i=t.position(),"y"===o.opts.axis&&(i.top<0||i.top>n.height()-t.outerHeight())?n.stop().animate({scrollTop:n.scrollTop()+i.top},e):"x"===o.opts.axis&&(i.left<s.scrollLeft()||i.left>s.scrollLeft()+(s.width()-t.outerWidth()))&&n.parent().stop().animate({scrollLeft:i.left},e))},update:function(){var e=this;e.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),e.isVisible?(e.$grid||e.create(),e.instance.trigger("onThumbsShow"),e.focus(0)):e.$grid&&e.instance.trigger("onThumbsHide"),e.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),t(e).on({"onInit.fb":function(e,t){var i;t&&!t.Thumbs&&(i=new o(t),i.isActive&&!0===i.opts.autoStart&&i.show())},"beforeShow.fb":function(e,t,i,o){var n=t&&t.Thumbs;n&&n.isVisible&&n.focus(o?0:250)},"afterKeydown.fb":function(e,t,i,o,n){var s=t&&t.Thumbs;s&&s.isActive&&71===n&&(o.preventDefault(),s.toggle())},"beforeClose.fb":function(e,t){var i=t&&t.Thumbs;i&&i.isVisible&&!1!==i.opts.hideOnClose&&i.$grid.hide()}})}(document,jQuery),function(e,t){function i(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(e).replace(/[&<>"'`=\/]/g,function(e){return t[e]})}t.extend(!0,t.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(e,t){return!e.currentHash&&"inline"!==t.type&&"html"!==t.type&&(t.origSrc||t.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),t(e).on("click","[data-fancybox-share]",function(){var e,o,n=t.fancybox.getInstance(),s=n.current||null;s&&("function"===t.type(s.opts.share.url)&&(e=s.opts.share.url.apply(s,[n,s])),o=s.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===s.type?encodeURIComponent(s.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g,i(e)).replace(/\{\{descr\}\}/g,n.$caption?encodeURIComponent(n.$caption.text()):""),t.fancybox.open({src:n.translate(n,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(e,t){n.$refs.container.one("beforeClose.fb",function(){e.close(null,0)}),t.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(e,t,i){function o(){var t=e.location.hash.substr(1),i=t.split("-"),o=i.length>1&&/^\+?\d+$/.test(i[i.length-1])?parseInt(i.pop(-1),10)||1:1,n=i.join("-");return{hash:t,index:o<1?1:o,gallery:n}}function n(e){""!==e.gallery&&i("[data-fancybox='"+i.escapeSelector(e.gallery)+"']").eq(e.index-1).focus().trigger("click.fb-start")}function s(e){var t,i;return!!e&&(t=e.current?e.current.opts:e.opts,""!==(i=t.hash||(t.$orig?t.$orig.data("fancybox")||t.$orig.data("fancybox-trigger"):""))&&i)}i.escapeSelector||(i.escapeSelector=function(e){return(e+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e})}),i(function(){!1!==i.fancybox.defaults.hash&&(i(t).on({"onInit.fb":function(e,t){var i,n;!1!==t.group[t.currIndex].opts.hash&&(i=o(),(n=s(t))&&i.gallery&&n==i.gallery&&(t.currIndex=i.index-1))},"beforeShow.fb":function(i,o,n,r){var a;n&&!1!==n.opts.hash&&(a=s(o))&&(o.currentHash=a+(o.group.length>1?"-"+(n.index+1):""),e.location.hash!=="#"+o.currentHash&&(r&&!o.origHash&&(o.origHash=e.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in e.history?(e.history[r?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+o.currentHash),r&&(o.hasCreatedHistory=!0)):e.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(i,o,n){n&&!1!==n.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?e.history.back():o.currentHash&&("replaceState"in e.history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+(o.origHash||"")):e.location.hash=o.origHash),o.currentHash=null)}}),i(e).on("hashchange.fb",function(){var e=o(),t=null;i.each(i(".fancybox-container").get().reverse(),function(e,o){var n=i(o).data("FancyBox");if(n&&n.currentHash)return t=n,!1}),t?t.currentHash===e.gallery+"-"+e.index||1===e.index&&t.currentHash==e.gallery||(t.currentHash=null,t.close()):""!==e.gallery&&n(e)}),setTimeout(function(){i.fancybox.getInstance()||n(o())},50))})}(window,document,jQuery),function(e,t){var i=(new Date).getTime();t(e).on({"onInit.fb":function(e,t,o){t.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(e){var o=t.current,n=(new Date).getTime();t.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(e.preventDefault(),e.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(e=e.originalEvent||e,n-i<250||(i=n,t[(-e.deltaY||-e.deltaX||e.wheelDelta||-e.detail)<0?"next":"previous"]())))})}})}(document,jQuery)},/* 10 */
/***/
function(e,t,i){"use strict";var o,n,s;!function(r){n=[i(0)],o=r,void 0!==(s="function"==typeof o?o.apply(t,n):o)&&(e.exports=s)}(function(e){var t=window.Slick||{};t=function(){function t(t,o){var n,s=this;s.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:e(t),appendDots:e(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(t,i){return e('<button type="button" />').text(i+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},s.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(s,s.initials),s.activeBreakpoint=null,s.animType=null,s.animProp=null,s.breakpoints=[],s.breakpointSettings=[],s.cssTransitions=!1,s.focussed=!1,s.interrupted=!1,s.hidden="hidden",s.paused=!0,s.positionProp=null,s.respondTo=null,s.rowCount=1,s.shouldClick=!0,s.$slider=e(t),s.$slidesCache=null,s.transformType=null,s.transitionType=null,s.visibilityChange="visibilitychange",s.windowWidth=0,s.windowTimer=null,n=e(t).data("slick")||{},s.options=e.extend({},s.defaults,o,n),s.currentSlide=s.options.initialSlide,s.originalSettings=s.options,void 0!==document.mozHidden?(s.hidden="mozHidden",s.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(s.hidden="webkitHidden",s.visibilityChange="webkitvisibilitychange"),s.autoPlay=e.proxy(s.autoPlay,s),s.autoPlayClear=e.proxy(s.autoPlayClear,s),s.autoPlayIterator=e.proxy(s.autoPlayIterator,s),s.changeSlide=e.proxy(s.changeSlide,s),s.clickHandler=e.proxy(s.clickHandler,s),s.selectHandler=e.proxy(s.selectHandler,s),s.setPosition=e.proxy(s.setPosition,s),s.swipeHandler=e.proxy(s.swipeHandler,s),s.dragHandler=e.proxy(s.dragHandler,s),s.keyHandler=e.proxy(s.keyHandler,s),s.instanceUid=i++,
// A simple way to check for HTML strings
// Strict HTML recognition (must start with <)
// Extracted from jQuery v1.11 source
s.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,s.registerBreakpoints(),s.init(!0)}var i=0;return t}(),t.prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.addSlide=t.prototype.slickAdd=function(t,i,o){var n=this;if("boolean"==typeof i)o=i,i=null;else if(i<0||i>=n.slideCount)return!1;n.unload(),"number"==typeof i?0===i&&0===n.$slides.length?e(t).appendTo(n.$slideTrack):o?e(t).insertBefore(n.$slides.eq(i)):e(t).insertAfter(n.$slides.eq(i)):!0===o?e(t).prependTo(n.$slideTrack):e(t).appendTo(n.$slideTrack),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slides.each(function(t,i){e(i).attr("data-slick-index",t)}),n.$slidesCache=n.$slides,n.reinit()},t.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},t.prototype.animateSlide=function(t,i){var o={},n=this;n.animateHeight(),!0===n.options.rtl&&!1===n.options.vertical&&(t=-t),!1===n.transformsEnabled?!1===n.options.vertical?n.$slideTrack.animate({left:t},n.options.speed,n.options.easing,i):n.$slideTrack.animate({top:t},n.options.speed,n.options.easing,i):!1===n.cssTransitions?(!0===n.options.rtl&&(n.currentLeft=-n.currentLeft),e({animStart:n.currentLeft}).animate({animStart:t},{duration:n.options.speed,easing:n.options.easing,step:function(e){e=Math.ceil(e),!1===n.options.vertical?(o[n.animType]="translate("+e+"px, 0px)",n.$slideTrack.css(o)):(o[n.animType]="translate(0px,"+e+"px)",n.$slideTrack.css(o))},complete:function(){i&&i.call()}})):(n.applyTransition(),t=Math.ceil(t),!1===n.options.vertical?o[n.animType]="translate3d("+t+"px, 0px, 0px)":o[n.animType]="translate3d(0px,"+t+"px, 0px)",n.$slideTrack.css(o),i&&setTimeout(function(){n.disableTransition(),i.call()},n.options.speed))},t.prototype.getNavTarget=function(){var t=this,i=t.options.asNavFor;return i&&null!==i&&(i=e(i).not(t.$slider)),i},t.prototype.asNavFor=function(t){var i=this,o=i.getNavTarget();null!==o&&"object"==typeof o&&o.each(function(){var i=e(this).slick("getSlick");i.unslicked||i.slideHandler(t,!0)})},t.prototype.applyTransition=function(e){var t=this,i={};!1===t.options.fade?i[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:i[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,!1===t.options.fade?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(!1===e.options.infinite&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1==0&&(e.direction=1))),e.slideHandler(t))},t.prototype.buildArrows=function(){var t=this;!0===t.options.arrows&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),!0!==t.options.infinite&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,i,o=this;if(!0===o.options.dots&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),i=e("<ul />").addClass(o.options.dotsClass),t=0;t<=o.getDotCount();t+=1)i.append(e("<li />").append(o.options.customPaging.call(this,o,t)));o.$dots=i.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,i){e(i).attr("data-slick-index",t).data("originalStyling",e(i).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),!0!==t.options.centerMode&&!0!==t.options.swipeToSlide||(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),!0===t.options.draggable&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,i,o,n,s,r,a=this;if(o=document.createDocumentFragment(),s=a.$slider.children(),a.options.rows>0){for(r=a.options.slidesPerRow*a.options.rows,n=Math.ceil(s.length/r),e=0;e<n;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var d=document.createElement("div");for(i=0;i<a.options.slidesPerRow;i++){var c=e*r+(t*a.options.slidesPerRow+i);s.get(c)&&d.appendChild(s.get(c))}l.appendChild(d)}o.appendChild(l)}a.$slider.empty().append(o),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.checkResponsive=function(t,i){var o,n,s,r=this,a=!1,l=r.$slider.width(),d=window.innerWidth||e(window).width();if("window"===r.respondTo?s=d:"slider"===r.respondTo?s=l:"min"===r.respondTo&&(s=Math.min(d,l)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){n=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?s<r.breakpoints[o]&&(n=r.breakpoints[o]):s>r.breakpoints[o]&&(n=r.breakpoints[o]));null!==n?null!==r.activeBreakpoint?(n!==r.activeBreakpoint||i)&&(r.activeBreakpoint=n,"unslick"===r.breakpointSettings[n]?r.unslick(n):(r.options=e.extend({},r.originalSettings,r.breakpointSettings[n]),!0===t&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),a=n):(r.activeBreakpoint=n,"unslick"===r.breakpointSettings[n]?r.unslick(n):(r.options=e.extend({},r.originalSettings,r.breakpointSettings[n]),!0===t&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),a=n):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===t&&(r.currentSlide=r.options.initialSlide),r.refresh(t),a=n),
// only trigger breakpoints during an actual break. not on initialize.
t||!1===a||r.$slider.trigger("breakpoint",[r,a])}},t.prototype.changeSlide=function(t,i){var o,n,s,r=this,a=e(t.currentTarget);switch(
// If target is a link, prevent default action.
a.is("a")&&t.preventDefault(),
// If target is not the <li> element (ie: a child), find the <li>.
a.is("li")||(a=a.closest("li")),s=r.slideCount%r.options.slidesToScroll!=0,o=s?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,t.data.message){case"previous":n=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-n,!1,i);break;case"next":n=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+n,!1,i);break;case"index":var l=0===t.data.index?0:t.data.index||a.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(l),!1,i),a.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,i,o=this;if(t=o.getNavigableIndexes(),i=0,e>t[t.length-1])e=t[t.length-1];else for(var n in t){if(e<t[n]){e=i;break}i=t[n]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&(e("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",e.proxy(t.interrupt,t,!0)).off("mouseleave.slick",e.proxy(t.interrupt,t,!1)),!0===t.options.accessibility&&t.$dots.off("keydown.slick",t.keyHandler)),t.$slider.off("focus.slick blur.slick"),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide),!0===t.options.accessibility&&(t.$prevArrow&&t.$prevArrow.off("keydown.slick",t.keyHandler),t.$nextArrow&&t.$nextArrow.off("keydown.slick",t.keyHandler))),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),!0===t.options.accessibility&&t.$list.off("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>0&&(e=t.$slides.children().children(),e.removeAttr("style"),t.$slider.empty().append(e))},t.prototype.clickHandler=function(e){!1===this.shouldClick&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var i=this;i.autoPlayClear(),i.touchObject={},i.cleanUpEvents(),e(".slick-cloned",i.$slider).detach(),i.$dots&&i.$dots.remove(),i.$prevArrow&&i.$prevArrow.length&&(i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.prevArrow)&&i.$prevArrow.remove()),i.$nextArrow&&i.$nextArrow.length&&(i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.nextArrow)&&i.$nextArrow.remove()),i.$slides&&(i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){e(this).attr("style",e(this).data("originalStyling"))}),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.detach(),i.$list.detach(),i.$slider.append(i.$slides)),i.cleanUpRows(),i.$slider.removeClass("slick-slider"),i.$slider.removeClass("slick-initialized"),i.$slider.removeClass("slick-dotted"),i.unslicked=!0,t||i.$slider.trigger("destroy",[i])},t.prototype.disableTransition=function(e){var t=this,i={};i[t.transitionType]="",!1===t.options.fade?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.fadeSlide=function(e,t){var i=this;!1===i.cssTransitions?(i.$slides.eq(e).css({zIndex:i.options.zIndex}),i.$slides.eq(e).animate({opacity:1},i.options.speed,i.options.easing,t)):(i.applyTransition(e),i.$slides.eq(e).css({opacity:1,zIndex:i.options.zIndex}),t&&setTimeout(function(){i.disableTransition(e),t.call()},i.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;!1===t.cssTransitions?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(i){i.stopImmediatePropagation();var o=e(this);setTimeout(function(){t.options.pauseOnFocus&&(t.focussed=o.is(":focus"),t.autoPlay())},0)})},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){return this.currentSlide},t.prototype.getDotCount=function(){var e=this,t=0,i=0,o=0;if(!0===e.options.infinite)if(e.slideCount<=e.options.slidesToShow)++o;else for(;t<e.slideCount;)++o,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(!0===e.options.centerMode)o=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++o,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else o=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return o-1},t.prototype.getLeft=function(e){var t,i,o,n,s=this,r=0;return s.slideOffset=0,i=s.$slides.first().outerHeight(!0),!0===s.options.infinite?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,n=-1,!0===s.options.vertical&&!0===s.options.centerMode&&(2===s.options.slidesToShow?n=-1.5:1===s.options.slidesToShow&&(n=-2)),r=i*s.options.slidesToShow*n),s.slideCount%s.options.slidesToScroll!=0&&e+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(e>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(e-s.slideCount))*s.slideWidth*-1,r=(s.options.slidesToShow-(e-s.slideCount))*i*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,r=s.slideCount%s.options.slidesToScroll*i*-1))):e+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(e+s.options.slidesToShow-s.slideCount)*s.slideWidth,r=(e+s.options.slidesToShow-s.slideCount)*i),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,r=0),!0===s.options.centerMode&&s.slideCount<=s.options.slidesToShow?s.slideOffset=s.slideWidth*Math.floor(s.options.slidesToShow)/2-s.slideWidth*s.slideCount/2:!0===s.options.centerMode&&!0===s.options.infinite?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:!0===s.options.centerMode&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),t=!1===s.options.vertical?e*s.slideWidth*-1+s.slideOffset:e*i*-1+r,!0===s.options.variableWidth&&(o=s.slideCount<=s.options.slidesToShow||!1===s.options.infinite?s.$slideTrack.children(".slick-slide").eq(e):s.$slideTrack.children(".slick-slide").eq(e+s.options.slidesToShow),t=!0===s.options.rtl?o[0]?-1*(s.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===s.options.centerMode&&(o=s.slideCount<=s.options.slidesToShow||!1===s.options.infinite?s.$slideTrack.children(".slick-slide").eq(e):s.$slideTrack.children(".slick-slide").eq(e+s.options.slidesToShow+1),t=!0===s.options.rtl?o[0]?-1*(s.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,t+=(s.$list.width()-o.outerWidth())/2)),t},t.prototype.getOption=t.prototype.slickGetOption=function(e){return this.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,i=0,o=0,n=[];for(!1===t.options.infinite?e=t.slideCount:(i=-1*t.options.slidesToScroll,o=-1*t.options.slidesToScroll,e=2*t.slideCount);i<e;)n.push(i),i=o+t.options.slidesToScroll,o+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return n},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,i,o=this;return i=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(n,s){if(s.offsetLeft-i+e(s).outerWidth()/2>-1*o.swipeLeft)return t=s,!1}),Math.abs(e(t).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){this.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var i=this;e(i.$slider).hasClass("slick-initialized")||(e(i.$slider).addClass("slick-initialized"),i.buildRows(),i.buildOut(),i.setProps(),i.startLoad(),i.loadSlider(),i.initializeEvents(),i.updateArrows(),i.updateDots(),i.checkResponsive(!0),i.focusHandler()),t&&i.$slider.trigger("init",[i]),!0===i.options.accessibility&&i.initADA(),i.options.autoplay&&(i.paused=!1,i.autoPlay())},t.prototype.initADA=function(){var t=this,i=Math.ceil(t.slideCount/t.options.slidesToShow),o=t.getNavigableIndexes().filter(function(e){return e>=0&&e<t.slideCount});t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==t.$dots&&(t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i){var n=o.indexOf(i);if(e(this).attr({role:"tabpanel",id:"slick-slide"+t.instanceUid+i,tabindex:-1}),-1!==n){var s="slick-slide-control"+t.instanceUid+n;e("#"+s).length&&e(this).attr({"aria-describedby":s})}}),t.$dots.attr("role","tablist").find("li").each(function(n){var s=o[n];e(this).attr({role:"presentation"}),e(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+t.instanceUid+n,"aria-controls":"slick-slide"+t.instanceUid+s,"aria-label":n+1+" of "+i,"aria-selected":null,tabindex:"-1"})}).eq(t.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var n=t.currentSlide,s=n+t.options.slidesToShow;n<s;n++)t.options.focusOnChange?t.$slides.eq(n).attr({tabindex:"0"}):t.$slides.eq(n).removeAttr("tabindex");t.activateADA()},t.prototype.initArrowEvents=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow.on("keydown.slick",e.keyHandler),e.$nextArrow.on("keydown.slick",e.keyHandler)))},t.prototype.initDotEvents=function(){var t=this;!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&(e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),!0===t.options.accessibility&&t.$dots.on("keydown.slick",t.keyHandler)),!0===t.options.dots&&!0===t.options.pauseOnDotsHover&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.interrupt,t,!0)).on("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.interrupt,t,!1)))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),!0===t.options.accessibility&&t.$list.on("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(t.setPosition)},t.prototype.initUI=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},t.prototype.keyHandler=function(e){var t=this;
//Dont slide if the cursor is inside the form fields and arrow keys are pressed
e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&!0===t.options.accessibility?t.changeSlide({data:{message:!0===t.options.rtl?"next":"previous"}}):39===e.keyCode&&!0===t.options.accessibility&&t.changeSlide({data:{message:!0===t.options.rtl?"previous":"next"}}))},t.prototype.lazyLoad=function(){function t(t){e("img[data-lazy]",t).each(function(){var t=e(this),i=e(this).attr("data-lazy"),o=e(this).attr("data-srcset"),n=e(this).attr("data-sizes")||r.$slider.attr("data-sizes"),s=document.createElement("img");s.onload=function(){t.animate({opacity:0},100,function(){o&&(t.attr("srcset",o),n&&t.attr("sizes",n)),t.attr("src",i).animate({opacity:1},200,function(){t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,t,i])})},s.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,t,i])},s.src=i})}var i,o,n,s,r=this;if(!0===r.options.centerMode?!0===r.options.infinite?(n=r.currentSlide+(r.options.slidesToShow/2+1),s=n+r.options.slidesToShow+2):(n=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),s=r.options.slidesToShow/2+1+2+r.currentSlide):(n=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,s=Math.ceil(n+r.options.slidesToShow),!0===r.options.fade&&(n>0&&n--,s<=r.slideCount&&s++)),i=r.$slider.find(".slick-slide").slice(n,s),"anticipated"===r.options.lazyLoad)for(var a=n-1,l=s,d=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)a<0&&(a=r.slideCount-1),i=i.add(d.eq(a)),i=i.add(d.eq(l)),a--,l++;t(i),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),t(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),t(o)):0===r.currentSlide&&(o=r.$slider.find(".slick-cloned").slice(-1*r.options.slidesToShow),t(o))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},t.prototype.next=t.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){var e=this;e.checkResponsive(),e.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){var e=this;e.autoPlayClear(),e.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},t.prototype.postSlide=function(t){var i=this;if(!i.unslicked&&(i.$slider.trigger("afterChange",[i,t]),i.animating=!1,i.slideCount>i.options.slidesToShow&&i.setPosition(),i.swipeLeft=null,i.options.autoplay&&i.autoPlay(),!0===i.options.accessibility&&(i.initADA(),i.options.focusOnChange))){e(i.$slides.get(i.currentSlide)).attr("tabindex",0).focus()}},t.prototype.prev=t.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.progressiveLazyLoad=function(t){t=t||1;var i,o,n,s,r,a=this,l=e("img[data-lazy]",a.$slider);l.length?(i=l.first(),o=i.attr("data-lazy"),n=i.attr("data-srcset"),s=i.attr("data-sizes")||a.$slider.attr("data-sizes"),r=document.createElement("img"),r.onload=function(){n&&(i.attr("srcset",n),s&&i.attr("sizes",s)),i.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===a.options.adaptiveHeight&&a.setPosition(),a.$slider.trigger("lazyLoaded",[a,i,o]),a.progressiveLazyLoad()},r.onerror=function(){t<3?/**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
setTimeout(function(){a.progressiveLazyLoad(t+1)},500):(i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,i,o]),a.progressiveLazyLoad())},r.src=o):a.$slider.trigger("allImagesLoaded",[a])},t.prototype.refresh=function(t){var i,o,n=this;o=n.slideCount-n.options.slidesToShow,
// in non-infinite sliders, we don't want to go past the
// last visible index.
!n.options.infinite&&n.currentSlide>o&&(n.currentSlide=o),
// if less slides than to show, go to start.
n.slideCount<=n.options.slidesToShow&&(n.currentSlide=0),i=n.currentSlide,n.destroy(!0),e.extend(n,n.initials,{currentSlide:i}),n.init(),t||n.changeSlide({data:{message:"index",index:i}},!1)},t.prototype.registerBreakpoints=function(){var t,i,o,n=this,s=n.options.responsive||null;if("array"===e.type(s)&&s.length){n.respondTo=n.options.respondTo||"window";for(t in s)if(o=n.breakpoints.length-1,s.hasOwnProperty(t)){
// loop through the breakpoints and cut out any existing
// ones with the same breakpoint number, we don't want dupes.
for(i=s[t].breakpoint;o>=0;)n.breakpoints[o]&&n.breakpoints[o]===i&&n.breakpoints.splice(o,1),o--;n.breakpoints.push(i),n.breakpointSettings[i]=s[t].settings}n.breakpoints.sort(function(e,t){return n.options.mobileFirst?e-t:t-e})}},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=e(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()},50))},t.prototype.removeSlide=t.prototype.slickRemove=function(e,t,i){var o=this;if("boolean"==typeof e?(t=e,e=!0===t?0:o.slideCount-1):e=!0===t?--e:e,o.slideCount<1||e<0||e>o.slideCount-1)return!1;o.unload(),!0===i?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(e).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},t.prototype.setCSS=function(e){var t,i,o=this,n={};!0===o.options.rtl&&(e=-e),t="left"==o.positionProp?Math.ceil(e)+"px":"0px",i="top"==o.positionProp?Math.ceil(e)+"px":"0px",n[o.positionProp]=e,!1===o.transformsEnabled?o.$slideTrack.css(n):(n={},!1===o.cssTransitions?(n[o.animType]="translate("+t+", "+i+")",o.$slideTrack.css(n)):(n[o.animType]="translate3d("+t+", "+i+", 0px)",o.$slideTrack.css(n)))},t.prototype.setDimensions=function(){var e=this;!1===e.options.vertical?!0===e.options.centerMode&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),!0===e.options.centerMode&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),!1===e.options.vertical&&!1===e.options.variableWidth?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):!0===e.options.variableWidth?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();!1===e.options.variableWidth&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,i=this;i.$slides.each(function(o,n){t=i.slideWidth*o*-1,!0===i.options.rtl?e(n).css({position:"relative",right:t,top:0,zIndex:i.options.zIndex-2,opacity:0}):e(n).css({position:"relative",left:t,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},t.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},t.prototype.setOption=t.prototype.slickSetOption=function(){/**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */
var t,i,o,n,s,r=this,a=!1;if("object"===e.type(arguments[0])?(o=arguments[0],a=arguments[1],s="multiple"):"string"===e.type(arguments[0])&&(o=arguments[0],n=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===e.type(arguments[1])?s="responsive":void 0!==arguments[1]&&(s="single")),"single"===s)r.options[o]=n;else if("multiple"===s)e.each(o,function(e,t){r.options[e]=t});else if("responsive"===s)for(i in n)if("array"!==e.type(r.options.responsive))r.options.responsive=[n[i]];else{
// loop through the responsive object and splice out duplicates.
for(t=r.options.responsive.length-1;t>=0;)r.options.responsive[t].breakpoint===n[i].breakpoint&&r.options.responsive.splice(t,1),t--;r.options.responsive.push(n[i])}a&&(r.unload(),r.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),!1===e.options.fade?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=!0===e.options.vertical?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||!0===e.options.useCSS&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&!1!==e.animType&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&!1!==e.animType},t.prototype.setSlideClasses=function(e){var t,i,o,n,s=this;if(i=s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),s.$slides.eq(e).addClass("slick-current"),!0===s.options.centerMode){var r=s.options.slidesToShow%2==0?1:0;t=Math.floor(s.options.slidesToShow/2),!0===s.options.infinite&&(e>=t&&e<=s.slideCount-1-t?s.$slides.slice(e-t+r,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(o=s.options.slidesToShow+e,i.slice(o-t+1+r,o+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?i.eq(i.length-1-s.options.slidesToShow).addClass("slick-center"):e===s.slideCount-1&&i.eq(s.options.slidesToShow).addClass("slick-center")),s.$slides.eq(e).addClass("slick-center")}else e>=0&&e<=s.slideCount-s.options.slidesToShow?s.$slides.slice(e,e+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=s.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(n=s.slideCount%s.options.slidesToShow,o=!0===s.options.infinite?s.options.slidesToShow+e:e,s.options.slidesToShow==s.options.slidesToScroll&&s.slideCount-e<s.options.slidesToShow?i.slice(o-(s.options.slidesToShow-n),o+n).addClass("slick-active").attr("aria-hidden","false"):i.slice(o,o+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==s.options.lazyLoad&&"anticipated"!==s.options.lazyLoad||s.lazyLoad()},t.prototype.setupInfinite=function(){var t,i,o,n=this;if(!0===n.options.fade&&(n.options.centerMode=!1),!0===n.options.infinite&&!1===n.options.fade&&(i=null,n.slideCount>n.options.slidesToShow)){for(o=!0===n.options.centerMode?n.options.slidesToShow+1:n.options.slidesToShow,t=n.slideCount;t>n.slideCount-o;t-=1)i=t-1,e(n.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i-n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");for(t=0;t<o+n.slideCount;t+=1)i=t,e(n.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i+n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");n.$slideTrack.find(".slick-cloned").find("[id]").each(function(){e(this).attr("id","")})}},t.prototype.interrupt=function(e){var t=this;e||t.autoPlay(),t.interrupted=e},t.prototype.selectHandler=function(t){var i=this,o=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),n=parseInt(o.attr("data-slick-index"));if(n||(n=0),i.slideCount<=i.options.slidesToShow)return void i.slideHandler(n,!1,!0);i.slideHandler(n)},t.prototype.slideHandler=function(e,t,i){var o,n,s,r,a,l=null,d=this;if(t=t||!1,!(!0===d.animating&&!0===d.options.waitForAnimate||!0===d.options.fade&&d.currentSlide===e)){if(!1===t&&d.asNavFor(e),o=e,l=d.getLeft(o),r=d.getLeft(d.currentSlide),d.currentLeft=null===d.swipeLeft?r:d.swipeLeft,!1===d.options.infinite&&!1===d.options.centerMode&&(e<0||e>d.getDotCount()*d.options.slidesToScroll))return void(!1===d.options.fade&&(o=d.currentSlide,!0!==i&&d.slideCount>d.options.slidesToShow?d.animateSlide(r,function(){d.postSlide(o)}):d.postSlide(o)));if(!1===d.options.infinite&&!0===d.options.centerMode&&(e<0||e>d.slideCount-d.options.slidesToScroll))return void(!1===d.options.fade&&(o=d.currentSlide,!0!==i&&d.slideCount>d.options.slidesToShow?d.animateSlide(r,function(){d.postSlide(o)}):d.postSlide(o)));if(d.options.autoplay&&clearInterval(d.autoPlayTimer),n=o<0?d.slideCount%d.options.slidesToScroll!=0?d.slideCount-d.slideCount%d.options.slidesToScroll:d.slideCount+o:o>=d.slideCount?d.slideCount%d.options.slidesToScroll!=0?0:o-d.slideCount:o,d.animating=!0,d.$slider.trigger("beforeChange",[d,d.currentSlide,n]),s=d.currentSlide,d.currentSlide=n,d.setSlideClasses(d.currentSlide),d.options.asNavFor&&(a=d.getNavTarget(),a=a.slick("getSlick"),a.slideCount<=a.options.slidesToShow&&a.setSlideClasses(d.currentSlide)),d.updateDots(),d.updateArrows(),!0===d.options.fade)return!0!==i?(d.fadeSlideOut(s),d.fadeSlide(n,function(){d.postSlide(n)})):d.postSlide(n),void d.animateHeight();!0!==i&&d.slideCount>d.options.slidesToShow?d.animateSlide(l,function(){d.postSlide(n)}):d.postSlide(n)}},t.prototype.startLoad=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,i,o,n=this;return e=n.touchObject.startX-n.touchObject.curX,t=n.touchObject.startY-n.touchObject.curY,i=Math.atan2(t,e),o=Math.round(180*i/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===n.options.rtl?"left":"right":o<=360&&o>=315?!1===n.options.rtl?"left":"right":o>=135&&o<=225?!1===n.options.rtl?"right":"left":!0===n.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},t.prototype.swipeEnd=function(e){var t,i,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(i=o.swipeDirection()){case"left":case"down":t=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":t=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=i&&(o.slideHandler(t),o.touchObject={},o.$slider.trigger("swipe",[o,i]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(!1===t.options.swipe||"ontouchend"in document&&!1===t.options.swipe||!1===t.options.draggable&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,!0===t.options.verticalSwiping&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,i,o,n,s,r,a=this;return s=void 0!==e.originalEvent?e.originalEvent.touches:null,!(!a.dragging||a.scrolling||s&&1!==s.length)&&(t=a.getLeft(a.currentSlide),a.touchObject.curX=void 0!==s?s[0].pageX:e.clientX,a.touchObject.curY=void 0!==s?s[0].pageY:e.clientY,a.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(a.touchObject.curX-a.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(a.touchObject.curY-a.touchObject.startY,2))),!a.options.verticalSwiping&&!a.swiping&&r>4?(a.scrolling=!0,!1):(!0===a.options.verticalSwiping&&(a.touchObject.swipeLength=r),i=a.swipeDirection(),void 0!==e.originalEvent&&a.touchObject.swipeLength>4&&(a.swiping=!0,e.preventDefault()),n=(!1===a.options.rtl?1:-1)*(a.touchObject.curX>a.touchObject.startX?1:-1),!0===a.options.verticalSwiping&&(n=a.touchObject.curY>a.touchObject.startY?1:-1),o=a.touchObject.swipeLength,a.touchObject.edgeHit=!1,!1===a.options.infinite&&(0===a.currentSlide&&"right"===i||a.currentSlide>=a.getDotCount()&&"left"===i)&&(o=a.touchObject.swipeLength*a.options.edgeFriction,a.touchObject.edgeHit=!0),!1===a.options.vertical?a.swipeLeft=t+o*n:a.swipeLeft=t+o*(a.$list.height()/a.listWidth)*n,!0===a.options.verticalSwiping&&(a.swipeLeft=t+o*n),!0!==a.options.fade&&!1!==a.options.touchMove&&(!0===a.animating?(a.swipeLeft=null,!1):void a.setCSS(a.swipeLeft))))},t.prototype.swipeStart=function(e){var t,i=this;if(i.interrupted=!0,1!==i.touchObject.fingerCount||i.slideCount<=i.options.slidesToShow)return i.touchObject={},!1;void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),i.touchObject.startX=i.touchObject.curX=void 0!==t?t.pageX:e.clientX,i.touchObject.startY=i.touchObject.curY=void 0!==t?t.pageY:e.clientY,i.dragging=!0},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateArrows=function(){var e=this;Math.floor(e.options.slidesToShow/2),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&!1===e.options.centerMode?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&!0===e.options.centerMode&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").end(),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active"))},t.prototype.visibility=function(){var e=this;e.options.autoplay&&(document[e.hidden]?e.interrupted=!0:e.interrupted=!1)},e.fn.slick=function(){var e,i,o=this,n=arguments[0],s=Array.prototype.slice.call(arguments,1),r=o.length;for(e=0;e<r;e++)if("object"==typeof n||void 0===n?o[e].slick=new t(o[e],n):i=o[e].slick[n].apply(o[e].slick,s),void 0!==i)return i;return o}})},/* 11 */
/***/
function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),r=i(0),a=o(r),l=i(1),d=o(l),c="alert",u=a.default.fn[c],p={DISMISS:'[data-dismiss="alert"]'},f={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},h={ALERT:"alert",FADE:"fade",SHOW:"show"},g=function(){function e(t){n(this,e),this._element=t}/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
// Getters
return s(e,[{key:"close",
// Public
value:function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)}},{key:"dispose",value:function(){a.default.removeData(this._element,"bs.alert"),this._element=null}},{key:"_getRootElement",value:function(e){var t=d.default.getSelectorFromElement(e),i=!1;return t&&(i=document.querySelector(t)),i||(i=(0,a.default)(e).closest("."+h.ALERT)[0]),i}},{key:"_triggerCloseEvent",value:function(e){var t=a.default.Event(f.CLOSE);return(0,a.default)(e).trigger(t),t}},{key:"_removeElement",value:function(e){var t=this;if((0,a.default)(e).removeClass(h.SHOW),!(0,a.default)(e).hasClass(h.FADE))return void this._destroyElement(e);var i=d.default.getTransitionDurationFromElement(e);(0,a.default)(e).one(d.default.TRANSITION_END,function(i){return t._destroyElement(e,i)}).emulateTransitionEnd(i)}},{key:"_destroyElement",value:function(e){(0,a.default)(e).detach().trigger(f.CLOSED).remove()}}],[{key:"_jQueryInterface",value:function(t){return this.each(function(){var i=(0,a.default)(this),o=i.data("bs.alert");o||(o=new e(this),i.data("bs.alert",o)),"close"===t&&o[t](this)})}},{key:"_handleDismiss",value:function(e){return function(t){t&&t.preventDefault(),e.close(this)}}},{key:"VERSION",get:function(){return"4.3.1"}}]),e}();(0,a.default)(document).on(f.CLICK_DATA_API,p.DISMISS,g._handleDismiss(new g)),/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */
a.default.fn[c]=g._jQueryInterface,a.default.fn[c].Constructor=g,a.default.fn[c].noConflict=function(){return a.default.fn[c]=u,g._jQueryInterface},t.default=g,e.exports=t.default},/* 12 */
/***/
function(e,t,i){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),s=i(0),r=function(e){return e&&e.__esModule?e:{default:e}}(s),a="button",l=r.default.fn[a],d={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},c={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:'input:not([type="hidden"])',ACTIVE:".active",BUTTON:".btn"},u={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},p=function(){function e(t){o(this,e),this._element=t}/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
// Getters
return n(e,[{key:"toggle",
// Public
value:function(){var e=!0,t=!0,i=(0,r.default)(this._element).closest(c.DATA_TOGGLE)[0];if(i){var o=this._element.querySelector(c.INPUT);if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains(d.ACTIVE))e=!1;else{var n=i.querySelector(c.ACTIVE);n&&(0,r.default)(n).removeClass(d.ACTIVE)}if(e){if(o.hasAttribute("disabled")||i.hasAttribute("disabled")||o.classList.contains("disabled")||i.classList.contains("disabled"))return;o.checked=!this._element.classList.contains(d.ACTIVE),(0,r.default)(o).trigger("change")}o.focus(),t=!1}}t&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(d.ACTIVE)),e&&(0,r.default)(this._element).toggleClass(d.ACTIVE)}},{key:"dispose",value:function(){r.default.removeData(this._element,"bs.button"),this._element=null}}],[{key:"_jQueryInterface",value:function(t){return this.each(function(){var i=(0,r.default)(this).data("bs.button");i||(i=new e(this),(0,r.default)(this).data("bs.button",i)),"toggle"===t&&i[t]()})}},{key:"VERSION",get:function(){return"4.3.1"}}]),e}();(0,r.default)(document).on(u.CLICK_DATA_API,c.DATA_TOGGLE_CARROT,function(e){e.preventDefault();var t=e.target;(0,r.default)(t).hasClass(d.BUTTON)||(t=(0,r.default)(t).closest(c.BUTTON)),p._jQueryInterface.call((0,r.default)(t),"toggle")}).on(u.FOCUS_BLUR_DATA_API,c.DATA_TOGGLE_CARROT,function(e){var t=(0,r.default)(e.target).closest(c.BUTTON)[0];(0,r.default)(t).toggleClass(d.FOCUS,/^focus(in)?$/.test(e.type))}),/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */
r.default.fn[a]=p._jQueryInterface,r.default.fn[a].Constructor=p,r.default.fn[a].noConflict=function(){return r.default.fn[a]=l,p._jQueryInterface},t.default=p,e.exports=t.default},/* 13 */
/***/
function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),a=i(0),l=o(a),d=i(1),c=o(d),u="collapse",p="bs.collapse",f=l.default.fn[u],h={toggle:!0,parent:""},g={toggle:"boolean",parent:"(string|element)"},v={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},m={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},y={WIDTH:"width",HEIGHT:"height"},b={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},w=function(){function e(t,i){n(this,e),this._isTransitioning=!1,this._element=t,this._config=this._getConfig(i),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var o=[].slice.call(document.querySelectorAll(b.DATA_TOGGLE)),s=0,r=o.length;s<r;s++){var a=o[s],l=c.default.getSelectorFromElement(a),d=[].slice.call(document.querySelectorAll(l)).filter(function(e){return e===t});null!==l&&d.length>0&&(this._selector=l,this._triggerArray.push(a))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
// Getters
return r(e,[{key:"toggle",
// Public
value:function(){(0,l.default)(this._element).hasClass(m.SHOW)?this.hide():this.show()}},{key:"show",value:function(){var t=this;if(!this._isTransitioning&&!(0,l.default)(this._element).hasClass(m.SHOW)){var i=void 0,o=void 0;if(this._parent&&(i=[].slice.call(this._parent.querySelectorAll(b.ACTIVES)).filter(function(e){return"string"==typeof t._config.parent?e.getAttribute("data-parent")===t._config.parent:e.classList.contains(m.COLLAPSE)}),0===i.length&&(i=null)),!(i&&(o=(0,l.default)(i).not(this._selector).data(p))&&o._isTransitioning)){var n=l.default.Event(v.SHOW);if((0,l.default)(this._element).trigger(n),!n.isDefaultPrevented()){i&&(e._jQueryInterface.call((0,l.default)(i).not(this._selector),"hide"),o||(0,l.default)(i).data(p,null));var s=this._getDimension();(0,l.default)(this._element).removeClass(m.COLLAPSE).addClass(m.COLLAPSING),this._element.style[s]=0,this._triggerArray.length&&(0,l.default)(this._triggerArray).removeClass(m.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var r=function(){(0,l.default)(t._element).removeClass(m.COLLAPSING).addClass(m.COLLAPSE).addClass(m.SHOW),t._element.style[s]="",t.setTransitioning(!1),(0,l.default)(t._element).trigger(v.SHOWN)},a=s[0].toUpperCase()+s.slice(1),d="scroll"+a,u=c.default.getTransitionDurationFromElement(this._element);(0,l.default)(this._element).one(c.default.TRANSITION_END,r).emulateTransitionEnd(u),this._element.style[s]=this._element[d]+"px"}}}}},{key:"hide",value:function(){var e=this;if(!this._isTransitioning&&(0,l.default)(this._element).hasClass(m.SHOW)){var t=l.default.Event(v.HIDE);if((0,l.default)(this._element).trigger(t),!t.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",c.default.reflow(this._element),(0,l.default)(this._element).addClass(m.COLLAPSING).removeClass(m.COLLAPSE).removeClass(m.SHOW);var o=this._triggerArray.length;if(o>0)for(var n=0;n<o;n++){var s=this._triggerArray[n],r=c.default.getSelectorFromElement(s);if(null!==r){var a=(0,l.default)([].slice.call(document.querySelectorAll(r)));a.hasClass(m.SHOW)||(0,l.default)(s).addClass(m.COLLAPSED).attr("aria-expanded",!1)}}this.setTransitioning(!0);var d=function(){e.setTransitioning(!1),(0,l.default)(e._element).removeClass(m.COLLAPSING).addClass(m.COLLAPSE).trigger(v.HIDDEN)};this._element.style[i]="";var u=c.default.getTransitionDurationFromElement(this._element);(0,l.default)(this._element).one(c.default.TRANSITION_END,d).emulateTransitionEnd(u)}}}},{key:"setTransitioning",value:function(e){this._isTransitioning=e}},{key:"dispose",value:function(){l.default.removeData(this._element,p),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}},{key:"_getConfig",value:function(e){// Coerce string values
return e=s({},h,e),e.toggle=Boolean(e.toggle),c.default.typeCheckConfig(u,e,g),e}},{key:"_getDimension",value:function(){return(0,l.default)(this._element).hasClass(y.WIDTH)?y.WIDTH:y.HEIGHT}},{key:"_getParent",value:function(){var t=this,i=void 0;c.default.isElement(this._config.parent)?(i=this._config.parent,
// It's a jQuery object
void 0!==this._config.parent.jquery&&(i=this._config.parent[0])):i=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',n=[].slice.call(i.querySelectorAll(o));return(0,l.default)(n).each(function(i,o){t._addAriaAndCollapsedClass(e._getTargetFromElement(o),[o])}),i}},{key:"_addAriaAndCollapsedClass",value:function(e,t){var i=(0,l.default)(e).hasClass(m.SHOW);t.length&&(0,l.default)(t).toggleClass(m.COLLAPSED,!i).attr("aria-expanded",i)}}],[{key:"_getTargetFromElement",value:function(e){var t=c.default.getSelectorFromElement(e);return t?document.querySelector(t):null}},{key:"_jQueryInterface",value:function(t){return this.each(function(){var i=(0,l.default)(this),o=i.data(p),n=s({},h,i.data(),"object"==typeof t&&t?t:{});if(!o&&n.toggle&&/show|hide/.test(t)&&(n.toggle=!1),o||(o=new e(this,n),i.data(p,o)),"string"==typeof t){if(void 0===o[t])throw new TypeError('No method named "'+t+'"');o[t]()}})}},{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return h}}]),e}();(0,l.default)(document).on(v.CLICK_DATA_API,b.DATA_TOGGLE,function(e){
// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
"A"===e.currentTarget.tagName&&e.preventDefault();var t=(0,l.default)(this),i=c.default.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));(0,l.default)(o).each(function(){var e=(0,l.default)(this),i=e.data(p),o=i?"toggle":t.data();w._jQueryInterface.call(e,o)})}),/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */
l.default.fn[u]=w._jQueryInterface,l.default.fn[u].Constructor=w,l.default.fn[u].noConflict=function(){return l.default.fn[u]=f,w._jQueryInterface},t.default=w,e.exports=t.default},/* 14 */
/***/
function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),a=i(0),l=o(a),d=i(4),c=o(d),u=i(1),p=o(u),f="dropdown",h="bs.dropdown",g="."+h,v=l.default.fn[f],m=new RegExp("38|40|27"),y={HIDE:"hide"+g,HIDDEN:"hidden"+g,SHOW:"show"+g,SHOWN:"shown"+g,CLICK:"click"+g,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},b={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",DROPRIGHT:"dropright",DROPLEFT:"dropleft",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",POSITION_STATIC:"position-static"},w={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"},T={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end",RIGHT:"right-start",RIGHTEND:"right-end",LEFT:"left-start",LEFTEND:"left-end"},S={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},k={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},C=function(){function e(t,i){n(this,e),this._element=t,this._popper=null,this._config=this._getConfig(i),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
// Getters
return r(e,[{key:"toggle",
// Public
value:function(){if(!this._element.disabled&&!(0,l.default)(this._element).hasClass(b.DISABLED)){var t=e._getParentFromElement(this._element),i=(0,l.default)(this._menu).hasClass(b.SHOW);if(e._clearMenus(),!i){var o={relatedTarget:this._element},n=l.default.Event(y.SHOW,o);if((0,l.default)(t).trigger(n),!n.isDefaultPrevented()){
// Disable totally Popper.js for Dropdown in Navbar
if(!this._inNavbar){/**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
if(void 0===c.default)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var s=this._element;"parent"===this._config.reference?s=t:p.default.isElement(this._config.reference)&&(s=this._config.reference,
// Check if it's jQuery element
void 0!==this._config.reference.jquery&&(s=this._config.reference[0])),
// If boundary is not `scrollParent`, then set position to `static`
// to allow the menu to "escape" the scroll parent's boundaries
// https://github.com/twbs/bootstrap/issues/24251
"scrollParent"!==this._config.boundary&&(0,l.default)(t).addClass(b.POSITION_STATIC),this._popper=new c.default(s,this._menu,this._getPopperConfig())}
// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&0===(0,l.default)(t).closest(w.NAVBAR_NAV).length&&(0,l.default)(document.body).children().on("mouseover",null,l.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),(0,l.default)(this._menu).toggleClass(b.SHOW),(0,l.default)(t).toggleClass(b.SHOW).trigger(l.default.Event(y.SHOWN,o))}}}}},{key:"show",value:function(){if(!(this._element.disabled||(0,l.default)(this._element).hasClass(b.DISABLED)||(0,l.default)(this._menu).hasClass(b.SHOW))){var t={relatedTarget:this._element},i=l.default.Event(y.SHOW,t),o=e._getParentFromElement(this._element);(0,l.default)(o).trigger(i),i.isDefaultPrevented()||((0,l.default)(this._menu).toggleClass(b.SHOW),(0,l.default)(o).toggleClass(b.SHOW).trigger(l.default.Event(y.SHOWN,t)))}}},{key:"hide",value:function(){if(!this._element.disabled&&!(0,l.default)(this._element).hasClass(b.DISABLED)&&(0,l.default)(this._menu).hasClass(b.SHOW)){var t={relatedTarget:this._element},i=l.default.Event(y.HIDE,t),o=e._getParentFromElement(this._element);(0,l.default)(o).trigger(i),i.isDefaultPrevented()||((0,l.default)(this._menu).toggleClass(b.SHOW),(0,l.default)(o).toggleClass(b.SHOW).trigger(l.default.Event(y.HIDDEN,t)))}}},{key:"dispose",value:function(){l.default.removeData(this._element,h),(0,l.default)(this._element).off(g),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)}},{key:"update",value:function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()}},{key:"_addEventListeners",value:function(){var e=this;(0,l.default)(this._element).on(y.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})}},{key:"_getConfig",value:function(e){return e=s({},this.constructor.Default,(0,l.default)(this._element).data(),e),p.default.typeCheckConfig(f,e,this.constructor.DefaultType),e}},{key:"_getMenuElement",value:function(){if(!this._menu){var t=e._getParentFromElement(this._element);t&&(this._menu=t.querySelector(w.MENU))}return this._menu}},{key:"_getPlacement",value:function(){var e=(0,l.default)(this._element.parentNode),t=T.BOTTOM;
// Handle dropup
return e.hasClass(b.DROPUP)?(t=T.TOP,(0,l.default)(this._menu).hasClass(b.MENURIGHT)&&(t=T.TOPEND)):e.hasClass(b.DROPRIGHT)?t=T.RIGHT:e.hasClass(b.DROPLEFT)?t=T.LEFT:(0,l.default)(this._menu).hasClass(b.MENURIGHT)&&(t=T.BOTTOMEND),t}},{key:"_detectNavbar",value:function(){return(0,l.default)(this._element).closest(".navbar").length>0}},{key:"_getOffset",value:function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=s({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t}},{key:"_getPopperConfig",value:function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};
// Disable Popper.js if we have a static display
return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),e}}],[{key:"_jQueryInterface",value:function(t){return this.each(function(){var i=(0,l.default)(this).data(h),o="object"==typeof t?t:null;if(i||(i=new e(this,o),(0,l.default)(this).data(h,i)),"string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t]()}})}},{key:"_clearMenus",value:function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var i=[].slice.call(document.querySelectorAll(w.DATA_TOGGLE)),o=0,n=i.length;o<n;o++){var s=e._getParentFromElement(i[o]),r=(0,l.default)(i[o]).data(h),a={relatedTarget:i[o]};if(t&&"click"===t.type&&(a.clickEvent=t),r){var d=r._menu;if((0,l.default)(s).hasClass(b.SHOW)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&l.default.contains(s,t.target))){var c=l.default.Event(y.HIDE,a);(0,l.default)(s).trigger(c),c.isDefaultPrevented()||(
// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&(0,l.default)(document.body).children().off("mouseover",null,l.default.noop),i[o].setAttribute("aria-expanded","false"),(0,l.default)(d).removeClass(b.SHOW),(0,l.default)(s).removeClass(b.SHOW).trigger(l.default.Event(y.HIDDEN,a)))}}}}},{key:"_getParentFromElement",value:function(e){var t=void 0,i=p.default.getSelectorFromElement(e);return i&&(t=document.querySelector(i)),t||e.parentNode}},{key:"_dataApiKeydownHandler",value:function(t){
// If not input/textarea:
//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// If input/textarea:
//  - If space key => not a dropdown command
//  - If key is other than escape
//    - If key is not up or down => not a dropdown command
//    - If trigger inside the menu => not a dropdown command
if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||(0,l.default)(t.target).closest(w.MENU).length)):m.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!(0,l.default)(this).hasClass(b.DISABLED))){var i=e._getParentFromElement(this),o=(0,l.default)(i).hasClass(b.SHOW);if(!o||o&&(27===t.which||32===t.which)){if(27===t.which){var n=i.querySelector(w.DATA_TOGGLE);(0,l.default)(n).trigger("focus")}return void(0,l.default)(this).trigger("click")}var s=[].slice.call(i.querySelectorAll(w.VISIBLE_ITEMS));if(0!==s.length){var r=s.indexOf(t.target);38===t.which&&r>0&&
// Up
r--,40===t.which&&r<s.length-1&&
// Down
r++,r<0&&(r=0),s[r].focus()}}}},{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return S}},{key:"DefaultType",get:function(){return k}}]),e}();(0,l.default)(document).on(y.KEYDOWN_DATA_API,w.DATA_TOGGLE,C._dataApiKeydownHandler).on(y.KEYDOWN_DATA_API,w.MENU,C._dataApiKeydownHandler).on(y.CLICK_DATA_API+" "+y.KEYUP_DATA_API,C._clearMenus).on(y.CLICK_DATA_API,w.DATA_TOGGLE,function(e){e.preventDefault(),e.stopPropagation(),C._jQueryInterface.call((0,l.default)(this),"toggle")}).on(y.CLICK_DATA_API,w.FORM_CHILD,function(e){e.stopPropagation()}),/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */
l.default.fn[f]=C._jQueryInterface,l.default.fn[f].Constructor=C,l.default.fn[f].noConflict=function(){return l.default.fn[f]=v,C._jQueryInterface},t.default=C,e.exports=t.default},/* 15 */
/***/
function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),a=i(0),l=o(a),d=i(1),c=o(d),u="modal",p=".bs.modal",f=l.default.fn[u],h={backdrop:!0,keyboard:!0,focus:!0,show:!0},g={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},v={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},m={SCROLLABLE:"modal-dialog-scrollable",SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},y={DIALOG:".modal-dialog",MODAL_BODY:".modal-body",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top"},b=function(){function e(t,i){n(this,e),this._config=this._getConfig(i),this._element=t,this._dialog=t.querySelector(y.DIALOG),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
// Getters
return r(e,[{key:"toggle",
// Public
value:function(e){return this._isShown?this.hide():this.show(e)}},{key:"show",value:function(e){var t=this;if(!this._isShown&&!this._isTransitioning){(0,l.default)(this._element).hasClass(m.FADE)&&(this._isTransitioning=!0);var i=l.default.Event(v.SHOW,{relatedTarget:e});(0,l.default)(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),(0,l.default)(this._element).on(v.CLICK_DISMISS,y.DATA_DISMISS,function(e){return t.hide(e)}),(0,l.default)(this._dialog).on(v.MOUSEDOWN_DISMISS,function(){(0,l.default)(t._element).one(v.MOUSEUP_DISMISS,function(e){(0,l.default)(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return t._showElement(e)}))}}},{key:"hide",value:function(e){var t=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var i=l.default.Event(v.HIDE);if((0,l.default)(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=(0,l.default)(this._element).hasClass(m.FADE);if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),(0,l.default)(document).off(v.FOCUSIN),(0,l.default)(this._element).removeClass(m.SHOW),(0,l.default)(this._element).off(v.CLICK_DISMISS),(0,l.default)(this._dialog).off(v.MOUSEDOWN_DISMISS),o){var n=c.default.getTransitionDurationFromElement(this._element);(0,l.default)(this._element).one(c.default.TRANSITION_END,function(e){return t._hideModal(e)}).emulateTransitionEnd(n)}else this._hideModal()}}}},{key:"dispose",value:function(){[window,this._element,this._dialog].forEach(function(e){return(0,l.default)(e).off(p)}),/**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */
(0,l.default)(document).off(v.FOCUSIN),l.default.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null}},{key:"handleUpdate",value:function(){this._adjustDialog()}},{key:"_getConfig",value:function(e){return e=s({},h,e),c.default.typeCheckConfig(u,e,g),e}},{key:"_showElement",value:function(e){var t=this,i=(0,l.default)(this._element).hasClass(m.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||
// Don't move modal's DOM position
document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),(0,l.default)(this._dialog).hasClass(m.SCROLLABLE)?this._dialog.querySelector(y.MODAL_BODY).scrollTop=0:this._element.scrollTop=0,i&&c.default.reflow(this._element),(0,l.default)(this._element).addClass(m.SHOW),this._config.focus&&this._enforceFocus();var o=l.default.Event(v.SHOWN,{relatedTarget:e}),n=function(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,(0,l.default)(t._element).trigger(o)};if(i){var s=c.default.getTransitionDurationFromElement(this._dialog);(0,l.default)(this._dialog).one(c.default.TRANSITION_END,n).emulateTransitionEnd(s)}else n()}},{key:"_enforceFocus",value:function(){var e=this;(0,l.default)(document).off(v.FOCUSIN).on(v.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===(0,l.default)(e._element).has(t.target).length&&e._element.focus()})}},{key:"_setEscapeEvent",value:function(){var e=this;this._isShown&&this._config.keyboard?(0,l.default)(this._element).on(v.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||(0,l.default)(this._element).off(v.KEYDOWN_DISMISS)}},{key:"_setResizeEvent",value:function(){var e=this;this._isShown?(0,l.default)(window).on(v.RESIZE,function(t){return e.handleUpdate(t)}):(0,l.default)(window).off(v.RESIZE)}},{key:"_hideModal",value:function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){(0,l.default)(document.body).removeClass(m.OPEN),e._resetAdjustments(),e._resetScrollbar(),(0,l.default)(e._element).trigger(v.HIDDEN)})}},{key:"_removeBackdrop",value:function(){this._backdrop&&((0,l.default)(this._backdrop).remove(),this._backdrop=null)}},{key:"_showBackdrop",value:function(e){var t=this,i=(0,l.default)(this._element).hasClass(m.FADE)?m.FADE:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=m.BACKDROP,i&&this._backdrop.classList.add(i),(0,l.default)(this._backdrop).appendTo(document.body),(0,l.default)(this._element).on(v.CLICK_DISMISS,function(e){if(t._ignoreBackdropClick)return void(t._ignoreBackdropClick=!1);e.target===e.currentTarget&&("static"===t._config.backdrop?t._element.focus():t.hide())}),i&&c.default.reflow(this._backdrop),(0,l.default)(this._backdrop).addClass(m.SHOW),!e)return;if(!i)return void e();var o=c.default.getTransitionDurationFromElement(this._backdrop);(0,l.default)(this._backdrop).one(c.default.TRANSITION_END,e).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){(0,l.default)(this._backdrop).removeClass(m.SHOW);var n=function(){t._removeBackdrop(),e&&e()};if((0,l.default)(this._element).hasClass(m.FADE)){var o=c.default.getTransitionDurationFromElement(this._backdrop);(0,l.default)(this._backdrop).one(c.default.TRANSITION_END,n).emulateTransitionEnd(o)}else n()}else e&&e()}},{key:"_adjustDialog",value:function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")}},{key:"_resetAdjustments",value:function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}},{key:"_checkScrollbar",value:function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()}},{key:"_setScrollbar",value:function(){var e=this;if(this._isBodyOverflowing){
// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
var t=[].slice.call(document.querySelectorAll(y.FIXED_CONTENT)),i=[].slice.call(document.querySelectorAll(y.STICKY_CONTENT));
// Adjust fixed content padding
(0,l.default)(t).each(function(t,i){var o=i.style.paddingRight,n=(0,l.default)(i).css("padding-right");(0,l.default)(i).data("padding-right",o).css("padding-right",parseFloat(n)+e._scrollbarWidth+"px")}),
// Adjust sticky content margin
(0,l.default)(i).each(function(t,i){var o=i.style.marginRight,n=(0,l.default)(i).css("margin-right");(0,l.default)(i).data("margin-right",o).css("margin-right",parseFloat(n)-e._scrollbarWidth+"px")});
// Adjust body padding
var o=document.body.style.paddingRight,n=(0,l.default)(document.body).css("padding-right");(0,l.default)(document.body).data("padding-right",o).css("padding-right",parseFloat(n)+this._scrollbarWidth+"px")}(0,l.default)(document.body).addClass(m.OPEN)}},{key:"_resetScrollbar",value:function(){
// Restore fixed content padding
var e=[].slice.call(document.querySelectorAll(y.FIXED_CONTENT));(0,l.default)(e).each(function(e,t){var i=(0,l.default)(t).data("padding-right");(0,l.default)(t).removeData("padding-right"),t.style.paddingRight=i||""});
// Restore sticky content
var t=[].slice.call(document.querySelectorAll(""+y.STICKY_CONTENT));(0,l.default)(t).each(function(e,t){var i=(0,l.default)(t).data("margin-right");void 0!==i&&(0,l.default)(t).css("margin-right",i).removeData("margin-right")});
// Restore body padding
var i=(0,l.default)(document.body).data("padding-right");(0,l.default)(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""}},{key:"_getScrollbarWidth",value:function(){
// thx d.walsh
var e=document.createElement("div");e.className=m.SCROLLBAR_MEASURER,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t}}],[{key:"_jQueryInterface",value:function(t,i){return this.each(function(){var o=(0,l.default)(this).data("bs.modal"),n=s({},h,(0,l.default)(this).data(),"object"==typeof t&&t?t:{});if(o||(o=new e(this,n),(0,l.default)(this).data("bs.modal",o)),"string"==typeof t){if(void 0===o[t])throw new TypeError('No method named "'+t+'"');o[t](i)}else n.show&&o.show(i)})}},{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return h}}]),e}();(0,l.default)(document).on(v.CLICK_DATA_API,y.DATA_TOGGLE,function(e){var t=this,i=void 0,o=c.default.getSelectorFromElement(this);o&&(i=document.querySelector(o));var n=(0,l.default)(i).data("bs.modal")?"toggle":s({},(0,l.default)(i).data(),(0,l.default)(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var r=(0,l.default)(i).one(v.SHOW,function(e){e.isDefaultPrevented()||r.one(v.HIDDEN,function(){(0,l.default)(t).is(":visible")&&t.focus()})});b._jQueryInterface.call((0,l.default)(i),n,this)}),/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */
l.default.fn[u]=b._jQueryInterface,l.default.fn[u].Constructor=b,l.default.fn[u].noConflict=function(){return l.default.fn[u]=f,b._jQueryInterface},t.default=b,e.exports=t.default},/* 16 */
/***/
function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),a=function(e,t,i){for(var o=!0;o;){var n=e,s=t,r=i;o=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,s);if(void 0!==a){if("value"in a)return a.value;var l=a.get;if(void 0===l)return;return l.call(r)}var d=Object.getPrototypeOf(n);if(null===d)return;e=d,t=s,i=r,o=!0,a=d=void 0}},l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},d=i(0),c=o(d),u=i(3),p=o(u),f="popover",h=".bs.popover",g=c.default.fn[f],v=new RegExp("(^|\\s)bs-popover\\S+","g"),m=l({},p.default.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),y=l({},p.default.DefaultType,{content:"(string|element|function)"}),b={FADE:"fade",SHOW:"show"},w={TITLE:".popover-header",CONTENT:".popover-body"},T={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,INSERTED:"inserted"+h,CLICK:"click"+h,FOCUSIN:"focusin"+h,FOCUSOUT:"focusout"+h,MOUSEENTER:"mouseenter"+h,MOUSELEAVE:"mouseleave"+h},S=function(e){function t(){n(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
return s(t,e),r(t,[{key:"isWithContent",
// Overrides
value:function(){return this.getTitle()||this._getContent()}},{key:"addAttachmentClass",value:function(e){(0,c.default)(this.getTipElement()).addClass("bs-popover-"+e)}},{key:"getTipElement",value:function(){return this.tip=this.tip||(0,c.default)(this.config.template)[0],this.tip}},{key:"setContent",value:function(){var e=(0,c.default)(this.getTipElement());
// We use append for html objects to maintain js events
this.setElementContent(e.find(w.TITLE),this.getTitle());var t=this._getContent();"function"==typeof t&&(t=t.call(this.element)),this.setElementContent(e.find(w.CONTENT),t),e.removeClass(b.FADE+" "+b.SHOW)}},{key:"_getContent",value:function(){return this.element.getAttribute("data-content")||this.config.content}},{key:"_cleanTipClass",value:function(){var e=(0,c.default)(this.getTipElement()),t=e.attr("class").match(v);null!==t&&t.length>0&&e.removeClass(t.join(""))}}],[{key:"_jQueryInterface",value:function(e){return this.each(function(){var i=(0,c.default)(this).data("bs.popover"),o="object"==typeof e?e:null;if((i||!/dispose|hide/.test(e))&&(i||(i=new t(this,o),(0,c.default)(this).data("bs.popover",i)),"string"==typeof e)){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})}},{key:"VERSION",
// Getters
get:function(){return"4.3.1"}},{key:"Default",get:function(){return m}},{key:"NAME",get:function(){return f}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return T}},{key:"EVENT_KEY",get:function(){return h}},{key:"DefaultType",get:function(){return y}}]),t}(p.default);c.default.fn[f]=S._jQueryInterface,c.default.fn[f].Constructor=S,c.default.fn[f].noConflict=function(){return c.default.fn[f]=g,S._jQueryInterface},t.default=S,e.exports=t.default},/* 17 */
/***/
function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),r=i(0),a=o(r),l=i(1),d=o(l),c=a.default.fn.tab,u={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},p={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},f={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",ACTIVE_UL:"> li > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},h=function(){function e(t){n(this,e),this._element=t}/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
// Getters
return s(e,[{key:"show",
// Public
value:function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&(0,a.default)(this._element).hasClass(p.ACTIVE)||(0,a.default)(this._element).hasClass(p.DISABLED))){var t=void 0,i=void 0,o=(0,a.default)(this._element).closest(f.NAV_LIST_GROUP)[0],n=d.default.getSelectorFromElement(this._element);if(o){var s="UL"===o.nodeName||"OL"===o.nodeName?f.ACTIVE_UL:f.ACTIVE;i=a.default.makeArray((0,a.default)(o).find(s)),i=i[i.length-1]}var r=a.default.Event(u.HIDE,{relatedTarget:this._element}),l=a.default.Event(u.SHOW,{relatedTarget:i});if(i&&(0,a.default)(i).trigger(r),(0,a.default)(this._element).trigger(l),!l.isDefaultPrevented()&&!r.isDefaultPrevented()){n&&(t=document.querySelector(n)),this._activate(this._element,o);var c=function(){var t=a.default.Event(u.HIDDEN,{relatedTarget:e._element}),o=a.default.Event(u.SHOWN,{relatedTarget:i});(0,a.default)(i).trigger(t),(0,a.default)(e._element).trigger(o)};t?this._activate(t,t.parentNode,c):c()}}}},{key:"dispose",value:function(){a.default.removeData(this._element,"bs.tab"),this._element=null}},{key:"_activate",value:function(e,t,i){var o=this,n=!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?(0,a.default)(t).children(f.ACTIVE):(0,a.default)(t).find(f.ACTIVE_UL),s=n[0],r=i&&s&&(0,a.default)(s).hasClass(p.FADE),l=function(){return o._transitionComplete(e,s,i)};if(s&&r){var c=d.default.getTransitionDurationFromElement(s);(0,a.default)(s).removeClass(p.SHOW).one(d.default.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},{key:"_transitionComplete",value:function(e,t,i){if(t){(0,a.default)(t).removeClass(p.ACTIVE);var o=(0,a.default)(t.parentNode).find(f.DROPDOWN_ACTIVE_CHILD)[0];o&&(0,a.default)(o).removeClass(p.ACTIVE),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}if((0,a.default)(e).addClass(p.ACTIVE),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),d.default.reflow(e),e.classList.contains(p.FADE)&&e.classList.add(p.SHOW),e.parentNode&&(0,a.default)(e.parentNode).hasClass(p.DROPDOWN_MENU)){var n=(0,a.default)(e).closest(f.DROPDOWN)[0];if(n){var s=[].slice.call(n.querySelectorAll(f.DROPDOWN_TOGGLE));(0,a.default)(s).addClass(p.ACTIVE)}e.setAttribute("aria-expanded",!0)}i&&i()}}],[{key:"_jQueryInterface",value:function(t){return this.each(function(){var i=(0,a.default)(this),o=i.data("bs.tab");if(o||(o=new e(this),i.data("bs.tab",o)),"string"==typeof t){if(void 0===o[t])throw new TypeError('No method named "'+t+'"');o[t]()}})}},{key:"VERSION",get:function(){return"4.3.1"}}]),e}();(0,a.default)(document).on(u.CLICK_DATA_API,f.DATA_TOGGLE,function(e){e.preventDefault(),h._jQueryInterface.call((0,a.default)(this),"show")}),/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */
a.default.fn.tab=h._jQueryInterface,a.default.fn.tab.Constructor=h,a.default.fn.tab.noConflict=function(){return a.default.fn.tab=c,h._jQueryInterface},t.default=h,e.exports=t.default},/* 18 */
/***/
function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),a=i(0),l=o(a),d=i(1),c=o(d),u="toast",p=l.default.fn[u],f={CLICK_DISMISS:"click.dismiss.bs.toast",HIDE:"hide.bs.toast",HIDDEN:"hidden.bs.toast",SHOW:"show.bs.toast",SHOWN:"shown.bs.toast"},h={FADE:"fade",HIDE:"hide",SHOW:"show",SHOWING:"showing"},g={animation:"boolean",autohide:"boolean",delay:"number"},v={animation:!0,autohide:!0,delay:500},m={DATA_DISMISS:'[data-dismiss="toast"]'},y=function(){function e(t,i){n(this,e),this._element=t,this._config=this._getConfig(i),this._timeout=null,this._setListeners()}/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
// Getters
return r(e,[{key:"show",
// Public
value:function(){var e=this;(0,l.default)(this._element).trigger(f.SHOW),this._config.animation&&this._element.classList.add(h.FADE);var t=function(){e._element.classList.remove(h.SHOWING),e._element.classList.add(h.SHOW),(0,l.default)(e._element).trigger(f.SHOWN),e._config.autohide&&e.hide()};if(this._element.classList.remove(h.HIDE),this._element.classList.add(h.SHOWING),this._config.animation){var i=c.default.getTransitionDurationFromElement(this._element);(0,l.default)(this._element).one(c.default.TRANSITION_END,t).emulateTransitionEnd(i)}else t()}},{key:"hide",value:function(e){var t=this;this._element.classList.contains(h.SHOW)&&((0,l.default)(this._element).trigger(f.HIDE),e?this._close():this._timeout=setTimeout(function(){t._close()},this._config.delay))}},{key:"dispose",value:function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(h.SHOW)&&this._element.classList.remove(h.SHOW),(0,l.default)(this._element).off(f.CLICK_DISMISS),l.default.removeData(this._element,"bs.toast"),this._element=null,this._config=null}},{key:"_getConfig",value:function(e){return e=s({},v,(0,l.default)(this._element).data(),"object"==typeof e&&e?e:{}),c.default.typeCheckConfig(u,e,this.constructor.DefaultType),e}},{key:"_setListeners",value:function(){var e=this;(0,l.default)(this._element).on(f.CLICK_DISMISS,m.DATA_DISMISS,function(){return e.hide(!0)})}},{key:"_close",value:function(){var e=this,t=function(){e._element.classList.add(h.HIDE),(0,l.default)(e._element).trigger(f.HIDDEN)};if(this._element.classList.remove(h.SHOW),this._config.animation){var i=c.default.getTransitionDurationFromElement(this._element);(0,l.default)(this._element).one(c.default.TRANSITION_END,t).emulateTransitionEnd(i)}else t()}}],[{key:"_jQueryInterface",value:function(t){return this.each(function(){var i=(0,l.default)(this),o=i.data("bs.toast"),n="object"==typeof t&&t;if(o||(o=new e(this,n),i.data("bs.toast",o)),"string"==typeof t){if(void 0===o[t])throw new TypeError('No method named "'+t+'"');o[t](this)}})}},{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return g}},{key:"Default",get:function(){return v}}]),e}();l.default.fn[u]=y._jQueryInterface,l.default.fn[u].Constructor=y,l.default.fn[u].noConflict=function(){return l.default.fn[u]=p,y._jQueryInterface},t.default=y,e.exports=t.default},/* 19 */
/***/
function(e,t,i){"use strict";function o(e,t){var i=e.nodeName.toLowerCase();if(-1!==t.indexOf(i))return-1===s.indexOf(i)||Boolean(e.nodeValue.match(l)||e.nodeValue.match(d));
// Check if a regular expression validates the attribute.
for(var o=t.filter(function(e){return e instanceof RegExp}),n=0,r=o.length;n<r;n++)if(i.match(o[n]))return!0;return!1}function n(e,t,i){if(0===e.length)return e;if(i&&"function"==typeof i)return i(e);for(var n=new window.DOMParser,s=n.parseFromString(e,"text/html"),r=Object.keys(t),a=[].slice.call(s.body.querySelectorAll("*")),l=0,d=a.length;l<d;l++){(function(e,i){var n=a[e],s=n.nodeName.toLowerCase();if(-1===r.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var l=[].slice.call(n.attributes),d=[].concat(t["*"]||[],t[s]||[]);l.forEach(function(e){o(e,d)||n.removeAttribute(e.nodeName)})})(l)}return s.body.innerHTML}/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): tools/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
Object.defineProperty(t,"__esModule",{value:!0}),t.sanitizeHtml=n;var s=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],r=/^aria-[\w-]*$/i,a={
// Global attributes allowed on any supplied element below.
"*":["class","dir","id","lang","role",r],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};t.DefaultWhitelist=a;/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */
var l=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,d=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i},/* 20 */
/***/
function(e,t,i){"use strict";var o;
// This works in non-strict mode
o=function(){return this}();try{
// This works if eval is allowed (see CSP)
o=o||Function("return this")()||(0,eval)("this")}catch(e){
// This works if the window reference is available
"object"==typeof window&&(o=window)}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
e.exports=o},/* 21 */
/***/
function(e,t,i){i(5),e.exports=i(6)}]);