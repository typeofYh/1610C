var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
  console.log(req.query);
  res.send([{
    title:'今天检查'
  },{
    title:'今天周五'
  },{
    title:'周一不周考啦'
  }])
});

router.post('/list',function(req,res,next){
  console.log(req.body);
  res.send([{
    title:'今天检查',
    img:'img1.jpg'
  },{
    title:'今天周五',
    img:'img2.jpg'
  },{
    title:'周一不周考啦',
    img:'img3.jpg'
  }])
})

module.exports = router;
