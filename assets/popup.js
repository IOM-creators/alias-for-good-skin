window.addEventListener("load", (event) => {
  const htmlTag = document.querySelector('html');

  const openPopupButtons = document.querySelectorAll('.popup-open');
  const closePopupButtons = document.querySelectorAll('.popup__close');

  openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      let buttonId = button.id;
      htmlTag.classList.add('overflow');
      document.querySelector(`.popup[data-popup="${buttonId}"]`).classList.add('active');
      document.querySelector(`.popup[data-popup="${buttonId}"]`).querySelector('.video-block__popup-video').play();
    })
  });

  closePopupButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      htmlTag.classList.remove('overflow');
      let currentPopup = document.querySelector(`.popup.active`)
      currentPopup.classList.remove('active');
      currentPopup.querySelector('.video-block__popup-video').pause();
    })
  });

  document.addEventListener('click', (e) => {
    const hasClass = e.target.classList.contains('popup__inner');
    if (hasClass) {
      htmlTag.classList.remove('overflow');
      let currentPopup = document.querySelector(`.popup.active`)
      currentPopup.classList.remove('active');
      currentPopup.querySelector('.video-block__popup-video').pause();
    }
  });

});