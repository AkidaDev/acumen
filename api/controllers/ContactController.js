/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    let getcontact = new Promise(function(resolve, reject) {
      Contact.find({
        uid: req.user.id
      }).exec(function(err, contacts) {
        resolve(contacts);
      })
    });
    Promise.all([getcontact]).then(function(values) {
      let contacts = values[0];
      return res.render('manage/contacts', {
        contacts: values[0]
      });
    }).catch(function(reasons) {
      res.send(reasons);
    })
  },
  add: function(req, res) {
    if (!req.body)
      return res.send(403);
    var loadimage = new Promise(function(resolve, reject) {
      req.file('Contact[pimage]').upload({
        filename: "test",
        dirname: '../../assets/images/' + req.user.id + '/contact',
      }, function(err, uploadedFiles) {
        if (err)
          console.log('error');
        console.log(uploadedFiles);
        if (uploadedFiles.length === 0) {
          return reject("Image could not be uploaded");
        } else {
          let url = require("url");
          let path = require("path");
          let parsed = url.parse(uploadedFiles[0].fd);
          return resolve('/images/' + req.user.id + '/contact' + '/'+path.basename(parsed.pathname));
        }
      });
    });
    var loaddata = new Promise(function(resolve, reject) {
      let qs = require('qs');
      let contact = qs.parse(req.body)
      if (typeof contact === 'undefined')
        return reject('contact body not found');
      return resolve(contact);
    });
    Promise.all([loadimage, loaddata]).then(function(values) {
      var contact = values[1].Contact;
      contact.aimg = values[0];
      contact.type = 'xc';
      contact.uid = req.user.id;
      Contact.create(contact).exec(function(err, contact) {
        console.log(err);
        if (err) {
          res.send(err)
        } else {
          console.log('here');
          console.log(contact);
          res.ok();
        }
      });
    }).catch(function(reasons) {
      console.error(reasons);
      return res.send(reasons);
      //	res.send(reasons);
    });
  },
};
