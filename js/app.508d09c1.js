(function(e){function t(t){for(var r,l,c=t[0],a=t[1],i=t[2],b=0,f=[];b<c.length;b++)l=c[b],Object.prototype.hasOwnProperty.call(u,l)&&u[l]&&f.push(u[l][0]),u[l]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==u[a]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},u={app:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-next-v-model-incorrect/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var p=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("830f"),u=n("5c40"),o={id:"app"},l=Object(u["h"])("div",null,[Object(u["h"])("h1",null,"Vue 3 v-model behaviour"),Object(u["h"])("a",{href:"https://github.com/flatdragon/vue-next-v-model-incorrect/blob/master/src/App.vue"},"See GitHub component source code")],-1),c=Object(u["h"])("h2",null,"Using REF",-1),a=Object(u["h"])("h2",null,"Using REACTIVE",-1);function i(e,t){return Object(u["m"])(),Object(u["e"])("div",o,[l,Object(u["h"])("div",null,[c,Object(u["h"])("div",null,"Input value: "+Object(u["p"])(e.value),1),Object(u["s"])(Object(u["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.value=t})},null,512),[[r["b"],e.value]])]),Object(u["h"])("div",null,[a,Object(u["h"])("div",null,"Input value: "+Object(u["p"])(e.state.value),1),Object(u["s"])(Object(u["h"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.state.value=t})},null,512),[[r["b"],e.state.value]])])])}var p=n("a1e9"),b={name:"App",setup:function(){var e=Object(p["h"])(void 0),t=Object(p["g"])({});return{value:e,state:t}}};b.render=i;var f=b;Object(r["a"])(f).mount("#app")}});
//# sourceMappingURL=app.508d09c1.js.map