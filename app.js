var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var admin = require('./routes/admin');
var flash = require('connect-flash');
//var expressValidator = require('express-validator');
var session = require('express-session');
var multer = require('multer');
var expressHbs = require('express-handlebars');
var app = express();
require('./models/model');

app.engine('hbs', expressHbs({defaultLayout: 'layout', extname: 'hbs', layoutsDir:'views/layouts', partialsDir: 'views/partials/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(favicon());
app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use( express.static('public'));


app.use(session({
  secret: 'secret',
   saveUninitialized: true,
   resave: true
}));

app.use(flash());



app.locals.moment = require('moment');
app.use((req,res,next)=>{
  res.locals.messages = require('express-messages')(req,res);

  next();
})

app.use('/', routes);
app.use('/admin', admin);


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});


module.exports = app;
