var model = require('./model');

var project = new model({
    author: 'https://previews.123rf.com/images/vadymvdrobot/vadymvdrobot1506/vadymvdrobot150601260/41289935-handsome-young-businessman-in-suit-sitting-on-the-chair-in-office-and-looking-at-camera.jpg',
    project_name: 'project3',
    thumbnail: "https://cdns.kinguin.net/media/category/b/v/bvv_1527170351_1.jpg",
    date: new Date().toDateString(),
    service: "back-end"
   });
   project.save()
