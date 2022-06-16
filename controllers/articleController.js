// const { findByIdAndUpdate } = require('../models/Article.js');
const Article = require('../models/Article.js');
const User = require('../models/User');
const jwt_decode = require('jwt-decode');

exports.createArticle = async (req, res) => {
    try {
        const { articleName, articleText, firebasePath, tagsArray, articleAuthorId } = req.body;
        const article = new Article({ articleName, articleText, firebasePath, tagsArray, articleAuthorId });
        await article.save();
        res.status(200).json({ success: true, message: 'Article has been created' });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};
// TODO check if article with this id exist -> 404

exports.getArticles = async (req, res) => {
    const { search, follows } = req?.query ?? {};
    const token = req.headers.authorization.split(' ')[1];
    const { id: currentUserId } = jwt_decode(token);
    
    try {
        let friends = [];
        if (token) {
            const user = await User.findById(currentUserId);
            friends = user.friends.map(f => f._id.toString());    
        }
        
        Article.find({ 
            ...(search && { articleName: { $regex: search, $options: 'i' } }),
            ...(follows !== 'false' && { articleAuthorId: { $in: friends }})
        }, function (err, articles) {
            var articleMap = {};
            articles.forEach(function (article) {
                articleMap[article._id] = article;
            });
            return res.status(200).json(articleMap);
        });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }

};

exports.getArticleById = async (req, res) => {
    try {
        const articleId = req.query.articleId;
        const article = await Article.findById(articleId).populate({
            path: 'articleAuthorId',
            select: 'name lastname'
        });
        res.json({ success: true, message: article });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.getArticlesByAuthorId = async (req, res) => {
    try {
        const authorId = req.query.authorId;
        const article = await Article.select({ 'authorId': authorId });
        res.json({ success: true, message: article });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.deleteArticleById = async (req, res) => {
    try {
        const articleId = req.query.articleId;
        await Article.deleteOne({ '_id': articleId });
        res.json({ success: true, message: 'Article has been deleted' });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.updateArticle = (req, res) => {
    const articleId = req.query.articleId;
    Article.findById(articleId).then(doc =>
        Article.updateOne({ _id: doc._id }, req.query.updateQuery))
        .then(
            res.status(200).send({ success: true, message: 'Article has been updated' }))
        .catch((e) =>
            res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` }));
};