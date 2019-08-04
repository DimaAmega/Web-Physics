///////////////////////////
//    GLOBA VARIABLES
///////////////////////////
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var IndexRouter = require('./routes/index');
var bodyParser = require('body-parser');

///////////////////////////
//      EXPRESS
///////////////////////////
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.set('env', 'production');
///////////////////////////
// ADDITIONAL MIDDLEWARE
//////////////////////////
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }) );
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'Sceens')));

///////////////////////////
//    MY MIDDLEWARE
///////////////////////////
app.use('/', IndexRouter);


///////////////////////////
//    PAGE NOT FOUND 404
///////////////////////////
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
///////////////////////////
//      START SERVER 
///////////////////////////
var port = 8000;
app.listen(port,()=>{ console.log(`Listening on ${port} port`)});
