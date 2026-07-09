const numbers = [3, -7, 12, -2, 8, 15, -1, 4];

// 1. Double all numbers in an array
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// 2. Filter out negative numbers
const positives = numbers.filter(num => num >= 0);
console.log("Positives only:", positives);

// 3. Find the first number greater than 10
const firstOverTen = numbers.find(num => num > 10);
console.log("First over 10:", firstOverTen);

// 4. Calculate the product of all numbers
const product = numbers.reduce((total, num) => total * num, 1);
console.log("Product of all:", product);
