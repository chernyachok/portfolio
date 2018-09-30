var express = require('express');
var router = express.Router();
var model = require('../models/model');
//var model_title = require('../models/model_title');
//var seed = require('../models/seed');


router.get('/', function(req, res) {
  model.find({}).then((data)=>{
      res.render('index', { projects: data, author: data[0].author});
  })
});

module.exports = router;
