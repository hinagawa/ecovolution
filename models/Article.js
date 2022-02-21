const { Schema, model } = require('mongoose');

const ArticleSchema = new Schema({
    header: String,
    content: String,
    img : {
        data: Buffer,
        contentType: String
    },
    authorId : String,
    likesCount: Number
});

module.exports = model('articles', ArticleSchema);
