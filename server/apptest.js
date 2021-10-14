require('dotenv/config');
const express = require ("express")
const app = express();
const mongoose = require("mongoose")
const UserRoutes = require("./routes/user")
//MIDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

//Database Connection
mongoose.connect(process.env.Test_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})

app.use("/user", UserRoutes)




module.exports = app

