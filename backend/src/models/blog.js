const {Schema, model} = require('mongoose');
const blogsCtrl = require('../controllers/blogs.controller');

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
        }
    },
    {
        timestamps: true,
        versionKey: false
    }   
)

module.exports = model('Blog', blogSchema);