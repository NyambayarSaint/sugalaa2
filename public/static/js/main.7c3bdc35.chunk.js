(this.webpackJsonplottery=this.webpackJsonplottery||[]).push([[0],{29:function(n,t,e){n.exports=e(52)},52:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),i=e(24),o=e.n(i),u=e(1),c=e(7),l=e(3),p=e.n(l),s=e(12),d=e(10),g=e(8),h=e(6),m=e.n(h),f=e(28);function b(){var n=Object(c.a)(["\n    position:fixed;\n    top:0;\n    right:0;\n    bottom:0;\n    left:0;\n    z-index:999;\n    .fade{\n        position:absolute;\n        left:0;\n        top:0;\n        right:0;\n        bottom:0;\n        background: rgba(0,0,0,0.6);\n        z-index:1000;\n    }\n    .lottocontainer{\n        background:white;\n        position:absolute;\n        z-index:1001;\n        margin-left:10vw;\n        margin-top:2vw;\n        width:80vw;\n        height:45vw;\n        background-image: url(https://i.imgur.com/aWorWBt.png);\n        background-size: 100% 100%;\n        #wheel1{\n            width: calc(","px);\n            height: calc(","px);\n            margin-left: calc(","px - ","px);\n            margin-top: calc(","px - ","px);\n        }\n        #arrow{\n            position:absolute;\n            width:","px;\n            margin-left: calc(","px - ","px);\n            margin-top: calc(","px - ","px);\n        }\n    }\n    #form{\n        position:absolute;\n        background:white;\n        z-index:1002;\n        padding:30px;\n        width:300px;\n        left:50%;\n        margin-left:-180px;\n        ","\n        text-align:center;\n        background-size: 100% 300px;\n        background-repeat: no-repeat;\n        input{\n            border:none;\n            margin-top:15px;\n            border-bottom:1px solid rgba(0,0,0,0.1);\n            width:100%;\n            padding:10px;\n        }\n        label{\n            display:flex;\n            font-family:Arial;\n            span{\n                &:first-child{\n                    margin-right:10px;\n                }\n                &:last-child{\n                    font-weight:bold;\n                }\n            }\n        }\n        button{\n            display:block;\n            width:100%;\n            border:none;\n            margin-top:30px;\n            padding:15px;\n            &:hover{\n                cursor:pointer;\n            }\n        }\n    }\n"]);return b=function(){return n},n}var w=function(){var n=Object(a.useState)(0),t=Object(u.a)(n,2),e=t[0],i=t[1],o=Object(a.useState)(0),c=Object(u.a)(o,2),l=c[0],g=c[1],h=Object(a.useState)(0),b=Object(u.a)(h,2),w=b[0],v=b[1],k=Object(a.useState)(0),O=Object(u.a)(k,2),j=O[0],E=O[1],y=Object(a.useState)(!1),S=Object(u.a)(y,2),z=S[0],N=S[1],I=Object(a.useState)(null),W=Object(u.a)(I,2),B=W[0],C=W[1],R=Object(a.useState)(""),D=Object(u.a)(R,2),M=D[0],A=D[1],F=Object(a.useState)(""),H=Object(u.a)(F,2),J=H[0],L=H[1],X=Object(a.useState)(""),Y=Object(u.a)(X,2),_=Y[0],q=Y[1];Object(a.useEffect)((function(){(function(){var n=Object(s.a)(p.a.mark((function n(){var t,e,a,r,o,u,c,l;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m()("https://sugalaa.herokuapp.com/lottery-wins?_sort=createdAt:DESC");case 2:return t=n.sent,n.next=5,m()("https://sugalaa.herokuapp.com/settings");case 5:e=n.sent,a=[],t.data.length&&t.data.map((function(n,e){var r=Number(n.Reference),i=t.data[r-1];a.push({text:n.Serial,name:n.Name,ref:n.Reference,chance:i.RemainingStock<1?0:i.Chance})})),r=document.querySelector(".lottocontainer"),o=r.offsetWidth,u=r.offsetHeight,c=.15*o,l=.05*o,new d.a({el:document.getElementById("wheel1"),data:a,radius:c,buttonWidth:l,duration:Number(e.data.Speed+"000"),image:{turntable:"https://i.imgur.com/To3E48t.png",button:"https://i.imgur.com/i4XL4wY.png",offset:-10},onSuccess:function(n){P(n,t.data)}}),window.addEventListener("resize",(function(){return window.location.reload()})),i(c),v(o),E(u),g(l);case 19:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);var P=function(){var n=Object(s.a)(p.a.mark((function n(t,e){var a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(16!==Number(t.text)){n.next=2;break}return n.abrupt("return",document.location.reload());case 2:return a=e[Number(t.text)-1],n.next=5,m.a.put("https://sugalaa.herokuapp.com/lottery-wins/".concat(a._id),{RemainingStock:a.RemainingStock-1});case 5:N(!0),C(t.name),q("https://sugalaa.herokuapp.com"+a.Image.url);case 8:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),T=function(){var n=Object(s.a)(p.a.mark((function n(){var t,e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(J.length<8)){n.next=2;break}return n.abrupt("return",window.alert("\u0423\u0442\u0430\u0441\u043d\u044b \u0434\u0443\u0433\u0430\u0430\u0440\u0430\u0430 \u0437\u04e9\u0432 \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443!"));case 2:if(!(M.length<2)){n.next=4;break}return n.abrupt("return",window.alert("\u0422\u0430 \u043d\u044d\u0440\u044d\u044d \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443!"));case 4:return t=new Date,e=t.getFullYear()+"."+(t.getMonth()+1)+"."+t.getDate(),n.next=8,m.a.post("https://sugalaa.herokuapp.com/winners",{Ner:M,Utas:J,Baraa:B,Ognoo:e});case 8:window.alert("\u0410\u043c\u0436\u0438\u043b\u0442 \u0445\u04af\u0441\u044c\u0435!"),document.location.reload();case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return r.a.createElement(x,{width:w,height:j,radius:e,buttonWidth:l},r.a.createElement("div",{className:"lottocontainer"},r.a.createElement("img",{id:"arrow",src:"https://i.imgur.com/dSIibwI.png"}),r.a.createElement("div",{id:"wheel1"})),r.a.createElement("div",{className:"fade"}),z&&r.a.createElement(f.a.div,{initial:{opacity:0,y:60},animate:{opacity:1,x:0,transition:{type:"spring"}},id:"form",style:{backgroundImage:"url(https://i.imgur.com/H8yhPM9.gif)"}},r.a.createElement("img",{style:{height:300,margin:"0px auto",display:"block"},src:_}),r.a.createElement("label",null,r.a.createElement("span",null,"\u0422\u0430\u043d\u044b \u0445\u043e\u043d\u0436\u0432\u043e\u0440:"),r.a.createElement("span",null,B)),r.a.createElement("input",{type:"text",name:"name",placeholder:"\u041d\u044d\u0440",value:M,onChange:function(n){return A(n.target.value)}}),r.a.createElement("input",{type:"text",name:"phone",placeholder:"\u0423\u0442\u0430\u0441",value:J,onChange:function(n){return L(n.target.value)}}),r.a.createElement("button",{onClick:T},"\u0418\u043b\u0433\u044d\u044d\u0445")))},x=g.a.div(b(),(function(n){return 2*n.radius}),(function(n){return 2*n.radius}),(function(n){return n.width/2}),(function(n){return n.radius}),(function(n){return n.height/2}),(function(n){return n.radius}),(function(n){return.085*n.width}),(function(n){return n.width/2}),(function(n){return.048*n.width}),(function(n){return n.height/2.08}),(function(n){return n.radius}),"");function v(){var n=Object(c.a)(["\n    position:fixed;\n    top:0;\n    right:0;\n    bottom:0;\n    left:0;\n    z-index:999;\n    .fade{\n        position:absolute;\n        left:0;\n        top:0;\n        right:0;\n        bottom:0;\n        background: rgba(0,0,0,0.6);\n        z-index:1000;\n    }\n    .lottocontainer{\n        background:white;\n        position:absolute;\n        z-index:1001;\n        margin-left:10vw;\n        margin-top:2vw;\n        width:80vw;\n        height:45vw;\n        background-image: url(https://i.imgur.com/aWorWBt.png);\n        background-size: 100% 100%;\n        #wheel1{\n            width: calc(","px);\n            height: calc(","px);\n            margin-left: calc(","px - ","px);\n            margin-top: calc(","px - ","px);\n        }\n        #arrow{\n            position:absolute;\n            width:","px;\n            margin-left: calc(","px - ","px);\n            margin-top: calc(","px - ","px);\n        }\n    }\n"]);return v=function(){return n},n}g.a.div(v(),(function(n){return 2*n.radius}),(function(n){return 2*n.radius}),(function(n){return n.width/2}),(function(n){return n.radius}),(function(n){return n.height/2}),(function(n){return n.radius}),(function(n){return.085*n.width}),(function(n){return n.width/2}),(function(n){return.048*n.width}),(function(n){return n.height/2.08}),(function(n){return n.radius}));var k=function(){var n=Object(a.useState)(!1),t=Object(u.a)(n,2),e=t[0],i=t[1];return Object(a.useEffect)((function(){!localStorage.getItem("Xdol!671")&&i(!0)}),[]),r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(w,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.7c3bdc35.chunk.js.map