(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{31:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),n=s(10),r=s.n(n),a=s(5),l=(s(31),s(67)),o=s(68),j=s(22),d=s.n(j),m=s(20),h=s.n(m),u=s(0);function b(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(u.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsxs)("div",{className:"left",children:[Object(u.jsx)(h.a,{className:"logo"}),Object(u.jsx)("span",{className:"logo",children:"NIT RAIPUR"}),Object(u.jsxs)("div",{className:"itemContainer",children:[Object(u.jsx)(l.a,{className:"icon"}),Object(u.jsx)("span",{children:"+91 82369 21589"})]}),Object(u.jsxs)("div",{className:"itemContainer",children:[Object(u.jsx)(o.a,{className:"icon"}),Object(u.jsx)("span",{children:"shivanshu.tiwari.home@gmail.com"})]}),Object(u.jsxs)("div",{className:"itemContainer",children:[Object(u.jsx)(d.a,{className:"icon"}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/shivanshu-tiwari-060925172/",className:"logoo",rel:"noreferrer",target:"_blank",children:"shivanshu tiwari"})]})]}),Object(u.jsx)("div",{className:"right",children:Object(u.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(u.jsx)("span",{className:"line1"}),Object(u.jsx)("span",{className:"line2"}),Object(u.jsx)("span",{className:"line3"})]})})]})})}s(38);var p=s(23);function O(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(p.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Developer","Programmar"]})}),[]),Object(u.jsxs)("div",{className:"intro",id:"intro",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)("div",{className:"imgContainer",children:Object(u.jsx)("img",{src:"assets/man.png",alt:""})})}),Object(u.jsxs)("div",{className:"right",children:[Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("h2",{children:"Hi There, I'm"}),Object(u.jsx)("h1",{children:"Shivanshu Tiwari"}),Object(u.jsx)("h3",{children:Object(u.jsx)("span",{ref:e})})]}),Object(u.jsx)("a",{href:"#portfolio",children:Object(u.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}s(39);function g(e){var t=e.id,s=e.title,i=e.active,c=e.setSelected;return Object(u.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return c(t)},children:s})}s(40);var f=[{id:1,title:"Login page",img:"https://ps.w.org/loginpress/assets/screenshot-10.png?rev=1587050",link:"https://github.com/shivanshutiari319/MERN-login-Page"},{id:2,title:"Task-Manager App",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.winudf.com%2Fv2%2Fimage1%2FbW9iaS5pbmZvbGlmZS50YXNrbWFuYWdlcl9zY3JlZW5fMTVfMTU1MjIyMTI5N18wMTI%2Fscreen-15.jpg%3Ffakeurl%3D1%26type%3D.jpg&f=1&nofb=1",link:"https://github.com/shivanshutiari319/task-manager"},{id:3,title:"Weather report App",img:"http://windowsbulletin.com/wp-content/uploads/2021/07/Weather-App-Win10-image.jpg",link:"https://github.com/shivanshutiari319/weather-report-using-API"}];function x(){var e=Object(i.useState)("featured"),t=Object(a.a)(e,2),s=t[0],c=t[1],n=Object(i.useState)([]),r=Object(a.a)(n,2),l=r[0],o=r[1];return Object(i.useEffect)((function(){switch(s){case"web":o(f);break;default:o(f)}}),[s]),Object(u.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(u.jsx)("h1",{children:"Portfolio"}),Object(u.jsx)("ul",{children:[{id:"featured",title:"Featured"}].map((function(e){return Object(u.jsx)(g,{title:e.title,active:s===e.id,setSelected:c,id:e.id})}))}),Object(u.jsx)("div",{className:"container",children:l.map((function(e){return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("a",{href:e.link,rel:"noreferrer",target:"_blank",children:Object(u.jsx)("img",{src:e.img,alt:""})}),Object(u.jsx)("h3",{children:e.title})]})}))})]})}s(41);function v(){var e=Object(i.useState)(0),t=Object(a.a)(e,2),s=t[0],c=t[1],n=[{id:"1",icon:"./assets/mobile.png",title:"LeetCode Profile",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",img:"https://cdn-images-1.medium.com/max/1600/0*GePc7lo4CF4A3guP.png",link:"https://leetcode.com/ustad_319/"},{id:"2",icon:"./assets/globe.png",title:"CodeForces Profile",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Codeforces_logo.svg/1024px-Codeforces_logo.svg.png",link:"https://codeforces.com/ "},{id:"3",icon:"./assets/writing.png",title:"HackerRank Profile",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",img:"http://www.yosuccess.com/wp-content/uploads/2015/01/HackerRank2.png",link:"https://www.hackerrank.com/shiva_ustad2"},{id:"3",icon:"./assets/writing.png",title:"GFG Profile",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",img:"https://cdncontribute.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-6.png",link:"https://auth.geeksforgeeks.org/user/ustad/profile"}],r=function(e){c("left"===e?s>0?s-1:2:s<n.length-1?s+1:0)};return Object(u.jsxs)("div",{className:"works",id:"works",children:[Object(u.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:n.map((function(e){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"",children:Object(u.jsx)("div",{className:"",children:Object(u.jsx)("a",{href:e.link,rel:"noreferrer",target:"_blank",children:Object(u.jsx)("img",{src:e.img,alt:""})})})})})}))}),Object(u.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return r("left")}}),Object(u.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return r()}})]})}s(42);s(43);s(44);var N=s(69),k=Object(N.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center"}}}));function w(){k();return Object(u.jsxs)("div",{className:"portfolioo",children:[Object(u.jsx)("h1",{children:"Skills"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:"active",children:"C++"}),Object(u.jsx)("li",{className:"active",children:"JavaScript"}),Object(u.jsx)("li",{className:"active",children:"NodeJS"}),Object(u.jsx)("li",{className:"active",children:"ReactJS"}),Object(u.jsx)("li",{className:"active",children:"Express"}),Object(u.jsx)("li",{className:"active",children:"MongoDB"}),Object(u.jsx)("li",{className:"active",children:"JWT"}),Object(u.jsx)("li",{className:"active",children:"Material/UI"}),Object(u.jsx)("li",{className:"active",children:"CSS"}),Object(u.jsx)("li",{className:"active",children:"HTML"})]})]})}s(45),s(46);function y(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(u.jsx)("div",{className:"menu "+(t&&"active"),children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{onClick:function(){return s(!1)},children:Object(u.jsx)("a",{href:"#intro",children:"Home"})}),Object(u.jsx)("li",{onClick:function(){return s(!1)},children:Object(u.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(u.jsx)("li",{onClick:function(){return s(!1)},children:Object(u.jsx)("a",{href:"#works",children:"Works"})})]})})}var C=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),s=t[0],c=t[1];return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(b,{menuOpen:s,setMenuOpen:c}),Object(u.jsx)(y,{menuOpen:s,setMenuOpen:c}),Object(u.jsxs)("div",{className:"sections",children:[Object(u.jsx)(O,{}),Object(u.jsx)(w,{}),Object(u.jsx)(x,{}),Object(u.jsx)(v,{})]})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.e023082e.chunk.js.map