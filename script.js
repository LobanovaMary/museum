import slider from './script/slider.js';
import burgerMenu from './script/burger-menu.js';
import exploreSlider from './script/explore-slider.js';
import modalWindow from './script/modal-window.js';
import videoInit from './script/video-init.js';
import videoSlider from './script/video-slider.js';

const init = () => {
  burgerMenu();
  slider();
  exploreSlider();
  modalWindow();
  videoInit();
  videoSlider();
};

init();
