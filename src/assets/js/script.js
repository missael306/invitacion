import $ from "jquery";

/*------------------------*/
/*	Window Loader
/*------------------------*/
	$(window).on('load', function() {
		var preloader = $('#pageLoader');		
		preloader.fadeOut();
		preloader.delay(500).fadeOut('slow');				
	});


/*------------------------*/
/*	Sticky Header
/*------------------------*/
	$(window).on('scroll', function() {		
		var top= $(window).scrollTop();				
		if( top > 100 ){		
			$(".header").addClass("fixed");
		} else {
			$(".header").removeClass("fixed");
		}				
	});
	
	
/*---------------------------------*/
/*	Navigtion Menu 
/*---------------------------------*/
	var windoWidth = $(window).width(); 
	$(document).ready(function(){		
		if (windoWidth < 992) {	
			$('#menu_toggle').on('click',function(){
				$('.header').toggleClass('menu_open');			
			});
			$('.navbar-nav .nav-link').on('click',function(){			
				$("#menu_toggle").trigger("click");
			});
		};
	});	
