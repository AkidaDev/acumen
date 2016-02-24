/**
 * Contact.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: "localMongodb",
  attributes: {
  //  uid: {type:"string" , required: true},
    type:{ type:"string" , required: true},
    acumenuid:{type:"string"},
    phoneno:{type:"string"},
    email:{type:"string"},
    fname:{type:"string"},
    lname:{type:"string"},
    address:{type:"string"},
    state:{type:"string"},
    city:{type:"string"},
    country:{type:"string"},
    pincode:{type:"string"},
    company:{type:"string"},
    aimage:{type:"string"},
    detail:{type:"string"},
  },
  beforeCreate: function (contact,cb) {
    if(contact.type !== "acumen")
    {
    //  if(typeof contact.phoneno === 'undefined' || typeof contact.name === 'undefined' || typeof contact.adress === 'undefined' || typeof contact.state === 'undefined' || typeof contact.city === 'undefined' || typeof contact.country === 'undefined' || typeof contact.pincode === 'undefined' )
    //    return cb('Please Check all value')
    }else{
    //  if(typeof contact.acumen === 'undefined')
    //  return cb(new Error('not a valid user id'));
    }
    cb(null,contact);
  },
};
