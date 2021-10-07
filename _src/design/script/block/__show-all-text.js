////////////////////////////////////// show-all-text
(() => {
  if (document.querySelector('[data-show-text-btn]')) {
    const showTextBtn = document.querySelector('[data-show-text-btn]');
    const hiddenText = document.querySelector('[data-hidden-text]');

    const changeDisplayAllText = () => {
      hiddenText.classList.toggle('s-text__txt--show');
    };

    const changeBtnText = (evt) => {
      if (evt.currentTarget.innerText === 'Read More') {
        evt.currentTarget.innerText = 'Close';
      } else {
        evt.currentTarget.innerText = 'Read More';
      }
    };

    showTextBtn.addEventListener('click', (evt) => {
      changeDisplayAllText();
      changeBtnText(evt);
    });
  }
})();
