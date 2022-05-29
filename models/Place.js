const { Schema, model } = require('mongoose');

const PlaceSchema = new Schema({
    placeName: String,
    placeDescription: String,
    placeLocation: Array,
    firebasePath: String,
    placeTags: Array
});

module.exports = model('place', PlaceSchema);
