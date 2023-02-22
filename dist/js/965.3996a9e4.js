"use strict";(self["webpackChunkcloud_dist"]=self["webpackChunkcloud_dist"]||[]).push([[965],{3796:function(e,t,n){var a=n(3396);t["Z"]=(0,a.aZ)({name:"Add",render(){return(0,a.h)("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.h)("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}})},1965:function(e,t,n){n.r(t),n.d(t,{default:function(){return Fe}});n(7658);var a=n(3396),o=n(4870),r=n(2483),i=n(3752),l=n(4570),s=n(9242),d=n(8125),c=n(1496),b=n(8224);const p=(0,b.c)(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[(0,b.c)("&::-webkit-scrollbar",{width:0,height:0})]);var u=(0,a.aZ)({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=(0,o.iH)(null);function t(e){const t=e.currentTarget.offsetWidth<e.currentTarget.scrollWidth;t&&0!==e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}const n=(0,c.O)();p.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:b.A,ssr:n});const a={scrollTo(...t){var n;null===(n=e.value)||void 0===n||n.scrollTo(...t)}};return Object.assign({selfRef:e,handleWheel:t},a)},render(){return(0,a.h)("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),f=n(6049),v=n(8345),g=function(){return v.Z.Date.now()},h=g,m=/\s/;function x(e){var t=e.length;while(t--&&m.test(e.charAt(t)));return t}var y=x,w=/^\s+/;function C(e){return e?e.slice(0,y(e)+1).replace(w,""):e}var S=C,k=n(8590),B=NaN,P=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,T=/^0o[0-7]+$/i,L=parseInt;function $(e){if("number"==typeof e)return e;if((0,k.Z)(e))return B;if((0,f.Z)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,f.Z)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=S(e);var n=z.test(e);return n||T.test(e)?L(e.slice(2),n?2:8):P.test(e)?B:+e}var R=$,j="Expected a function",_=Math.max,M=Math.min;function W(e,t,n){var a,o,r,i,l,s,d=0,c=!1,b=!1,p=!0;if("function"!=typeof e)throw new TypeError(j);function u(t){var n=a,r=o;return a=o=void 0,d=t,i=e.apply(r,n),i}function v(e){return d=e,l=setTimeout(x,t),c?u(e):i}function g(e){var n=e-s,a=e-d,o=t-n;return b?M(o,r-a):o}function m(e){var n=e-s,a=e-d;return void 0===s||n>=t||n<0||b&&a>=r}function x(){var e=h();if(m(e))return y(e);l=setTimeout(x,g(e))}function y(e){return l=void 0,p&&a?u(e):(a=o=void 0,i)}function w(){void 0!==l&&clearTimeout(l),d=0,a=s=o=l=void 0}function C(){return void 0===l?i:y(h())}function S(){var e=h(),n=m(e);if(a=arguments,o=this,s=e,n){if(void 0===l)return v(s);if(b)return clearTimeout(l),l=setTimeout(x,t),u(s)}return void 0===l&&(l=setTimeout(x,t)),i}return t=R(t)||0,(0,f.Z)(n)&&(c=!!n.leading,b="maxWait"in n,r=b?_(R(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),S.cancel=w,S.flush=C,S}var H=W,A="Expected a function";function V(e,t,n){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError(A);return(0,f.Z)(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),H(e,t,{leading:a,maxWait:t,trailing:o})}var Z=V,E=n(6307),F=n(7477),N=n(3743),D=n(8107),I=n(9420),O=n(6455),U=n(9940),G=n(8089),Y=n(5608),K=n(4092),X={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"0 6px",tabPaddingVerticalMediumLine:"0 10px",tabPaddingVerticalLargeLine:"0 14px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"0 4px",tabPaddingVerticalMediumBar:"0 6px ",tabPaddingVerticalLargeBar:"0 10px ",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"10px 6px",tabPaddingVerticalMediumCard:"12px 8px",tabPaddingVerticalLargeCard:"16px 8px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},q=n(8308);const J=e=>{const{textColor2:t,primaryColor:n,textColorDisabled:a,closeIconColor:o,closeIconColorHover:r,closeIconColorPressed:i,closeColorHover:l,closeColorPressed:s,tabColor:d,baseColor:c,dividerColor:b,fontWeight:p,textColor1:u,borderRadius:f,fontSize:v,fontWeightStrong:g}=e;return Object.assign(Object.assign({},X),{colorSegment:d,tabFontSizeCard:v,tabTextColorLine:u,tabTextColorActiveLine:n,tabTextColorHoverLine:n,tabTextColorDisabledLine:a,tabTextColorSegment:u,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:a,tabTextColorBar:u,tabTextColorActiveBar:n,tabTextColorHoverBar:n,tabTextColorDisabledBar:a,tabTextColorCard:u,tabTextColorHoverCard:u,tabTextColorActiveCard:n,tabTextColorDisabledCard:a,barColor:n,closeIconColor:o,closeIconColorHover:r,closeIconColorPressed:i,closeColorHover:l,closeColorPressed:s,closeBorderRadius:f,tabColor:d,tabColorSegment:c,tabBorderColor:b,tabFontWeightActive:p,tabFontWeight:p,tabBorderRadius:f,paneTextColor:t,fontWeightStrong:g})},Q={name:"Tabs",common:q.Z,self:J};var ee=Q,te=n(1295);const ne=(0,te.U)("n-tabs");var ae=n(3796),oe=n(9611),re=n(5556),ie=n(9919),le=n(7902),se=n(8448);const de={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var ce=(0,a.aZ)({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:de,setup(e){const t=(0,a.f3)(ne,null);return t||(0,se._y)("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return(0,a.h)("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const be=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},(0,ie.C)(de,["displayDirective"]));var pe=(0,a.aZ)({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:be,setup(e){const{mergedClsPrefixRef:t,valueRef:n,typeRef:o,closableRef:r,tabStyleRef:i,tabChangeIdRef:l,onBeforeLeaveRef:s,triggerRef:d,handleAdd:c,activateTab:b,handleClose:p}=(0,a.f3)(ne);return{trigger:d,mergedClosable:(0,a.Fl)((()=>{if(e.internalAddable)return!1;const{closable:t}=e;return void 0===t?r.value:t})),style:i,clsPrefix:t,value:n,type:o,handleClose(t){t.stopPropagation(),e.disabled||p(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable)return void c();const{name:t}=e,a=++l.id;if(t!==n.value){const{value:o}=s;o?Promise.resolve(o(e.name,n.value)).then((e=>{e&&l.id===a&&b(t)})):b(t)}}}},render(){const{internalAddable:e,clsPrefix:t,name:n,disabled:o,label:r,tab:i,value:l,mergedClosable:s,style:d,trigger:c,$slots:{default:b}}=this,p=null!==r&&void 0!==r?r:i;return(0,a.h)("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?(0,a.h)("div",{class:`${t}-tabs-tab-pad`}):null,(0,a.h)("div",Object.assign({key:n,"data-name":n,"data-disabled":!!o||void 0},(0,a.dG)({class:[`${t}-tabs-tab`,l===n&&`${t}-tabs-tab--active`,o&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:"click"===c?this.activateTab:void 0,onMouseenter:"hover"===c?this.activateTab:void 0,style:e?void 0:d},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),(0,a.h)("span",{class:`${t}-tabs-tab__label`},e?(0,a.h)(a.HY,null,(0,a.h)("div",{class:`${t}-tabs-tab__height-placeholder`}," "),(0,a.h)(oe.Z,{clsPrefix:t},{default:()=>(0,a.h)(ae.Z,null)})):b?b():"object"===typeof p?p:(0,le.s)(null!==p&&void 0!==p?p:n)),s&&"card"===this.type?(0,a.h)(re.Z,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:o}):null))}}),ue=n(411),fe=(0,ue.cB)("tabs","\n box-sizing: border-box;\n width: 100%;\n display: flex;\n flex-direction: column;\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n",[(0,ue.cM)("segment-type",[(0,ue.cB)("tabs-rail",[(0,ue.c)("&.transition-disabled","color: red;",[(0,ue.cB)("tabs-tab","\n transition: none;\n ")])])]),(0,ue.cM)("left, right","\n flex-direction: row;\n ",[(0,ue.cB)("tabs-bar","\n width: 2px;\n right: 0;\n transition:\n top .2s var(--n-bezier),\n max-height .2s var(--n-bezier),\n background-color .3s var(--n-bezier);\n "),(0,ue.cB)("tabs-tab","\n padding: var(--n-tab-padding-vertical); \n ")]),(0,ue.cM)("right","\n flex-direction: row-reverse;\n ",[(0,ue.cB)("tabs-bar","\n left: 0;\n ")]),(0,ue.cM)("bottom","\n flex-direction: column-reverse;\n justify-content: flex-end;\n ",[(0,ue.cB)("tabs-bar","\n top: 0;\n ")]),(0,ue.cB)("tabs-rail","\n padding: 3px;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n background-color: var(--n-color-segment);\n transition: background-color .3s var(--n-bezier);\n display: flex;\n align-items: center;\n ",[(0,ue.cB)("tabs-tab-wrapper","\n flex-basis: 0;\n flex-grow: 1;\n display: flex;\n align-items: center;\n justify-content: center;\n ",[(0,ue.cB)("tabs-tab","\n overflow: hidden;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n display: flex;\n align-items: center;\n justify-content: center;\n ",[(0,ue.cM)("active","\n font-weight: var(--n-font-weight-strong);\n color: var(--n-tab-text-color-active);\n background-color: var(--n-tab-color-segment);\n box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);\n "),(0,ue.c)("&:hover","\n color: var(--n-tab-text-color-hover);\n ")])])]),(0,ue.cM)("flex",[(0,ue.cB)("tabs-nav",{width:"100%"},[(0,ue.cB)("tabs-wrapper",{width:"100%"},[(0,ue.cB)("tabs-tab",{marginRight:0})])])]),(0,ue.cB)("tabs-nav","\n box-sizing: border-box;\n line-height: 1.5;\n display: flex;\n transition: border-color .3s var(--n-bezier);\n ",[(0,ue.cE)("prefix, suffix","\n display: flex;\n align-items: center;\n "),(0,ue.cE)("prefix","padding-right: 16px;"),(0,ue.cE)("suffix","padding-left: 16px;")]),(0,ue.cB)("tabs-nav-scroll-wrapper","\n flex: 1;\n position: relative;\n overflow: hidden;\n ",[(0,ue.cM)("shadow-before",[(0,ue.c)("&::before","\n box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);\n ")]),(0,ue.cM)("shadow-after",[(0,ue.c)("&::after","\n box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);\n ")]),(0,ue.cB)("tabs-nav-y-scroll","\n height: 100%;\n width: 100%;\n overflow-y: auto; \n scrollbar-width: none;\n ",[(0,ue.c)("&::-webkit-scrollbar","\n width: 0;\n height: 0;\n ")]),(0,ue.c)("&::before, &::after",'\n transition: box-shadow .3s var(--n-bezier);\n pointer-events: none;\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n width: 20px;\n z-index: 1;\n '),(0,ue.c)("&::before","\n left: 0;\n "),(0,ue.c)("&::after","\n right: 0;\n ")]),(0,ue.cB)("tabs-nav-scroll-content","\n display: flex;\n position: relative;\n min-width: 100%;\n width: fit-content;\n "),(0,ue.cB)("tabs-wrapper","\n display: inline-flex;\n flex-wrap: nowrap;\n position: relative;\n "),(0,ue.cB)("tabs-tab-wrapper","\n display: flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n flex-grow: 0;\n "),(0,ue.cB)("tabs-tab","\n cursor: pointer;\n white-space: nowrap;\n flex-wrap: nowrap;\n display: inline-flex;\n align-items: center;\n color: var(--n-tab-text-color);\n font-size: var(--n-tab-font-size);\n background-clip: padding-box;\n padding: var(--n-tab-padding);\n transition:\n box-shadow .3s var(--n-bezier),\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",[(0,ue.cM)("disabled",{cursor:"not-allowed"}),(0,ue.cE)("close","\n margin-left: 6px;\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "),(0,ue.cE)("label","\n display: flex;\n align-items: center;\n ")]),(0,ue.cB)("tabs-bar","\n position: absolute;\n bottom: 0;\n height: 2px;\n border-radius: 1px;\n background-color: var(--n-bar-color);\n transition:\n left .2s var(--n-bezier),\n max-width .2s var(--n-bezier),\n background-color .3s var(--n-bezier);\n ",[(0,ue.c)("&.transition-disabled","\n transition: none;\n "),(0,ue.cM)("disabled","\n background-color: var(--n-tab-text-color-disabled)\n ")]),(0,ue.cB)("tabs-pane-wrapper","\n position: relative;\n overflow: hidden;\n transition: max-height .2s var(--n-bezier);\n "),(0,ue.cB)("tab-pane","\n color: var(--n-pane-text-color);\n width: 100%;\n padding: var(--n-pane-padding);\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .2s var(--n-bezier);\n left: 0;\n right: 0;\n top: 0;\n ",[(0,ue.c)("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active","\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n transform .2s var(--n-bezier),\n opacity .2s var(--n-bezier);\n "),(0,ue.c)("&.next-transition-leave-active, &.prev-transition-leave-active","\n position: absolute;\n "),(0,ue.c)("&.next-transition-enter-from, &.prev-transition-leave-to","\n transform: translateX(32px);\n opacity: 0;\n "),(0,ue.c)("&.next-transition-leave-to, &.prev-transition-enter-from","\n transform: translateX(-32px);\n opacity: 0;\n "),(0,ue.c)("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to","\n transform: translateX(0);\n opacity: 1;\n ")]),(0,ue.cB)("tabs-tab-pad","\n width: var(--n-tab-gap);\n flex-grow: 0;\n flex-shrink: 0;\n "),(0,ue.cM)("line-type, bar-type",[(0,ue.cB)("tabs-tab","\n font-weight: var(--n-tab-font-weight);\n box-sizing: border-box;\n vertical-align: bottom;\n ",[(0,ue.c)("&:hover",{color:"var(--n-tab-text-color-hover)"}),(0,ue.cM)("active","\n color: var(--n-tab-text-color-active);\n font-weight: var(--n-tab-font-weight-active);\n "),(0,ue.cM)("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),(0,ue.cB)("tabs-nav",[(0,ue.cM)("line-type",[(0,ue.cE)("prefix, suffix","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),(0,ue.cB)("tabs-nav-scroll-content","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),(0,ue.cB)("tabs-bar","\n border-radius: 0;\n bottom: -1px;\n ")]),(0,ue.cM)("card-type",[(0,ue.cE)("prefix, suffix","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),(0,ue.cB)("tabs-pad","\n flex-grow: 1;\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),(0,ue.cB)("tabs-tab-pad","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),(0,ue.cB)("tabs-tab","\n font-weight: var(--n-tab-font-weight);\n border: 1px solid var(--n-tab-border-color);\n border-top-left-radius: var(--n-tab-border-radius);\n border-top-right-radius: var(--n-tab-border-radius);\n background-color: var(--n-tab-color);\n box-sizing: border-box;\n position: relative;\n vertical-align: bottom;\n display: flex;\n justify-content: space-between;\n font-size: var(--n-tab-font-size);\n color: var(--n-tab-text-color);\n ",[(0,ue.cM)("addable","\n padding-left: 8px;\n padding-right: 8px;\n font-size: 16px;\n ",[(0,ue.cE)("height-placeholder","\n width: 0;\n font-size: var(--n-tab-font-size);\n "),(0,ue.u4)("disabled",[(0,ue.c)("&:hover","\n color: var(--n-tab-text-color-hover);\n ")])]),(0,ue.cM)("closable","padding-right: 6px;"),(0,ue.cM)("active","\n border-bottom: 1px solid #0000;\n background-color: #0000;\n font-weight: var(--n-tab-font-weight-active);\n color: var(--n-tab-text-color-active);\n "),(0,ue.cM)("disabled","color: var(--n-tab-text-color-disabled);")]),(0,ue.cB)("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),(0,ue.cM)("left, right",[(0,ue.cB)("tabs-wrapper","\n flex-direction: column;\n ",[(0,ue.cB)("tabs-tab-wrapper","\n flex-direction: column;\n ",[(0,ue.cB)("tabs-tab-pad","\n height: var(--n-tab-gap);\n width: 100%;\n ")])]),(0,ue.cB)("tabs-nav-scroll-content","\n border-bottom: none;\n ")]),(0,ue.cM)("left",[(0,ue.cB)("tabs-nav-scroll-content","\n box-sizing: border-box;\n border-right: 1px solid var(--n-tab-border-color);\n ")]),(0,ue.cM)("right",[(0,ue.cB)("tabs-nav-scroll-content","\n border-left: 1px solid var(--n-tab-border-color);\n ")]),(0,ue.cM)("bottom",[(0,ue.cB)("tabs-nav-scroll-content","\n border-top: 1px solid var(--n-tab-border-color);\n border-bottom: none;\n ")])])]);const ve=Object.assign(Object.assign({},D.Z.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var ge=(0,a.aZ)({name:"Tabs",props:ve,setup(e,{slots:t}){var n,r,i,l;const{mergedClsPrefixRef:s,inlineThemeDisabled:d}=(0,I.Z)(e),c=(0,D.Z)("Tabs","-tabs",fe,ee,e,s),b=(0,o.iH)(null),p=(0,o.iH)(null),u=(0,o.iH)(null),f=(0,o.iH)(null),v=(0,o.iH)(null),g=(0,o.iH)(!0),h=(0,o.iH)(!0),m=(0,E.Z)(e,["labelSize","size"]),x=(0,E.Z)(e,["activeName","value"]),y=(0,o.iH)(null!==(r=null!==(n=x.value)&&void 0!==n?n:e.defaultValue)&&void 0!==r?r:t.default?null===(l=null===(i=(0,U.x)(t.default())[0])||void 0===i?void 0:i.props)||void 0===l?void 0:l.name:null),w=(0,F.Z)(x,y),C={id:0},S=(0,a.Fl)((()=>{if(e.justifyContent&&"card"!==e.type)return{display:"flex",justifyContent:e.justifyContent}}));function k(){var e;const{value:t}=w;if(null===t)return null;const n=null===(e=b.value)||void 0===e?void 0:e.querySelector(`[data-name="${t}"]`);return n}function B(t){if("card"===e.type)return;const{value:n}=p;if(n&&t){const a=`${s.value}-tabs-bar--disabled`,{barWidth:o,placement:r}=e;if("true"===t.dataset.disabled?n.classList.add(a):n.classList.remove(a),["top","bottom"].includes(r)){if(P(["top","maxHeight","height"]),"number"===typeof o&&t.offsetWidth>=o){const e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;n.style.left=`${e}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width="8192px",n.offsetWidth}else{if(P(["left","maxWidth","width"]),"number"===typeof o&&t.offsetHeight>=o){const e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;n.style.top=`${e}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${t.offsetTop}px`,n.style.maxHeight=`${t.offsetHeight}px`;n.style.height="8192px",n.offsetHeight}}}function P(e){const{value:t}=p;if(t)for(const n of e)t.style[n]=""}function z(){if("card"===e.type)return;const t=k();t&&B(t)}function T(e){var t;const n=null===(t=v.value)||void 0===t?void 0:t.$el;if(!n)return;const a=k();if(!a)return;const{scrollLeft:o,offsetWidth:r}=n,{offsetLeft:i,offsetWidth:l}=a;o>i?n.scrollTo({top:0,left:i,behavior:"smooth"}):i+l>o+r&&n.scrollTo({top:0,left:i+l-r,behavior:"smooth"})}(0,a.YP)(w,(()=>{C.id=0,z(),T(!0)}));const L=(0,o.iH)(null);let $=0,R=null;function j(e){const t=L.value;if(t){$=e.getBoundingClientRect().height;const n=`${$}px`,a=()=>{t.style.height=n,t.style.maxHeight=n};R?(a(),R(),R=null):R=a}}function _(e){const t=L.value;if(t){const n=e.getBoundingClientRect().height,a=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max($,n)}px`};R?(R(),R=null,a()):R=a}}function M(){const e=L.value;e&&(e.style.maxHeight="",e.style.height="")}const W={value:[]},H=(0,o.iH)("next");function A(e){const t=w.value;let n="next";for(const a of W.value){if(a===t)break;if(a===e){n="prev";break}}H.value=n,V(e)}function V(t){const{onActiveNameChange:n,onUpdateValue:a,"onUpdate:value":o}=e;n&&(0,G.R)(n,t),a&&(0,G.R)(a,t),o&&(0,G.R)(o,t),y.value=t}function K(t){const{onClose:n}=e;n&&(0,G.R)(n,t)}let X=!0;function q(){const{value:e}=p;if(!e)return;X||(X=!1);const t="transition-disabled";e.classList.add(t),z(),e.classList.remove(t)}let J=0;function Q(t){var n,a;if(0===t.contentRect.width&&0===t.contentRect.height)return;if(J===t.contentRect.width)return;J=t.contentRect.width;const{type:o}=e;"line"!==o&&"bar"!==o||(X||(null===(n=e.justifyContent)||void 0===n?void 0:n.startsWith("space")))&&q(),"segment"!==o&&le(null===(a=v.value)||void 0===a?void 0:a.$el)}const te=Z(Q,64);(0,a.YP)([()=>e.justifyContent,()=>e.size],(()=>{(0,a.Y3)((()=>{const{type:t}=e;"line"!==t&&"bar"!==t||q()}))}));const ae=(0,o.iH)(!1);function oe(e){var t;const{target:n,contentRect:{width:a}}=e,o=n.parentElement.offsetWidth;if(ae.value){const{value:e}=f;if(!e)return;o-a>e.$el.offsetWidth&&(ae.value=!1)}else o<a&&(ae.value=!0);le(null===(t=v.value)||void 0===t?void 0:t.$el)}const re=Z(oe,64);function ie(){const{onAdd:t}=e;t&&t(),(0,a.Y3)((()=>{const e=k(),{value:t}=v;e&&t&&t.scrollTo({left:e.offsetLeft,top:0,behavior:"smooth"})}))}function le(e){if(!e)return;const{scrollLeft:t,scrollWidth:n,offsetWidth:a}=e;g.value=t<=0,h.value=t+a>=n}const se=Z((e=>{le(e.target)}),64);(0,a.JJ)(ne,{triggerRef:(0,o.Vh)(e,"trigger"),tabStyleRef:(0,o.Vh)(e,"tabStyle"),paneClassRef:(0,o.Vh)(e,"paneClass"),paneStyleRef:(0,o.Vh)(e,"paneStyle"),mergedClsPrefixRef:s,typeRef:(0,o.Vh)(e,"type"),closableRef:(0,o.Vh)(e,"closable"),valueRef:w,tabChangeIdRef:C,onBeforeLeaveRef:(0,o.Vh)(e,"onBeforeLeave"),activateTab:A,handleClose:K,handleAdd:ie}),(0,N.Z)((()=>{z(),T(!0)})),(0,a.m0)((()=>{const{value:t}=u;if(!t||["left","right"].includes(e.placement))return;const{value:n}=s,a=`${n}-tabs-nav-scroll-wrapper--shadow-before`,o=`${n}-tabs-nav-scroll-wrapper--shadow-after`;g.value?t.classList.remove(a):t.classList.add(a),h.value?t.classList.remove(o):t.classList.add(o)}));const de=(0,o.iH)(null);(0,a.YP)(w,(()=>{if("segment"===e.type){const e=de.value;e&&(0,a.Y3)((()=>{e.classList.add("transition-disabled"),e.offsetWidth,e.classList.remove("transition-disabled")}))}}));const ce={syncBarPosition:()=>{z()}},be=(0,a.Fl)((()=>{const{value:t}=m,{type:n}=e,a={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n],o=`${t}${a}`,{self:{barColor:r,closeIconColor:i,closeIconColorHover:l,closeIconColorPressed:s,tabColor:d,tabBorderColor:b,paneTextColor:p,tabFontWeight:u,tabBorderRadius:f,tabFontWeightActive:v,colorSegment:g,fontWeightStrong:h,tabColorSegment:x,closeSize:y,closeIconSize:w,closeColorHover:C,closeColorPressed:S,closeBorderRadius:k,[(0,Y.T)("panePadding",t)]:B,[(0,Y.T)("tabPadding",o)]:P,[(0,Y.T)("tabPaddingVertical",o)]:z,[(0,Y.T)("tabGap",o)]:T,[(0,Y.T)("tabTextColor",n)]:L,[(0,Y.T)("tabTextColorActive",n)]:$,[(0,Y.T)("tabTextColorHover",n)]:R,[(0,Y.T)("tabTextColorDisabled",n)]:j,[(0,Y.T)("tabFontSize",t)]:_},common:{cubicBezierEaseInOut:M}}=c.value;return{"--n-bezier":M,"--n-color-segment":g,"--n-bar-color":r,"--n-tab-font-size":_,"--n-tab-text-color":L,"--n-tab-text-color-active":$,"--n-tab-text-color-disabled":j,"--n-tab-text-color-hover":R,"--n-pane-text-color":p,"--n-tab-border-color":b,"--n-tab-border-radius":f,"--n-close-size":y,"--n-close-icon-size":w,"--n-close-color-hover":C,"--n-close-color-pressed":S,"--n-close-border-radius":k,"--n-close-icon-color":i,"--n-close-icon-color-hover":l,"--n-close-icon-color-pressed":s,"--n-tab-color":d,"--n-tab-font-weight":u,"--n-tab-font-weight-active":v,"--n-tab-padding":P,"--n-tab-padding-vertical":z,"--n-tab-gap":T,"--n-pane-padding":B,"--n-font-weight-strong":h,"--n-tab-color-segment":x}})),pe=d?(0,O.F)("tabs",(0,a.Fl)((()=>`${m.value[0]}${e.type[0]}`)),be,e):void 0;return Object.assign({mergedClsPrefix:s,mergedValue:w,renderedNames:new Set,tabsRailElRef:de,tabsPaneWrapperRef:L,tabsElRef:b,barElRef:p,addTabInstRef:f,xScrollInstRef:v,scrollWrapperElRef:u,addTabFixed:ae,tabWrapperStyle:S,handleNavResize:te,mergedSize:m,handleScroll:se,handleTabsResize:re,cssVars:d?void 0:be,themeClass:null===pe||void 0===pe?void 0:pe.themeClass,animationDirection:H,renderNameListRef:W,onAnimationBeforeLeave:j,onAnimationEnter:_,onAnimationAfterEnter:M,onRender:null===pe||void 0===pe?void 0:pe.onRender},ce)},render(){const{mergedClsPrefix:e,type:t,placement:n,addTabFixed:o,addable:r,mergedSize:i,renderNameListRef:l,onRender:s,$slots:{default:c,prefix:b,suffix:p}}=this;null===s||void 0===s||s();const f=c?(0,U.x)(c()).filter((e=>!0===e.type.__TAB_PANE__)):[],v=c?(0,U.x)(c()).filter((e=>!0===e.type.__TAB__)):[],g=!v.length,h="card"===t,m="segment"===t,x=!h&&!m&&this.justifyContent;l.value=[];const y=()=>{const t=(0,a.h)("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},x?null:(0,a.h)("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),g?f.map(((e,t)=>(l.value.push(e.props.name),ye((0,a.h)(pe,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:0!==t&&(!x||"center"===x||"start"===x||"end"===x)}),e.children?{default:e.children.tab}:void 0))))):v.map(((e,t)=>(l.value.push(e.props.name),ye(0===t||x?e:xe(e))))),!o&&r&&h?me(r,0!==(g?f.length:v.length)):null,x?null:(0,a.h)("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return(0,a.h)("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},h&&r?(0,a.h)(d.Z,{onResize:this.handleTabsResize},{default:()=>t}):t,h?(0,a.h)("div",{class:`${e}-tabs-pad`}):null,h?null:(0,a.h)("div",{ref:"barElRef",class:`${e}-tabs-bar`}))};return(0,a.h)("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${i}-size`,x&&`${e}-tabs--flex`,`${e}-tabs--${n}`],style:this.cssVars},(0,a.h)("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${n}`,`${e}-tabs-nav`]},(0,K.K9)(b,(t=>t&&(0,a.h)("div",{class:`${e}-tabs-nav__prefix`},t))),m?(0,a.h)("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},g?f.map(((e,t)=>(l.value.push(e.props.name),(0,a.h)(pe,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:0!==t}),e.children?{default:e.children.tab}:void 0)))):v.map(((e,t)=>(l.value.push(e.props.name),0===t?e:xe(e))))):(0,a.h)(d.Z,{onResize:this.handleNavResize},{default:()=>(0,a.h)("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(n)?(0,a.h)(u,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:y}):(0,a.h)("div",{class:`${e}-tabs-nav-y-scroll`},y()))}),o&&r&&h?me(r,!0):null,(0,K.K9)(p,(t=>t&&(0,a.h)("div",{class:`${e}-tabs-nav__suffix`},t)))),g&&(this.animated?(0,a.h)("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},he(f,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):he(f,this.mergedValue,this.renderedNames)))}});function he(e,t,n,o,r,i,l){const d=[];return e.forEach((e=>{const{name:o,displayDirective:r,"display-directive":i}=e.props,l=e=>r===e||i===e,c=t===o;if(void 0!==e.key&&(e.key=o),c||l("show")||l("show:lazy")&&n.has(o)){n.has(o)||n.add(o);const t=!l("if");d.push(t?(0,a.wy)(e,[[s.F8,c]]):e)}})),l?(0,a.h)(s.W3,{name:`${l}-transition`,onBeforeLeave:o,onEnter:r,onAfterEnter:i},{default:()=>d}):d}function me(e,t){return(0,a.h)(pe,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:"object"===typeof e&&e.disabled})}function xe(e){const t=(0,a.Ho)(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function ye(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}var we=n(631),Ce=n(4786),Se=n(5410),ke=n(4881),Be=n(9320),Pe=n(5140);const ze=e=>((0,a.dD)("data-v-0b51b9d3"),e=e(),(0,a.Cn)(),e),Te={class:"resource-list-container"},Le={class:"category"},$e={class:"tabs"},Re={key:1,class:"video-wrap"},je=ze((()=>(0,a._)("video",{controls:""},[(0,a._)("source",{src:"https://www.runoob.com/try/demo_source/movie.mp4",type:"video/mp4"}),(0,a.Uk)(" 您的浏览器不支持Video标签。 ")],-1))),_e={class:"video-info"},Me=ze((()=>(0,a._)("div",{class:"name"},"Mario.mp4",-1))),We=ze((()=>(0,a._)("div",{class:"time"},"15:30:25 | 2.43M",-1))),He={class:"like"},Ae=ze((()=>(0,a._)("div",null,"1988",-1)));var Ve={__name:"ResourceList",setup(e){(0,r.yj)();const t=(0,r.tv)(),n=(0,o.iH)(null),s=[{id:0},{id:1}];n.value=s[0];const d={textColor:"#ed3939",borderColor:"#ed3939"};function c(){t.push("/m/resource")}const b=[{isLike:(0,o.iH)(!1),id:0,type:0,name:"Favorite",items:[{id:10,url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},{id:10,url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},{id:10,url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},{id:10,url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},{id:10,url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},{id:10,url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},{id:10,url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},{id:10,url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},{id:10,url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"}]},{isLike:(0,o.iH)(!1),id:1,type:1,name:"Videos",items:[{id:10,url:"https://www.runoob.com/try/demo_source/movie.mp4"},{id:10,url:"https://www.runoob.com/try/demo_source/movie.mp4"},{id:10,url:"https://www.runoob.com/try/demo_source/movie.mp4"},{id:10,url:"https://www.runoob.com/try/demo_source/movie.mp4"},{id:10,url:"https://www.runoob.com/try/demo_source/movie.mp4"}]},{isLike:(0,o.iH)(!1),id:2,type:2,name:"Photos",items:[{id:10,url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},{id:10,url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},{id:10,url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},{id:10,url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},{id:10,url:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"}]}];function p(e){t.push({path:"/m/resource/detail",query:{list:(0,Se.stringify)(e)}})}async function u(e){e.isLike=!0}async function f(e){await(0,Pe.Nk)({resource_id:e.resource_id})}return(e,t)=>((0,a.wg)(),(0,a.iD)("div",Te,[(0,a.Wm)((0,o.SU)(i.Z),{title:"Game",onBack:c}),(0,a._)("div",Le,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(s,(t=>(0,a.Wm)((0,o.SU)(l.ZP),{size:"small",round:"",color:n.value.id===t.id?d:void 0,onClick:n=>e.selectCatogry(t)},{default:(0,a.w5)((()=>[(0,a.Uk)(" Game1 ")])),_:2},1032,["color","onClick"]))),64))]),(0,a._)("div",$e,[(0,a.Wm)((0,o.SU)(ge),{type:"line","default-value":"Videos",animated:""},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(b,(e=>(0,a.Wm)((0,o.SU)(ce),{name:e.name,tab:e.name,onClick:t=>p(e)},{default:(0,a.w5)((()=>[0===e.type?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(e.items,(e=>((0,a.wg)(),(0,a.j4)((0,o.SU)(we.Z),{"preview-disabled":"",width:"50",class:"poster",src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"})))),256)):1===e.type?((0,a.wg)(),(0,a.iD)("div",Re,[je,(0,a._)("div",_e,[Me,We,(0,a._)("div",He,[e.isLike.value?((0,a.wg)(),(0,a.j4)((0,o.SU)(Ce.g),{key:0,size:"20",color:"red",onClick:t=>f(e)},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(ke.Z))])),_:2},1032,["onClick"])):((0,a.wg)(),(0,a.j4)((0,o.SU)(Ce.g),{key:1,size:"20",onClick:t=>u(e)},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(Be.Z))])),_:2},1032,["onClick"])),Ae])])])):2===e.type?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:2},(0,a.Ko)(e.items,(e=>((0,a.wg)(),(0,a.j4)((0,o.SU)(we.Z),{"preview-disabled":"",width:"50",class:"poster",src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"})))),256)):(0,a.kq)("",!0)])),_:2},1032,["name","tab","onClick"]))),64))])),_:1})])]))}},Ze=n(89);const Ee=(0,Ze.Z)(Ve,[["__scopeId","data-v-0b51b9d3"]]);var Fe=Ee}}]);
//# sourceMappingURL=965.3996a9e4.js.map