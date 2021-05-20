const { Router } = require('express');
const router = Router();

const commentsCtrl = require('../controllers/comments.controller.js');

router.get('/:id', commentsCtrl.getComments);

router.post('/:id', commentsCtrl.createComment);

module.exports = router;