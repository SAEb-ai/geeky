(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(19),i=a.n(c),r=(a(26),a(8)),l=a(7),o=a(2),j=(a.p,a(27),a(11)),d=a.n(j),m=a(14),u=a(10),b=a(12),p=(a(29),a(0));function x(e){var t,a,s=Object(o.f)(),c=Object(n.useState)(!1),i=Object(r.a)(c,2),l=i[0],j=i[1],x=Object(n.useState)({name:"",email:"",phone:"",password:""}),h=Object(r.a)(x,2),O=h[0],f=h[1],g=function(e){t=e.target.name,a=e.target.value,f(Object(b.a)(Object(b.a)({},O),{},Object(u.a)({},t,a)))},v=function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.push("/");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){localStorage.setItem("lists",JSON.stringify(O))}),[O]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"form-container",children:Object(p.jsxs)("form",{method:"POST",children:[Object(p.jsx)("h1",{className:"decorate-heading",children:"SignUp"}),Object(p.jsxs)("div",{className:"form-input",children:[Object(p.jsx)("i",{className:"fas fa-user undefined i-before"}),Object(p.jsx)("input",{type:"text",id:"text",name:"name",value:O.name,className:"form-input-tag",placeholder:"Enter your Name",onChange:g,required:!0})]}),Object(p.jsxs)("div",{className:"form-input",children:[Object(p.jsx)("i",{className:"far fa-envelope i-before"}),Object(p.jsx)("input",{type:"email",id:"email",name:"email",value:O.email,className:"form-input-tag",placeholder:"Enter your email",onChange:g,required:!0})]}),Object(p.jsxs)("div",{className:"form-input",children:[Object(p.jsx)("i",{className:"fas fa-phone-alt i-before"}),Object(p.jsx)("input",{type:"tel",id:"phone",name:"phone",value:O.phone,className:"form-input-tag",placeholder:"Enter your Phone Number",onChange:g,required:!0})]}),Object(p.jsxs)("div",{className:"form-input",children:[Object(p.jsx)("i",{class:"fas fa-user-tie i-before"}),Object(p.jsxs)("select",{className:"form-input-tag",name:"profession",onChange:g,children:[Object(p.jsx)("option",{selected:!0,disabled:!0,hidden:!0,children:"Select your profession"}),Object(p.jsx)("option",{value:"Sevicemen",children:"Servicemen"}),Object(p.jsx)("option",{value:"Housewife",children:"Housewife"}),Object(p.jsx)("option",{value:"Businessman",children:"Businessman"}),Object(p.jsx)("option",{value:"Others",children:"Others"})]})]}),Object(p.jsxs)("div",{className:"form-input",children:[Object(p.jsx)("i",{className:"fas fa-lock i-before"}),Object(p.jsx)("input",{type:l?"text":"password",id:"password",name:"password",value:O.password,className:"form-input-tag",placeholder:"Enter your password",onChange:g,required:!0}),Object(p.jsx)("i",{className:l?"fa fa-eye i-after":"fas fa-eye-slash i-after",onClick:function(){j(!l)}})]}),Object(p.jsx)("div",{className:"form-input",children:Object(p.jsx)("input",{type:"Submit",id:"submit",name:"SignUp",className:"form-sign-in-button",value:"SignUp",onClick:v})})]})})})}a(36);function h(e){var t,a,s=Object(n.useContext)(v),c=(s.state,s.dispatch),i=Object(o.f)(),l=Object(n.useState)(!1),j=Object(r.a)(l,2),x=j[0],h=j[1],O=Object(n.useState)({email:"",password:""}),f=Object(r.a)(O,2),g=f[0],N=f[1],y=function(e){t=e.target.name,a=e.target.value,N(Object(b.a)(Object(b.a)({},g),{},Object(u.a)({},t,a)))},S=function(){var e=Object(m.a)(d.a.mark((function e(t){var a,n,s,r,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!localStorage.getItem("lists")){e.next=19;break}if(a=JSON.parse(localStorage.getItem("lists")),n=a.email,s=a.password,g.email!==n||g.password!==s){e.next=16;break}return i.push("/"),c({type:"USER",payload:!0}),e.next=9,fetch("https://hoblist.com/api/movieList?category=movies&language=kannada&genre=all&sort=voting",{method:"POST"});case 9:return r=e.sent,e.next=12,r.json();case 12:l=e.sent,console.log(l),e.next=17;break;case 16:alert("Invalid Credentials");case 17:e.next=20;break;case 19:alert("Invalid Credentials");case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"form-container",children:Object(p.jsxs)("form",{action:"/sign-in",method:"POST",children:[Object(p.jsx)("h1",{className:"decorate-heading",children:"SignIn"}),Object(p.jsxs)("div",{className:"form-input",children:[Object(p.jsx)("i",{className:"far fa-envelope i-before"}),Object(p.jsx)("input",{type:"email",id:"email",name:"email",className:"form-input-tag",placeholder:"Enter your email",onChange:y,required:!0})]}),Object(p.jsxs)("div",{className:"form-input",children:[Object(p.jsx)("i",{className:"fas fa-lock i-before"}),Object(p.jsx)("input",{type:x?"text":"password",id:"email",name:"password",className:"form-input-tag",placeholder:"Enter your password",onChange:y,required:!0}),Object(p.jsx)("i",{className:x?"fa fa-eye i-after":"fas fa-eye-slash i-after",onClick:function(){h(!x)}})]}),Object(p.jsx)("div",{className:"form-input",children:Object(p.jsx)("input",{type:"submit",id:"signin",name:"SignIn",className:"form-sign-in-button",value:"SignIn",onClick:S})})]})})})}var O=function(e,t){return"USER"===t.type?t.payload:e};a(37);function f(){var e=Object(n.useContext)(v),t=e.state,a=(e.dispatch,function(){return t?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("nav",{children:Object(p.jsx)("ul",{className:"nav-ul",children:Object(p.jsx)("li",{className:"nav-li",children:Object(p.jsx)(l.b,{to:"/about",className:"nav-text-dec nav-li-font nav-item-hover",children:"About"})})})})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{className:"nav-ul",children:[Object(p.jsx)("li",{className:"nav-li",children:Object(p.jsx)(l.b,{to:"/sign-up",className:"nav-text-dec nav-li-font nav-item-hover-sign",children:"SignUp"})}),Object(p.jsx)("li",{className:"nav-li",children:Object(p.jsx)(l.b,{to:"/sign-in",className:"nav-text-dec nav-li-font nav-item-hover-sign",children:"SignIn"})})]})})})});return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(a,{})})}a(38);function g(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"design-0",children:[Object(p.jsxs)("div",{className:"design-1",children:[Object(p.jsx)("p",{className:"design-2",children:"Company: "}),Object(p.jsx)("p",{className:"design-3",children:"Geeksynergy Technologies Private Limited"})]}),Object(p.jsxs)("div",{className:"design-1",children:[Object(p.jsx)("p",{className:"design-2",children:"Address: "}),Object(p.jsx)("p",{className:"design-3",children:"Sanjaynagar, Bengaluru-56"})]}),Object(p.jsxs)("div",{className:"design-1",children:[Object(p.jsx)("p",{className:"design-2",children:"Phone: "}),Object(p.jsx)("p",{className:"design-3",children:"xxxxxxxxxx09"})]}),Object(p.jsxs)("div",{className:"design-1",children:[Object(p.jsx)("p",{className:"design-2",children:"Email: "}),Object(p.jsx)("p",{className:"design-3",children:"xxxxxx@gmail.com"})]})]})})}var v=Object(n.createContext)();var N=function(){var e=Object(n.useReducer)(O,null),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(l.a,{children:Object(p.jsx)(v.Provider,{value:{state:a,dispatch:s},children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",component:f}),Object(p.jsx)(o.a,{exact:!0,path:"/sign-up",component:x}),Object(p.jsx)(o.a,{exact:!0,path:"/sign-in",component:h}),Object(p.jsx)(o.a,{exact:!0,path:"/about",component:g})]})})})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),y()}},[[39,1,2]]]);
//# sourceMappingURL=main.370e99b1.chunk.js.map