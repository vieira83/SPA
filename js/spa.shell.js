/*
 * spa.shell.js
 * Shell namespace module
*/

/*jslint   brwoser:true, continue:true,
  devel : true, indent : 2 maxerr : 50,
  newcap : true, nomen : true, plusplus : true,
  regexp : true, sloppy : true, vars : true,
  white : true
*/

/* global $, spa */

spa.shell =(function(){
	//------------Begin Module Scope Variables-------------------
	var
		configMap = {
			main_html : String()
			+'<div class ="spa-shell-head">'
				+'<div class ="spa-shell-head-logo"></div>'
				+'<div class ="spa-shell-head-acct"></div>'
				+'<div class ="spa-shell-head-search"></div>'
			+'</div>'
			+'<div class ="spa-shell-main">'
				+'<div class ="spa-shell-main-nav"></div>'
				+'<div class ="spa-shell-main-content"></div>'
			+'</div>'
			+'<div class ="spa-shell-foot"></div>'
			+'<div class ="spa-shell-chat"></div>'
			+'<div class ="spa-shell-modal"></div>',
			chat_extend_time : 1000,
			chat_retract_time : 300,
			chat_extend_height : 450,
			chat_retract_height : 15,
			chat_extended_title : 'Click to retract',
			chat_retracted_title : 'Click to extend'
		},
		stateMap = {
			$container : null,
			is_chat_retracted : true
		},
		jqueryMap = {},
		setJqueryMap, toggleChat, onClickChat, initModule;
		
	//--------------End Module Scope Variable-----------------------
	//--------------Begin Utility Methods --------------------------
	//--------------End Utility Methods-----------------------------
	//--------------End DOM Methods---------------------------------
	//BEGIN Dom method / setJqueryMap/
	setJqueryMap = function(){
		var $container = stateMap.$container;
		jqueryMap={
			$container:$container,
			$chat: $container.find('.spa-shell-chat')
		};
	};
	//End Dom method/ SetJqueryMap/
	
	//BEGIN Dom method / toggleChat/
	//Purpose: Extends or retracts chat slider
	//Arguments:
	// *do_extend if true, extends slider: if false retracts
	//* callback -optional function to execute at the end of anumation
	//Settings
	//*Chat_enxtend_time, chat_retract_time
	//Returns :boolean
	//State : sets stateMap.is_chat_retracted
	//* true -slider animation activated
	//* false -slider animation not activated
	toggleChat =function(){
        var 
        	px_chat_ht = jqueryMap.$chat.height(),
        	is_open = px_chat_ht === configMap.chat_extend_height,	
        	is_closes =  px_chat_ht === configMap.chat_retract_height,
        	is_sliding = !is_open && !is_closed;
        
        	//avoid race condition
        if(is_sliding){return false;}
        
        //Begin extend chat slider
        if(do_extend){
            jqueryMap.$chat.animate(
                { height:configMap.chat_extend_height},
                configMap.chat_extend_time,
                function(){
            		jqueryMap.$chat.attr(
            			'title',configMap.chat_extended_title
            		);
            		statteMap.is_chat_retracted = false;
            		if(callback){callback(jqueryMap.$chat);}
            	}
            );
            return true;
        //End extend chat slider
        }
        //Begin retract chat slider
        jqueryMap.$chat.animate(
          { height:configMap.chat_retract_height },
          configMap.chat_retract_time,
          function(){
            jqueryMap.$chat.attr(
                'title', configMap.chat_retracted_title
            );
            statteMap.is_chat_retracted = true;
            if(callback){callback(jqueryMap.$chat);}
          }
        );
        return true;
       //End retract chat slider
    };
	//End DOM method /toggleChat/
	//--------------END DOM Methods -----------------------------------
	//--------------Begin Event Handlers ------------------------------
	
	//--------------END Event Handlers --------------------------------
	onClicChat = function(event){
		toggleChat(stateMap.is_chat_retracted);
		return false;
	};
	//Begin Public method /initModule
	initModule = function($container){
		// load HTML and map jQuery collections
		stateMap.$container = $container;
		$container.html(configMap.main_html);
		setJqueryMap();
		//initialize chat slider and bind click handler
		stateMap.is_chat_retracted = true;
		jqueryMap.$chat
			.attr('title', configMap.chat_retracted_title)
			.click(onClickChat);
		//Test toggle
		//setTimeout(function(){toggleChat(true);},3000);
		//setTimeout(function(){toggleChat(false);},8000);
	};
	//END Public Method /initModile
	return {initModule:initModule};
	
	//--------------End Public Methods --------------------------------
}());