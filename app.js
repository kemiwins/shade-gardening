$(document).ready(function(){
	
	$("#annuals-button").click(function(){
		$(".annual").show();
		$(".perennial").hide();
		$(".shrub").hide();
		$(".about").hide();	
	})
	$("#perennials-button").click(function(){
		$(".annual").hide();
		$(".perennial").show();
		$(".shrub").hide();
		$(".about").hide();		
	})
	$("#shrubs-button").click(function(){
		$(".annual").hide();
		$(".perennial").hide();
		$(".shrub").show();
		$(".about").hide();		
	})
	$("#all-button").click(function(){
		$(".annual").show();
		$(".perennial").show();
		$(".shrub").show();
		$(".about").hide();	
	})
		$("#about-button").click(function(){
		$(".annual").hide();
		$(".perennial").hide();
		$(".shrub").hide();
		$(".about").show();	
	})


});