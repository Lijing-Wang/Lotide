const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('assert');

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

describe("#middle", () => {
  it("returns [] for []", () => {
    assert.deepStrictEqual(middle([]), []);
  });
});
  