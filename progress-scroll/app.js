const container = document.querySelector(".container");
const progressBar = document.querySelector(".progressbar");

window.addEventListener("scroll", function (e) {
  const heightContainer = container.offsetHeight;
  const clientYcontainer = document.documentElement.clientHeight;
  const positionY = document.documentElement.getBoundingClientRect().top;

  const widthProgress = (-positionY / (heightContainer - clientYcontainer)) * 100;
  // console.log(heightContainer, clientYcontainer, positionY, widthProgress);
  progressBar.style.width = widthProgress + "%";
});
