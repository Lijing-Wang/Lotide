const assert = require('assert');
const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual(head("not an Array"), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["a", "b", "c"]), "a");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["onlyOne"]), "onlyOne");
assertEqual(head([]), undefined);

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});

