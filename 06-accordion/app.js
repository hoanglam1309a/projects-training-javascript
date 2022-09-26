let accordionTitles = document.querySelectorAll(".accordion-title");
let accordionBody = document.querySelector(".accordion-body");
let accordionItems = document.querySelectorAll(".accordion-item");

for (let i = 0; i < accordionTitles.length; i++) {
  const accordionTitle = accordionTitles[i];
  const accordionItem = accordionItems[i];
  accordionTitle.addEventListener("click", function () {
    accordionItem.classList.toggle("active");

    if (accordionItem.classList.contains("active")) {
      accordionItem.querySelector(
        ".accordion-icon"
      ).innerHTML = `<ion-icon name="remove-outline"></ion-icon>`;
    } else {
      accordionItem.querySelector(
        ".accordion-icon"
      ).innerHTML = `<ion-icon name="add-outline"></ion-icon>`;
    }
  });
}
