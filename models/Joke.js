const mongoose = require("mongoose");
//schema defining
const jokeschema=new mongoose.Schema({
    name:{
        type:String,

    },
    genere:{
        type:String,
    },
    joke:{
        type:String,
    },
    explanation:{
        type:String,
    }


})
//exporting modules of schema
module.exports =mongoose.model("Joke",jokeschema)