$(document).ready(function () {
    $('.slider').slick({
        dots: true
    });
    $('.burger-menu__label').on('click', function () {
        $('.burger-menu__dropdown').show(1000)
    })
    $('.burger-menu__label').on('mouseout', function () {
        $('.burger-menu__dropdown').hide(1000)
    })
});
