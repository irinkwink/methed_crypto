window.onload = function(e) {
  const message = document.createElement('p');
  message.className = 'message';
  message.textContent = 'Данный сайт создан только в учебных целях. На нем не производится покупка или обмен криптовалюты';

  document.body.insertBefore(message, document.body.header);
}  

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

const faqList = document.querySelector('.faq__list');

faqList.addEventListener('click', (e) => {
  if (!e.target.classList.contains('faq__list')) {

    const item = e.target.closest('.faq__item')

    const title = item.querySelector('.faq__item-title');
    title.classList.toggle('faq__item-title_active');

    const description = item.querySelector('.faq__item-description');
    description.classList.toggle('faq__item-description_active');

    const btn = item.querySelector('.faq__btn');
    btn.classList.toggle('faq__btn_active');
  
  }
})

