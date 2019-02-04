const httpGet = require('./../../../../src/utils/http/index');

describe('httpGet () :', () => {
  it('should return a promise', () => {
    const httpGetResponse = httpGet('http://www.google.com');
    expect(typeof (httpGetResponse.then)).toEqual('function');
  });
});
