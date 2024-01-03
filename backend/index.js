const express = require('express')
const { dbConnection } = require('./db')
const sellerRoute = require('./routes/sellerRoutes')
const app = express()
const port = 8000
const cors = require('cors')
// app.use(cors({
//     origin: 'http://localhost:4200'
// }));
app.use(cors())

dbConnection() 
app.use(express.json())

app.use("/api/seller", sellerRoute)

app.use("/test",(req,res)=>{
    console.log("hi")
    res.send({message:"test passed"})
})

app.listen(port,()=>{
    console.log("listening on port:"+port)
    // console.log(process.env.SECRET_KEY)
})

 //connected to database