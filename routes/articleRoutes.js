const { createArticle, getArticles, getArticleById, getArticlesByAuthorId, deleteArticleById } = require('../controllers/articleController');

module.exports = (app) => {
    app.route('/api/article/create').post(createArticle);
    app.route('/api/article/getrticles').get(getArticles);
    app.route('/api/article/getArticleById').get(getArticleById);
    app.route('/api/article/getArticlesByAuthorId').get(getArticlesByAuthorId);
    app.route('/api/article/deleteArticleById').delete(deleteArticleById);
};
