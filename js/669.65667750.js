"use strict";(self["webpackChunksongs"]=self["webpackChunksongs"]||[]).push([[669],{9412:function(e,t,l){l.d(t,{Z:function(){return d}});var a=l(9894),n=(l(3450),l(1262),l(7658),l(440)),o=l(4367),s=l(8643),r=l(4804),i=(0,n.aZ)({__name:"artist-card",props:{data:{type:Object,required:!0},top:{type:Number,required:!1,default:0}},setup(e){const t=(0,r.tv)();return(l,r)=>{const i=a.F8;return(0,n.wg)(),(0,n.iD)("div",{class:"card",onClick:r[0]||(r[0]=l=>(0,o.SU)(t).push(`/singer/${e.data.id}`))},[(0,n.Wm)(i,{class:"img",src:e.data.cover,fit:"cover",lazy:""},null,8,["src"]),(0,n._)("span",null,(0,s.zw)(e.data.name),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.data.alias,(e=>((0,n.wg)(),(0,n.iD)("i",null,(0,s.zw)(e),1)))),256)),(0,n.WI)(l.$slots,"default")])}}}),u=l(465);const c=(0,u.Z)(i,[["__scopeId","data-v-3f223c52"]]);var d=c},9669:function(e,t,l){l.r(t),l.d(t,{default:function(){return k}});var a=l(3645),n=(l(3450),l(8075),l(7755)),o=(l(6886),l(2603)),s=(l(4350),l(4704)),r=(l(4745),l(440)),i=l(4592),u=l(8643),c=l(4367),d=l(1809),f=l(708),v=l(9412),m=function(e,t,l,a){function n(e){return e instanceof l?e:new l((function(t){t(e)}))}return new(l||(l=Promise))((function(l,o){function s(e){try{i(a.next(e))}catch(t){o(t)}}function r(e){try{i(a["throw"](e))}catch(t){o(t)}}function i(e){e.done?l(e.value):n(e.value).then(s,r)}i((a=a.apply(e,t||[])).next())}))};const p=e=>((0,r.dD)("data-v-526268b8"),e=e(),(0,r.Cn)(),e),g={class:"back"},y=p((()=>(0,r._)("h2",null,"关注歌手",-1))),h={class:"artist"},S={class:"dialog"},b=p((()=>(0,r._)("p",null,"取消关注后对方将从你的关注列表移除",-1)));var w=(0,r.aZ)({__name:"subscribe",setup(e){const t=(0,c.iH)();(0,r.bv)((()=>m(this,void 0,void 0,(function*(){t.value=yield(0,d.qL)()}))));const l=(0,c.iH)(),p=(0,c.iH)(!1),w=e=>{p.value=!p.value,l.value=e},U=()=>m(this,void 0,void 0,(function*(){var e,a;(yield(0,d.He)(null===(e=l.value)||void 0===e?void 0:e.id,!1))?(null===(a=t.value)||void 0===a||a.splice(t.value.indexOf(l.value),1),(0,f.y)({message:"取消关注成功",type:"success"}),p.value=!p.value):(0,f.y)({message:"取消关注失败",type:"error"})}));return(e,c)=>{const d=(0,r.up)("MoreFilled"),f=s.gn,m=o.Q2,C=n.mi,k=a.d0;return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",g,[y,(0,r.Wm)(m,{wrap:"",size:50,alignment:"flex-start"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.value,(e=>((0,r.wg)(),(0,r.iD)("div",h,[(0,r.Wm)(v.Z,{style:{"border-right":"1px solid rgba(60, 60, 60, 0.6)"},data:e},null,8,["data"]),(0,r.Wm)(f,{class:"del",size:"20",onClick:(0,i.iM)((t=>w(e)),["stop"])},{default:(0,r.w5)((()=>[(0,r.Wm)(d)])),_:2},1032,["onClick"])])))),256))])),_:1})]),(0,r.Wm)(k,{modelValue:p.value,"onUpdate:modelValue":c[0]||(c[0]=e=>p.value=e),title:"取消关注",width:"30%"},{footer:(0,r.w5)((()=>[(0,r.Wm)(C,{text:"",onClick:U},{default:(0,r.w5)((()=>[(0,r.Uk)("确认")])),_:1})])),default:(0,r.w5)((()=>{var e;return[(0,r._)("div",S,[b,(0,r._)("p",null,[(0,r.Uk)(" 是否取消关注 "),(0,r._)("span",null,(0,u.zw)(null===(e=l.value)||void 0===e?void 0:e.name),1)])])]})),_:1},8,["modelValue"])],64)}}}),U=l(465);const C=(0,U.Z)(w,[["__scopeId","data-v-526268b8"]]);var k=C},3645:function(e,t,l){l.d(t,{d0:function(){return F}});var a=l(440),n=l(4367),o=l(4592),s=l(8643),r=l(2673),i=l(4704);const u=Symbol("dialogInjectionKey");var c=l(4098),d=l(7922),f=l(2797),v=l(9002),m=l(5899);const p=(...e)=>t=>{e.forEach((e=>{(0,s.mf)(e)?e(t):e.value=t}))};var g=l(8129);const y=(e,t,l)=>{let n={offsetX:0,offsetY:0};const o=t=>{const l=t.clientX,a=t.clientY,{offsetX:o,offsetY:s}=n,r=e.value.getBoundingClientRect(),i=r.left,u=r.top,c=r.width,d=r.height,f=document.documentElement.clientWidth,v=document.documentElement.clientHeight,m=-i+o,p=-u+s,y=f-i-c+o,h=v-u-d+s,S=t=>{const r=Math.min(Math.max(o+t.clientX-l,m),y),i=Math.min(Math.max(s+t.clientY-a,p),h);n={offsetX:r,offsetY:i},e.value.style.transform=`translate(${(0,g.Nn)(r)}, ${(0,g.Nn)(i)})`},b=()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",b)},s=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",o)},r=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",o)};(0,a.bv)((()=>{(0,a.m0)((()=>{l.value?s():r()}))})),(0,a.Jd)((()=>{r()}))},h=["aria-label"],S=["id"],b=(0,a.aZ)({name:"ElDialogContent"}),w=(0,a.aZ)({...b,props:c.q,emits:c.b,setup(e){const t=e,{t:l}=(0,f.bU)(),{Close:o}=v.NK,{dialogRef:r,headerRef:c,bodyId:d,ns:g,style:b}=(0,a.f3)(u),{focusTrapRef:w}=(0,a.f3)(m.D5),U=p(w,r),C=(0,a.Fl)((()=>t.draggable));return y(r,c,C),(e,t)=>((0,a.wg)(),(0,a.iD)("div",{ref:(0,n.SU)(U),class:(0,s.C_)([(0,n.SU)(g).b(),(0,n.SU)(g).is("fullscreen",e.fullscreen),(0,n.SU)(g).is("draggable",(0,n.SU)(C)),(0,n.SU)(g).is("align-center",e.alignCenter),{[(0,n.SU)(g).m("center")]:e.center},e.customClass]),style:(0,s.j5)((0,n.SU)(b)),tabindex:"-1"},[(0,a._)("header",{ref_key:"headerRef",ref:c,class:(0,s.C_)((0,n.SU)(g).e("header"))},[(0,a.WI)(e.$slots,"header",{},(()=>[(0,a._)("span",{role:"heading",class:(0,s.C_)((0,n.SU)(g).e("title"))},(0,s.zw)(e.title),3)])),e.showClose?((0,a.wg)(),(0,a.iD)("button",{key:0,"aria-label":(0,n.SU)(l)("el.dialog.close"),class:(0,s.C_)((0,n.SU)(g).e("headerbtn")),type:"button",onClick:t[0]||(t[0]=t=>e.$emit("close"))},[(0,a.Wm)((0,n.SU)(i.gn),{class:(0,s.C_)((0,n.SU)(g).e("close"))},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(e.closeIcon||(0,n.SU)(o))))])),_:1},8,["class"])],10,h)):(0,a.kq)("v-if",!0)],2),(0,a._)("div",{id:(0,n.SU)(d),class:(0,s.C_)((0,n.SU)(g).e("body"))},[(0,a.WI)(e.$slots,"default")],10,S),e.$slots.footer?((0,a.wg)(),(0,a.iD)("footer",{key:0,class:(0,s.C_)((0,n.SU)(g).e("footer"))},[(0,a.WI)(e.$slots,"footer")],2)):(0,a.kq)("v-if",!0)],6))}});var U=(0,d.Z)(w,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]),C=l(5968),k=l(5751),_=l(5415),W=l(6086),x=l(1371),$=l(1916);const R=["aria-label","aria-labelledby","aria-describedby"],E=(0,a.aZ)({name:"ElDialog",inheritAttrs:!1}),I=(0,a.aZ)({...E,props:C.B,emits:C.A,setup(e,{expose:t}){const l=e,i=(0,a.Rr)();(0,_.A)({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},(0,a.Fl)((()=>!!i.title))),(0,_.A)({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},(0,a.Fl)((()=>!!l.customClass)));const c=(0,W.s3)("dialog"),d=(0,n.iH)(),f=(0,n.iH)(),v=(0,n.iH)(),{visible:m,titleId:p,bodyId:g,style:y,overlayDialogStyle:h,rendered:S,zIndex:b,afterEnter:w,afterLeave:C,beforeLeave:E,handleClose:I,onModalClick:A,onOpenAutoFocus:L,onCloseAutoFocus:F,onCloseRequested:z,onFocusoutPrevented:D}=(0,k.R)(l,d);(0,a.JJ)(u,{dialogRef:d,headerRef:f,bodyId:g,ns:c,rendered:S,style:y});const M=(0,x.S)(A),Z=(0,a.Fl)((()=>l.draggable&&!l.fullscreen));return t({visible:m,dialogContentRef:v}),(e,t)=>((0,a.wg)(),(0,a.j4)(a.lR,{to:"body",disabled:!e.appendToBody},[(0,a.Wm)(o.uT,{name:"dialog-fade",onAfterEnter:(0,n.SU)(w),onAfterLeave:(0,n.SU)(C),onBeforeLeave:(0,n.SU)(E),persisted:""},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)((0,n.SU)(r.F6),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":(0,n.SU)(b)},{default:(0,a.w5)((()=>[(0,a._)("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:(0,n.SU)(p),"aria-describedby":(0,n.SU)(g),class:(0,s.C_)(`${(0,n.SU)(c).namespace.value}-overlay-dialog`),style:(0,s.j5)((0,n.SU)(h)),onClick:t[0]||(t[0]=(...e)=>(0,n.SU)(M).onClick&&(0,n.SU)(M).onClick(...e)),onMousedown:t[1]||(t[1]=(...e)=>(0,n.SU)(M).onMousedown&&(0,n.SU)(M).onMousedown(...e)),onMouseup:t[2]||(t[2]=(...e)=>(0,n.SU)(M).onMouseup&&(0,n.SU)(M).onMouseup(...e))},[(0,a.Wm)((0,n.SU)($.Z),{loop:"",trapped:(0,n.SU)(m),"focus-start-el":"container",onFocusAfterTrapped:(0,n.SU)(L),onFocusAfterReleased:(0,n.SU)(F),onFocusoutPrevented:(0,n.SU)(D),onReleaseRequested:(0,n.SU)(z)},{default:(0,a.w5)((()=>[(0,n.SU)(S)?((0,a.wg)(),(0,a.j4)(U,(0,a.dG)({key:0,ref_key:"dialogContentRef",ref:v},e.$attrs,{"custom-class":e.customClass,center:e.center,"align-center":e.alignCenter,"close-icon":e.closeIcon,draggable:(0,n.SU)(Z),fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,onClose:(0,n.SU)(I)}),(0,a.Nv)({header:(0,a.w5)((()=>[e.$slots.title?(0,a.WI)(e.$slots,"title",{key:1}):(0,a.WI)(e.$slots,"header",{key:0,close:(0,n.SU)(I),titleId:(0,n.SU)(p),titleClass:(0,n.SU)(c).e("title")})])),default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"footer")]))}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):(0,a.kq)("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,R)])),_:3},8,["mask","overlay-class","z-index"]),[[o.F8,(0,n.SU)(m)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var A=(0,d.Z)(I,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]),L=l(5482);const F=(0,L.nz)(A)},8075:function(e,t,l){l(3450),l(9376)},2603:function(e,t,l){l.d(t,{Q2:function(){return h}});l(7658);var a=l(440),n=l(8643),o=l(1879),s=l(6086);const r=(0,o.o8)({prefixCls:{type:String}}),i=(0,a.aZ)({name:"ElSpaceItem",props:r,setup(e,{slots:t}){const l=(0,s.s3)("space"),n=(0,a.Fl)((()=>`${e.prefixCls||l.b()}__item`));return()=>(0,a.h)("div",{class:n.value},(0,a.WI)(t,"default"))}});var u=l(4367),c=l(6250);const d={small:8,default:12,large:16};function f(e){const t=(0,s.s3)("space"),l=(0,a.Fl)((()=>[t.b(),t.m(e.direction),e.class])),o=(0,u.iH)(0),r=(0,u.iH)(0),i=(0,a.Fl)((()=>{const t=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${r.value}px`}:{},l={alignItems:e.alignment};return[t,l,e.style]})),f=(0,a.Fl)((()=>{const t={paddingBottom:`${r.value}px`,marginRight:`${o.value}px`},l=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[t,l]}));return(0,a.m0)((()=>{const{size:t="small",wrap:l,direction:a,fill:s}=e;if((0,n.kJ)(t)){const[e=0,l=0]=t;o.value=e,r.value=l}else{let e;e=(0,c.hj)(t)?t:d[t||"small"]||d.small,(l||s)&&"horizontal"===a?o.value=r.value=e:"horizontal"===a?(o.value=e,r.value=0):(r.value=e,o.value=0)}})),{classes:l,containerStyle:i,itemStyle:f}}var v=l(4324),m=l(9682);const p=(0,o.o8)({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:(0,o.Cq)([String,Object,Array]),default:""},style:{type:(0,o.Cq)([String,Array,Object]),default:""},alignment:{type:(0,o.Cq)(String),default:"center"},prefixCls:{type:String},spacer:{type:(0,o.Cq)([Object,String,Number,Array]),default:null,validator:e=>(0,a.lA)(e)||(0,c.hj)(e)||(0,n.HD)(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:v.k,validator:e=>(0,c.hj)(e)||(0,n.kJ)(e)&&2===e.length&&e.every(c.hj)}}),g=(0,a.aZ)({name:"ElSpace",props:p,setup(e,{slots:t}){const{classes:l,containerStyle:o,itemStyle:s}=f(e);function r(t,l="",o=[]){const{prefixCls:u}=e;return t.forEach(((e,t)=>{(0,m.M2)(e)?(0,n.kJ)(e.children)&&e.children.forEach(((e,t)=>{(0,m.M2)(e)&&(0,n.kJ)(e.children)?r(e.children,`${l+t}-`,o):o.push((0,a.Wm)(i,{style:s.value,prefixCls:u,key:`nested-${l+t}`},{default:()=>[e]},m.y.PROPS|m.y.STYLE,["style","prefixCls"]))})):(0,m.Lg)(e)&&o.push((0,a.Wm)(i,{style:s.value,prefixCls:u,key:`LoopKey${l+t}`},{default:()=>[e]},m.y.PROPS|m.y.STYLE,["style","prefixCls"]))})),o}return()=>{var i;const{spacer:u,direction:c}=e,d=(0,a.WI)(t,"default",{key:0},(()=>[]));if(0===(null!=(i=d.children)?i:[]).length)return null;if((0,n.kJ)(d.children)){let e=r(d.children);if(u){const t=e.length-1;e=e.reduce(((e,l,n)=>{const o=[...e,l];return n!==t&&o.push((0,a.Wm)("span",{style:[s.value,"vertical"===c?"width: 100%":null],key:n},[(0,a.lA)(u)?u:(0,a.Uk)(u,m.y.TEXT)],m.y.STYLE)),o}),[])}return(0,a.Wm)("div",{class:l.value,style:o.value},e,m.y.STYLE|m.y.CLASS)}return d.children}}});var y=l(5482);const h=(0,y.nz)(g)},4350:function(e,t,l){l(3450)}}]);