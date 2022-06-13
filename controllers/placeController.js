const Place = require('../models/Place.js');
const Event = require('../models/Event.js');

const firebaseService = require('../services/firebase');

exports.createPlace = async (req, res) => {
    try {
        const { placeName, placeDescription, placeLocation, firebasePath, placeTags } = req.body;
        const place = new Place({ placeName, placeDescription, placeLocation, firebasePath, placeTags });
        await place.save();
        res.status(200).json({ success: true, message: 'Place has been created' });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.getPlaces = async (req, res) => {
    try {
        const places = await Place.find({}).populate('events');
        var placeMap = {};
        places.forEach(function (place) {
            placeMap[place._id] = place;
        });
        return res.status(200).json(placeMap);
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.getCoordinates = async (req, res) => {
    try {
        Place.find({}, { placeName: 1, placeLocation: 1 }, function (err, places) {
            var placeMap = {};
            places.forEach(function (place) {
                placeMap[place._id] = place;
            });
            return res.status(200).json(placeMap);
        });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};
// TODO check if place with this id exist -> 404

exports.getPlaceById = async (req, res) => {
    try {
        const placeId = req.query.placeId;
        const place = await Place.findById(placeId).populate('events');
        res.json({ success: true, message: place });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.deletePlaceById = async (req, res) => {
    try {
        const placeId = req.query.placeId;
        await Place.deleteOne({ '_id': placeId });
        res.json({ success: true, message: 'Place has been deleted' });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.addEvent = async (req, res) => {
    try {
        const { eventName, eventDescription, imgPath, eventDate, placeId } = req.body;
        let firebasePath = '';
        if (imgPath) {
            firebasePath = await firebaseService.uploadFile(imgPath);
        }
        const event = new Event({ eventName, eventDescription, firebasePath, eventDate });
        await event.save();
        res.status(200).json({ success: true, message: 'Event has been created' });
        const place = await Place.findById(placeId);
        if (!place) {
            throw new Error('no place');
        }
        place.events = [...place.events, event._id];
        await place.save();
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.getEventByArticleId = async (req, res) => {
    try {
        const { placeId } = req.body;
        const place = await Place.findById(placeId).populate('events');
        return res.status(200).json({ success: true, message: place.events });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};