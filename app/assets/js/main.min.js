'use strict';

jQuery(document).ready(function ($) {

  $('.product-item__sizes').on('click', 'span', function(e) {
    e.preventDefault();
    let th = $(this);
    if (!th.hasClass('active')) {
      th.addClass('active').siblings().removeClass('active');
    }
  });

  $('.tabs-nav').on('click', 'ul a', function(e) {
    e.preventDefault();
    let th = $(this);
    if (!th.hasClass('active')) {
      let tabs_container = th.closest('.tabs-wrapper').find('.tabs-container');
      let targetIndex = th.closest('li').index();
      th.addClass('active').closest('li').siblings().find('a').removeClass('active');

      tabs_container.children('.tab-item').eq(targetIndex).addClass('active').siblings().removeClass('active');

    }
  })

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
