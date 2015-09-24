'use strict';

(function($) {
  
   
    $("body").html($("div.clear"));
    $($("div.clear")[5]).remove();
    $("div#footer").remove();
    $("div.span-755").html($("div.pagination"));

    console.log("happy day~");
})(jQuery);
