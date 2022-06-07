var express = require('express'),
    app = express(),
    port = process.env.PORT || 5100,
    engines = require('consolidate'),
    session = require('express-session'),
    routes = require('./routes/appRoutes'),
    assert = require('assert');
    require("dotenv").config();

global.bodyParser = require('body-parser');
global.request = require('request');
global.mc_api = process.env.API + ':' + process.env.API_PORT;
global.urlpath = process.env.NS + ':' + process.env.PORT;


//initialize bodyParser and errorHandler
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/resources'));
app.use(bodyParser.json());
app.use(session({secret: 'as465asdwqwdzcafd56a5df45a46df'}));
//app.use(errorHandler);

var urlencodedParser = bodyParser.urlencoded({ extended: false });

routes(app);

app.listen(port);
console.log('Apene Accounting server listening on port ' + port);