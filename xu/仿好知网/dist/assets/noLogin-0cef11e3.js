import{_ as c,k as n,o as p,c as _,a as t,D as o,t as d,l as r,m as i,v as l,x as h}from"./index-de849bd0.js";const F={components:{},data(){return{s:3}},props:{text:{default:"默认值"}},created(){let s=setInterval(()=>{this.s=this.s-1,this.s===0&&(clearInterval(s),this.$router.push("/"))},1e3)}};const e=s=>(l("data-v-871c3623"),s=s(),h(),s),x={class:"max pt-10"},f={class:"mx-auto flex flex-col div1 p-8 w-12/12 md:w-7/12"},v=e(()=>t("span",{class:"span1 pt-2 pb-2"},"提示信息",-1)),D=e(()=>t("span",{class:"span2 pt-2 pb-2"},"你好像忘了登录哦？",-1)),m={class:"div2 pt-2 pb-2 flex flex-row"},E={class:"span3 pl-1 pr-1"},B=e(()=>t("span",{class:"span4 pl-1 pr-1"},"点击返回上一步",-1));function I(s,k,w,A,a,g){const u=n("RouterLink");return p(),_("div",x,[t("div",f,[v,D,t("div",m,[o(" 正在返回"),t("span",E,d(a.s)+"s",1),o(",若自动返回失败，请手动 "),r(u,{to:"/"},{default:i(()=>[B]),_:1})])])])}const L=c(F,[["render",I],["__scopeId","data-v-871c3623"]]);export{L as default};
