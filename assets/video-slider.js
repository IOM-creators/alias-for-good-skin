window.addEventListener("load", (event) => {

    const videoSlider = new Swiper(".video-slider__items", {
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".video-slider .sl-button-next",
            prevEl: ".video-slider .sl-button-prev",
        },
        breakpoints: {
            440: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 65
            }
        }
    });

    const videoTags = document.querySelectorAll('.video-slider__items video');

    function videoOnPause() {
        videoTags.forEach(elem => {
            elem.pause();
        })
    }

    if (window.screen.width >= 1024) {
        videoTags.forEach(item => {
            item.addEventListener('mouseenter', () => {
                videoOnPause();
                item.play();
            })
        });
    }

});