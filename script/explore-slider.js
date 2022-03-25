const exploreSlider = () => {
  const slider = document.querySelector('.slider-2 input');
  const img = document.querySelector('.images .img-2');
  const dragLine = document.querySelector('.slider-2 .drag-line');

  slider.oninput = () => {
    let sliderVal = slider.value;
    dragLine.style.left = sliderVal + '%';
    img.style.width = sliderVal + '%';
  };
};

export default exploreSlider;
