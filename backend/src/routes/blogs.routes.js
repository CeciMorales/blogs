const { Router } = require('express');
const router = Router();

const blogsCtrl = require('../controllers/blogs.controller.js');

router.get('/', blogsCtrl.getBlogs);

router.post('/', blogsCtrl.createBlog);

router.get('/:id', blogsCtrl.getBlog);

router.put('/:id', blogsCtrl.updateBlog);

router.delete('/:id', blogsCtrl.deleteBlog);

module.exports = router;