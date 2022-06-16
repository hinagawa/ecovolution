const { Schema, model } = require('mongoose');

const ArticleSchema = new Schema({
    articleName: String,
    articleText: String,
    firebasePath: String,
    tagsArray: Array,
    articleAuthorId :  [{ type: Schema.Types.ObjectId, ref: 'users' }],
    likesCount: Number,
    createDate: Date,
});

module.exports = model('articles', ArticleSchema);
