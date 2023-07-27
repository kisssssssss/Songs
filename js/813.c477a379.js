"use strict";(self["webpackChunksongs"]=self["webpackChunksongs"]||[]).push([[813],{5170:function(e,s,n){n.d(s,{Z:function(){return _}});var l=n(114),t=(n(3450),n(7724),n(4704)),o=(n(4745),n(6770)),a=(n(2607),n(7658),n(440)),i=n(8643),u=n(4592),r=n(4367),c=n(4804),d=n(708),g=n(9226),v=n(9644);const w=["title"],p=["onClick"],b={class:"operate-back"};var y=(0,a.aZ)({__name:"songs-table",props:{songs:null,count:null,showTitle:{type:Boolean,default:!0},showSingers:{type:Boolean,default:!0},showAlbum:{type:Boolean,default:!0},showOperation:{type:Boolean,default:!0}},setup(e){const s=e,n=(0,c.tv)(),y=(0,v.a2)(),m=(0,v.w9)();function f(e){console.log(123),m.play(e),y.push_playList(e)}function _(e){y.push_playList(e),(0,d.y)({message:`${e.name} 已添加到播放列表`,type:"success",duration:800})}return(c,d)=>{const v=l.$Y,y=o.Z,m=t.gn,h=l.eI;return(0,a.wg)(),(0,a.j4)(h,{data:s.songs,"row-style":{height:"50px"},lazy:!0,onRowClick:f,"row-class-name":"table-row","header-row-class-name":"table-header"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{type:"index",label:(e.count||e.songs.length)+"首",width:"80"},null,8,["label"]),e.showTitle?((0,a.wg)(),(0,a.j4)(v,{key:0,label:"歌曲"},{default:(0,a.w5)((e=>[(0,a._)("span",{title:e.row.name},(0,i.zw)(e.row.name),9,w),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.row.alias,(e=>((0,a.wg)(),(0,a.iD)("span",{key:e}," ("+(0,i.zw)(e)+") ",1)))),128))])),_:1})):(0,a.kq)("",!0),e.showSingers?((0,a.wg)(),(0,a.j4)(v,{key:1,label:"歌手"},{default:(0,a.w5)((e=>[(0,a.Wm)(g.Z,{singers:e.row.singers.singers},null,8,["singers"])])),_:1})):(0,a.kq)("",!0),e.showAlbum?((0,a.wg)(),(0,a.j4)(v,{key:2,label:"专辑"},{default:(0,a.w5)((e=>[(0,a._)("span",{class:"album",onClick:(0,u.iM)((s=>(0,r.SU)(n).push(`/album/${e.row.album.id}`)),["stop"])},(0,i.zw)(e.row.album.name),9,p)])),_:1})):(0,a.kq)("",!0),e.showOperation?((0,a.wg)(),(0,a.j4)(v,{key:3},{header:(0,a.w5)((()=>[])),default:(0,a.w5)((e=>[(0,a._)("div",b,[(0,a.Wm)(m,{title:"添加到播放列表",size:"25",class:"operate",onClick:(0,u.iM)((s=>_(e.row)),["stop"])},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{name:"add2List"})])),_:2},1032,["onClick"]),(0,a.WI)(c.$slots,"operate")])])),_:3})):(0,a.kq)("",!0)])),_:3},8,["data"])}}}),m=n(465);const f=(0,m.Z)(y,[["__scopeId","data-v-0f0c3d6e"]]);var _=f},7813:function(e,s,n){n.r(s),n.d(s,{default:function(){return q}});var l=n(9894),t=(n(3450),n(1262),n(7658),n(440)),o=n(4367),a=n(8643),i=n(4804),u=n(4059),r=n(4704),c=(n(4745),n(4592));const d={class:"songCard"},g=["title"];var v=(0,t.aZ)({__name:"small",props:{img:null,title:null},setup(e){const s=e;return(e,n)=>{const o=l.F8;return(0,t.wg)(),(0,t.iD)("div",d,[(0,t.Wm)(o,{class:"songImg",src:s.img,fit:"cover",loading:"lazy"},null,8,["src"]),(0,t._)("span",{title:s.title},(0,a.zw)(s.title),9,g)])}}}),w=n(465);const p=(0,w.Z)(v,[["__scopeId","data-v-7d8171f4"]]);var b=p,y=n(5170),m=n(9644);const f={key:0,class:"more"};var _=(0,t.aZ)({__name:"songs-more",props:{subscribedSong:null},setup(e){const s=e;(0,c.sj)((e=>({ec21a2a4:d.value})));const n=(0,i.tv)(),l=(0,t.Fl)((()=>{const e=s.subscribedSong.songs;return"单曲"===s.subscribedSong.type?e.slice(1):e})),u=(0,o.iH)(),d=(0,o.iH)();(0,t.bv)((()=>{u.value&&(u.value.style.visibility="hidden",u.value.style.display="block",d.value=u.value.offsetHeight+28+"px",u.value.style.display="none",u.value.style.visibility="visible")}));const g=(0,o.iH)(!1);function v(){g.value=!g.value,u.value&&(g.value?u.value.style.visibility="visible":u.value.style.visibility="hidden")}const w=(0,t.Fl)((()=>{const e=s.subscribedSong.type,n=s.subscribedSong.songs.length;return"单曲"===e?`${g.value?"收起":"展开"}${n-1}首${2===n?"伴奏":"歌曲"}`:"专辑"===e?`${g.value?"收起":"展开"}${n}首专辑歌曲`:void 0}));function p(){const{type:e,resourceId:l,songs:t}=s.subscribedSong;"专辑"===e?n.push(`/album/${l}`):"单曲"===e&&(0,m.w9)().play(t[0])}return(s,n)=>{var i,d;const m=(0,t.up)("ArrowDown"),_=(0,t.up)("ArrowUp"),h=r.gn;return(0,t.wg)(),(0,t.iD)("div",null,[n[0]||((0,t.qZ)(-1),n[0]=(0,t.Wm)(b,{img:(null===(i=e.subscribedSong.resourceCover)||void 0===i?void 0:i.url)||(null===(d=e.subscribedSong.songs[0].cover)||void 0===d?void 0:d.url),title:e.subscribedSong.resourceName,onClick:p},null,8,["img","title"]),(0,t.qZ)(1),n[0]),n[1]||((0,t.qZ)(-1),n[1]=(0,t.Wm)(c.uT,{name:"songs"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("div",{class:"songs",ref_key:"table",ref:u},[(0,t.Wm)(y.Z,{songs:(0,o.SU)(l),"show-album":!1},null,8,["songs"])],512),[[c.F8,g.value]])])),_:1}),(0,t.qZ)(1),n[1]),e.subscribedSong.songs.length>=2?((0,t.wg)(),(0,t.iD)("div",f,[(0,t._)("span",{onClick:v},[(0,t.Uk)((0,a.zw)((0,o.SU)(w))+" ",1),(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[g.value?((0,t.wg)(),(0,t.j4)(_,{key:1})):((0,t.wg)(),(0,t.j4)(m,{key:0}))])),_:1})])])):(0,t.kq)("",!0)])}}});const h=(0,w.Z)(_,[["__scopeId","data-v-0e2a513d"]]);var k=h,S=function(e,s,n,l){function t(e){return e instanceof n?e:new n((function(s){s(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{u(l.next(e))}catch(s){o(s)}}function i(e){try{u(l["throw"](e))}catch(s){o(s)}}function u(e){e.done?n(e.value):t(e.value).then(a,i)}u((l=l.apply(e,s||[])).next())}))};const Z={class:"back"},C={class:"header"},z={class:"data"},W={class:"content"};var $=(0,t.aZ)({__name:"subscribed-new-song",setup(e){const s=(0,i.tv)(),n=(0,o.iH)();return(0,t.bv)((()=>S(this,void 0,void 0,(function*(){n.value=yield u.pF.getSubscribedSingerNewSongs()})))),(e,i)=>{const u=l.F8;return(0,t.wg)(),(0,t.iD)("div",Z,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n.value,(e=>{var n;return(0,t.wg)(),(0,t.iD)("div",{key:e.publishTime,class:"cardBox"},[(0,t._)("div",C,[(0,t.Wm)(u,{class:"singerImg",src:null===(n=e.singer.cover)||void 0===n?void 0:n.url,fit:"cover",loading:"lazy",onClick:n=>(0,o.SU)(s).push(`/singer/${e.singer.id}`)},null,8,["src","onClick"]),(0,t._)("div",z,[(0,t._)("span",null,(0,a.zw)(e.singer.name),1),(0,t._)("span",null,(0,a.zw)(e.publishDate.slice(0,-3))+" "+(0,a.zw)(`${e.type}上线`),1)])]),(0,t._)("div",W,[(0,t.Wm)(k,{"subscribed-song":e},null,8,["subscribed-song"])])])})),128))])}}});const D=(0,w.Z)($,[["__scopeId","data-v-4b17f998"]]);var q=D}}]);