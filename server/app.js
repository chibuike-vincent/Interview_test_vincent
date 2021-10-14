require('dotenv/config');
const express = require ("express")
const app = express();
const mongoose = require("mongoose")


//MIDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

//Database Connection
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})






module.exports = app

