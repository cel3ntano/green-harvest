import{A as l,S as m,N as f,P as y}from"./assets/vendor-db3044a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();(()=>{const e={openMenuBtn:document.querySelector("[data-mobile-open]"),closeMenuBtn:document.querySelector("[data-mobile-close]"),menu:document.querySelector("[data-mobile-menu]"),menuLinks:document.querySelectorAll("[data-mobile-link]"),body:document.querySelector("body"),html:document.querySelector("html")};e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.menuLinks.forEach(i=>{i.addEventListener("click",()=>{t()})});function t(){e.menu.classList.toggle("is-open"),e.body.classList.toggle("scroll-disabled"),e.html.classList.toggle("scroll-disabled")}})();(()=>{const e={openModalBtns:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body"),html:document.querySelector("html")};e.openModalBtns.forEach(i=>{i.addEventListener("click",t)}),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-open-modal"),e.body.classList.toggle("scroll-disabled"),e.html.classList.toggle("scroll-disabled"),e.modal.classList.contains("is-open-modal")?g():w()}})();function h(e){const t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const i=this.getAttribute("href");h(i)})});const c=$("#backToTop");$(window).scroll(function(){$(window).scrollTop()>300?c.addClass("show"):c.removeClass("show")});c.on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},"300")});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".header");window.innerWidth<=767?(e.setAttribute("data-aos","fade-down"),l.refresh()):(e.removeAttribute("data-aos"),l.refresh())});const s=document.querySelector(".header .container"),a=document.querySelector(".modal");function u(){return/Mobi|Android/i.test(navigator.userAgent)}function p(){const e=document.createElement("div");e.style.cssText="width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function g(){if(window.innerWidth>=768&&window.innerHeight>599&&!u()){const e=p();if(document.body.style.paddingRight=e+"px",s.style.left=`calc(50% - ${e/2}px)`,a.style.marginLeft=`-${e/2}px`,s.classList.contains("is-sticky")&&window.innerWidth>=1280){const t=document.querySelector(".header .container.is-sticky");t.style.left=`calc(50% - ${e/2}px)`,t.style.transition="none"}}}function w(){if(window.innerWidth>=768&&window.innerHeight>599&&!u()&&(document.body.style.paddingRight="",s.style.left="50%",a.style.marginLeft="0"),s.classList.contains("is-sticky")&&window.innerWidth>=1280){const e=document.querySelector(".header .container.is-sticky");e.style.left="50%",e.style.transition="none",setTimeout(()=>{e.style.transition="all 0.3s ease"},100)}}window.addEventListener("scroll",function(){const e=document.querySelector(".header .container");window.scrollY>0?e.classList.add("is-sticky"):e.classList.remove("is-sticky")});new m(".swiper",{modules:[f,y],spaceBetween:20,slidesPerView:1,coverflowEffect:{slideShadows:!1,rotate:0},direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:18},1280:{slidesPerView:3,spaceBetween:25}}});l.init({once:!0});
//# sourceMappingURL=commonHelpers.js.map
