let numberOfStudents = 10;
let numberOfMentors = 3;
let Students = "Percentage students: ";
let Mentors = "Percentage mentors: ";
let sum = 10 + 3;
function percentage1(numberOfStudents) {
    return (100 * numberOfStudents)/sum;
}
percentage1 (numberOfStudents);
function percentage2(numberOfMentors) {
    return (100 * numberOfMentors)/sum;
}
percentage2 (numberOfMentors);
let message1 = Students + Math.round(percentage1 (numberOfStudents)) + "%";
let message2 = Mentors + Math.round(percentage2 (numberOfMentors)) + "%";
console.log(message1);
console.log(message2);