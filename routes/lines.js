const api = require('express').Router();
const {ln} = require('../models/models.js');

api.get('/all',(req,res,next)=>{
    console.log('This is ALL');
    ln.find({}).then((fts)=>{
        
        res.send(fts);
    })
});

api.get('/all/:layer',(req,res,next)=>{
    ln.find({Layername:req.params.layer}).then((fts)=>{
        res.send(fts);
    });
});

api.get('/all/:name',(req,res,next)=>{
    ln.find({name:req.params.name}).then((pt)=>{
        res.send(pt);
    });
});

module.exports = api;