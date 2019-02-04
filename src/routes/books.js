const Books = require('./../utils/books/index');

module.exports = {
  method: 'GET',
  path: '/books',
  handler: async (request, h) => {
    const result = await Books.getBooksWithRatingByAuthor();
    return h.response(result).code(200);
  },
};
