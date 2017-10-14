var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");

beforeEach(function () {
  cheeseBurger = new Food ( "Cheese Burger" , 40 );
  });

  describe("Food", function () {

    it("should have a name", function() {
      assert.strictEqual( food.name , "Cheese Burger" );
    });

    it("should have a replenishment value", function () {
      assert.strictEqual( food.name , 40 );
    });
    
  });
