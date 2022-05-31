const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    ten: { type: String, require:true },
    tien: { type: Number},
    hinh: {type:String},
    soLuong: {type: Number},
    thongSo:{
        thongSo1:{type:String},
        thongSo2:{type:String},
        thongSo3:{type:String}
    },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model("Product", ProductSchema);

