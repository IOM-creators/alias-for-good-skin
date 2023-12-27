window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;

    var colorBgElements = document.querySelectorAll('.product__colorbg');
    colorBgElements.forEach(function (element) {
        var elementHeight = element.clientHeight;
        var opacity = 1 - (elementHeight - scrollTop) / elementHeight;
        element.style.opacity = opacity;
    });
});