;(function($, undefined) {
  $(function() {
    $('.choose-buttons').find('button').on('click', function() {
      if($(this).data('type') === 'js') {
        $('.slider').Slider();
      }

      if($(this).data('type') === 'css') {
        $('.slider').addClass('css-only');
      }
    })
  });
})(jQuery);

