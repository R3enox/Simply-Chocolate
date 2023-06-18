(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-s]"),
    closeModalBtn: document.querySelector("[data-modal-close-s]"),
    modal: document.querySelector("[data-modal-s]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();