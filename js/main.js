
$(document).ready(function(){
    $(".mouse").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });
    $(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
  $('.scrollup').fadeIn();
  } else {
  $('.scrollup').fadeOut();
  }
  });
  
  $('.scrollup').click(function (){
    $("html,body").animate({
    scrollTop: 0
    }, 1000);
    return false;
});

