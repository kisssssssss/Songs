"use strict";(self["webpackChunksongs"]=self["webpackChunksongs"]||[]).push([[942],{8:function(e,t,l){l.d(t,{Z:function(){return g}});var n=l(2603),a=(l(3450),l(4350),l(9894)),i=(l(1262),l(7658),l(440)),r=l(4367),s=l(8643),o=l(4804),c=l(4592),u=(0,i.aZ)({__name:"card-3D",props:{width:{default:"160px"},height:{default:"160px"},rate:{default:1}},setup(e){const t=e;(0,c.sj)((t=>({"933aa538":e.width,"07b7f56e":e.height,fa8427ec:o.value})));const l=(0,r.iH)(),n=(0,r.iH)(),a=(0,r.iH)(0),s=(0,r.iH)(0),o=(0,r.iH)(""),u=(e,i,r)=>{void 0!=i&&void 0!=r?(a.value=i,s.value=r):(a.value=e.offsetX-l.value.offsetWidth/2,s.value=-1*(e.offsetY-l.value.offsetHeight/2)),o.value=`rotateY(${a.value/n.value.offsetHeight*t.rate}deg) rotateX(${s.value/n.value.offsetWidth*t.rate}deg)`},d=e=>{u(e)};let f=Date.now();const v=e=>{let t=Date.now();t-f>100&&(u(e),f=t)},p=e=>{u(e,0,0)};return(e,t)=>((0,i.wg)(),(0,i.iD)("div",{id:"container",ref_key:"container",ref:l},[(0,i._)("div",{id:"inner",ref_key:"inner",ref:n,onMousemove:v,onMouseenter:d,onMouseleave:p},[(0,i.WI)(e.$slots,"default")],544)],512))}}),d=l(465);const f=(0,d.Z)(u,[["__scopeId","data-v-00b10096"]]);var v=f;const p=["title"],m=["title"];var y=(0,i.aZ)({__name:"album-group",props:{data:null,size:null},setup(e){const t=e,l=(0,o.tv)();return(e,o)=>{const c=a.F8,u=n.Q2;return(0,i.wg)(),(0,i.j4)(u,{wrap:"",size:t.size||60,alignment:"flex-start"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.data,(e=>{var t,n;return(0,i.wg)(),(0,i.iD)("div",{class:"card",key:e.id},[(0,i.Wm)(v,{onClick:t=>(0,r.SU)(l).push(`/album/${e.id}`)},{default:(0,i.w5)((()=>{var t;return[(0,i.Wm)(c,{class:"img",src:null===(t=e.cover)||void 0===t?void 0:t.url,fit:"cover",loading:"lazy"},null,8,["src"])]})),_:2},1032,["onClick"]),(0,i._)("span",{class:"name _ellipsis",title:e.name},(0,s.zw)(e.name),9,p),(0,i._)("span",{class:"artist _ellipsis",title:null===(t=e.singers)||void 0===t?void 0:t.singersNameStr},(0,s.zw)(null===(n=e.singers)||void 0===n?void 0:n.singersNameStr),9,m)])})),128))])),_:1},8,["size"])}}});const h=(0,d.Z)(y,[["__scopeId","data-v-d182a56a"]]);var g=h},6269:function(e,t,l){l.d(t,{n:function(){return S}});var n=l(440),a=l(8643),i=l(2281),r=l(1110),s=l(3515),o=l(5868);const c="ElInfiniteScroll",u=50,d=200,f=0,v={delay:{type:Number,default:d},distance:{type:Number,default:f},disabled:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0}},p=(e,t)=>Object.entries(v).reduce(((l,[n,a])=>{var i,r;const{type:s,default:o}=a,c=e.getAttribute(`infinite-scroll-${n}`);let u=null!=(r=null!=(i=t[c])?i:c)?r:o;return u="false"!==u&&u,u=s(u),l[n]=Number.isNaN(u)?o:u,l}),{}),m=e=>{const{observer:t}=e[c];t&&(t.disconnect(),delete e[c].observer)},y=(e,t)=>{const{container:l,containerEl:n,instance:a,observer:i,lastScrollTop:s}=e[c],{disabled:o,distance:u}=p(e,a),{clientHeight:d,scrollHeight:f,scrollTop:v}=n,m=v-s;if(e[c].lastScrollTop=v,i||o||m<0)return;let y=!1;if(l===e)y=f-(d+v)<=u;else{const{clientTop:t,scrollHeight:l}=e,a=(0,r.yP)(e,n);y=v+d>=a+t+l-u}y&&t.call(a)};function h(e,t){const{containerEl:l,instance:n}=e[c],{disabled:a}=p(e,n);a||0===l.clientHeight||(l.scrollHeight<=l.clientHeight?t.call(n):m(e))}const g={async mounted(e,t){const{instance:l,value:r}=t;(0,a.mf)(r)||(0,s._)(c,"'v-infinite-scroll' binding value must be a function"),await(0,n.Y3)();const{delay:d,immediate:f}=p(e,l),v=(0,o.JX)(e,!0),m=v===window?document.documentElement:v,g=(0,i.Z)(y.bind(null,e,r),d);if(v){if(e[c]={instance:l,container:v,containerEl:m,delay:d,cb:r,onScroll:g,lastScrollTop:m.scrollTop},f){const t=new MutationObserver((0,i.Z)(h.bind(null,e,r),u));e[c].observer=t,t.observe(e,{childList:!0,subtree:!0}),h(e,r)}v.addEventListener("scroll",g)}},unmounted(e){const{container:t,onScroll:l}=e[c];null==t||t.removeEventListener("scroll",l),m(e)},async updated(e){if(e[c]){const{containerEl:t,cb:l,observer:n}=e[c];t.clientHeight&&n&&h(e,l)}else await(0,n.Y3)()}},b=g;b.install=e=>{e.directive("InfiniteScroll",b)};const S=b},5658:function(e,t,l){l(3450)},2603:function(e,t,l){l.d(t,{Q2:function(){return g}});l(7658);var n=l(440),a=l(8643),i=l(1879),r=l(6086);const s=(0,i.o8)({prefixCls:{type:String}}),o=(0,n.aZ)({name:"ElSpaceItem",props:s,setup(e,{slots:t}){const l=(0,r.s3)("space"),a=(0,n.Fl)((()=>`${e.prefixCls||l.b()}__item`));return()=>(0,n.h)("div",{class:a.value},(0,n.WI)(t,"default"))}});var c=l(4367),u=l(6250);const d={small:8,default:12,large:16};function f(e){const t=(0,r.s3)("space"),l=(0,n.Fl)((()=>[t.b(),t.m(e.direction),e.class])),i=(0,c.iH)(0),s=(0,c.iH)(0),o=(0,n.Fl)((()=>{const t=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${s.value}px`}:{},l={alignItems:e.alignment};return[t,l,e.style]})),f=(0,n.Fl)((()=>{const t={paddingBottom:`${s.value}px`,marginRight:`${i.value}px`},l=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[t,l]}));return(0,n.m0)((()=>{const{size:t="small",wrap:l,direction:n,fill:r}=e;if((0,a.kJ)(t)){const[e=0,l=0]=t;i.value=e,s.value=l}else{let e;e=(0,u.hj)(t)?t:d[t||"small"]||d.small,(l||r)&&"horizontal"===n?i.value=s.value=e:"horizontal"===n?(i.value=e,s.value=0):(s.value=e,i.value=0)}})),{classes:l,containerStyle:o,itemStyle:f}}var v=l(4324),p=l(9682);const m=(0,i.o8)({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:(0,i.Cq)([String,Object,Array]),default:""},style:{type:(0,i.Cq)([String,Array,Object]),default:""},alignment:{type:(0,i.Cq)(String),default:"center"},prefixCls:{type:String},spacer:{type:(0,i.Cq)([Object,String,Number,Array]),default:null,validator:e=>(0,n.lA)(e)||(0,u.hj)(e)||(0,a.HD)(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:v.k,validator:e=>(0,u.hj)(e)||(0,a.kJ)(e)&&2===e.length&&e.every(u.hj)}}),y=(0,n.aZ)({name:"ElSpace",props:m,setup(e,{slots:t}){const{classes:l,containerStyle:i,itemStyle:r}=f(e);function s(t,l="",i=[]){const{prefixCls:c}=e;return t.forEach(((e,t)=>{(0,p.M2)(e)?(0,a.kJ)(e.children)&&e.children.forEach(((e,t)=>{(0,p.M2)(e)&&(0,a.kJ)(e.children)?s(e.children,`${l+t}-`,i):i.push((0,n.Wm)(o,{style:r.value,prefixCls:c,key:`nested-${l+t}`},{default:()=>[e]},p.y.PROPS|p.y.STYLE,["style","prefixCls"]))})):(0,p.Lg)(e)&&i.push((0,n.Wm)(o,{style:r.value,prefixCls:c,key:`LoopKey${l+t}`},{default:()=>[e]},p.y.PROPS|p.y.STYLE,["style","prefixCls"]))})),i}return()=>{var o;const{spacer:c,direction:u}=e,d=(0,n.WI)(t,"default",{key:0},(()=>[]));if(0===(null!=(o=d.children)?o:[]).length)return null;if((0,a.kJ)(d.children)){let e=s(d.children);if(c){const t=e.length-1;e=e.reduce(((e,l,a)=>{const i=[...e,l];return a!==t&&i.push((0,n.Wm)("span",{style:[r.value,"vertical"===u?"width: 100%":null],key:a},[(0,n.lA)(c)?c:(0,n.Uk)(c,p.y.TEXT)],p.y.STYLE)),i}),[])}return(0,n.Wm)("div",{class:l.value,style:i.value},e,p.y.STYLE|p.y.CLASS)}return d.children}}});var h=l(5482);const g=(0,h.nz)(y)},4350:function(e,t,l){l(3450)}}]);