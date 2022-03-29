const Article = require('../models/Article.js');

exports.createArticle = async (req, res) => {
    try {
        const { articleName, articleText, articleImg, articleAuthorId } = req.body;
        const article = new Article({ articleName, articleText, articleImg, articleAuthorId });
        await article.save();
        res.status(200).json({ success: true, message: 'Article has been created' });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong! ${e.message}` });
    }
};

exports.getArticles = async (req, res) => {
    Article.find({}).then(function (article) {
        res.send(article);
    });
};

exports.getArticleById = async (req, res) => {
    const { articleId } = req.body;
    const article = await Article.findById(articleId);
    res.json({ success: true, message: article });
};