function initialization(){var e=document.getElementById("headerBurgerBtn"),t=document.getElementById("navigationCloseBtn");let n=document.getElementById("profileBtn"),i="#profileMenu";document.getElementById("profileMenu");let a=document.getElementById("header-profile"),o=document.querySelectorAll(".navigation__list-link"),l="#navigation",s=document.querySelector(l);var c=document.querySelectorAll(".favorites-filters__input");let d=document.querySelectorAll(".product-card");e.addEventListener("click",function(){openElement(l)}),t.addEventListener("click",function(){closeElement(l)}),n.addEventListener("click",function(){(n.classList.contains("_active")?(n.classList.remove("_active"),closeElement):(n.classList.add("_active"),closeElement(l),openElement))(i)}),c.forEach(t=>{cardsIinit(t,d),t.addEventListener("click",function(e){switchСards(t,d)})}),document.addEventListener("mousedown",function(e){let t=e.target;o.forEach(e=>{e.addEventListener("click",function(){e.contains(t)&&s.classList.contains("_active")&&closeElement(l)})}),a.contains(t)||(n.classList.remove("_active"),closeElement(i)),!s.contains(t)&&s.classList.contains("_active")&&closeElement(l)});new Swiper(".about-slider .swiper-container",{slidesPerView:1,spaceBetween:25,slideToClickedSlide:!0,speed:1500,autoplay:{delay:3e3},navigation:{nextEl:".about-slider .about-slider__arrow-btn--right",prevEl:".about-slider .about-slider__arrow-btn--left"},pagination:{el:".about-slider__paginations",clickable:!0},breakpoints:{769:{slidesPerView:2,navigation:!1},1024:{slidesPerView:3}}})}function cardsIinit(t,e){t.hasAttribute("checked")&&e.forEach(e=>{setTimeout(function(){e.style.display="none",e.getAttribute("data-card-role")==t.value&&(e.style.display="block",e.classList.add("fade-in"))},1500)})}function switchСards(t,e){e.forEach(e=>{setTimeout(function(){e.classList.remove("fade-in"),e.classList.add("fade-out")},1500),setTimeout(function(){e.style.display="none",e.getAttribute("data-card-role")==t.value&&(e.style.display="block",e.classList.add("fade-in"),e.classList.remove("fade-out"))},3e3)})}function closeElement(e){document.querySelector(e).classList.remove("_active")}function openElement(e){document.querySelector(e).classList.add("_active")}window.addEventListener("DOMContentLoaded",()=>{initialization()}),console.log("Моя оценка 50 баллов из 50");