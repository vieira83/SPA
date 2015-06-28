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

/* global $, spa */

spa.chat = (function(){
//----------------------BEGIN MODULE SCOPE VARIABLES ------------------
var 
    configMap = {
        main_html:String()
        +'<div>'
        +'</div>',
        settable_map:{}
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