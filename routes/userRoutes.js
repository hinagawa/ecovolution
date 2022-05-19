const { getUsers, getUserById } = require('../controllers/userController');

module.exports = (app) => {
    app.route('/api/user/getUsers').get(getUsers);
    app.route('/api/user/getById').get(getUserById);
};
