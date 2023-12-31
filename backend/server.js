const express = require('express');
const app = express();
const mongoose = require('mongoose');


const username = '';
const password = '';
const clusterUrl = '';
const databaseName = '';

const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(
  password
)}@${clusterUrl}/${databaseName}?retryWrites=true&w=majority`;


const UserSchema = require('./models/user.model');

const router = require('./routes/user.routes');

app.use(express.json());

app.use((req,res,next)=>{
    console.log("HTTP method = "  + req.method +" , URL = " + req.url);
    next();
});   

app.use('/',router);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log("Mongodb is not connected", err);
  });



const port = 5000;
app.listen(port,()=>{
    console.log("Server is running on port 5000");
});