var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=l||f||Function("return this")(),s=Object.prototype.toString,c=Math.max,m=Math.min,d=function(){return u.Date.now()};function g(e,t,n){var o,i,r,a,l,f,u=0,s=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,u=t,a=e.apply(r,n)}function S(e){return u=e,l=setTimeout(O,t),s?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||g&&e-u>=r}function O(){var e=d();if(j(e))return h(e);l=setTimeout(O,function(e){var n=t-(e-f);return g?m(n,r-(e-u)):n}(e))}function h(e){return l=void 0,b&&o?y(e):(o=i=void 0,a)}function w(){var e=d(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return S(f);if(g)return l=setTimeout(O,t),y(f)}return void 0===l&&(l=setTimeout(O,t)),a}return t=p(t)||0,v(n)&&(s=!!n.leading,r=(g="maxWait"in n)?c(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==l&&clearTimeout(l),u=0,o=f=i=l=void 0},w.flush=function(){return void 0===l?a:h(d())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=i.test(e);return l||r.test(e)?a(e.slice(2),l?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form");localStorage.getItem("feedback-form-state")?(console.log("Восстанавливаю данные формы"),b.elements.email.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,b.elements.message.value=JSON.parse(localStorage.getItem("feedback-form-state")).message):console.log("Данных для восстановления формы нет");b.addEventListener("submit",(e=>{if(e.preventDefault(),""===b.elements.email.value||""===b.elements.message.value)return void alert("Все поля формы должны быть заполнены!");const t={email:b.elements.email.value,message:b.elements.message.value};console.log("Отправляю данные формы"),console.log(t),b.reset(),localStorage.removeItem("feedback-form-state")})),b.addEventListener("input",t((()=>{console.log("Фиксирую ввод данных");const e={email:b.elements.email.value,message:b.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));
//# sourceMappingURL=03-feedback.037dcb3c.js.map