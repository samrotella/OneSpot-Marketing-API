var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
  console.log(req.body.email);
  return res.sendStatus(200);
});

module.exports = router;
