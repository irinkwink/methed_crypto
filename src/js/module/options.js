const options = document.querySelector('.options__tabs');
const optionsTabs = document.querySelectorAll('.options__tab');
const optionsItems = document.querySelectorAll('.options__item');

let activeTabIndex = 0;

options.addEventListener('click', (e) => {
  if (e.target.classList.contains('options__tab') &&
      optionsTabs[activeTabIndex] !== e.target) {

    optionsTabs[activeTabIndex].classList.remove('options__tab_active');
    optionsItems[activeTabIndex].classList.remove('options__item_active');

    activeTabIndex = [...optionsTabs].findIndex(item => item === e.target);

    optionsTabs[activeTabIndex].classList.add('options__tab_active');
    optionsItems[activeTabIndex].classList.add('options__item_active');


  }
});
