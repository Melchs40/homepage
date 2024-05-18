(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,"html,\nbody {\n  background-color: white;\n  margin: 0;\n}\n\n#content {\n  height: auto;\n  background-color: lightblue;\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n\n#nav-container {\n  position: fixed;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  height: 4rem;\n  width: calc(100% - 6rem);\n  background-color: lightcoral;\n}\n\n#test-child2 {\n  height: 880px;\n  width: 100%;\n  background-color: lightgreen;\n  padding-top: 6rem;\n}\n\n#test-child3 {\n  height: 200px;\n  width: 100%;\n  background-color: orange;\n}\n\n#nav-link-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  justify-items: end;\n}\n\n.nav-link {\n  margin: 1rem;\n}",""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],s=o[l]||0,u="".concat(l," ").concat(s);o[l]=s+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var d=r(e,a),l=0;l<o.length;l++){var s=n(o[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=d}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),a=n.n(r),o=n(659),i=n.n(o),c=n(56),d=n.n(c),l=n(540),s=n.n(l),u=n(113),p=n.n(u),m=n(208),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=s(),t()(m.A,f),m.A&&m.A.locals&&m.A.locals;let v=document.createElement("header");v.setAttribute("id","nav-container");let h=document.createElement("div");h.setAttribute("id","logo-container");let g=document.createElement("img");g.setAttribute("id","logo"),g.src="../images/mylogo.png",g.alt="My logo";let y=document.createElement("div");y.setAttribute("id","nav-link-container");let b=document.createElement("div");b.classList.add("nav-link"),b.innerHTML="Home";let C=document.createElement("div");C.classList.add("nav-link"),C.innerHTML="Projects";let x=document.createElement("div");x.classList.add("nav-link"),x.innerHTML="Resume";let E=document.createElement("div");E.classList.add("nav-link"),E.innerHTML="Contact",v.appendChild(h),v.appendChild(y),h.appendChild(g),y.appendChild(b),y.appendChild(C),y.appendChild(x),y.appendChild(E);let A=document.getElementById("content"),k=document.createElement("div");k.setAttribute("id","test-child2");let M=document.createElement("div");M.setAttribute("id","test-child3"),A.appendChild(v),A.appendChild(k),k.appendChild(M)})()})();