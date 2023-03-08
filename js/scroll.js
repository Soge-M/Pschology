const bodyt = document.querySelector('body');
$(function(){
    $('.ImgGallety').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        arrows : false,
        asNavFor: '.tag-list',
    });
    $('.tag-list').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.ImgGallety',
        dots: false,
        focusOnSelect: true,
        variableWidth: true,
        infinite: false,
        });
    if(bodyt.offsetWidth <= 560){
    }
});



