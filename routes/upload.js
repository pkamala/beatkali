var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next)
{
    res.render('upload', {title : 'Upload that beat'});
});

router.post('/', function(req,res)
{
    somethingGoesWrong = true;
    if(somethingGoesWrong)
    {
    var vm = {
        title : 'Upload that beat',
        input : req.body
    }
    
    return res.render('upload',vm);
    }
    res.redirect('/');
});




module.exports = router ;