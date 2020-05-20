var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var pg = require('pg');
const fs = require('fs');
//DB
const connectMongoDB = require('./server/configs/db.context')
const ideaModel = require('./server/modules/idea/idea.model');
//router
const ideaRouter = require('./server/modules/idea/idea.router')
//error config
const errorConfig = require('./server/configs/error.configs')


connectMongoDB();
  
var app = express();

//cors
var cors = require('cors');
app.use(cors());


// view engine setup
app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'client/public', 'favicon.png')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'client/public')));

app.use('/', ideaRouter);
var ideaApi = require('./server/modules/idea/idea.api');
app.use('/api/v1/idea', ideaApi);


app.get("/.well-known/acme-challenge/wpq7ohAeVAOYdKog9fmD8pzSWeyx5Obq5dBmD70CnFM",(req, res, next)=>{
    res.send('wpq7ohAeVAOYdKog9fmD8pzSWeyx5Obq5dBmD70CnFM.4uNWT5zV0mXHnvJVb_GtgwdgT86WUxCIgwYhd-olV-s')
})

app.use('/abc',ideaApi)
app.use('/xyz',ideaApi)
app.use('/tandeptrai',ideaApi)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    // console.log("HERE1")
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // console.log("HERE2")
    // console.log("ERROR: " + err.status)
    // console.log("ERROR: " + err.message)
    if (err.status == 404) {
        // console.log("HERE3: " + err.status)
        res.render('error/404',{error: errorConfig.FILE_NOT_FOUND});
    } else {
        // console.log("HERE4: " + err.status)
        // render the error page
        // console.log(err)
        res.status(err.status || 500);
        res.render('error',{error: err});
    }
});

module.exports = app;