"use_strict";

// modal-tools
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal-tools");
  const modalBtn = document.querySelector(".close-modal-tools button");

  modalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
