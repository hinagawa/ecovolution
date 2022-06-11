const { createPlace, getPlaces, getPlaceById, deletePlaceById, getCoordinates, addEvent } = require('../controllers/placeController');

module.exports = (app) => {
    app.route('/api/place/create').post(createPlace);
    app.route('/api/place/getPlaces').get(getPlaces);
    app.route('/api/place/getPlaceById').get(getPlaceById);
    app.route('/api/place/deletePlaceById').delete(deletePlaceById);
    app.route('/api/place/getAllCoordinates').get(getCoordinates);
    app.route('/api/place/addEvent').post(addEvent);
};
