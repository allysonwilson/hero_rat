var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");

beforeEach(function () {
  wonderWoman = new Hero("Diana Prince", 100, "cheese burger");
  flyAirplane = new Task(5,10, 100);
  eatCheeseBurger = new Task(-5 , 100, 5);
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

  it("should be able to say name", function() {
    assert.strictEqual(wonderWoman.sayName(), "My name is Diana Prince!");
  });

  it("should be able add task", function() {
    wonderWoman.addTask(flyAirplane);
    assert.strictEqual(wonderWoman.toDo.length, 1);
  });

  it("should be able remove task", function() {
    wonderWoman.addTask(flyAirplane);
    wonderWoman.addTask(flyAirplane);
    wonderWoman.addTask(eatCheeseBurger);
    wonderWoman.removeTask(0, 1);
    assert.strictEqual(wonderWoman.toDo.length, 2);
  });

  // it("should be able to eat to increase healthValue", function() {
  //
  //   assert.strictEqual(wonderWoman.eat(),)
  // });
  // is this the right way to test this method, or should I be checking
  // array for current contents?
});
