(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ImgList"],{"1f7b":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"imgList center-wrap"},[i("div",{staticClass:"title"},[t._v(t._s(t.pagetitle))]),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"list"},t._l(t.dataList,(function(a,e){return i("div",{key:e,staticClass:"li",on:{click:function(i){return t.todetails(a)}}},[i("img",{staticClass:"img",attrs:{src:a.cover[0].path,alt:""}}),i("div",{staticClass:"tit ellipsis-Two"},[t._v(t._s(a.title))])])})),0),i("el-pagination",{staticClass:"elPagination",attrs:{background:"",layout:"prev, pager, next","page-size":15,total:t.total},on:{"current-change":t.getList}})],1)},n=[],s=i("0fea"),l={name:"ImgList",data:function(){return{dataList:[],pagetitle:"",total:0,loading:!0}},watch:{$route:function(t,a){this.getList(1)}},created:function(){this.getList(1)},computed:{channelId:function(){return this.$route.params.id}},methods:{getList:function(t){var a=this;return this.loading=!0,new Promise((function(i,e){Object(s["b"])({channelId:a.channelId,page:t,limit:15}).then((function(t){a.loading=!1,a.dataList=t.data.list,a.pagetitle=t.data.name,a.total=t.data.count,document.title="".concat(a.pagetitle,"-").concat(a.title),i(a.dataList)}))}))}}},c=l,o=(i("2461"),i("2877")),r=Object(o["a"])(c,e,n,!1,null,"783e4856",null);a["default"]=r.exports},2461:function(t,a,i){"use strict";i("f735")},f735:function(t,a,i){}}]);