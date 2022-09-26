const btnModal = document.querySelector(".btn-modal");
const btnClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnClose.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
