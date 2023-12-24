window.onload = (event) => {

    const swiper = new Swiper(".reviews-slider__items-nav", {
        spaceBetween: 20,
        slidesPerView: 2.5,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            440: {
                slidesPerView: 3.5
              },            
            640: {
              slidesPerView: 4
            }
          }
    });

    const swiper2 = new Swiper(".reviews-slider__items", {
        spaceBetween: 10,
        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: swiper,
        }
    });

};