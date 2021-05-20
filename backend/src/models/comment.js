const {Schema, model} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;
const Blog = require('../models/blog');

const commentSchema = new Schema(
    {
        idBlog: {
            type: ObjectId, 
            required: true
        },
        idUser: {
            type: String, 
            required: true
        },
        comment: {
            type: String, 
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }   
)

module.exports = model('Comment', commentSchema);