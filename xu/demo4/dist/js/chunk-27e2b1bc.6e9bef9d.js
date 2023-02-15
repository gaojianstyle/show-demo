(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27e2b1bc"],{7455:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openDialog()}}},[t._v("新增用户")]),a("el-button",{attrs:{type:"danger"}},[t._v("清除用户身份票据")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData}},[a("el-table-column",{attrs:{prop:"Id",label:"序号"}}),a("el-table-column",{attrs:{prop:"LoginName",label:"用户名"}}),a("el-table-column",{attrs:{prop:"Password",label:"密码"}}),a("el-table-column",{attrs:{prop:"IsAction",label:"是否启用"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.IsAction?"是":"否"))]}}])}),a("el-table-column",{attrs:{prop:"CreateTime",label:"创建时间",formatter:t.dateFormat}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",disabled:"admin"==e.row.LoginName},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",disabled:"admin"==e.row.LoginName},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}})]}}])})],1),a("el-dialog",{attrs:{title:"用户信息操作",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.formData}},[a("el-form-item",{attrs:{label:"登录名","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.LoginName,callback:function(e){t.$set(t.formData,"LoginName",e)},expression:"formData.LoginName"}})],1),a("el-form-item",{attrs:{label:"密码","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.Password,callback:function(e){t.$set(t.formData,"Password",e)},expression:"formData.Password"}})],1),a("el-form-item",{attrs:{label:"是否启用","label-width":t.formLabelWidth}},[a("el-radio",{attrs:{label:!0,border:""},model:{value:t.formData.IsAction,callback:function(e){t.$set(t.formData,"IsAction",e)},expression:"formData.IsAction"}},[t._v("是")]),a("el-radio",{attrs:{label:!1,border:""},model:{value:t.formData.IsAction,callback:function(e){t.$set(t.formData,"IsAction",e)},expression:"formData.IsAction"}},[t._v("否")])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCreateOrModify()}}},[t._v("确 定")])],1)],1)],1)},n=[],i={data:function(){return{loading:!0,dialogFormVisible:!1,formLabelWidth:"120px",tableData:[],formData:{Id:0,LoginName:"",Password:"",IsAction:!0,CreateTime:new Date},options:{}}},mounted:function(){var t="Browser "+sessionStorage.getItem("token");this.options={headers:{Authorization:t}},this.loadData()},methods:{loadData:function(){var t=this;this.loading=!0,this.$http.post("User/GetUserAll",null,this.options).then(function(e){window.console.log(e),t.tableData=e.data,t.loading=!1}).catch(function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})})},openDialog:function(){this.formData.Id=0,this.formData.LoginName="",this.formData.Password="",this.formData.IsAction=!0,this.formData.CreateTime=new Date,this.dialogFormVisible=!0},handleCreateOrModify:function(){var t=this;window.console.log(this.formData),this.formData.Id?(this.loading=!0,this.$http.post("User/ModifiedUser",this.formData,this.options).then(function(e){t.loading=!1,window.console.log(e),t.$message({message:"修改成功！",type:"success"}),t.dialogFormVisible=!1,t.loadData()}).catch(function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})})):(this.loading=!0,this.$http.post("User/CreateUser",this.formData,this.options).then(function(e){t.loading=!1,window.console.log(e),t.$message({message:"创建成功！",type:"success"}),t.dialogFormVisible=!1,t.loadData()}).catch(function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})}))},handleEdit:function(t,e){window.console.log(t,e),this.formData=e,this.dialogFormVisible=!0},handleDelete:function(t,e){var a=this;window.console.log(t,e),this.$confirm("此操作将永久此条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.loading=!0,a.$http.post("User/DeleteUser?id=".concat(e.Id),null,a.options).then(function(t){a.loading=!1,window.console.log(t),a.$message({message:"删除成功！",type:"success"}),a.loadData()}).catch(function(t){a.$message({message:"网络或程序异常！"+t,type:"error"})})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},dateFormat:function(t){var e=new Date(t.CreateTime);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}}},s=i,l=(a("f1aa"),a("2877")),r=Object(l["a"])(s,o,n,!1,null,"2876108a",null);e["default"]=r.exports},f1aa:function(t,e,a){"use strict";var o=a("faee"),n=a.n(o);n.a},faee:function(t,e,a){}}]);
//# sourceMappingURL=chunk-27e2b1bc.6e9bef9d.js.map