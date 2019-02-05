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
  afterAll(async () => {
    model.sequelize.close();
  });
  it('should return the result that was inserted', async () => {
    await model.books.storeData(1, 'Learning C++', 'Denis Ritchie', 8.9);
    await model.books.getBookDetailsById(1).then((result) => {
      expect(result.dataValues.name).toEqual('Learning C++');
    });
  });
});
