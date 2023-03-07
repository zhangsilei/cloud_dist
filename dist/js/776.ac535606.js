"use strict";(self["webpackChunkcloud_dist"]=self["webpackChunkcloud_dist"]||[]).push([[776],{21209:function(e,t,n){var a=n(73396);const o={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"},r=(0,a._)("path",{d:"M443.5,420.2L336.7,312.4c20.9-26.2,33.5-59.4,33.5-95.5c0-84.5-68.5-153-153.1-153S64,132.5,64,217s68.5,153,153.1,153\n\tc36.6,0,70.1-12.8,96.5-34.2l106.1,107.1c3.2,3.4,7.6,5.1,11.9,5.1c4.1,0,8.2-1.5,11.3-4.5C449.5,437.2,449.7,426.8,443.5,420.2z\n\t M217.1,337.1c-32.1,0-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-84.9c0-32.1,12.5-62.3,35.2-84.9c22.7-22.7,52.9-35.2,85-35.2\n\tc32.1,0,62.3,12.5,85,35.2c22.7,22.7,35.2,52.9,35.2,84.9c0,32.1-12.5,62.3-35.2,84.9C279.4,324.6,249.2,337.1,217.1,337.1z"},null,-1),i=[r];t["Z"]=(0,a.aZ)({name:"IosSearch",render:function(e,t){return(0,a.wg)(),(0,a.iD)("svg",o,i)}})},3796:function(e,t,n){var a=n(73396);t["Z"]=(0,a.aZ)({name:"Add",render(){return(0,a.h)("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.h)("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}})},59684:function(e,t,n){n.d(t,{DI:function(){return r},SN:function(){return i},fg:function(){return s},id:function(){return l},rT:function(){return o}});var a=n(37245);function o(e){return(0,a.Z)({url:"/resources",method:"get",params:e})}function r(e){return(0,a.Z)({url:`/resources/${e}`,method:"get"})}function i(e){return(0,a.Z)({url:"/resources",method:"post",data:e})}function l(e,t){return(0,a.Z)({url:`/resources/${e}`,method:"put",data:t})}function s(e){return(0,a.Z)({url:`/resources/${e}`,method:"delete"})}},35465:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(73396),o=n(44870),r=n(43752),i={__name:"PageHeader",props:{title:{required:!1,type:String,default:""}},emits:["back"],setup(e,{emit:t}){function n(){t("back")}return(t,i)=>((0,a.wg)(),(0,a.j4)((0,o.SU)(r.Z),{style:{"border-bottom":"1px solid #eee"},title:e.title,onBack:n},{extra:(0,a.w5)((()=>[(0,a.WI)(t.$slots,"extra")])),_:3},8,["title"]))}};const l=i;var s=l},23776:function(e,t,n){n.r(t),n.d(t,{default:function(){return vt}});n(57658);var a=n(73396),o=n(44870),r=n(87139),i=n(22483),l=n(33008),s=n(74786),c=n(5941),d=n(94570),u=n(71727),b=n(49242),p=n(8125),f=n(51496),v=n(58224);const g=(0,v.c)(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[(0,v.c)("&::-webkit-scrollbar",{width:0,height:0})]);var h=(0,a.aZ)({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=(0,o.iH)(null);function t(e){const t=e.currentTarget.offsetWidth<e.currentTarget.scrollWidth;t&&0!==e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}const n=(0,f.O)();g.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:v.A,ssr:n});const a={scrollTo(...t){var n;null===(n=e.value)||void 0===n||n.scrollTo(...t)}};return Object.assign({selfRef:e,handleWheel:t},a)},render(){return(0,a.h)("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),m=n(6049),x=n(98345),y=function(){return x.Z.Date.now()},w=y,C=/\s/;function S(e){var t=e.length;while(t--&&C.test(e.charAt(t)));return t}var k=S,_=/^\s+/;function B(e){return e?e.slice(0,k(e)+1).replace(_,""):e}var z=B,P=n(38590),T=NaN,$=/^[-+]0x[0-9a-f]+$/i,R=/^0b[01]+$/i,L=/^0o[0-7]+$/i,W=parseInt;function H(e){if("number"==typeof e)return e;if((0,P.Z)(e))return T;if((0,m.Z)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,m.Z)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=z(e);var n=R.test(e);return n||L.test(e)?W(e.slice(2),n?2:8):$.test(e)?T:+e}var Z=H,M="Expected a function",U=Math.max,j=Math.min;function A(e,t,n){var a,o,r,i,l,s,c=0,d=!1,u=!1,b=!0;if("function"!=typeof e)throw new TypeError(M);function p(t){var n=a,r=o;return a=o=void 0,c=t,i=e.apply(r,n),i}function f(e){return c=e,l=setTimeout(h,t),d?p(e):i}function v(e){var n=e-s,a=e-c,o=t-n;return u?j(o,r-a):o}function g(e){var n=e-s,a=e-c;return void 0===s||n>=t||n<0||u&&a>=r}function h(){var e=w();if(g(e))return x(e);l=setTimeout(h,v(e))}function x(e){return l=void 0,b&&a?p(e):(a=o=void 0,i)}function y(){void 0!==l&&clearTimeout(l),c=0,a=s=o=l=void 0}function C(){return void 0===l?i:x(w())}function S(){var e=w(),n=g(e);if(a=arguments,o=this,s=e,n){if(void 0===l)return f(s);if(u)return clearTimeout(l),l=setTimeout(h,t),p(s)}return void 0===l&&(l=setTimeout(h,t)),i}return t=Z(t)||0,(0,m.Z)(n)&&(d=!!n.leading,u="maxWait"in n,r=u?U(Z(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),S.cancel=y,S.flush=C,S}var E=A,V="Expected a function";function D(e,t,n){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError(V);return(0,m.Z)(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),E(e,t,{leading:a,maxWait:t,trailing:o})}var F=D,I=n(66307),N=n(67477),O=n(33743),q=n(68107),G=n(99420),Y=n(96455),X=n(79940),K=n(18089),J=n(85608),Q=n(34092),ee={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"0 6px",tabPaddingVerticalMediumLine:"0 10px",tabPaddingVerticalLargeLine:"0 14px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"0 4px",tabPaddingVerticalMediumBar:"0 6px ",tabPaddingVerticalLargeBar:"0 10px ",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"10px 6px",tabPaddingVerticalMediumCard:"12px 8px",tabPaddingVerticalLargeCard:"16px 8px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},te=n(78308);const ne=e=>{const{textColor2:t,primaryColor:n,textColorDisabled:a,closeIconColor:o,closeIconColorHover:r,closeIconColorPressed:i,closeColorHover:l,closeColorPressed:s,tabColor:c,baseColor:d,dividerColor:u,fontWeight:b,textColor1:p,borderRadius:f,fontSize:v,fontWeightStrong:g}=e;return Object.assign(Object.assign({},ee),{colorSegment:c,tabFontSizeCard:v,tabTextColorLine:p,tabTextColorActiveLine:n,tabTextColorHoverLine:n,tabTextColorDisabledLine:a,tabTextColorSegment:p,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:a,tabTextColorBar:p,tabTextColorActiveBar:n,tabTextColorHoverBar:n,tabTextColorDisabledBar:a,tabTextColorCard:p,tabTextColorHoverCard:p,tabTextColorActiveCard:n,tabTextColorDisabledCard:a,barColor:n,closeIconColor:o,closeIconColorHover:r,closeIconColorPressed:i,closeColorHover:l,closeColorPressed:s,closeBorderRadius:f,tabColor:c,tabColorSegment:d,tabBorderColor:u,tabFontWeightActive:b,tabFontWeight:b,tabBorderRadius:f,paneTextColor:t,fontWeightStrong:g})},ae={name:"Tabs",common:te.Z,self:ne};var oe=ae,re=n(11295);const ie=(0,re.U)("n-tabs");var le=n(3796),se=n(61318),ce=n(35556),de=n(99919),ue=n(37902),be=n(28448);const pe={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var fe=(0,a.aZ)({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:pe,setup(e){const t=(0,a.f3)(ie,null);return t||(0,be._y)("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return(0,a.h)("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const ve=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},(0,de.C)(pe,["displayDirective"]));var ge=(0,a.aZ)({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ve,setup(e){const{mergedClsPrefixRef:t,valueRef:n,typeRef:o,closableRef:r,tabStyleRef:i,tabChangeIdRef:l,onBeforeLeaveRef:s,triggerRef:c,handleAdd:d,activateTab:u,handleClose:b}=(0,a.f3)(ie);return{trigger:c,mergedClosable:(0,a.Fl)((()=>{if(e.internalAddable)return!1;const{closable:t}=e;return void 0===t?r.value:t})),style:i,clsPrefix:t,value:n,type:o,handleClose(t){t.stopPropagation(),e.disabled||b(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable)return void d();const{name:t}=e,a=++l.id;if(t!==n.value){const{value:o}=s;o?Promise.resolve(o(e.name,n.value)).then((e=>{e&&l.id===a&&u(t)})):u(t)}}}},render(){const{internalAddable:e,clsPrefix:t,name:n,disabled:o,label:r,tab:i,value:l,mergedClosable:s,style:c,trigger:d,$slots:{default:u}}=this,b=null!==r&&void 0!==r?r:i;return(0,a.h)("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?(0,a.h)("div",{class:`${t}-tabs-tab-pad`}):null,(0,a.h)("div",Object.assign({key:n,"data-name":n,"data-disabled":!!o||void 0},(0,a.dG)({class:[`${t}-tabs-tab`,l===n&&`${t}-tabs-tab--active`,o&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:"click"===d?this.activateTab:void 0,onMouseenter:"hover"===d?this.activateTab:void 0,style:e?void 0:c},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),(0,a.h)("span",{class:`${t}-tabs-tab__label`},e?(0,a.h)(a.HY,null,(0,a.h)("div",{class:`${t}-tabs-tab__height-placeholder`}," "),(0,a.h)(se.Z,{clsPrefix:t},{default:()=>(0,a.h)(le.Z,null)})):u?u():"object"===typeof b?b:(0,ue.s)(null!==b&&void 0!==b?b:n)),s&&"card"===this.type?(0,a.h)(ce.Z,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:o}):null))}}),he=n(30411),me=(0,he.cB)("tabs","\n box-sizing: border-box;\n width: 100%;\n display: flex;\n flex-direction: column;\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n",[(0,he.cM)("segment-type",[(0,he.cB)("tabs-rail",[(0,he.c)("&.transition-disabled","color: red;",[(0,he.cB)("tabs-tab","\n transition: none;\n ")])])]),(0,he.cM)("left, right","\n flex-direction: row;\n ",[(0,he.cB)("tabs-bar","\n width: 2px;\n right: 0;\n transition:\n top .2s var(--n-bezier),\n max-height .2s var(--n-bezier),\n background-color .3s var(--n-bezier);\n "),(0,he.cB)("tabs-tab","\n padding: var(--n-tab-padding-vertical); \n ")]),(0,he.cM)("right","\n flex-direction: row-reverse;\n ",[(0,he.cB)("tabs-bar","\n left: 0;\n ")]),(0,he.cM)("bottom","\n flex-direction: column-reverse;\n justify-content: flex-end;\n ",[(0,he.cB)("tabs-bar","\n top: 0;\n ")]),(0,he.cB)("tabs-rail","\n padding: 3px;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n background-color: var(--n-color-segment);\n transition: background-color .3s var(--n-bezier);\n display: flex;\n align-items: center;\n ",[(0,he.cB)("tabs-tab-wrapper","\n flex-basis: 0;\n flex-grow: 1;\n display: flex;\n align-items: center;\n justify-content: center;\n ",[(0,he.cB)("tabs-tab","\n overflow: hidden;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n display: flex;\n align-items: center;\n justify-content: center;\n ",[(0,he.cM)("active","\n font-weight: var(--n-font-weight-strong);\n color: var(--n-tab-text-color-active);\n background-color: var(--n-tab-color-segment);\n box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);\n "),(0,he.c)("&:hover","\n color: var(--n-tab-text-color-hover);\n ")])])]),(0,he.cM)("flex",[(0,he.cB)("tabs-nav",{width:"100%"},[(0,he.cB)("tabs-wrapper",{width:"100%"},[(0,he.cB)("tabs-tab",{marginRight:0})])])]),(0,he.cB)("tabs-nav","\n box-sizing: border-box;\n line-height: 1.5;\n display: flex;\n transition: border-color .3s var(--n-bezier);\n ",[(0,he.cE)("prefix, suffix","\n display: flex;\n align-items: center;\n "),(0,he.cE)("prefix","padding-right: 16px;"),(0,he.cE)("suffix","padding-left: 16px;")]),(0,he.cB)("tabs-nav-scroll-wrapper","\n flex: 1;\n position: relative;\n overflow: hidden;\n ",[(0,he.cM)("shadow-before",[(0,he.c)("&::before","\n box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);\n ")]),(0,he.cM)("shadow-after",[(0,he.c)("&::after","\n box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);\n ")]),(0,he.cB)("tabs-nav-y-scroll","\n height: 100%;\n width: 100%;\n overflow-y: auto; \n scrollbar-width: none;\n ",[(0,he.c)("&::-webkit-scrollbar","\n width: 0;\n height: 0;\n ")]),(0,he.c)("&::before, &::after",'\n transition: box-shadow .3s var(--n-bezier);\n pointer-events: none;\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n width: 20px;\n z-index: 1;\n '),(0,he.c)("&::before","\n left: 0;\n "),(0,he.c)("&::after","\n right: 0;\n ")]),(0,he.cB)("tabs-nav-scroll-content","\n display: flex;\n position: relative;\n min-width: 100%;\n width: fit-content;\n "),(0,he.cB)("tabs-wrapper","\n display: inline-flex;\n flex-wrap: nowrap;\n position: relative;\n "),(0,he.cB)("tabs-tab-wrapper","\n display: flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n flex-grow: 0;\n "),(0,he.cB)("tabs-tab","\n cursor: pointer;\n white-space: nowrap;\n flex-wrap: nowrap;\n display: inline-flex;\n align-items: center;\n color: var(--n-tab-text-color);\n font-size: var(--n-tab-font-size);\n background-clip: padding-box;\n padding: var(--n-tab-padding);\n transition:\n box-shadow .3s var(--n-bezier),\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",[(0,he.cM)("disabled",{cursor:"not-allowed"}),(0,he.cE)("close","\n margin-left: 6px;\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "),(0,he.cE)("label","\n display: flex;\n align-items: center;\n ")]),(0,he.cB)("tabs-bar","\n position: absolute;\n bottom: 0;\n height: 2px;\n border-radius: 1px;\n background-color: var(--n-bar-color);\n transition:\n left .2s var(--n-bezier),\n max-width .2s var(--n-bezier),\n background-color .3s var(--n-bezier);\n ",[(0,he.c)("&.transition-disabled","\n transition: none;\n "),(0,he.cM)("disabled","\n background-color: var(--n-tab-text-color-disabled)\n ")]),(0,he.cB)("tabs-pane-wrapper","\n position: relative;\n overflow: hidden;\n transition: max-height .2s var(--n-bezier);\n "),(0,he.cB)("tab-pane","\n color: var(--n-pane-text-color);\n width: 100%;\n padding: var(--n-pane-padding);\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .2s var(--n-bezier);\n left: 0;\n right: 0;\n top: 0;\n ",[(0,he.c)("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active","\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n transform .2s var(--n-bezier),\n opacity .2s var(--n-bezier);\n "),(0,he.c)("&.next-transition-leave-active, &.prev-transition-leave-active","\n position: absolute;\n "),(0,he.c)("&.next-transition-enter-from, &.prev-transition-leave-to","\n transform: translateX(32px);\n opacity: 0;\n "),(0,he.c)("&.next-transition-leave-to, &.prev-transition-enter-from","\n transform: translateX(-32px);\n opacity: 0;\n "),(0,he.c)("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to","\n transform: translateX(0);\n opacity: 1;\n ")]),(0,he.cB)("tabs-tab-pad","\n width: var(--n-tab-gap);\n flex-grow: 0;\n flex-shrink: 0;\n "),(0,he.cM)("line-type, bar-type",[(0,he.cB)("tabs-tab","\n font-weight: var(--n-tab-font-weight);\n box-sizing: border-box;\n vertical-align: bottom;\n ",[(0,he.c)("&:hover",{color:"var(--n-tab-text-color-hover)"}),(0,he.cM)("active","\n color: var(--n-tab-text-color-active);\n font-weight: var(--n-tab-font-weight-active);\n "),(0,he.cM)("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),(0,he.cB)("tabs-nav",[(0,he.cM)("line-type",[(0,he.cE)("prefix, suffix","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),(0,he.cB)("tabs-nav-scroll-content","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),(0,he.cB)("tabs-bar","\n border-radius: 0;\n bottom: -1px;\n ")]),(0,he.cM)("card-type",[(0,he.cE)("prefix, suffix","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),(0,he.cB)("tabs-pad","\n flex-grow: 1;\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),(0,he.cB)("tabs-tab-pad","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),(0,he.cB)("tabs-tab","\n font-weight: var(--n-tab-font-weight);\n border: 1px solid var(--n-tab-border-color);\n border-top-left-radius: var(--n-tab-border-radius);\n border-top-right-radius: var(--n-tab-border-radius);\n background-color: var(--n-tab-color);\n box-sizing: border-box;\n position: relative;\n vertical-align: bottom;\n display: flex;\n justify-content: space-between;\n font-size: var(--n-tab-font-size);\n color: var(--n-tab-text-color);\n ",[(0,he.cM)("addable","\n padding-left: 8px;\n padding-right: 8px;\n font-size: 16px;\n ",[(0,he.cE)("height-placeholder","\n width: 0;\n font-size: var(--n-tab-font-size);\n "),(0,he.u4)("disabled",[(0,he.c)("&:hover","\n color: var(--n-tab-text-color-hover);\n ")])]),(0,he.cM)("closable","padding-right: 6px;"),(0,he.cM)("active","\n border-bottom: 1px solid #0000;\n background-color: #0000;\n font-weight: var(--n-tab-font-weight-active);\n color: var(--n-tab-text-color-active);\n "),(0,he.cM)("disabled","color: var(--n-tab-text-color-disabled);")]),(0,he.cB)("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),(0,he.cM)("left, right",[(0,he.cB)("tabs-wrapper","\n flex-direction: column;\n ",[(0,he.cB)("tabs-tab-wrapper","\n flex-direction: column;\n ",[(0,he.cB)("tabs-tab-pad","\n height: var(--n-tab-gap);\n width: 100%;\n ")])]),(0,he.cB)("tabs-nav-scroll-content","\n border-bottom: none;\n ")]),(0,he.cM)("left",[(0,he.cB)("tabs-nav-scroll-content","\n box-sizing: border-box;\n border-right: 1px solid var(--n-tab-border-color);\n ")]),(0,he.cM)("right",[(0,he.cB)("tabs-nav-scroll-content","\n border-left: 1px solid var(--n-tab-border-color);\n ")]),(0,he.cM)("bottom",[(0,he.cB)("tabs-nav-scroll-content","\n border-top: 1px solid var(--n-tab-border-color);\n border-bottom: none;\n ")])])]);const xe=Object.assign(Object.assign({},q.Z.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var ye=(0,a.aZ)({name:"Tabs",props:xe,setup(e,{slots:t}){var n,r,i,l;const{mergedClsPrefixRef:s,inlineThemeDisabled:c}=(0,G.Z)(e),d=(0,q.Z)("Tabs","-tabs",me,oe,e,s),u=(0,o.iH)(null),b=(0,o.iH)(null),p=(0,o.iH)(null),f=(0,o.iH)(null),v=(0,o.iH)(null),g=(0,o.iH)(!0),h=(0,o.iH)(!0),m=(0,I.Z)(e,["labelSize","size"]),x=(0,I.Z)(e,["activeName","value"]),y=(0,o.iH)(null!==(r=null!==(n=x.value)&&void 0!==n?n:e.defaultValue)&&void 0!==r?r:t.default?null===(l=null===(i=(0,X.x)(t.default())[0])||void 0===i?void 0:i.props)||void 0===l?void 0:l.name:null),w=(0,N.Z)(x,y),C={id:0},S=(0,a.Fl)((()=>{if(e.justifyContent&&"card"!==e.type)return{display:"flex",justifyContent:e.justifyContent}}));function k(){var e;const{value:t}=w;if(null===t)return null;const n=null===(e=u.value)||void 0===e?void 0:e.querySelector(`[data-name="${t}"]`);return n}function _(t){if("card"===e.type)return;const{value:n}=b;if(n&&t){const a=`${s.value}-tabs-bar--disabled`,{barWidth:o,placement:r}=e;if("true"===t.dataset.disabled?n.classList.add(a):n.classList.remove(a),["top","bottom"].includes(r)){if(B(["top","maxHeight","height"]),"number"===typeof o&&t.offsetWidth>=o){const e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;n.style.left=`${e}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width="8192px",n.offsetWidth}else{if(B(["left","maxWidth","width"]),"number"===typeof o&&t.offsetHeight>=o){const e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;n.style.top=`${e}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${t.offsetTop}px`,n.style.maxHeight=`${t.offsetHeight}px`;n.style.height="8192px",n.offsetHeight}}}function B(e){const{value:t}=b;if(t)for(const n of e)t.style[n]=""}function z(){if("card"===e.type)return;const t=k();t&&_(t)}function P(e){var t;const n=null===(t=v.value)||void 0===t?void 0:t.$el;if(!n)return;const a=k();if(!a)return;const{scrollLeft:o,offsetWidth:r}=n,{offsetLeft:i,offsetWidth:l}=a;o>i?n.scrollTo({top:0,left:i,behavior:"smooth"}):i+l>o+r&&n.scrollTo({top:0,left:i+l-r,behavior:"smooth"})}(0,a.YP)(w,(()=>{C.id=0,z(),P(!0)}));const T=(0,o.iH)(null);let $=0,R=null;function L(e){const t=T.value;if(t){$=e.getBoundingClientRect().height;const n=`${$}px`,a=()=>{t.style.height=n,t.style.maxHeight=n};R?(a(),R(),R=null):R=a}}function W(e){const t=T.value;if(t){const n=e.getBoundingClientRect().height,a=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max($,n)}px`};R?(R(),R=null,a()):R=a}}function H(){const e=T.value;e&&(e.style.maxHeight="",e.style.height="")}const Z={value:[]},M=(0,o.iH)("next");function U(e){const t=w.value;let n="next";for(const a of Z.value){if(a===t)break;if(a===e){n="prev";break}}M.value=n,j(e)}function j(t){const{onActiveNameChange:n,onUpdateValue:a,"onUpdate:value":o}=e;n&&(0,K.R)(n,t),a&&(0,K.R)(a,t),o&&(0,K.R)(o,t),y.value=t}function A(t){const{onClose:n}=e;n&&(0,K.R)(n,t)}let E=!0;function V(){const{value:e}=b;if(!e)return;E||(E=!1);const t="transition-disabled";e.classList.add(t),z(),e.classList.remove(t)}let D=0;function Q(t){var n,a;if(0===t.contentRect.width&&0===t.contentRect.height)return;if(D===t.contentRect.width)return;D=t.contentRect.width;const{type:o}=e;"line"!==o&&"bar"!==o||(E||(null===(n=e.justifyContent)||void 0===n?void 0:n.startsWith("space")))&&V(),"segment"!==o&&le(null===(a=v.value)||void 0===a?void 0:a.$el)}const ee=F(Q,64);(0,a.YP)([()=>e.justifyContent,()=>e.size],(()=>{(0,a.Y3)((()=>{const{type:t}=e;"line"!==t&&"bar"!==t||V()}))}));const te=(0,o.iH)(!1);function ne(e){var t;const{target:n,contentRect:{width:a}}=e,o=n.parentElement.offsetWidth;if(te.value){const{value:e}=f;if(!e)return;o-a>e.$el.offsetWidth&&(te.value=!1)}else o<a&&(te.value=!0);le(null===(t=v.value)||void 0===t?void 0:t.$el)}const ae=F(ne,64);function re(){const{onAdd:t}=e;t&&t(),(0,a.Y3)((()=>{const e=k(),{value:t}=v;e&&t&&t.scrollTo({left:e.offsetLeft,top:0,behavior:"smooth"})}))}function le(e){if(!e)return;const{scrollLeft:t,scrollWidth:n,offsetWidth:a}=e;g.value=t<=0,h.value=t+a>=n}const se=F((e=>{le(e.target)}),64);(0,a.JJ)(ie,{triggerRef:(0,o.Vh)(e,"trigger"),tabStyleRef:(0,o.Vh)(e,"tabStyle"),paneClassRef:(0,o.Vh)(e,"paneClass"),paneStyleRef:(0,o.Vh)(e,"paneStyle"),mergedClsPrefixRef:s,typeRef:(0,o.Vh)(e,"type"),closableRef:(0,o.Vh)(e,"closable"),valueRef:w,tabChangeIdRef:C,onBeforeLeaveRef:(0,o.Vh)(e,"onBeforeLeave"),activateTab:U,handleClose:A,handleAdd:re}),(0,O.Z)((()=>{z(),P(!0)})),(0,a.m0)((()=>{const{value:t}=p;if(!t||["left","right"].includes(e.placement))return;const{value:n}=s,a=`${n}-tabs-nav-scroll-wrapper--shadow-before`,o=`${n}-tabs-nav-scroll-wrapper--shadow-after`;g.value?t.classList.remove(a):t.classList.add(a),h.value?t.classList.remove(o):t.classList.add(o)}));const ce=(0,o.iH)(null);(0,a.YP)(w,(()=>{if("segment"===e.type){const e=ce.value;e&&(0,a.Y3)((()=>{e.classList.add("transition-disabled"),e.offsetWidth,e.classList.remove("transition-disabled")}))}}));const de={syncBarPosition:()=>{z()}},ue=(0,a.Fl)((()=>{const{value:t}=m,{type:n}=e,a={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n],o=`${t}${a}`,{self:{barColor:r,closeIconColor:i,closeIconColorHover:l,closeIconColorPressed:s,tabColor:c,tabBorderColor:u,paneTextColor:b,tabFontWeight:p,tabBorderRadius:f,tabFontWeightActive:v,colorSegment:g,fontWeightStrong:h,tabColorSegment:x,closeSize:y,closeIconSize:w,closeColorHover:C,closeColorPressed:S,closeBorderRadius:k,[(0,J.T)("panePadding",t)]:_,[(0,J.T)("tabPadding",o)]:B,[(0,J.T)("tabPaddingVertical",o)]:z,[(0,J.T)("tabGap",o)]:P,[(0,J.T)("tabTextColor",n)]:T,[(0,J.T)("tabTextColorActive",n)]:$,[(0,J.T)("tabTextColorHover",n)]:R,[(0,J.T)("tabTextColorDisabled",n)]:L,[(0,J.T)("tabFontSize",t)]:W},common:{cubicBezierEaseInOut:H}}=d.value;return{"--n-bezier":H,"--n-color-segment":g,"--n-bar-color":r,"--n-tab-font-size":W,"--n-tab-text-color":T,"--n-tab-text-color-active":$,"--n-tab-text-color-disabled":L,"--n-tab-text-color-hover":R,"--n-pane-text-color":b,"--n-tab-border-color":u,"--n-tab-border-radius":f,"--n-close-size":y,"--n-close-icon-size":w,"--n-close-color-hover":C,"--n-close-color-pressed":S,"--n-close-border-radius":k,"--n-close-icon-color":i,"--n-close-icon-color-hover":l,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":p,"--n-tab-font-weight-active":v,"--n-tab-padding":B,"--n-tab-padding-vertical":z,"--n-tab-gap":P,"--n-pane-padding":_,"--n-font-weight-strong":h,"--n-tab-color-segment":x}})),be=c?(0,Y.F)("tabs",(0,a.Fl)((()=>`${m.value[0]}${e.type[0]}`)),ue,e):void 0;return Object.assign({mergedClsPrefix:s,mergedValue:w,renderedNames:new Set,tabsRailElRef:ce,tabsPaneWrapperRef:T,tabsElRef:u,barElRef:b,addTabInstRef:f,xScrollInstRef:v,scrollWrapperElRef:p,addTabFixed:te,tabWrapperStyle:S,handleNavResize:ee,mergedSize:m,handleScroll:se,handleTabsResize:ae,cssVars:c?void 0:ue,themeClass:null===be||void 0===be?void 0:be.themeClass,animationDirection:M,renderNameListRef:Z,onAnimationBeforeLeave:L,onAnimationEnter:W,onAnimationAfterEnter:H,onRender:null===be||void 0===be?void 0:be.onRender},de)},render(){const{mergedClsPrefix:e,type:t,placement:n,addTabFixed:o,addable:r,mergedSize:i,renderNameListRef:l,onRender:s,$slots:{default:c,prefix:d,suffix:u}}=this;null===s||void 0===s||s();const b=c?(0,X.x)(c()).filter((e=>!0===e.type.__TAB_PANE__)):[],f=c?(0,X.x)(c()).filter((e=>!0===e.type.__TAB__)):[],v=!f.length,g="card"===t,m="segment"===t,x=!g&&!m&&this.justifyContent;l.value=[];const y=()=>{const t=(0,a.h)("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},x?null:(0,a.h)("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),v?b.map(((e,t)=>(l.value.push(e.props.name),ke((0,a.h)(ge,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:0!==t&&(!x||"center"===x||"start"===x||"end"===x)}),e.children?{default:e.children.tab}:void 0))))):f.map(((e,t)=>(l.value.push(e.props.name),ke(0===t||x?e:Se(e))))),!o&&r&&g?Ce(r,0!==(v?b.length:f.length)):null,x?null:(0,a.h)("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return(0,a.h)("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},g&&r?(0,a.h)(p.Z,{onResize:this.handleTabsResize},{default:()=>t}):t,g?(0,a.h)("div",{class:`${e}-tabs-pad`}):null,g?null:(0,a.h)("div",{ref:"barElRef",class:`${e}-tabs-bar`}))};return(0,a.h)("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${i}-size`,x&&`${e}-tabs--flex`,`${e}-tabs--${n}`],style:this.cssVars},(0,a.h)("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${n}`,`${e}-tabs-nav`]},(0,Q.K9)(d,(t=>t&&(0,a.h)("div",{class:`${e}-tabs-nav__prefix`},t))),m?(0,a.h)("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},v?b.map(((e,t)=>(l.value.push(e.props.name),(0,a.h)(ge,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:0!==t}),e.children?{default:e.children.tab}:void 0)))):f.map(((e,t)=>(l.value.push(e.props.name),0===t?e:Se(e))))):(0,a.h)(p.Z,{onResize:this.handleNavResize},{default:()=>(0,a.h)("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(n)?(0,a.h)(h,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:y}):(0,a.h)("div",{class:`${e}-tabs-nav-y-scroll`},y()))}),o&&r&&g?Ce(r,!0):null,(0,Q.K9)(u,(t=>t&&(0,a.h)("div",{class:`${e}-tabs-nav__suffix`},t)))),v&&(this.animated?(0,a.h)("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},we(b,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):we(b,this.mergedValue,this.renderedNames)))}});function we(e,t,n,o,r,i,l){const s=[];return e.forEach((e=>{const{name:o,displayDirective:r,"display-directive":i}=e.props,l=e=>r===e||i===e,c=t===o;if(void 0!==e.key&&(e.key=o),c||l("show")||l("show:lazy")&&n.has(o)){n.has(o)||n.add(o);const t=!l("if");s.push(t?(0,a.wy)(e,[[b.F8,c]]):e)}})),l?(0,a.h)(b.W3,{name:`${l}-transition`,onBeforeLeave:o,onEnter:r,onAfterEnter:i},{default:()=>s}):s}function Ce(e,t){return(0,a.h)(ge,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:"object"===typeof e&&e.disabled})}function Se(e){const t=(0,a.Ho)(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function ke(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}var _e=n(50631),Be=n(96915),ze=n(55393),Pe=n(95410),Te=n(44881),$e=n(59320),Re=n(45140),Le=n(59684),We=n(21209);const He={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ze=(0,a._)("path",{d:"M336 208v-95a80 80 0 0 0-160 0v95",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Me=(0,a._)("rect",{x:"96",y:"208",width:"320",height:"272",rx:"48",ry:"48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Ue=[Ze,Me];var je=(0,a.aZ)({name:"LockClosedOutline",render:function(e,t){return(0,a.wg)(),(0,a.iD)("svg",He,Ue)}});const Ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ee=(0,a._)("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M328 112L184 256l144 144"},null,-1),Ve=[Ee];var De=(0,a.aZ)({name:"ChevronBack",render:function(e,t){return(0,a.wg)(),(0,a.iD)("svg",Ae,Ve)}});const Fe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Ie=(0,a._)("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.5 16.5v-9l7 4.5l-7 4.5z",fill:"currentColor"},null,-1),Ne=[Ie];var Oe=(0,a.aZ)({name:"SmartDisplayFilled",render:function(e,t){return(0,a.wg)(),(0,a.iD)("svg",Fe,Ne)}}),qe=n(10796),Ge=n(35465),Ye=n(59063),Xe=n(20065),Ke=n(18134),Je=n.n(Ke);const Qe=e=>((0,a.dD)("data-v-8e8924e6"),e=e(),(0,a.Cn)(),e),et={class:"resource-list-container"},tt={key:0,class:"search-wrap"},nt={key:2,class:"child-category-list"},at=["onClick"],ot=["src"],rt={class:"tabs-wrap"},it={class:"poster"},lt={key:1,class:"mask"},st={class:"name"},ct={class:"time"},dt=Qe((()=>(0,a._)("div",null,"无权查看",-1))),ut=Qe((()=>(0,a._)("div",null,"请输入激活码或联系客服购买，联系方式（tg）：XXXXX",-1)));var bt={__name:"ResourceList",setup(e){(0,Xe.oR)();const t=(0,i.yj)(),n=(0,i.tv)(),b=(0,o.iH)(null);function p(){n.push("/m/resource")}const f=(0,o.iH)(null),v=(0,o.iH)([]);async function g(){const e=await(0,Ye.$R)(),t=(0,qe.nr)(parseInt(f.value),e.items||[]),n=t.items.map((e=>({...e,picture_url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"})));v.value=n}const h=(0,o.iH)(!1),m=(0,o.iH)(!1);function x(){t.query.isFromSearch?h.value=!0:t.query.isFromFavorite?(b.value=t.query.category_id===qe.G6?"Most favorite":"My favorite",v.value=[],H.value=[],m.value=!0,S().then((()=>y()))):(b.value=t.query.name,f.value=t.query.category_id,v.value=[],H.value=[],h.value=!1,m.value=!1,g().then((()=>y())),M())}function y(){P.value=document.body.offsetHeight-(v.value.length?220:140)+"px"}const w=(0,o.iH)(""),C=(0,o.qj)({page_num:1,page_size:10,resource_type:"VIDEO",order_by:""});async function S(){const e=await(0,Re.P$)(C),t=(e.likes||[]).map((e=>e.resource));H.value=t}const k=[{key:qe.Co,label:qe.ys},{key:qe.oN,label:qe.u5}],_=(0,o.iH)(!1);function B(e){e.key!==w.value&&(w.value=e.key,$?(H.value=[],C.order_by=e.key,S()):(H.value=[],Z.order_by=e.key,M()))}const z=[{key:"VIDEO",label:qe._P},{key:"PICTURE",label:qe.Hc}],P=(0,o.iH)(0),T=(0,a.Fl)((()=>f.value!=qe.PA&&f.value!=qe.G6)),$=[qe.G6,qe.PA].includes(t.query.category_id);function R(e){H.value=[],$?(C.resource_type=e,S()):(Z.resource_type=e,M())}let L=null;function W(){L&&clearTimeout(L),L=setTimeout((()=>{Z.category_id=t.query.category_id||0,P.value=document.body.offsetHeight-130+"px",M()}),300)}const H=(0,o.iH)(null),Z=(0,o.qj)({page_size:10,page_num:1,category_id:f.value,key:null,order_by:qe.Co,resource_type:"VIDEO"});async function M(){const e=await(0,Le.rT)(Z);H.value=e.resources||[]}function U(e){n.push({path:"/m/resource/detail",query:{list:(0,Pe.stringify)(e)}})}function j(e){n.push({path:"/m/resource/list",query:e.items?{category_id:e.id,name:e.name}:{isFromSearch:!0,category_id:t.query.category_id}})}async function A(e){try{await(0,Re.mT)({resource_id:e.id}),e.like_time=1}catch(t){}}async function E(e){try{await(0,Re.Nk)({resource_id:e.id}),e.like_time=0}catch(t){}}x(),(0,a.YP)((()=>t.query),(e=>{x()}));const V=(0,o.iH)(null),D=(0,o.iH)(!1),F={width:"100%",height:document.body.offsetHeight+"px",padding:"10px",backgroundColor:"rgb(51,51,51)",color:"#fff",textAlign:"center",boxSizing:"border-box"},I={width:"70%",margin:"30% auto 0"},N="xxxx";let O=null;function q(e){V.value=e,e.has_permissions?U(e):D.value=!0}function G(){n.push("/m/activation")}function Y(){X(),O.on("success",(e=>{console.log("copy succ"),e.clearSelection()})),O.on("error",(e=>{console.log("copy fail")}))}function X(){O&&O.destroy(),O=null,O=new(Je())("#ttt")}return(e,t)=>((0,a.wg)(),(0,a.iD)("div",et,[h.value?((0,a.wg)(),(0,a.iD)("div",tt,[(0,a.Wm)((0,o.SU)(l.Z),{value:Z.key,"onUpdate:value":t[0]||(t[0]=e=>Z.key=e),autofocus:"",round:"",placeholder:"搜索","on-input":W},(0,a.Nv)({_:2},[m.value?void 0:{name:"prefix",fn:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(s.g),{component:(0,o.SU)(We.Z)},null,8,["component"])])),key:"0"}]),1032,["value"])])):(0,a.kq)("",!0),h.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)((0,o.SU)(Ge.Z),{key:1,title:b.value,onBack:p},{extra:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(s.g),{component:(0,o.SU)(We.Z),size:"20",depth:"3",style:{"vertical-align":"middle"},onClick:j},null,8,["component"])])),_:1},8,["title"])),(0,o.SU)(T)&&!h.value?((0,a.wg)(),(0,a.iD)("div",nt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(v.value,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"item",onClick:t=>j(e)},[(0,a._)("img",{class:"poster",src:(0,o.SU)(qe.Kn)(e.picture_url)},null,8,ot),(0,a._)("div",null,(0,r.zw)(e.name),1)],8,at)))),256))])):(0,a.kq)("",!0),h.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)((0,o.SU)(c.Z),{key:3,justify:"space-between"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(k,(e=>(0,a.Wm)((0,o.SU)(d.ZP),{size:"small",round:"",checkable:"",checked:w.value===e.key,"onUpdate:checked":t=>B(e)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.label),1)])),_:2},1032,["checked","onUpdate:checked"]))),64))]),(0,a.Wm)((0,o.SU)(u.Z),{checked:_.value,"onUpdate:checked":t[1]||(t[1]=e=>_.value=e)},{default:(0,a.w5)((()=>[(0,a.Uk)(" purchased ")])),_:1},8,["checked"])])),_:1})),(0,a._)("div",rt,[(0,a.Wm)((0,o.SU)(ye),{"pane-style":{height:P.value,overflowY:"scroll"},"default-value":"VIDEO",animated:"","on-update:value":R},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(z,(e=>(0,a.Wm)((0,o.SU)(fe),{name:e.key,tab:e.label},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(H.value,(e=>((0,a.wg)(),(0,a.j4)((0,o.SU)(c.Z),{class:"poster-card-wrap",justify:"space-between",align:"center",wrap:!1},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(c.Z),{align:"center",onClick:t=>q(e)},{default:(0,a.w5)((()=>[(0,a._)("div",it,[(0,a.Wm)((0,o.SU)(_e.Z),{"preview-disabled":"",width:"50",src:(0,o.SU)(qe.Kn)(e.picture_url)},null,8,["src"]),"VIDEO"===e.resource_type?((0,a.wg)(),(0,a.j4)((0,o.SU)(s.g),{key:0,class:"icon",size:"15",color:"#999",component:(0,o.SU)(Oe)},null,8,["component"])):(0,a.kq)("",!0),e.has_permissions?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",lt,[(0,a.Wm)((0,o.SU)(s.g),{class:"icon",size:"15",color:"#fff",component:(0,o.SU)(je)},null,8,["component"])]))]),(0,a._)("div",null,[(0,a._)("div",st,(0,r.zw)(e.name),1),(0,a._)("div",ct,(0,r.zw)((0,o.SU)(qe.p6)(e.created_time)),1)])])),_:2},1032,["onClick"]),(0,a.Wm)((0,o.SU)(c.Z),{size:5},{default:(0,a.w5)((()=>[e.like_time?((0,a.wg)(),(0,a.j4)((0,o.SU)(s.g),{key:0,size:"20",color:"red",component:(0,o.SU)(Te.Z),onClick:t=>E(e)},null,8,["component","onClick"])):((0,a.wg)(),(0,a.j4)((0,o.SU)(s.g),{key:1,size:"20",component:(0,o.SU)($e.Z),onClick:t=>A(e)},null,8,["component","onClick"])),(0,a._)("div",null,(0,r.zw)(e.like_num),1)])),_:2},1024)])),_:2},1024)))),256))])),_:2},1032,["name","tab"]))),64))])),_:1},8,["pane-style"])]),(0,a.Wm)((0,o.SU)(Be.Z),{show:D.value,"onUpdate:show":t[3]||(t[3]=e=>D.value=e)},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"modal-wrap",style:F},[(0,a.Wm)((0,o.SU)(c.Z),{align:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(s.g),{component:(0,o.SU)(De),color:"#fff",size:"20",style:{"vertical-align":"middle"},onClick:t[2]||(t[2]=e=>D.value=!1)},null,8,["component"]),(0,a._)("div",null,(0,r.zw)(V.value.name),1)])),_:1}),(0,a.Wm)((0,o.SU)(c.Z),{style:I,vertical:"",justify:"center"},{default:(0,a.w5)((()=>[dt,ut,(0,a.Wm)((0,o.SU)(c.Z),{vertical:"",style:{"margin-top":"30px"}},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(ze.ZP),{color:"rgb(237, 56, 56)",style:{width:"100%"},onClick:G},{default:(0,a.w5)((()=>[(0,a.Uk)(" 输入激活码 ")])),_:1}),(0,a.Wm)((0,o.SU)(ze.ZP),{id:"ttt",color:"#fff",style:{width:"100%",color:"#000"},"data-clipboard-text":N,onClick:Y},{default:(0,a.w5)((()=>[(0,a.Uk)(" 复制联系方式 ")])),_:1})])),_:1})])),_:1})])])),_:1},8,["show"])]))}},pt=n(40089);const ft=(0,pt.Z)(bt,[["__scopeId","data-v-8e8924e6"]]);var vt=ft}}]);
//# sourceMappingURL=776.ac535606.js.map