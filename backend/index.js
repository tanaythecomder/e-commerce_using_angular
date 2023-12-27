const express = require('express')
const { dbConnection } = require('./db/db')
const app = express()
const port = 8000
app.listen(port,()=>{
    console.log("listening on port:"+port)
})

dbConnection()  //connected to database