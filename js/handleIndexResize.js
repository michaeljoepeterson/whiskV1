
function swapContent(){
	const swapContent1 = $(".js-swap-content-1").html();
	const swapContent2 = $(".js-swap-content-2").html();
	const swapContent3 = $(".js-swap-content-3").html();
	const swapContent4 = $(".js-swap-content-4").html();
	$(".js-swap-content-1").html(swapContent2);
	$(".js-swap-content-2").html(swapContent1);
	$(".js-swap-content-3").html(swapContent4);
	$(".js-swap-content-4").html(swapContent3);
}
function swapContentSmall(){
	$(".js-swap-content-1").html('<img src="http://overthetopcakes.ca/wp-content/uploads/2015/09/electric-mixer.png"/>"');
	$(".js-swap-content-2").html('<h2>Take a Class</h2>');
	$(".js-swap-content-3").html('<img style="width: 128px;heigth:128px;" src="http://overthetopcakes.ca/wp-content/uploads/2017/10/whisk-full-black_gold_transparent.png"/>');
	$(".js-swap-content-4").html('<h2>About Us</h2>');
}
function swapContentLarge(){
	$(".js-swap-content-1").html('<h2>Take a Class</h2>');
	$(".js-swap-content-2").html('<img src="http://overthetopcakes.ca/wp-content/uploads/2015/09/electric-mixer.png"/>">');
	$(".js-swap-content-3").html('<h2>About Us</h2>');
	$(".js-swap-content-4").html('<img style="width: 128px;heigth:128px;" src="http://overthetopcakes.ca/wp-content/uploads/2017/10/whisk-full-black_gold_transparent.png"/>');
}
function swapContent(){
	const swapContent1 = $(".js-swap-content-1").html();
	const swapContent2 = $(".js-swap-content-2").html();
	const swapContent3 = $(".js-swap-content-3").html();
	const swapContent4 = $(".js-swap-content-4").html();
	$(".js-swap-content-1").html(swapContent2);
	$(".js-swap-content-2").html(swapContent1);
	$(".js-swap-content-3").html(swapContent4);
	$(".js-swap-content-4").html(swapContent3);
}

function checkWidth(){
	let winWidth = $(window).width();
	console.log(winWidth);
	if(winWidth < 751){
		console.log("small screen");
		console.log($(".js-swap-content-1").html());
		//$(".js-swap-content-2").html($(".js-swap-content-1").html())
		swapContent()
	}
	else{
		console.log("larger screen");
	}

}
function handleWindowResize(){
	
	$(window).on('resize', function(){
	      let winWidth = $(this).width(); //this = window
	      console.log(winWidth);
	      
	     
	    if(winWidth < 751){
	      console.log("call function" , winWidth);
	      swapContentSmall();
	      
	    }
	    else{
	      swapContentLarge();
	      
	    }

	      
	});
}
function handleResize(){
	checkWidth();
	handleWindowResize();
}

$(handleResize)