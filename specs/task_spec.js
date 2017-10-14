var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");

beforeEach(function () {
  flyAirplane = new Task(5, 10, 100);
  eatCheeseBurger = new Task(-5 , 100, 5);
});


// why does Task need to be in quotes?
describe( "Task", function(){

  it("should have a difficulty level", function(){
    assert.strictEqual(flyAirplane.difficulty, 5);
  });

  it("should have an urgency level", function(){
    assert.strictEqual(flyAirplane.urgency, 10);
  });

  it("should have a reward", function(){
    assert.strictEqual(flyAirplane.reward, 100);
  });

  it("should be able to be marked complete", function(){
    // wonderWoman.flyAirplane.complete()
    // assert.strictEqual(flyAirplane.complete(), true);
  });

}) ;
