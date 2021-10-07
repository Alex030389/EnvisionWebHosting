//////////////////////////////////////////// menu
(() => {
  if (document.querySelector('[data-btn-open]')) {
    const btnOpenNav = document.querySelector('[data-btn-open]');
    const btnCloseNav = document.querySelector('[data-btn-close]');
    const mNavOverlay = document.querySelector('[data-nav-overlay]');
    const mNav = document.querySelector('[data-nav-main]');
    const body = document.querySelector('body');

    const openMNav = () => {
      body.classList.add('fixed');
      mNavOverlay.classList.add('header__nav-overlay--active');
      mNav.classList.add('header__nav-main--active');
    };

    const closeMNav = () => {
      body.classList.remove('fixed');
      mNavOverlay.classList.remove('header__nav-overlay--active');
      mNav.classList.remove('header__nav-main--active');
    };

    btnOpenNav.addEventListener('click', () => {
      openMNav();
    });

    btnCloseNav.addEventListener('click', () => {
      closeMNav();
    });

    mNavOverlay.addEventListener('click', (evt) => {
      if (evt.target === mNavOverlay) {
        closeMNav()
      }
    });
  }
})();
