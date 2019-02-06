const model = require('../../models');

describe('storeData ()', () => {
  beforeAll(async () => {
    await model.books.truncate();
  });
  it('should insert a book detail into book database', async () => {
    await model.books.storeData(1, 'Learning C++', 'Denis Ritchie', 9.3);
    expect(await model.books.count()).toEqual(1);
  });
  it('should insert a book detail into book database', async () => {
    await model.books.findById(1).then((result) => {
      expect(result.name).toEqual('Learning C++');
    });
  });
});
describe('getBookDetailsById ()', () => {
  beforeEach(async () => {
    await model.books.truncate();
  });
  // it('should return the result that was inserted', async () => {
  //   await model.books.storeData(1, 'Learning C++', 'Denis Ritchie', 8.9);
  //   await model.books.getBookDetailsById(1).then((result) => {
  //     expect(result.dataValues.name).toEqual('Learning C++');
  //   });
  // });
  it('should return the result that was inserted', async () => {
    await model.books.storeData(1, 'Learning C++', 'Denis Ritchie', 8.9);
    const bookDetails = await model.books.getBookDetailsById(1);
    expect(bookDetails.dataValues.name).toEqual('Learning C++');
  });
});

describe('setLike ()', () => {
  beforeAll(async () => {
    model.books.update({
      likes: null,
    },
    {
      where: {
        id: 1,
      },
    });
  });
  it('should return the null value in likes column', async () => {
    await model.books.findById(1).then((result) => {
      expect(result.likes).toEqual(null);
    });
  });
  it('should like then book with given id', async () => {
    await model.books.setLike(1);
    await model.books.findById(1).then((result) => {
      expect(result.likes).toEqual(true);
    });
  });
});

describe('disLike ()', () => {
  afterAll(async () => {
    model.sequelize.close();
  });
  it('should unLike then book with given id', async () => {
    await model.books.disLike(1);
    await model.books.findById(1).then((result) => {
      expect(result.likes).toEqual(false);
    });
  });
});
