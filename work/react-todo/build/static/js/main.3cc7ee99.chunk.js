(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),s=a.n(r),u=(a(13),a(1)),o=a(7),l={REFRESH:"refresh",DISPLAY_ERROR:"displayError",HIDE_ERROR:"hideError",SET_THEME:"setTheme"},i={};Object.values(l).forEach((function(e){i[e]=[]}));var m=function(e,t){var a=i[e];if(a){var n,c=Object(o.a)(a);try{for(c.s();!(n=c.n()).done;){(0,n.value)(t)}}catch(r){c.e(r)}finally{c.f()}}},E=function(e,t){var a=i[e];a&&a.indexOf(t)<0&&a.push(t)},d=function(e,t){var a=i[e];if(a){var n=a.indexOf(t);n>-1&&a.splice(n,1)}},f=Object(n.createContext)({theme:"dark"}),R=f,h=(a(14),400),b=401,O=403,v=404,k=503,p=0,j=1,S=2,I=3,g=4,_=5,C={},D={GET:"get",PUT:"put",DELETE:"delete",POST:"post"};Object.values(D).forEach((function(e){var t={method:e};C[e.toLowerCase()]=function(a,n){if(n)if(e!==D.GET)t.headers={"Content-Type":"application/json"},t.body=JSON.stringify(n);else{var c=Object.entries(n).map((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];return"".concat(encodeURIComponent(a),"=").concat(encodeURIComponent(n))})).join("&");a+=""===c?"":"?"+c}return fetch(a,t).catch((function(){return Promise.reject({ok:!1,status:k})})).then((function(e){return e.ok?e.json():Promise.reject(e)}))}}));var P=C,A=Object(n.memo)((function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useCallback)((function(e){var t=e.target.value;r(t)}),[r]),o=Object(n.useCallback)((function(e){e.preventDefault(),P.post("/session",{username:a}).then((function(){r(""),m(l.REFRESH)})).catch((function(e){r(""),e.status===b||e.status===O?m(l.DISPLAY_ERROR,I):e.status===k&&m(l.DISPLAY_ERROR,j)}))}),[a,r]);return c.a.createElement("div",{className:"login-page"},c.a.createElement("label",null,"User Name:",c.a.createElement("input",{id:"user-name",type:"text",value:a,onChange:s,minLength:1})),c.a.createElement("button",{className:"signin",onClick:o},"submit"))})),L=a(2),y=a(3),H=Object(n.memo)((function(e){var t=e.username,a=Object(n.useContext)(R),r=Object(n.useState)(a.theme),s=Object(u.a)(r,2),o=s[0],i=s[1];Object(n.useEffect)((function(){i(a.theme)}),[a]);var E=Object(n.useCallback)((function(e){P.put("/theme/"+t,{theme:e}).then((function(){i(e),m(l.SET_THEME,e)})).catch((function(e){e.status===h?m(l.DISPLAY_ERROR,j):e.status!==O&&e.status!==b||(m(l.DISPLAY_ERROR,I),m(l.REFRESH))}))}),[t,i]),d=Object(n.useCallback)((function(){P.delete("session").finally((function(){m(l.REFRESH)}))}),[]);return c.a.createElement("div",{className:"user-action"},c.a.createElement("span",null,"Theme:"),c.a.createElement("input",{type:"radio",name:"theme",value:"dark",id:"default",onChange:function(){E("dark")},checked:"dark"===o}),c.a.createElement("label",{htmlFor:"default"},"dark"),c.a.createElement("input",{type:"radio",name:"theme",value:"light",id:"light",onChange:function(){E("light")},checked:"light"===o}),c.a.createElement("label",{htmlFor:"light"},"light"),c.a.createElement("button",{onClick:d,className:"logout"},"Logout"))})),Y=Object(n.memo)((function(e){var t=e.refreshItems,a=e.addItem,r=e.deleteAll,s=Object(n.useState)(""),o=Object(u.a)(s,2),l=o[0],i=o[1],m=Object(n.useCallback)((function(e){var t=e.target.value;i(t)}),[]),E=Object(n.useCallback)((function(){a(l).finally((function(){i("")}))}),[a,l]);return c.a.createElement("div",{className:"new-item"},c.a.createElement("span",null,"New item:"),c.a.createElement("input",{type:"text",minLength:1,value:l,onChange:m}),c.a.createElement("button",{onClick:E},"Add"),c.a.createElement("button",{onClick:function(){return r()},className:"delete-all"},"Delete All"),c.a.createElement("button",{onClick:t,className:"refresh"},"Refresh"))})),N=Object(n.memo)((function(e){var t=e.username,a=Object(n.useMemo)((function(){return"/tasks/"+t}),[t]),r=Object(n.useState)(!0),s=Object(u.a)(r,2),o=s[0],i=s[1],E=Object(n.useState)("none"),d=Object(u.a)(E,2),f=d[0],R=d[1],p=Object(n.useCallback)((function(e,t){var a=t.items,n={};switch(t.type){case"add":case"update":n=Object(y.a)({},e,{},a);break;case"refresh":n=a;break;case"remove":var c=t.id;delete(n=Object(y.a)({},e))[c];break;default:throw new Error}return n}),[]),S=Object(n.useReducer)(p,{}),_=Object(u.a)(S,2),C=_[0],D=_[1],A=Object(n.useCallback)((function(e){var t={content:e,done:!1,timestamp:Date.now()};return P.post(a,{task:t}).then((function(e){var t=e.data.taskId;return P.get(a+"/"+t)})).then((function(e){var t=e.data,a=t.taskId,n=Object(L.a)({},a,t);m(l.HIDE_ERROR),D({type:"add",items:n})})).catch((function(e){e.status===b||e.status===O?(m(l.DISPLAY_ERROR,I),m(l.REFRESH)):e.status===k?m(l.DISPLAY_ERROR,j):e.status!==h&&e.status!==v||m(l.DISPLAY_ERROR,g)}))}),[a]),N=Object(n.useCallback)((function(){P.get(a).then((function(e){var t=e.data;m(l.HIDE_ERROR),D({type:"refresh",items:t})})).catch((function(e){e.status===b||e.status===O?(m(l.DISPLAY_ERROR,I),m(l.REFRESH)):e.status===k?m(l.DISPLAY_ERROR,j):e.status!==h&&e.status!==v||m(l.DISPLAY_ERROR,g)}))}),[a]),T=Object(n.useCallback)((function(){P.delete(a).then((function(){N()})).catch((function(e){e.status===b||e.status===O?(m(l.DISPLAY_ERROR,I),m(l.REFRESH)):e.status===k?m(l.DISPLAY_ERROR,j):e.status!==h&&e.status!==v||m(l.DISPLAY_ERROR,g)}))}),[a,N]),w=Object(n.useCallback)((function(e,t){var n=a+"/"+t.taskId,c=Object(y.a)({},t,{done:e});P.put(n,{task:c}).then((function(){m(l.HIDE_ERROR),D({type:"update",items:Object(L.a)({},t.taskId,c)})})).catch((function(e){e.status===b||e.status===O?(m(l.DISPLAY_ERROR,I),m(l.REFRESH)):e.status===k?m(l.DISPLAY_ERROR,j):e.status!==h&&e.status!==v||m(l.DISPLAY_ERROR,g)}))}),[a]),F=Object(n.useCallback)((function(e){var t=a+"/"+e;P.delete(t).then((function(){D({type:"remove",id:e})})).catch((function(e){e.status===b||e.status===O?(m(l.DISPLAY_ERROR,I),m(l.REFRESH)):e.status===k?m(l.DISPLAY_ERROR,j):e.status!==h&&e.status!==v||m(l.DISPLAY_ERROR,g)}))}),[a]),x=Object(n.useCallback)((function(e,t){var n=a+"/"+t.taskId,c=Object(y.a)({},t,{content:e});P.put(n,{task:c}).then((function(){m(l.HIDE_ERROR),D({type:"update",items:Object(L.a)({},t.taskId,c)})})).catch((function(e){e.status===b||e.status===O?(m(l.DISPLAY_ERROR,I),m(l.REFRESH)):e.status===k?m(l.DISPLAY_ERROR,j):e.status!==h&&e.status!==v||m(l.DISPLAY_ERROR,g)}))}),[a]);Object(n.useEffect)((function(){N()}),[N]);var M=Object(n.useCallback)((function(){var e=Object.values(C);switch(o||(e=e.filter((function(e){return!e.done}))),f){case"asc":e.sort((function(e,t){return e.content.localeCompare(t.content)}));break;case"desc":e.sort((function(e,t){return t.content.localeCompare(e.content)}));break;default:e.sort((function(e,t){return t.timestamp-e.timestamp}))}return e.map((function(e){return c.a.createElement("div",{key:e.taskId,className:"item"},c.a.createElement("input",{type:"checkbox",checked:e.done,onChange:function(t){w(t.target.checked,e)}}),c.a.createElement("input",{type:"text",onChange:function(t){x(t.target.value,e)},value:e.content,className:e.done?"done item-detail":"item-detail"}),c.a.createElement("button",{onClick:function(){F(e.taskId)},className:"delete"},"delete"))}))}),[C,w,F,x,o,f]);return c.a.createElement("div",null,c.a.createElement("div",{className:"options"},c.a.createElement("div",{className:"filters"},c.a.createElement("label",{htmlFor:"filter"},"Hide done tasks:"),c.a.createElement("input",{id:"filter",name:"filter",type:"checkbox",checked:!o,onChange:function(e){return i(!e.target.checked)}})),c.a.createElement("div",{className:"orders"},c.a.createElement("span",null,"Order:"),c.a.createElement("input",{type:"radio",id:"none",name:"order",value:"none",checked:"none"===f,onChange:function(){return R("none")}}),c.a.createElement("label",{htmlFor:"none"},"Latest"),c.a.createElement("input",{type:"radio",id:"asc",name:"order",value:"asc",checked:"asc"===f,onChange:function(){return R("asc")}}),c.a.createElement("label",{htmlFor:"asc"},"A-Z"),c.a.createElement("input",{type:"radio",id:"desc",name:"order",value:"desc",checked:"desc"===f,onChange:function(){return R("desc")}}),c.a.createElement("label",{htmlFor:"desc"},"Z-A"))),c.a.createElement("div",{className:"items"},M()),c.a.createElement(Y,{deleteAll:T,refreshItems:N,addItem:A}),c.a.createElement(H,{username:t}))})),T=Object(n.memo)((function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(e){r(function(e){var t="";switch(e){case p:t="User name is not valid!";break;case j:t="Unable to connect to server! Please try again!";break;case S:t="Wrong recipe id!";break;case I:t="Invalid user! Please login again!";break;case g:t="Param error!";break;case _:default:t="Something went wrong!"}return t}(e))},t=function(){r("")};return E(l.DISPLAY_ERROR,e),E(l.HIDE_ERROR,t),function(){d(l.DISPLAY_ERROR,e),d(l.HIDE_ERROR,t)}}),[]),c.a.createElement("div",{className:"error ".concat(""===a?"":"display")},a)})),w=Object(n.memo)((function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useCallback)((function(){P.get("/session").then((function(e){var t=e.data,a=t.username,n=t.theme;r(a),m(l.HIDE_ERROR),m(l.SET_THEME,n)})).catch((function(e){r(""),e.status!==b&&m(l.DISPLAY_ERROR,j),m(l.SET_THEME,"dark")}))}),[r]);return Object(n.useEffect)((function(){return s(),E(l.REFRESH,s),function(){d(l.REFRESH,s)}}),[s]),c.a.createElement("div",{id:"stage"},c.a.createElement(T,null),""===a?c.a.createElement(A,null):c.a.createElement(N,{username:a}))}));var F=function(){var e=Object(n.useState)("dark"),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(e){"light"!==e&&(e="dark"),r(e)};return E(l.SET_THEME,e),function(){d(l.SET_THEME,e)}}),[r]),c.a.createElement(R.Provider,{value:{theme:a}},c.a.createElement("div",{className:"".concat(a+"-theme"," App")},c.a.createElement("header",null,c.a.createElement("h2",null,"TODO APP")),c.a.createElement("main",null,c.a.createElement(w,null)),c.a.createElement("footer",null,c.a.createElement("ul",{className:"footer-personal-info"},c.a.createElement("li",null,"\xa9 2020 Yiji Huang"),c.a.createElement("li",{className:"footer-divider"}),c.a.createElement("li",null,c.a.createElement("span",null,"E-mail: "),c.a.createElement("a",{href:"mailto:huang.yiji@northeastern.edu"},"huang.yiji@northeastern.edu"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.3cc7ee99.chunk.js.map