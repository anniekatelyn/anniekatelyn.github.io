$(document).ready(function() {
  
//smooth scroll

  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//change navbar color
  // var scroll_start = 0;
  // var startchange = $('.navbar');
  // var offset = startchange.offset();
  // $(document).scroll(function() { 
  //     scroll_start = $(this).scrollTop();
  //     if(scroll_start > offset.top) {
  //         $('.navbar').css({"background":"white"});
  //      } else {
  //         $('.navbar').css({"background": "rgba(255,255,255,.3"});
  //      }
  // });
 
//Technical courses 
  var $p = $("#hidden");
  $(document).ready(function () {
    $("#hide, #show").click(function () {
        $("p").toggle(this.id == "show");
    });
  });

});