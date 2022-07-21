const headerNavBtn = document.querySelector('.header__nav-btn');
const headerNavigation = document.querySelector('.header__navigation');

headerNavBtn.addEventListener('click', () => {
  headerNavigation.classList.toggle('header__navigation_open');
});

headerNavigation.addEventListener('click', (e) => {
  if (e.target.classList.contains('navigation__link')) {
    headerNavigation.classList.remove('header__navigation_open')
  }
});
