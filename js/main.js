$(document).ready(function () {
    'use strict';

    //********* page loader js

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1000);

	//********** menu background color change while scroll

	$(window).on('scroll', function () {
		var menu_area = $('.nav-area');
		if ($(window).scrollTop() > 200) {
			menu_area.addClass('sticky_navigation');
			$(".img-logo").fadeIn(function(){$(this).attr("src", "../images/home/logo-black.png");});
		} else {
			menu_area.removeClass('sticky_navigation');
			$(".img-logo").fadeIn(function(){$(this).attr("src", "../images/home/logo-white.png");});
		}
	});
 

	//********** menu hides after click (mobile menu)
 
	$(document).on('click', '.navbar-collapse.in', function (e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			$(this).collapse('hide');
		}
	}); 


	//*********** scrollspy js

 	$('body').scrollspy({
		target: '.navbar-collapse',
		offset: 195
	});


	//************ smooth scroll js

	$('a.smooth-menu,a.dadada,a.skill-btn').on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1000);
    });
    $('a.smooth-menu,a.dadada,a.contact-btn').on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1000);
	});

	//*********** Animated headline js

	$('.animate-scale').animatedHeadline({
		animationType: 'clip'
	});

	//***** Skill bar js

	var skillbar = $(".skillbar");

	skillbar.waypoint(function () {
		skillbar.each(function () {
			$(this).find(".skillbar-child").animate({
				width: $(this).data("percent")
			}, 1000);
		});
	}, {
		offset: "80%"
	});

	
	
	//*************** Read more

	$(function() {
		
		var $p, $el, $ps, $up, totalHeight;
		var $orgHeight = $('.special-text').height();
		$(".special-text  .read-more-button").click(function() {
		
					
			totalHeight = 0
		
			$el = $(this);
			$p  = $el.parent();
			$up = $p.parent();
			$ps = $up.find("p:not('.read-more')");
			
			$ps.each(function() {
				totalHeight += $(this).outerHeight() + 20;
			});
						
			$up
				.css({
					"height": $up.height(),
					"max-height": 9999
				})
				.animate({
					"height": totalHeight
				});
			$p.fadeOut();
			$('.read-less').fadeIn();

			return false;
				
		});

		$(".special-text .read-less-button").click(function() {
		
			$el = $(this);
			$p  = $el.parent();
			$up = $p.parent();
			totalHeight = $up.height();

			$up
				.css({
					"height": totalHeight,
					"max-height": 9999
				})
				.animate({
					"height": $orgHeight
				});
			
			// fade out read-less
			$p.fadeOut();
			$('.read-more').fadeIn();
			
			// prevent jump-down
			return false;
				
		});
	
	});

	$(function() {

		var $p2, $el2, $ps2, $up2, totalHeight2;
		var $orgHeight2 = $('.special-text2').height();

		$(".special-text2  .read-more-button2").click(function() {


			totalHeight2 = 90

			$el2 = $(this);
			$p2  = $el2.parent();
			$up2 = $p2.parent();
			$ps2 = $up2.find("p:not('.read-more2')");

			$ps2.each(function() {
				totalHeight2 += $(this).outerHeight() - 30;
			});

			$up2
				.css({
					"height": $up2.height(),
					"max-height": 9999
				})
				.animate({
					"height": totalHeight2
				});

			// fade out read-more
			$p2.fadeOut();
			$('.read-less2').fadeIn();

			// prevent jump-down
			return false;

		});

		$(".special-text2 .read-less-button2").click(function() {

			// IE 7 doesn't even get this far. I didn't feel like dicking with it.

			$el2 = $(this);
			$p2  = $el2.parent();
			$up2 = $p2.parent();
			totalHeight2 = $up2.height();

			$up2
				.css({
					// Set height to prevent instant jumpdown when max height is removed
					"height": totalHeight2,
					"max-height": 9999
				})
				.animate({
					"height": $orgHeight2
				});

			// fade out read-less
			$p2.fadeOut();
			$('.read-more2').fadeIn();

			// prevent jump-down
			return false;

		});

	});


    //*************** Isotope filter

    var $Container = $('#img-filter');
    if( $Container.length>0 ) {
        $Container.isotope({
            itemSelector: '.single-port',
            transitionDuration: '0.8s'
        });
        $(".img-filter").on("click", function (e){
            $(".img-filter.active").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $Container.isotope({
                filter: selector
            });
            return false;
        });

        $(window).resize(function(){
            setTimeout(function(){
                $Container.isotope();
            },1000);
        }).trigger('resize');
    }

	// carousel

	(function myLoop (i) {          
		setTimeout(function () {  
			$(".image-gesequip").delay(4000).fadeIn(function(){
				$(this).attr("src", "../images/port/gesequip_equips.png");
			});
			$(".image-gesequip").delay(4000).fadeIn(function(){
				$(this).attr("src", "../images/port/gesequip_entrada.png");
			});
			$(".image-gesequip").delay(4000).fadeIn(function(){
				$(this).attr("src", "../images/port/gesequip_login.png");
			});


			$(".image-climber").delay(4000).fadeIn(function(){
				$(this).attr("src", "../images/port/climber_content.png");
			});
			$(".image-climber").delay(4000).fadeIn(function(){
				$(this).attr("src", "../images/port/climber_login.png");
			});


			$(".image-melius").delay(4000).fadeIn(function(){
				$(this).attr("src", "../images/port/melius_content.png");
			});
			$(".image-melius").delay(4000).fadeIn(function(){
				$(this).attr("src", "../images/port/melius_settings.png");
			});
			$(".image-melius").delay(4000).fadeIn(function(){
				$(this).attr("src", "../images/port/melius_login.png");
			});  
			if (--i) myLoop(i);
		}, 50)
	})(10800);

});