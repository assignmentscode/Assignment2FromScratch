const httpGet = require('./../http/index');

const getBookListWithoutRating = () => {
  const url = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
  return httpGet(url).then(requestResult => requestResult.data);
};
const getRatingFromBookId = (id) => {
  const url = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${id}`;
  return httpGet(url).then(requestCallResult => requestCallResult.data);
};

module.exports = { getBookListWithoutRating, getRatingFromBookId };
