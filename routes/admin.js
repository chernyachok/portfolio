var express = require('express');
const model = require('../models/model');
var router = express.Router();

router.get('/', function(req, res) {
  model.find({}).then((data, err)=>{
    if(err) return res.redirect('/')
      res.render('dashboard', {data: data, info: req.flash('info')})
  })

});

router.get('/new', (req,res,next)=>{
  res.render('new');
})

router.post('/', (req,res)=>{
  console.log(req.body)
  var newProject = new model({
      author: 'https://previews.123rf.com/images/vadymvdrobot/vadymvdrobot1506/vadymvdrobot150601260/41289935-handsome-young-businessman-in-suit-sitting-on-the-chair-in-office-and-looking-at-camera.jpg',
      project_name: req.body.projectName,
      thumbnail: req.body.thumbnail,
      description: req.body.description,
      service: req.body.service,
      date: new Date().toDateString()
     });
     newProject.save().then((data,err)=>{
       if(err) return res.send('Error');
       req.flash('info', 'Project added');
       res.redirect('/admin')
     })

})

router.get('/edit/:id', (req,res)=>{

  model.findOne({_id: req.params.id}, (err, data)=>{
    if(err) {
    //  console.log('smath wrong'+err+ data)
      return res.redirect(`/${req.params.id}`);
    }console.log(data)
     res.render('edit', {data: data})
   })

  })

router.post('/edit/:id', (req,res)=>{
  model.update({_id: req.params.id},{$set:{project_name:req.body.projectName, description: req.body.description, service: req.body.service}})
  .then((data,err)=>{
    if(err) return res.send('ERROR BY UPDATING')
    req.flash('info', 'Project updated')
    res.redirect('/admin')
  })
})


router.delete('/delete/:id',(req,res)=>{
  console.log(req.params.id);
  model.findOneAndRemove({_id: req.params.id}).then((data)=>{//findbyidandremove
    req.flash('info', 'Project deleted');
    res.send('Deleted!');
  })
})


module.exports = router;
