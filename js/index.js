$(document).ready(function(){

function messageReceived(){
	var x = document.getElementById("Message").value;
    document.getElementById("received").innerHTML = 'Thanks! Your message, "' + x + '" has been received. I will respond as soon as I can.';
};


$('li').hover(
	function(){
		$(this).toggleClass('li-hover');
	}, function(){
		$(this).toggleClass('li-hover');
});


//
$('li').click(
	function(){
		$(this).toggleClass('li-click')
		.children().text('clicked!')

});

//doc.ready
});

