(this["webpackJsonpproyecto-reloj"]=this["webpackJsonpproyecto-reloj"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(4),a=c.n(i),r=(c(9),c(2)),s=c(0),l=function(e){var t=e.title,c=e.changeTime,n=e.type,i=e.time,a=e.formatTime;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:t}),Object(s.jsxs)("div",{className:"time-sets",children:[Object(s.jsx)("button",{id:"break-decrement",className:"btn-small blue darken-4",onClick:function(){c(-60,n)},children:Object(s.jsx)("i",{className:"material-icons",children:"arrow_downward"})}),Object(s.jsx)("h3",{children:a(i)}),Object(s.jsx)("h3",{id:"break-length",children:"5"}),Object(s.jsx)("button",{id:"break-increment",className:"btn-small blue darken-4",onClick:function(){c(60,n)},children:Object(s.jsx)("i",{className:"material-icons",children:"arrow_upward"})})]})]})},o=function(e){var t=e.title,c=e.changeTime,n=e.type,i=e.time,a=e.formatTime;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:t}),Object(s.jsxs)("div",{className:"time-sets",children:[Object(s.jsx)("button",{id:"session-decrement",className:"btn-small blue darken-4",onClick:function(){c(-60,n)},children:Object(s.jsx)("i",{className:"material-icons",children:"arrow_downward"})}),Object(s.jsx)("h3",{children:a(i)}),Object(s.jsx)("h3",{id:"session-length",children:"25"}),Object(s.jsx)("button",{id:"session-increment",className:"btn-small blue darken-4",onClick:function(){c(60,n)},children:Object(s.jsx)("i",{className:"material-icons",children:"arrow_upward"})})]})]})},j=function(){var e=Object(n.useState)(1500),t=Object(r.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(300),j=Object(r.a)(a,2),d=j[0],b=j[1],m=Object(n.useState)(1500),u=Object(r.a)(m,2),h=u[0],O=u[1],f=Object(n.useState)(!1),x=Object(r.a)(f,2),k=x[0],p=x[1],g=Object(n.useState)(!1),v=Object(r.a)(g,2),w=v[0],N=v[1],T=Object(n.useState)(new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3")),S=Object(r.a)(T,2),_=S[0],y=(S[1],function(){_.currentTime=0,_.play()}),C=function(e){var t=Math.floor(e/60),c=e%60;return(t<10?"0".concat(t):t)+":"+(c<10?"0".concat(c):c)},I=function(e,t){if("break"===t){if(d<=60&&e<0)return;if(d>=3600&&e>0)return;b((function(t){return t+e}))}else{if(h<=60&&e<0)return;if(h>=3600&&e>0)return;O((function(t){return t+e})),k||i(h+e)}};return Object(s.jsxs)("div",{className:"center-align",children:[Object(s.jsx)("h1",{children:"Pomodoro Clock"}),Object(s.jsxs)("div",{className:"dual-container",children:[Object(s.jsx)("div",{id:"break-label",children:Object(s.jsx)(l,{title:"Break Length",changeTime:I,type:"break",time:d,formatTime:C})}),Object(s.jsx)("div",{id:"session-label",children:Object(s.jsx)(o,{title:"Session Length",changeTime:I,type:"session",time:h,formatTime:C})})]}),Object(s.jsx)("h3",{id:"timer-label",children:w?"Break":"Session"}),Object(s.jsx)("h1",{id:"time-left",children:C(c)}),Object(s.jsx)("button",{id:"start_stop",className:"btn-large blue darken-4",onClick:function(){(new Date).getTime();var e=(new Date).getTime()+1e3,t=w;if(!k){var c=setInterval((function(){(new Date).getTime()>e&&(i((function(e){return e<=0&&!t?(y(),t=!0,N(!0),d):e<=0&&t?(y(),t=!1,N(!1),h):e-1})),e+=1e3)}),30);localStorage.clear(),localStorage.setItem("interval-id",c)}k&&clearInterval(localStorage.getItem("interval-id")),p(!k)},children:k?Object(s.jsx)("i",{className:"material-icons",children:"pause_circle_filled"}):Object(s.jsx)("i",{className:"material-icons",children:"play_circle_filled"})}),Object(s.jsx)("button",{id:"reset",className:"btn-large blue darken-4",onClick:function(){i(1500),b(300),O(1500)},children:Object(s.jsx)("i",{className:"material-icons",children:"autorenew"})})]})},d=document.getElementById("root");a.a.render(Object(s.jsx)(j,{}),d)},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.a7d3e9d6.chunk.js.map