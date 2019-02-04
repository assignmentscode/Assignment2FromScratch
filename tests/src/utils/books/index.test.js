/**
 * @jest-environment node
 */
const { getBookListWithoutRating, getRatingFromBookId } = require('./../../../../src/utils/books/index');

describe('getBookListWithoutRating', () => {
  it('should fetch all the books from the external API', async () => {
    const allBooks = await getBookListWithoutRating();
    expect(Array.isArray(allBooks.books)).toEqual(true);
  });
});

describe('getRatingFromBookId () :', () => {
  it('should fetch rating of a book with a given id', async () => {
    const rating = await getRatingFromBookId(10);
    expect(typeof (rating.rating)).toEqual('number');
  });
});
