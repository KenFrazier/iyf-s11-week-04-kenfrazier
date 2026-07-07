function reverseStringLoop(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;

}

console.log(reverseStringLoop("hello")); // olleh

function reverseStringLoop(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseStringLoop("hello")); // olleh

function reverseStringRecursive(str) {
  if (str === '') return '';
  return reverseStringRecursive(str.slice(1)) + str[0];
}

console.log(reverseStringRecursive("hello")); // olleh
