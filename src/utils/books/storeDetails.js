const { getBooksWithRating } = require('./index');
const model = require('./../../../models');

const storeBookDetailsInDatabase = () => {
  getBooksWithRating().then(result => model.books.getBookDetailsById(result[0].id)
    .then((details) => {
      if (details === null) {
        result.map(book => model.books.storeData(book.id, book.Name, book.Author, book.rating));
        return 'DATA INSERTED';
      }
      return 'DATA ALREADY PRESENT';
    }));
};
module.exports = storeBookDetailsInDatabase();
