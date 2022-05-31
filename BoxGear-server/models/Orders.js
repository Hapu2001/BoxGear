const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    date: { type: String, require:true },
    customerName: { type: String},
    due: {type:String},
    amount: {type: Number},
    status: {type: String},
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
  
});

module.exports = mongoose.model("Order", OrdersSchema);