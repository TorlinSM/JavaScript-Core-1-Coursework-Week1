let numberOfStudents = 10;
let numberOfMentors = 3;
let Students = "Percentage students: ";
let Mentors = "Percentage mentors: ";
let sum = 10 + 3;
function getPercentage(value, total) {
    return Math.round(100 * value/total) + "%";
}
console.log("Percentage students: " + getPercentage(numberOfStudents, sum));
console.log("Percentage mentors: " + getPercentage(numberOfMentors, sum));