$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        nextArrow: $('#rightArrow'),
        prevArrow: $('#leftArrow')
    });
});