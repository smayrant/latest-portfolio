(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var t=e.g.document;if(!r&&t&&(t.currentScript&&(r=t.currentScript.src),!r)){var c=t.getElementsByTagName("script");c.length&&(r=c[c.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})();const r=e.p+"img/bg-mobile.png",t=e.p+"img/bg-menu.png",c=e.p+"img/contact-bg.png",o=e.p+"img/lt-pink-cube-half.png",n=e.p+"img/discover-bg.png",u=e.p+"img/bg-footer.png",i=e.p+"img/showtrackr.jpg";document.querySelector(".mobile-nav").style.backgroundImage='url("'.concat(r,'")'),document.querySelector(".main-menu__bg").src=t,document.querySelector(".contact__bg").src=c,document.querySelector(".contact__bg--lower").src=o,document.querySelector(".project__img--first").style.backgroundImage='url("'.concat(i,'")'),document.querySelector(".project__discover-img").style.backgroundImage='url("'.concat(i,'")'),document.querySelector(".project__discover-img--figure").src=n,document.querySelector(".footer").style.backgroundImage='url("'.concat(u,'")');var g=document.querySelector(".mobile-burger"),l=document.querySelector(".main-menu__burger"),m=document.querySelector(".header__burger-menu--mobile"),a=document.querySelector(".header__burger-menu--main"),s=document.querySelector(".main-menu__content"),d=document.querySelector(".mobile-nav__content"),p=document.querySelector(".burger__menu-container"),b=function(e){document.body.classList.toggle("no-scroll");for(var r=arguments.length,t=new Array(r>1?r-1:0),c=1;c<r;c++)t[c-1]=arguments[c];t.map((function(r){return e.classList.toggle(r)}))};[g,l,m,a,s,d].forEach((function(e){e.addEventListener("click",b.bind(null,p,"hidden","burger__menu--open"))}))})();