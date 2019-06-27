$(".one").mouseover(function(){
    $(".one").addClass("active");   
});
$(".two").mouseover(function(){
    $(".two").addClass("active");   
});
$(".three").mouseover(function(){
    $(".three").addClass("active");   
});
$(".one").mouseover(function(){
    $(".two").removeClass("active");
    $(".three").removeClass("active");
    $(".one").addClass("active")   
});
$(".two").mouseover(function(){
    $('.one').removeClass("active");
    $('.three').removeClass("active");
    $(".two").addClass("active");   
});
$(".three").mouseover(function(){
    
    $(".two").removeClass("active");
    $(".one").removeClass("active");
    $(".three").addClass("active");

});
// scrool top
$(function () {
    $(".sticky").sticky({
    topSpacing: 0
    , zIndex: 2
    , stopper: "#YourStopperId"
    });
    });