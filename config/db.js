const mongoose = require("mongoose")


const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("DB connected")

    }catch(err){
        console.log(err)

    }
}
module.exports = connectDB;     //only functions can be export not only varaibles


    