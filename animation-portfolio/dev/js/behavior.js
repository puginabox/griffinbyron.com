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

	$('a.contact-btn').click(function() {
		$('html, body').animate({ scrollTop:$('#contact').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});

});