'use strict';

(function($) {
  //$("div.js-clone-url input").each(function(){
  $("div.js-select-menu input").each(function(){
  
    console.log(this.value);
    console.log(this);
    $(this).val("git clone " + this.value);
    // if do not end with `.git`, add that, eventhrough we can not add that one;
    // but just explicitly
    if ($(this).val().indexOf('.git')<=0)
    {
    	 $(this).val(this.value + '.git');
    }


  })
})(jQuery);
