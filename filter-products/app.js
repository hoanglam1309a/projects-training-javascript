const buttons = document.querySelectorAll(".product-button");
const productItems = Array.from(document.querySelectorAll(".product-item"));

document.querySelector(".product-list").classList.remove("hidden");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    productItems.forEach((item) => {
      item.classList.remove("show");
    });

    const key = button.innerText.toLowerCase();
    if (key == "all") {
      document.querySelector(".product-list").classList.remove("hidden");
    } else {
      document.querySelector(".product-list").classList.add("hidden");
      const filterProducts = productItems.filter(function (productItem) {
        return productItem.dataset.filter == key;
      });
      filterProducts.forEach((item) => {
        item.classList.add("show");
      });
    }
  });
});
