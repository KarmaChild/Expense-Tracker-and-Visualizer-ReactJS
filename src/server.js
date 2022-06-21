const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser');



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



const Schema = mongoose.Schema

const ExpenseSchema = new Schema({
    id:{
        type: String,
        required:true
    } ,
    title:{
        type: String
    },
    amount:{
        type:String
    },
    date:{
        type:String
    },
},{timestamps:true})

const ExpenseModel = mongoose.model("expense",ExpenseSchema)

app.get('/post',(req,res) =>{
    const expense = new ExpenseModel({
        id: 'e2',
        title: 'New TV',
    })
    expense.save().then((result) => {
        res.send(result)
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})

app.get("/data", (req,res) => {
    ExpenseModel.find().then((result)=>{
        res.send(result)
        console.log(result)
    }).catch((error)=>{
        console.log("❌ Error:",error)
    })
})


app.listen(8000, () =>{
    console.log('🚀 server running')
})