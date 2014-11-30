var temp = require("../app.js").test;

describe("test1", function() {
  it("should work", function() {
    expect(temp).toEqual([1, 2, 3]);
  })
});

