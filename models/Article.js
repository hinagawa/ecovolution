const { Schema, model } = require('mongoose');

const ArticleSchema = new Schema({
    articleName: String,
    articleText: String,
    firebasePath: String,
    tagsArray: Array,
    authorId : String,
    likesCount: Number
});

module.exports = model('articles', ArticleSchema);
