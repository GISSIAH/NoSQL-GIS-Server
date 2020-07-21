const express = require('express');

const cors = require('cors');
const api = require('./routes/api.js');
const ln = require('./routes/lines.js');
const  ply = require('./routes/polygons.js');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express();

//Initiates mongodb 
mongoose.connect('mongodb://localhost:27017/Geo',{useNewUrlParser:true,useUnifiedTopology: true ,useFindAndModify:false});
mongoose.Promise = global.Promise;

//whole lotta middle ware and controllers
app.use(cors());
app.use(bodyParser.json({limit:'500mb'}));
app.use('/pnt',api);
app.use('/ln',ln);
app.use('/ply',ply); 

app.use(function(err,req,res,next){
    
    res.status(422).send({error:err.message});
})


app.listen(process.env.port||4000,()=>{
    console.log('listening to port 4000');

});

