var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    username: "20162442"
  }, {
    id : 2,
    username: "kdy"
  }]);
});

module.exports = router;
