// Exercise: Print numbers 1-100
console.log("--- Numbers 1-100 ---");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Exercise: Print even numbers 1-50
console.log("--- Even numbers 1-50 ---");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// Exercise: FizzBuzz
console.log("--- FizzBuzz ---");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Exercise: Triangle of stars
console.log("--- Triangle ---");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "*";
    }
    console.log(row);
}
