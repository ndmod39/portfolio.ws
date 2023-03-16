const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const app = express()

dotenv.config({path:'./config.env'})
app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname+'/views/home.html'))
})
app.listen(process.env.PORT||3000);
