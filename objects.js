// Exercise 1: Object Basics
console.log("--- Object Basics ---");

const person = {
    firstName: "Kennedy",
    lastName: "Kamau",
    age: 27,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "Nairobi", 
        country: "Kenya"
    }
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

person.age = 28;
person.email = "njugunakamaufrazier13@gmail.com";
delete person.isStudent;
console.log(person);


//Exercise 2: Object methods
console.log("--- Objects Methods ---");

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(5, 3));
 

//Exercise 3: Object Iteration
console.log("--- Object Iteration ---");

const scores = {
    math: 95,
    english: 88,
    science: 92
};

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}
