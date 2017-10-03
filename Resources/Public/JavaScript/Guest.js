webpackJsonp([2],{0:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var i=n(597),r=_interopRequireDefault(i);Object.defineProperty(window,"NeosCKEditorApi",{value:r.default,enumerable:!1,writable:!1,configurable:!0})},121:function(e,t){(function(t){function debounce(e,t,i){function invokeFunc(t){var n=r,i=o;return r=o=void 0,d=t,u=e.apply(i,n)}function leadingEdge(e){return d=e,c=setTimeout(timerExpired,t),f?invokeFunc(e):u}function remainingWait(e){var n=e-l,i=e-d,r=t-n;return s?b(r,a-i):r}function shouldInvoke(e){var n=e-l,i=e-d;return void 0===l||n>=t||n<0||s&&i>=a}function timerExpired(){var e=g();return shouldInvoke(e)?trailingEdge(e):void(c=setTimeout(timerExpired,remainingWait(e)))}function trailingEdge(e){return c=void 0,m&&r?invokeFunc(e):(r=o=void 0,u)}function cancel(){void 0!==c&&clearTimeout(c),d=0,r=l=o=c=void 0}function flush(){return void 0===c?u:trailingEdge(g())}function debounced(){var e=g(),n=shouldInvoke(e);if(r=arguments,o=this,l=e,n){if(void 0===c)return leadingEdge(l);if(s)return c=setTimeout(timerExpired,t),invokeFunc(l)}return void 0===c&&(c=setTimeout(timerExpired,t)),u}var r,o,a,u,c,l,d=0,f=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(n);return t=toNumber(t)||0,isObject(i)&&(f=!!i.leading,s="maxWait"in i,a=s?p(toNumber(i.maxWait)||0,t):a,m="trailing"in i?!!i.trailing:m),debounced.cancel=cancel,debounced.flush=flush,debounced}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function isObjectLike(e){return!!e&&"object"==typeof e}function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&v.call(e)==r}function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return i;if(isObject(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=u.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):a.test(e)?i:+e}var n="Expected a function",i=NaN,r="[object Symbol]",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,s=d||f||Function("return this")(),m=Object.prototype,v=m.toString,p=Math.max,b=Math.min,g=function(){return s.Date.now()};e.exports=debounce}).call(t,function(){return this}())},218:function(e,t){(function(t){function debounce(e,t,i){function invokeFunc(t){var n=r,i=o;return r=o=void 0,d=t,u=e.apply(i,n)}function leadingEdge(e){return d=e,c=setTimeout(timerExpired,t),f?invokeFunc(e):u}function remainingWait(e){var n=e-l,i=e-d,r=t-n;return s?b(r,a-i):r}function shouldInvoke(e){var n=e-l,i=e-d;return void 0===l||n>=t||n<0||s&&i>=a}function timerExpired(){var e=g();return shouldInvoke(e)?trailingEdge(e):void(c=setTimeout(timerExpired,remainingWait(e)))}function trailingEdge(e){return c=void 0,m&&r?invokeFunc(e):(r=o=void 0,u)}function cancel(){void 0!==c&&clearTimeout(c),d=0,r=l=o=c=void 0}function flush(){return void 0===c?u:trailingEdge(g())}function debounced(){var e=g(),n=shouldInvoke(e);if(r=arguments,o=this,l=e,n){if(void 0===c)return leadingEdge(l);if(s)return c=setTimeout(timerExpired,t),invokeFunc(l)}return void 0===c&&(c=setTimeout(timerExpired,t)),u}var r,o,a,u,c,l,d=0,f=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(n);return t=toNumber(t)||0,isObject(i)&&(f=!!i.leading,s="maxWait"in i,a=s?p(toNumber(i.maxWait)||0,t):a,m="trailing"in i?!!i.trailing:m),debounced.cancel=cancel,debounced.flush=flush,debounced}function throttle(e,t,i){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(n);return isObject(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),debounce(e,t,{leading:r,maxWait:t,trailing:o})}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function isObjectLike(e){return!!e&&"object"==typeof e}function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&v.call(e)==r}function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return i;if(isObject(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=u.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):a.test(e)?i:+e}var n="Expected a function",i=NaN,r="[object Symbol]",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,s=d||f||Function("return this")(),m=Object.prototype,v=m.toString,p=Math.max,b=Math.min,g=function(){return s.Date.now()};e.exports=throttle}).call(t,function(){return this}())},261:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n={},i=new t.filter(n),r=t.htmlParser.fragment.fromHtml(e),o=new t.htmlParser.basicWriter;return i.applyTo(r),r.writeHtml(o),e=o.getHtml(),e.replace(/<\/?[a-z0-9A-Z]+[^>]*>/g,"")}},593:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(261),r=_interopRequireDefault(i);t.default=function(e){function paste(t){var n=t.editor,i=n.editable();if(!e.dtd.$block[i.getName()]){t.cancel();var o=(0,r.default)(t.data.dataValue,e);n.fire("saveSnapshot");var a=n.getSelection().getRanges();if(a.length){var u=a[0];u.insertNode(new e.dom.text(o)),u.setStart(u.endContainer,u.endOffset),u.select()}setTimeout(function(){return n.fire("saveSnapshot")},0)}}e.plugins.add("neos_fixPasteIntoInlineElements",{init:function init(e){e.on("paste",paste)}})}},594:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(595),r=_interopRequireDefault(i),o=n(593),a=_interopRequireDefault(o);t.default=function(e){(0,r.default)(e),(0,a.default)(e)}},595:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function htmlIsEmptyish(e){if(!e)return!0;if(e.length>20)return!1;var t=e.replace(/[\n|\t|\u200b]*/g,"").toLowerCase().trim();return!t||"<br>"===t||"<p>&nbsp;<br></p>"===t||"<p><br></p>"===t||"<p>&nbsp;</p>"===t||"&nbsp;"===t||"&nbsp;<br>"===t||" <br>"===t||t.match(/^<([a-z0-9]+)><br><\/\1>$/)};t.default=function(e){function addPlaceholder(t){var i=t.editor,r=i.editable();if(r&&"wysiwyg"===i.mode){if(e.dialog._.currentTop)return;n(r.getHtml())&&(r.setHtml(i.config.neosPlaceholder),r.addClass("placeholder"))}}function removePlaceholder(t){var n=t.editor,i=n.editable();if(i&&"wysiwyg"===n.mode){if(!i.hasClass("placeholder"))return;if(i.removeClass("placeholder"),e.dtd[i.getName()].p){n.config.autoParagraph?i.setHtml("<p><br/></p>"):i.setHtml("");var r=n.createRange();r.moveToElementEditablePosition(i.getFirst(),!0),n.getSelection().selectRanges([r]),n.editable().$.click()}else i.setHtml(" "),window.setTimeout(function(){var e=n.createRange();e.moveToElementEditablePosition(i.getFirst(),!0),n.getSelection().selectRanges([e]),n.editable().$.click()},5)}}e.plugins.add("neos_placeholder",{getPlaceholderCss:function getPlaceholderCss(){return".placeholder{ color: #999; }"},onLoad:function onLoad(){e.addCss(this.getPlaceholderCss())},init:function init(t){t.config.neosPlaceholder&&(t.on("getData",function(e){var n=t.editable();n&&n.hasClass("placeholder")&&(e.data.dataValue="")}),t.on("setData",function(i){if(!e.dialog._.currentTop){var r=t.editable();r&&(n(i.data.dataValue)?addPlaceholder(i):r.hasClass("placeholder")&&r.removeClass("placeholder"))}}),t.on("mode",addPlaceholder),t.on("blur",addPlaceholder),t.on("contentDom",addPlaceholder),t.on("focus",removePlaceholder),t.on("beforeModeUnload",removePlaceholder))}})}},597:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(218),r=_interopRequireDefault(i),o=n(121),a=_interopRequireDefault(o),u=n(594),c=_interopRequireDefault(u),l=n(261),d=_interopRequireDefault(l),f={initialize:function initialize(){},toggleFormat:function toggleFormat(){},createEditor:function createEditor(){}},s="",m=function createCKEditorAPI(e){if(!e)return console.error("CKEditor not found!"),f;(0,c.default)(e);var t=null,n=null,i=function handleUserInteractionCallbackFactory(n){return function(){var i={};Object.keys(t.formattingRules).forEach(function(r){var o=t.formattingRules[r];if(void 0!==o.command)return n.getCommand(o.command)?void(i[r]=n.getCommand(o.command).state):void(i[r]=!1);if(void 0!==o.style){if(!n.elementPath())return void(i[r]=!1);var a=new e.style(o.style);return void(i[r]=a.checkActive(n.elementPath(),n))}if(o.extractCurrentFormatFn)return void(i[r]=o.extractCurrentFormatFn(n,e));throw new Error('\n                An error occured while checking a format in CK Editor.\n                The description parameter needs to either have a key "command",\n                a key "style", or a style "extractCurrentFormatFn" - none of which could be found.\n            ')});var r=JSON.stringify(i);r!==s&&(t.setFormattingUnderCursor(i),s=r)}};return e.disableAutoInline=!0,Object.assign(e.dtd.$editable,{b:!0,big:!0,i:!0,small:!0,tt:!0,abbr:!0,acronym:!0,cite:!0,code:!0,dfn:!0,em:!0,kbd:!0,strong:!0,samp:!0,var:!0,a:!0,bdo:!0,img:!0,q:!0,span:!0,sub:!0,sup:!0,button:!0,label:!0}),{initialize:function initialize(e){t=e},toggleFormat:function toggleFormat(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.formattingRules[r];if(!a)return void console.warn("Formatting instruction "+r+" not found.");if(!n)return void console.warn("Current editor not found!");if(void 0!==a.command)return n.getCommand(a.command)?(n.execCommand(a.command),n.fire("change"),void i(n)()):void console.warn("Command "+n+" not found.");if(void 0!==a.style){if(!n.elementPath())return;var u=new e.style(a.style),c=u.checkActive(n.elementPath(),n)?"removeStyle":"applyStyle";return n[c](u),n.fire("change"),void i(n)()}if(a.applyStyleFn)return a.applyStyleFn(o,n,e),n.fire("change"),void i(n)();throw new Error('\n                An error occured while applying a format in CK Editor.\n                The description parameter needs to either have a key "command",\n                "style", or "applyFn" - none of which could be found.\n            ')},createEditor:function createEditor(o,u,c,l){var f=this;if(e.dtd.$inline[o.tagName.toLowerCase()]){var s=[].slice.call(o.childNodes).some(function(t){return t.tagName&&e.dtd.$block[t.tagName.toLowerCase()]});if(s){console.warn("The editable ",o," of type <",o.tagName.toLowerCase(),"> (which is an inline html element) contains block-level children (like p, div, ...). This is invalid markup and currently not supported by CKEditor; that is why we cannot edit it currently.");var m=function onClickRemoveTags(){var t=(0,d.default)(o.innerHTML,e);o.innerHTML=t,f.createEditor(o,u,c,l),o.removeEventListener("click",onClickRemoveTags)};return void o.addEventListener("click",m)}}o.contentEditable="true";var v=e.inline(o,u);v.on("loaded",function(){v.config.buttons&&v.config.buttons.forEach(function(e){var t=v.ui.create(e);v.addFeature(t)})});var p=i(v);v.once("contentDom",function(){v.on("focus",function(){n=v,t.setCurrentlyEditedPropertyName(c),p()}),v.on("selectionChange",function(){p()}),v.on("change",(0,a.default)((0,r.default)(function(){return l(v.getData())},1500),150))})}}};t.default=m(window.CKEDITOR)}});
//# sourceMappingURL=Guest.js.map