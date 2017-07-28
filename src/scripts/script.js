;(function($, undefined) {
  $(function() {
    $('.choose-buttons').find('button').on('click', function() {
      if($(this).data('type') === 'js') {
        $('.css-slider').css('display', 'none');
        $('.slider').css('display', 'block').Slider();
      }

      if($(this).data('type') === 'css') {
        $('.slider').css('display', 'none');
        $('.css-slider').css('display', 'block');
        // $('.slider').addClass('css-only');
        //
        // $imageTitleList = $('div.section-switch');
        // $imageTitleListItems = $imageTitleList.find('ul li');
        //
        // for(var i = 0; i < $imageTitleList.find('ul').children().length; ++i) {
        //   $imageTitleListItems.eq(i).html('<a href="#image' + i + '">' + $imageTitleListItems.eq(i).text() + '</a>');
        // }
        //
        // $imageSlider = $('div.image-slider');
        //
        // for(var i = $imageSlider.find('ul').children().length - 1; i >= 0; --i) {
        //   $imageSlider.prepend('<a id="image' + i + '"></a>');
        // }
      }
    })
  });
})(jQuery);

