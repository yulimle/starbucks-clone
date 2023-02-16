//MAIN HEADER
//SEARCH
const searchEl = document.querySelector(".search"); //div요소
const searchInputEl = searchEl.querySelector("input");
const searchIconEl = searchEl.querySelector("span");
let isNotSearchClick = false;

document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("material-symbols-outlined")) {
    isNotSearchClick = true;
  } else {
    isNotSearchClick = false;
  }
});

searchIconEl.addEventListener("click", function () {
  if (!searchEl.classList.contains("active")) {
    searchEl.classList.add("active");
    searchInputEl.focus();
    searchInputEl.setAttribute("placeholder", "통합 검색");
    isNotSearchClick = false;
  } else {
    searchEl.classList.remove("active");
  }
});

searchInputEl.addEventListener("blur", function () {
  //focus 잃을 때
  searchInputEl.setAttribute("placeholder", "");
});

//SWIPER
//SWIPER NOTICE
const swiperNotice = new Swiper(
  ".notice .notice-line .inner .inner__left .swiper",
  {
    direction: "vertical",
    loop: true,
    autoplay: true,
  }
);

//SWIPER PROMOTION
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal", //기본값
  slidesPerView: 3, //이미지 세장 보여준다
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

//Autoplay 컨트롤
function controlAutoPlay() {
  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start();
  } else {
    swiperPromotion.autoplay.stop();
  }
}

//Toggle promotion
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");
promotionToggleBtn.addEventListener("click", function () {
  if (promotionSection.classList.contains("hide")) {
    promotionToggleBtn.classList.add("show");
    promotionSection.classList.remove("hide");
  } else {
    promotionToggleBtn.classList.remove("show");
    promotionSection.classList.add("hide");
  }
});

//애니메이션 파트

//Visual
window.onload = function () {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
}; //페이지가 로딩되면 시작

//애니메이션 스크롤 파트
//엘살바도르
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 280) {
    const elsalvadorSection = document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  }
  if (window.scrollY > 810) {
    const ethiopiaSection = document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  }
  if (window.scrollY > 1150) {
    const favoriteSection = document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  }
  if (window.scrollY > 2000) {
    const magazineSection = document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }
  if (window.scrollY > 2300) {
    const storeSection = document.querySelector(".store");
    storeSection.classList.add("animate");
  }
});
