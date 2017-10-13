var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");

beforeEach(function () {
  wonderWoman = new Hero("Diana Prince", 100, "cheese burger");
  flyAirplane = new Task(5,10, 100);
});

describe("Hero", function() {
  it("should have a name", function() {
    assert.strictEqual(wonderWoman.name, "Diana Prince");
  });

  it("should have a favouriteFood", function() {
    assert.strictEqual(wonderWoman.favouriteFood, "cheese burger");
  });

  it("should have a health value", function() {
    assert.strictEqual(wonderWoman.healthValue, 100);
  });

  it("should be able add task", function(){
  wonderWoman.addTask(flyAirplane);
  assert.strictEqual(wonderWoman.toDo.length, 1);
});

// it("should be able remove task", function() {
//   wonderWoman.removeTask(task1);
//   assert.strictEqual(wonderWoman..length, 2);

});
