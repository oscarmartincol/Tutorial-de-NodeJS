var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*GET Eres genial*/ 
router.get('/cool/', function(req, res) {
  res.send('Eres genial');
});

module.exports = router;
