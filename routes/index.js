var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Limbo Server' });
});

router.get('/limboinfo/', function(req, res, next) {
  var limboinfo = JSON.parse(fs.readFileSync('info.json', 'utf-8'));
  res.render('limboinfo', {output: JSON.stringify(limboinfo)});
});

router.get('/limboinfo/height/:h', function(req, res, next) {
  var limboinfo = JSON.parse(fs.readFileSync('info.json', 'utf-8'));
  limboinfo.height = req.params.h;
  fs.writeFile('info.json', JSON.stringify(limboinfo), 'utf8');
  res.render('limboparams', {parameter: 'Height', output: req.params.h});
});

router.get('/limboinfo/status/:s', function(req, res, next) {
  var limboinfo = JSON.parse(fs.readFileSync('info.json', 'utf-8'));
  limboinfo.status = req.params.s;
  fs.writeFile('info.json', JSON.stringify(limboinfo), 'utf8');
  res.render('limboparams', {parameter: 'Status', output: req.params.s});
});

router.get('/limboinfo/players/:p', function(req, res, next) {
  var limboinfo = JSON.parse(fs.readFileSync('info.json', 'utf-8'));
  limboinfo.players = req.params.p;
  fs.writeFile('info.json', JSON.stringify(limboinfo), 'utf8');
  res.render('limboparams', {parameter: 'Players', output: req.params.p});
});

router.post('/limboinfo/submit', function(req, res, next) {
  // var height = req.body.height;
  // var status = req.body.status;
  // var players = req.body.players;
  var json = JSON.stringify(req.body);
  fs.writeFile('info.json', json, 'utf8');
  res.redirect('/limboinfo/');
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
