'use strict';

jQuery(document).ready(function ($) {
  $('.js-hamburger').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.main-navigation-wrapper').toggleClass('main-navigation-wrapper_active');
    $('.site-header').toggleClass('active');
  });

  $('input,textarea')
    .focus(function () {
      $(this)
        .data('placeholder', $(this).attr('placeholder'))
        .attr('placeholder', '');
    })
    .blur(function () {
      $(this).attr('placeholder', $(this).data('placeholder'));
    });
});
