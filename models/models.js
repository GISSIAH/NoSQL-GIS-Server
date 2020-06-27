const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const geoPointSchema = new Schema({
    type:{
        default:"Point",
        type:String
    },
    coordinates:{
        type:[Number],
        index:true
    } 
});

const PointSchema = new Schema({
    Layername:{
        type:String,
        required:[true,'Name Field is Required']
    }, 
    name:{
        type:String,
        required:[true,'name of point is needed']
    },
    geometry:geoPointSchema

});



const geoLineSchema = new Schema({
    type:{
        default:'LineString',
        type:String
    },
    coordinates:{
        type:Array,
    index:true
    }
});

const LineSchema = new Schema({
    Layername:{
        type:String,
        required:[true,'Name Field is Required']
    }, 
    name:{
        type:String,
        required:[true,'name of point is needed']
    },
    geometry:geoLineSchema

});

const geoPolygonSchema = new Schema({
    type:{
        default:'LineString',
        type:String
    },
    coordinates:{type:Array,
        index:true}
});

const PolygonSchema = new Schema({
    Layername:{
        type:String,
        required:[true,'Name Field is Required']
    }, 
    name:{
        type:String,
        required:[true,'name of point is needed']
    },
    geometry:geoPolygonSchema

});


const pt =mongoose.model('Points',PointSchema);
const ln =mongoose.model('Lines',LineSchema);
const ply =mongoose.model('Polygons',PolygonSchema);




module.exports = {pt,ln,ply};