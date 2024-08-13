var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("Teste");
});

let users = {items:[]};
router.post('/', (req,res) =>{
  users.items.push(req.body);
  console.log(users);
  res.send('Ok!');
});

module.exports = router;
