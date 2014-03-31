$(document).ready(function(){

	$(".check").click(function(){

		$(this).html("<i class = 'fa fa-check-circle-o fa-4x target'></i>")
		$('#myModal').foundation('reveal', 'open');
		$("#cat-star").replaceWith("<div class='small-badge-image'>&nbsp</div><br>");
		$("#m1").html("50 <i class='fa fa-book'></i>");
		$("#m2").html("370 <i class='fa fa-files-o'></i>");
	})

})