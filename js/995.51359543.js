"use strict";(self["webpackChunksongs"]=self["webpackChunksongs"]||[]).push([[995],{9260:function(e,n,t){t.d(n,{$2:function(){return r},BG:function(){return c},_n:function(){return v},l7:function(){return f},qh:function(){return d},yu:function(){return m}});t(7658);var a=t(9644),l=t(1809),u=t(708),s=function(e,n,t,a){function l(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,u){function s(e){try{o(a.next(e))}catch(n){u(n)}}function i(e){try{o(a["throw"](e))}catch(n){u(n)}}function o(e){e.done?t(e.value):l(e.value).then(s,i)}o((a=a.apply(e,n||[])).next())}))};const i=(0,a.a2)(),o=(0,a.w9)();function r(e,n){const t=i.push_playList(e);n&&(0,u.y)({message:t?`[ ${e.song.name} ]成功添加到播放列表`:`播放列表中已存在[ ${e.song.name} ]`,type:t?"success":"warning"})}function c(e,n,t){return s(this,void 0,void 0,(function*(){d(n&&"歌单"===t?yield(0,l.LH)(n):e)}))}function d(e){i.update_playList((n=>{e.forEach((e=>{n.push(e)}))})),o.update_song(e[0]),(0,u.y)({message:"已添加到播放列表"})}function v(e){o.update_song(e),r(e,!1)}function f(e,n,t){return s(this,void 0,void 0,(function*(){if(console.log(n,t),n&&"歌单"===t){let t=[];e.forEach((e=>{t.push(e.song.id)})),(yield(0,l.s9)("del",n,t))&&(0,u.y)({message:"成功删除,请刷新页面"})}}))}function m(e,n){return s(this,void 0,void 0,(function*(){if(e&&"歌单"===n){let n=[];(yield(0,l.LH)(e)).forEach((e=>{n.push(e.song.id)})),(yield(0,l.s9)("del",e,n))&&(0,u.y)({message:"成功删除,请刷新页面"})}}))}},1770:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(2603),l=(t(3450),t(4350),t(440)),u=t(9412),s=(0,l.aZ)({__name:"artist-card-group",props:{data:{type:Array,required:!0},size:{type:Number,required:!1,default:30}},setup(e){return(n,t)=>{const s=a.Q2;return(0,l.wg)(),(0,l.j4)(s,{wrap:"",size:e.size,alignment:"flex-start"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.data,(e=>((0,l.wg)(),(0,l.j4)(u.Z,{key:e.id,data:e},null,8,["data"])))),128))])),_:1},8,["size"])}}});const i=s;var o=i},9412:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(9894),l=(t(3450),t(1262),t(7658),t(440)),u=t(4367),s=t(8643),i=t(4804),o=(0,l.aZ)({__name:"artist-card",props:{data:{type:Object,required:!0},top:{type:Number,required:!1,default:0}},setup(e){const n=(0,i.tv)();return(t,i)=>{const o=a.F8;return(0,l.wg)(),(0,l.iD)("div",{class:"card",onClick:i[0]||(i[0]=t=>(0,u.SU)(n).push(`/singer/${e.data.id}`))},[(0,l.Wm)(o,{class:"img",src:e.data.cover,fit:"cover",lazy:""},null,8,["src"]),(0,l._)("span",null,(0,s.zw)(e.data.name),1),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.data.alias,(e=>((0,l.wg)(),(0,l.iD)("i",null,(0,s.zw)(e),1)))),256)),(0,l.WI)(t.$slots,"default")])}}}),r=t(465);const c=(0,r.Z)(o,[["__scopeId","data-v-3f223c52"]]);var d=c},6308:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(2603),l=(t(3450),t(4350),t(440)),u=t(9520),s=(0,l.aZ)({__name:"list-card-group",props:{list:{type:Array,require:!0}},setup(e){return(n,t)=>{const s=a.Q2;return(0,l.wg)(),(0,l.j4)(s,{wrap:"",size:"large",alignment:"flex-start"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.list,(e=>((0,l.wg)(),(0,l.j4)(u.Z,{list:e,key:e.id},null,8,["list"])))),128))])),_:1})}}});const i=s;var o=i},9520:function(e,n,t){t.d(n,{Z:function(){return _}});var a=t(4704),l=(t(3450),t(4745),t(7658),t(440)),u=t(4592),s=t(8643),i=t(4367),o=t(3624),r=t(4804);const c=e=>((0,l.dD)("data-v-4d7223ef"),e=e(),(0,l.Cn)(),e),d={class:"card"},v=c((()=>(0,l._)("div",{class:"image"},null,-1))),f={class:"data"},m={style:{"padding-right":"5px"}},p={class:"name"};var w=(0,l.aZ)({__name:"list-card",props:{list:{type:Object,required:!0},width:{type:String,default:"160px"}},setup(e){const n=e;(0,u.sj)((n=>({"87ea09fa":e.width,a570dfb0:c.value})));const t=(0,r.tv)(),c=(0,i.iH)(`url(${n.list.cover})`),w=()=>{t.push(`/list/${n.list.id}`)};return(n,t)=>{const u=(0,l.up)("VideoPlay"),r=a.gn;return(0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",{class:"image-box",onClick:w},[v,(0,l._)("div",f,[(0,l._)("div",null,[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u)])),_:1}),(0,l._)("span",null,(0,s.zw)((0,i.SU)(o.vY)(e.list.playCount.toString())),1)]),(0,l._)("span",m,(0,s.zw)(e.list.songCount+"首"),1)])]),(0,l._)("div",p,(0,s.zw)(e.list.name),1)])}}}),g=t(465);const y=(0,g.Z)(w,[["__scopeId","data-v-4d7223ef"]]);var _=y},2748:function(e,n,t){t.d(n,{Z:function(){return _}});var a=t(114),l=(t(3450),t(7724),t(4704)),u=(t(4745),t(6770)),s=t(7755),i=(t(6886),t(2607),t(7658),t(440)),o=t(8643),r=t(4367),c=t(4592),d=t(4804),v=t(9260),f=t(9403);const m=["onClick"],p={class:"operate-back"};var w=(0,i.aZ)({__name:"song-table-common",props:{songs:{type:Array,required:!0},songsCount:{type:Number,default:0},tableWidth:{type:String,default:"100%"}},setup(e){const n=e,t=(0,d.tv)(),w=(0,i.Fl)((()=>n.songs?n.songs.length:0));return(d,g)=>{const y=a.$Y,_=s.mi,h=u.Z,b=l.gn,k=a.eI;return(0,i.wg)(),(0,i.j4)(k,{data:n.songs,style:(0,o.j5)({width:n.tableWidth}),"row-style":{height:"50px"},lazy:!1,onRowClick:(0,r.SU)(v._n),"row-class-name":"table-row","header-row-class-name":"table-header"},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{type:"index",label:(0,r.SU)(w)+"首",width:"80"},null,8,["label"]),(0,i.Wm)(y,{label:"歌曲标题"},{default:(0,i.w5)((e=>[(0,i._)("span",null,(0,o.zw)(e.row.song.name),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.row.song.alia,(e=>((0,i.wg)(),(0,i.iD)("span",null," ("+(0,o.zw)(e)+") ",1)))),256))])),_:1}),(0,i.Wm)(y,{label:"歌手"},{default:(0,i.w5)((e=>[(0,i.Wm)(f.Z,{artists:e.row.artists.artists},null,8,["artists"])])),_:1}),(0,i.Wm)(y,{label:"专辑"},{default:(0,i.w5)((e=>[(0,i._)("span",{class:"album",onClick:(0,c.iM)((n=>(0,r.SU)(t).push(`/album/${e.row.album.id}`)),["stop"])},(0,o.zw)(e.row.album.name),9,m)])),_:1}),(0,i.Wm)(y,null,{header:(0,i.w5)((()=>[(0,i.WI)(d.$slots,"header",{},(()=>[(0,i.Wm)(_,{size:"small",onClick:g[0]||(g[0]=(0,c.iM)((n=>(0,r.SU)(v.BG)(e.songs)),["stop"]))},{default:(0,i.w5)((()=>[(0,i.Uk)("播放全部")])),_:1})]))])),default:(0,i.w5)((e=>[(0,i._)("div",p,[(0,i.Wm)(b,{title:"添加到播放列表",size:"25",class:"operate",onClick:(0,c.iM)((n=>(0,r.SU)(v.$2)(e.row,!0)),["stop"])},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{name:"add2List"})])),_:2},1032,["onClick"]),(0,i.WI)(d.$slots,"operate")])])),_:3})])),_:3},8,["data","style","onRowClick"])}}}),g=t(465);const y=(0,g.Z)(w,[["__scopeId","data-v-4642ac48"]]);var _=y},3947:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var a=t(6269),l=(t(3450),t(5658),t(6174)),u=(t(2373),t(137),t(4704)),s=(t(4745),t(440)),i=t(4592),o=t(8643),r=t(4367),c=t(4804),d=t(1809),v=t(1214),f=t(2748),m=t(9244),p=t(1770),w=t(6308),g=function(e,n,t,a){function l(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,u){function s(e){try{o(a.next(e))}catch(n){u(n)}}function i(e){try{o(a["throw"](e))}catch(n){u(n)}}function o(e){e.done?t(e.value):l(e.value).then(s,i)}o((a=a.apply(e,n||[])).next())}))};const y={class:"back"},_={class:"search"},h=["onKeyup"],b={key:0,class:"result-count"},k={key:1,class:"result"},W={key:2};var Z=(0,s.aZ)({__name:"search",setup(e){const n=(0,c.tv)(),t=(0,r.iH)(v.Z.getItem("firstSearch")||"单曲"),Z=()=>g(this,void 0,void 0,(function*(){C.value={count:0,result:[]},D()})),z=(0,r.iH)(n.currentRoute.value.query.content||""),C=(0,r.iH)(),q=(0,r.iH)(""),D=()=>g(this,void 0,void 0,(function*(){z.value&&(C.value=yield(0,d.yC)(z.value,t.value),C.value.count>0?q.value="":q.value="无搜索结果")})),j=()=>g(this,void 0,void 0,(function*(){var e;C.value.result=null===(e=C.value)||void 0===e?void 0:e.result.concat((yield(0,d.yC)(z.value,t.value,C.value.result.length)).result)}));return(e,n)=>{var r,c,d;const v=(0,s.up)("Search",!0),g=u.gn,x=l.p8,S=l.Ub,$=a.n;return(0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("div",_,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>z.value=e),onKeyup:(0,i.D2)(D,["enter"])},null,40,h),[[i.nr,z.value]]),(0,s._)("div",{class:"icon",onClick:D},[(0,s.Wm)(g,{size:"26"},{default:(0,s.w5)((()=>[(0,s.Wm)(v)])),_:1})])]),(0,s.Wm)(S,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),onTabChange:Z},{default:(0,s.w5)((()=>[(0,s.Wm)(x,{label:"单曲",name:"单曲"}),(0,s.Wm)(x,{label:"专辑",name:"专辑"}),(0,s.Wm)(x,{label:"歌手",name:"歌手"}),(0,s.Wm)(x,{label:"歌单",name:"歌单"}),(0,s.Wm)(x,{label:"用户(no)",name:"用户"}),(0,s.Wm)(x,{label:"MV(no)",name:"MV"}),(0,s.Wm)(x,{label:"歌词(no)",name:"歌词"}),(0,s.Wm)(x,{label:"电台(no)",name:"电台"}),(0,s.Wm)(x,{label:"视频(no)",name:"视频"}),(0,s.Wm)(x,{label:"综合(no)",name:"综合"}),(0,s.Wm)(x,{label:"声音(no)",name:"声音"})])),_:1},8,["modelValue"]),(null===(r=C.value)||void 0===r?void 0:r.count)>0||z.value?((0,s.wg)(),(0,s.iD)("span",b," 搜索结果数:"+(0,o.zw)(null===(c=C.value)||void 0===c?void 0:c.count),1)):(0,s.kq)("",!0),(null===(d=C.value)||void 0===d?void 0:d.result.length)>0?((0,s.wg)(),(0,s.iD)("div",k,["单曲"==t.value?(0,s.wy)(((0,s.wg)(),(0,s.j4)(f.Z,{key:0,songs:C.value.result,"infinite-scroll-immediate":!1,"infinite-scroll-delay":1e3},null,8,["songs"])),[[$,j]]):(0,s.kq)("",!0),"专辑"==t.value?(0,s.wy)(((0,s.wg)(),(0,s.j4)(m.Z,{key:1,data:C.value.result,"infinite-scroll-immediate":!1,"infinite-scroll-delay":1e3},null,8,["data"])),[[$,j]]):(0,s.kq)("",!0),"歌手"==t.value?((0,s.wg)(),(0,s.j4)(p.Z,{key:2,data:C.value.result},null,8,["data"])):(0,s.kq)("",!0),"歌单"==t.value?((0,s.wg)(),(0,s.j4)(w.Z,{key:3,list:C.value.result},null,8,["list"])):(0,s.kq)("",!0)])):((0,s.wg)(),(0,s.iD)("div",W,[(0,s._)("h3",null,(0,o.zw)(q.value),1)]))])}}}),z=t(465);const C=(0,z.Z)(Z,[["__scopeId","data-v-3c4338c0"]]);var q=C}}]);