$(document).ready(function(){
	$(".maincon").click(function(){
		location.replace("Count_Color/index.html");
	})
	$(".maincon1").click(function(){
		location.replace("Sudoku_game/index.html");
	})
	if($(window).width() > '800'){
		$(".maincon").animate({
			opacity : "1",
			left:'80%',
			top:'50%'
	     
		}, 1000)
	}
	if($(window).width() > '800'){
		$(".maincon1").animate({
			opacity : "1",
			left:'20%',
			top:'50%'
	     
		}, 1000)
	}

})