require('dotenv').config()
const  express = require('express')
const userRoutes = require('./Routes/userRoutes')
const connectDB = require('./Config/db')
connectDB();
const app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Api  is working')
})

app.use('/api/user',userRoutes)

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})