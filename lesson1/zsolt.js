$(window).on('hashchange', function(e){
    console.log("hasdjakmkc")
	$('.courseExit').each(function(){
	
		// console.log(this)
		$(this).on("click", function(){
			// For the boolean value
			window.ReactNativeWebView.postMessage("CMD_CLOSELESSON");
		});
		
    });
});