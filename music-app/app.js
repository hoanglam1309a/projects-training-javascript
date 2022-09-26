const song = document.querySelector(".music-song");
const btnPlayPause = document.querySelector(".btn-playPause");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const btnRepeat = document.querySelector(".btn-repeat");
const btnLike = document.querySelector(".btn-like");
const thumb = document.querySelector(".music-thumb");
const musicName = document.querySelector(".music-name");
const durationTime = document.querySelector(".music-duration");
const currentTime = document.querySelector(".music-current");
const rangeBar = document.querySelector(".music-range");

let isPlaying = false;
let arrMusic = [
  {
    file: "holo.mp3",
    name: "Holo",
    img: "https://images.unsplash.com/photo-1628702110466-aa2107a82d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHNldHVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    file: "home.mp3",
    name: "Home",
    img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    file: "spark.mp3",
    name: "Spark",
    img: "https://images.unsplash.com/photo-1611310102866-e7d3918cf473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    file: "Summer.mp3",
    name: "Summer",
    img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
];
let indexSong = 0;
let isRepeat = false;

function renderUI() {
  thumb.src = arrMusic[indexSong].img;
  musicName.textContent = arrMusic[indexSong].name;
}

renderUI();

function playPause(indexSong) {
  song.src = `./music/${arrMusic[indexSong].file}`;
  if (!isPlaying) {
    btnPlayPause.innerHTML = `<ion-icon name="pause-outline" class="btn-pause"></ion-icon>`;
    song.play();
    thumb.classList.add("active");
    isPlaying = !isPlaying;
  } else {
    btnPlayPause.innerHTML = `<ion-icon name="play-outline" class="btn-play"></ion-icon>`;
    song.pause();
    thumb.classList.remove("active");
    isPlaying = !isPlaying;
  }
}

function handleChange(change) {
  if (change == 1) {
    indexSong++;
    indexSong = indexSong > arrMusic.length - 1 ? 0 : indexSong;
    isPlaying = !isPlaying;
    playPause(indexSong);
  } else if (change == -1) {
    indexSong--;
    indexSong = indexSong < 0 ? arrMusic.length - 1 : indexSong;
    isPlaying = !isPlaying;
    playPause(indexSong);
  }
  renderUI();
  return indexSong;
}

function displayTimer() {
  durationTime.textContent = formatTimer(song.duration);
  currentTime.textContent = formatTimer(song.currentTime);
  rangeBar.max = song.duration;
  rangeBar.value = song.currentTime;
}
function formatTimer(time) {
  let minutes = Math.floor(time / 60);
  minutes = minutes < 10 ? `0` + minutes : minutes;
  let seconds = Math.floor(time % 60);
  seconds = seconds < 10 ? `0` + seconds : seconds;
  return `${minutes}:${seconds}`;
}
const getTimer = setInterval(displayTimer, 500);

btnPlayPause.addEventListener("click", function () {
  playPause(indexSong);
});
btnLike.addEventListener("click", function () {
  btnLike.classList.toggle("active");
});
btnPrev.addEventListener("click", function () {
  handleChange(-1);
});

btnNext.addEventListener("click", function () {
  handleChange(1);
});

btnRepeat.addEventListener("click", function () {
  isRepeat = !isRepeat;
  if (isRepeat) btnRepeat.classList.add("active");
  else btnRepeat.classList.remove("active");
});

rangeBar.addEventListener("change", function () {
  song.currentTime = rangeBar.value;
});

song.addEventListener("ended", function () {
  isPlaying = !isPlaying;
  if (isRepeat) {
    playPause(indexSong);
  } else {
    isPlaying = !isPlaying;
    handleChange(1);
  }
});
