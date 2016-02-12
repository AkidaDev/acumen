/**
*RouteMappings
*(sails.config.routes)
*
*YourroutesmapURLstoviewsandcontrollers.
*
*IfSailsreceivesaURLthatdoesn'tmatchanyoftheroutesbelow,
*itwillcheckformatchingfiles(images,scripts,stylesheets,etc.)
*inyourassetsdirectory.e.g.`http://localhost:1337/images/foo.jpg`
*mightmatchanimagefile:`/assets/images/foo.jpg`
*
*Finally,ifthosedon'tmatcheither,thedefault404handleristriggered.
*See`api/responses/notFound.js`toadjustyourapp's404logic.
*
*Note:Sailsdoesn'tACTUALLYservestufffrom`assets`--thedefaultGruntfileinSailscopies
*flatfilesfrom`assets`to`.tmp/public`.ThisallowsyoutodothingslikecompileLESSor
*CoffeeScriptforthefront-end.
*
*Formoreinformationonconfiguringcustomroutes,checkout:
*http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
*/

module.exports.routes={

/***************************************************************************
**
*Maketheviewlocatedat`views/homepage.ejs`(or`views/homepage.jade`,*
*etc.dependingonyourdefaultviewengine)yourhomepage.*
**
*(Alternatively,removethisandaddan`index.html`fileinyour*
*`assets`directory)*
**
***************************************************************************/

  '/':{view:'dashboard'},
  '/calendar':{view:'calendar'},
  '/logout':{view:'site/logout'},
  '/register':{view:'site/register'},
  '/login':'PanelController.login',
  '/logout':'PanelController.logout',
  '/view-project':{view:'project/details'},


  '/mailbox':{view:'mailbox/inbox'},
  '/mailbox/compose':{view:'mailbox/compose'},
  '/mailbox/read':{view:'mailbox/read'},

  '/administrator/realtime':{view:'administrator/realtime'},
  '/administrator/notifications':{view:'administrator/notifications'},
  '/administrator/resource':{view:'administrator/resource'},
  '/administrator/swot':{view:'administrator/swot'},
  '/administrator/timeline':{view:'administrator/timeline'},
  '/administrator/skillset':{view:'administrator/skillset'},
  'get /chat/subscribe/:roomid': "ChatController.subscribe",
  '/manage/users': "UserController.index",
  '/manage/users/details':"UserController.detail",
  '/manage/users/add':{view:'manage/employee/add'},
  '/manage/contacts':{view:'manage/contacts'},
  '/manage/clients':{view:'manage/clients'},
  '/manage/campaign':{view:'manage/campaign'},
  '/manage/inventory':{view:'manage/inventory'}
  //'/':{view},
//'/':{view},

/***************************************************************************
**
*Customrouteshere...*
**
*If are quest to a URL doesn't match any of the custom routes above, it*
*is matched against Sails route blueprints.See`config/blueprints.js`*
*forconfigurationoptionsand examples.*
**
***************************************************************************/

};
