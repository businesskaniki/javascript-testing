const stringLength = require('./test1.js');

test("stringLength should return character counts", () => {
  expect(stringLength("hey")).toBe(3);
});
