;(function($, undefined) {
  $.fn.Slider = function() {
    return this.each(function(index, container) {
      $(container).data('slider', new Slider(container));
    });
  };

  var Slider = function(container) {
    this.$container        = $(container);
    this.$sectionSwitch    = this.$container.find('.section-switch');
    this.$imageTitleList   = this.$container.find('.image-title-list');
    this.$imageTitleListUl = this.$imageTitleList.find('ul');
    this.$imageSlider      = this.$container.find('.image-slider');

    this.init();
  };

  Slider.prototype.init = function() {
    this.$sectionSwitch .css('display', 'block');
    this.$imageTitleList.css('display', 'block');
    this.$imageSlider   .css('display', 'block');

    this.imageTitleListLength = this.$imageTitleListUl.children().length;
    this.imageTitleListItemHeight = this.$imageTitleListUl.height() / this.imageTitleListLength;
    this.$imageTitleList.css('height', this.imageTitleListItemHeight * 3);
    this.$imageTitleList.css('overflow-y', 'hidden');

    this.bindSectionSwitch();
  };

  Slider.prototype.bindSectionSwitch = function() {
    var self = this;

    this.$sectionSwitch.on('click', '.image-section', function() {
      // self.$imageTitleList.scrollTop(parseInt($(this).data('section')) * self.imageTitleListItemHeight * 3);
      self.$imageTitleListUl.animate({
        top: '150px'
        // transform: 'translateY(' + parseInt($(this).data('section')) * self.imageTitleListItemHeight * 3 + ')'
      }/*, {
        step: function(now, fx) {
          $(this).css('transform', 'translateY(' + now + 'px)')
        },
        duration:'slow'
      }*/, 400);

    });
  };
})(jQuery);
