function moveIndicator(index) {
  const indicator = document.querySelector(".tab-indicator");
  const tabs = document.querySelectorAll(".tab");
  const activeTab = tabs[index];
  console.log(tabs);
  indicator.style.left = activeTab.offsetLeft + "px";
  indicator.style.width = activeTab.offsetWidth + "px";
}
function showTabContent(index) {
  const tabContentDivs = document.querySelectorAll(".tabs-content");
  for (let i = 0; i < tabContentDivs.length; i++) {
    if (index === i) {
      tabContentDivs[i].classList.remove("hide-tabs");
    } else if (tabContentDivs[i].classList.contains("hide-tabs") === false) {
      tabContentDivs[i].classList.add("hide-tabs");
    }
  }
}
const nav = document.querySelector(".navigation");
const settingList = document.querySelector(".content-list");
const navinner = document.querySelector(".setting-profile");

function openSidebar() {
  if (nav.classList.contains("hide") === true)
    nav.classList.remove("hide") & settingList.classList.add("hidecontent");
}

let countValue = 50;
function handleCount() {
  document.querySelector(
    ".count-help"
  ).innerHTML = `${++countValue} людям помогла эта статья`;
}

function secondMenu() {
  if (navinner.classList.contains("hide") === true) {
    navinner.classList.remove("hide");
  } else navinner.classList.add("hide");
}

function openFirstSettings() {
  if (settingList.classList.contains("hidecontent")) {
    (nav.classList.add("hide") === true) &
      (navinner.classList.add("hide") === true) &
      settingList.classList.remove("hidecontent");
  }
}
