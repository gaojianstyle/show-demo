if(!self.define){let s,l={};const i=(i,n)=>(i=new URL(i+".js",n).href,l[i]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=l,document.head.appendChild(s)}else s=i,importScripts(i),l()})).then((()=>{let s=l[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const u=s||("document"in self?document.currentScript.src:"")||location.href;if(l[u])return;let e={};const c=s=>i(s,u),o={module:{uri:u},exports:e,require:c};l[u]=Promise.all(n.map((s=>o[s]||c(s)))).then((s=>(r(...s),e)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"g-vue3"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"css/238.e13f3eb8.css",revision:null},{url:"css/257.25f18cce.css",revision:null},{url:"css/330.47b11659.css",revision:null},{url:"css/346.5ba35773.css",revision:null},{url:"css/354.72661f1c.css",revision:null},{url:"css/398.a49507d1.css",revision:null},{url:"css/452.cb669454.css",revision:null},{url:"css/475.b974a211.css",revision:null},{url:"css/528.b8698a1c.css",revision:null},{url:"css/542.c95627c5.css",revision:null},{url:"css/629.f97913d6.css",revision:null},{url:"css/645.25b97eb3.css",revision:null},{url:"css/701.b83304f7.css",revision:null},{url:"css/723.9d8e06c5.css",revision:null},{url:"css/726.3c5d8ba4.css",revision:null},{url:"css/742.c3e3f72c.css",revision:null},{url:"css/77.b7409f89.css",revision:null},{url:"css/944.a0918587.css",revision:null},{url:"css/966.ccb9b9f5.css",revision:null},{url:"css/app.fb6e21bb.css",revision:null},{url:"css/chunk-vendors.d05a1450.css",revision:null},{url:"img/1 (24).0aafc2fc.jpg",revision:null},{url:"img/1 (28).3f2ca1cd.jpg",revision:null},{url:"img/1 (30).6f62287f.jpg",revision:null},{url:"img/1 (31).1a7de1c1.jpg",revision:null},{url:"img/1 (32).518aae57.jpg",revision:null},{url:"img/1 (33).53d4f506.jpg",revision:null},{url:"img/1 (34).1cd33cc9.jpg",revision:null},{url:"img/1 (37).4e082d4a.jpg",revision:null},{url:"img/1.5364e347.png",revision:null},{url:"img/10001.9ff92578.jpg",revision:null},{url:"img/10002.a1667982.jpg",revision:null},{url:"img/10003.3aa7d3ba.jpg",revision:null},{url:"img/10004.ece133a8.jpg",revision:null},{url:"img/10005.a92e6de0.jpg",revision:null},{url:"img/10006.f2399183.jpg",revision:null},{url:"img/10007.0cbae419.jpg",revision:null},{url:"img/14.2e9c2e7a.png",revision:null},{url:"img/2.ad1f616d.png",revision:null},{url:"img/3.2efa0d60.png",revision:null},{url:"img/4.522df0a1.png",revision:null},{url:"img/5.e9148a33.png",revision:null},{url:"img/6.753e21b1.png",revision:null},{url:"img/user1.91811f62.jpg",revision:null},{url:"img/user2.09346aff.svg",revision:null},{url:"index.html",revision:"11094b86bb901dea4189466d1fda3000"},{url:"js/238.d504eedb.js",revision:null},{url:"js/257.4223255c.js",revision:null},{url:"js/330.aef21638.js",revision:null},{url:"js/346.3eb82c17.js",revision:null},{url:"js/354.d29c55ad.js",revision:null},{url:"js/398.93d9f447.js",revision:null},{url:"js/452.cfa960a3.js",revision:null},{url:"js/475.72575d4c.js",revision:null},{url:"js/528.05ca5262.js",revision:null},{url:"js/542.852f5b5f.js",revision:null},{url:"js/629.8b99ec2a.js",revision:null},{url:"js/68.84d6c90b.js",revision:null},{url:"js/695.3a85cb1f.js",revision:null},{url:"js/701.39d247b7.js",revision:null},{url:"js/723.458539ef.js",revision:null},{url:"js/726.2d1ff162.js",revision:null},{url:"js/742.d3beef6c.js",revision:null},{url:"js/77.0f19822a.js",revision:null},{url:"js/920.38d6687b.js",revision:null},{url:"js/944.5738ea0c.js",revision:null},{url:"js/966.eeade786.js",revision:null},{url:"js/about.a497733f.js",revision:null},{url:"js/app.1af56e4c.js",revision:null},{url:"js/chunk-vendors.eb2521b0.js",revision:null},{url:"manifest.json",revision:"4248ae02dfd09fce4d128f4a89dc211e"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
