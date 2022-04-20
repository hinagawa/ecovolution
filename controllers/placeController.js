const Place = require('../models/Place.js');

const firebaseService = require('../services/firebase');

exports.createPlace = async (req, res) => {
    try {
        const { placeName, placeDescription, placeLocation, placeImgPath, placeTags } = req.body;
        const firebasePath = await firebaseService.uploadFile(placeImgPath);
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
        Place.find({}, function (err, places) {
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
}

// TODO check if place with this id exist -> 404

exports.getPlaceById = async (req, res) => {
    try {
        const { placeId } = req.query.placeId;
        const place = await Place.findById(placeId);
        res.json({ success: true, message: place });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.deletePlaceById = async (req, res) => {
    try {
        const { placeId } = req.query.placeId;
        await Place.deleteOne({ '_id': placeId });
        res.json({ success: true, message: 'Place has been deleted' });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

