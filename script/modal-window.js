const modalWindow = () => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const btnOpenModal = document.querySelectorAll('.show-modal');
  const btnCloseModal = document.querySelector('.close-modal');

  const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  const openModel = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  btnOpenModal.forEach((element) => {
    element.addEventListener('click', openModel);
  });

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
};

export default modalWindow;
