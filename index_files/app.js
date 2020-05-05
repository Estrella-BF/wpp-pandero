$('#wpp-msg').on('click', function(){
	window.open("https://api.whatsapp.com/send?phone=51971313111&text=I'm%20interested%20in%20your%20portfolio");
})

$('#text-box').hide();

$('#wpp').hover(function() {
	console.log('hover');
	$('#text-box').toggle();
})

