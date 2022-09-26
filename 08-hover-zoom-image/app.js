const cover = document.querySelector(".image-cover");
const container = document.querySelector(".image-container");
const image = document.querySelector(".image-img");

cover.addEventListener("mousemove", function (e) {
  let imageWidth = image.offsetWidth;
  let imageHeight = image.offsetHeight;
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const spaceX = (imageWidth / 2 - containerWidth) * 2;
  const spaceY = (imageHeight / 2 - containerHeight) * 2;
  imageWidth = imageWidth + spaceX;
  imageHeight = imageHeight + spaceY;

  let x = e.pageX - container.offsetParent?.offsetLeft - container.offsetLeft;
  let y = e.pageY - container.offsetParent?.offsetTop - container.offsetTop;

  const positionX = (imageWidth / containerWidth / 2) * x;
  const positionY = (imageHeight / containerHeight / 2) * y;
  console.log(x, y);
  console.log(positionX, positionY);
  image.style = `left: ${-positionX}px; top: ${-positionY}px;width:auto;height:auto;max-height:unset;transform:none`;
});

container.addEventListener("mouseleave", function () {
  image.style = "";
});
