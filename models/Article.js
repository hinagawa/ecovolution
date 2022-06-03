const ObjectId = require('mongoose').ObjectId;
const { Schema, model } = require('mongoose');

const ArticleSchema = new Schema({
    articleName: String,
    articleText: String,
    firebasePath: String,
    tagsArray: Array,
    articleAuthorId : ObjectId,
    likesCount: Number
});

module.exports = model('articles', ArticleSchema);
