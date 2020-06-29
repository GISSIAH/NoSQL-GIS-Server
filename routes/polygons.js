const api = require('express').Router();
const {ply} = require('../models/models.js');

api.get('/all',(req,res,next)=>{
    console.log('This is ALL');
    ply.find({}).then((fts)=>{
        var coll ={
            "type": "FeatureCollection",
                "name": "All Polygons",
                    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                "features":fts
            }
            res.send(coll);
    })
});
api.get('/all/:layer',(req,res,next)=>{
    ply.find({Layername:req.params.layer}).then((fts)=>{
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
    ply.find({name:req.params.name}).then((pt)=>{
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
    ply.create(req.body).
        then(function(poly){
            res.send(poly);
    }).catch(next)
    
})

 



module.exports = api;
