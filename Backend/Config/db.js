const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true
        })
        console.log(`MongoDB connected: ${con.connection.host}`)
    }
    catch(err){
        console.log(err.message)
        process.exit();
    }
}

module.exports=connectDB;