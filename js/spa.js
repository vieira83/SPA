/*
 * spa.js
 * Root namespace module
*/

/*jslint   brwoser:true, continue:true,
  devel : true, indent : 2 maxerr : 50,
  newcap : true, nomen : true, plusplus : true,
  regexp : true, sloppy : true, vars : true,
  white : true
*/

/* global $, spa */ 

var spa = (function(){
	var initModule = function($container){
		$container.html('<h1 style="display:inline-block; margin:25px;"></h1>'
				+'hello world!'
			+'</h1>'
		);	
	};
	return {initModule: initModule};
}());
