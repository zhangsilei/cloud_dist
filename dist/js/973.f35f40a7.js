"use strict";(self["webpackChunkcloud_dist"]=self["webpackChunkcloud_dist"]||[]).push([[973],{34531:function(t,e,a){a.d(e,{HZ:function(){return r},bX:function(){return c},uN:function(){return o}});var n=a(37245);function o(t){return(0,n.Z)({url:"/activation-codes",method:"get",params:t})}function c(t){return(0,n.Z)({url:"/activation-codes",method:"post",data:t})}function r(t){return(0,n.Z)({url:`/activation-codes/${t}`,method:"put"})}},35465:function(t,e,a){a.d(e,{Z:function(){return u}});var n=a(73396),o=a(44870),c=a(43752),r={__name:"PageHeader",props:{title:{required:!1,type:String,default:""}},emits:["back"],setup(t,{emit:e}){function a(){e("back")}return(e,r)=>((0,n.wg)(),(0,n.j4)((0,o.SU)(c.Z),{style:{"border-bottom":"1px solid #eee"},title:t.title,onBack:a},{extra:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"extra")])),_:3},8,["title"]))}};const i=r;var u=i},1973:function(t,e,a){a.r(e),a.d(e,{default:function(){return Z}});var n=a(73396),o=a(44870),c=a(34531),r=a(24120),i=a(83273),u=a(92097),l=a(33008),d=a(55393),s=a(22483),f=a(35465);const m={class:"activation-container"};var v={__name:"Activation",setup(t){const e=(0,s.tv)(),{message:a}=(0,r.M)(["message"]);function v(){e.go(-1)}const p=(0,o.iH)(null),g=(0,o.qj)({code:null}),Z={code:{required:!0,trigger:["blur","input"],message:"请输入激活码"}};function _(){p.value?.validate((async t=>{if(!t)try{await(0,c.HZ)(g.code),a.success("Activation Completed"),e.go(-1)}catch(n){a.error("Invalid activation code!")}})).catch()}return(t,e)=>((0,n.wg)(),(0,n.iD)("div",m,[(0,n.Wm)((0,o.SU)(f.Z),{title:"Activation code",onBack:v,style:{padding:"0 10px"}}),(0,n.Wm)((0,o.SU)(i.Z),{class:"form",ref_key:"formRef",ref:p,model:g,rules:Z,"show-require-mark":!1},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(u.ZP),{label:"Please enter an activation code.",path:"code"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(l.Z),{value:g.code,"onUpdate:value":e[0]||(e[0]=t=>g.code=t),placeholder:"activation code"},null,8,["value"])])),_:1}),(0,n.Wm)((0,o.SU)(u.ZP),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(d.ZP),{class:"submit",block:"",color:"rgb(237, 56, 56)",onClick:_},{default:(0,n.w5)((()=>[(0,n.Uk)(" Confirm ")])),_:1})])),_:1})])),_:1},8,["model"])]))}},p=a(40089);const g=(0,p.Z)(v,[["__scopeId","data-v-1eac1f13"]]);var Z=g}}]);
//# sourceMappingURL=973.f35f40a7.js.map