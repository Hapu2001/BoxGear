const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String},
    resgiterDate :{type:String},
    email: { type: String},
    phone:{type:Number},
    password: { type: String},
    country: {type:String},
    totalOrder : {type:String},
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  
});
module.exports = mongoose.model("User", UserSchema);