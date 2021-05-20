const {Schema, model} = require('mongoose');
const Comment = require('../models/comment');

const blogSchema = new Schema(
    {
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        category: {
            type: String, 
            required: true
        },
        image: {
            type: String, 
            required: true
        },
        comments: {
            type: [Comment.Schema]
        }
    },
    {
        timestamps: true,
        versionKey: false
    }   
)

module.exports = model('Blog', blogSchema);