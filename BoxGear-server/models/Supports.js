const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const SupportSchema = new Schema({
    customers: { type: String },
    staff: { type: String},
    service :{type:String},
    consultingContent: { type: String},
    level:{type:String},
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  
});
module.exports = mongoose.model("support",  SupportSchema);