/**
 * @jest-environment node
 */
const {
  getBookListWithoutRating,
  getRatingFromBookId, getBooksWithRating, getBooksWithRatingByAuthor,
} = require('./../../../../src/utils/books/index');

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

describe('getBooksWithRating', () => {
  it('should fetch books with their rating', async () => {
    const booksWithRatings = await getBooksWithRating();
    expect(booksWithRatings[0].rating).not.toEqual(null);
  });
});

describe('getBooksWithRatingByAuthor', () => {
  it('should return result grouped by authors', async () => {
    const booksWithRatingsByAuthor = await getBooksWithRatingByAuthor();
    const authors = Object.keys(booksWithRatingsByAuthor);
    expect((authors.length > 0)).toEqual(true);
    expect(Array.isArray(booksWithRatingsByAuthor[authors[0]])).toEqual(true);
  });
});
