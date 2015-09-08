'use strict';

(function($) {
  $("div.js-clone-url input").each(function(){
  
    console.log(this.value);
    console.log(this);
    $(this).val("git clone " + this.value);
  })
})(jQuery);
