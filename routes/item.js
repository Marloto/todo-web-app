const ToDoItem = require('../models/item');

// Create New Router for Request Handlings
const router = require('express').Router();

router.use(require('../utils/dummy.js'));
//router.use(require('../utils/verifier.js'));

function getOwnerFromReq(req) {
  return req.username;
}

// Add Function to List ToDos in Service
router.get('/', async (req, res) => {
  try {
    var items = await ToDoItem.find({owner: getOwnerFromReq(req)});
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

// Add Function to Create ToDo in Service
router.post('/', async (req, res) => {
  const item = new ToDoItem(req.body);
  item.owner = getOwnerFromReq(req);
  try {
    const newItem = await item.save()
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
});

// Add Function to Create ToDo in Service
router.put('/:id', async (req, res) => {
  const item = new ToDoItem(req.body).toObject();
  item.owner = getOwnerFromReq(req);
  delete item._id;
  try {
    const updatedItem = await ToDoItem.findOneAndUpdate({
      '_id': req.params.id, 
      owner: getOwnerFromReq(req)
    }, item, {upsert: false});
    res.json(updatedItem);
  } catch(err) {
    res.status(400).json({ message: err.message })
  }
});

// Middleware Function to Load One Item
async function findOne(req, res, next) {
  try {
    item = await ToDoItem.findById(req.params.id)
    if (item == null || item.owner != getOwnerFromReq(req)) {
      return res.status(404).json({ message: 'Cant find item'})
    }
  } catch(err){
    return res.status(500).json({ message: err.message })
  }
  res.item = item
  next()
}

// Load One Item
router.get('/:id', findOne, (req, res) => {
  res.json(res.item)
});

// Delete One Item by Using Load One Item
router.delete('/:id', findOne, async (req, res) => {
  try {
    await res.item.remove()
    res.json({ message: 'Deleted This Item' })
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

// Export Router Configuration
module.exports = router;