/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: "localMongodb",
  attributes:{
    fname:{type: "string", required: true},
    lname:{type: "string", required: true},
    username:{ type: 'string', required: true, unique: true },
    //pimg:{type:'string', required: true,unique: true},
    password:{ type: 'string', required: true },
    email:{ type: 'email', required:true },
    country:{type:'string', required:false},
    state:{type:'string', required:false},
    city:{type:'string', required:false},
    phoneno:{type:'string', required:true},
  //  skill:{type:'string', required:true},
    dob:{type:'date',required:true},
    //skills:{type:'string',require:true},
    experience:{type:'string',require:true},
    role:{type:'string', required:true},
    getRole: function (cb){
      return cb('admin'); //TODO: get real roles in future
    },
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    },
  },
  beforeCreate: function (user, cb) {
    var bcrypt = require('bcrypt');
    bcrypt.genSalt(10,function (err,salt) {
      bcrypt.hash(user.password,salt, function (err,hash) {
         if(err){
           console.log(err);
           cb(err)
         }else{
           user.password = hash;
           cb(null,user);
         }
      });
    });
  }
};
