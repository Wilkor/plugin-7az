(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[11],{56:function(t,e,n){"use strict";n.r(e),n.d(e,"bds_accordion",(function(){return c}));var o=n(7),r=function(t,e,n,o){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function c(t){try{l(o.next(t))}catch(e){i(e)}}function a(t){try{l(o.throw(t))}catch(e){i(e)}}function l(t){t.done?n(t.value):r(t.value).then(c,a)}l((o=o.apply(t,e||[])).next())}))},i=function(t,e){var n,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(t){return function(e){return l([t,e])}}function l(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(a){i=[6,a],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},c=function(){function t(t){Object(o.r)(this,t),this.accGroup=null,this.accheaders=null,this.accBodies=null,this.isOpen=!1,this.numberElement=null}return t.prototype.toggle=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){return this.isOpen=!this.isOpen,[2]}))}))},t.prototype.close=function(){return r(this,void 0,void 0,(function(){var t,e;return i(this,(function(n){return null===(t=this.accheaders)||void 0===t||t.close(),null===(e=this.accBodies)||void 0===e||e.close(),[2]}))}))},t.prototype.reciveNumber=function(t){return r(this,void 0,void 0,(function(){return i(this,(function(e){return this.numberElement=t,[2]}))}))},t.prototype.isOpenChanged=function(){var t,e,n;null===(t=this.accheaders)||void 0===t||t.toggle(),null===(e=this.accBodies)||void 0===e||e.toggle(),this.accGroup&&(null===(n=this.accGroup)||void 0===n||n.closeAll(this.numberElement))},t.prototype.componentWillRender=function(){this.accGroup="BDS-ACCORDION-GROUP"==this.element.parentElement.tagName&&this.element.parentElement,this.accheaders=this.element.children[0],this.accBodies=this.element.children[1]},t.prototype.render=function(){return Object(o.h)("div",{class:"accordion_group"},Object(o.h)("slot",null))},Object.defineProperty(t.prototype,"element",{get:function(){return Object(o.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["isOpenChanged"]}},enumerable:!1,configurable:!0}),t}();c.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); .accordion_header{display:grid;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:#202c44;cursor:pointer}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:#c226fb}.accordion_header .accButton:hover{background-color:#f2f2f2}.accordion_header .accButton:active{background-color:#e6e6e6}.accordion_body{height:0;overflow:hidden;border-bottom:1px solid #b9cbd3;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.accordion_body .container{padding:0 24px 48px;position:relative;color:#202c44}'}}]);