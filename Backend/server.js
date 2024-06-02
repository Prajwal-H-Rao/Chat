const  express = require('express')
const app = express();
const dotenv =  require('dotenv')
const userRoutes = require('./Routes/userRoutes')
const connectDB = require('./Config/db')
connectDB();

dotenv.config();
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('Api  is working')
})

app.use('/api/user',userRoutes)

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})