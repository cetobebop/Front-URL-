import{a5 as h,ao as x,a6 as y,r as u,Y as Q,Z as R,$ as n,ai as i,a0 as s,am as m,a9 as d,a8 as S,a3 as k,an as B}from"./index.e35560c2.js";import{Q as P,a as q,u as E}from"./QForm.a5dec8dd.js";import{Q as I}from"./QPage.86ece640.js";import{u as N}from"./auth.d22821ca.js";const U={class:"col-sm-6 col-md-5"},T=i("h2",null,"Register",-1),M={__name:"RegisterPage",setup(j){const{vEmail:c,vPassword:p}=q(),{dialog:f}=E(),v=h(),{expiresIn:g,token:_}=x(v),{register:V}=N(),b=y(),l=u(""),o=u(""),t=u(!1),w=async()=>{try{t.value=!0;const e=await V(l.value,o.value);if(_.value=e==null?void 0:e.token,g.value=e==null?void 0:e.expiresIn,console.log(e),e[0])return f(e[0].msg);b.push("/")}catch(e){console.log(e)}finally{t.value=!1}};return(e,a)=>(Q(),R(I,{class:"row justify-center"},{default:n(()=>[i("div",U,[T,s(P,{onSubmit:B(w,["prevent"])},{default:n(()=>[s(m,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=r=>l.value=r),label:"Email",class:"q-mt-lg",rules:[d(c)]},null,8,["modelValue","rules"]),s(m,{type:"password",modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=r=>o.value=r),label:"Password",class:"q-mt-lg",rules:[d(p)]},null,8,["modelValue","rules"]),i("div",null,[s(S,{type:"submit",class:"q-mt-sm",disable:t.value},{default:n(()=>[k("Entrar")]),_:1},8,["disable"])])]),_:1},8,["onSubmit"])])]),_:1}))}};export{M as default};