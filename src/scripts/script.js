;(function($, undefined) {
  $(function() {
    $('div.choose-buttons').find('button').on('click', function() {
      if($(this).data('type') === 'js') {
        $('.slider').Slider();
      }

      if($(this).data('type') === 'css') {
        console.log("css");
      }
    })
  });
})(jQuery);

