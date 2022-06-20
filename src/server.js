const express = require('express')
const mongoose = require('mongoose')



const url = "mongodb+srv://mongo:fStqR3fnpNrABU_@cluster0.ya30d.mongodb.net/?retryWrites=true&w=majority"
const app = express()


const connection = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url,connection).then(()=>{
    console.info("💯 Connected to DB")
}).catch((error)=>{
    console.log("❌ Error:",error)
})

app.get('/hello',(req,res) =>{
    res.send('hello world')
})


app.listen(8000, () =>{
    console.log('🚀 server running')
})