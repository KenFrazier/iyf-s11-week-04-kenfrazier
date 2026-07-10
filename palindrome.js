function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

// Test
console.log(isPalindrome("racecar"));                        // true
console.log(isPalindrome("hello"));                          // false
console.log(isPalindrome("A man a plan a canal Panama"));    // true
console.log(isPalindrome("Was it a car or a cat I saw?"));   // true
console.log(isPalindrome("JavaScript"));                     // false
