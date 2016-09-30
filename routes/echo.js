var express = require('express');
var router = express.Router();

//get input message and echo back
router.get('/', function(req, res, next) {
  res.send('echo');
});

//dummy info
router.get('/dummy', function(req, res, next) {
  var response={
  	'name': 'Superman',
  	'message': 'hello'
  };	
  res.send(response);
});

module.exports = router;