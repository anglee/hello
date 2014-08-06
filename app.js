var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Yay");

  var personScheme = {
    firstname: String,
    lastname: String,
    email: String
  };

  var Person = mongoose.model("Person", personScheme, 'people');

  Person.find(function(err, doc) {
    console.log("\nPerson.find");
    console.log(doc);
  });

  Person.findOne(function(err, doc) {
    console.log("\nPerson.findOne");
    console.log(doc);
  });

  var ppl = null
  Person.find().select("firstname").exec(function(err, doc) {
    console.log("\nPerson.find.select.exec");
    console.log(doc);
    ppl = doc;

    var id = ppl[0]._id;
    Person.findById(id, function(err, doc) {
      console.log("\nPerson.findById id = ", id);
      console.log(doc);
    });
  });



  //mongoose.disconnect();
});