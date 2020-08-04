var express = require('express');
var app = express.Router();

app.get('/exercise', function (req, res) {
    res.sendFile('../public/exercise.html');
});

app.get('/stats', function (req, res) {
    res.sendFile('../public/stats.html');
});

app.get('/', function (req, res) {
    res.sendFile('../public/index.html');
});

module.exports = routers