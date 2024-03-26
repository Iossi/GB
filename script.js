function moveIndicator(index) {
  const indicator = document.querySelector(".tab-indicator");
  const tabs = document.querySelectorAll(".tab");
  const activeTab = tabs[index];
  console.log(indicator);
  indicator.style.left = activeTab.offsetLeft + "px";
  indicator.style.width = activeTab.offsetWidth + "px";
  showTabContent(index);
}
function showTabContent(index) {
  const tabContentDivs = document.querySelectorAll(".tabs-content");
  const tabs = document.querySelectorAll(".tab");
  console.log(tabContentDivs);
  for (let i = 0; i < tabContentDivs.length; i++) {
    if (index === i) {
      tabContentDivs[i].classList.remove("hide-tabs");
      tabs[i].style.color = "blue";
    } else if (tabContentDivs[i].classList.contains("hide-tabs") === false) {
      tabContentDivs[i].classList.add("hide-tabs");
      tabs[i].style.color = "gray";
    }
  }
}
function showContent(index) {
  const contentList = document.querySelectorAll(".content-list");
  console.log(contentList);
  for (let i = 0; i < contentList.length; i++) {
    if (index === i) {
      contentList[i].classList.remove("hide-tabs");
    } else if (contentList[i].classList.contains("hide-tabs") === false) {
      contentList[i].classList.add("hide-tabs");
    }
  }
  nav.classList.toggle("hide");
  burgerMenu.classList.toggle("active");
}
const countLiked = document.querySelector(".count-liked");
const burgerMenu = document.querySelector(".burger");
const nav = document.querySelector(".navigation");
const settingList = document.querySelector(".content-list");
const navinner = document.querySelector(".setting-profile");

let countValue = 50;
function handleCount() {
  document.querySelector(
    ".count-help"
  ).innerHTML = `${++countValue} людям помогла эта статья`;
}

function secondMenu() {
  navinner.classList.toggle("hide");
}

function openFirstSettings(index) {
  navinner.classList.toggle("hide");
  showContent(index);
  countLiked.classList.remove("hide-tabs");
}
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("hide");
  navinner.classList.add("hide");
});
window.showContent = showContent;
window.secondMenu = secondMenu;
window.openFirstSettings = openFirstSettings;
window.handleCount = handleCount;
window.moveIndicator = moveIndicator;
window.showTabContent = showTabContent;
