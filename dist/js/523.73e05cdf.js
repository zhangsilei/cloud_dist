"use strict";(self["webpackChunkcloud_dist"]=self["webpackChunkcloud_dist"]||[]).push([[523],{9518:function(e,t,o){o.d(t,{Z:function(){return D}});o(7658);var i=o(3396),r=o(4870),n=o(9242),l=o(668);const s={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function a(e){return`(min-width: ${e}px)`}const d={};function u(e=s){if(!l.j)return(0,i.Fl)((()=>[]));if("function"!==typeof window.matchMedia)return(0,i.Fl)((()=>[]));const t=(0,r.iH)({}),o=Object.keys(e),n=(e,o)=>{e.matches?t.value[o]=!0:t.value[o]=!1};return o.forEach((t=>{const o=e[t];let i,r;void 0===d[o]?(i=window.matchMedia(a(o)),i.addEventListener?i.addEventListener("change",(e=>{r.forEach((o=>{o(e,t)}))})):i.addListener&&i.addListener((e=>{r.forEach((o=>{o(e,t)}))})),r=new Set,d[o]={mql:i,cbs:r}):(i=d[o].mql,r=d[o].cbs),r.add(n),i.matches&&r.forEach((e=>{e(i,t)}))})),(0,i.Jd)((()=>{o.forEach((t=>{const{cbs:o}=d[e[t]];o.has(n)&&o.delete(n)}))})),(0,i.Fl)((()=>{const{value:e}=t;return o.filter((t=>e[t]))}))}var c=u,p=o(4498),v=o(8125);function f(e){if("number"===typeof e)return{"":e.toString()};const t={};return e.split(/ +/).forEach((e=>{if(""===e)return;const[o,i]=e.split(":");void 0===i?t[""]=o:t[o]=i})),t}function m(e,t){var o;if(void 0===e||null===e)return;const i=f(e);if(void 0===t)return i[""];if("string"===typeof t)return null!==(o=i[t])&&void 0!==o?o:i[""];if(Array.isArray(t)){for(let e=t.length-1;e>=0;--e){const o=t[e];if(o in i)return i[o]}return i[""]}{let e,o=-1;return Object.keys(i).forEach((r=>{const n=Number(r);!Number.isNaN(n)&&t>=n&&n>=o&&(o=n,e=i[r])})),e}}var h=o(5805),w=o(9879);const y={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920};var g=o(9420),S=o(5544),C=o(9940),x=o(4072);function b(e){var t;const o=null===(t=e.dirs)||void 0===t?void 0:t.find((({dir:e})=>e===n.F8));return!(!o||!1!==o.value)}var _=o(5353);const k=24,N="__ssr__",$={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:k},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}};var D=(0,i.aZ)({name:"Grid",inheritAttrs:!1,props:$,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:o}=(0,g.Z)(e),n=/^\d+$/,l=(0,r.iH)(void 0),s=c((null===o||void 0===o?void 0:o.value)||y),a=(0,p.Z)((()=>!!e.itemResponsive||(!n.test(e.cols.toString())||(!n.test(e.xGap.toString())||!n.test(e.yGap.toString()))))),d=(0,i.Fl)((()=>{if(a.value)return"self"===e.responsive?l.value:s.value})),u=(0,p.Z)((()=>{var t;return null!==(t=Number(m(e.cols.toString(),d.value)))&&void 0!==t?t:k})),v=(0,p.Z)((()=>m(e.xGap.toString(),d.value))),f=(0,p.Z)((()=>m(e.yGap.toString(),d.value))),C=e=>{l.value=e.contentRect.width},x=e=>{(0,h.J)(C,e)},b=(0,r.iH)(!1),$=(0,i.Fl)((()=>{if("self"===e.responsive)return x})),D=(0,r.iH)(!1),R=(0,r.iH)();return(0,i.bv)((()=>{const{value:e}=R;e&&e.hasAttribute(N)&&(e.removeAttribute(N),D.value=!0)})),(0,i.JJ)(_.r,{layoutShiftDisabledRef:(0,r.Vh)(e,"layoutShiftDisabled"),isSsrRef:D,itemStyleRef:(0,r.Vh)(e,"itemStyle"),xGapRef:v,overflowRef:b}),{isSsr:!S.j,contentEl:R,mergedClsPrefix:t,style:(0,i.Fl)((()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:(0,w.BL)(e.xGap),rowGap:(0,w.BL)(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${u.value}, minmax(0, 1fr))`,columnGap:(0,w.BL)(v.value),rowGap:(0,w.BL)(f.value)})),isResponsive:a,responsiveQuery:d,responsiveCols:u,handleResize:$,overflow:b}},render(){if(this.layoutShiftDisabled)return(0,i.h)("div",(0,i.dG)({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var e,t,o,r,l,s,a;this.overflow=!1;const d=(0,C.x)((0,x.z)(this)),u=[],{collapsed:c,collapsedRows:p,responsiveCols:v,responsiveQuery:f}=this;d.forEach((e=>{var t,o,r,l;if(!0!==(null===(t=null===e||void 0===e?void 0:e.type)||void 0===t?void 0:t.__GRID_ITEM__))return;if(b(e)){const t=(0,i.Ho)(e);return t.props?t.props.privateShow=!1:t.props={privateShow:!1},void u.push({child:t,rawChildSpan:0})}e.dirs=(null===(o=e.dirs)||void 0===o?void 0:o.filter((({dir:e})=>e!==n.F8)))||null;const s=(0,i.Ho)(e),a=Number(null!==(l=m(null===(r=s.props)||void 0===r?void 0:r.span,f))&&void 0!==l?l:_.L);0!==a&&u.push({child:s,rawChildSpan:a})}));let h=0;const w=null===(e=u[u.length-1])||void 0===e?void 0:e.child;if(null===w||void 0===w?void 0:w.props){const e=null===(t=w.props)||void 0===t?void 0:t.suffix;void 0!==e&&!1!==e&&(h=null!==(r=null===(o=w.props)||void 0===o?void 0:o.span)&&void 0!==r?r:_.L,w.props.privateSpan=h,w.props.privateColStart=v+1-h,w.props.privateShow=null===(l=w.props.privateShow)||void 0===l||l)}let y=0,g=!1;for(const{child:i,rawChildSpan:n}of u){if(g&&(this.overflow=!0),!g){const e=Number(null!==(a=m(null===(s=i.props)||void 0===s?void 0:s.offset,f))&&void 0!==a?a:0),t=Math.min(n+e,v);if(i.props?(i.props.privateSpan=t,i.props.privateOffset=e):i.props={privateSpan:t,privateOffset:e},c){const e=y%v;t+e>v&&(y+=v-e),t+y+h>p*v?g=!0:y+=t}}g&&(i.props?!0!==i.props.privateShow&&(i.props.privateShow=!1):i.props={privateShow:!1})}return(0,i.h)("div",(0,i.dG)({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[N]:this.isSsr||void 0},this.$attrs),u.map((({child:e})=>e)))};return this.isResponsive&&"self"===this.responsive?(0,i.h)(v.Z,{onResize:this.handleResize},{default:e}):e()}})},5210:function(e,t,o){var i=o(3396),r=o(9879),n=o(1838),l=o(5353);const s=1,a={span:{type:[Number,String],default:s},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}};(0,n.u)(a);t["ZP"]=(0,i.aZ)({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:a,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:o,overflowRef:n,layoutShiftDisabledRef:a}=(0,i.f3)(l.r),d=(0,i.FN)();return{overflow:n,itemStyle:o,layoutShiftDisabled:a,mergedXGap:(0,i.Fl)((()=>(0,r.BL)(t.value||0))),deriveStyle:()=>{e.value;const{privateSpan:o=s,privateShow:i=!0,privateColStart:n,privateOffset:l=0}=d.vnode.props,{value:a}=t,u=(0,r.BL)(a||0);return{display:i?"":"none",gridColumn:`${null!==n&&void 0!==n?n:`span ${o}`} / span ${o}`,marginLeft:l?`calc((100% - (${o} - 1) * ${u}) / ${o} * ${l} + ${u} * ${l})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:e,offset:t,mergedXGap:o}=this;return(0,i.h)("div",{style:{gridColumn:`span ${e} / span ${e}`,marginLeft:t?`calc((100% - (${e} - 1) * ${o}) / ${e} * ${t} + ${o} * ${t})`:""}},this.$slots)}return(0,i.h)("div",{style:[this.itemStyle,this.deriveStyle()]},null===(t=(e=this.$slots).default)||void 0===t?void 0:t.call(e,{overflow:this.overflow}))}})},5353:function(e,t,o){o.d(t,{L:function(){return r},r:function(){return n}});var i=o(1295);const r=1,n=(0,i.U)("n-grid")},4277:function(e,t,o){o.d(t,{Z:function(){return v}});var i=o(3396),r=o(7139);const n=e=>((0,i.dD)("data-v-6e6d5ce6"),e=e(),(0,i.Cn)(),e),l={class:"dir-card-container"},s={class:"card"},a=n((()=>(0,i._)("img",{class:"dir",src:"https://img2.baidu.com/it/u=1882482103,2575197468&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"},null,-1)));function d(e,t,o,n,d,u){return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",s,[a,(0,i._)("div",null,(0,r.zw)(o.fileName),1)])])}var u={name:"DirCard",props:{fileName:{required:!0,type:String,default:""}}},c=o(89);const p=(0,c.Z)(u,[["render",d],["__scopeId","data-v-6e6d5ce6"]]);var v=p},2852:function(e,t,o){o.d(t,{Z:function(){return I}});var i=o(3396),r=o(7139);const n=e=>((0,i.dD)("data-v-683880c9"),e=e(),(0,i.Cn)(),e),l={class:"video-card-container"},s={class:"card"},a=["src"],d={class:"info"},u={class:"like-num"},c=n((()=>(0,i._)("div",{class:"mask"},null,-1))),p=n((()=>(0,i._)("div",{class:"no-authority"},"无权限",-1))),v={key:0,class:"actions"};function f(e,t,o,n,f,m){const h=(0,i.up)("n-icon"),w=(0,i.up)("n-dropdown"),y=(0,i.up)("n-input"),g=(0,i.up)("n-form-item"),S=(0,i.up)("n-form"),C=(0,i.up)("popup-window"),x=(0,i.up)("n-button");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",s,[(0,i._)("img",{class:"poster",src:o.poster},null,8,a),(0,i._)("div",d,[(0,i.Wm)(h,{component:n.IosHeart,color:"#999"},null,8,["component"]),(0,i._)("span",u,(0,r.zw)(o.likeNum),1),(0,i.Wm)(h,{component:n.VideoClip20Filled,color:"#999",style:{"margin-right":"10px"}},null,8,["component"]),(0,i.Wm)(w,{trigger:"hover",options:n.options,onSelect:n.handleSelect},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{component:n.MessageFilled,color:"#999"},null,8,["component"])])),_:1},8,["options","onSelect"])]),o.authority?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",{key:0,onMouseenter:t[2]||(t[2]=e=>n.isShowAction=!0),onMouseleave:t[3]||(t[3]=e=>n.isShowAction=!1)},[c,p,n.isShowAction?((0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("div",{onClick:t[0]||(t[0]=e=>n.isShowCdkeyAlert=!0)},"输入激活码"),(0,i._)("div",{onClick:t[1]||(t[1]=e=>n.isShowContactAlert=!0)},"联系客服")])):(0,i.kq)("",!0)],32))]),(0,i._)("div",null,(0,r.zw)(o.fileName),1),(0,i.Wm)(C,{modelValue:n.isShowCdkeyAlert,"onUpdate:modelValue":t[5]||(t[5]=e=>n.isShowCdkeyAlert=e),title:"输入激活码",onOnConfirm:n.setCdkey},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{ref:"formRef",model:n.formData,rules:n.rules,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{label:"激活码",path:"cdKey"},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{value:n.formData.cdKey,"onUpdate:value":t[4]||(t[4]=e=>n.formData.cdKey=e),placeholder:"请输入"},null,8,["value"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","onOnConfirm"]),(0,i.Wm)(C,{modelValue:n.isShowContactAlert,"onUpdate:modelValue":t[6]||(t[6]=e=>n.isShowContactAlert=e),"confirm-text":"复制联系方式",width:300,"is-show-footer":!1},{default:(0,i.w5)((()=>[(0,i._)("div",null,"联系客服获取购买链接，客服联系方式（tg）："+(0,r.zw)(n.contactPhone),1),(0,i.Wm)(x,{style:{"margin-left":"75px","margin-top":"15px"},type:"primary",id:n.copyContactBtn,"data-clipboard-text":n.contactPhone,"is-show-footer":!1,onClick:n.copyContact},{default:(0,i.w5)((()=>[(0,i.Uk)(" 复制联系方式 ")])),_:1},8,["id","data-clipboard-text","onClick"])])),_:1},8,["modelValue"])])}var m=o(4786),h=o(4712),w=o(3273),y=o(7646),g=o(3008),S=o(5393),C=o(7713),x=o(4870);const b={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"},_=(0,i._)("path",{d:"M352,56C352,56,352,56,352,56C352,56,352,56,352,56c-0.3,0-0.7,0-1,0c-39.7,0-74.8,21-95,52c-20.2-31-55.3-52-95-52\n\tc-0.3,0-0.7,0-1,0c0,0,0,0,0,0c0,0,0,0,0,0C98.1,56.6,48,106.9,48,169c0,37,16.2,89.5,47.8,132.7C156,384,256,456,256,456\n\ts100-72,160.2-154.3C447.8,258.5,464,206,464,169C464,106.9,413.9,56.6,352,56z"},null,-1),k=[_];var N=(0,i.aZ)({name:"IosHeart",render:function(e,t){return(0,i.wg)(),(0,i.iD)("svg",b,k)}});const $={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},D=(0,i._)("g",{fill:"none"},[(0,i._)("path",{d:"M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 15.5 3h-11zm4.265 4.076l4 2.502a.5.5 0 0 1 .011.84l-4 2.649A.5.5 0 0 1 8 12.65V7.5a.5.5 0 0 1 .765-.424z",fill:"currentColor"})],-1),R=[D];var A=(0,i.aZ)({name:"VideoClip20Filled",render:function(e,t){return(0,i.wg)(),(0,i.iD)("svg",$,R)}});const G={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Z=(0,i._)("path",{d:"M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3a443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5a445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142c23.5-55.2 35.5-113.9 35.8-174.5c.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48z",fill:"currentColor"},null,-1),B=[Z];var F=(0,i.aZ)({name:"MessageFilled",render:function(e,t){return(0,i.wg)(),(0,i.iD)("svg",G,B)}}),E=o(3612),z=o(8134),L=o.n(z),M={name:"VideoCard",components:{NIcon:m.g,NModal:h.Z,NForm:w.Z,NFormItem:y.ZP,NInput:g.Z,NButton:S.ZP,NDropdown:C.Z,PopupWindow:E.Z},props:{id:{required:!0,type:Number,default:0},likeNum:{required:!0,type:Number,default:0},fileName:{required:!0,type:String,default:""},authority:{required:!0,type:Boolean,default:!1},poster:{required:!0,type:String,default:""}},watch:{isShowCdkeyAlert(e){e||(this.formData.cdKey="")}},setup(e,t){const o=(0,x.qj)({cdKey:""}),r=(0,x.iH)(null),n=(0,x.iH)(!1),l=(0,x.iH)(!1),s=()=>{r.value?.validate((e=>{e||(n.value=!1)})).catch((e=>{}))},a="copyContactBtn";let d=null;const u=()=>{d.on("success",(e=>{console.log("copy succ"),e.clearSelection(),c()})),d.on("error",(e=>{console.log("copy fail")}))},c=()=>{d&&d.destroy(),d=null,d=new(L())(`#${a}`)};(0,i.bv)((()=>{c()}));const p=0,v=1,f=2;function m(e){e===p?t.emit("onEdit"):e===v?t.emit("onDetail"):e===f&&t.emit("onDelete")}return{IosHeart:N,VideoClip20Filled:A,MessageFilled:F,isShowAction:(0,x.iH)(!1),isShowCdkeyAlert:n,isShowContactAlert:l,formRef:r,formData:o,rules:{cdKey:{required:!0,trigger:["blur","input"],message:"请输入激活码"}},contactPhone:"xxxx",copyContactBtn:a,setCdkey:s,copyContact:u,options:[{label:"编辑",key:p},{label:"详细信息",key:v},{label:"删除",key:f}],handleSelect:m}}},H=o(89);const q=(0,H.Z)(M,[["render",f],["__scopeId","data-v-683880c9"]]);var I=q}}]);
//# sourceMappingURL=523.73e05cdf.js.map