const videoSlider = () => {
  const container = document.querySelector('.video-slider');
  const btnLeft = document.querySelector('.video-slider__left');
  const btnRight = document.querySelector('.video-slider__right');
  const dotContainer = document.querySelector('.video-slider__dots');

  const nextSlide = () => {
    let firstChild = container.firstElementChild;
    container.insertAdjacentElement('beforeend', firstChild);
  };

  const prevSlide = () => {
    let lastChild = container.lastElementChild;
    container.insertAdjacentElement('afterbegin', lastChild);
  };

  const goToSlide = (i) => {};

  dotContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('video-dot')) {
      const { slide } = e.target.dataset;
      console.log(slide);
      // goToSlide(slide);
      // activateDot(slide);
    }
  });

  btnLeft.addEventListener('click', () => prevSlide());
  btnRight.addEventListener('click', () => nextSlide());
};

export default videoSlider;
