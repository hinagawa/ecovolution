const { createPlace, getPlaces } = require('../controllers/articleController');

module.exports = (app) => {
    app.route('/api/place/create').post(createPlace);
    app.route('/api/place/getAll').get(getPlaces);
};
