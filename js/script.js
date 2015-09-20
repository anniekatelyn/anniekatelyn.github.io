$(document).ready(function() {
//Technical courses 
  var $p = $("#hidden");
  $(document).ready(function () {
    $("#hide, #show").click(function () {
        $("p").toggle(this.id == "show");
    });
  });


  //navbar
  var scroll_start = 0;
  var startchange = $('.navbar');
  var offset = startchange.offset();
  $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar').css({"background":"rgba(255,255,255,.3)"});
      } else {
          $('.navbar').css({"background": "rgba(255,255,255,.3)"});
      }
  });
});