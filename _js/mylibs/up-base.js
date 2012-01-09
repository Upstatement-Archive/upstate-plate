$(document).ready(function() {
	// Add objects that should automatically receive a "first" or "last" class
	
	function initClassFixing(){
		var first_last = new Array('table tr', 'table td', 'dl dt', 'ul li', '.table_container .table_default');
	
		for (var i=0; i<first_last.length; i++){
			var f = first_last[i];
			$(f+":first-child").addClass("first");
			$(f+":last-child").addClass("last");
		}
	
		$("table tr:odd").addClass("odd");
	}
	
	function initTabs(){
		/* Bind tabbing action from all uls with a class of 'tabs' to all divs
		/  with a class of '.pane' that share the same container div */
		try {
			$("ul.tabs").tabs("> .pane",{
				current:'active'
			});	
		
			// Bind tabbing action from all uls with a class of 'pills' to all divs
			// with a class of '.pane' that share the same container div
			$("ul.pills").tabs("> .pane",{
				current:'active'
			});	
		} catch(e){
			trace('Error loading tabs ' + e);
		}
	}
	
	function initDropDowns(){
		// Set dropdowns on click
		$(".dropdown-trigger").toggle(function() {
			$(this).parent(".dropdown").addClass("dropdown-active");
		}, function() {
			$(this).parent(".dropdown").removeClass("dropdown-active");
		});

		// Set dropdowns on hover
		$(".dropdown-trigger-hover").hover(function() {
            $(this).addClass("dropdown-active");
        }, function() {
            $(this).removeClass("dropdown-active");
        });
	}

	function initToolTips(){
    	// Show tooltips on hover
		$(document.body).delegate(".tip-trigger", "mouseenter mouseleave", function() {
			$(this).toggleClass("tip-active");
		});

		// Show popovers on hover
		$(document.body).delegate(".pop-trigger", "mouseenter mouseleave", function() {
			$(this).toggleClass("pop-active");
  		});
  	}
  	initClassFixing();
  	initTabs();
  	initDropDowns();
  	initToolTips();

}); /* end jQuery functions */
	
function trace(msg){
	try{console.log(msg);} catch(e){}
}