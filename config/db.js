const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); //Using config package to get the value of mongoURI stored in default.json file in config folder.

const connectDB = async ()=>{
    try{
         await mongoose.connect(db,{
             useNewUrlParser: true
         });

         console.log("MongoDB connected...");
    }
    catch(err){
        console.error(err.message);
        // exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;