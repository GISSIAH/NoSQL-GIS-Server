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
api.get('/layers',(req,res,next)=>{
    ply.distinct('Layername').then((lys)=>{
        res.send(lys);
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
    var new_fts = [];
    req.body.features.forEach(element => {
        var ft = {"Layername":req.body.name,"type":"Feature","properties":element.properties,"geometry":element.geometry};
        new_fts.push(ft);
    });

    ply.insertMany(new_fts).then((fts)=>{
        res.send(fts);
    }).catch(next);
});

api.delete('/all/:layer',(req,res,next)=>{
    ply.deleteMany({Layername:req.params.layer}).then((err,ress)=>{
        res.send(`Layer ${req.params.layer} has been Deleted`);
    });
});



module.exports = api;
