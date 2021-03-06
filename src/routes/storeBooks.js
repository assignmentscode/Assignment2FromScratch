const storeBookDetailsInDatabase = require('./../utils/books/storeDetails');

module.exports = {
  method: 'POST',
  path: '/storeBooks',
  handler: async (request, h) => {
    const result = await storeBookDetailsInDatabase();
    return h.response(result).code(200);
  },
};
