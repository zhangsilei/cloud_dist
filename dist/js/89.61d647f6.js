"use strict";(self["webpackChunkcloud_dist"]=self["webpackChunkcloud_dist"]||[]).push([[89],{21209:function(e,t,i){var n=i(73396);const r={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"},o=(0,n._)("path",{d:"M443.5,420.2L336.7,312.4c20.9-26.2,33.5-59.4,33.5-95.5c0-84.5-68.5-153-153.1-153S64,132.5,64,217s68.5,153,153.1,153\n\tc36.6,0,70.1-12.8,96.5-34.2l106.1,107.1c3.2,3.4,7.6,5.1,11.9,5.1c4.1,0,8.2-1.5,11.3-4.5C449.5,437.2,449.7,426.8,443.5,420.2z\n\t M217.1,337.1c-32.1,0-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-84.9c0-32.1,12.5-62.3,35.2-84.9c22.7-22.7,52.9-35.2,85-35.2\n\tc32.1,0,62.3,12.5,85,35.2c22.7,22.7,35.2,52.9,35.2,84.9c0,32.1-12.5,62.3-35.2,84.9C279.4,324.6,249.2,337.1,217.1,337.1z"},null,-1),l=[o];t["Z"]=(0,n.aZ)({name:"IosSearch",render:function(e,t){return(0,n.wg)(),(0,n.iD)("svg",r,l)}})},75535:function(e,t,i){i.d(t,{Z:function(){return f}});var n=i(73396),r=i(44870),o=i(83645),l=i(68107),s=i(99420),a=i(80140),u=i(30411),c=(0,u.cB)("ellipsis",{overflow:"hidden"},[(0,u.u4)("line-clamp","\n white-space: nowrap;\n display: inline-block;\n vertical-align: bottom;\n max-width: 100%;\n "),(0,u.cM)("line-clamp","\n display: -webkit-inline-box;\n -webkit-box-orient: vertical;\n "),(0,u.cM)("cursor-pointer","\n cursor: pointer;\n ")]);function p(e){return`${e}-ellipsis--line-clamp`}function d(e,t){return`${e}-ellipsis--cursor-${t}`}const v=Object.assign(Object.assign({},l.Z.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}});var f=(0,n.aZ)({name:"Ellipsis",inheritAttrs:!1,props:v,setup(e,{slots:t,attrs:i}){const{mergedClsPrefixRef:o}=(0,s.Z)(e),u=(0,l.Z)("Ellipsis","-ellipsis",c,a.Z,e,o),v=(0,r.iH)(null),f=(0,r.iH)(null),m=(0,r.iH)(null),h=(0,r.iH)(!1),g=(0,n.Fl)((()=>{const{lineClamp:t}=e,{value:i}=h;return void 0!==t?{textOverflow:"","-webkit-line-clamp":i?"":t}:{textOverflow:i?"":"ellipsis","-webkit-line-clamp":""}}));function w(){let t=!1;const{value:i}=h;if(i)return!0;const{value:n}=v;if(n){const{lineClamp:i}=e;if(b(n),void 0!==i)t=n.scrollHeight<=n.offsetHeight;else{const{value:e}=f;e&&(t=e.getBoundingClientRect().width<=n.getBoundingClientRect().width)}x(n,t)}return t}const S=(0,n.Fl)((()=>"click"===e.expandTrigger?()=>{var e;const{value:t}=h;t&&(null===(e=m.value)||void 0===e||e.setShow(!1)),h.value=!t}:void 0));(0,n.se)((()=>{var t;e.tooltip&&(null===(t=m.value)||void 0===t||t.setShow(!1))}));const y=()=>(0,n.h)("span",Object.assign({},(0,n.dG)(i,{class:[`${o.value}-ellipsis`,void 0!==e.lineClamp?p(o.value):void 0,"click"===e.expandTrigger?d(o.value,"pointer"):void 0],style:g.value}),{ref:"triggerRef",onClick:S.value,onMouseenter:"click"===e.expandTrigger?w:void 0}),e.lineClamp?t:(0,n.h)("span",{ref:"triggerInnerRef"},t));function b(t){if(!t)return;const i=g.value,n=p(o.value);void 0!==e.lineClamp?_(t,n,"add"):_(t,n,"remove");for(const e in i)t.style[e]!==i[e]&&(t.style[e]=i[e])}function x(t,i){const n=d(o.value,"pointer");"click"!==e.expandTrigger||i?_(t,n,"remove"):_(t,n,"add")}function _(e,t,i){"add"===i?e.classList.contains(t)||e.classList.add(t):e.classList.contains(t)&&e.classList.remove(t)}return{mergedTheme:u,triggerRef:v,triggerInnerRef:f,tooltipRef:m,handleClick:S,renderTrigger:y,getTooltipDisabled:w}},render(){var e;const{tooltip:t,renderTrigger:i,$slots:r}=this;if(t){const{mergedTheme:l}=this;return(0,n.h)(o.Z,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:l.peers.Tooltip,themeOverrides:l.peerOverrides.Tooltip}),{trigger:i,default:null!==(e=r.tooltip)&&void 0!==e?e:r.default})}return i()}})},80140:function(e,t,i){var n=i(68107),r=i(78308),o=i(95902);const l=(0,n.j)({name:"Ellipsis",common:r.Z,peers:{Tooltip:o.Z}});t["Z"]=l},9518:function(e,t,i){i.d(t,{Z:function(){return k}});i(57658);var n=i(73396),r=i(44870),o=i(49242),l=i(10668);const s={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function a(e){return`(min-width: ${e}px)`}const u={};function c(e=s){if(!l.j)return(0,n.Fl)((()=>[]));if("function"!==typeof window.matchMedia)return(0,n.Fl)((()=>[]));const t=(0,r.iH)({}),i=Object.keys(e),o=(e,i)=>{e.matches?t.value[i]=!0:t.value[i]=!1};return i.forEach((t=>{const i=e[t];let n,r;void 0===u[i]?(n=window.matchMedia(a(i)),n.addEventListener?n.addEventListener("change",(e=>{r.forEach((i=>{i(e,t)}))})):n.addListener&&n.addListener((e=>{r.forEach((i=>{i(e,t)}))})),r=new Set,u[i]={mql:n,cbs:r}):(n=u[i].mql,r=u[i].cbs),r.add(o),n.matches&&r.forEach((e=>{e(n,t)}))})),(0,n.Jd)((()=>{i.forEach((t=>{const{cbs:i}=u[e[t]];i.has(o)&&i.delete(o)}))})),(0,n.Fl)((()=>{const{value:e}=t;return i.filter((t=>e[t]))}))}var p=c,d=i(64498),v=i(8125);function f(e){if("number"===typeof e)return{"":e.toString()};const t={};return e.split(/ +/).forEach((e=>{if(""===e)return;const[i,n]=e.split(":");void 0===n?t[""]=i:t[i]=n})),t}function m(e,t){var i;if(void 0===e||null===e)return;const n=f(e);if(void 0===t)return n[""];if("string"===typeof t)return null!==(i=n[t])&&void 0!==i?i:n[""];if(Array.isArray(t)){for(let e=t.length-1;e>=0;--e){const i=t[e];if(i in n)return n[i]}return n[""]}{let e,i=-1;return Object.keys(n).forEach((r=>{const o=Number(r);!Number.isNaN(o)&&t>=o&&o>=i&&(i=o,e=n[r])})),e}}var h=i(5805),g=i(53072);const w={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920};var S=i(99420),y=i(55544),b=i(79940),x=i(94072);function _(e){var t;const i=null===(t=e.dirs)||void 0===t?void 0:t.find((({dir:e})=>e===o.F8));return!(!i||!1!==i.value)}var C=i(45353);const R=24,Z="__ssr__",$={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:R},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}};var k=(0,n.aZ)({name:"Grid",inheritAttrs:!1,props:$,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:i}=(0,S.Z)(e),o=/^\d+$/,l=(0,r.iH)(void 0),s=p((null===i||void 0===i?void 0:i.value)||w),a=(0,d.Z)((()=>!!e.itemResponsive||(!o.test(e.cols.toString())||(!o.test(e.xGap.toString())||!o.test(e.yGap.toString()))))),u=(0,n.Fl)((()=>{if(a.value)return"self"===e.responsive?l.value:s.value})),c=(0,d.Z)((()=>{var t;return null!==(t=Number(m(e.cols.toString(),u.value)))&&void 0!==t?t:R})),v=(0,d.Z)((()=>m(e.xGap.toString(),u.value))),f=(0,d.Z)((()=>m(e.yGap.toString(),u.value))),b=e=>{l.value=e.contentRect.width},x=e=>{(0,h.J)(b,e)},_=(0,r.iH)(!1),$=(0,n.Fl)((()=>{if("self"===e.responsive)return x})),k=(0,r.iH)(!1),T=(0,r.iH)();return(0,n.bv)((()=>{const{value:e}=T;e&&e.hasAttribute(Z)&&(e.removeAttribute(Z),k.value=!0)})),(0,n.JJ)(C.r,{layoutShiftDisabledRef:(0,r.Vh)(e,"layoutShiftDisabled"),isSsrRef:k,itemStyleRef:(0,r.Vh)(e,"itemStyle"),xGapRef:v,overflowRef:_}),{isSsr:!y.j,contentEl:T,mergedClsPrefix:t,style:(0,n.Fl)((()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:(0,g.BL)(e.xGap),rowGap:(0,g.BL)(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${c.value}, minmax(0, 1fr))`,columnGap:(0,g.BL)(v.value),rowGap:(0,g.BL)(f.value)})),isResponsive:a,responsiveQuery:u,responsiveCols:c,handleResize:$,overflow:_}},render(){if(this.layoutShiftDisabled)return(0,n.h)("div",(0,n.dG)({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var e,t,i,r,l,s,a;this.overflow=!1;const u=(0,b.x)((0,x.z)(this)),c=[],{collapsed:p,collapsedRows:d,responsiveCols:v,responsiveQuery:f}=this;u.forEach((e=>{var t,i,r,l;if(!0!==(null===(t=null===e||void 0===e?void 0:e.type)||void 0===t?void 0:t.__GRID_ITEM__))return;if(_(e)){const t=(0,n.Ho)(e);return t.props?t.props.privateShow=!1:t.props={privateShow:!1},void c.push({child:t,rawChildSpan:0})}e.dirs=(null===(i=e.dirs)||void 0===i?void 0:i.filter((({dir:e})=>e!==o.F8)))||null;const s=(0,n.Ho)(e),a=Number(null!==(l=m(null===(r=s.props)||void 0===r?void 0:r.span,f))&&void 0!==l?l:C.L);0!==a&&c.push({child:s,rawChildSpan:a})}));let h=0;const g=null===(e=c[c.length-1])||void 0===e?void 0:e.child;if(null===g||void 0===g?void 0:g.props){const e=null===(t=g.props)||void 0===t?void 0:t.suffix;void 0!==e&&!1!==e&&(h=null!==(r=null===(i=g.props)||void 0===i?void 0:i.span)&&void 0!==r?r:C.L,g.props.privateSpan=h,g.props.privateColStart=v+1-h,g.props.privateShow=null===(l=g.props.privateShow)||void 0===l||l)}let w=0,S=!1;for(const{child:n,rawChildSpan:o}of c){if(S&&(this.overflow=!0),!S){const e=Number(null!==(a=m(null===(s=n.props)||void 0===s?void 0:s.offset,f))&&void 0!==a?a:0),t=Math.min(o+e,v);if(n.props?(n.props.privateSpan=t,n.props.privateOffset=e):n.props={privateSpan:t,privateOffset:e},p){const e=w%v;t+e>v&&(w+=v-e),t+w+h>d*v?S=!0:w+=t}}S&&(n.props?!0!==n.props.privateShow&&(n.props.privateShow=!1):n.props={privateShow:!1})}return(0,n.h)("div",(0,n.dG)({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[Z]:this.isSsr||void 0},this.$attrs),c.map((({child:e})=>e)))};return this.isResponsive&&"self"===this.responsive?(0,n.h)(v.Z,{onResize:this.handleResize},{default:e}):e()}})},85210:function(e,t,i){var n=i(73396),r=i(53072),o=i(61838),l=i(45353);const s=1,a={span:{type:[Number,String],default:s},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}};(0,o.u)(a);t["ZP"]=(0,n.aZ)({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:a,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:i,overflowRef:o,layoutShiftDisabledRef:a}=(0,n.f3)(l.r),u=(0,n.FN)();return{overflow:o,itemStyle:i,layoutShiftDisabled:a,mergedXGap:(0,n.Fl)((()=>(0,r.BL)(t.value||0))),deriveStyle:()=>{e.value;const{privateSpan:i=s,privateShow:n=!0,privateColStart:o,privateOffset:l=0}=u.vnode.props,{value:a}=t,c=(0,r.BL)(a||0);return{display:n?"":"none",gridColumn:`${null!==o&&void 0!==o?o:`span ${i}`} / span ${i}`,marginLeft:l?`calc((100% - (${i} - 1) * ${c}) / ${i} * ${l} + ${c} * ${l})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:e,offset:t,mergedXGap:i}=this;return(0,n.h)("div",{style:{gridColumn:`span ${e} / span ${e}`,marginLeft:t?`calc((100% - (${e} - 1) * ${i}) / ${e} * ${t} + ${i} * ${t})`:""}},this.$slots)}return(0,n.h)("div",{style:[this.itemStyle,this.deriveStyle()]},null===(t=(e=this.$slots).default)||void 0===t?void 0:t.call(e,{overflow:this.overflow}))}})},45353:function(e,t,i){i.d(t,{L:function(){return r},r:function(){return o}});var n=i(11295);const r=1,o=(0,n.U)("n-grid")},59684:function(e,t,i){i.d(t,{DI:function(){return o},SN:function(){return l},fg:function(){return a},id:function(){return s},rT:function(){return r}});var n=i(37245);function r(e){return(0,n.Z)({url:"/resources",method:"get",params:e})}function o(e){return(0,n.Z)({url:`/resources/${e}`,method:"get"})}function l(e){return(0,n.Z)({url:"/resources",method:"post",data:e})}function s(e,t){return(0,n.Z)({url:`/resources/${e}`,method:"put",data:t})}function a(e){return(0,n.Z)({url:`/resources/${e}`,method:"delete"})}},60568:function(e,t,i){i.r(t),i.d(t,{default:function(){return L}});i(57658),i(30541);var n=i(73396),r=i(44870),o=i(87139),l=i(24120),s=i(33008),a=i(74786),u=i(43282),c=i(94570),p=i(70553),d=i(9518),v=i(85210),f=i(75535),m=i(55393),h=i(21209),g=i(22483),w=i(59063),S=(i(59684),i(10796)),y=i(2115),b=i.p+"img/my_favorite.5ec0fedd.png",x=i(20065),_=i(18134),C=i.n(_);const R={class:"resource-container"},Z={class:"search-wrap"},$={class:"tags-wrap"},k=["src"],T={key:1},E=["innerHTML"];var G={__name:"resource",setup(e){const t=(0,x.oR)(),i=(0,g.tv)(),{message:_}=(0,l.M)(["message"]);function G(){i.push("/m/profile")}const U=(0,r.iH)(null),D=(0,r.iH)(null),L={textColor:"#ed3939",borderColor:"#ed3939"};async function O(){const e=await(0,w.$R)(),t=e.items||[];t.unshift({id:S.zZ,name:S.go,has_permissions:!0}),U.value=t,D.value=t[0]||{}}function H(e){D.value=e,t.commit("SET_SELECTED_CATEGORY",e)}O();const F=(0,r.iH)(!1),B=(0,r.iH)([]),N=((0,r.qj)({page_num:1,page_size:10,category_id:null}),"xxxx"),j="copyBtn";let I=null;function M(){A(),I.on("success",(e=>{console.log("copy succ"),e.clearSelection(),_.success("已复制联系方式")})),I.on("error",(e=>{console.log("copy fail")}))}function A(){I&&I.destroy(),I=null,I=new(C())(`#${j}`,{container:document.querySelector(`#${j}`)})}async function z(){if(F.value=!0,B.value=[],D.value.id!==S.zZ){const e=D.value.items.map((e=>({...e,picture_url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"})));B.value=e||[]}else B.value=[{id:S.U5.MY_FAVORITE,name:S.U5.getDesc("MY_FAVORITE"),picture_url:b},{id:S.U5.FAVORITE,name:S.U5.getDesc("FAVORITE"),picture_url:b}];F.value=!1}function P(){Y({isFromSearch:!0})}function V(e){const t=[S.U5.MY_FAVORITE,S.U5.FAVORITE].includes(e.id);Y(t?{isFromFavorite:!0,category_id:e.id}:{category_id:e.id,name:e.name})}function Y(e){i.push({path:"/m/resource/list",query:e})}function W(){i.push("/m/activation")}return(0,n.YP)(D,(e=>{z()})),(e,t)=>((0,n.wg)(),(0,n.iD)("div",R,[(0,n._)("div",Z,[(0,n.Wm)((0,r.SU)(s.Z),{round:"",placeholder:"搜索","on-focus":P},{prefix:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(a.g),{component:(0,r.SU)(h.Z)},null,8,["component"])])),_:1}),(0,n.Wm)((0,r.SU)(u.Z),{class:"user",round:"",src:(0,r.SU)(y),onClick:G},null,8,["src"])]),(0,n._)("div",$,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(U.value,(e=>((0,n.wg)(),(0,n.j4)((0,r.SU)(c.ZP),{size:"small",round:"",strong:"",color:D.value.id===e.id?L:void 0,onClick:t=>H(e)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.name),1)])),_:2},1032,["color","onClick"])))),256))]),D.value?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[D.value.has_permissions?((0,n.wg)(),(0,n.j4)((0,r.SU)(p.Z),{key:0,class:"list-wrap",show:F.value},{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(d.Z),{"x-gap":"12","y-gap":"12",cols:4},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(B.value,(e=>((0,n.wg)(),(0,n.j4)((0,r.SU)(v.ZP),{onClick:t=>V(e)},{default:(0,n.w5)((()=>[(0,n._)("img",{class:"poster",src:(0,r.SU)(S.Kn)(e.picture_url)},null,8,k),(0,n._)("div",null,[(0,n.Wm)((0,r.SU)(f.Z),{style:{"max-width":"75px"}},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.name),1)])),_:2},1024)])])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1},8,["show"])):((0,n.wg)(),(0,n.iD)("div",T,[(0,n._)("div",null,[(0,n.Wm)((0,r.SU)(m.ZP),{color:"rgb(237, 56, 56)",onClick:W},{default:(0,n.w5)((()=>[(0,n.Uk)(" 输入激活码 ")])),_:1}),(0,n.Wm)((0,r.SU)(m.ZP),{"data-clipboard-text":N,id:j,style:{"margin-left":"15px"},onClick:M},{default:(0,n.w5)((()=>[(0,n.Uk)(" 联系客服 ")])),_:1})]),(0,n._)("div",{innerHTML:D.value.description,style:{"margin-top":"15px"}},null,8,E)]))],64)):(0,n.kq)("",!0)]))}},U=i(40089);const D=(0,U.Z)(G,[["__scopeId","data-v-20fed24a"]]);var L=D}}]);
//# sourceMappingURL=89.61d647f6.js.map