var Hero = function (name, health, favouriteFood) {
  this.name = name;
  this.healthValue = 100;
  this.favouriteFood = favouriteFood;
  this.toDo = [];
}

Hero.prototype.addTask = function (task) {
this.toDo.push(task);

};
// Hero.prototype.sayName = function () {
//   console.log("My name is " + this.name.toString() + "!")
// };
















module.exports = Hero;
