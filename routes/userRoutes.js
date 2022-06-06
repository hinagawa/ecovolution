const { getUsers, getUserById, addLikedArticle, addLikedPlace, getLikedArticle, getLikedPlace } = require('../controllers/userController');

module.exports = (app) => {
    app.route('/api/user/getUsers').get(getUsers);
    app.route('/api/user/getById').get(getUserById);
    app.route('/api/user/addLikedArticle').get(addLikedArticle);
    app.route('/api/user/addLikedPlace').get(addLikedPlace);
    app.route('/api/user/getLikedArticle').get(getLikedArticle);
    app.route('/api/user/getLikedArticle').get(getLikedPlace);
};
