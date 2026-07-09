// Approach 1: Using Set
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

// Approach 2: Using filter
function removeDuplicatesFilter(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

// Test
const input = [1, 2, 2, 3, 4, 4, 5];

console.log("Original:", input);
console.log("Using Set:", removeDuplicatesSet(input));
console.log("Using filter:", removeDuplicatesFilter(input));

