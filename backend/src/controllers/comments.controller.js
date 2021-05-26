const Blog = require('../models/blog');
const Comment = require('../models/comment');
const commentsCtrl = {};

commentsCtrl.getComments = async (req, res) => {
    /*const blogs = await Blog.find();
    res.json(blogs);*/
    // get id in params of blog
    const comments = await Comment.find({idBlog: req.params.id});
    //const comments = await Comment.find();
    res.json(comments);

}

commentsCtrl.createComment = async (req, res) => {
    console.log(req.body);

    const newComment = new Comment(req.body);

    await newComment.save( async function(err, comment) {
        
       
        let newCommentId = comment._id;
        blogId = comment.idBlog;

        console.log("id just created", comment);

        /*
        Blog.findByIdAndUpdate(
            {blogId},
            {
                $push: {
                    comments: newCommentId
                },
                function(err, result) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(result);
                    }
                }
            }
        )
        */
        await Blog.findOneAndUpdate(
            { 
                _id: blogId 
            },
            {
                $addToSet: {
                    comments: newCommentId
                }
            },
            function(err, result) {
                if (err) {
                    res.send(err);
                } else {
                    //res.json({status: 'Comment created'});
                    console.log('creado comentario', result);
                    //res.json(result)
                }
            }
        )

        if (err) {
            res.send(err);
        } else {
            res.json(comment);
        }
    })
    
}

module.exports = commentsCtrl;
