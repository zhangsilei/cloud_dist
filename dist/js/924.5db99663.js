"use strict";(self["webpackChunkcloud_dist"]=self["webpackChunkcloud_dist"]||[]).push([[924],{12924:function(e,i,a){a.r(i),a.d(i,{default:function(){return U}});a(57658);var u=a(73396),l=a(44870),t=a(43752),r=a(5941),n=a(74786),o=a(44881),s=a(59320),c=a(45140),d=a(22483),v=a(95410),_=a(28040),y=a(59684),p=a(10796),f=a(137),w=a.n(f);const g={class:"resource-detail-container"},k=["id"],h=["src"];var m={__name:"ResourceDetail",setup(e){const i=(0,d.tv)(),a=(0,d.yj)(),f=(0,v.parse)(a.query),m=(0,l.iH)(0),S=(0,l.iH)(0),q=(0,l.iH)(null),U=(0,l.iH)([]),j=(0,l.iH)(1),D=(0,u.Fl)((()=>S.value+"/"+m.value));async function H(){a.query.isFromFavorite?z():b()}async function b(){const e=await(0,y.rT)({page_num:j.value,page_size:f.page_size,resource_type:f.resource_type,category_id:f.category_id,order_by:f.order_by,key:f.key}),i=e.resources||[];if(U.value.push(...i),j.value<a.query.page_num)return j.value++,void b();m.value=e.total,U.value.find(((e,i)=>{e.id==a.query.id&&(S.value=i+1,q.value=e)}))}async function z(){const e=await(0,c.P$)({page_num:j.value,page_size:f.page_size,resource_type:f.resource_type,favorite_type:f.favorite_type}),i=(e.likes||[]).map((e=>({...e.resource,is_like:e.is_like,has_permissions:e.has_permissions})));if(U.value.push(...i),j.value<a.query.page_num)return j.value++,void z();m.value=e.total,U.value.find(((e,i)=>{e.id==a.query.id&&(S.value=i+1,q.value=e)}))}function I(){if(w().isSupported()){const e=new(w()),i=document.querySelector(`#video${q.value.id}`);e.loadSource((0,p.Kn)(q.value.video_url)),e.attachMedia(i),i.play()}else console.warn("当前浏览器不支持Hls.js")}function C(e){e.slideTo(S.value-1)}function F(e){Z(e.realIndex).then((()=>{S.value=e.realIndex+1,q.value=U.value[e.realIndex]}))}function Z(e){const i=a.query.isFromFavorite;return new Promise((a=>{e===U.value.length-1&&U.value.length<m.value?(j.value++,i?z().then((()=>a())):b().then((()=>a()))):a()}))}async function x(){if(!q.value.is_like)try{await(0,c.mT)({resource_id:q.value.id}),q.value.is_like=!0}catch(e){}}async function K(){if(q.value.is_like)try{await(0,c.Nk)({resource_id:q.value.id}),q.value.is_like=!1}catch(e){}}function P(){i.go(-1)}return(0,u.YP)(q,(e=>{"VIDEO"===e.resource_type&&(0,u.Y3)((()=>{I()}))})),H(),(e,i)=>((0,u.wg)(),(0,u.iD)("div",g,[(0,u.Wm)((0,l.SU)(t.Z),{title:(0,l.SU)(D),onBack:P},{extra:(0,u.w5)((()=>[q.value?((0,u.wg)(),(0,u.j4)((0,l.SU)(r.Z),{key:0},{default:(0,u.w5)((()=>[q.value.is_like?((0,u.wg)(),(0,u.j4)((0,l.SU)(n.g),{key:0,color:"red",size:"20",onClick:K},{default:(0,u.w5)((()=>[(0,u.Wm)((0,l.SU)(o.Z))])),_:1})):((0,u.wg)(),(0,u.j4)((0,l.SU)(n.g),{key:1,size:"20",onClick:x},{default:(0,u.w5)((()=>[(0,u.Wm)((0,l.SU)(s.Z))])),_:1}))])),_:1})):(0,u.kq)("",!0)])),_:1},8,["title"]),q.value?((0,u.wg)(),(0,u.j4)((0,l.SU)(_.tq),{key:0,direction:"vertical",class:"mySwiper",onSwiper:C,onSlideChange:F},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(U.value,(e=>((0,u.wg)(),(0,u.j4)((0,l.SU)(_.o5),null,{default:(0,u.w5)((()=>["VIDEO"===e.resource_type?((0,u.wg)(),(0,u.iD)("video",{key:0,id:"video"+e.id,muted:"",controls:"",controlsList:"nodownload",style:{width:"100%"}},null,8,k)):((0,u.wg)(),(0,u.iD)("img",{key:1,src:(0,l.SU)(p.Kn)(e.picture_url),style:{width:"auto",height:"100%"}},null,8,h))])),_:2},1024)))),256))])),_:1})):(0,u.kq)("",!0)]))}},S=a(40089);const q=(0,S.Z)(m,[["__scopeId","data-v-6a9ebc3b"]]);var U=q}}]);
//# sourceMappingURL=924.5db99663.js.map