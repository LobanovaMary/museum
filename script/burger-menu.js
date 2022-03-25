const burgerMenu = () => {
  const menu = document.querySelector('#burger-menu');
  menu.addEventListener('click', () => {
    menu.classList.toggle('navigation-bar--active');
  });
};
export default burgerMenu;
