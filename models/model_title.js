var mongoose  = require('./db')


var schema =new mongoose.Schema({
  title: {
    type: String,
    required:true
  }
})
 var model = mongoose.model('title', schema);
 module.exports = model;
