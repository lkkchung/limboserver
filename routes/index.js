var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Limbo Server' });
});

router.post('/limboinfo/submit', function(req, res, next) {
  // var height = req.body.height;
  // var status = req.body.status;
  // var players = req.body.players;
  var json = JSON.stringify(req.body);
  fs.writeFile('info.json', json, 'utf8');
  res.render('limboinfo', {output: JSON.stringify(req.body)});
});

router.get('/limboinfo/height', function(req, res, next) {
  var limboinfo = JSON.parse(fs.readFileSync('info.json', 'utf-8'));
  var height = limboinfo.height;
  res.render('limboparams', {parameter: 'Height', output: height})
});

router.get('/limboinfo/status', function(req, res, next) {
  var limboinfo = JSON.parse(fs.readFileSync('info.json', 'utf-8'));
  var status = limboinfo.status;
  res.render('limboparams', {parameter: 'Status', output: status})
});

router.get('/limboinfo/players', function(req, res, next) {
  var limboinfo = JSON.parse(fs.readFileSync('info.json', 'utf-8'));
  var players = limboinfo.players;
  res.render('limboparams', {parameter: 'Players', output: players})
});

module.exports = router;
