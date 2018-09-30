var mongoose  = require('./db')


var schema =new mongoose.Schema({
  author:{
    type: String,
    required: true
  },
  project_name:{
    type : String,
    required: true
  },
  thumbnail: {
    type: String,
    required:true
  },
  date: {
    type: String,
    required: true
  },
  service:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required:true
  }

})
 var model = mongoose.model('project', schema);
 module.exports = model;
