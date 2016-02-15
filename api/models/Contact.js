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
    address:{type:"string"},
    state:{type:"string"},
    city:{type:"string"},
    country:{type:"string"},
    pincode:{type:"string"},
  },
  beforeCreate: function (contact,cb) {
    if(contact.type !== "acumen")
    {
      if(typeof contact.phoneno === 'undefine' || typeof contact.name === 'undefine' || typeof contact.address === 'undefine' || typeof contact.state === 'undefine' || typeof contact.city === 'undefine' || typeof contact.country === 'undefine' || typeof contact.pincode === 'undefine' )
        return cb(new Error('Please Check all values'))
    }else{
      if(typeof contact.acumen === 'undefine')
      return cb(new Error('Error: not a valid user id'));
    }
    cb(null,contact);
  },
};
