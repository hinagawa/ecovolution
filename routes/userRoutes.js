module.exports = (app) => {
    app.get('/api/user', function (req, res) {
        res.send('User profile');
    });
};
