// window.addEventListener('scroll', function () {
//     var scrollTop = window.scrollY;

//     var colorBgElements = document.querySelectorAll('.product__colorbg');
//     colorBgElements.forEach(function (element) {
//         var elementHeight = element.clientHeight;
//         var opacity = 1 - (elementHeight - scrollTop) / elementHeight;
//         element.style.opacity = opacity;
//     });
// });


const ingredientsAccordionItems = document.querySelectorAll('.ingredients-expand')
ingredientsAccordionItems.forEach(item => {
    const button = item.querySelector('.upperlink')
    const body = item.querySelector('.ingredients-expand__body')
    button.addEventListener('click', function () {
        if (this.classList.contains('is-open')) {
            body.style.height = '0'
            button.classList.remove('is-open');
        } else {
            let childHeight = body.children[0].scrollHeight
            body.style.height = `${childHeight}px`;
            button.classList.add('is-open');
        }
    })
})