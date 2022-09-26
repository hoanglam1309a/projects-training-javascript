let tabItems = document.querySelectorAll(".tab-item");
let tabPanes = document.querySelectorAll(".tab-pane");
let tabLine = document.querySelector(".tab-line");
let tabHeader = document.querySelector(".tab-header");
let tabBody = document.querySelector(".tab-body");

for (let i = 0; i < tabItems.length; i++) {
  const tabItem = tabItems[i];
  const tabPane = tabPanes[i];
  tabItem.addEventListener("click", function () {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabItem.classList.add("active");
    tabLine.style.left = `calc(calc(100% / 4) * ${i})`;

    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabPane.classList.add("active");
  });
}
