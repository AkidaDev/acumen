/**
 * Config.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: "localMongodb",
  attributes: {
    "meta_name" : { type: "string", required:true, unique: true},
    "meta_desc" : {type: "string", required:true}
  }
};
