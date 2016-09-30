var express = require('express');
var router = express.Router();

//dummy info
router.get('/', function(req, res, next) {
  res.send('hello');
});

module.exports = router;