(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{83:function(e,t,c){var n={"./containers/HomePage/HomePage.scss":84,"./scss/index.scss":85,"./scss/variable.scss":86};function r(e){var t=a(e);return c(t)}function a(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id=83},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var n=c(14),r=c(17),a=c(6),s=c(12);c(20),Object({NODE_ENV:"production",PUBLIC_URL:"/2022_Car_price_prediction",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_API;var i={predictCarPrice:function(e){return new Promise((function(e){setTimeout((function(){e(l)}),2e3)}))}},l={status:"success",car_price:1e8};var o=c(1),d=c.n(o),j=c(4),u=["Sedan","Minivan (MPV)","Hatchback","SUV / Cross over","Pick-up (b\xe1n t\u1ea3i)","Van","Coupe (2 c\u1eeda)","Mui tr\u1ea7n","Ki\u1ec3u d\xe1ng kh\xe1c"],b=["\u0110\xe3 s\u1eed d\u1ee5ng","M\u1edbi"],m=["T\u1ef1 \u0111\u1ed9ng","B\xe1n t\u1ef1 \u0111\u1ed9ng","S\u1ed1 s\xe0n","Unknown"],O=["X\u0103ng","D\u1ea7u","\u0110\u1ed9ng c\u01a1 Hybird","Unknown"],h=c(3);function p(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(j.c,{className:"col-6",children:[Object(h.jsx)(j.e,{for:"input_brand_name",children:"Brand name: "}),Object(h.jsx)(j.d,{type:"text",name:"brand_name",id:"input_brand_name",placeholder:"Input brand"})]}),Object(h.jsxs)(j.c,{className:"col-6",children:[Object(h.jsx)(j.e,{for:"input_model",children:"Model: "}),Object(h.jsx)(j.d,{type:"text",name:"model",id:"input_model",placeholder:"Input model"})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(j.c,{className:"col-6",children:[Object(h.jsx)(j.e,{for:"input_year",children:"Year: "}),Object(h.jsxs)(j.d,{type:"select",name:"car_year",id:"input_year",defaultValue:"",children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"--Select year--"}),Array.from(new Array(73)).map((function(e,t){return Object(h.jsx)("option",{value:72-t+1950,children:72-t+1950},t)}))]})]}),Object(h.jsxs)(j.c,{className:"col-6",children:[Object(h.jsx)(j.e,{for:"input_style",children:"Style: "}),Object(h.jsxs)(j.d,{type:"select",name:"style",id:"input_style",defaultValue:"",children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"--Select style--"}),u.map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)}))]})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(j.c,{className:"col-6",children:[Object(h.jsx)(j.e,{for:"input_origin",children:"Origin:"}),Object(h.jsx)(j.d,{type:"text",name:"origin",id:"input_origin",placeholder:"Input origin"})]}),Object(h.jsxs)(j.c,{className:"col-6",children:[Object(h.jsx)(j.e,{for:"input_region_name",children:"Region: "}),Object(h.jsx)(j.d,{type:"text",name:"region",id:"input_region_name",placeholder:"Input region name"})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(j.c,{className:"col-6",children:[Object(h.jsx)(j.e,{for:"input_gear",children:"Gear: "}),Object(h.jsxs)(j.d,{type:"select",name:"gear",id:"input_gear",defaultValue:"",children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"--Select gear--"}),m.map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)}))]})]}),Object(h.jsxs)(j.c,{className:"col-6",children:[Object(h.jsx)(j.e,{for:"input_fuel",children:"Fuel: "}),Object(h.jsxs)(j.d,{type:"select",name:"fuel",id:"input_fuel",defaultValue:"",children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"--Select type of fuel--"}),O.map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)}))]})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(j.c,{className:"col-6",children:[Object(h.jsx)(j.e,{for:"input_color",children:"Color: "}),Object(h.jsx)(j.d,{type:"text",name:"car_color",id:"input_color",placeholder:"Color"})]}),Object(h.jsxs)(j.c,{className:"col-6",children:[Object(h.jsx)(j.e,{for:"input_car_seats",children:"Seat: "}),Object(h.jsx)(j.d,{type:"number",name:"car_seats",id:"input_car_seats",placeholder:"Input number of seats"})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(j.c,{className:"col-6",children:[Object(h.jsx)(j.e,{for:"input_status",children:"Status: "}),Object(h.jsxs)(j.d,{type:"select",name:"status",id:"input_status",defaultValue:"",children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"--Select status--"}),b.map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)}))]})]}),Object(h.jsxs)(j.c,{className:"col-6",children:[Object(h.jsx)(j.e,{for:"input_car_mileage",children:"Mile age: "}),Object(h.jsx)(j.d,{type:"number",name:"car_mileage",id:"input_car_mileage",placeholder:"Input mileage"})]})]})]})}var x=c(34),f=c.n(x);var _=[{path:"/",exact:!0,element:function(){var e=Object(o.useState)(0),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(o.useState)(!1),l=Object(a.a)(r,2),d=l[0],u=l[1];return Object(h.jsxs)(j.b,{method:"POST",className:"HomePage",onSubmit:function(e){e.preventDefault();var t={};["brand_name","model","car_year","fuel","origin","region","gear","car_color","car_seats","status","car_mileage","style"].forEach((function(c){t[c]=e.target[c].value}));try{var c=!1,r=0;[["brand_name","brand name"],["model","model name"],["style","style"],["origin","origin"],["region","region_name"],["gear","type of gear"],["fuel","type of fuel"],["car_color","color"],["status","status"]].forEach((function(e){0===t[e[0]].length&&(c=!0,++r<=3&&s.b.error("Missing "+e[1]))})),[["car_year","year"],["car_seats","number of seats"],["car_mileage","milage"]].forEach((function(e){0===t[e[0]].length?(c=!0,++r<=3&&s.b.error("Missing "+e[1])):t[e[0]]=+t[e[0]]})),c||(u(!0),i.predictCarPrice(t).then((function(e){n(null===e||void 0===e?void 0:e.car_price)})).catch((function(e){s.b.error(e.message||e||"Something was wrong!!")})).finally((function(){u(!1)})))}catch(a){console.log(a),s.b.error(a.message||"Unknown error on validating input. Try again")}console.log(t)},children:[Object(h.jsxs)("div",{className:"HomePage__left",children:[Object(h.jsxs)("div",{className:"heading",children:[Object(h.jsx)("h2",{className:"no-select",children:"Input car information:"}),Object(h.jsx)("div",{className:"submit-area",children:Object(h.jsx)(j.a,{disabled:d,type:"submit",children:"Submit"})})]}),Object(h.jsx)(p,{})]}),Object(h.jsxs)("div",{className:"HomePage__right",children:[Object(h.jsx)("h2",{className:"no-select",children:"Car price predict:"}),d?Object(h.jsx)("div",{className:"pacman-loading",children:Object(h.jsx)(f.a,{color:"salmon"})}):function(){return c?Object(h.jsxs)("div",{id:"result",children:[Object(h.jsx)("span",{children:(e=c,e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}),Object(h.jsx)("span",{children:" VN\u0110"})]}):Object(h.jsx)("div",{id:"input_required",children:". . ."});var e}()]})]})},htmlTitle:"Home"}],g=_[0],v=c(5),y=["htmlTitle","element"];function N(e){var t=e.htmlTitle,c=e.element,a=Object(r.a)(e,y);return Object(o.useEffect)((function(){window.document.title=t||"Calendar"}),[]),Object(h.jsx)(c,Object(n.a)({},a))}c(69);var S={};function w(e,t){Object(n.a)({},e),t.type,t.payload;throw new Error("Invalid action")}var T=Object(o.createContext)();function C(e){var t=e.children,c=Object(o.useReducer)(w,S),n=Object(a.a)(c,2),r=n[0],s=n[1];return Object(h.jsx)(T.Provider,{value:[r,s],children:t})}var P=c(10),E=["htmlTitle","path","exact","element"];var k,H=function(){var e=function(){var e=Object(o.useContext)(T),t=Object(a.a)(e,2);return[t[0],t[1]]}(),t=Object(a.a)(e,1)[0].isDarkTheme;return Object(h.jsxs)("div",{className:Object(P.a)("App",{dark:t}),children:[Object(h.jsxs)(v.d,{children:[_.map((function(e,t){var c=e.htmlTitle,a=e.path,s=e.exact,i=e.element,l=Object(r.a)(e,E);return Object(h.jsx)(v.b,{exact:s,path:a,element:Object(h.jsx)(N,Object(n.a)({htmlTitle:c,element:i},l))},t)})),Object(h.jsx)(v.b,{path:"*",element:Object(h.jsx)(v.a,{replace:!0,to:g.path})})]}),Object(h.jsx)(s.a,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})},I=c(9),M=c.n(I),V=c(23);c(81),c(82);(k=c(83)).keys().forEach(k),M.a.render(Object(h.jsx)(d.a.StrictMode,{children:Object(h.jsx)(C,{children:Object(h.jsx)(V.a,{children:Object(h.jsx)(H,{})})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.1c2b0688.chunk.js.map