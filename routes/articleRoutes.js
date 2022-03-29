const { createArticle, getArticles, getArticleById } = require('../controllers/articleController');

module.exports = (app) => {
    app.route('/api/article/create').post(createArticle);
    app.route('/api/article/getAll').get(getArticles);
    app.route('/api/article/getById').get(getArticleById);
    //TODO delete
};
