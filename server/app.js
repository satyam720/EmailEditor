const express = require("express");
const app = express();
require('dotenv').config();


const axios = require('axios');
let user = {};

axios.get(`https://${process.env.API_KEY}:${process.env.PASSWORD}@satyam720.myshopify.com/admin/api/2021-07/products.json`).
then(function(response){
    console.log(response);
    user = response;
})
.catch(function(error){
    console.log(error);
}).then(function(){
    
});

app.post('/post', (req,res) => {
    console.log("Connected to react");
    res.redirect('/api');
})

app.get('/api', (req,res) => {
    res.json({message: "hello from the server"});
    console.log("thisalfjkdsjflasdjkfla;sdjkflas;dfkjlsdkjflsakjdflsakjdflsadkjflskdjflksdjflksadjflkjfd",user);
});

const Port = process.env.PORT || 8000;

app.listen(Port, console.log(`Server started on port ${Port}`));