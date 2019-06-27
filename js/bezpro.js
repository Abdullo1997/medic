 $(document).ready(function() {



$('header .owl-carousel').owlCarousel({
	loop:true,
	autoplay: true,
	autoplayTimeout: 4000,
	animateOut: 'fadeOut',
	nav: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
});




});