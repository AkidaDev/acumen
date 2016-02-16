/**
 * Contact.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    udi: {type:"string" , required: true},
    type:{ type:"string" , requied: true},
    acumenuid:{type:"string"},
    phoneno:{type:"string"},
    name:{type:"string"},
    adress:{type:"string"},
    state:{type:"string"},
    city:{type:"string"},
    country:{type:"string"},
    pincode:{type:"string"},
    company:{type:"string"},
  },
  beforeCreate: function (contact,cb) {
    if(contact.type !== "acumen")
    {
      if(typeof contact.phoneno === 'undefined' || typeof contact.name === 'undefined' || typeof contact.adress === 'undefined' || typeof contact.state === 'undefined' || typeof contact.city === 'undefined' || typeof contact.country === 'undefined' || typeof contact.pincode === 'undefined' )
        return cb(new Error('Please Check all values'))
    }else{
      if(typeof contact.acumen === 'undefined')
      return cb(new Error('Error: not a valid user id'));
    }
    cb(null,contact);
  },
};
