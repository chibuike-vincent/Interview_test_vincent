const mongoose = require("mongoose")

exports.connectTestDb = async() => {
   await mongoose.connect(process.env.Test_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log('Database Connection is ready...')
    })
    .catch((err)=> {
        console.log(err);
    })
}