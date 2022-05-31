
const express = require('express')
const app = express()
const port = 3000

//enable CORS
const cors = require('cors')
app.use(cors())

//Http Request Logger
const morgan = require('morgan')
app.use(morgan('combined'))


//Connect to DB
const db = require('./config/db');
db.connect();

//Parsing data received from client
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
///path//
const path= require('path')
app.use(express.static(path.join(__dirname, '/images')));


//Import Products
const allProduct = require('./routers/allProduct.router')
app.use('/', allProduct);

//

//Import user


app.use(express.json());

app.listen(port, ()=>{
    console.log(`${port}`)
})


   
    