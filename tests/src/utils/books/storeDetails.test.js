/**
 * @jest-environment node
 */
const storeBookDetailsInDatabase = require('./../../../../src/utils/books/storeDetails');
const model = require('./../../../../models');

describe('storeBookDetailsInDatabase ():', () => {
  beforeAll(async () => {
    await model.books.truncate();
  });
  afterAll(async () => {
    model.sequelize.close();
  });
  it('should store the details into table books in db', async () => {
    await storeBookDetailsInDatabase();
    expect(await model.books.count() > 0).toEqual(true);
  });
  it('should be able to retrieve the details stored into db', async () => {
    await model.books.findAll().then((result) => {
      expect(result[0].id).not.toEqual(undefined);
    });
  });
});
