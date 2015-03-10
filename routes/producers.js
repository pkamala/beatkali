var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/producers', function(req, res, next) {
    res.render('producers', { title: 'Producers' });
});

module.exports = router;
