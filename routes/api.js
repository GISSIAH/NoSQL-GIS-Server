const api = require('express').Router();
const pt = require('../models/models.js');
  
api.get('/all',(req,res,next)=>{
    console.log('This is ALL');
    pt.find({}).then((fts)=>{
        
        res.send(fts);
    })
});

api.get('/all/:layer',(req,res,next)=>{
    pt.find({Layername:req.params.layer}).then((fts)=>{
        res.send(fts);
    });
});



module.exports= api;