var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Error Handler for 404 Pages
app.use(function(req, res, next) {
    var error404 = new Error('Route Not Found');
    error404.status = 404;
    next(error404);
});

module.exports = app;

app.post('/comment', function(req, res){
  console.log(req.body);
  var newComment = {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment
  }
  pusher.trigger('flash-comments', 'new_comment', newComment);
  res.json({ created: true });
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
  });

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '1499269',
  key: 'cb4fb76198b7297358c7',
  secret: '98a299a4bc9cd1dda527',
  cluster: 'sa1',
  encrypted: true
});

pusher.trigger('flash-comments', 'new_comment', newComment);