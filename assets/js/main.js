$(document).ready(function() {
  // var jPM = $.jPanelMenu({
  //   menu: '#nav',
  //   trigger: '.toggle-button'
  // });

  // jPM.on();
  $('.home-page-categories').hide();

  $('.toggle-button').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('is-open');
  });

  $('.select-posts').on('click', function(e) {
    e.preventDefault();

    if($(this).hasClass('active')) {
      return;
    } else {
      $(this).addClass('active');
      $('.select-categories').removeClass('active');

      $('.home-page-categories').fadeOut("fast", function() {
        $('.home-page-posts').fadeIn("fast");
      });
    }
  });

  $('.select-categories').on('click', function(e) {
    e.preventDefault();

    if($(this).hasClass('active')) {
      return;
    } else {
      $(this).addClass('active');
      $('.select-posts').removeClass('active');

      $('.home-page-posts').fadeOut("fast", function() {
        $('.home-page-categories').fadeIn("fast");
      });
    }
  });
});