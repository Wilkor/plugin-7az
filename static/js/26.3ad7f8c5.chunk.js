(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[26],{71:function(e,i,t){"use strict";t.r(i),t.d(i,"bds_chip_selected",(function(){return o}));var s=t(7),o=function(){function e(e){Object(s.r)(this,e),this.chipClick=Object(s.c)(this,"chipClick",7),this.isSelected=!1,this.color="default",this.size="standard",this.selected=!1,this.disabled=!1,this.dataTest=null}return e.prototype.handleKeyDown=function(e){if(" "===e.key&&!this.disabled)return e.preventDefault(),this.isSelected?this.isSelected=!1:this.isSelected=!0},e.prototype.handleClick=function(e){if(!this.disabled)return e.preventDefault(),this.isSelected?this.isSelected=!1:this.isSelected=!0},e.prototype.componentWillLoad=function(){this.el.focus(),this.isSelected=this.selected},e.prototype.getDisabledChip=function(){var e;return this.disabled?((e={chip_disabled:!0})["chip_disabled--".concat(this.size)]=!0,e):{}},e.prototype.getStyleChip=function(){var e,i;return this.isSelected?((e={chip_selected:!0})["chip_selected--".concat(this.size)]=!0,e):((i={})["chip--".concat(this.color)]=!0,i["chip--".concat(this.size)]=!0,i)},e.prototype.getStyleText=function(){if(this.isSelected){return{"chip_selected--text":!0}}},e.prototype.getSizeIconChip=function(){return"tall"===this.size?"medium":"x-small"},e.prototype.render=function(){return Object(s.h)(s.H,null,Object(s.h)("div",{class:Object.assign(Object.assign({chip:!0},this.getStyleChip()),this.getDisabledChip()),onClick:this.handleClick,"data-test":this.dataTest},!this.disabled&&Object(s.h)("div",{class:"chip_focus",onKeyDown:this.handleKeyDown.bind(this),tabindex:"0"}),!this.isSelected&&!this.disabled&&Object(s.h)("div",{class:"chip_darker"}),this.icon&&!this.isSelected&&Object(s.h)("div",{class:"chip--icon"},Object(s.h)("bds-icon",{size:this.getSizeIconChip(),name:this.icon})),this.isSelected&&Object(s.h)("div",{class:"chip_selected--icon"},Object(s.h)("bds-icon",{size:this.getSizeIconChip(),name:"checkball"})),Object(s.h)("bds-typo",{class:Object.assign({"chip--text":!0},this.getStyleText()),variant:"fs-12","no-wrap":!0,bold:"bold"},Object(s.h)("slot",null))))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(s.g)(this)},enumerable:!1,configurable:!0}),e}();o.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); :host{display:-ms-flexbox;display:flex;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px 4px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0}:host .chip .chip_focus:focus{position:absolute;width:100%;height:100%;padding:2px;border-radius:4px;outline:#c226fb solid 2px}:host .chip .chip_darker{position:absolute;width:100%;height:100%;border-radius:inherit;z-index:1;-webkit-backdrop-filter:brightness(1);backdrop-filter:brightness(1);-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:4px;height:20px;color:#202c44;z-index:2}:host .chip--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;z-index:2;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;color:#202c44;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif}:host .chip--tall{height:40px;border-radius:24px}:host .chip--default{background-color:#b3d4ff}:host .chip--info{background-color:#80e3eb}:host .chip--success{background-color:#90e6bc}:host .chip--warning{background-color:#fff6a8}:host .chip--danger{background-color:#ffa5a5}:host .chip--outline{background-color:#ffffff;border:1px solid #b9cbd3;padding:2px 3px}:host .chip--outline .chip_darker{height:calc(100% + 2px)}:host .chip:hover{cursor:pointer}:host .chip:hover .chip_darker{-webkit-backdrop-filter:brightness(0.9);backdrop-filter:brightness(0.9)}:host .chip:active{cursor:pointer}:host .chip:active .chip_darker{-webkit-backdrop-filter:brightness(0.8);backdrop-filter:brightness(0.8)}:host .chip:focus-visible{outline:none}:host .chip_selected{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#ffffff;border:2px solid #3f7de8}:host .chip_selected--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;padding-left:4px;color:#125ad5}:host .chip_selected--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;color:#125ad5;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif}:host .chip_selected--tall{height:40px;border-radius:24px}:host .chip_selected:hover{background-color:#e8f2ff;cursor:pointer}:host .chip_selected:active{background-color:#d1e3fa}:host .chip_disabled{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px 4px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0;background-color:#f3f6fa}:host .chip_disabled--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:4px;width:16px;height:20px;color:#505f79;z-index:2}:host .chip_disabled--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;z-index:2;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;color:#505f79;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif}:host .chip_disabled--tall{height:40px;border-radius:24px}:host .chip_disabled:hover{cursor:default}'}}]);
//# sourceMappingURL=26.3ad7f8c5.chunk.js.map