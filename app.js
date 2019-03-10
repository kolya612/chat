const express = require('express');
const http = require('http');
const path = require('path');
const config = require('config');
const log = require('libs/log')(module);


const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname = path.join(__dirname, 'templates'));


const favicon = require('serve-favicon');
app.use(favicon(path.join('public', 'favicon.ico')));

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.get('/', function(req, res, next) {
  res.render("index", {
    body: "<b>Hello</b>"
  });
});



app.use(express.static(path.join(__dirname, 'public')));







/*
var errorhandler = require('errorhandler')
app.use(function(err, req, res, next) {
  // NODE_ENV = 'production'
  if (app.get('env') == 'development') {
    app.use(errorhandler())
  } else {
    res.send(500);
  }
});*/



http.createServer(app).listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});

// Middleware
/*
app.use(function(req, res, next) {
  if(req.url == '/') {
    res.end("Hello");
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  if(req.url == '/test') {
    res.end("Hello test!!!");
  } else {
    next();
  }
});


app.use(function(req, res, next) {
  if(req.url == '/forbidden') {
    next(new Error("woops, denied"));
  } else {
    next();
  }
});

app.use(function(req, res) {
  res.send(404, "Page not found Sorry");
});
*/