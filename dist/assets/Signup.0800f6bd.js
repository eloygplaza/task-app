import{a as u,r as h,o as f,c as a,e as n,f as s,k as i,v as t,l as m,j as _,y as g}from"./index.013906be.js";const y={class:"home-background"},v={class:"container mt-3"},w={class:"columns"},b={key:0,class:"column 12 is-desktop"},S=s("h1",{class:"title is-1"},"Signup",-1),k={class:"field"},V=s("label",{class:"label"},"Email",-1),C={class:"control has-icons-left has-icons-right"},N=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-envelope"})],-1),P=s("span",{class:"icon is-small is-right"},null,-1),q=s("p",{class:"help email"},null,-1),B={class:"field"},M=s("label",{class:"label"},"Password",-1),U={class:"control has-icons-left has-icons-right"},W=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-user"})],-1),A=s("span",{class:"icon is-small is-right"},null,-1),E=s("p",{class:"help password"},null,-1),j={class:"field"},D=s("label",{class:"label"},"Confirm Password",-1),L={class:"control has-icons-left has-icons-right"},T=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-user"})],-1),$=s("span",{class:"icon is-small is-right"},null,-1),z=s("p",{class:"help password"},null,-1),F={class:"field is-grouped"},G={class:"control"},J={__name:"Signup",setup(H){const c=u(),d=h(c.isAuth);f(()=>{if(console.log(window.location.href.split("/")),window.location.href.split("/")[4]!="login"&&window.location.href.split("/")[4]!="signup"){const o=document.querySelector("#app");o.className+=" no-before"}else{const o=document.querySelector("#app");o.className=""}});const r=async(o,e,l)=>{if(console.log(l),typeof e>"u"&&typeof l>"u")alert("Password input is empty");else if(e===l&&typeof e<"u"&&typeof l<"u"){const p=await g(o,e);console.log(p),alert("\xA1We are almost there! please, go to your email inbox and confirm your email address")}else alert("Passwords are not equal")};return(o,e)=>(a(),n("div",y,[s("div",v,[s("div",w,[d.value?_("",!0):(a(),n("div",b,[S,s("form",null,[s("div",k,[V,s("div",C,[i(s("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>o.emailSignup=l),class:"input",type:"email",placeholder:"Write your lovely email"},null,512),[[t,o.emailSignup]]),N,P]),q]),s("div",B,[M,s("div",U,[i(s("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>o.passwordSignup=l),class:"input",type:"password",placeholder:"Write your best password"},null,512),[[t,o.passwordSignup]]),W,A]),E]),s("div",j,[D,s("div",L,[i(s("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>o.passwordSignupConfirm=l),class:"input",type:"password",placeholder:"Confirm your password"},null,512),[[t,o.passwordSignupConfirm]]),T,$]),z]),s("div",F,[s("div",G,[s("button",{type:"submit",class:"button is-link",onClick:e[3]||(e[3]=m(l=>r(o.emailSignup,o.passwordSignup,o.passwordSignupConfirm),["prevent"]))},"Submit")])])])]))])])]))}};export{J as default};