$(document).ready(function() {
	$(".hint").click(function() {
		$(".hint-form").slideToggle(400,function(){
		});
	});
	$(".low-level").click(function() {
		$(".main-m").fadeOut('slow', function() {
			$(".low-page").fadeIn('slow').css("display", "flex");
		});
	});
	$(".med-level").click(function() {
		$(".main-m").fadeOut('slow', function() {
			$(".med-page").fadeIn('slow').css("display", "flex");
		});
	});
	$(".main-btn").click(function() {
		location.replace('../index.html');
	});
	$(".home").click(function() {
		$(".low-page").fadeOut('slow', function() {
			
			setTimeout(function(){location.reload();},200)
		});
	});
	$(".home1").click(function() {
		$(".med-page").fadeOut('slow', function() {
			setTimeout(function(){location.reload();},200)
		});
	});
});