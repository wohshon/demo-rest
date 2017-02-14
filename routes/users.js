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
	result=userDB[req.query.uid] || '{"status":"failed", "message": "no such user"}';
  }
  else {
    console.log (Object.keys(userDB).length);
    result=new Array();
    for (var i=0; i <Object.keys(userDB).length;i ++) {
       result[i]=userDB[Object.keys(userDB)[i]];
    }
      //original
  	//result=userDB;
  }
  res.send(result);
});

/* GET Single user. */
router.get('/:uid', function(req, res, next) {
  var result=null;
  if (req.params.uid) {
    console.log(req.params.uid);
  result=userDB[req.params.uid] || '{"status":"failed", "message": "no such user"}';
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
  result={"status":"failed", "message": "failed to add user"};
  }
  res.send(result);
});

/*DELETE user*/
/*router.delete('/', function(req, res, next) {
  var result=null;
  console.log(req.body);
  if (req.body.userId && userDB[req.body.userId]) {
    delete userDB[req.body.userId];
  result={"status":"ok", "message": req.body.userId + " deleted"};
  }
  else {
  result={"status":"failed", "message": req.body.userId + " does not exist"};
  }
  res.send(result);
});
*/
/*DELETE user by id*/
router.delete('/:uid', function(req, res, next) {
  var result=null;
  console.log(req.params);
  if (req.params.uid && userDB[req.params.uid]) {
    delete userDB[req.params.uid];
  result={"status":"ok", "message": req.params.uid + " deleted"};
  }
  else {
  result={"status":"failed", "message": req.params.uid + " does not exist"};
  }
  res.send(result);
});


module.exports = router;
