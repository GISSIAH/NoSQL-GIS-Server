const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const geoFtSchema = new Schema({
    type:{
        default:"Point",
        type:String
    },
    coordinate:{
        type:[Number],
        index:"2dsphere"
    }
});

const FtSchema = new Schema({
    Layername:{
        type:String,
        required:[true,'Name Field is Required']
    }, 
    name:{
        type:String,
        required:[true,'name of point is needed']
    },
    geometry:geoFtSchema

});



const ft =mongoose.model('Features',FtSchema);


module.exports = ft;