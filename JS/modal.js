const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-section-button-open');
const modalBtnClose = document.querySelector('.modal-section__button-close');

const toggleModal = () => modal.classList.toggle('backdrop--hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

