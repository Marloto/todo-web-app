const mongoose = require('mongoose');

async function run() {
    try {
      // Load Model
      const ToDoItem = require('./models/item');

      require('./service')

      // // Do Things with Model
      // var items = await ToDoItem.find();
      // console.log(items);
    } catch(err) {
      console.error(err);
    }
}

// Connect to Database
mongoose.connect(
  `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT || 27017}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
  }
).then(run, err => console.log(err));
