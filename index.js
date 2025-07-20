const express = require('express')
const path =require('path')

const app = express()

//middleware
app.use(express.json())

let Books=[
    {
        id:1,
        title:"book 1"
    },
    {
        id:2,
        title:"book 2k"
    }
]

app.get('/books',(req,res)=>{
    res.json(Books)
})


app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('book recieved recieved')
})
app.listen(8080,()=>{
    console.log("server is running on port8080")
})