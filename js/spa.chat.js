/*
 * spa.chat.js
 * Chat feature modultes for SPA
 * 
 */


/*jslint   brwoser:true, continue:true,
  devel : true, indent : 2 maxerr : 50,
  newcap : true, nomen : true, plusplus : true,
  regexp : true, sloppy : true, vars : true,
  white : true
*/

/* global $, spa , getComputerStyle*/

spa.chat = (function(){
//----------------------BEGIN MODULE SCOPE VARIABLES ------------------
var 
    configMap = {
        main_html:String()
        +'<div class=spa-chat">'
            +'<div class=spa-chat-head">'
                +'<div class=spa-chat-head-toggle">+</div>'
                +'<div class=spa-chat-head-title">'
                    +'Chat'
                +'</div>'
            +'</div>'
            +'<div class=spa-chat-closer">x</div>'
            +'<div class=spa-chat-sizer">'
                +'<div class=spa-chat-msgs"></div>'
                +'<div class=spa-chat-box">'
                    +'<input type="text"/>'
                    +'<div>send</div>'
                +'</div>'
            +'</div>'    
        +'</div>',
        settable_map:{
            slider_open_time :true,
            slider_close_time :true,
            slider_opened_em :true,
            slider_closed_em :true,
            slider_opened_title :true,
            slider_closed_title :true,
            
            chat_model:true,
            people_model:true,
            set_chat_anchor:true
            
        },
        slider_open_time :250,
        slider_close_time :250,
        slider_opened_em :16,
        slider_closed_em :2,
        slider_opened_title :'click to close',
        slider_closed_title :'click to open',
        
        chat_model:null,
        people_model:null,
        set_chat_anchor:null
    },   
    stateMap = {
            $container : null
        },
        jqueryMap = {},
        setJqueryMap,configModule, initModule;
//----------------------END MODULE SCOPE VARIABLES ------------------
//----------------------BEGIN UTILITY METHODS -----------------------
//----------------------END UTILITY METHODS -------------------------
//----------------------BEGIN DOM METHODS ---------------------------
//Begin DOM method /setJqueryMap/
setJqueryMap = function(){
    var $container = stateMap.$container;
    jqueryMap = {
        $container:$container,
    };
};
//END DOM method /setJqueryMap/
//----------------------END DOM METHODS ---------------------------

//----------------------BEGIN EVENT HANDLERS ---------------------------
//----------------------END EVENT HANDLERS ---------------------------

//----------------------BEGIN PUBLIC METHODS ---------------------------
//BEGIN DOM method /configModule/
configModule = function(){
  spa.util.setConfigMap({
      input_map : input_map,
      settable_map : configMap.settable_map,
      config_map : config_map
  });  
  return true;
};
//Begin Public method /initModule
initModule = function($container){
    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    setJqueryMap();
    //initialize chat slider and bind click handler
    return{
        configModule:configModule,
        initModule: initModule
    };
};
//----------------------END PUBLIC METHODS ---------------------------
});