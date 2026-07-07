// Exercise 1: Number Operations
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

let count = 0;
count++;
console.log(count);
count--;
console.log(count);

// Exercise2: String Operations
let firstName = "Jeff";
let lastName = "Kuria";
let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message  = `Your name has ${firstName.length} characters.`;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Jeff"));

// Exercise 3: Comparison & Logical Operators
console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

console.log(true && true);
console.log(true || false);
console.log(!true);

// Challenge
let birthYear = 1999;
let currentYear = 2026;
let age = currentYear - birthYear;

let ageInDays = age * 365.25;
let ageInHours = ageInDays * 24;
let yearYouTurn100 = birthYear + 100;

console.log(`Age in days: ${Math.round(ageInDays)}`);
console.log(`Age in hours: ${Math.round(ageInHours)}`);
console.log(`You'll turn 100 in: ${yearYouTurn100}`);
