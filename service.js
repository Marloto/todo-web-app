const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

// Create Service
const app = express();

// Config Service
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Default
app.get('/', (req, res) => res.send('ToDo Service Version ' + require('./package.json').version));

var router = express.Router();
router.use('/todoitem', require('./routes/item'));
router.use('/login', require('./routes/login'));
router.use('/register', require('./routes/register'));
app.use('/api', router);

// Start Service
app.listen(3000, () => console.log('server started now'));

module.exports = app;