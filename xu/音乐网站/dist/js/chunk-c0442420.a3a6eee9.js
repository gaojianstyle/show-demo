(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0442420"],{"152a":function(t,e,s){},bc6c:function(t,e,s){"use strict";s("152a")},fddd:function(t,e,s){"use strict";s.r(e);s("673e"),s("7f7f");var i=function(){var t=this,e=t._self._c;return e("div",{class:"playlist-container ".concat(t.show&&"show")},[e("div",{staticClass:"right-select-tab-list"},t._l(t.tabs,(function(s,i){return s.hide!==t.hash?e("div",{key:s.icon,class:"tab-item-".concat(i," c-").concat(s.color," ").concat(t.selected===s.key&&"selected"),on:{click:function(e){t.selected=s.key}}},[e("i",{class:"iconfont icon-".concat(s.icon)}),t._v("\n        "+t._s(s.val)+"\n      ")]):t._e()})),0),e("div",{staticClass:"playlist-list hide-scroll"},["playlist"===t.hash&&"163"===t.selected?e("div",{staticClass:"input-qq mb_20"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputNEId,expression:"inputNEId"}],attrs:{type:"text",placeholder:"官网个人主页链接中可获取id"},domProps:{value:t.inputNEId},on:{input:function(e){e.target.composing||(t.inputNEId=e.target.value)}}}),t.inputNEId!==t.neId?e("div",{staticClass:"update-btn",on:{click:t.updateNEId}},[t._v("更新")]):t._e()]):t._e(),t.user.userId||"playlist"!==t.hash||t.$route.query.id||t.neId||"163"!==t.selected?t._e():e("div",{staticClass:"text-center fc_fff ft_20",staticStyle:{"padding-top":"100px",opacity:"0.8","letter-spacing":"2px"}},[t._v("\n        登录/输入id 后可以查看个人歌单\n      ")]),"playlist"===t.hash&&"qq"===t.selected?e("div",{staticClass:"input-qq mb_20"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputQQ,expression:"inputQQ"}],attrs:{type:"text",placeholder:"输入 QQ号/wxuin 吧"},domProps:{value:t.inputQQ},on:{input:function(e){e.target.composing||(t.inputQQ=e.target.value)}}}),t.inputQQ!==t.qqId?e("div",{staticClass:"update-btn",on:{click:t.updateQQNum}},[t._v("更新")]):t._e()]):t._e(),t.qqId||"playlist"!==t.hash||"qq"!==t.selected?t._e():e("div",{staticClass:"text-center fc_fff ft_20",staticStyle:{"padding-top":"100px",opacity:"0.8","letter-spacing":"2px"}},[t._v("\n        输入 QQ号/wxuin 可查看个人歌单\n      ")]),t.allList["".concat(t.selected,"_daily")]&&!t.$route.query.id?e("div",{class:"playlist-item ".concat(t.playingListId==="".concat(t.selected,"_daily")&&"playing"),on:{click:function(e){return t.goTo("daily",t.selected)}}},[e("div",{staticClass:"list-img",staticStyle:{border:"1px solid #fff5","text-align":"center"}},[t._v("\n          "+t._s((new Date).getDate())+"\n        ")]),e("span",{staticClass:"list-name"},[t._v("每日推荐")]),e("span",{staticClass:"list-count"},[t._v(t._s(t.allList["".concat(t.selected,"_daily")].length))]),t.playingListId==="".concat(t.selected,"_daily")&&t.isPlaying?e("div",{staticClass:"playing-item-bg"},t._l(new Array(100),(function(t,s){return e("div",{key:"bg-item-".concat(s),class:"playing-bg-".concat(s)},[e("div",{staticClass:"bg-item-inside"})])})),0):t._e()]):t._e(),t._l(t.pagePlayList,(function(s){return e("div",{key:"playlist-".concat(s.id),class:"playlist-item ".concat(t.playingListId===s.listId&&"playing"),on:{click:function(e){return t.goTo(s.id)}}},[t.playingListId==s.listId&&t.isPlaying?e("div",{staticClass:"playing-item-bg"},t._l(new Array(100),(function(t,s){return e("div",{key:"bg-item-".concat(s),class:"playing-bg-".concat(s)},[e("div",{staticClass:"bg-item-inside"})])})),0):t._e(),e("img",{staticClass:"list-bg-img",attrs:{src:"".concat(s.cover,"?param=50y50")}}),e("img",{staticClass:"list-img",attrs:{src:"".concat(s.cover,"?param=200y200")}}),e("span",{staticClass:"list-name"},[t._v(t._s(s.name))]),e("span",{staticClass:"list-count"},[t._v(t._s(s.trackCount))]),e("div",{staticClass:"bottom-text"},["163"===t.selected&&t.user.userId&&t.userList["163"]&&t.userList["163"].favListId===s.listId?e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"心动模式",placement:"top"}},[e("i",{class:"iconfont icon-heart heart-btn ".concat(t.heartMode&&"hearting"),on:{click:function(e){return t.toHeartMode(s.listId)}}})]):t._e(),t.userList[t.selected]&&!t.userList[t.selected].mine[s.listId]?e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.userList[t.selected].sub[s.listId]?"已收藏":"收藏",placement:"top"}},[e("i",{class:"collect-btn iconfont icon-".concat(t.userList[t.selected].sub[s.listId]?"collected":"collect"),on:{click:function(e){return t.collectPlaylist(s)}}})]):t._e(),s.creator&&s.creator.nick?e("span",{staticClass:"list-creator"},[t._v("\n          By: "),e("a",[t._v(t._s(s.creator.nick))]),s.playCount?e("span",{staticClass:"pl_20"},[e("i",{staticClass:"iconfont icon-yinyue"}),t._v(": "+t._s(t.numToStr(s.playCount)))]):t._e()]):t._e()],1)])}))],2)])},a=[],n=(s("8e6e"),s("ac6a"),s("456d"),s("28a5"),s("a481"),s("c5f6"),s("7514"),s("96cf"),s("1da1")),c=s("ade3"),r=s("2f62"),l=s("0828"),o=s("ceb6"),d=s("aa67");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){Object(c["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var h={name:"PlayList",data:function(){return{show:!1,hash:"",pagePlayList:[],tabs:[{icon:"163",key:"163",color:"red",val:"网易云"},{icon:"qq",key:"qq",color:"green",val:"企鹅"}],selected:Object(l["b"])("from")||d["a"].get("playlist_from")||"163",inputQQ:d["a"].get("qqId"),qqId:d["a"].get("qqId"),inputNEId:d["a"].get("neId"),neId:d["a"].get("neId")}},computed:p({},Object(r["b"])({userList:"getUserList",allList:"getAllList",recommendList:"getRecommendList",user:"getUser",playingListId:"getPlayingListId",heartMode:"isHearMode",allSongs:"getAllSongs",isPlaying:"isPlaying",isPersonFM:"isPersonFM",qUserList:"getQUserList"})),watch:{$route:function(){this.hashChange()},selected:function(t){d["a"].set("playlist_from",t),this.hashChange()},recommendList:function(){this.hashChange()},userList:function(t){var e=this.selected;t[e]&&!Object(l["b"])("id")&&(this.pagePlayList=t[e].list.map((function(s){return t[e].obj[s]})))}},created:function(){var t=this;this.hashChange(),setTimeout((function(){return t.show=!0})),this.selected=Object(l["b"])("from")||d["a"].get("playlist_from")||"163",document.location.hash.indexOf("playlist")>-1&&"migu"===this.selected&&(this.selected="163")},destroyed:function(){this.show=!1},methods:{hashChange:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,s,i,a,n,c,r,d,u,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=["playlist","recommend"],this.hash=e.find((function(t){return document.location.hash.indexOf(t)>-1})),s=this.selected,i=this.hash,a=this.user,n=this.inputQQ,c=this.neId,this.pagePlayList=[],d=Object(l["b"])("id")||{163:a.userId||c,qq:n}[s],t.t0=i,t.next="recommend"===t.t0?8:"playlist"===t.t0?13:21;break;case 8:return t.next=10,Object(o["c"])({api:"RECOMMEND_PLAYLIST",data:{login:Number(Boolean(a.userId)),_p:s}});case 10:return r=t.sent,this.pagePlayList=r.data,t.abrupt("break",21);case 13:if("migu"!==s){t.next=15;break}return t.abrupt("return",this.selected="163");case 15:if(!d){t.next=21;break}return t.next=18,Object(o["j"])(d,this.selected);case 18:u=t.sent,p=u.list,this.pagePlayList=p;case 21:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),goTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected;window.location="#/playlist/detail?id=".concat(t,"&from=").concat(e)},toHeartMode:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var s,i,a,n,c,r,l,d,u,p,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(window.event.stopPropagation(),s=this.userList,i=this.allList,this.allSongs,a=this.user,a.userId){t.next=4;break}return t.abrupt("return",this.$message.warning("登录后才可以开启心动模式"));case 4:return n=s["163"].favListId,c=(i[n]||[]).length>0?i[n]:i["163_daily"],r=c[Math.floor(Math.random(c.length))].replace("163_",""),l=e.split("_")[1],t.next=10,Object(o["c"])({api:"GET_HEART_MODE",data:{pid:l,id:r,_p:"163"}});case 10:return d=t.sent,u=d.data,p=this.$store.dispatch,t.next=15,Object(o["l"])(u);case 15:h=t.sent,p("updatePlayNow",this.allSongs[h[0]]),p("updatePlayingList",{list:h,listId:e,heart:!0}),p("updatePlayingStatus",!0),this.$message.success("心动模式启动～");case 20:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),playPersonFM:function(){var t=this,e=this.$store.dispatch,s=this.isPersonFM,i=this.allSongs,a=function s(a){t.allSongs[a]?e("updatePlayNow",i[a]):setTimeout((function(){return s(a)}),100)};s||Object(o["h"])().then((function(t){var s=t.map((function(t){return t.id}));e("setPersonFM",s),a(s[0])}))},updateQQNum:function(){var t=this.inputQQ;this.qqId=t,d["a"].set("qqId",t),this.hashChange()},updateNEId:function(){var t=this.inputNEId;this.neId=t,d["a"].set("neId",t),this.hashChange()},numToStr:l["d"],collectPlaylist:o["b"]}},g=h,f=(s("bc6c"),s("2877")),y=Object(f["a"])(g,i,a,!1,null,"29c1fa64",null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-c0442420.a3a6eee9.js.map