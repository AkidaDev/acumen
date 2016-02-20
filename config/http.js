/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.http.html
 */
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
module.exports.http = {

  /****************************************************************************
   *                                                                           *
   * Express middleware to use for every Sails request. To add custom          *
   * middleware to the mix, add a function to the middleware config object and *
   * add its key to the "order" array. The $custom key is reserved for         *
   * backwards-compatibility with Sails v0.9.x apps that use the               *
   * `customMiddleware` config option.                                         *
   *                                                                           *
   ****************************************************************************/

  middleware: {

    /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP request. (the Sails *
     * router is invoked by the "router" middleware below.)                     *
     *                                                                          *
     ***************************************************************************/

    order: [
      'startRequestTimer',
      'cookieParser',
      'session',
      'myRequestLogger',
      'bodyParser',
      'loadAcumen',
      'handleBodyParserError',
      'compress',
      'methodOverride',
      'poweredBy',
      '$custom',
      'router',
      'www',
      'favicon',
      '404',
      '500'
    ],

    loadAcumen: function(req, res, next) {
      var p1 = new Promise(function(resolve, reject) {
        Config.find().exec(function(err, configs) {
          resolve({
            error: err,
            configs: configs
          });
        });
      });
      Promise.all([p1]).then(function(values) {
        var configs = "{";
        for(var val of values[0].configs )
        {
          if(configs.length !==1)
          configs += ","
          configs += '"'+val.meta_name+'":"'+val.meta_desc+'"';
        }
        configs += '}';
       sails.acumen = JSON.parse(configs);
        next();
      }).catch(function(reasons) {
        console.log(Date.getTime() + ":logging acument load errors");
        console.log(reasons);
        console.log(Date.getTime() + ": acument load error ends");
      });
    }
    // bodyParser: require('skipper')
  },
  customMiddleware: function(app) {
      app.locals.pretty = true; //TODO: remove in production
    }
    /***************************************************************************
     *                                                                          *
     * The number of seconds to cache flat files on disk being served by        *
     * Express static middleware (by default, these files are in `.tmp/public`) *
     *                                                                          *
     * The HTTP static cache is only active in a 'production' environment,      *
     * since that's the only time Express will cache flat-files.                *
     *                                                                          *
     ***************************************************************************/
  //cache: 31557600000
};
