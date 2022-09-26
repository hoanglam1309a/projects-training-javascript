let lightboxImgs = document.querySelectorAll(".lightbox-item img");
let lightboxModal = document.querySelector(".lightbox-modal");
let lightboxModalImg = document.querySelector(".lightbox-modalImg");
let btnLeft = document.querySelector(".lightbox-btn--left");
let btnRight = document.querySelector(".lightbox-btn--right");
let activeImg;

function getImageModal() {
  lightboxModalImg.src = lightboxImgs[activeImg].src;
}
function hiddenModal(e) {
  if (e.currentTarget == e.target) {
    lightboxModal.classList.remove("active");
  }
}
function changeImage(index) {
  if (index == 1) {
    activeImg >= lightboxImgs.length - 1 ? (activeImg = 0) : activeImg++;
    getImageModal();
  } else if (index == -1) {
    activeImg <= 0 ? (activeImg = lightboxImgs.length - 1) : activeImg--;
    getImageModal();
  }
}

for (let i = 0; i < lightboxImgs.length; i++) {
  lightboxImgs[i].addEventListener("click", function () {
    activeImg = i;
    lightboxModal.classList.add("active");
    getImageModal();
  });
}

lightboxModal.addEventListener("click", hiddenModal);
btnLeft.addEventListener("click", function () {
  changeImage(-1);
});
btnRight.addEventListener("click", function () {
  changeImage(1);
});
