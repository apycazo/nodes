// =============================================================================
// Module to configure an ExpressJS web server
// =============================================================================

var express          = require('express');
var cookieParser     = require('cookie-parser');
var methodOverride   = require('method-override');
var http             = require('http');
var bodyParser       = require('body-parser');
var morgan           = require('morgan');
var app              = express();

app.use(morgan('dev'));       // log every request to the console
app.use(cookieParser());      // read cookies (needed for auth)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = {
   app : app
}
