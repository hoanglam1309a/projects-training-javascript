const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=14";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
const movieList = document.querySelector(".movie-list");
const movieInput = document.querySelector(".movie-input");
const movieBtn = document.querySelector(".movie-btn");

movieBtn.addEventListener("click", function () {
  const keySearch = movieInput.value.trim();
  if (keySearch && keySearch !== "") {
    getMovie(`${SEARCH_API}${keySearch}"`);
  }
});

async function getMovie(url) {
  try {
    const result = await axios.get(url);
    showMovie(result.data.results);
  } catch (err) {
    console.log(err);
  }
}
function showMovie(data) {
  movieList.innerHTML = "";
  data.forEach((item) => {
    const movieItem = document.createElement("div");
    movieItem.classList.add("movie-item");
    movieItem.innerHTML = `
      <div class="movie-img">
        <img
          src="${IMG_PATH}${item.poster_path}"
          alt=""
        />
        <div class="movie-overview">
          <h3 class="movie-label">${item.original_title}</h3>
          <div class="movie-content">${item.overview}</div>
        </div>
      </div>
      <div class="movie-info">
        <h3 class="movie-title">${item.original_title}</h3>
        <span class="movie-year">${item.release_date} </span><span class="movie-type">/ Score: ${item.vote_average}</span>
      </div>
    `;
    movieList.append(movieItem);
  });
}
getMovie(API_URL);
