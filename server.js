const express=require('express');
const app=express();
const dotenv = require('dotenv')

const databaseConnect = require('./config/database')
const authRouter=require('./routes/authRoute');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const messengerRoute = require('./routes/messengerRoute');
const users =require("./models/authModel");

dotenv.config({
     path : 'backend/config/config.env'
})

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/messenger',authRouter);
app.use('/api/messenger',messengerRoute);

const PORT= process.env.PORT || 5000;

// app.get('/',(req,res)=>{
//   res.send('this is from backend server');
  
// })

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/read',(req,res)=>{

users.find({},(err,result)=>{
  if(err){
    res.send(err)
  }else{
    res.send(result)
  }
})
// res.send("working");
 
})

databaseConnect();

app.listen(PORT,()=>{
  console.log(`server is running at port ${PORT}`);
})

