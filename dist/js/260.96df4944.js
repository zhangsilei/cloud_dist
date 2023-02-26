"use strict";(self["webpackChunkcloud_dist"]=self["webpackChunkcloud_dist"]||[]).push([[260],{21209:function(e,t,r){var n=r(73396);const o={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"},l=(0,n._)("path",{d:"M443.5,420.2L336.7,312.4c20.9-26.2,33.5-59.4,33.5-95.5c0-84.5-68.5-153-153.1-153S64,132.5,64,217s68.5,153,153.1,153\n\tc36.6,0,70.1-12.8,96.5-34.2l106.1,107.1c3.2,3.4,7.6,5.1,11.9,5.1c4.1,0,8.2-1.5,11.3-4.5C449.5,437.2,449.7,426.8,443.5,420.2z\n\t M217.1,337.1c-32.1,0-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-84.9c0-32.1,12.5-62.3,35.2-84.9c22.7-22.7,52.9-35.2,85-35.2\n\tc32.1,0,62.3,12.5,85,35.2c22.7,22.7,35.2,52.9,35.2,84.9c0,32.1-12.5,62.3-35.2,84.9C279.4,324.6,249.2,337.1,217.1,337.1z"},null,-1),a=[l];t["Z"]=(0,n.aZ)({name:"IosSearch",render:function(e,t){return(0,n.wg)(),(0,n.iD)("svg",o,a)}})},31169:function(e,t,r){r.r(t),r.d(t,{default:function(){return ie}});r(57658),r(30541);var n=r(73396),o=r(44870),l=r(87139),a=r(74786),i=r(68107),s=r(99420),c=r(96455),u={fontWeightActive:"400"},d=r(78308);const m=e=>{const{fontSize:t,textColor3:r,textColor2:n,borderRadius:o,buttonColor2Hover:l,buttonColor2Pressed:a}=e;return Object.assign(Object.assign({},u),{fontSize:t,itemLineHeight:"1.25",itemTextColor:r,itemTextColorHover:n,itemTextColorPressed:n,itemTextColorActive:n,itemBorderRadius:o,itemColorHover:l,itemColorPressed:a,separatorColor:r})},v={name:"Breadcrumb",common:d.Z,self:m};var p=v,h=r(30411),g=(0,h.cB)("breadcrumb","\n white-space: nowrap;\n cursor: default;\n line-height: var(--n-item-line-height);\n",[(0,h.c)("ul","\n list-style: none;\n padding: 0;\n margin: 0;\n "),(0,h.c)("a","\n color: inherit;\n text-decoration: inherit;\n "),(0,h.cB)("breadcrumb-item","\n font-size: var(--n-font-size);\n transition: color .3s var(--n-bezier);\n display: inline-flex;\n align-items: center;\n ",[(0,h.cB)("icon","\n font-size: 18px;\n vertical-align: -.2em;\n transition: color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n "),(0,h.c)("&:not(:last-child)",[(0,h.cM)("clickable",[(0,h.cE)("link","\n cursor: pointer;\n ",[(0,h.c)("&:hover","\n background-color: var(--n-item-color-hover);\n "),(0,h.c)("&:active","\n background-color: var(--n-item-color-pressed); \n ")])])]),(0,h.cE)("link","\n padding: 4px;\n border-radius: var(--n-item-border-radius);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n position: relative;\n ",[(0,h.c)("&:hover","\n color: var(--n-item-text-color-hover);\n ",[(0,h.cB)("icon","\n color: var(--n-item-text-color-hover);\n ")]),(0,h.c)("&:active","\n color: var(--n-item-text-color-pressed);\n ",[(0,h.cB)("icon","\n color: var(--n-item-text-color-pressed);\n ")])]),(0,h.cE)("separator","\n margin: 0 8px;\n color: var(--n-separator-color);\n transition: color .3s var(--n-bezier);\n user-select: none;\n -webkit-user-select: none;\n "),(0,h.c)("&:last-child",[(0,h.cE)("link","\n font-weight: var(--n-font-weight-active);\n cursor: unset;\n color: var(--n-item-text-color-active);\n ",[(0,h.cB)("icon","\n color: var(--n-item-text-color-active);\n ")]),(0,h.cE)("separator","\n display: none;\n ")])])]),f=r(11295);const b=(0,f.U)("n-breadcrumb"),w=Object.assign(Object.assign({},i.Z.props),{separator:{type:String,default:"/"}});var _=(0,n.aZ)({name:"Breadcrumb",props:w,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=(0,s.Z)(e),l=(0,i.Z)("Breadcrumb","-breadcrumb",g,p,e,t);(0,n.JJ)(b,{separatorRef:(0,o.Vh)(e,"separator"),mergedClsPrefixRef:t});const a=(0,n.Fl)((()=>{const{common:{cubicBezierEaseInOut:e},self:{separatorColor:t,itemTextColor:r,itemTextColorHover:n,itemTextColorPressed:o,itemTextColorActive:a,fontSize:i,fontWeightActive:s,itemBorderRadius:c,itemColorHover:u,itemColorPressed:d,itemLineHeight:m}}=l.value;return{"--n-font-size":i,"--n-bezier":e,"--n-item-text-color":r,"--n-item-text-color-hover":n,"--n-item-text-color-pressed":o,"--n-item-text-color-active":a,"--n-separator-color":t,"--n-item-color-hover":u,"--n-item-color-pressed":d,"--n-item-border-radius":c,"--n-font-weight-active":s,"--n-item-line-height":m}})),u=r?(0,c.F)("breadcrumb",void 0,a,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:a,themeClass:null===u||void 0===u?void 0:u.themeClass,onRender:null===u||void 0===u?void 0:u.onRender}},render(){var e;return null===(e=this.onRender)||void 0===e||e.call(this),(0,n.h)("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},(0,n.h)("ul",null,this.$slots))}}),y=r(34092),C=r(55544);const k=C.j?window:null,x=(e=k)=>{const t=()=>{const{hash:t,host:r,hostname:n,href:o,origin:l,pathname:a,port:i,protocol:s,search:c}=(null===e||void 0===e?void 0:e.location)||{};return{hash:t,host:r,hostname:n,href:o,origin:l,pathname:a,port:i,protocol:s,search:c}},r=()=>{l.value=t()},l=(0,o.iH)(t());return(0,n.bv)((()=>{e&&(e.addEventListener("popstate",r),e.addEventListener("hashchange",r))})),(0,n.Ah)((()=>{e&&(e.removeEventListener("popstate",r),e.removeEventListener("hashchange",r))})),l},S={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function};var U=(0,n.aZ)({name:"BreadcrumbItem",props:S,setup(e,{slots:t}){const r=(0,n.f3)(b,null);if(!r)return()=>null;const{separatorRef:o,mergedClsPrefixRef:l}=r,a=x(),i=(0,n.Fl)((()=>e.href?"a":"span")),s=(0,n.Fl)((()=>a.value.href===e.href?"location":null));return()=>{const{value:r}=l;return(0,n.h)("li",{class:[`${r}-breadcrumb-item`,e.clickable&&`${r}-breadcrumb-item--clickable`]},(0,n.h)(i.value,{class:`${r}-breadcrumb-item__link`,"aria-current":s.value,href:e.href,onClick:e.onClick},t),(0,n.h)("span",{class:`${r}-breadcrumb-item__separator`,"aria-hidden":"true"},(0,y.gI)(t.separator,(()=>{var t;return[null!==(t=e.separator)&&void 0!==t?t:o.value]}))))}}}),z=r(33008),Z=r(55393),P=r(5941),H=r(94570),D=r(9518),W=r(85210),B=r(92097),T=r(21209);const L={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Y=(0,n._)("path",{d:"M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z",fill:"currentColor"},null,-1),R=[Y];var j=(0,n.aZ)({name:"ArrowBackIosFilled",render:function(e,t){return(0,n.wg)(),(0,n.iD)("svg",L,R)}}),F=r(18244),E=r(55447),V=r(20065),q=r(59684),M=r(11835),I=r(43612),O=r(36797),A=r.n(O),K=r(22483);const $=e=>((0,n.dD)("data-v-7e1a5f2e"),e=e(),(0,n.Cn)(),e),J={class:"resource-container"},N={class:"top"},G=$((()=>(0,n._)("div",null,"返回",-1))),Q={key:0,class:"sort"},X=$((()=>(0,n._)("span",{class:"label"},"排序方式",-1))),ee={class:"content"},te={style:{display:"flex"}},re=["src"],ne={key:0};var oe={__name:"Resource",setup(e){const t=(0,V.oR)(),r=(0,K.tv)(),i="Favorite",s="MyFavorite",c="Videos",u="Photos",d="",m="like_num",v=(0,o.iH)(null),p=(0,o.qj)({page_num:1,page_size:10,category_id:null,key:null,order_by:d,resource_type:null}),h=(0,o.qj)({fileNames:["Videos","Photos"],breadcrumbs:[],dataList:[]}),g=(0,o.iH)(!1),f=(0,o.iH)(!1),b=(0,n.Fl)((()=>p.order_by===d)),w=(0,n.Fl)((()=>p.order_by===m)),y={textColor:"#ed3939",borderColor:"#ed3939"},C=(0,o.iH)(null),k=(0,o.iH)([]);function x(e){p.order_by=e,Y()}function S(e,t){const r=[...t];while(r.length){const t=r.shift();if(t.id===e)return t;r.push(...t.items||[])}}function L(e,t,r=[]){const n=S(t,e);return n?(r.unshift(n.name),n.parent_category_id?L(e,n.parent_category_id,r):r):r}async function Y(e){p.category_id=C.value,"Videos"===e?p.resource_type=1:"Photos"===e&&(p.resource_type=2);const t=await(0,q.rT)(p);h.dataList=t.resources||[],v.value=t.total%p.page_size?t.total/p.page_size:t.total/p.page_size+1,g.value=!1,f.value=!0}function R(){h.dataList=[],g.value=!0,f.value=!1}(0,n.YP)(t.state,(e=>{let t=e.selectedCategory.dirType?e.selectedCategory.category_id:e.selectedCategory.id;C.value=t,k.value=L(e.allCategories,t),g.value=e.selectedCategory.dirType,e.selectedCategory.dirType&&(e.selectedCategory.dirType===i||e.selectedCategory.dirType===s?(h.dataList=[],f.value=!1):e.selectedCategory.dirType===c?(g.value=!1,f.value=!0,Y("Videos")):e.selectedCategory.dirType===u&&(g.value=!1,f.value=!0,Y("Photos")))}));const O=(0,o.qj)({isShow:!1,picture_url:"",name:"",created_time:"",updated_time:"",breadcrumbCategory:[]});async function $(e){const r=await(0,q.DI)(e.id);O.picture_url=(0,M.Kn)(r.picture_url),O.name=r.name,O.breadcrumbCategory=L(t.state.allCategories,t.state.selectedCategory),O.created_time=A()(1e3*r.created_time).format("YYYY-MM-DD HH:mm:ss"),O.updated_time=A()(1e3*r.updated_time).format("YYYY-MM-DD HH:mm:ss"),O.isShow=!0}function oe(e){r.push({path:"/resource/detail",query:{...p,currentId:e.id}})}return(e,t)=>{const r=(0,n.up)("n-pagination");return(0,n.wg)(),(0,n.iD)("div",J,[(0,n._)("div",N,[f.value?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"back",onClick:R},[(0,n.Wm)((0,o.SU)(a.g),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(j))])),_:1}),G])):(0,n.kq)("",!0),(0,n.Wm)((0,o.SU)(_),{separator:">"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(k.value,((e,t)=>((0,n.wg)(),(0,n.j4)((0,o.SU)(U),null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e),1)])),_:2},1024)))),256))])),_:1}),f.value?((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Wm)((0,o.SU)(z.Z),{round:"",clearable:"",placeholder:"Search",value:p.key,"onUpdate:value":t[0]||(t[0]=e=>p.key=e)},{prefix:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(a.g),{component:(0,o.SU)(T.Z)},null,8,["component"])])),_:1},8,["value"]),(0,n.Wm)((0,o.SU)(Z.ZP),{onClick:Y,style:{"margin-left":"10px"}},{default:(0,n.w5)((()=>[(0,n.Uk)("查询")])),_:1})],64)):(0,n.kq)("",!0)]),f.value?((0,n.wg)(),(0,n.iD)("div",Q,[(0,n.Wm)((0,o.SU)(P.Z),null,{default:(0,n.w5)((()=>[X,(0,n.Wm)((0,o.SU)(H.ZP),{size:"small",round:"",color:(0,o.SU)(b)?y:void 0,onClick:t[1]||(t[1]=e=>x(d))},{default:(0,n.w5)((()=>[(0,n.Uk)(" 默认 ")])),_:1},8,["color"]),(0,n.Wm)((0,o.SU)(H.ZP),{size:"small",round:"",color:(0,o.SU)(w)?y:void 0,onClick:t[2]||(t[2]=e=>x(m))},{default:(0,n.w5)((()=>[(0,n.Uk)(" 人气 ")])),_:1},8,["color"])])),_:1})])):(0,n.kq)("",!0),(0,n._)("div",ee,[(0,n.Wm)((0,o.SU)(D.Z),{"x-gap":8,"y-gap":8,cols:8},{default:(0,n.w5)((()=>[g.value?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(h.fileNames,((e,t)=>((0,n.wg)(),(0,n.j4)((0,o.SU)(W.ZP),{key:t},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(F.Z),{"file-name":e,onClick:t=>Y(e)},null,8,["file-name","onClick"])])),_:2},1024)))),128)):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(h.dataList,((e,t)=>((0,n.wg)(),(0,n.j4)((0,o.SU)(W.ZP),{key:t},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(E.Z),{"file-name":e.name,"like-num":e.like_num,poster:(0,o.SU)(M.Kn)(e.picture_url),authority:!e.authority,onOnDetail:t=>$(e),onClick:t=>oe(e)},null,8,["file-name","like-num","poster","authority","onOnDetail","onClick"])])),_:2},1024)))),128))])),_:1}),(0,n.Wm)(r,{style:{"justify-content":"flex-end"},page:p.page_num,"onUpdate:page":t[3]||(t[3]=e=>p.page_num=e),"page-count":v.value},null,8,["page","page-count"])]),(0,n.Wm)((0,o.SU)(I.Z),{modelValue:O.isShow,"onUpdate:modelValue":t[4]||(t[4]=e=>O.isShow=e),title:"详细信息",isShowFooter:!1},{default:(0,n.w5)((()=>[(0,n._)("div",te,[(0,n._)("div",null,[(0,n._)("img",{style:{width:"250px","margin-right":"15px"},src:O.picture_url},null,8,re)]),(0,n._)("div",null,[(0,n.Wm)((0,o.SU)(B.ZP),{"label-placement":"left",label:"名称"},{default:(0,n.w5)((()=>[(0,n._)("div",null,(0,l.zw)(O.name),1)])),_:1}),(0,n.Wm)((0,o.SU)(B.ZP),{"label-placement":"left",label:"位置"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(k.value,((e,t)=>((0,n.wg)(),(0,n.iD)("span",null,[(0,n.Uk)((0,l.zw)(e)+" ",1),t!==k.value.length-1?((0,n.wg)(),(0,n.iD)("span",ne,"/")):(0,n.kq)("",!0)])))),256))])),_:1}),(0,n.Wm)((0,o.SU)(B.ZP),{"label-placement":"left",label:"上传时间"},{default:(0,n.w5)((()=>[(0,n._)("div",null,(0,l.zw)(O.created_time),1)])),_:1}),(0,n.Wm)((0,o.SU)(B.ZP),{"label-placement":"left",label:"最后修改时间"},{default:(0,n.w5)((()=>[(0,n._)("div",null,(0,l.zw)(O.updated_time),1)])),_:1})])])])),_:1},8,["modelValue"])])}}},le=r(40089);const ae=(0,le.Z)(oe,[["__scopeId","data-v-7e1a5f2e"]]);var ie=ae}}]);
//# sourceMappingURL=260.96df4944.js.map