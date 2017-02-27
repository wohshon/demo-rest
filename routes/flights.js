var express = require('express');
var router = express.Router();

var flightDB={};
flightDB['SQ123']=    {
      'id': 'SQ123',
      'name': 'SQ123',
      'price': 59.90,
       'currency': 'SGD',
       'from': 'SIN',
       'to': 'KUL' 
    };

    flightDB['SQ345']=    {
      'id': 'SQ345',
      'name': 'SQ345',
      'price': 159.90,
       'currency': 'SGD',
       'from': 'SIN',
       'to': 'PEK' 
    };

    /* GET flights listing. */
router.get('/', function(req, res, next) {
  var result=null;
  if (req.query.pid) {
    console.log(req.query.pid);
  result=flightDB[req.query.pid] || '{"status":"failed", "message": "no such flight"}';
  }
  else {
    console.log (Object.keys(flightDB).length);
    result=new Array();
    for (var i=0; i <Object.keys(flightDB).length;i ++) {
       result[i]=flightDB[Object.keys(flightDB)[i]];
    }
    //original
    //result=productDB;
  }
  res.send(result)
});

/* GET Single flight. */
router.get('/:pid', function(req, res, next) {
  var result=null;
  if (req.params.pid) {
    console.log(req.params.pid);
  result=flightDB[req.params.pid] || '{"status":"failed", "message": "no such flight"}';
  }
  else {
    result=flightDB;
  }
  res.send(result);
});

router.post('/', function(req, res, next) {
  var result=null;
  console.log(req.body);
  if (req.body.newFlight) {
    var newFlight=req.body.newFlight;
    console.log(req.body.newFlight);
    flightDB[newFlight.id]=newFlight;
  result=flightDB[newFlight.id];
  }
  else {
  result={"status":"failed", "message": "failed to add flight"};
  }
  res.send(result);
});

/*DELETE flight by id*/
router.delete('/:pid', function(req, res, next) {
  var result=null;
  console.log(req.params);
  if (req.params.pid && flightDB[req.params.pid]) {
    delete flightDB[req.params.pid];
  result={"status":"ok", "message": req.params.pid + " deleted"};
  }
  else {
  result={"status":"failed", "message": req.params.pid + " does not exist"};
  }
  res.send(result);
});


module.exports = router;
