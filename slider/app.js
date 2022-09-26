window.addEventListener("load", function () {
  const sliderContainer = document.querySelector(".slider-container");
  const slideLength = document.querySelectorAll(".slider-item").length;
  const sliderImgWidth = document.querySelector(".slider-img").offsetWidth;
  const sliderDots = Array.from(document.querySelectorAll(".slider-dot"));
  const sliderNext = document.querySelector(".slider-control.next");
  const sliderPrev = document.querySelector(".slider-control.prev");
  let positionX = 0;
  let currentSlide = 0;

  // functions
  function getDotSliderAvtive(index) {
    let slideDotActive = document.querySelector(".slider-dots .active");
    slideDotActive.classList.remove("active");
    sliderDots[index].classList.add("active");
  }
  function handleChangeSlide(location) {
    if (location == 1) {
      currentSlide++;
      if (currentSlide >= slideLength) {
        currentSlide = slideLength - 1;
        return;
      }
    } else if (location == -1) {
      currentSlide--;
      if (currentSlide <= -1) {
        currentSlide = 0;
        return;
      }
    }
    transformSlide(currentSlide);
  }
  function transformSlide(currentSlide) {
    positionX = currentSlide * -sliderImgWidth;
    sliderContainer.style.transform = `translateX(${positionX}px)`;
    getDotSliderAvtive(currentSlide);
  }

  // add event listeners
  sliderNext.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  sliderPrev.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  for (let i = 0; i < sliderDots.length; i++) {
    const sliderDot = sliderDots[i];
    sliderDot.addEventListener("click", function (e) {
      currentSlide = Number(e.target.dataset.index);
      transformSlide(currentSlide);
    });
  }
});
