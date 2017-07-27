;(function($, undefined) {
  $.fn.Slider = function() {
    return this.each(function(index, container) {
      $(container).data('slider', new Slider(container));
    });
  };

  var Slider = function(container) {
    console.log(container);
  };

  Slider.prototype.init = function() {

  }
})(jQuery);
