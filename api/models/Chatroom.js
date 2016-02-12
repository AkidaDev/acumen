/**
* Chatroom.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
module.exports = {
  connection: "localMongodb",
  attributes: {
    name:{type:"string", required:true,unique:true},
    createdBy: {type:"text"},
    private:{ type:"boolean",required:true},
    users:{required:true},
    hasUser: function (id) {
      if(this.users.indexOf(id) !== -1)
      {
        return true;
      }else{
        return false;
      }
    }
  }
};
