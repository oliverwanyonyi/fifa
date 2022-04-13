(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{16:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(26),r=a.n(c),o=a(3),l=a(2),i=a(4),d=a(0),u=Object(n.createContext)(),j=function(){return Object(n.useContext)(u)},p=function(e){var t=e.children,a=Object(n.useState)(null),s=Object(o.a)(a,2),c=s[0],r=s[1],i=Object(n.useState)([]),j=Object(o.a)(i,2),p=j[0],b=j[1],m=Object(n.useState)(null),h=Object(o.a)(m,2),O=h[0],v=h[1],f=Object(l.f)();return Object(n.useEffect)((function(){var e=localStorage.getItem("userLogin")?JSON.parse(localStorage.getItem("userLogin")):null;e&&r(e)}),[f]),Object(d.jsx)(u.Provider,{value:{user:c,users:p,setUsers:b,editId:O,setEditId:v},children:t})},b=(a(33),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],c=j().user,r=Object(l.f)();return Object(d.jsx)("nav",{className:"nav",children:Object(d.jsxs)("div",{className:"container nav__container",children:[Object(d.jsx)(i.b,{className:"nav__brand",to:"/",children:"Fifa Rank"}),Object(d.jsx)("div",{className:"nav__links-container",children:Object(d.jsx)("ul",{className:"nav__links",children:Object(d.jsxs)("li",{className:"nav__item",children:[Object(d.jsxs)("button",{className:"nav__link",onClick:function(){return s(!a)},children:[Object(d.jsx)("span",{className:"nav__link-text",children:c&&c.name}),Object(d.jsx)("span",{className:"nav__drop-icon fas fa-chevron-down"})]}),Object(d.jsxs)("ul",{className:a?"nav__drop drop-active":"nav__drop",children:[Object(d.jsx)("li",{className:"nav__drop-item",children:Object(d.jsx)(i.b,{className:"nav__drop-link",to:"/profile",children:"Profile"})}),"admin"===(null===c||void 0===c?void 0:c.role)&&Object(d.jsx)("li",{className:"nav__drop-item",children:Object(d.jsx)(i.b,{className:"nav__drop-link",to:"/contest",children:"Contest"})}),Object(d.jsx)("li",{className:"nav__drop-item",children:Object(d.jsx)("button",{className:"nav__drop-link btn",onClick:function(){localStorage.removeItem("userLogin"),r("/login")},children:"Logout"})})]})]})})})]})})}),m=(a(34),a(27)),h=a.n(m),O=a(6),v=a.n(O),f=a(9),x=a(10),g=a.n(x),N="USER_REGISTER_REQUEST",y="USER_REGISTER_SUCCESS",_="USER_REGISTER_FAIL",E="USER_LOGIN_REQUEST",S="USER_LOGIN_SUCCESS",w="USER_LOGIN_FAIL",C="GET_USERS_REQUEST",k="GET_USERS_SUCCESS",R="GET_USERS_FAIL",T="https://fifa2022.herokuapp.com",A="UPDATE_MATCH_REQUEST",U="UPDATE_MATCH_SUCCESS",L="UPDATE_MATCH_FAIL",G="CREATE_MATCH_REQUEST",I="CREATE_MATCH_SUCCESS",F="CREATE_MATCH_FAIL",M="DELETE_MATCH_REQUEST",H="DELETE_MATCH_SUCCESS",D="DELETE_MATCH_FAIL",P="GET_MATCHES_REQUEST",J="GET_MATCHES_SUCCESS",Q="GET_MATCHES_FAIL",B=function(){var e=Object(f.a)(v.a.mark((function e(t,a,n){var s,c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.prev=1,t({type:N}),s={headers:{"Content-type":"application/json"}},e.next=6,g.a.post("".concat(T,"/users/register"),a,s);case 6:c=e.sent,r=c.data,console.log(r),t({type:y,payload:r}),localStorage.setItem("userLogin",JSON.stringify(r)),setTimeout((function(){return n("/")}),2500),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),t({type:_,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:"No internet connection!"});case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,a,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(f.a)(v.a.mark((function e(t,a,n){var s,c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:E}),s={headers:{"Content-type":"application/json"}},e.next=5,g.a.post("".concat(T,"/users/login"),a,s);case 5:c=e.sent,r=c.data,t({type:S,payload:r}),localStorage.setItem("userLogin",JSON.stringify(r)),setTimeout((function(){return n("/")}),2500),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.response&&e.t0.response.data.message),t({type:w,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:"No internet connection!"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(f.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:C}),e.next=4,g.a.get("".concat(T,"/users"));case 4:a=e.sent,n=a.data,t({type:k,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:R,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:"No internet connection!"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(f.a)(v.a.mark((function e(t,a,n){var s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,t({type:G}),s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(n.token)}},e.next=6,g.a.post("".concat(T,"/users/"),a,s);case 6:t({type:I,payload:!0}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t({type:F,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:"No internet connection!"});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a,n){return e.apply(this,arguments)}}(),K=function(){var e=Object(f.a)(v.a.mark((function e(t,a,n,s){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,t({type:A}),c={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(n.token)}},e.next=6,g.a.put("".concat(T,"/matches/").concat(s),a,c);case 6:t({type:U,payload:!0}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t({type:L,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:"No internet connection!"});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a,n,s){return e.apply(this,arguments)}}(),V=function(){var e=Object(f.a)(v.a.mark((function e(t,a,n,s){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.prev=1,t({type:M}),c={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(s.token)}},e.next=6,g.a.post("".concat(T,"/matches/").concat(a),n,c);case 6:t({type:H,payload:!0}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t({type:D,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:"No internet connection!"});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a,n,s){return e.apply(this,arguments)}}(),X=function(){var e=Object(f.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:P}),e.next=4,g.a.get("".concat(T,"/matches"));case 4:a=e.sent,n=a.data,t({type:J,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:Q,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:"No internet connection!"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),Y=(a(55),function(e){var t=e.type,a=e.children,s=Object(n.useState)(!0),c=Object(o.a)(s,2),r=c[0],l=c[1];return setTimeout((function(){return l(!1)}),4e3),Object(d.jsxs)("div",{className:r?"feedback-message ".concat(t):"feedback-message ".concat(t," d-none"),children:[Object(d.jsx)("p",{className:"info",children:a}),Object(d.jsx)("span",{className:"fas fa-times close-feedback-btn",onClick:function(){return l(!1)}})]})}),Z=function(e){var t=e.user,a=e.idx,n=j().user;return Object(d.jsxs)("tr",{className:t._id===n.id?"active":"",children:[Object(d.jsx)("td",{children:a+1}),Object(d.jsx)("td",{children:t.name}),Object(d.jsx)("td",{children:t.stats.length}),Object(d.jsx)("td",{children:t.totalGoals}),Object(d.jsx)("td",{children:t.won}),Object(d.jsx)("td",{children:t.lost}),Object(d.jsx)("td",{children:t.drawn}),Object(d.jsx)("td",{children:t.totalPoints})]})},$=function(e,t){switch(t.type){case N:return{loading:!0};case y:return{loading:!1,user:t.payload,success:!0};case _:return{loading:!1,error:t.payload};default:return e}},ee=function(e,t){switch(t.type){case E:return{loading:!0};case S:return{loading:!1,user:t.payload,success:!0};case w:return{loading:!1,error:t.payload};case"USER_LOGOUT":return{};default:return e}},te=function(e,t){switch(t.type){case C:return{loading:!0};case k:return{loading:!1,users:t.payload};case R:return{loading:!1,error:t.payload};default:return e}},ae=(a(56),function(){return Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)("span",{className:"fas fa-spinner fa-spin"})})}),ne=function(e,t){switch(console.log(t.type,t.payload),t.type){case P:return{loading:!0};case J:return{loading:!1,matches:t.payload};case Q:return{loading:!1,error:t.payload};default:return e}},se=function(e,t){switch(t.type){case G:return{loading:!0};case I:return{loading:!1,success:t.payload};case F:return{loading:!1,error:t.payload};default:return e}},ce=function(e,t){switch(t.type){case A:return{loading:!0};case U:return{loading:!1,success:t.payload};case L:return{loading:!1,error:t.payload};default:return e}},re=function(e,t){switch(t.type){case M:return{loading:!0};case H:return{loading:!1,success:t.payload};case D:return{loading:!1,error:t.payload};default:return e}},oe=function(){var e,t,a,s=Object(l.f)(),c=j(),r=c.user,u=c.setEditId,p=Object(n.useReducer)(te),b=Object(o.a)(p,2),m=b[0],O=b[1],v=Object(n.useReducer)(ne),f=Object(o.a)(v,2),x=f[0],g=f[1],N=Object(n.useReducer)(re),y=Object(o.a)(N,2),_=y[0],E=y[1];return Object(n.useEffect)((function(){(null===r||void 0===r?void 0:r.token)?(W(O),X(g)):s("/login")}),[r,s,null===_||void 0===_?void 0:_.success]),Object(d.jsxs)("div",{className:"container home",children:[(null===m||void 0===m?void 0:m.error)&&Object(d.jsx)(Y,{type:"error",children:null===m||void 0===m?void 0:m.error}),(null===m||void 0===m?void 0:m.loading)?Object(d.jsx)(ae,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"home-landing",children:[Object(d.jsxs)("h1",{className:"display1",children:["Welcome back ",Object(d.jsxs)("span",{children:[" ",r&&r.name]})]}),Object(d.jsx)("p",{className:"text-muted",children:"Here is how the table stands as per the past matches."})]}),Object(d.jsx)("div",{className:"competion-table",children:Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Rank"}),Object(d.jsx)("th",{children:"Gamer"}),Object(d.jsx)("th",{children:"Gp"}),Object(d.jsx)("th",{children:"Gd"}),Object(d.jsx)("th",{children:"W"}),Object(d.jsx)("th",{children:"L"}),Object(d.jsx)("th",{children:"D"}),Object(d.jsx)("th",{children:"Pts"})]})}),Object(d.jsx)("tbody",{children:null===m||void 0===m||null===(e=m.users)||void 0===e?void 0:e.map((function(e,t){return Object(d.jsx)(Z,{user:e,idx:t},e._id)}))})]})})]}),Object(d.jsxs)("div",{className:"match-results-container",children:[Object(d.jsx)("h1",{className:"title",children:(null===x||void 0===x||null===(t=x.matches)||void 0===t?void 0:t.length)>0?"Previous match results":"No matches have been added yet."}),(null===x||void 0===x?void 0:x.loading)?Object(d.jsx)(ae,{}):Object(d.jsx)("div",{className:"match-results",children:null===x||void 0===x||null===(a=x.matches)||void 0===a?void 0:a.map((function(e){var t,a;return Object(d.jsxs)("div",{className:"match-result",children:[Object(d.jsxs)("div",{className:"match-result-wrapper",children:[Object(d.jsx)("div",{className:"player",children:Object(d.jsx)("h4",{className:"name",children:null===m||void 0===m||null===(t=m.users)||void 0===t?void 0:t.find((function(t){return t._id===e.player})).name})}),Object(d.jsxs)("div",{className:"divider",children:[Object(d.jsx)("span",{className:"score",children:e.playerGoals}),Object(d.jsx)("span",{className:"divider-middle",children:" vs"}),Object(d.jsx)("span",{className:"score",children:e.opponentGoals})]}),Object(d.jsx)("div",{className:"player",children:Object(d.jsx)("h4",{className:"name",children:null===m||void 0===m||null===(a=m.users)||void 0===a?void 0:a.find((function(t){return t._id===e.opponent})).name})})]}),Object(d.jsxs)("div",{className:"admin"===(null===r||void 0===r?void 0:r.role)?"match-result-footer j-between":"match-result-footer j-center",children:[Object(d.jsx)("h3",{className:"time-tracker",children:h()(e.updatedAt).fromNow()}),"admin"===(null===r||void 0===r?void 0:r.role)&&Object(d.jsxs)("div",{className:"tools-icons",children:[Object(d.jsx)(i.b,{to:"/contest",onClick:function(){return u(e._id)},className:"tool-icon",children:Object(d.jsx)("span",{className:"fas fa-edit"})}),Object(d.jsx)("span",{className:"fas fa-trash tool-icon",onClick:function(){return t=e._id,a=e.opponent,n=e.player,void(window.confirm("Are you sure you want to delete this action can't be undone")&&V(E,t,{opponentId:a,playerId:n},r));var t,a,n}})]})]})]},e._id)}))})]})]})},le=a(11),ie=a(5),de=(a(16),function(){var e=Object(n.useState)({name:"",email:"",password:""}),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(l.f)(),r={loading:!1,user:j().user,error:null},u=Object(n.useReducer)(ee,r),p=Object(o.a)(u,2),b=p[0],m=p[1],h=function(e){s(Object(ie.a)(Object(ie.a)({},a),{},Object(le.a)({},e.target.name,e.target.value)))};return Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("userLogin"))&&c("/")}),[c]),console.log(b),Object(d.jsx)("div",{className:"auth",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"auth-wrapper",children:[Object(d.jsxs)("div",{className:"tabs-header",children:[Object(d.jsx)("div",{className:"tab",children:Object(d.jsx)(i.b,{to:"/register",children:"Register"})}),Object(d.jsx)("div",{className:"tab",children:Object(d.jsx)(i.b,{to:"/login",className:"tab-active",children:"Login"})})]}),Object(d.jsxs)("form",{className:"auth-form",children:[Object(d.jsxs)("div",{className:"form-header",children:[Object(d.jsx)("h1",{className:"display1",children:"Login"}),Object(d.jsx)("p",{className:"text-muted",children:"Login into your account "})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("input",{type:"email",className:"form-control",name:"email",value:a.email,onChange:function(e){return h(e)},id:"email",placeholder:" "}),Object(d.jsx)("label",{htmlFor:"email",className:"form-label",children:"Enter Email Address"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("input",{type:"password",className:"form-control",name:"password",value:a.password,onChange:function(e){return h(e)},id:"password",placeholder:" "}),Object(d.jsx)("label",{htmlFor:"password",className:"form-label",children:"Enter Password"})]}),Object(d.jsxs)("div",{className:"form-footer",children:[Object(d.jsx)("button",{className:"form-submit",onClick:function(e){e.preventDefault(),z(m,a,c)},disabled:null===b||void 0===b?void 0:b.loading,children:(null===b||void 0===b?void 0:b.loading)?"Loading please wait":"Login"}),Object(d.jsxs)("p",{children:["Forgot password?",Object(d.jsx)(i.b,{to:"/reset-password",className:"auth-redirect",children:"Reset here"})]})]})]}),(null===b||void 0===b?void 0:b.success)&&Object(d.jsx)(Y,{type:"success",children:"Login successful you are being redirected!"}),(null===b||void 0===b?void 0:b.error)&&Object(d.jsx)(Y,{type:"error",children:null===b||void 0===b?void 0:b.error})]})})})}),ue=function(){return Object(d.jsx)("div",{children:"Coming soon"})},je=function(){var e=j().user,t=Object(l.f)(),a=Object(n.useState)({name:"",email:"",password:""}),s=Object(o.a)(a,2),c=s[0],r=s[1],u=function(e){r(Object(ie.a)(Object(ie.a)({},c),{},Object(le.a)({},e.target.name,e.target.value)))},p={loading:!1,user:e,error:null},b=Object(n.useReducer)($,p),m=Object(o.a)(b,2),h=m[0],O=m[1];return Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("userLogin"))&&t("/")}),[t]),Object(d.jsx)("div",{className:"auth",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"auth-wrapper",children:[Object(d.jsxs)("div",{className:"tabs-header",children:[Object(d.jsx)("div",{className:"tab",children:Object(d.jsx)(i.b,{to:"/register",className:"tab-active",children:"Register"})}),Object(d.jsx)("div",{className:"tab",children:Object(d.jsx)(i.b,{to:"/login",children:"Login"})})]}),Object(d.jsxs)("form",{className:"auth-form",children:[Object(d.jsxs)("div",{className:"form-header",children:[Object(d.jsx)("h1",{className:"display1",children:"Register"}),Object(d.jsx)("p",{className:"text-muted",children:"Create a new account "})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("input",{type:"text",name:"name",className:"form-control",id:"name",value:c.name,onChange:function(e){return u(e)},placeholder:" "}),Object(d.jsx)("label",{htmlFor:"name",className:"form-label",children:"Enter Name"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("input",{type:"email",className:"form-control",name:"email",id:"email",value:c.email,onChange:function(e){return u(e)},placeholder:" "}),Object(d.jsx)("label",{htmlFor:"email",className:"form-label",children:"Enter Email Address"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("input",{type:"password",className:"form-control",name:"password",id:"password",value:c.password,onChange:function(e){return u(e)},placeholder:" "}),Object(d.jsx)("label",{htmlFor:"password",className:"form-label",children:"Enter Password"})]}),Object(d.jsxs)("div",{className:"form-footer",children:[Object(d.jsx)("button",{className:"form-submit",onClick:function(e){e.preventDefault(),B(O,c,t)},disabled:null===h||void 0===h?void 0:h.loading,children:(null===h||void 0===h?void 0:h.loading)?"Loading please wait":"Register"}),Object(d.jsxs)("p",{children:["Forgot password?",Object(d.jsx)(i.b,{to:"/reset-password",className:"auth-redirect",children:"Reset here"})]})]})]}),(null===h||void 0===h?void 0:h.success)&&Object(d.jsx)(Y,{type:"success",children:"Account created successfully you are being redirected!"}),(null===h||void 0===h?void 0:h.error)&&Object(d.jsx)(Y,{type:"error",children:null===h||void 0===h?void 0:h.error})]})})})},pe=function(){var e,t=Object(l.f)(),a=j(),s=a.users,c=a.setUsers,r=a.user,i=a.editId,u=a.setEditId,p=Object(n.useState)(null),b=Object(o.a)(p,2),m=b[0],h=b[1],O=Object(n.useReducer)(ne),x=Object(o.a)(O,2),N=x[0],y=x[1],_=Object(n.useReducer)(se),E=Object(o.a)(_,2),S=E[0],w=E[1],C=Object(n.useReducer)(ce),k=Object(o.a)(C,2),R=k[0],A=k[1],U=i?null===N||void 0===N||null===(e=N.matches)||void 0===e?void 0:e.find((function(e){return e._id===i})):null,L=Object(n.useState)({id:"",goals:0}),G=Object(o.a)(L,2),I=G[0],F=G[1],M=Object(n.useState)({id:"",goals:0}),H=Object(o.a)(M,2),D=H[0],P=H[1],J=function(e){"number"===e.target.type&&((isNaN(e.target.value)||e.target.value<0)&&(e.target.value=0),"playerGoals"===e.target.name?F(Object(ie.a)(Object(ie.a)({},I),{},{goals:e.target.value})):P(Object(ie.a)(Object(ie.a)({},D),{},{goals:e.target.value})))};return Object(n.useEffect)((function(){var e=function(){var e=Object(f.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(T,"/users/"));case 3:t=e.sent,a=t.data,c(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),h("No internet Connection!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e(),X(y)}),[]),Object(n.useEffect)((function(){U&&(P(Object(ie.a)(Object(ie.a)({},D),{},{id:U.opponent,goals:U.opponentGoals})),F(Object(ie.a)(Object(ie.a)({},I),{},{id:U.player,goals:U.playerGoals})))}),[U]),Object(n.useEffect)((function(){"admin"!==(null===r||void 0===r?void 0:r.role)&&t("/")}),[null===r||void 0===r?void 0:r.role,t]),console.log(S),Object(d.jsx)("div",{className:"auth",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"auth-wrapper",children:[Object(d.jsxs)("form",{className:"auth-form",children:[Object(d.jsx)("div",{className:"form-header",children:Object(d.jsx)("p",{className:"text-muted",children:i?"Editng match #".concat(U&&U._id):"Record Match Outcome"})}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsxs)("select",{className:"form-select",name:"player",value:I.id,onSelect:function(){return alert("hello world")},onChange:function(e){return F(Object(ie.a)(Object(ie.a)({},I),{},{id:e.target.value}))},children:[Object(d.jsx)("option",{value:""}),s&&s.filter((function(e){return e._id!==D.id})).map((function(e){return Object(d.jsx)("option",{value:e._id,children:e.name},e._id)}))]}),Object(d.jsx)("label",{className:"form-label",children:"Player"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("input",{type:"number",className:"form-control",name:"playerGoals",id:"playerGoals",value:I.goals,onChange:function(e){return J(e)}}),Object(d.jsx)("label",{htmlFor:"playerGoals",className:"form-label",children:"Player Goals"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsxs)("select",{className:"form-select",name:"opponent",value:D.id,onChange:function(e){return P(Object(ie.a)(Object(ie.a)({},D),{},{id:e.target.value}))},children:[Object(d.jsx)("option",{value:""}),s&&s.filter((function(e){return e._id!==I.id})).map((function(e){return Object(d.jsx)("option",{value:e._id,children:e.name},e._id)}))]}),Object(d.jsx)("label",{className:"form-label",children:"Opponent"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("input",{type:"number",className:"form-control",name:"opponentGoals",id:"opponentGoals",value:D.goals,onChange:function(e){return J(e)}}),Object(d.jsx)("label",{htmlFor:"opponentGoals",className:"form-label",children:"Opponent Goals"})]}),Object(d.jsx)("div",{className:"form-footer",children:Object(d.jsx)("button",{className:"form-submit",onClick:function(e){e.preventDefault(),i?(K(A,{player:I,opponent:D},r,U._id),u(null),P({id:"",goals:0}),F({id:"",goals:0})):(q(w,{player:I,opponent:D},r),P({id:"",goals:0}),F({id:"",goals:0}))},disabled:null===S||void 0===S?void 0:S.loading,children:(null===S||void 0===S?void 0:S.loading)||(null===R||void 0===R?void 0:R.loading)?"Saving please wait":"Save"})})]}),(null===S||void 0===S?void 0:S.success)&&Object(d.jsx)(Y,{type:"success",children:"Details Updated successfully"}),(null===R||void 0===R?void 0:R.success)&&Object(d.jsx)(Y,{type:"success",children:"Details Updated successfully"}),(null===S||void 0===S?void 0:S.error)&&Object(d.jsx)(Y,{type:"error",children:null===S||void 0===S?void 0:S.error}),(null===R||void 0===R?void 0:R.error)&&Object(d.jsx)(Y,{type:"error",children:null===R||void 0===R?void 0:R.error}),m&&Object(d.jsx)(Y,{type:"error",children:m})]})})})};var be=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(l.e)();return Object(n.useEffect)((function(){"/register"===c.pathname||"/login"===c.pathname||"/reset-password"===c.pathname?s(!1):s(!0)}),[c]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"app",children:[a&&Object(d.jsx)(b,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",element:Object(d.jsx)(oe,{})}),Object(d.jsx)(l.a,{path:"/profile",element:Object(d.jsx)(ue,{})}),Object(d.jsx)(l.a,{path:"/login",element:Object(d.jsx)(de,{})}),Object(d.jsx)(l.a,{path:"/register",element:Object(d.jsx)(je,{})}),Object(d.jsx)(l.a,{path:"/contest",element:Object(d.jsx)(pe,{})})]})]})})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(p,{children:Object(d.jsx)(be,{})})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.28b1015a.chunk.js.map