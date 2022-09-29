const express=require('express')   
const mongoose=require('mongoose')
const app=express()
app.listen(9000,()=>{
    console.log("server started")
})

app.use(express.json())
const bookRouter=require('./routes/books')
app.use('/books',bookRouter)

const url='mongodb://localhost/booksDB'
mongoose.connect(url)
const con=mongoose.connection
con.on('open',()=>{
    console.log("database connected")
})