let accordionTitles = document.querySelectorAll(".accordion-title");
let accordionBody = document.querySelector(".accordion-body");
let accordionItems = document.querySelectorAll(".accordion-item");
let accordionIcons = document.querySelectorAll(".ion-icon");

for (let i = 0; i < accordionTitles.length; i++) {
  const accordionTitle = accordionTitles[i];
  const accordionItem = accordionItems[i];
  const accordionIcon = accordionIcons[i];
  accordionTitle.addEventListener("click", function () {
    let accordionActive = accordionBody.getElementsByClassName("active")[0];
    if (accordionActive) {
      accordionActive.classList.remove("active");
      accordionActive.querySelector(
        ".accordion-icon"
      ).innerHTML = `<ion-icon name="add-outline"></ion-icon>`;
    }
    if (accordionItem !== accordionActive) {
      accordionItem.classList.add("active");
      accordionItem.querySelector(
        ".accordion-icon"
      ).innerHTML = `<ion-icon name="remove-outline"></ion-icon>`;
    }
  });
}
