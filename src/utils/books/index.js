const httpGet = require('./../http/index');

const getBookListWithoutRating = () => {
  const url = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
  return httpGet(url).then(requestResult => requestResult.data);
};
const getRatingFromBookId = (id) => {
  const url = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${id}`;
  return httpGet(url).then(requestCallResult => requestCallResult.data);
};
const getBooksWithRating = () => getBookListWithoutRating().then((allBooks) => {
  const allBooksCopy = allBooks.books;
  const allIds = allBooksCopy.map(book => book.id);
  const allPromises = allIds.map(id => getRatingFromBookId(id));
  return Promise.all(allPromises)
    .then(allRatings => allRatings.map(
      (rating, index) => Object.assign(allBooksCopy[index], rating),
    ));
});
const getBooksWithRatingByAuthor = () => getBooksWithRating()
  .then(allBooksWithRating => allBooksWithRating.reduce((acc, val) => {
    if (val.Author in acc) {
      acc[val.Author].push(val);
    } else {
      acc[val.Author] = [val];
    }
    return acc;
  }, {}));

module.exports = {
  getBookListWithoutRating,
  getRatingFromBookId,
  getBooksWithRating,
  getBooksWithRatingByAuthor,
};
