import{a as h,r as _,o as m,w as f,c as a,e as n,f as s,u as g,k as c,v as d,l as v,j as w,z as b}from"./index.013906be.js";const y={class:"home-background"},k={class:"container mt-3"},L={class:"columns"},N={key:0,class:"column is-12 is-desktop"},S=s("h1",{class:"title is-1"},"Login",-1),q={class:"field"},V=s("label",{class:"label"},"Email",-1),A={class:"control has-icons-left has-icons-right"},B=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-envelope"})],-1),M=s("span",{class:"icon is-small is-right"},null,-1),U=s("p",{class:"help email"},null,-1),$={class:"field"},C=s("label",{class:"label"},"Password",-1),E={class:"control has-icons-left has-icons-right"},W=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-user"})],-1),j=s("span",{class:"icon is-small is-right"},null,-1),z=s("p",{class:"help password"},null,-1),D={class:"field is-grouped"},P={class:"control"},G={__name:"Login",setup(T){const l=h();let i=_(l.isAuth);m(()=>{if(window.location.href.split("/")[4]!="login"&&window.location.href.split("/")[4]!="signup"){const o=document.querySelector("#app");o.className+=" no-before"}else{const o=document.querySelector("#app");o.className=""}}),f(l,()=>{i.value=l.isAuth});const r=async(o,e)=>{const t=await b(o,e);if(t.data.user!=null){i.value=!0,l.login(t.data.user.id,o,e);const p=window.location.hostname,u=location.port;window.location.replace(`http://${p}:${u}/task-app/`)}else alert("No se ha podido hacer login")};return(o,e)=>(a(),n("div",y,[s("div",k,[s("div",L,[g(i)?w("",!0):(a(),n("div",N,[S,s("form",null,[s("div",q,[V,s("div",A,[c(s("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.emailLogin=t),class:"input",type:"email",placeholder:"Write your lovely email",required:""},null,512),[[d,o.emailLogin]]),B,M]),U]),s("div",$,[C,s("div",E,[c(s("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.passwordLogin=t),class:"input",type:"password",placeholder:"Write your best password",required:""},null,512),[[d,o.passwordLogin]]),W,j]),z]),s("div",D,[s("div",P,[s("button",{type:"submit",class:"button is-link",onClick:e[2]||(e[2]=v(t=>r(o.emailLogin,o.passwordLogin),["prevent"]))},"Submit")])])])]))])])]))}};export{G as default};
