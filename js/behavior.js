$(document).ready(function() {
	
	$(window).bind('scroll', function(e) {
		parallax();
	});
	
	$('a.home-btn').click(function() {
		$('html, body').animate({ scrollTop:0 }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	
	$('a.web-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#web').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	
	$('a.animation-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#animation').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});

// Mobile
	$('a.mobile-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#mobile').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	$('a.scholarhero-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#scholarhero').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});

	$('a.go-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#go').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	$('a.ipaint-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#ipaint').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	$('a.pearloak-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#pearloak').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	$('a.scriber-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#scriber').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});


// design
	$('a.design-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#design').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});

	$('a.process-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#process').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});

	$('a.me-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#me').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});

	$('a.websites-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#websites').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	$('a.ads-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#ads').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	$('a.mobile-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#mobile').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	$('a.stats-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#stats').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	$('a.portfolio-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#portfolio').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});			
	$('a.experience-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#experience').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});	
	$('a.skills-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#skills').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});	
	$('a.contact-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#contact').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});

});
	
          
function parallax() {
	var scrollPosition = $(window).scrollTop();
	$('#images').css('top', (0 - (scrollPosition * .5)) + 'px');	
	$('#images2').css('top', (0 - (scrollPosition * .4)) + 'px');
	$('#images3').css('top', (0 - (scrollPosition * .3)) + 'px');	
	$('#images4').css('top', (0 - (scrollPosition * .5)) + 'px');	
}