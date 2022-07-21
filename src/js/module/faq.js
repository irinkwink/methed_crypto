const faqList = document.querySelector('.faq__list');

faqList.addEventListener('click', (e) => {
  const item = e.target.closest('.faq__item');

  if (item) {
    console.log('vze');
    const title = item.querySelector('.faq__item-title');
    title.classList.toggle('faq__item-title_active');

    const description = item.querySelector('.faq__item-description');
    description.classList.toggle('faq__item-description_active');

    const btn = item.querySelector('.faq__btn');
    btn.classList.toggle('faq__btn_active');
  
  }
})