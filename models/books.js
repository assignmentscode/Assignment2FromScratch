module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    likes: DataTypes.BOOLEAN,
  }, {});
  books.storeData = (inputId, inputBookName, inputAuthorName, inputRating) => books.create({
    id: inputId,
    name: inputBookName,
    author: inputAuthorName,
    rating: inputRating,
  }).then(response => response);
  books.getBookDetailsById = inputId => books.findOne({
    where: { id: inputId },
  }).then(response => response);
  books.setLike = inputId => books.update(
    {
      likes: true,
    },
    {
      where: {
        id: inputId,
      },
    },
  ).then(rowsAffected => rowsAffected);
  books.disLike = inputId => books.update(
    {
      likes: false,
    },
    {
      where: {
        id: inputId,
      },
    },
  ).then(rowsAffected => rowsAffected);
  return books;
};
