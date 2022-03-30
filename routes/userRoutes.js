const { getUsers, getUserById } = require('../controllers/userController');

module.exports = (app) => {
    app.get('/api/user', function (req, res) {
        res.send('User profile');
    });
    app.route('/api/user/getAll').get(getUsers);
    app.route('/api/user/getById').get(getUserById);
};
