const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
    eventName: String,
    eventDescription: String,
    firebasePath: String,
    eventDate: Date,
});

module.exports = model('event', EventSchema);
