const { getUsers, getUserById, addLikedArticle } = require('../controllers/userController');

module.exports = (app) => {
    app.route('/api/user/getUsers').get(getUsers);
    app.route('/api/user/getById').get(getUserById);
    app.route('/api/user/addLikedArticle').get(addLikedArticle);
};
