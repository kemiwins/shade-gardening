$(document).ready(function(){
	
	$("#annuals-button").click(function(){
		$(".annual").show();
		$(".perennial").hide();
		$(".shrub").hide();
	})
	$("#perennials-button").click(function(){
		$(".annual").hide();
		$(".perennial").show();
		$(".shrub").hide();	
	})
	$("#shrubs-button").click(function(){
		$(".annual").hide();
		$(".perennial").hide();
		$(".shrub").show();	
	})
	$("#all-button").click(function(){
		$(".annual").show();
		$(".perennial").show();
		$(".shrub").show();
	})
});