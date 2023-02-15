webpackJsonp([15],{hkQq:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={components:{Modal:e("8l5Z").a},data:function(){return{checkedIndex:null,inStatus:1,modalzIndex:-1,modalTitle:"",modalContent:"",addressList:[]}},mounted:function(){this._getAddress()},methods:{_getAddress:function(){var t=this,s="/personal/address?token="+sessionStorage.getItem("token");this.$http.get(s).then(function(s){s.data.length>0&&(t.addressList=s.data)})},addAddress:function(){this.$router.push({path:"/address/newly"})},delAddress:function(t){this.modalIsShow("提示","确认删除该地址吗？"),this.delFlag=!0,this.addressId=t},isConfirmCancel:function(t){var s=this;if(0===t)if(this.delFlag){this.delFlag=!1,this.modelIsHide();var e="/personal/deleteAddress?id="+this.addressId+"&token="+sessionStorage.getItem("token");this.$http.get(e).then(function(t){s._getAddress()}).catch(function(t){})}else this.modelIsHide();else this.modelIsHide()},submitOrder:function(){null===this.checkedIndex?this.modalIsShow("温馨提示","至少选择一个收货地址"):console.log("正常提交")},modalIsShow:function(t,s){this.inStatus=0,this.BackdropzIndex=1040,this.modalzIndex=1050,this.modalTitle=t,this.modalContent=s},modelIsHide:function(){var t=this;this.inStatus=1,setTimeout(function(){t.modalzIndex=-1},300)},selectAddress:function(t){this.checkedIndex=t},test:function(){this.checkedIndex,console.log(this.checkedIndex)}}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"settlement"},[e("div",{staticClass:"inner-container"},[t._m(0),t._v(" "),e("div",{staticClass:"cart-item"},[e("div",{staticClass:"cart-item-title"},[e("span",[t._v("收件人信息")]),t._v(" "),e("span",[e("button",{staticClass:"add",attrs:{type:"button"},on:{click:t.addAddress}},[t._v("+ 新增收货地址")])])]),t._v(" "),e("div",{staticClass:"address-container"},t._l(t.addressList,function(s,i){return e("div",{key:i,staticClass:"address-item"},[e("label",{staticClass:"select-icon",class:{selected:t.checkedIndex==i},on:{click:function(s){return t.selectAddress(i)}}},[e("i",{staticClass:"icon_select"}),t._v(" "),e("span",[t._v(t._s(s.name)+" "+t._s(s.province)+t._s(s.city)+t._s(s.area)+t._s(s.address)+" "+t._s(s.phone))])]),t._v(" "),e("div",{staticClass:"btn-box"},[e("router-link",t._b({},"router-link",{to:"/address/"+s.id},!1),[e("button",{staticClass:"small-btn",attrs:{type:"button"}},[t._v("编辑")])]),t._v(" "),e("button",{staticClass:"small-btn",attrs:{type:"button"},on:{click:function(e){return t.delAddress(s.id)}}},[t._v("删除")])],1)])}),0)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),e("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.submitOrder}},[t._v("提交订单")]),t._v(" "),e("modal",{attrs:{modalContent:t.modalContent,inStatus:t.inStatus,modalzIndex:t.modalzIndex,modalTitle:t.modalTitle},on:{selectConfirmCancel:t.isConfirmCancel}})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{staticClass:"title"},[s("span",[this._v("结算页")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cart-item invoice-box"},[s("div",{staticClass:"cart-item-title"},[s("span",[this._v("发票信息")]),this._v(" "),s("span",[this._v("个人用户只能开普通发票，只有企业才能开增值税专票")])]),this._v(" "),s("div",{staticClass:"cart-item-content"},[s("div",{staticClass:"invoice-name"},[this._v("普通发票（电子） 个人 耗材")]),this._v(" "),s("button",{staticClass:"small-btn",attrs:{type:"button"}},[this._v("修改")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cart-item delivery-list"},[e("div",{staticClass:"cart-item-title"},[e("span",[t._v("送货清单")]),t._v(" "),e("span")]),t._v(" "),e("div",{staticClass:"delivery-content"},[e("div",{staticClass:"distribution"},[e("span",[t._v("配送方式")]),t._v(" "),e("span",[t._v("茅台定制选择的物流")])]),t._v(" "),e("div",{staticClass:"goods-list"},[e("h4",[t._v("商品清单")]),t._v(" "),e("div",{staticClass:"inner-content"},[e("div",{staticClass:"cart-item-img"}),t._v(" "),e("div",{staticClass:"cart-item-detail"},[e("div",{staticClass:"cart-item-total"},[e("span",[t._v("茅台飞天系列")]),t._v(" "),e("span",[t._v("x 7")]),t._v(" "),e("span",[t._v("￥67,158.00")])]),t._v(" "),e("p",[t._v("商品规格：贵州茅台酒（茅台定制·白色）")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cart-item order-remarks"},[s("div",{staticClass:"cart-item-title"},[s("span",[this._v("添加订单备注")]),this._v(" "),s("span")]),this._v(" "),s("div",{staticClass:"cart-item-content"},[s("textarea"),this._v(" "),s("p",[s("span",[this._v("提示：")]),this._v("请勿填写有关支付、收货、发票方面的信息")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"download-line"},[s("p",[this._v("在线合同："),s("span",[this._v("在线定制合同.docx")])]),this._v(" "),s("button",{attrs:{type:"button",onclick:"window.open('http://moutaivip.com/cache/import/定制酒合同.doc')"}},[this._v("下载")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cart-item info-resure"},[e("p",[e("span",[t._v("7")]),t._v(" 件定制商品："),e("span",[t._v("￥67,158.00")])]),t._v(" "),e("p",[t._v("运费："),e("span",[t._v("￥0.00")])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("总价："),e("span",[t._v("￥67,158.00")])]),t._v(" "),e("p",[t._v("寄送至：北京市 东城区 东华门街道 1311")]),t._v(" "),e("p",[t._v("收货人：李浩 13113331111")])])}]};var n=e("VU/8")(i,a,!1,function(t){e("mKJL")},"data-v-1b798b1a",null);s.default=n.exports},mKJL:function(t,s){}});
//# sourceMappingURL=15.73b2d4a29773a4f04721.js.map