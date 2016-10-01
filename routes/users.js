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

/*POST create user*/
router.post('/', function(req, res, next) {
  var result=null;
  console.log(req.body);
  if (req.body.newUser) {
    var newUser=req.body.newUser;
    console.log(req.body.newUser);
    userDB[newUser.id]=newUser;
  result=userDB[newUser.id];
  }
  else {
    result='fail to add user';
  }
  res.send(result);
});

/*DELETE product*/
router.delete('/', function(req, res, next) {
  var result=null;
  console.log(req.body);
  if (req.body.userId && userDB[req.body.userId]) {
    delete userDB[req.body.userId];
  result={"status":"ok", "message": req.body.userId + " deleted"};
  }
  else {
  result={"status":"fail", "message": req.body.userId + " does not exist"};
  }
  res.send(result);
});


module.exports = router;
