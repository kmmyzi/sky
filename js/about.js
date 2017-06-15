$(function(){
	$(".popImg").click(function(){
	    $(".videoIframe").animate({         
    display:"none"
  }, 400 ); 
	},function(){
	    $(".videoIframe").animate({         
    display:"block"
  }, 400 );
	});
})