const blog = require('../models/blog');
const Blog = require('../models/blog')
const blogsCtrl = {};

blogsCtrl.getBlogs = async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
}

blogsCtrl.getBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    res.json(blog);
}

blogsCtrl.createBlog = async (req, res) => {
    console.log(req.body);
    const newBlog = new Blog(req.body);
    await newBlog.save()
    res.json({status: 'Employee created'});
}

blogsCtrl.updateBlog = async (req, res) => {
    await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Employee updated'});

}

blogsCtrl.deleteBlog = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({status: 'Employee deleted'});
}

module.exports = blogsCtrl;