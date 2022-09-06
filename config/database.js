const mongoose = require('mongoose');

const databaseConnect = () => {
     mongoose.connect("mongodb+srv://jai_chawla:udemy123456@cluster0.ruuqx1b.mongodb.net/messenger?retryWrites=true&w=majority",{
          useNewUrlParser : true,
          useUnifiedTopology : true
     }).then(()=>{
          console.log('Mongodb Database Connected')
     }).catch(error=>{
          console.log(error)
     })
}
module.exports = databaseConnect;

//process.env.DATABASE_URL
// "mongodb+srv://jai_chawla:udemy123456@cluster0.ruuqx1b.mongodb.net/messenger?retryWrites=true&w=majority"