(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa1cb3a0"],{"2d0c":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("block",[e("CommentComponent",{attrs:{platform:t.playNow.platform||"163","comment-type":0,id:t.playNow.id,comments:t.comments}}),e("SendComment",{attrs:{type:0,platform:t.playNow.platform||"163","success-cb":t.initComments}})],1)},c=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),s=n("2f62"),a=n("ceb6"),r=n("3f0b"),m=function(){var t=this,e=t._self._c;return e("div",{class:"write-comment-container ".concat(t.commentInfo.open&&"open")},[e("div",{staticClass:"comment-main"},[t.commentInfo.commentId?t._e():e("div",{staticClass:"ft_14 pl_5",staticStyle:{color:"#fff9","line-height":"20px"}},[t._v(" 为 "),e("span",{staticClass:"comment-title"},[t._v(t._s(t.commentInfo.title))]),t._v(" 献上评论")]),t.commentInfo.commentId?e("div",{staticClass:"ft_14 pl_5",staticStyle:{color:"#fff9","line-height":"20px"}},[t._v(" 回复 @"),e("span",{staticClass:"comment-title"},[t._v(t._s(t.commentInfo.nick))])]):t._e(),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentInfo.val,expression:"commentInfo.val"}],staticClass:"comment-input",attrs:{rows:2,placeholder:"说些啥呢"},domProps:{value:t.commentInfo.val},on:{input:function(e){e.target.composing||t.$set(t.commentInfo,"val",e.target.value)}}})]),e("i",{staticClass:"iconfont icon-cancel pointer",on:{click:t.closeComment}}),e("div",{staticClass:"plane-icon",on:{click:t.clickPlane}},[e("i",{staticClass:"iconfont icon-plane pointer"})])])},l=[];n("7f7f"),n("c5f6");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"SendComment",props:{successCb:Function,type:Number,platform:String},data:function(){return{loading:!1}},computed:u({},Object(s["b"])({commentInfo:"getCommentInfo",playNow:"getPlaying"})),methods:{clickPlane:function(){var t=this,e=this.commentInfo,n=this.platform,o=this.type,c=o,i=0,s=e.title;if(e.open){if(!e.val)return this.$message.warning("无话可说？");if(e.val.length>300)return this.$message.warning("话有点多？");if(this.loading)return;if(this.loading=!0,"qq"===e.platform)return Object(a["c"])({api:"QQ_COMMENT_SEND",method:"post",data:{id:e.id,content:e.val,biztype:e.type}}).then((function(){t.loading=!1,t.successCb()}),(function(){return t.$message.error("评论失败了")}));Object(a["c"])({api:"COMMENT",data:{t:e.commentId?2:1,type:o,id:e.id,content:e.val,commentId:e.commentId},cache:!0}).then((function(){t.loading=!1,t.successCb()}),(function(){return t.$message.error("评论失败了")}))}else{switch("".concat(n,"-").concat(o)){case"163-0":i=this.playNow.id,s=this.playNow.name;break;case"qq-0":i=this.playNow.songid,s=this.playNow.name,c=1;break}this.$store.dispatch("updateCommentInfo",{type:c,id:i,title:s,open:!0,platform:n,success:!1})}},closeComment:function(){this.$store.dispatch("updateCommentInfo",{open:!1})}}},d=f,h=(n("2f5a"),n("2877")),b=Object(h["a"])(d,m,l,!1,null,"fe07b3e8",null),g=b.exports,y=function(){var t=this,e=t._self._c;return e("div",{class:"comments-page-container ".concat(t.show&&"show"),on:{scroll:t.onScroll}},t._l(t.type,(function(n){return t.comments&&t.comments[n].length>0?e("div",{key:"list-".concat(n),staticClass:"comment-type-block"},[e("div",{staticClass:"comment-type-title"},[t._v(t._s(n.toUpperCase()))]),e("div",{staticClass:"comments-list"},t._l(t.comments[n],(function(o){return e("div",{key:o.id,staticClass:"comment-item"},[e("img",{staticClass:"user-avatar",attrs:{src:"".concat(o.user.avatarUrl,"?param=50y50")}}),e("div",{staticClass:"comment-content"},[e("div",{staticClass:"user-name-block"},[e("a",{attrs:{href:"#/user?id=".concat(o.user.userId)}},[e("b",{staticClass:"user-name"},[t._v(t._s(o.user.nickname))])]),e("span",{staticClass:"pl_20 comment-time"},[t._v(t._s(t.getTime(o.time)))])]),e("div",{staticClass:"content",domProps:{innerHTML:t._s(o.content)}}),o.beReplied&&o.beReplied[0]?e("blockquote",{staticClass:"be-replied"},[e("a",{staticClass:"user-name",attrs:{href:"#/user?id=".concat(o.user.userId)}},[t._v("@"+t._s(o.beReplied[0].user.nickname))]),t._v("\n            ："),e("span",{domProps:{innerHTML:t._s(o.beReplied[0].content)}})]):t._e(),e("div",{staticClass:"mt_10"},[e("i",{class:"iconfont pointer ".concat(o.newLike," icon-zan").concat(o.liked?"":"-o"),on:{click:function(e){return t.likeComment(o,n)}}}),e("span",{staticClass:"pl_10 ft_12"},[t._v(t._s(t.numberHandle(o.likedCount)))]),"163"===t.platform?e("i",{staticClass:"iconfont icon-reply ml_20 pointer",staticStyle:{"vertical-align":"-1px"},on:{click:function(e){return t.reply(o)}}}):t._e(),o.canDelete||"163"===t.platform&&o.user.userId===t.user.userId?e("i",{staticClass:"iconfont icon-delete ml_20 pointer",on:{click:function(e){return t.delComment(o.commentId)}}}):t._e()])])])})),0)]):t._e()})),0)},O=[],v=(n("7514"),n("2909")),C=(n("96cf"),n("1da1")),w=n("0828"),j=n("1157"),_=n.n(j),k=n("aa67");function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var N={name:"Comment",props:{commentType:Number,id:Number|String,comments:Object,platform:String},data:function(){return{loading:!1,show:!1,type:["hot","latest"]}},computed:P({},Object(s["b"])({playNow:"getPlaying",user:"getUser",playingPercent:"getPlayingPercent",commentInfo:"getCommentInfo"})),watch:{commentInfo:{handler:function(t){t.success&&this.getComments(!0)},deep:!0}},created:function(){var t=this;setTimeout((function(){return t.show=!0}))},methods:{delComment:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e){var n,o,c,i,s,r,m,l=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.id,o=this.commentType,c=this.playNow,i=[c][o].comments,t.prev=2,t.next=5,this.$confirm("确认删除？");case 5:if(s=t.sent,"confirm"===s){t.next=8;break}return t.abrupt("return");case 8:if(r=function(){i.hot=i.hot.filter((function(t){return t.commentId!==e})),i.latest=i.latest.filter((function(t){return t.commentId!==e})),i.total-=1,l.$store.dispatch(["updateSongDetail"][o],{id:n,comments:i}),l.$message.success("删除成功")},"qq"!==this.platform){t.next=11;break}return t.abrupt("return",Object(a["c"])({api:"QQ_COMMENT_DELETE",data:{id:e}}).then(r,(function(){return l.$message.error("删除失败")})));case 11:return t.next=13,Object(a["c"])({api:"COMMENT",data:{t:0,type:o,id:n,commentId:e},cache:!0});case 13:m=t.sent,200===m.code?r():this.$message.error("删除失败"),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](2),console.log(t.t0);case 20:case"end":return t.stop()}}),t,this,[[2,17]])})));function e(e){return t.apply(this,arguments)}return e}(),reply:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e){var n,o,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commentId,o=e.user,c=this.id,i=this.platform,this.$store.dispatch("updateCommentInfo",{type:0,id:c,commentId:n,open:!0,nick:o.nickname,beReplied:e,platform:i});case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getComments:function(t){var e=this,n=this.playNow,o=this.commentType,c=[n][o],i=c.comments,s=c.id;if(!i)return!1;var r=i.offset,m=i.total;t&&(r=0);var l=20;r+l>m||this.loading||(this.loading=!0,t&&(i.latest=[]),"qq"===this.platform?Object(a["c"])({api:"QQ_GET_COMMENT",data:{id:n.songid,pageNo:r/20+1}}).then((function(t){i.offset+=l,i.total=t.data.comment.commenttotal,i.latest=[].concat(Object(v["a"])(i.latest),Object(v["a"])(Object(a["k"])(t.data.comment.commentlist))),e.$store.dispatch(["updateSongDetail"][o],{id:s,comments:i}),e.loading=!1})):Object(a["c"])({api:["MUSIC_COMMENTS"][o],data:{offset:r,limit:20,total:m,id:s}}).then((function(t){i.offset+=l,i.total=t.total,i.latest=[].concat(Object(v["a"])(i.latest),Object(v["a"])(t.comments)),e.loading=!1,e.$store.dispatch(["updateSongDetail"][o],{id:s,comments:i})})))},onScroll:function(){var t=this.comments,e=this.loading;if(t){var n=t.offset,o=t.total,c=_()(".comments-page-container"),i=c.height(),s=c.get(0).scrollHeight,a=c.scrollTop();s-i-a<300&&n<o&&!e&&this.getComments()}},getTime:function(t){return Object(r["a"])(t).str("YY-MM-DD HH:mm:ss")},numberHandle:w["d"],likeComment:function(t,e){var n=this,o=this.playNow,c=this.commentType,i=Number(!t.liked),s=function(){var s=[o][c].comments[e].find((function(e){return e.commentId===t.commentId}));s.likedCount+=2*i-1,s.liked=!t.liked,s.newLike=t.liked?"new-like":"",n.$store.dispatch(["updateSongDetail"][c],o)};if("qq"===this.platform)return"1"!==k["a"].get("haveQCookie")?this.$message.warning("请先前往设置页设置 Cookie"):Object(a["c"])({api:"QQ_COMMENT_LIKE",data:{id:t.commentId,type:-1*i+2}}).then(s);Object(a["c"])({api:"LIKE_COMMENT",data:{t:i,type:c,cid:t.commentId,id:this.id}}).then((function(t){t&&s()}))}}},S=N,D=(n("521a"),Object(h["a"])(S,y,O,!1,null,"0c68a496",null)),E=D.exports;function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var $={name:"Comment",components:{SendComment:g,CommentComponent:E},data:function(){return{comments:null,loading:!1,type:["hot","latest"],show:!1}},computed:T({},Object(s["b"])({playNow:"getPlaying",user:"getUser"})),watch:{playNow:function(t){var e=t.comments;this.comments=e}},created:function(){this.comments=this.playNow.comments,this.$store.dispatch("updateCommentInfo",{type:0,id:0,val:"",title:"",open:!1})},methods:{initComments:function(){this.$message.success("发送成功~"),this.$store.dispatch("updateCommentInfo",{type:0,id:0,val:"",title:"",open:!1,success:!0})}}},x=$,q=Object(h["a"])(x,o,c,!1,null,"5f230c2c",null);e["default"]=q.exports},"2f5a":function(t,e,n){"use strict";n("7fb1")},"521a":function(t,e,n){"use strict";n("cb29")},"7fb1":function(t,e,n){},cb29:function(t,e,n){}}]);
//# sourceMappingURL=chunk-aa1cb3a0.ec7f0af4.js.map