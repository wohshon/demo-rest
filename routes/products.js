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
  console.log(req.headers);
  var tk=req.header('authorization').substring(7);
console.log('-'+tk+'-');   
var jwt = require('jsonwebtoken');
obj = jwt.decode(tk);

 console.log(tk);
  console.log(obj);
 if (obj) { 
	console.log('roles: '+obj.resource_access.bb966a40.roles);
  }
  if (req.query.pid) {
    console.log(req.query.pid);
   result=productDB[req.query.pid] || '{"status":"failed", "message": "no such product"}';
  }
  else {
    console.log (Object.keys(productDB).length);
    result=new Array();
    for (var i=0; i <Object.keys(productDB).length;i ++) {
       result[i]=productDB[Object.keys(productDB)[i]];
    }
    //original
    //result=productDB;
  }
  res.send(result)
});

/* GET Single product. */
router.get('/:pid', function(req, res, next) {
  var result=null;
  if (req.params.pid) {
    console.log(req.params.pid);
  result=productDB[req.params.pid] || '{"status":"failed", "message": "no such product"}';
  }
  else {
    result=productDB;
  }
  res.send(result);
});


/*POST create product*/
router.post('/', function(req, res, next) {
  var result=null;
  console.log(req.body);
  if (req.body.newProduct) {
    var newProduct=req.body.newProduct;
    console.log(req.body.newProduct);
    productDB[newProduct.id]=newProduct;
  result=productDB[newProduct.id];
  }
  else {
  result={"status":"failed", "message": "failed to add product"};
  }
  res.send(result);
});

/*DELETE product*/
/*router.delete('/', function(req, res, next) {
  var result=null;
  console.log(req.body);
  if (req.body.productId && productDB[req.body.productId]) {
    delete productDB[req.body.productId];
  result={"status":"ok", "message": req.body.productId + " deleted"};
  }
  else {
  result={"status":"fail", "message": req.body.productId + " doest not exist"};
  }
  res.send(result);
});
*/
/*DELETE user by id*/
router.delete('/:pid', function(req, res, next) {
  var result=null;
  console.log(req.params);
  if (req.params.pid && productDB[req.params.pid]) {
    delete productDB[req.params.pid];
  result={"status":"ok", "message": req.params.pid + " deleted"};
  }
  else {
  result={"status":"failed", "message": req.params.pid + " does not exist"};
  }
  res.send(result);
});


module.exports = router;
