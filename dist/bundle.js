(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(601),i=n.n(a),o=n(314),r=n.n(o)()(i());r.push([e.id,'html,\nbody {\n  background-color: white;\n  margin: 0;\n  font-family: "Ubuntu Sans", sans-serif;\n}\n\n#content {\n  height: auto;\n  background-color: white;\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n\n#nav-container {\n  position: fixed;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  height: 4rem;\n  width: calc(100% - 6rem);\n  background-color: white;\n  border-bottom: 3px solid black;\n  padding-top: 1rem;\n  z-index: 2;\n}\n\n#nav-link-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  justify-items: end;\n}\n\n.nav-link {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: none;\n  background-color: white;\n  margin: 1rem;\n  color: black;\n  font-size: 1rem;\n  transition: all 0.5s ease-in-out;\n  border-radius: 25px;\n  padding: 0rem 0.5rem;\n}\n\n.nav-link:hover {\n  transform: scale(1.2);\n  color: white;\n  background-color: black;\n}\n\n#logo {\n  height: 3rem;\n  width: auto;\n  border: 1px solid black;\n  border-radius: 50%;\n  margin-left: 1rem;\n}\n\n.roll {\n  height: 3rem;\n  width: auto;\n  border: 1px solid black;\n  border-radius: 50%;\n  margin-left: 1rem;\n  display: block;\n  position: absolute;\n  left: 0;\n  animation: spin 6s ease-in-out 1, moveLeftToRight 6s ease-in-out 1;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(1800deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes moveLeftToRight {\n  0% {\n    left: 0%;\n  }\n  50% {\n    left: calc(100% - 4rem);\n  }\n  100% {\n    left: 0%;\n  }\n}\n#me-container {\n  background-color: white;\n  display: grid;\n  grid-template-rows: 8rem repeat(4, 6rem) 8rem;\n  grid-template-columns: 1fr 1fr 3fr;\n  padding-bottom: 3rem;\n  border-bottom: 1px solid black;\n}\n\n#me-background {\n  grid-area: 2/3/7/4;\n}\n\n#me-background-image {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: fill;\n     object-fit: fill;\n  overflow: hidden;\n  box-shadow: rgba(13, 13, 13, 0.4) -5px 5px, rgba(13, 13, 13, 0.3) -10px 10px, rgba(13, 13, 13, 0.2) -15px 15px, rgba(13, 13, 13, 0.1) -20px 20px, rgba(13, 13, 13, 0.05) -25px 25px;\n}\n\n#first-name {\n  grid-area: 2/1/3/4;\n  padding-left: 5%;\n  margin: 0;\n  font-size: 15vmin;\n  letter-spacing: 0.5rem;\n  -webkit-text-stroke: 2px white;\n  color: black;\n  opacity: 0;\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-delay: 0.5s;\n}\n\n#last-name {\n  grid-area: 3/1/4/4;\n  padding-left: 10%;\n  font-size: 15vmin;\n  margin: 0;\n  letter-spacing: 0.5rem;\n  -webkit-text-stroke: 2px white;\n  color: black;\n  opacity: 0;\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-delay: 1s;\n}\n\n#first-title {\n  grid-area: 4/1/5/4;\n  padding-left: 15%;\n  font-size: 15vmin;\n  margin: 0;\n  letter-spacing: 0.5rem;\n  -webkit-text-stroke: 2px white;\n  color: black;\n  opacity: 0;\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-delay: 1.5s;\n}\n\n#last-title {\n  grid-area: 5/1/6/4;\n  padding-left: 20%;\n  font-size: 15vmin;\n  margin: 0;\n  letter-spacing: 0.5rem;\n  -webkit-text-stroke: 2px white;\n  color: black;\n  opacity: 0;\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-delay: 2s;\n}\n\n@keyframes fadeInAnimation {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.main-text-transition {\n  opacity: 1;\n}\n\n.about-me-para,\n.about-me-title {\n  margin: 3rem 6rem;\n}\n\n.about-me-title {\n  font-size: 3rem;\n}\n\n#about-me-para-1 {\n  font-weight: 600;\n}\n\n#all-skills-container {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  padding-bottom: 5rem;\n  border-bottom: 1px solid black;\n}\n\n.skill-container {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;\n  height: 5rem;\n  margin: 10%;\n  transition: all 0.25s ease-in-out;\n}\n\n.skill-container:hover {\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n}\n\n.skill-logo {\n  padding-top: 0.5rem;\n  height: 50%;\n  width: auto;\n}\n\n.skill-label {\n  font-size: 0.75rem;\n  margin: auto;\n}\n\n#projects-container {\n  padding-bottom: 5rem;\n  border-bottom: 1px solid black;\n}\n\n.projects-title,\n.projects-disclosure {\n  margin: 3rem 6rem;\n}\n\n.projects-title {\n  font-size: 3rem;\n}\n\n.projects-disclosure {\n  font-size: 1rem;\n}\n\n.project-container-odd {\n  display: grid;\n  grid-template-columns: 1fr 1fr 2fr;\n  grid-template-rows: 1fr 2fr 2rem 2rem;\n  padding: 3rem 6rem;\n  gap: 1rem;\n}\n\n.project-container-even {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  grid-template-rows: 1fr 2fr;\n  padding: 3rem 6rem;\n  gap: 1rem;\n}\n\n.project-title-odd {\n  grid-area: 1/1/2/3;\n  justify-self: center;\n  font-size: 2rem;\n}\n\n.project-title-even {\n  grid-area: 1/2/2/4;\n  justify-self: center;\n  font-size: 2rem;\n}\n\n.project-para-odd {\n  grid-area: 2/1/3/3;\n}\n\n.project-para-even {\n  grid-area: 2/2/3/4;\n}\n\n.project-tech-odd {\n  grid-area: 4/1/5/4;\n  justify-self: center;\n  align-self: bottom;\n}\n\n.project-tech-even {\n  grid-area: 4/1/5/4;\n  justify-self: center;\n  align-self: bottom;\n}\n\n.project-source-odd {\n  grid-area: 3/1/4/2;\n  justify-self: end;\n}\n\n.project-live-odd {\n  grid-area: 3/2/4/3;\n  justify-self: start;\n}\n\n.project-source-even {\n  grid-area: 3/2/4/3;\n  justify-self: end;\n}\n\n.project-live-even {\n  grid-area: 3/3/4/4;\n  justify-self: start;\n}\n\n.project-source-odd,\n.project-live-odd,\n.project-source-even,\n.project-live-even {\n  text-align: center;\n  background-color: white;\n  border: 3px solid black;\n  height: 2rem;\n  width: 6rem;\n  border-radius: 20px;\n  text-decoration: none;\n  color: black;\n  font-weight: 700;\n  line-height: 2rem;\n  transition: all 0.25s ease-in-out;\n}\n\n.project-source-odd:after,\n.project-source-even:after {\n  font-family: "Material Icons";\n  content: "code";\n  vertical-align: bottom;\n}\n\n.project-live-odd:after,\n.project-live-even:after {\n  font-family: "Material Icons";\n  content: "open_in_new";\n  vertical-align: bottom;\n}\n\n.project-source-odd:hover,\n.project-live-odd:hover,\n.project-source-even:hover,\n.project-live-even:hover {\n  transform: scale(1.1);\n  color: white;\n  background-color: black;\n  text-decoration: underline;\n}\n\n.project-image-container-odd {\n  grid-area: 1/3/4/4;\n  height: 230px;\n  width: 460px;\n  align-self: center;\n  border: 1px solid black;\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 4px 8px 0px inset;\n}\n\n.project-image-container-even {\n  grid-area: 1/1/4/2;\n  height: 230px;\n  width: 460px;\n  align-self: center;\n  border: 1px solid black;\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 4px 8px 0px inset;\n}\n\n.project-image-odd {\n  margin-top: 1rem;\n  margin-left: 1rem;\n  height: 100%;\n  width: auto;\n  transition: all 0.5s ease-in-out;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n}\n\n.project-image-even {\n  margin-top: 1rem;\n  margin-left: -1rem;\n  height: 100%;\n  width: auto;\n  transition: all 0.5s ease-in-out;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n}\n\n.project-image-odd:hover,\n.project-image-even:hover {\n  margin-top: 0;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.project-bottom-border {\n  height: 1px;\n  width: 50%;\n  margin-left: 25%;\n  justify-self: center;\n  background-color: black;\n}\n\n#contact-container {\n  margin: 3rem 6rem;\n}\n\n.contact-title {\n  font-size: 3rem;\n}\n\n.contact-para {\n  font-size: 1rem;\n}\n\n#contact-form-container {\n  margin-top: 5rem;\n  position: relative;\n  left: 50%;\n}\n\n#contact-form {\n  margin-bottom: 10rem;\n  width: 50%;\n}\n\n.contact-items-container {\n  text-align: right;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: 6rem 1fr;\n  grid-template-rows: 2rem;\n}\n\n.contact-labels {\n  align-self: center;\n  width: 5rem;\n}\n\n.contact-fill-in {\n  min-width: 13rem;\n}\n\n#comment-fill-in {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  height: 10rem;\n  resize: none;\n}\n\n#contact-submit {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  margin-left: 7rem;\n  margin-top: 9rem;\n}\n\n#test-child3 {\n  height: 400px;\n  width: 100%;\n  background-color: lightgreen;\n  padding-top: 6rem;\n}',""]);const d=r},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(r[l]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);a&&r[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},r=[],d=0;d<e.length;d++){var l=e[d],s=a.base?l[0]+a.base:l[0],c=o[s]||0,p="".concat(s," ").concat(c);o[s]=c+1;var m=n(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=i(u,a);a.byIndex=d,t.splice(d,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=a(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var d=n(o[r]);t[d].references--}for(var l=a(e,i),s=0;s<o.length;s++){var c=n(o[s]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=l}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),a=n(825),i=n.n(a),o=n(659),r=n.n(o),d=n(56),l=n.n(d),s=n(540),c=n.n(s),p=n(113),m=n.n(p),u=n(208),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=r().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=c(),t()(u.A,h),u.A&&u.A.locals&&u.A.locals;let g=document.createElement("header");g.setAttribute("id","nav-container");let b=document.createElement("div");b.setAttribute("id","logo-container");let f=document.createElement("img");f.setAttribute("id","logo"),f.src="../images/Tuxedo38 Logo Black Background No Border.png",f.alt="My logo",f.addEventListener("click",(()=>{f.classList.add("roll"),setTimeout((()=>{f.classList.remove("roll")}),"6000")}));let v=document.createElement("div");v.setAttribute("id","nav-link-container");let L=document.createElement("button");L.classList.add("nav-link"),L.innerHTML="Home";let k=document.createElement("button");k.classList.add("nav-link"),k.innerHTML="About";let C=document.createElement("button");C.classList.add("nav-link"),C.innerHTML="Projects";let j=document.createElement("button");j.classList.add("nav-link"),j.innerHTML="Contact",g.appendChild(b),g.appendChild(v),b.appendChild(f),v.appendChild(L),v.appendChild(k),v.appendChild(C),v.appendChild(j);let y=document.createElement("div");y.setAttribute("id","me-container");let E=document.createElement("div");E.setAttribute("id","me-background");let x=document.createElement("img");x.setAttribute("id","me-background-image"),x.src="../images/pexels-teddy-2168238.jpg";let w=document.createElement("h1");w.classList.add("main-text"),w.setAttribute("id","first-name"),w.innerHTML="Samuel";let T=document.createElement("h1");T.classList.add("main-text"),T.setAttribute("id","last-name"),T.innerHTML="Melchior";let A=document.createElement("h1");A.classList.add("main-text"),A.setAttribute("id","first-title"),A.innerHTML="Web";let M=document.createElement("h1");M.classList.add("main-text"),M.setAttribute("id","last-title"),M.innerHTML="Developer",[].push(w,T,A,M),y.appendChild(E),E.appendChild(x),y.appendChild(w),y.appendChild(T),y.appendChild(A),y.appendChild(M);let H=document.createElement("div");H.setAttribute("id","about-me");let S=document.createElement("div");S.setAttribute("id","about-container"),H.appendChild(S);let I=document.createElement("h1");I.classList.add("about-me-title"),I.innerHTML="About Me.",S.appendChild(I);let z=document.createElement("p");z.setAttribute("id","about-me-para-1"),z.classList.add("about-me-para"),z.innerHTML="Hey there, I'm Sam (or Samuel as you may have noticed in the hero above) and I'm a web dev.",S.appendChild(z);let P=document.createElement("p");P.classList.add("about-me-para"),P.innerHTML="I've always enjoyed anything related to computers and had the urge to mess around and create things myself. From building LEGO sets in my youth to building custom PCs as an adult and jailbreaking my iPhone to install custom themes to solving just about any tech issue with my friends and family, I've used my creativity and knowledge of technology in my spare time. Now I've taken this passion and worked to build it into a career. My career in web development.",S.appendChild(P);let J=document.createElement("p");J.classList.add("about-me-para"),J.innerHTML="I graduated with high honors and earned a Bachelors Degree in Geography in 2014 and had worked for the United States Postal Service for roughly six years after that, but it didn't feel like my career path was where I wanted it to be. Since late 2022, I've been taking an online full-stack web dev bootcamp known as The Odin Project. I've been able to put to use a wide variety of languages, enviromments, and programs to create a variety of experiences, projects, and webpages. My creativity and problem solving skills are shown throughout the projects section below <i><small>(go on, click the projects button or scroll down. I'll still be here when you get back)</small></i> and on this page itself. I hope you give them a look and have some fun playing around!",S.appendChild(J);let _=document.createElement("div");_.setAttribute("id","all-skills-container"),H.appendChild(_);let W=document.createElement("div");W.setAttribute("id","html-container"),W.classList.add("skill-container"),_.appendChild(W);let G=document.createElement("img");G.setAttribute("id","html-logo"),G.classList.add("skill-logo"),G.src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",G.alt="HTML 5 logo",W.appendChild(G);let N=document.createElement("label");N.classList.add("skill-label"),N.innerHTML="HTML 5",W.appendChild(N);let O=document.createElement("div");O.setAttribute("id","css-container"),O.classList.add("skill-container"),_.appendChild(O);let B=document.createElement("img");B.setAttribute("id","css-logo"),B.classList.add("skill-logo"),B.src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",B.alt="CSS 3 logo",O.appendChild(B);let R=document.createElement("label");R.classList.add("skill-label"),R.innerHTML="CSS 3",O.appendChild(R);let D=document.createElement("div");D.setAttribute("id","js-container"),D.classList.add("skill-container"),_.appendChild(D);let F=document.createElement("img");F.setAttribute("id","js-logo"),F.classList.add("skill-logo"),F.src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",F.alt="Javascript logo",D.appendChild(F);let q=document.createElement("label");q.classList.add("skill-label"),q.innerHTML="Javascript",D.appendChild(q);let U=document.createElement("div");U.setAttribute("id","sass-container"),U.classList.add("skill-container"),_.appendChild(U);let V=document.createElement("img");V.setAttribute("id","sass-logo"),V.classList.add("skill-logo"),V.src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",V.alt="Sass logo",U.appendChild(V);let K=document.createElement("label");K.classList.add("skill-label"),K.innerHTML="Sass",U.appendChild(K);let Q=document.createElement("div");Q.setAttribute("id","git-container"),Q.classList.add("skill-container"),_.appendChild(Q);let X=document.createElement("img");X.setAttribute("id","git-logo"),X.classList.add("skill-logo"),X.src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",X.alt="Git logo",Q.appendChild(X);let Y=document.createElement("label");Y.classList.add("skill-label"),Y.innerHTML="Git",Q.appendChild(Y);let Z=document.createElement("div");Z.setAttribute("id","github-container"),Z.classList.add("skill-container"),_.appendChild(Z);let $=document.createElement("img");$.setAttribute("id","github-logo"),$.classList.add("skill-logo"),$.src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",$.alt="Github logo",Z.appendChild($);let ee=document.createElement("label");ee.classList.add("skill-label"),ee.innerHTML="GitHub",Z.appendChild(ee);let te=document.createElement("div");te.setAttribute("id","webpack-container"),te.classList.add("skill-container"),_.appendChild(te);let ne=document.createElement("img");ne.setAttribute("id","webpack-logo"),ne.classList.add("skill-logo"),ne.src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",ne.alt="Webpack logo",te.appendChild(ne);let ae=document.createElement("label");ae.classList.add("skill-label"),ae.innerHTML="Webpack",te.appendChild(ae);let ie=document.createElement("div");ie.setAttribute("id","jest-container"),ie.classList.add("skill-container"),_.appendChild(ie);let oe=document.createElement("img");oe.setAttribute("id","jest-logo"),oe.classList.add("skill-logo"),oe.src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",oe.alt="Jest logo",ie.appendChild(oe);let re=document.createElement("label");re.classList.add("skill-label"),re.innerHTML="Jest",ie.appendChild(re);let de=document.createElement("div");de.setAttribute("id","npm-container"),de.classList.add("skill-container"),_.appendChild(de);let le=document.createElement("img");le.setAttribute("id","npm-logo"),le.classList.add("skill-logo"),le.src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",le.alt="NPM logo",de.appendChild(le);let se=document.createElement("label");se.classList.add("skill-label"),se.innerHTML="npm",de.appendChild(se);let ce=document.createElement("div");ce.setAttribute("id","node-container"),ce.classList.add("skill-container"),_.appendChild(ce);let pe=document.createElement("img");pe.setAttribute("id","node-logo"),pe.classList.add("skill-logo"),pe.src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",pe.alt="Node logo",ce.appendChild(pe);let me=document.createElement("label");me.classList.add("skill-label"),me.innerHTML="Node.js",ce.appendChild(me);let ue=document.createElement("div");ue.setAttribute("id","vs-code-container"),ue.classList.add("skill-container"),_.appendChild(ue);let he=document.createElement("img");he.setAttribute("id","vs-code-logo"),he.classList.add("skill-logo"),he.src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",he.alt="Visual Studio Code logo",ue.appendChild(he);let ge=document.createElement("label");ge.classList.add("skill-label"),ge.innerHTML="VS Code",ue.appendChild(ge);let be=document.createElement("div");be.setAttribute("id","x-code-container"),be.classList.add("skill-container"),_.appendChild(be);let fe=document.createElement("img");fe.setAttribute("id","x-code-logo"),fe.classList.add("skill-logo"),fe.src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg",fe.alt="Visual Studio Code logo",be.appendChild(fe);let ve=document.createElement("label");ve.classList.add("skill-label"),ve.innerHTML="xCode",be.appendChild(ve);let Le=document.createElement("div");Le.setAttribute("id","projects");let ke=document.createElement("div");ke.setAttribute("id","projects-container"),Le.appendChild(ke);let Ce=document.createElement("h1");Ce.classList.add("projects-title"),Ce.innerHTML="Projects.",ke.appendChild(Ce);let je=document.createElement("h1");je.classList.add("projects-disclosure"),je.innerHTML="Here are five of the projects I have done as part of The Odin Project curriculum. Please note that they are in a descending chronological order and some of the earlier ones may not have as much functionality or be as responsive as the more recent ones.",ke.appendChild(je);let ye=document.createElement("div");ye.setAttribute("id","battleship-container"),ye.classList.add("project-container-odd"),ke.appendChild(ye);let Ee=document.createElement("h2");Ee.classList.add("project-title-odd"),Ee.innerHTML="1. Battleship",ye.appendChild(Ee);let xe=document.createElement("p");xe.classList.add("project-para-odd"),xe.innerHTML="This project allows for the user to play the classic boardgame against a smart AI opponent. It features additional animation in the form of a persistant radar background and a variety of responses for hits, misses, sinking of ships, wins, and losses. ",ye.appendChild(xe);let we=document.createElement("a");we.classList.add("project-source-odd"),we.innerHTML="Github ",we.href="https://github.com/Melchs40/battleship",we.target="_blank",ye.appendChild(we);let Te=document.createElement("a");Te.classList.add("project-live-odd"),Te.innerHTML="Live ",Te.href="https://melchs40.github.io/battleship",Te.target="_blank",ye.appendChild(Te);let Ae=document.createElement("p");Ae.classList.add("project-tech-odd"),Ae.innerHTML="<b>Tech Stack:</b> HTML, CSS, SASS, Javascript, npm, Jest, Webpack.",ye.appendChild(Ae);let Me=document.createElement("div");Me.classList.add("project-image-container-odd"),ye.appendChild(Me);let He=document.createElement("img");He.setAttribute("id","battleship-image"),He.classList.add("project-image-odd"),He.src="../images/Battleship-Image.png",Me.appendChild(He);let Se=document.createElement("div");Se.classList.add("project-bottom-border"),ke.appendChild(Se);let Ie=document.createElement("div");Ie.setAttribute("id","weather-app-container"),Ie.classList.add("project-container-even"),ke.appendChild(Ie);let ze=document.createElement("h2");ze.classList.add("project-title-even"),ze.innerHTML="2. Weather App",Ie.appendChild(ze);let Pe=document.createElement("p");Pe.classList.add("project-para-even"),Pe.innerHTML="This project allows for the user to play the classic boardgame against a smart AI opponent. It features additional animation in the form of a persistant radar background and a variety of responses for hits, misses, sinking of ships, wins, and losses. ",Ie.appendChild(Pe);let Je=document.createElement("a");Je.classList.add("project-source-even"),Je.innerHTML="Github ",Je.href="https://github.com/Melchs40/weather-app",Je.target="_blank",Ie.appendChild(Je);let _e=document.createElement("a");_e.classList.add("project-live-even"),_e.innerHTML="Live ",_e.href="https://melchs40.github.io/weather-app",_e.target="_blank",Ie.appendChild(_e);let We=document.createElement("p");We.classList.add("project-tech-even"),We.innerHTML="<b>Tech Stack:</b> HTML, CSS, SASS, Javascript, npm, Jest, Webpack.",Ie.appendChild(We);let Ge=document.createElement("div");Ge.classList.add("project-image-container-even"),Ie.appendChild(Ge);let Ne=document.createElement("img");Ne.setAttribute("id","weather-app-image"),Ne.classList.add("project-image-even"),Ne.src="../images/Weather-App-Image.png",Ge.appendChild(Ne);let Oe=document.createElement("div");Oe.classList.add("project-bottom-border"),ke.appendChild(Oe);let Be=document.createElement("div");Be.setAttribute("id","todo-container"),Be.classList.add("project-container-odd"),ke.appendChild(Be);let Re=document.createElement("h2");Re.classList.add("project-title-odd"),Re.innerHTML="3. To-Do List",Be.appendChild(Re);let De=document.createElement("p");De.classList.add("project-para-odd"),De.innerHTML="This project allows for the user to play the classic boardgame against a smart AI opponent. It features additional animation in the form of a persistant radar background and a variety of responses for hits, misses, sinking of ships, wins, and losses. ",Be.appendChild(De);let Fe=document.createElement("a");Fe.classList.add("project-source-odd"),Fe.innerHTML="Github ",Fe.href="https://github.com/Melchs40/to-do-list",Fe.target="_blank",Be.appendChild(Fe);let qe=document.createElement("a");qe.classList.add("project-live-odd"),qe.innerHTML="Live ",qe.href="https://melchs40.github.io/to-do-list",qe.target="_blank",Be.appendChild(qe);let Ue=document.createElement("p");Ue.classList.add("project-tech-odd"),Ue.innerHTML="<b>Tech Stack:</b> HTML, CSS, SASS, Javascript, npm, Jest, Webpack.",Be.appendChild(Ue);let Ve=document.createElement("div");Ve.classList.add("project-image-container-odd"),Be.appendChild(Ve);let Ke=document.createElement("img");Ke.setAttribute("id","todo-image"),Ke.classList.add("project-image-odd"),Ke.src="../images/Todo-Image.png",Ve.appendChild(Ke);let Qe=document.createElement("div");Qe.classList.add("project-bottom-border"),ke.appendChild(Qe);let Xe=document.createElement("div");Xe.setAttribute("id","restaurant-container"),Xe.classList.add("project-container-even"),ke.appendChild(Xe);let Ye=document.createElement("h2");Ye.classList.add("project-title-even"),Ye.innerHTML="4. Restaurant Page",Xe.appendChild(Ye);let Ze=document.createElement("p");Ze.classList.add("project-para-even"),Ze.innerHTML="This project allows for the user to play the classic boardgame against a smart AI opponent. It features additional animation in the form of a persistant radar background and a variety of responses for hits, misses, sinking of ships, wins, and losses. ",Xe.appendChild(Ze);let $e=document.createElement("a");$e.classList.add("project-source-even"),$e.innerHTML="Github ",$e.href="https://github.com/Melchs40/restaurant-page",$e.target="_blank",Xe.appendChild($e);let et=document.createElement("a");et.classList.add("project-live-even"),et.innerHTML="Live ",et.href="https://melchs40.github.io/restaurant-page",et.target="_blank",Xe.appendChild(et);let tt=document.createElement("p");tt.classList.add("project-tech-even"),tt.innerHTML="<b>Tech Stack:</b> HTML, CSS, SASS, Javascript, npm, Jest, Webpack.",Xe.appendChild(tt);let nt=document.createElement("div");nt.classList.add("project-image-container-even"),Xe.appendChild(nt);let at=document.createElement("img");at.setAttribute("id","restaurant-page-image"),at.classList.add("project-image-even"),at.src="../images/Restaurant-Page-Image.png",nt.appendChild(at);let it=document.createElement("div");it.classList.add("project-bottom-border"),ke.appendChild(it);let ot=document.createElement("div");ot.setAttribute("id","library-container"),ot.classList.add("project-container-odd"),ke.appendChild(ot);let rt=document.createElement("h2");rt.classList.add("project-title-odd"),rt.innerHTML="5. Book Library",ot.appendChild(rt);let dt=document.createElement("p");dt.classList.add("project-para-odd"),dt.innerHTML="This project allows for the user to play the classic boardgame against a smart AI opponent. It features additional animation in the form of a persistant radar background and a variety of responses for hits, misses, sinking of ships, wins, and losses. ",ot.appendChild(dt);let lt=document.createElement("a");lt.classList.add("project-source-odd"),lt.innerHTML="Github ",lt.href="https://github.com/Melchs40/library",lt.target="_blank",ot.appendChild(lt);let st=document.createElement("a");st.classList.add("project-live-odd"),st.innerHTML="Live ",st.href="https://melchs40.github.io/library",st.target="_blank",ot.appendChild(st);let ct=document.createElement("p");ct.classList.add("project-tech-odd"),ct.innerHTML="<b>Tech Stack:</b> HTML, CSS, SASS, Javascript, npm, Jest, Webpack.",ot.appendChild(ct);let pt=document.createElement("div");pt.classList.add("project-image-container-odd"),ot.appendChild(pt);let mt=document.createElement("img");mt.setAttribute("id","library-image"),mt.classList.add("project-image-odd"),mt.src="../images/Library-Image.png",pt.appendChild(mt);let ut=document.createElement("div");ut.setAttribute("id","contact-section");let ht=document.createElement("div");ht.setAttribute("id","contact-container"),ut.appendChild(ht);let gt=document.createElement("div");gt.setAttribute("id","contact-background"),ut.appendChild(gt);let bt=document.createElement("h1");bt.classList.add("contact-title"),bt.innerHTML="Contact.",ht.appendChild(bt);let ft=document.createElement("h1");ft.classList.add("contact-para"),ft.innerHTML="There are a few ways to get ahold of me, from LinkedIn to good old fashioned email to the handy contact form just below here. I've even included a PDF of my résumé for a more intensive viewing of my background. Feel free to reach out with any comments, concerns, compliments, or complaints. If you think we could have a mutually beneficial relationship in the world of web design, I'd love to hear from you!",ht.appendChild(ft);let vt=document.createElement("div");vt.setAttribute("id","contact-form-container"),ht.appendChild(vt);let Lt=document.createElement("form");Lt.setAttribute("id","contact-form"),Lt.action="https://fabform.io/f/O9i8ty6",Lt.method="POST",vt.appendChild(Lt);let kt=document.createElement("div");kt.classList.add("contact-items-container"),Lt.appendChild(kt);let Ct=document.createElement("label");Ct.classList.add("contact-labels"),Ct.for="name",Ct.textContent="Name:",kt.appendChild(Ct);let jt=document.createElement("input");jt.classList.add("contact-fill-in"),jt.required="true",jt.type="text",jt.name="name",jt.placeholder="What to call you...",kt.appendChild(jt);let yt=document.createElement("div");yt.classList.add("contact-items-container"),Lt.appendChild(yt);let Et=document.createElement("label");Et.classList.add("contact-labels"),Et.for="email",Et.textContent="Email:",yt.appendChild(Et);let xt=document.createElement("input");xt.classList.add("contact-fill-in"),xt.required="true",xt.type="email",xt.name="email",xt.placeholder="How to reach you...",yt.appendChild(xt);let wt=document.createElement("div");wt.classList.add("contact-items-container"),Lt.appendChild(wt);let Tt=document.createElement("label");Tt.classList.add("contact-labels"),Tt.for="comment",Tt.textContent="Comment:",wt.appendChild(Tt);let At=document.createElement("textarea");At.classList.add("contact-fill-in"),At.setAttribute("id","comment-fill-in"),At.required="true",At.name="comment",At.placeholder="What you've got to say...",wt.appendChild(At);let Mt=document.createElement("button");Mt.setAttribute("id","contact-submit"),Mt.type="submit",Mt.textContent="Send it my way",Lt.appendChild(Mt);let Ht=document.getElementById("content"),St=document.createElement("div");St.setAttribute("id","test-child3"),Ht.appendChild(g),Ht.appendChild(y),Ht.appendChild(H),Ht.appendChild(Le),Ht.appendChild(ut),Ht.appendChild(St)})()})();