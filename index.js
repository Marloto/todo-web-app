const mongoose = require('mongoose');
console.log("Start ToDo-Web-App-Server");

async function run() {
  console.log("Connected to Database");
  try {
    // Load Model
    const ToDoItem = require('./models/item');

    // Do Things with Model
    // Ausgabe mit: console.log(myVar);
      
  } catch(err) {
    console.error(err);
  }
}

// Connect to Database
var url = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT || 27017}/${process.env.MONGODB_DATABASE}?authSource=admin&w=majority&readPreference=primary&retryWrites=true&ssl=false`;
console.log("Connect to: " + url);
console.log("Connect with: " + (process.env.MONGODB_USER || "user"));
mongoose.connect(url, 
  {
    user: process.env.MONGODB_USER || "user",
    pass: process.env.MONGODB_PASS || "pass",
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
  }
).then(run, err => console.log(err));
