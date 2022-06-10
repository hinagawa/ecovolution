const { Schema, model } = require('mongoose');

const PlaceSchema = new Schema({
    placeName: String,
    placeDescription: String,
    placeLocation: Array,
    firebasePath: String,
    placeTags: Array,
    events: [{ type: Schema.Types.ObjectId, ref: 'event' }],
});

module.exports = model('place', PlaceSchema);
