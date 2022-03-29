const { Schema, model } = require('mongoose');

const PlaceSchema = new Schema({
    placeName: String,
    placeLocation: String,
    placeImg: Buffer,
});

module.exports = model('place', PlaceSchema);
