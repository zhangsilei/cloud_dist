"use strict";(self["webpackChunkcloud_dist"]=self["webpackChunkcloud_dist"]||[]).push([[334],{65334:function(e,a,l){l.r(a),l.d(a,{default:function(){return S}});var t=l(73396),n=l(44870),u=l(24120),i=l(5941),o=l(92097),s=l(33008),c=l(55393),d=l(99436),r=l(26429),m=l(43612),p=l(32900);l(11835);const v=e=>((0,t.dD)("data-v-223d3244"),e=e(),(0,t.Cn)(),e),f={class:"users-manage-container"},_={style:{display:"flex","flex-direction":"column"}},g=v((()=>(0,t._)("div",null,"确定重置密码吗？",-1))),y=v((()=>(0,t._)("div",null,"重置后新密码为：123456",-1)));var U={__name:"UsersManage",setup(e){function a(){Z.value.page_num=1,H()}function l(){Z.value.key=null}let v=(0,n.iH)([]),U=(0,n.iH)(!0),k=(0,n.iH)(0),w=(0,n.iH)(!1),S=(0,n.iH)(null);const h=(0,n.iH)(0),Z=(0,n.iH)({page_num:1,page_size:10,key:null}),b=[{title:"用户ID",key:"id"},{title:"用户名",key:"user_name"},{title:"激活码数量",key:"activation_code_num",render(e){return(0,t.h)("span",{style:{color:"rgb(24, 160, 88)",cursor:"pointer"}},e.activation_code_num)}},{title:"用户类型",key:"user_type"},{title:"操作",key:"action",render(e){return(0,t.h)("div",{style:{color:"#18a058",cursor:"pointer"}},[(0,t.h)("span",{onClick:()=>{S.value=e,w.value=!0}},"重置密码")])}}];(0,t.bv)((()=>{const e=58,a=47,l=40,t=20;k.value=document.querySelector(".users-manage-container").offsetHeight-e-a-l-t}));const{message:W}=(0,u.M)(["message"]);async function H(){const e=await(0,p.lE)(Z.value);v.value=e.users||[],U.value=!1,h.value=e.total}function C(e){Z.value.page_num=e,H()}async function x(){await(0,p.Nq)(S.value.id,{password:"123456"}),w.value=!1,W.success("操作成功！")}return H(),(e,u)=>((0,t.wg)(),(0,t.iD)("div",f,[(0,t.Wm)((0,n.SU)(i.Z),{class:"filter"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,n.SU)(o.ZP),{"label-placement":"left",label:"关键字"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,n.SU)(s.Z),{value:Z.value.key,"onUpdate:value":u[0]||(u[0]=e=>Z.value.key=e),placeholder:"用户名/用户ID/激活码",clearable:""},null,8,["value"])])),_:1}),(0,t.Wm)((0,n.SU)(o.ZP),{"label-placement":"left"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,n.SU)(c.ZP),{type:"primary",onClick:a},{default:(0,t.w5)((()=>[(0,t.Uk)(" 查询 ")])),_:1})])),_:1}),(0,t.Wm)((0,n.SU)(o.ZP),{"label-placement":"left"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,n.SU)(c.ZP),{onClick:l},{default:(0,t.w5)((()=>[(0,t.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1}),(0,t._)("div",_,[(0,t.Wm)((0,n.SU)(d.Z),{"max-height":(0,n.SU)(k),loading:(0,n.SU)(U),columns:b,data:(0,n.SU)(v),bordered:!1},null,8,["max-height","loading","data"]),(0,t.Wm)((0,n.SU)(r.Z),{page:Z.value.page_num,"onUpdate:page":u[1]||(u[1]=e=>Z.value.page_num=e),"item-count":h.value,"on-update:page":C,style:{"align-self":"flex-end","margin-top":"10px"}},null,8,["page","item-count"])]),(0,t.Wm)(m.Z,{modelValue:(0,n.SU)(w),"onUpdate:modelValue":u[2]||(u[2]=e=>(0,n.dq)(w)?w.value=e:w=e),title:"重置密码",width:300,onOnConfirm:x},{default:(0,t.w5)((()=>[g,y])),_:1},8,["modelValue"])]))}},k=l(40089);const w=(0,k.Z)(U,[["__scopeId","data-v-223d3244"]]);var S=w}}]);
//# sourceMappingURL=334.53ca16a6.js.map