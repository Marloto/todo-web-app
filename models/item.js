const mongoose = require('mongoose');

const ToDo = mongoose.model('ToDo', {
  text: String, 
  done: Boolean, 
  owner: String
});

module.exports = ToDo;

/**
 * Datatypes:
 * - String
 * - Number
 * - Date
 * - Boolean
 * 
 * More Datatypes:
 * - Buffer
 * - Mixed
 * - ObjectId
 * - Array
 * - Decimal128
 * - Map
 */