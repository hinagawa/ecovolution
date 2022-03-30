const { Schema, model } = require('mongoose');

const PlaceSchema = new Schema({
    placeName: String,
    placeDescription: String,
    placeLocation: String,
    placeImg: Buffer,
    placeTags: Array
});

module.exports = model('place', PlaceSchema);
