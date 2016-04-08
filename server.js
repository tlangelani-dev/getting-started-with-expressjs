var express     = require('express'),
    bodyParser  = require('body-parser'),
    app         = express(),
    port        = 3000;

// parse all body content to routes
app.use(bodyParser.urlencoded());

app.get('/', function(req, res) {
    res.render('index.jade', { names: names });
});

app.post('/', function(req, res) {
    names.push(req.body.name);
    res.redirect('/');
});

app.listen(port, function() {
    console.log('listening on port ' + port);
});