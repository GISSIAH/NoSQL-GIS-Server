const api = require('express').Router();
const {ln} = require('../models/models.js');

api.get('/all',(req,res,next)=>{
    console.log('This is ALL');
    ln.find({}).then((fts)=>{
        var coll ={
            "type": "FeatureCollection",
                "name": "All Lines",
                    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                "features":fts
            }
            res.send(coll);
    })
});

api.get('/all/:layer',(req,res,next)=>{
    ln.find({Layername:req.params.layer}).then((fts)=>{
        var coll ={
            "type": "FeatureCollection",
                "name":req.params.layer ,
                    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                "features":fts
            }
            res.send(coll);
    });
});

api.get('/all/:name',(req,res,next)=>{
    ln.find({name:req.params.name}).then((pt)=>{
        var coll ={
            "type": "FeatureCollection",
                "name":req.params.name,
                    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                "features":fts
            }
            res.send(coll);
    });
});

api.post('/entry',(req,res,next)=>{
    ln .insertMany(req.body.features).then((fts)=>{
        res.send(fts);
    }).catch(next);
});





module.exports = api;