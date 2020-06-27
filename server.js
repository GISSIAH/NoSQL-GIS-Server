const express = require('express');
const api = require('./routes/api.js');
const ln = require('./routes/lines.js');
const  ply = require('./routes/polygons.js');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express();

mongoose.connect('mongodb://localhost:27017/Geo',{useNewUrlParser:true,useUnifiedTopology: true ,useFindAndModify:false});
mongoose.Promise = global.Promise;


app.use(bodyParser.json());
app.use('/pnt',api);
app.use('/ln',ln);
app.use('/ply',ply); 
app.use(function(err,req,res,next){
    
    res.status(422).send({error:err.message});
})


app.listen(process.env.port||4000,()=>{
    console.log('listening to port 4000');

});

