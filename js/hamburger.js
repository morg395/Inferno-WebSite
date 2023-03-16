$(function () {
    'use strict';

    $('.hamburger').click(function() {
        $('.hamburger').toggleClass('hamburger--active');
        $('.menu').toggleClass('menu--show');
        $('body').toggleClass('overflow');
    })

})(jQuery);
