var Hero = function (name, health, favouriteFood) {
  this.name = name;
  this.healthValue = 100;
  // shouldn't I be able to set this = to healthValue?
  this.favouriteFood = favouriteFood;
  this.toDo = [];
  // this.wallet = [];
}

Hero.prototype.sayName = function () {
return ("My name is " + this.name + "!");
};

Hero.prototype.addTask = function (task) {
this.toDo.push(task);
};

Hero.prototype.removeTask = function (index , deleteCount) {
this.toDo.splice(index , deleteCount);
};

















module.exports = Hero;
