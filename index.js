const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config=require('./config/database');
const path=require('path');

const useMongoClient= true;
//mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err) => {
    if(err){
        console.log('could NOT connet to database :',err);
    } else {
//console.log('connected to database...'+config.db);
        console.log('connected to database...');
    }

});
//integaration angular front end here using dist folder of angular app(client)

app.use(express.static(__dirname + '/client/dist/'));
app.get('/',(req,res) => {
    //res.send("Welcome GatedPlus ");
    //redirect to angular index.html page from node
res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

//http://localhost:8080/
app.listen(8080,() => {
    console.log('application is running on port 8080');
});