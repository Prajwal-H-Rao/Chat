const  express = require('express')
const app = express();
const port = 5000

app.get('/',(req,res)=>{
    res.send('Api  is working')
})

app.get('/api/chat',(rqe,res)=>{
    
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})