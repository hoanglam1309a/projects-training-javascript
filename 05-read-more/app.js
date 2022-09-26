const dots = document.querySelector(".dots");
const btn = document.querySelector(".btn");
const contentMore = document.querySelector(".content-more");

btn.addEventListener("click", function () {
  dots.classList.toggle("hidden");
  contentMore.classList.toggle("hidden");

  btn.classList.toggle("is-readless");
  if (document.querySelector(".is-readless")) {
    btn.textContent = "Read Less";
  } else {
    btn.textContent = "Read More";
  }
});
