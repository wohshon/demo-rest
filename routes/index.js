var express = require('express');
var router = express.Router();

//dummy info
router.get('/', function(req, res, next) {
  var response={
  	'name': 'default',
  	'message': 'hello'
  };	
  res.send(response);
});

router.get('/hello', function(req, res, next) {
  var response={
  	'name': 'hello',
  	'message': 'hello'
  };	  	
  res.send(response);
});

router.get('/goodbye', function(req, res, next) {
  var response={
  	'name': 'goodbye',
  	'message': 'goodbye'
  };	  	
  res.send(response);
});

module.exports = router;