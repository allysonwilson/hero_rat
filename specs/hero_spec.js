var assert = require("assert");
var Hero = require("../hero.js");

beforeEach(function () {
  wonderWoman = new Hero("Diana Prince", 100, "cheese burger");
});

describe("Hero", function() {
  it("should have a favouriteFood", function() {
    assert.strictEqual(wonderWoman.favouriteFood, "cheese burger");
  });
});
