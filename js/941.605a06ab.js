"use strict";(self["webpackChunksongs"]=self["webpackChunksongs"]||[]).push([[941],{6611:function(u,n,a){a.r(n),a.d(n,{default:function(){return g}});var l=a(6269),e=(a(3450),a(5658),a(440)),t=a(8643),s=a(4367),c=a(4059),i=a(8),o=function(u,n,a,l){function e(u){return u instanceof a?u:new a((function(n){n(u)}))}return new(a||(a=Promise))((function(a,t){function s(u){try{i(l.next(u))}catch(n){t(n)}}function c(u){try{i(l["throw"](u))}catch(n){t(n)}}function i(u){u.done?a(u.value):e(u.value).then(s,c)}i((l=l.apply(u,n||[])).next())}))};const b=u=>((0,e.dD)("data-v-0ba932e2"),u=u(),(0,e.Cn)(),u),v={class:"back","infinite-scroll-immediate":!1,"infinite-scroll-delay":1e3},m={class:"head"},d=b((()=>(0,e._)("h2",null,"我的专辑",-1)));var r=(0,e.aZ)({__name:"my",setup(u){const n=(0,s.iH)({albumCount:0,albums:[]});(0,e.bv)((()=>o(this,void 0,void 0,(function*(){n.value=yield c.c5.getSubscribed(21,0)}))));const a=10,b=()=>o(this,void 0,void 0,(function*(){if(n.value.albums.length<n.value.albumCount)if(n.value.albums.length+a<=n.value.albumCount){const{albums:u}=yield c.c5.getSubscribed(a,n.value.albums.length);n.value.albums=n.value.albums.concat(u),n.value.albums.length+=a}else{const{albums:u}=yield c.c5.getSubscribed(n.value.albumCount-n.value.albums.length,n.value.albums.length);n.value.albums=n.value.albums.concat(u),n.value.albums.length+=n.value.albumCount-n.value.albums.length}}));return(u,a)=>{const s=l.n;return(0,e.wy)(((0,e.wg)(),(0,e.iD)("div",v,[(0,e._)("div",m,[d,(0,e._)("span",null,[(0,e._)("i",null,"含收藏及购买专辑共 "+(0,t.zw)(n.value.albumCount)+" 张",1)])]),(0,e.Wm)(i.Z,{class:"content",data:n.value.albums},null,8,["data"])])),[[s,b]])}}}),f=a(465);const h=(0,f.Z)(r,[["__scopeId","data-v-0ba932e2"]]);var g=h}}]);