const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

const names = students.map(student => student.name);
const highAchievers = students.filter(student => student.grade > 80);
const charlie = students.find(student => student.name === "Charlie");
const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
const csMajors = students.filter(student => student.major === "CS");
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
const hasTopStudent = students.some(student => student.grade > 90);
const allPassing = students.every(student => student.grade >= 60);

console.log("Names:", names);
console.log("High achievers:", highAchievers);
console.log("Charlie:", charlie);
console.log("Average grade:", avgGrade);
console.log("CS majors:", csMajors);
console.log("Sorted by grade:", sortedByGrade);
console.log("Has top student (>90):", hasTopStudent);
console.log("All passing:", allPassing);
console.log("Original students (should be unsorted):", students.map(s => s.name));
