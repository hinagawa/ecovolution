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

exports.addLikedArticle = async (req, res) => {
    try {
        const articleId = req.query.articleId;
        const userId = req.query.userId;
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('no user');
        }
        user.likedArticles = [...user.likedArticles, articleId];
        await user.save();
        res.status(200).json({ success: true, message: 'Create' });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};
exports.addLikedPlace = async (req, res) => {
    try {
        const articleId = req.query.articleId;
        const userId = req.query.userId;
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('no user');
        }
        user.likedArticles = [...user.likedPlaces, articleId];
        await user.save();
        res.status(200).json({ success: true, message: 'Create' });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};
exports.getLikedArticle = async (req, res) => {
    try {
        const userId = req.query.userId;
        User.find({_id: userId}, { likedArticles: 1 }, function (err, likedArticles) {
            return res.status(200).json(likedArticles);
        });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.getLikedPlace = async (req, res) => {
    try {
        const userId = req.query.userId;
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('no user');
        }
        User.find({_id: userId}, { likedPlaces: 1 }, function (err, likedPlaces) {
            return res.status(200).json(likedPlaces);
        });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};