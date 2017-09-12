var hello = require('./index');

describe('test-node-module', function() {
  it('says "Hello World!"', function() {
    expect(hello()).toBe('Hello World!');
  });
})
