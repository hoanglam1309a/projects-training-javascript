const background = document.querySelector(".background");
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
// const arrCharacters = [
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
// ];
let characters = "01234567890ABCDEF";
let colorRandom = "#";
btn.addEventListener("click", function () {
  for (let i = 0; i < 6; i++) {
    let random = Math.trunc(Math.random() * 16);
    let characterRandom = characters[random];
    colorRandom += characterRandom;
    background.style.background = colorRandom;
  }
  color.innerHTML = colorRandom;
  colorRandom = "#";
});
