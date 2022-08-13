var readlineSync = require("readline-sync");

var n = readlineSync.question("Enter the no of students: ");
console.log("");

var name = '';
var highestMark = 0;

for (var i = 0; i < n; i++) {
  var studentName = readlineSync.question("Enter" + " student" + (i + 1) + " name: ");
  var unitTestMarks = parseInt(readlineSync.question("Enter the marks obtained in unit test: "));
  var preFinalMarks = parseInt(readlineSync.question("Enter the marks obtained in pre final: "));
  var finalMarks = parseInt(readlineSync.question("Enter the marks obtained in final: "));

  var totalMarks = unitTestMarks + preFinalMarks + finalMarks;
  var averageMarks = totalMarks / 3;
  console.log("");
  console.log("Total marks obtained by " + studentName + " is: " + totalMarks);
  console.log("Average marks obtained by " + studentName + " is: " + averageMarks);
  console.log("......................................");

  if (totalMarks > highestMark) {
    highestMark = totalMarks;
    name = studentName;
  }
}
console.log(name + " has the highest marks.");