const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/blogs", require('./routes/blogs.routes'));
app.use("/api/comments", require('./routes/comments.routes'));


module.exports = app;
