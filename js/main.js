//MAIN HEADER
//SEARCH
const searchEl = document.querySelector(".search"); //div요소
const searchInputEl = searchEl.querySelector("input");
const searchIconEl = searchEl.querySelector("span");
let isFocused = false;

searchIconEl.addEventListener("click", function () {
  if (isFocused) {
    searchInputEl.blur();
    isFocused = false;
  } else {
    searchInputEl.focus();
    isFocused = true;
  }
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  //focus 잃을 때
  searchInputEl.setAttribute("placeholder", "");
});
