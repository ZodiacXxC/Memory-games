$(document).ready(function(){
	$(".start").animate({bottom:"70px",opacity: '1'}, 700);
	$(".main-btn").animate({bottom:"70px",opacity: '1'}, 700);
	var red = 0;
    var blue = 0; 
    var purble = 0;
    $(".main-btn").click(function() {
    	location.replace("../index.html");
    });
	$("#start").click(function() {
		$('#in-red').val('');
		$('#in-blue').val('');
		$('#in-purble').val('');
		$("#main-m").fadeOut( "slow", function() {
			$("#game-page").css("display","flex");
    		$("#game-page").fadeIn("slow",function(){
    			const ball_num = $('#op-balls').val();
    			const time_num = $('#op-speed').val() * 1000;
    			const color = [];
    			color.push("#6F1AB6","#820000","#1C82AD");
    			for(let i =0;i < ball_num;i++){
    				let co = color[Math.floor(Math.random()*color.length)];
    				let x = '<div class="ball" style="background :' + co +'"></div>';
    				$('.balls-g').append(x);
    				if(co == "#6F1AB6"){
    					purble++;
    				}
    				else if(co == "#820000"){
    					red++;
    				}
    				else if(co == "#1C82AD"){
    					blue++;
    				}
    				
    				
    				
    			}
    			setTimeout(function(){
    				$(".ball").fadeOut('slow', function() {
    				});
    				
    			},time_num);
    			setTimeout(function(){
    				$('.balls-g').append("<h1 class='h-st'>Count a balls color</h1>");
    				$('.h-st').fadeIn('slow',function(){});
    			},time_num);
    			setTimeout(function(){
    				$('.count').fadeIn('slow', function() {
    				
    				});
    			},time_num);
    			

    		});

  		});
	});
	$('#check').click(function(){
		let red_num = $('#in-red').val();
		let blue_num = $('#in-blue').val();
		let purble_num = $('#in-purble').val();
		if(red_num == red && blue_num == blue && purble_num == purble){
			$(".notify").toggleClass("active");
  			$("#notifyType").toggleClass("success");
  			setTimeout(function(){
    			$(".notify").removeClass("active");
    			$("#notifyType").removeClass("success");
    			location.reload();
				$('#in-red').val('');
				$('#in-blue').val('');
				$('#in-purble').val('');
  			},3000);
			
		}else{
			$(".notify").addClass("active");
			$("#notifyType").addClass("failure");
			  
			setTimeout(function(){
				$(".notify").removeClass("active");
				$("#notifyType").removeClass("failure");
			},2000);
		}
		

	});
	$('#rest').click(function(){
		location.reload();
		
	});
})

function isInput(evt){
	var char = String.fromCharCode(evt.which);
	if(!(/[0-9]/.test(char))){
		evt.preventDefault();
	}
}


  



