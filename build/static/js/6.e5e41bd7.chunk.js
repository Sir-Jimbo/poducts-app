(this.webpackJsonpproductsAPP=this.webpackJsonpproductsAPP||[]).push([[6],{139:function(t,e,n){"use strict";var a={getLoading:function(t){return t.products.loading},getAllProducts:function(t){return t.products.products},getAllPages:function(t){return t.products.page},getError:function(t){return t.products.error}};e.a=a},140:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var a=n(2),r=n(0),o=n(153),i=(n(16),n(139)),c=n(20),s=n(5),u=n(13),l=n(141),b=n.n(l);function f(t){var e=t.message,n=Object(u.b)(),l=(Object(u.c)(i.a.getError),Object(u.c)(c.a.getError)),f=Object(r.useCallback)((function(){return n(s.a.clearError())}),[n]);return Object(r.useEffect)((function(){setTimeout((function(){f()}),2500)}),[l,f]),Object(a.jsx)(o.a,{in:e,timeout:250,classNames:b.a,unmountOnExit:!0,children:Object(a.jsx)("div",{className:b.a.overlay,children:Object(a.jsx)("p",{className:b.a.message,children:e})})})}},141:function(t,e,n){t.exports={overlay:"Notification_overlay__25sWX",message:"Notification_message__Qx2_p",enter:"Notification_enter__1cwAv",enterActive:"Notification_enterActive__4XaJn",exit:"Notification_exit__1Nbxi",exitActive:"Notification_exitActive__XLBCH"}},147:function(t,e,n){t.exports={form:"LoginPage_form__jVq4R",label:"LoginPage_label__jL5Oh",input:"LoginPage_input__n47VH",button:"LoginPage_button__2oVW5"}},154:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j}));var a=n(2);var r=n(58);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(s){r=!0,o=s}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n(0),c=n(13),s=n(37),u=n(153),l=n(20),b=n(140),f=n(35),m=n(147),d=n.n(m);function j(){var t=Object(c.b)(),e=o(Object(i.useState)(""),2),n=e[0],r=e[1],m=o(Object(i.useState)(""),2),j=m[0],p=m[1],g=Object(c.c)(l.a.getError),_=Object(c.c)(l.a.getLoading),v=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"email":return r(a);case"password":return p(a);default:return void console.warn("\u0422\u0438\u043f \u043f\u043e\u043b\u044f name - ".concat(n," \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f!"))}};return Object(a.jsxs)("div",{children:[Object(a.jsx)(u.a,{in:!0,appear:!0,timeout:500,classNames:d.a,unmountOnExit:!0,children:Object(a.jsx)("h1",{className:d.a.title,children:"Enter your data"})}),Object(a.jsx)(b.a,{message:g}),_&&Object(a.jsx)(f.a,{}),Object(a.jsxs)("form",{className:d.a.form,onSubmit:function(e){e.preventDefault(),t(s.a.login({email:n,password:j})),r(""),p("")},autoComplete:"off",children:[Object(a.jsx)("label",{htmlFor:"email",className:d.a.label,children:"Email "}),Object(a.jsx)("input",{className:d.a.input,type:"email",name:"email",value:n,onChange:v}),Object(a.jsx)("label",{htmlFor:"password",className:d.a.label,children:"Password"}),Object(a.jsx)("input",{className:d.a.input,type:"password",name:"password",value:j,onChange:v}),Object(a.jsx)("button",{className:d.a.button,type:"submit",children:"Login"})]})]})}}}]);
//# sourceMappingURL=6.e5e41bd7.chunk.js.map