const slider = () => {
  const slides = document.querySelectorAll('.slider__img');
  const btnLeft = document.querySelector('.btn--left');
  const btnRight = document.querySelector('.btn--right');
  const countSlide = document.querySelector('.counter-slide');
  const dotContainer = document.querySelector('.dot');
  const containerSlide = document.querySelector('.slider');

  const maxSlides = slides.length - 1;
  let curSlide = 0;
  let movementStart = 0;
  let movementEnd = 0;

  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<div class="dot__dots" data-slide="${i}"></div>`
      );
    });
  };

  const activateDot = (slide) => {
    document
      .querySelectorAll('.dot__dots')
      .forEach((dot) => dot.classList.remove('dot__dots--active'));

    document
      .querySelector(`.dot__dots[data-slide="${slide}"]`)
      .classList.add('dot__dots--active');
  };

  const goToSlide = (slide) => {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );
    countSlide.textContent = `0${Number(slide) + 1}`;
  };

  const nextSlide = () => {
    if (curSlide === maxSlides) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = () => {
    if (curSlide === 0) {
      curSlide = maxSlides;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  createDots();
  goToSlide(0);
  activateDot(0);

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  dotContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot__dots')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  containerSlide.addEventListener('mousedown', (event) => {
    movementStart = event.clientX;
    containerSlide.style.cursor = 'grabbing';
  });

  containerSlide.addEventListener('mouseup', (event) => {
    movementEnd = event.clientX;
    containerSlide.style.cursor = 'grab';
    if (movementStart - movementEnd > 0) nextSlide();
    else prevSlide();
  });
};

export default slider;
