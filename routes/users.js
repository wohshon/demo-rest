var express = require('express');
var router = express.Router();

var userDB={};
userDB['user1']={
  	  'id': 'user1',
  	  'name': 'Joe',
  	  'email': 'joe@acme.com'	
};
userDB['user2']={
  	  'id': 'user2',
  	  'name': 'John',
  	  'email': 'john@acme.com'	  	
};
userDB['user3']={
  	  'id': 'user3',
  	  'name': 'Jack',
  	  'email': 'jack@acme.com'	  		
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  var result=null;
  if (req.query.uid) {
  	console.log(req.query.uid);
	result=userDB[req.query.uid] || 'no such user';
  }
  else {
  	result=userDB;
  }
  res.send(result);
});

module.exports = router;
