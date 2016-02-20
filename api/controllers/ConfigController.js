/**
 * ConfigController
 *
 * @description :: Server-side logic for managing configs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    var config = [{
      meta_name: "avatar_height",
      meta_desc: "128"
    }, {
      meta_name: "avatar_width",
      meta_desc: "128"
    }];
    var p1 = new Promise(function(resolve, reject) {
      Config.create(config).exec(function(err, config) {
        if (err)
          console.log(err);
        resolve(config);
      });
    });
    p1.then(function(val) {
      console.log(val);
      return res.send("test");
    }).catch(
      function(reason) {
        console.log('Handle rejected promise (' + reason + ') here.');
      });
  },
};
