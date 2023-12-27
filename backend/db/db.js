const { data } = require('autoprefixer')
const mongoose = require('mongoose')


const connectionString = "mongodb+srv://tanay:tanay@firstcluster.tf9mr3i.mongodb.net/ecommerce_angular?retryWrites=true&w=majority"
const database = mongoose.connection.db
const dbConnection = async ()=> await mongoose.connect(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true }).then(async ()=>{
    console.log("Succesfully Connected to database:")
//    const  cursorData = await mongoose.connection.db.collection("seller")
// //    console.log(cursorData)
//    const data = await cursorData.find({}).toArray()
//    console.log(data)
})

module.exports = {dbConnection}