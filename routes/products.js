var express = require('express');
var router = express.Router();

var productDB={};
productDB['product1']=    {
      'id': 'product1',
      'name': 'Fedora Hat',
      'price': 59.90,
       'currency': 'SGD' 
    };

productDB['product2']=    {
      'id': 'product2',
      'name': 'Laptop',
      'price': 888.00,
      'currency': 'SGD' 
    };

productDB['product3']=    {
      'id': 'product3',
      'name': 'USB Disk',
      'price': 12.00,
       'currency': 'USD' 
    };        
/* GET users listing. */
router.get('/', function(req, res, next) {
  var result=null;
  if (req.query.pid) {
    console.log(req.query.pid);
  result=productDB[req.query.pid] || 'no such product';
  }
  else {
    result=productDB;
  }
  res.send(result)
});

module.exports = router;
