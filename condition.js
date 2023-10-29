// 3
let a = 4;
let b = 3;

const result = a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`;

console.log(result);

const score = 85; // Replace with the student's actual score
// 4
let grade;

if (score >= 80 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score < 80) {
  grade = "B";
} else if (score >= 60 && score < 70) {
  grade = "C";
} else if (score >= 50 && score < 60) {
  grade = "D";
} else if (score >= 0 && score < 50) {
  grade = "F";
} else {
  grade = "Invalid score"; 
}

console.log(`Score: ${score}, Grade: ${grade}`);
// 5

