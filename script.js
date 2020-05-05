
$(document).ready(function(){

	$('.hamburger-menu__button, .link--mobile').on('click', function(event){
			

		$('body').toggleClass('fixed');
		$('.hamburger-menu--mobile').fadeToggle();

		if ($('.link-list--mobile').attr('data-visible') == 'false') {

            $('.link-list--mobile').attr('data-visible', true);

            $('.button__menu:first-child').css('transform', 'translateY(0%) rotate(45deg) translateZ(0)');

             $('.button__menu:nth-child(2)').css('opacity', '0');

            $('.button__menu:nth-child(3)').css('transform', 'translateY(-180%) rotate(-45deg) translateZ(0)');
            $('.button__menu').css('margin-bottom', '0px');
            $('.button__menu:nth-child(3)').css('background-image', 'none');
       
        } else {
            $('.link-list--mobile').attr('data-visible', false);

            $('.button__menu:first-child').css('transform', 'rotate(0deg)');

            $('.button__menu:nth-child(2)').css('opacity', '1');
            

            $('.button__menu:nth-child(3)').css('transform', 'rotate(0deg)');
            $('.button__menu').css('margin-bottom', '6px');
            $('.button__menu:nth-child(3)').css('background-image', 'linear-gradient(13deg, rgb(255, 143, 90) 75%, rgb(255, 89, 171) 100%)');
        };

	});

    $('.close').on('click', function(event){
        $('.request-call').fadeToggle();
        $('.overlay').fadeToggle();

    });

    $('.overlay').on('click', function(event){
        $('.request-call').hide();
        $('.overlay').hide();

    });


    $('.button-phone--mobile').on('click', function(event){
        $('.overlay').fadeToggle();
        $('.request-call').fadeToggle();

    });

    $('.contact__call, .column__call, .about__more, .button-box__price, .button-box__order').on('click', function(event){
        $('.overlay').fadeToggle();
        $('.request-call').fadeToggle();

    });

    $( "form" ).submit(function(event){
        
        event.preventDefault();

        let $form = $(this);
     
        $.post( 
		
		$form.attr("action"),

        $form.serialize(), function(){

       $('.request-call').hide();
       $('.request-call__accept').fadeToggle();
        setTimeout("$('.overlay').hide()", 2000);
        setTimeout("$('.request-call__accept').hide()", 2000);

        });

       setTimeout(() =>  $form[0].reset(), 1000);
       return false


    });

    $(document).ready(function($) {
        $("#phone").mask("+7 (999) 999-99-99");
      });


});




new Swiper('.slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  loop: true,
  wrapperClass: 'slider__list',
  slideClass: 'slider__item',
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    bulletClass: 'paginator__item',
    bulletActiveClass: 'paginator__item--active',
    clickable: true
  },
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
});







