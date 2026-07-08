// Exercise 2.1: calculateArea
const calculateArea = (width, height) => width * height;

console.log(calculateArea(5, 3)); //expect 15
console.log(calculateArea(10, 2)); //expect 20

// Exercise 2.2: celsiusToFahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}

console.log(celsiusToFahrenheit(0));   // expect 32
console.log(celsiusToFahrenheit(100)); // expect 212

// Exercise 2.3: isEven
const isEven = (number) => number % 2 === 0;

console.log(isEven(4)); // expect true
console.log(isEven(7)); // expect falseo

// Exercise 2.4: getInitials
function getInitials(fullName) {
    const words = fullName.split(" ");
    const firstLetters = words.map(word => word[0]);
    return firstLetters.join("").toUpperCase();
}

console.log(getInitials("Jeff Kuria"));        // expect JK
console.log(getInitials("Frazier Kennedy")); // expect FK

// Exercise 2.5: Reverse String
// Exercise 2.5: Reverse String
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString('queue')); // expect eueuq

// Day 3: Find Largest Number (loop version)
function findLargestLoop(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

console.log(findLargestLoop([3, 7, 2, 9, 4])); // expect 9
console.log(findLargestLoop([10, 5, 1]));      // expect 10
