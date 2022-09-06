const express=require('express');
const app=express();
const dotenv = require('dotenv')
var cors = require('cors');

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

app.use(cors({
  origin : [ 'https://chat-application6912.netlify.app' , 'https://chat-app-it-b-c.herokuapp.com/' ],
  methods:["GET" , "POST" , "PUT", "DELETE"],
  credentials: true
}));

const PORT= process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.send('this is from backend server');
  
})


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

