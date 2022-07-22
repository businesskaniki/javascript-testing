const capitalize = require('./test4.js');


test('convert first letter to uppercase', () => {
    expect(capitalize('nick')).toBe('Nick');
  });