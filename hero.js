var Hero = function (name, health, favouriteFood) {
  this.name = name;
  this.healthValue = 100;
  // shouldn't I be able to set this = to healthValue?
  this.favouriteFood = favouriteFood;
  this.toDo = [];
  // this.wallet = [];
};

Hero.prototype.sayName = function () {
  return ("My name is " + this.name + "!");
};

Hero.prototype.addTask = function (task) {
  this.toDo.push(task);
};

Hero.prototype.removeTask = function (index , deleteCount) {
  this.toDo.splice(index , deleteCount);
};

// Hero.prototype.eat = function () {
//   var newHealthValue = food.replenishmentValue += this.healthValue;
//   return newHealthValue;
// };

// has to be able to take in the food with its replenishmentValue



// A hero should be able to eat food, and health should go up by the replenishment value
// If the food is their favourite food, their health should go up by 1.5 * value.
// A hero should be able to sort their tasks by difficulty, urgency or reward.
// A hero should be able to view tasks that are marked as completed or incomplete.










module.exports = Hero;
