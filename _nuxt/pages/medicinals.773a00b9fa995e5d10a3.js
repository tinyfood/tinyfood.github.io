webpackJsonp([6],{"++il":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidearea"},[a("h4",[t._v("Farm direct")]),a("div",{staticClass:"can-toggle tinyfood"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.trigger,expression:"trigger"}],attrs:{id:"e",type:"checkbox"},domProps:{checked:Array.isArray(t.trigger)?t._i(t.trigger,null)>-1:t.trigger},on:{change:[function(e){var a=t.trigger,o=e.target,i=!!o.checked;if(Array.isArray(a)){var n=t._i(a,null);o.checked?n<0&&(t.trigger=a.concat([null])):n>-1&&(t.trigger=a.slice(0,n).concat(a.slice(n+1)))}else t.trigger=i},t.updateFarmdirect]}}),t._m(0)])])};o._withStripped=!0;var i={render:o,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"e"}},[e("div",{staticClass:"can-toggle__switch",attrs:{"data-checked":"Yes","data-unchecked":"No"}})])}]};e.a=i},"+kJT":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("TxKs"),i=a("9Tm4"),n=a("VU/8")(o.a,i.a,!1,null,null,null);n.options.__file="pages/medicinals.vue",e.default=n.exports},"+tEi":function(t,e,a){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"masthead",style:"background:"+this.bkcolor},[e("img",{staticClass:"ppl-banner",attrs:{src:"/"+this.img+".png",width:"100%",alt:"Banner Image"}}),e("span",{attrs:{id:"titletext"}},[this._v(this._s(this.title))])])};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i},"8zbe":function(t,e,a){"use strict";var o=a("sEUc");e.a={props:{farmdirect:{type:Boolean,default:!1},organic:{type:Boolean,default:!0},distance:{type:[Number,String],default:18.5}},data:function(){return{min:0,max:120}},components:{AppSwitch:o.a}}},"9Tm4":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"capsule"},[a("app-masthead",{attrs:{img:"banner-ppl-staples",title:"Medicinals",bkcolor:"#fff"}}),a("div",{staticClass:"contain"},[a("app-sidebar",{attrs:{pricerange:t.highprice},on:{"update:pricerange":function(e){t.highprice=e}}}),a("transition-group",{staticClass:"content",attrs:{name:"items",tag:"section"}},t._l(t.wProducts,function(t,e){return a("app-item",{key:"item",attrs:{item:t,index:e}})}),1)],1)],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i},CRGS:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"h4[data-v-5182992c]{margin:20px 0}.can-toggle[data-v-5182992c]{position:relative}.can-toggle [data-v-5182992c],.can-toggle [data-v-5182992c]:after,.can-toggle [data-v-5182992c]:before{-webkit-box-sizing:border-box;box-sizing:border-box}.can-toggle input[type=checkbox][data-v-5182992c]{opacity:0;position:absolute;top:0;left:0}.can-toggle input[type=checkbox][disabled]~label[data-v-5182992c]{pointer-events:none}.can-toggle input[type=checkbox][disabled]~label .can-toggle__switch[data-v-5182992c]{opacity:.4}.can-toggle input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]:before{content:attr(data-unchecked);left:0}.can-toggle input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]:after{content:attr(data-checked)}.can-toggle label[data-v-5182992c]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.can-toggle label .can-toggle__label-text[data-v-5182992c]{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:32px}.can-toggle label .can-toggle__switch[data-v-5182992c]{position:relative}.can-toggle label .can-toggle__switch[data-v-5182992c]:before{content:attr(data-checked);position:absolute;top:0;text-transform:uppercase;text-align:center}.can-toggle label .can-toggle__switch[data-v-5182992c]:after{content:attr(data-unchecked);position:absolute;z-index:5;text-transform:uppercase;text-align:center;background:#fff;-webkit-transform:translateZ(0);transform:translateZ(0)}.can-toggle.tinyfood[data-v-5182992c]{cursor:pointer}.can-toggle.tinyfood input[type=checkbox][disabled]~label[data-v-5182992c]{color:hsla(0,0%,53%,.5)}.can-toggle.tinyfood input[type=checkbox]:focus~label .can-toggle__switch[data-v-5182992c],.can-toggle.tinyfood input[type=checkbox]:hover~label .can-toggle__switch[data-v-5182992c]{background-color:#888}.can-toggle.tinyfood input[type=checkbox]:focus~label .can-toggle__switch[data-v-5182992c]:after,.can-toggle.tinyfood input[type=checkbox]:hover~label .can-toggle__switch[data-v-5182992c]:after{color:#6f6f6f}.can-toggle.tinyfood input[type=checkbox]:hover~label[data-v-5182992c]{color:#7b7b7b}.can-toggle.tinyfood input[type=checkbox]:checked~label[data-v-5182992c]:hover{color:#3059e8}.can-toggle.tinyfood input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]{background-color:#5576ed}.can-toggle.tinyfood input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]:after{color:#2752e7}.can-toggle.tinyfood input[type=checkbox]:checked:focus~label .can-toggle__switch[data-v-5182992c],.can-toggle.tinyfood input[type=checkbox]:checked:hover~label .can-toggle__switch[data-v-5182992c]{background-color:#3e64ea}.can-toggle.tinyfood input[type=checkbox]:checked:focus~label .can-toggle__switch[data-v-5182992c]:after,.can-toggle.tinyfood input[type=checkbox]:checked:hover~label .can-toggle__switch[data-v-5182992c]:after{color:#1844dd}.can-toggle.tinyfood label[data-v-5182992c]{font-family:Barlow,sans-serif;cursor:pointer}.can-toggle.tinyfood label .can-toggle__switch[data-v-5182992c]{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;background:#959595}.can-toggle.tinyfood label .can-toggle__switch[data-v-5182992c]:before{color:hsla(0,0%,100%,.7)}.can-toggle.tinyfood label .can-toggle__switch[data-v-5182992c]:after{-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease;color:#888}.can-toggle.tinyfood input[type=checkbox]:focus~label .can-toggle__switch[data-v-5182992c]:after,.can-toggle.tinyfood input[type=checkbox]:hover~label .can-toggle__switch[data-v-5182992c]:after{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2)}.can-toggle.tinyfood input[type=checkbox]:checked~label .can-toggle__switch[data-v-5182992c]:after{-webkit-transform:translate3d(27px,0,0);transform:translate3d(27px,0,0)}.can-toggle.tinyfood input[type=checkbox]:checked:focus~label .can-toggle__switch[data-v-5182992c]:after,.can-toggle.tinyfood input[type=checkbox]:checked:hover~label .can-toggle__switch[data-v-5182992c]:after{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2)}.can-toggle.tinyfood label[data-v-5182992c]{font-size:0}.can-toggle.tinyfood label .can-toggle__switch[data-v-5182992c]{height:30px;-webkit-box-flex:0;-ms-flex:0 0 60px;flex:0 0 60px;border-radius:22px}.can-toggle.tinyfood label .can-toggle__switch[data-v-5182992c]:before{left:22px;font-size:9px;line-height:30px;width:30px;padding:0 12px}.can-toggle.tinyfood label .can-toggle__switch[data-v-5182992c]:after{top:3px;left:3px;border-radius:11px;width:27px;line-height:24px;font-size:9px}.can-toggle.tinyfood label .can-toggle__switch[data-v-5182992c]:hover:after{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2)}.sidearea[data-v-5182992c]{padding-bottom:30px}",""])},ETNf:function(t,e,a){"use strict";e.a={props:{bkcolor:{type:String,default:"white"},title:{type:String,default:"Tiny Food"},img:{type:String,default:"banner-ppl"}}}},Fg3g:function(t,e,a){"use strict";e.a={data:function(){return{trigger:this.checked}},computed:{checked:function(){return this.$store.state.farmdirect}},methods:{updateFarmdirect:function(){this.$store.commit("switchFarmdirect")}}}},Ght5:function(t,e,a){var o=a("ew4x");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("32d74d11",o,!1,{sourceMap:!1})},JufQ:function(t,e,a){"use strict";var o=a("8zbe"),i=a("nXDZ"),n=!1;var c=function(t){n||a("RPU+")},r=a("VU/8")(o.a,i.a,!1,c,"data-v-7bd12016",null);r.options.__file="components/AppSidebar.vue",e.a=r.exports},JuuR:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"h1[data-v-5209668b]{color:#fff;position:relative;z-index:100;font-size:60px;padding:8px 80px}#titletext[data-v-5209668b]{font-size:42px}.bk[data-v-5209668b]{position:absolute;top:0;left:0}.ppl-banner[data-v-5209668b]{position:absolute;z-index:10;height:135px}.ppl-banner-rt[data-v-5209668b]{position:absolute;z-index:10;right:0}.masthead[data-v-5209668b]{width:100%;height:100px;color:#fff;position:relative;overflow:hidden;margin:10px 0}",""])},PSUg:function(t,e,a){var o=a("CRGS");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("0adc55ec",o,!1,{sourceMap:!1})},"RPU+":function(t,e,a){var o=a("ZlMP");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("555f0232",o,!1,{sourceMap:!1})},TxKs:function(t,e,a){"use strict";var o=a("JufQ"),i=a("jlTb"),n=a("p/c1");e.a={components:{AppSidebar:o.a,AppMasthead:i.a,AppItem:n.a},data:function(){return{highprice:300}},computed:{wProducts:function(){var t=this;return this.$store.getters.medicinals.filter(function(e){return t.$store.state.sale?e.price<t.highprice&&e.sale:e.price<t.highprice})}}}},ZlMP:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"aside[data-v-7bd12016]{background:#fff;float:left;padding:20px}.sidearea[data-v-7bd12016]{border-bottom:1px solid #ccc}.sidearea[data-v-7bd12016]:last-of-type{border:none}.callout[data-v-7bd12016]{padding:20px 0}.callout h4[data-v-7bd12016]{padding-bottom:10px}.sidearea[data-v-7bd12016]:first-of-type{padding-bottom:40px}label[data-v-7bd12016]{font-family:Playfair Display,serif;padding:15px 0;text-align:center}span[data-v-7bd12016]{font-family:Barlow,sans-serif}.max[data-v-7bd12016]{font-size:12px;float:right;color:#565656}.min[data-v-7bd12016]{float:left;font-size:12px;color:#565656}",""])},ew4x:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".item0[data-v-67a9bf49]{border-radius:5px;padding:20px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative}.supermarketpill[data-v-67a9bf49]{background:#e82319;color:#fff;font-family:Barlow,sans-serif;position:absolute;right:30px;top:60px;padding:2px 10px 4px;text-transform:uppercase;font-size:10px;font-weight:700;border-radius:1000px}p[data-v-67a9bf49]{font-size:18px}",""])},jlTb:function(t,e,a){"use strict";var o=a("ETNf"),i=a("+tEi"),n=!1;var c=function(t){n||a("ovrm")},r=a("VU/8")(o.a,i.a,!1,c,"data-v-5209668b",null);r.options.__file="components/AppMasthead.vue",e.a=r.exports},ksFF:function(t,e,a){"use strict";e.a={props:{item:{type:Object,required:!0},index:{type:Number,required:!0}},filters:{usdollar:function(t){return"$"+t},ksh:function(t){return"ksh $"+100*t}},methods:{addItem:function(){this.$store.commit("addItem",this.item)}}}},nXDZ:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[t.farmdirect?t._e():a("app-switch"),t._m(0),t._m(1),a("div",{staticClass:"sidearea"},[a("label",{attrs:{for:"distance"}},[t._v("Sort by distance: "),a("span",[t._v(t._s(t.distance))]),t._v(" miles")]),a("input",{staticClass:"slider",attrs:{id:"distance",type:"range",min:t.min,max:t.max,step:"0.1"},domProps:{value:t.distance},on:{input:function(e){t.$emit("update:distance",e.target.value)}}}),a("span",{staticClass:"min"},[t._v(t._s(t.min))]),a("span",{staticClass:"max"},[t._v(t._s(t.max))])]),t._m(2)],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidearea callout"},[e("p",[this._v("Shared shopping is a way to collaborte with friends or neighbors in buying things from certain ofood stores, which may be difficult to get to.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidearea callout"},[e("h4",[this._v("Help grow Tiny Food!")]),e("p",[this._v("Share TinyFood with someone or a group you order with.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidearea callout"},[e("img",{attrs:{src:"onebuilding_foodan1.gif"}})])}]};e.a=i},ovrm:function(t,e,a){var o=a("JuuR");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("e1fb1a42",o,!1,{sourceMap:!1})},"p/c1":function(t,e,a){"use strict";var o=a("ksFF"),i=a("wm3B"),n=!1;var c=function(t){n||a("Ght5")},r=a("VU/8")(o.a,i.a,!1,c,"data-v-67a9bf49",null);r.options.__file="components/AppItem.vue",e.a=r.exports},sEUc:function(t,e,a){"use strict";var o=a("Fg3g"),i=a("++il"),n=!1;var c=function(t){n||a("PSUg")},r=a("VU/8")(o.a,i.a,!1,c,"data-v-5182992c",null);r.options.__file="components/AppSwitch.vue",e.a=r.exports},wm3B:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item0"},[a("p",[t._v(t._s(t.item.name))]),t.item.sale?a("span",{staticClass:"supermarketpill"},[t._v("Organic")]):t._e(),a("img",{attrs:{src:"/"+t.item.img,alt:"Image of "+t.item.name}}),a("p",[t._v(t._s(t._f("usdollar")(t.item.price)))]),a("p",[t._v(t._s(t._f("ksh")(t.item.price)))]),a("button",{staticClass:"add",on:{click:t.addItem}},[t._v("Add Item")]),a("small",[t._v("Farmer: "+t._s(t.item.producer))])])};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i}});