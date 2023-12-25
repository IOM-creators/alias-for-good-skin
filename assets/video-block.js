window.addEventListener("load", (event) => {
    const htmlTag = document.querySelector('html');
    const videoBlock = document.querySelectorAll('.video-block');

    videoBlock.forEach(videoItem => {
        const openPopupButtons = videoItem.querySelectorAll('.video-block__open span');
        const popupBlock = videoItem.querySelector('.popup');
        const popupBlockInner = popupBlock.querySelector('.popup__inner');
        const closePopupButton = videoItem.querySelector('.popup__close');
        const videoElement = videoItem.querySelector('.video-block__popup-video');
        
        openPopupButtons.forEach((button) => {
          button.addEventListener('click', (e) => {
            e.preventDefault();
            htmlTag.classList.add('overflow');
            popupBlock.classList.add('active');
            videoElement.play();
          })
        });
        
        closePopupButton.addEventListener('click', () => {
          htmlTag.classList.remove('overflow');
          popupBlock.classList.remove('active');
          videoElement.pause();
        });
        
        document.addEventListener('click', (e) => {
          if (e.target === popupBlockInner) {
            htmlTag.classList.remove('overflow');
            popupBlock.classList.remove('active');
            videoElement.pause();
          }
        });

    });
});