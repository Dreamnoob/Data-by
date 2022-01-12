document.addEventListener('DOMContentLoaded', function () {

    let blockItem = document.querySelectorAll('.block-item');

    blockItem.forEach(item => {

        let descr = item.querySelector('.block-item__descr');
        let descrHeight = descr.scrollHeight;

        item.addEventListener('mouseenter', function () {
            descr.style.maxHeight = descrHeight + 'px';
            item.classList.add('active');
        });

        item.addEventListener('mouseleave', function () {
            descr.style.maxHeight = 0;
            setTimeout(function () {
                item.classList.remove('active');
            }, 300);
        });


    });

});