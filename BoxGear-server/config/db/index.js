const mongoose = require('mongoose');
require('dotenv/config');
async function connect(){
    try{
        await mongoose.connect(process.env.DB_URL,
        {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log('Connect succesful!');
    }
    catch (error){
        console.log('Connect fail');
    }
};
module.exports = {connect};