//const blog = require('../models/blog');
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
    let response = await newBlog.save()
    res.json(response);
    console.log('respuesta blog creado', response)
}

blogsCtrl.updateBlog = async (req, res) => {
    //let response = await Blog.findByIdAndUpdate(req.params.id, req.body);
    let response = await Blog.findByIdAndUpdate(req.params.id, req.body, {new: true});
    //res.json({status: 'Blog updated'});
    res.json(response);

}

blogsCtrl.deleteBlog = async (req, res) => {
   let response =  await Blog.findByIdAndDelete(req.params.id);
    //res.json({status: 'Blog deleted'});
    res.json(response);
}

module.exports = blogsCtrl;