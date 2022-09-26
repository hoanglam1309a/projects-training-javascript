// query selector
let lightboxImgs = document.querySelectorAll(".lightbox-item img");
let lightboxArray = Array.from(lightboxImgs);
let lightboxModal = document.querySelector(".lightbox-modal");
let lightboxModalImg = document.querySelector(".lightbox-modalImg");
let btnLeft = document.querySelector(".lightbox-btn--left");
let btnRight = document.querySelector(".lightbox-btn--right");

let activeImg = 0;

// functions
let getImageModal = (activeImg) => {
  if (activeImg <= 0) {
    btnLeft.style.display = "none";
    lightboxModalImg.src = `./img/img-${activeImg}.jpg`;
  } else if (activeImg >= lightboxArray.length - 1) {
    btnRight.style.display = "none";
    lightboxModalImg.src = `./img/img-${activeImg}.jpg`;
  } else {
    btnLeft.style.display = "flex";
    btnRight.style.display = "flex";
    lightboxModalImg.src = `./img/img-${activeImg}.jpg`;
  }
};
let showModal = (image) => {
  lightboxModal.classList.add("active");
  activeImg = lightboxArray.indexOf(image);
  getImageModal(activeImg);
};

let hiddenModal = (e) => {
  if (e.currentTarget === e.target) {
    lightboxModal.classList.remove("active");
    btnLeft.style.display = "flex";
    btnRight.style.display = "flex";
  }
};

// event listeners
for (let i = 0; i < lightboxImgs.length; i++) {
  const lightboxImg = lightboxImgs[i];
  lightboxImg.addEventListener("click", function () {
    showModal(lightboxImg);
  });
}

lightboxModal.addEventListener("click", hiddenModal);
btnLeft.addEventListener("click", function () {
  activeImg--;
  getImageModal(activeImg);
});
btnRight.addEventListener("click", function () {
  activeImg++;
  getImageModal(activeImg);
});
