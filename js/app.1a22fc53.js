(function(e){function t(t){for(var r,a,u=t[0],l=t[1],i=t[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/testapp/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var s=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"26fa":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t){var n=Object(r["u"])("router-view");return Object(r["o"])(),Object(r["c"])(n)}var c=n("6b0d"),a=n.n(c);const u={},l=a()(u,[["render",o]]);var i=l,s=n("6c02"),f=(n("b0c0"),{class:"container"}),d={class:"container-main"},p={class:"container-form"},m=Object(r["e"])("div",{class:"name"},"Регистрация",-1),b={class:"container-input"},v=Object(r["e"])("div",{class:"name-icon"},null,-1),O={class:"container-input"},j=Object(r["e"])("div",{class:"pass-icon"},null,-1),h={class:"container-input"},y=Object(r["e"])("div",{class:"email-icon"},null,-1),g={class:"container-btn"};function V(e,t,n,o,c,a){var u=Object(r["u"])("Inputs"),l=Object(r["u"])("Button");return Object(r["o"])(),Object(r["d"])("div",f,[Object(r["e"])("div",d,[Object(r["e"])("div",p,[m,Object(r["e"])("div",b,[v,Object(r["f"])(u,{placeholder:"Имя",modelValue:c.form.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.form.name=e})},null,8,["modelValue"])]),Object(r["e"])("div",O,[j,Object(r["f"])(u,{placeholder:"Пароль",modelValue:c.form.pass,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.form.pass=e})},null,8,["modelValue"])]),Object(r["e"])("div",h,[y,Object(r["f"])(u,{placeholder:"Email",modelValue:c.form.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.form.email=e})},null,8,["modelValue"])]),Object(r["e"])("div",g,[Object(r["f"])(l,{onClick:a.regUser},null,8,["onClick"])])])])])}n("e9c4");function _(e,t){return Object(r["o"])(),Object(r["d"])("button",{class:"btn",onClick:t[0]||(t[0]=function(){return e.regUser&&e.regUser.apply(e,arguments)})},"Сохранить")}n("f3c6");const w={},I=a()(w,[["render",_],["__scopeId","data-v-bcb682ec"]]);var S=I,U=["value"];function P(e,t,n,o,c,a){return Object(r["o"])(),Object(r["d"])("input",{class:"input-data",type:"text",value:n.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,U)}var x={props:{modelValue:{type:String,default:null}}};n("a5fe");const k=a()(x,[["render",P],["__scopeId","data-v-0a1c64f4"]]);var J=k,M={components:{Button:S,Inputs:J},data:function(){return{form:{name:"",pass:"",email:""}}},methods:{regUser:function(){var e=JSON.stringify(this.form);localStorage.setItem("user",e),this.$router.push("Profile")}}};n("6ded");const C=a()(M,[["render",V]]);var B=C,N=function(e){return Object(r["r"])("data-v-86ca1d7c"),e=e(),Object(r["p"])(),e},T={class:"container"},$={class:"container-user-profile"},E={class:"container-input"},q=N((function(){return Object(r["e"])("div",{class:"name-icon"},null,-1)})),z={class:"container-input"},A=N((function(){return Object(r["e"])("div",{class:"email-icon"},null,-1)}));function D(e,t,n,o,c,a){var u=Object(r["u"])("Inputs");return Object(r["o"])(),Object(r["d"])("div",T,[Object(r["e"])("div",$,[Object(r["e"])("div",E,[q,Object(r["f"])(u,{modelValue:c.form.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.form.name=e})},null,8,["modelValue"])]),Object(r["e"])("div",z,[A,Object(r["f"])(u,{modelValue:c.form.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.form.email=e})},null,8,["modelValue"])])])])}var F={components:{Inputs:J},data:function(){return{form:{email:"",name:""}}},mounted:function(){var e;this.form=null!==(e=JSON.parse(localStorage.getItem("user")))&&void 0!==e?e:[]}};n("7a6f");const G=a()(F,[["render",D],["__scopeId","data-v-86ca1d7c"]]);var H=G,K=[{path:"/",name:"home",component:B},{path:"/profile",name:"profile",component:H}],L=Object(s["a"])({history:Object(s["b"])("/testapp/"),routes:K}),Q=L;Object(r["b"])(i).use(Q).mount("#app")},"6ded":function(e,t,n){"use strict";n("9926")},"7a6f":function(e,t,n){"use strict";n("26fa")},9926:function(e,t,n){},a5fe:function(e,t,n){"use strict";n("e351")},e351:function(e,t,n){},f3c6:function(e,t,n){"use strict";n("f675")},f675:function(e,t,n){}});
//# sourceMappingURL=app.1a22fc53.js.map