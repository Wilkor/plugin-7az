(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[16],{58:function(t,e,i){"use strict";i.r(e),i.d(e,"bds_autocomplete",(function(){return r}));var n=i(7),o=function(t,e,i,n){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,s){function r(t){try{a(n.next(t))}catch(e){s(e)}}function l(t){try{a(n.throw(t))}catch(e){s(e)}}function a(t){t.done?i(t.value):o(t.value).then(r,l)}a((n=n.apply(t,e||[])).next())}))},s=function(t,e){var i,n,o,s,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(t){return function(e){return a([t,e])}}function a(s){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,n=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){r=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(6===s[0]&&r.label<o[1]){r.label=o[1],o=s;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(s);break}o[2]&&r.ops.pop(),r.trys.pop();continue}s=e.call(t,r)}catch(l){s=[6,l],n=0}finally{i=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},r=function(){function t(t){var e=this;Object(n.r)(this,t),this.bdsChange=Object(n.c)(this,"bdsChange",7),this.bdsSelectedChange=Object(n.c)(this,"bdsSelectedChange",7),this.bdsInput=Object(n.c)(this,"bdsInput",7),this.bdsCancel=Object(n.c)(this,"bdsCancel",7),this.bdsFocus=Object(n.c)(this,"bdsFocus",7),this.bdsBlur=Object(n.c)(this,"bdsBlur",7),this.isOpen=!1,this.text="",this.isFocused=!1,this.danger=!1,this.disabled=!1,this.searchOnlyTitle=!0,this.label="",this.icon="",this.placeholder="",this.optionsPosition="bottom",this.clearIconOnFocus=!1,this.dataTest=null,this.onInput=function(t){var i=t.target;i&&(e.value=i.value||""),e.bdsInput.emit(t)},this.refNativeInput=function(t){e.nativeInput=t},this.onFocus=function(){e.isFocused=!0,e.bdsFocus.emit()},this.onFocusout=function(){e.isOpen||(e.nativeInput.value=e.getText())},this.onBlur=function(){e.bdsBlur.emit(),e.isOpen||(e.isFocused=!1,e.nativeInput.value=e.getText())},this.toggle=function(){e.disabled||(e.isOpen=!e.isOpen)},this.getTextFromOption=function(t){var i,n;if((null===t||void 0===t?void 0:t.status)||(null===t||void 0===t?void 0:t.bulkOption)){if(e.internalOptions){var o=e.internalOptions.find((function(e){return e.value==t.value}));if(o)return o.label}return t.querySelector("#bds-typo-label-".concat(e.value)).textContent}return(null===t||void 0===t?void 0:t.titleText)?t.titleText:null!==(n=null===(i=null===t||void 0===t?void 0:t.textContent)||void 0===i?void 0:i.trim())&&void 0!==n?n:""},this.getText=function(){var t=e.childOptions.find((function(t){return t.value==e.value}));return e.getTextFromOption(t)},this.handler=function(t){var i=t.detail.value;e.value=i,e.toggle()},this.setFocusWrapper=function(){!e.disabled&&e.nativeInput&&e.nativeInput.setFocus()},this.removeFocusWrapper=function(t){var i="bds-input"===t.relatedTarget.localName;e.nativeInput&&!i&&e.nativeInput.removeFocus()},this.keyPressWrapper=function(t){var i,n;switch(e.isOpen=!0,t.key){case"Enter":e.toggle();break;case"Tab":var o=e.findFocusedElementIndex();e.sliceInvisible(o+1)[0]||e.toggle();break;case"ArrowDown":var s=e.findFocusedElementIndex(),r=e.sliceInvisible(s+1)[0];null===(i=null===r||void 0===r?void 0:r.firstElementChild)||void 0===i||i.focus();break;case"ArrowUp":var l=e.findFocusedElementIndex(),a=e.childOptions.find((function(t){return!t.hasAttribute("invisible")}));if(e.childOptions[l]!=a){l=l>0?l:e.childOptions.length;var c=e.sliceInvisible(0,l),u=c[c.length-1];null===(n=null===u||void 0===u?void 0:u.firstElementChild)||void 0===n||n.focus()}}},this.cleanInputSelection=function(){return o(e,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return this.disabled?[3,2]:(this.value="",this.nativeInput.value="",this.isOpen=!1,[4,this.resetFilterOptions()]);case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},this.changedInputValue=function(){return o(e,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return this.bdsChange.emit({value:this.nativeInput.value}),this.nativeInput.value?[4,this.filterOptions(this.nativeInput.value)]:[3,2];case 1:return t.sent(),[3,5];case 2:return this.value="",this.isOpen?[4,this.resetFilterOptions()]:[3,4];case 3:return t.sent(),[3,5];case 4:this.setTimeoutFilter(),t.label=5;case 5:return!1===this.isOpen&&(this.value=this.getSelectedValue(),this.setTimeoutFilter()),[2]}}))}))}}return t.prototype.itemSelectedChanged=function(){this.bdsSelectedChange.emit(this.selected)},t.prototype.valueChanged=function(){for(var t=0,e=this.childOptions;t<e.length;t++){var i=e[t];i.selected=this.value===i.value}this.selected=this.childOptionSelected,this.text=this.getText()},t.prototype.handleWindow=function(t){this.el.contains(t.target)||(this.isOpen=!1)},t.prototype.parseOptions=function(){if(this.options){this.resetFilterOptions();try{this.internalOptions="string"===typeof this.options?JSON.parse(this.options):this.options}catch(t){this.internalOptions=[]}}},t.prototype.componentWillLoad=function(){this.options&&this.parseOptions()},t.prototype.componentDidLoad=function(){if(!this.options)for(var t=0,e=this.childOptions;t<e.length;t++){var i=e[t];i.selected=this.value===i.value,i.addEventListener("optionSelected",this.handler)}this.text=this.getText()},Object.defineProperty(t.prototype,"childOptions",{get:function(){return this.options?Array.from(this.el.shadowRoot.querySelectorAll("bds-select-option")):Array.from(this.el.querySelectorAll("bds-select-option"))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childOptionSelected",{get:function(){return this.options?Array.from(this.el.shadowRoot.querySelectorAll("bds-select-option")).find((function(t){return t.selected})):Array.from(this.el.querySelectorAll("bds-select-option")).find((function(t){return t.selected}))},enumerable:!1,configurable:!0}),t.prototype.sliceInvisible=function(t,e){return void 0===e&&(e=this.childOptions.length),this.childOptions.slice(t,e).filter((function(t){return!t.hasAttribute("invisible")}))},t.prototype.findFocusedElementIndex=function(){return this.childOptions.findIndex((function(t){return t.firstElementChild.matches(":focus")}))},t.prototype.setTimeoutFilter=function(){var t=this;setTimeout((function(){t.resetFilterOptions()}),500)},t.prototype.filterOptions=function(t){return o(this,void 0,void 0,(function(){var e,i,n,o,r;return s(this,(function(s){switch(s.label){case 0:return t?[3,2]:[4,this.resetFilterOptions()];case 1:s.sent(),s.label=2;case 2:for(e=0,i=this.childOptions;e<i.length;e++)n=i[e],o=this.searchOnlyTitle?this.getTextFromOption(n).toLowerCase():n.textContent.toLowerCase(),r=t.toLowerCase(),o.includes(r)?n.removeAttribute("invisible"):n.setAttribute("invisible","invisible");return[2]}}))}))},t.prototype.resetFilterOptions=function(){return o(this,void 0,void 0,(function(){var t,e,i;return s(this,(function(n){for(t=this.childOptions,e=0,i=t;e<i.length;e++)i[e].removeAttribute("invisible");return[2]}))}))},t.prototype.getSelectedValue=function(){var t;return null===(t=this.childOptionSelected)||void 0===t?void 0:t.value},t.prototype.render=function(){var t=this,e=this.isOpen?"arrow-up":"arrow-down";return Object(n.h)("div",{class:"select",tabindex:"0",onFocus:this.setFocusWrapper,onBlur:this.removeFocusWrapper,onFocusout:this.onFocusout,onKeyDown:this.keyPressWrapper},Object(n.h)("bds-input",{icon:this.icon,label:this.label,ref:this.refNativeInput,onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.toggle,value:this.text,danger:this.danger,disabled:this.disabled,placeholder:this.placeholder,onBdsChange:this.changedInputValue,onBdsInput:this.onInput,readonly:!1,"data-test":this.dataTest},Object(n.h)("div",{slot:"input-right",class:"select__icon"},Object(n.h)("bds-icon",{size:"small",name:"error",theme:"solid",onClick:this.cleanInputSelection,class:{"icon-hidden":this.clearIconOnFocus&&(!this.isFocused||!this.isOpen)||!this.value}}),Object(n.h)("bds-icon",{size:"small",name:e,color:"inherit"}))),Object(n.h)("div",{class:{select__options:!0,"select__options--position-top":"top"===this.optionsPosition,"select__options--open":this.isOpen}},this.internalOptions?this.internalOptions.map((function(e,i){return Object(n.h)("bds-select-option",{onOptionSelected:t.handler,selected:t.value===e.value,value:e.value,key:i,bulkOption:e.bulkOption,status:e.status},e.label)})):Object(n.h)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{selected:["itemSelectedChanged"],value:["valueChanged"],options:["parseOptions"]}},enumerable:!1,configurable:!0}),t}();r.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); :host{display:block}.select{position:relative;outline:none}.select__icon{color:#8ca0b3;display:-ms-flexbox;display:flex}.select__icon bds-icon{margin-left:10px}.select .icon-hidden{visibility:hidden}.select__options{background:#f8fbfb;width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);visibility:hidden;opacity:0;-webkit-box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4);box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4)}.select__options::-webkit-scrollbar{width:16px;background-color:transparent}.select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.select__options--open{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}.select__options--position-top{top:auto;bottom:100%;-webkit-transform-origin:bottom left;transform-origin:bottom left}'}}]);