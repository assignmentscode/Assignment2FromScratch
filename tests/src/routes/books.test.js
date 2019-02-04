/**
 * @jest-environment node
 */

const { server } = require('./../../../src/server');

describe('Test for /books GET route', () => {
  it('should return all the books grouped by author', async () => {
    const options = {
      method: 'GET',
      url: '/books',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
    expect(Object.keys(response.result).length).toEqual(2);
  });
});
