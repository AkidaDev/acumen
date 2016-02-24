/**
 * ContactController
 *@help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  index: function(req, res) {
    let getcontact = new Promise(function(resolve, reject) {
      Contact.find({
        uid: req.user.id,
        type: 'xc'
      }).exec(function(err, contacts) {
        return resolve(contacts);
      });
    });
    let getccontact = new Promise(function(resolve, reject) {
      Contact.find({
        uid: req.user.id,
        type: 'acumen'
      }).exec(function(err, contacts) {
        return resolve(contacts);
      })
    });
    Promise.all([getcontact, getccontact]).then(function(values) {
      let contacts = values[0];
      console.log(contacts);
      let uids = [];
      for(let u of values[1]) {
        uids.push(u.cid);
      }
      new Promise(function(resolve, reject) {
      User.find({id:uids}).exec(function (err,users) {
        return resolve(users);
      });
      }).then(function (values) {
        var users = [];
        for( let user of values)
        {
          let u = {};
           u.aimg = user.avatarFd;
           u.joined = user.createdAt;
           u.fname = user.fname;
           u.lname = user.lname;
           u.phoneno = user.phoneno;
           u.email = user.email;
           users.push(u);
        }
        return res.render('manage/contacts', {
          contacts: contacts,
          colleagues: users
        });
      });
    }).catch(function(reasons) {
      console.error('inside reasons');
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
          let path = require("path");
          let url = require("url");
          let parsed = url.parse(uploadedFiles[0].fd);
          return resolve('/images/' + req.user.id + '/contact' + '/' + path.basename(parsed.pathname));
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
  addcolleague: function(req, res) {
    if (!req.body)
      return res.send(403);
    let qs = require('qs');
    let contact = qs.parse(req.body)
    contact = contact.Contact;
    if (typeof contact === 'undefined')
      return reject('contact body not found');
    var findcon = new Promise(function(resolve, reject) {
      Contact.find({
        uid: req.user.id,
        type: "acumen",
        cid: contact.id
      }).exec(function(err, contact) {
        if (err)
          return reject(false);
        if (typeof contact === undefined || contact === [])
          return reject(false)
        return resolve(true)
      });
    }).then(function(values) {
      let getuser = new Promise(function(resolve, reject) {
        User.find({
          id: contact.uid
        }).exec(function(err, user) {
          if (err)
            return reject(err)
          if (typeof user === undefined || user === [])
            return reject('403');
          console.log('user found');
          return resolve(user);
        });
      });
      Promise.all([getuser]).then(function(values) {
        let contact = {};
        console.log("i'm here");
        let cuser = values[0][0]
        console.log(cuser.id);
        contact.type = "acumen";
        contact.cid = cuser.id;
        contact.uid = req.user.id;
        console.log(contact);
        Contact.create(contact).exec(function(err, contact) {
          if (err || typeof contact === undefined || contact === []) {
            console.log(err);
            return res.send("Unable to create contact");
          }
        });
      }).catch(function(reasons) {
        console.log(reason);
        return res.send(reason);
      });
    }).catch(function(reason) {
      console.log(reason);
      return res.send(403, "Contact already exits");
    });

  }
};
