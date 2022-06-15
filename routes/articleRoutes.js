const {
    createArticle,
    getArticles,
    getArticleById,
    getArticlesByAuthorId,
    deleteArticleById,
    updateArticle
} = require('../controllers/articleController');

module.exports = (app) => {
    app.route('/api/article/create').post(createArticle);
    app.route('/api/article/getArticles').get(getArticles);
    app.route('/api/article/getArticleById').get(getArticleById);
    app.route('/api/article/getArticlesByAuthorId').get(getArticlesByAuthorId);
    app.route('/api/article/deleteArticleById').delete(deleteArticleById);
    app.route('/api/article/updateArticle').patch(updateArticle);
};
