/**
 * @jest-environment node
 */
const { getBookListWithoutRating } = require('./../../../../src/utils/books/index');

describe('getBookListWithoutRating', () => {
  it('should fetch all the books from the external API', async () => {
    const allBooks = await getBookListWithoutRating();
    expect(Array.isArray(allBooks.books)).toEqual(true);
  });
});
