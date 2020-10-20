var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/emailCapture', function(req, res, next){
//   console.log('req ' + req);
//   console.log('req body ' + req.body);

//   res.sendStatus(201);
// });

module.exports = router;
