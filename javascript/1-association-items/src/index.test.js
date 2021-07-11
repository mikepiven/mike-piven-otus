import { maxItemAssociation  } from './maxItemAssociation.js'
import { sum } from './sum.js'

describe("maxItemAssociation", () => {
  it("Initial requirements", () => {
    const data = [
      ["a", "b"],["a", "c"],["d", "e"]
    ];
    const result = ["a", "b", "c"];
    expect(maxItemAssociation(data)).toStrictEqual(result);
  });
  it("Empty payload", () => {
    const data = []
    const result = [];
    expect(maxItemAssociation(data)).toStrictEqual(result);
  });
  it("Same length of association", () => {
    const data = [
      ["x", "y"], ["x", "z"], // =>  ["x", "y", "z"];
      ["a", "b"], ["a", "c"], // =>  ["a", "b", "c"]; <=
      ["f", "m"], ["f", "e"], // =>  ["f", "m", "e"];
      ["d", "e"], ["b", "x"], // =>  ["d", "e", "x"];
      ["b", "v", "o", 'a']
    ];
    const result = ["a", "b", "c"];
    expect(maxItemAssociation(data)).toStrictEqual(result);
  });
  it("One association", () => {
    const data = [ ["b", "v", "o", 'a'] ];
    const result = [];
    expect(maxItemAssociation(data)).toStrictEqual(result);
  });
});


describe("sum", () => {
  it("Initial requirements", () => {
    expect(sum(1)(2)(3)()).toStrictEqual(6);
  });
})
