const  express = require('express')
const app = express();
const dotenv =  require('dotenv')
dotenv.config();
const {chats} = require('./Data/Data')


app.get('/',(req,res)=>{
    res.send('Api  is working')
})

app.get('/api/chat',(req,res)=>{
    res.send(chats)
})

app.get('/api/chat/:id',(req,res)=>{
    const id = req.params.id;
    const singleChat = chats.find(c=>c._id===id)
    res.send(singleChat)
})

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})