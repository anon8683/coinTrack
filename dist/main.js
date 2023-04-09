(()=>{"use strict";var n,t,r,e,o,a,i,s,c,d,l,u,p,f,g={426:(n,t,r)=>{r.d(t,{Z:()=>s});var e=r(81),o=r.n(e),a=r(645),i=r.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Anuphan&family=Schibsted+Grotesk&display=swap);"]),i.push([n.id,":root {\r\n\t--grey: rgb(56, 55, 55);\r\n\t--body: rgba(0, 0, 0, 0.886);\r\n}\r\n/* font-family: 'Anuphan', sans-serif; -- digits\r\nfont-family: 'Schibsted Grotesk', sans-serif; --texts */\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n\tfont-family: \"Schibsted Grotesk\", sans-serif;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n}\r\n\r\nbody {\r\n\theight: 100vh;\r\n\tbackground-color: var(--body);\r\n}\r\n\r\nfooter {\r\n\tbackground-color: var(--grey);\r\n}\r\n\r\n#grid-container {\r\n\tdisplay: grid;\r\n\theight: 100vh;\r\n\r\n\tgrid-template-columns: auto;\r\n\tgrid-template-rows: 1fr 15fr 1fr;\r\n}\r\n\r\n/* ----------------------header------------------------------ */\r\n\r\nheader {\r\n\tbackground-color: var(--grey);\r\n}\r\n\r\n#header-flex {\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding: 10px;\r\n\tpadding-top: 20px;\r\n\tborder: 1px solid black;\r\n\tborder-top: none;\r\n}\r\n.joined,\r\n.flex-left,\r\n.buttonsLeft {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 5px;\r\n}\r\n\r\n.joined {\r\n\tflex-wrap: wrap;\r\n\tgap: 30px;\r\n}\r\n\r\n.buttonsLeft {\r\n\tgap: 15px;\r\n}\r\n\r\n#logo {\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tpadding: 5px;\r\n}\r\n\r\nh4,\r\nh3 {\r\n\tcolor: rgb(255, 255, 255);\r\n\tfont-family: \"Schibsted Grotesk\", sans-serif;\r\n\tletter-spacing: 1.2px;\r\n}\r\n\r\nh4 {\r\n\tfont-size: smaller;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n\tcolor: rgba(255, 255, 255, 0.799);\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: underline;\r\n\tcolor: orange;\r\n}\r\n\r\n#navRight {\r\n\t/* padding-right: 30px; */\r\n}\r\n\r\n.navButton {\r\n\twidth: clamp(100px, 15vw, 150px);\r\n\theight: 30px;\r\n\tborder-radius: 15px;\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: 600;\r\n\tcolor: rgb(0, 0, 0);\r\n\tborder: 1px solid rgba(0, 0, 0, 0.461);\r\n\tbackground-color: grey;\r\n}\r\n\r\n.navButton:hover {\r\n\tborder: 1px solid orange;\r\n\tcursor: pointer;\r\n\tbackground-color: rgba(0, 0, 0, 0.495);\r\n\tcolor: rgba(255, 255, 255, 0.799);\r\n\tscale: 1.01;\r\n\ttransition: 0.5s;\r\n}\r\n\r\n@media only screen and (max-width: 666px) {\r\n\t.joined,\r\n\t.buttonsLeft {\r\n\t\tgap: 5px;\r\n\t}\r\n}\r\n",""]);const s=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r="",e=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),e&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=n(t),e&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(n,r,e,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);e&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function r(n){for(var r=-1,e=0;e<t.length;e++)if(t[e].identifier===n){r=e;break}return r}function e(n,e){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=e.base?c[0]+e.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=r(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var g=o(f,e);e.byIndex=s,t.splice(s,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(n,t){var r=t.domAPI(t);return r.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;r.update(n=t)}else r.remove()}}n.exports=function(n,o){var a=e(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=e(n,o),d=0;d<a.length;d++){var l=r(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:n=>{var t={};n.exports=function(n,r){var e=function(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,r)=>{n.exports=function(n){var t=r.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(r){!function(n,t,r){var e="";r.supports&&(e+="@supports (".concat(r.supports,") {")),r.media&&(e+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(e+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),e+=r.css,o&&(e+="}"),r.media&&(e+="}"),r.supports&&(e+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(e,n,t.options)}(t,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},h={};function v(n){var t=h[n];if(void 0!==t)return t.exports;var r=h[n]={id:n,exports:{}};return g[n](r,r.exports,v),r.exports}v.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return v.d(t,{a:t}),t},v.d=(n,t)=>{for(var r in t)v.o(t,r)&&!v.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},v.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),v.nc=void 0,n=v(379),t=v.n(n),r=v(795),e=v.n(r),o=v(569),a=v.n(o),i=v(565),s=v.n(i),c=v(216),d=v.n(c),l=v(589),u=v.n(l),p=v(426),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=e(),f.insertStyleElement=d(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,document.getElementsByTagName("body")[0].innerHTML='<div id="grid-container">\n    <header></header>\n    <main></main>\n    <footer></footer>\n</div>',document.getElementsByTagName("header")[0].innerHTML='\t<div id="header-flex">\n\t<div class="joined">\n\t\t<div class="flex-left">\n\t\t\t<img id="logo" src="/repos/coinTrack/src/img/logo.svg" alt="#" />\n\t\t\t<h3>CoinTracker</h3>\n\t\t</div>\n\t\t<div class="buttonsLeft">\n\t\t\t<button id="portfolioButton" class="navButton">Portfolio</button>\n\t\t\t<button id="marketButton" class="navButton">Markets</button>\n\t\t\t<button id="newsButton" class="navButton">News</button>\n\t\t</div>\n\t</div>\n\t<div class="joined" id="navRight">\n\t\t<h4><a href="#">Sign up</a></h4>\n\t\t<h4><a href="#">Login</a></h4>\n\t</div>\n</div>\n\t',document.getElementById("portfolioButton").addEventListener("click",(function(){console.log("clicked")}))})();