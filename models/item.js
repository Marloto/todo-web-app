const mongoose = require('mongoose');

const ToDo = mongoose.model('ToDo', {
  // Add your attributes here (add one comma at the end of each)
  // myAttr: Type,

  // We need at least this one
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
