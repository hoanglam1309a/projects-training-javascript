window.addEventListener("load", function () {
  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=14";
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
  const carousel = document.querySelector(".carousel-wrapper");
  const carouselList = document.querySelector(".carousel-list");
  const btnBack = document.querySelector(".carousel-left");
  const btnNext = document.querySelector(".carousel-right");
  let index = 1;

  async function getMovie() {
    try {
      const result = await axios.get(API_URL);
      showCarousel(result.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  function showCarousel(data) {
    console.log(data);
    data.forEach((item) => {
      const carouselImg = document.createElement("img");
      carouselImg.src = `${IMG_PATH}${item.poster_path}`;
      carouselImg.classList.add("carousel-img");
      carouselList.append(carouselImg);
    });
  }

  getMovie();

  btnBack.addEventListener("click", function () {
    handleChange(-1);
  });

  btnNext.addEventListener("click", function () {
    handleChange(1);
  });

  function handleChange(action) {
    const carouselImgs = carouselList.querySelectorAll(".carousel-img");
    const carouselImgWidth = carouselImgs[0].offsetWidth;
    if (action == -1) {
      if (index <= 1) {
        return;
      }
      index--;
    } else {
      if (index > carouselImgs.length) {
        return;
      }
      index++;
    }
    carouselList.style.transform = `translateX(${-index * carouselImgWidth + carouselImgWidth}px)`;
  }
});
