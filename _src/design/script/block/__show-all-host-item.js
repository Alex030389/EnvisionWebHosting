// ///////////////////////////////////// show-all-host-item
(() => {
  if(document.querySelector('[data-host-btn]')) {
    const hostBtn = document.querySelector('[data-host-btn]');
    const hostItems = document.querySelectorAll('[data-host-item]');

    const changeDisplayAllHostItem = () => {
      hostItems.forEach((item) => {
        item.classList.toggle('s-top-hosting__item--show');
      })
    };

    const changeBtnText = (evt) => {
      if (evt.currentTarget.innerText === 'Show More') {
        evt.currentTarget.innerText = 'Close';
      } else {
        evt.currentTarget.innerText = 'Show More';
      }
    };

    hostBtn.addEventListener('click', (evt) => {
      changeDisplayAllHostItem();
      changeBtnText(evt);
    });
  }
})();
