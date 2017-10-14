var Task = function (difficulty, urgency, reward ) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
}


// Task.prototype.complete = function () {
//   var notComplete = new Boolean(false);
//   if (!notComplete) {
//     return true;
//   } else {
//     return false;
//   }
// };


// when hero receives award == task complete
// if complete == true,
// heroWallet += reward



module.exports = Task;


// A task should be able to be marked as completed
