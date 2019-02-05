const ping = require('./ping');
const books = require('./books');
const storeBooks = require('./storeBooks');

module.exports = () => [].concat(
  ping,
  books,
  storeBooks,
);
