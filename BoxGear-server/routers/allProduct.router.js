const express = require('express');
const router =express.Router();
const multer = require('multer');



const Product = require('../models/Products');
router.get("/", function (req, res) {
    res.send("products");
  });


  var storage = multer.diskStorage({
    destination: "images", 
    filename: (req, file,cb) => {
        cb(null, `${Date.now()}--${file.originalname}`)
    }
})

let maxSize = 10 * 1024 * 1024 //10MB
var upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize
    }   
}).single("file")


///User//////////////////

const User = require('../models/Users')
  
router.get('/users',(reg,res)=>{
    // res.send("Product list")
         User.find({})
    .then(data => {res.json(data)})
    .catch(err => {err.json({"Error": err.messages})})
})
router.get("/user/:id", async(req, res)=>{
    try {
        let user = await User.findById(req.params.id);
        res.json(user);
    } catch (err){
        res.json ({message:err.message})
    }
})

router.post("/login", async function(req, res){
    var email = req.body.email;
    var password= req.body.password;
    User.findOne({email: email, password: password}, function(err,user){
        if(err){
            console.log(err);
          return  res.status(500).send();
        }
        if(!user){
           return  res.status(404).send();
        }
        return res.json({status:'success'});
    })
})









/////Products
  router.get('/products',(req,res)=>{
    // res.send("Product list")
         Product.find({})
    .then(data => {res.json(data)})
    .catch(err => {err.json({"Error": err.messages})})
})
router.get("/product/:id", async(req, res)=>{
    try {
        let product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err){
        res.json ({message:err.message})
    }
})
//insert product
router.post("/uploads", (req, res)=> {
    upload(req, res, async (err) =>{
        if(err){
            req.json({message: err.message})
        }else{
    //   console.log("Data form client: ", res.body);
    //   res.send("Server recive data:");
      let product = new Product({
        ten: req.body.ten,
        tien: req.body.tien,
        hinh: req.file.filename,
        soLuong: req.body.soLuong,
        thongSo:{
            thongSo1:req.body.thongSo1,
            thongSo2: req.body.thongSo2,
            thongSo3:req.body.thongSo3
        }
      });
      await product.save();
      
      res.json({message: "Success!"})
      }
      
    })
})

    //update product
    router.patch("/:id", async(req, res)=>{
        try {
            await Product.updateOne({_id: req.params.id},{
                $set:{ten: req.body.ten,
                    tien: req.body.tien,
                    hinh: req.body.hinh,
                    soLuong: req.body.soLuong,thongSo:{
                        thongSo1:req.body.thongSo1,
                        thongSo2: req.body.thongSo2,
                        thongSo3:req.body.thongSo3
                    }
                }
            })
            res.json({status:'success'});
        }
        catch (err){
            res.json({message: err.message});
        }
    })



    // delete product
router.delete("/:id", async (req, res) => {
    try{
        await Product.deleteOne({_id: req.params.id}
        );
        res.json({  message: "success"})
    }catch (err) {
        console.log(err.message);
        res.json({message: err.message});
    }
    })

 router.get("/search/:key", async(req, res)=>{
     console.log(req.params.key)
     let data = await Product.find(
         {
             "$or":[
                 {"ten":{$regex:req.params.key}}
                ]
         }
     )
     res.json(data)
 })  



///Supports//////////////////
const Support = require('../models/Supports')
  
router.get('/support',(req,res)=>{
    // res.send("Product list")
         Support.find({})
    .then(data => {res.json(data)})
    .catch(err => {err.json({"Error": err.messages})})
})
router.get("/support/:id", async(req, res)=>{
    try {
        let Support = await Support.findById(req.params.id);
        res.json(Support);
    } catch (err){
        res.json ({message:err.message})
    }
})


////////////////////////Orders/////////////////
const Order = require('../models/Orders')
router.get('/orders', (req, res)=>{
    Order.find({})
    .then(data => {res.json(data)})
    .catch(err => {err.json({"Error": err.messages})})
})
router.get("/orders/:id", async(req, res)=>{
    try {
        let Order = await Order.findById(req.params.id);
        res.json(Order);
    } catch (err){
        res.json ({message:err.message})
    }
})
////////////////////////Revenues/////////////////
const Revenue = require('../models/Revenues')
router.get('/revenues',(req, res)=>{
        Revenue.find({})
        .then(data => {res.json(data)})
        .catch(err => {err.json({"Error": err.messages})})
})
router.get("/revenues/:id", async(req, res)=>{
    try {
        let Revenue = await Revenue.findById(req.params.id);
        res.json(Revenue);
    } catch (err){
        res.json ({message:err.message})
    }
})




module.exports = router