const Place = require('../models/Place.js');

exports.createPlaces = async (req, res) => {
    try {
        const { placeName, placeLocation, placeImg } = req.body;
        const place = new Place({ placeName, placeLocation, placeImg });
        await place.save();
        res.status(200).json({ success: true, message: 'Place has been created' });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.getPlaces = async (req, res) => {
    Place.find({}).then(function (place) {
        res.send(place);
    });
};
