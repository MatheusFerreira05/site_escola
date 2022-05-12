(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    var carouselImgs = new Carousel({
        container: '.carroussel .fotos',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()