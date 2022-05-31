const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RevenueSchema = new Schema({
    typeOfTicket: { type: String, require:true },
    reason: { type: String},
    dateOfRecord: {type:String},
    receiver: {type:String},
    value:{type:Number},
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model("Revenue", RevenueSchema);