var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserSchema = mongoose.model('UserSchema')
// var ProjectSchema = mongoose.model('ProjectSchema')
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send('respond with a get'+req.params.id);
});

router.get('/', function(req, res, next) {
  console.log(req.query)
  UserSchema.find(req.query,function(err,users){
    if(err) return res.json(err);
    res.json(users);
  })
  
});

router.post('/', function(req, res, next) {
  UserSchema.create(req.body,function(err,users){
    if(err) return res.json(err);
    res.json(users);
  })
  
});

router.put('/:id', function(req, res, next) {
  UserSchema.update(req.body,function(err,users){
    if(err) return res.json(err);
    res.json(users);
  })
});

router.delete('/:id', function(req, res, next) {
  UserSchema.findByIdAndRemove(req.params.id,function(err,users){
    if(err) return res.json(err);
    res.json(users);
  })
});


/* GET Project listing. */

// router.get('/', function(req, res, next) {
//   console.log(req.query)
//   ProjectSchema.find(req.query,function(err,users){
//     if(err) return res.json(err);
//     res.json(users);
//   })
  
// });

// router.post('/', function(req, res, next) {
//   ProjectSchema.create(req.body,function(err,users){
//     if(err) return res.json(err);
//     res.json(users);
//   })
  
// });


module.exports = router;
