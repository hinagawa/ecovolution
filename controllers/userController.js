const User = require('../models/User');

exports.getUsers = async (req, res) => {
    try {
        User.find({}, function (err, users) {
            var userMap = {};

            users.forEach(function (user) {
                userMap[user._id] = user;
            });
            return res.status(200).json(userMap);
        });
    }
    catch (e) {
    return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
}
};

exports.getUserById = async (req, res) => {
    try {
        const userId = req.query.userId;
        const user = await User.findById(userId);
        res.status(200).json({ success: true, message: user });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};