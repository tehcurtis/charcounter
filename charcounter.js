(function($){
  $.charcounter = function(options){
    $.charcounter.init(options);
  };

  $.extend($.charcounter, {
    options: {
      watching: '',
      displayTarget: '',
      onUpdate: function(count){
        console.log('not implemented')
      }
    },
    init: function(options){
      $.extend($.charcounter.options, options)
      var $cc = $.charcounter;
      $($cc.options.watching).keyup($cc.onKeyup)
    },

    onKeyup: function(){
      var $cc = $.charcounter;
      var count = $(this).val().length;
      console.log($cc.displayTarget)
      $($cc.options.displayTarget).html(count)
      $cc.options.onUpdate(count)
    }

  })
})(jQuery);
