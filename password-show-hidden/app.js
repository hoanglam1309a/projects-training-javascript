const input = document.querySelector(".password-input");
const icon = document.querySelector(".password-icon");

icon.addEventListener("click", function () {
  if (input.type == "password") {
    input.type = "text";
    icon.innerHTML = `<ion-icon class="show" name="eye-off-outline"></ion-icon>`;
  } else if (input.type == "text") {
    input.type = "password";
    icon.innerHTML = `<ion-icon class="hide" name="eye-outline"></ion-icon>`;
  }
});
