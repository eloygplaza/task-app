import{d as L,a as M,r as m,w as v,o as U,g as B,b as $,c as l,e as r,f as s,h as g,i as T,j as h,k as _,v as p,l as b,F as y,m as j,u as w,n as x,p as q,q as E,s as R,t as W,x as z}from"./index.013906be.js";const H=L("taskStore",{state:()=>({tasks:[]}),persist:[{paths:["tasks"],storage:sessionStorage}],actions:{insertTask(n,i,e){this.tasks.data.unshift({id:this.tasks.data.at(0).id+1,created_at:Date.now,user_id:n,title:i,description:e,done:!1})},markAsDone(n){this.tasks.data.find(i=>{i.id==n&&(i.done=!i.done)})},deleteTask(n){const i=this.tasks.data.find(e=>e.id==n);this.tasks.data.splice(this.tasks.data.indexOf(i),1)},updateTitle(n,i){this.tasks.data.find(e=>{e.id==n&&(e.title=i)})},updateDescription(n,i){this.tasks.data.find(e=>{e.id==n&&(e.description=i)})}}}),O={key:0,class:"home-background is-flex is-align-items-center is-flex-direction-column"},P={class:"container"},G={class:"columns"},J={class:"column is-full mt-3"},K=s("p",{class:"title is-2 has-text-warning home-title"},"Boost productivity with Posty",-1),Q=s("p",{class:"mt-3 mb-3"},"The secure post-it sharing and productivity solution that employees and IT admins trust",-1),X={class:"is-flex is-align-items-center buttons"},Y=s("strong",null,"Sign up",-1),Z=s("strong",null,"Log in",-1),I={class:"container mt-3"},ss={class:"columns"},ts={key:0,class:"column is-6 mx-auto"},es=s("p",{class:"title is-3"},"New Task",-1),is={class:"field"},os=s("label",{class:"label"},"Title",-1),as={class:"control has-icons-left has-icons-right"},ns=s("span",{class:"icon is-small is-left"},[s("i",{class:"fa-solid fa-font"})],-1),ls=s("span",{class:"icon is-small is-right"},null,-1),cs=s("p",{class:"help email"},null,-1),ds={class:"field"},rs=s("label",{class:"label"},"Description",-1),us={class:"control has-icons-left has-icons-right"},hs=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-user"})],-1),_s=s("span",{class:"icon is-small is-right"},null,-1),ps=s("p",{class:"help password"},null,-1),ms={class:"field is-grouped"},fs={class:"control"},ks={key:0,class:"columns is-multiline"},vs=["onMouseover"],gs={class:"is-flex is-justify-content-center is-flex-direction-column"},Ts=["onFocusout","onUpdate:modelValue"],bs=["onFocusout","onUpdate:modelValue"],ys={class:"is-flex is-justify-content-center"},ws=["onClick"],xs=s("span",{class:"icon is-small"},[s("i",{class:"fa-solid fa-check"})],-1),Ds=[xs],Cs=["onClick"],Ss=s("span",{class:"icon is-small"},[s("i",{class:"fa-solid fa-trash-can"})],-1),As=[Ss],Vs={__name:"Home",setup(n){const i=M(),e=H(),f=m(!1),d=m(i.isAuth);let k=m();v(i,()=>{d.value=i.isAuth}),v(e,()=>{e.tasks.data=e.tasks.data}),U(async()=>{D()});const D=async()=>{k.value=await B(i.user.id),e.tasks=k.value,e.tasks.data.reverse(),f.value=!0},C=async(t,a,u)=>{await e.insertTask(t,a,u),await q(t,a,u)},S=t=>{e.markAsDone(t),E(t)},A=t=>{e.deleteTask(t),R(t)},N=(t,a)=>{e.updateTitle(t,a),W(t,a)},V=(t,a)=>{e.updateDescription(t,a),z(t,a)},F=t=>{};return(t,a)=>{const u=$("RouterLink");return l(),r(y,null,[d.value?h("",!0):(l(),r("div",O,[s("div",P,[s("div",G,[s("div",J,[K,Q,s("div",X,[d.value?h("",!0):(l(),g(u,{key:0,class:"button is-warning",to:{name:"signup"}},{default:T(()=>[Y]),_:1})),d.value?h("",!0):(l(),g(u,{key:1,class:"button is-light",to:{name:"login"}},{default:T(()=>[Z]),_:1}))])])])])])),s("div",I,[s("div",ss,[d.value?(l(),r("div",ts,[es,s("form",null,[s("div",is,[os,s("div",as,[_(s("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>t.titleNewTask=o),class:"input",type:"text",placeholder:"Write a title",required:""},null,512),[[p,t.titleNewTask]]),ns,ls]),cs]),s("div",ds,[rs,s("div",us,[_(s("textarea",{"onUpdate:modelValue":a[1]||(a[1]=o=>t.descriptionNewTask=o),class:"input",type:"text",placeholder:"Write a description",required:""},null,512),[[p,t.descriptionNewTask]]),hs,_s]),ps]),s("div",ms,[s("div",fs,[s("button",{type:"submit",class:"button is-link",onClick:a[2]||(a[2]=b(o=>C(w(i).user.id,t.titleNewTask,t.descriptionNewTask),["prevent"]))},"Submit")])])])])):h("",!0)]),f.value&&d.value?(l(),r("div",ks,[(l(!0),r(y,null,j(w(e).tasks.data,o=>(l(),r("div",{onMouseover:b(F,["self"]),class:"column is-4 box task-card"},[s("div",gs,[_(s("textarea",{onFocusout:c=>N(o.id,o.title),"onUpdate:modelValue":c=>o.title=c,class:"title titleCard is-6 noborder-textarea",style:x(o.done?"text-decoration: line-through;":"")},null,44,Ts),[[p,o.title]]),_(s("textarea",{onFocusout:c=>V(o.id,o.description),"onUpdate:modelValue":c=>o.description=c,class:"descriptionCard is-6 noborder-textarea",style:x(o.done?"text-decoration: line-through;":"")},null,44,bs),[[p,o.description]])]),s("div",ys,[s("button",{class:"button is-success is-outlined",onClick:c=>S(o.id)},Ds,8,ws),s("button",{class:"button is-danger is-outlined",onClick:c=>A(o.id)},As,8,Cs)])],40,vs))),256))])):h("",!0)])],64)}}};export{Vs as default};