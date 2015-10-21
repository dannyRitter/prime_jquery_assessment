$(document).ready(function(){
	
	$("#generateProperty").on("click", function(){
		$("#generateCounter").html(function(i, val) { return val*1+1 });
		$("#generateButton").append("<div class='newButtons'></div>");
			
		var $el = $("#generateButton").children().last();
			$el.append("<button class='delete'>delete</button>");
			$el.append("<button class='change'>change</button>");

		$(".newButtons").on("click", ".delete", function(){
			$(this).parent().remove();
		});

		// $(".newBttons").on("click", ".change", function(){
		// 	$(this).css('background-color', 'red');
		// });
		// I need more time!! :-(
 	});

});

