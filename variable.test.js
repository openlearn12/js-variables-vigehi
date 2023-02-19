const challenge = require('./challenge');

// Test for Challenge 1
let num = 10;
let result = num * 5;
if (result === 50) {
  console.log("Challenge 1 passed.");
} else {
  console.log("Challenge 1 failed.");
}

// Test for Challenge 2
let name = "John";
let age = 30;
let expectedOutput = "My name is John and I am 30 years old.";
let actualOutput = `My name is ${name} and I am ${age} years old.`;
if (actualOutput === expectedOutput) {
  console.log("Challenge 2 passed.");
} else {
  console.log("Challenge 2 failed.");
}

// Test for Challenge 3
let isOnline = true;
let isLoggedIn = isOnline;
if (isLoggedIn === isOnline) {
  console.log("Challenge 3 passed.");
} else {
  console.log("Challenge 3 failed.");
}

// Test for Challenge 4
let shoppingCart = ["shirt", "shoes", "pants", "hat"];
let numItems = shoppingCart.length;
let expectedOutput = "The shopping cart contains 4 items: shirt, shoes, pants, hat";
let actualOutput = `The shopping cart contains ${numItems} items: ${shoppingCart.join(', ')}`;
if (actualOutput === expectedOutput) {
  console.log("Challenge 4 passed.");
} else {
  console.log("Challenge 4 failed.");
}

// Test for Challenge 5
let person = {
  name: "John",
  age: 30,
  address: "123 Main St"
};
let expectedOutput = {
  name: "John",
  age: 30,
  address: "123 Main St"
};
if (JSON.stringify(person) === JSON.stringify(expectedOutput)) {
  console.log("Challenge 5 passed.");
} else {
  console.log("Challenge 5 failed.");
}

// Test for Challenge 6
let fruits = ["apple", "banana", "orange", "grape"];
fruits.push("pineapple");
fruits.splice(fruits.indexOf("banana"), 1);
let expectedOutput = ["apple", "orange", "grape", "pineapple"];
if (JSON.stringify(fruits) === JSON.stringify(expectedOutput)) {
  console.log("Challenge 6 passed.");
} else {
  console.log("Challenge 6 failed.");
}

// Test for Challenge 7
let sentence = "The quick brown fox jumps over the lazy dog.";
sentence = sentence.replace("jumps", "leaps").toUpperCase();
let expectedOutput = "THE QUICK BROWN FOX LEAPS OVER THE LAZY DOG.";
if (sentence === expectedOutput) {
  console.log("Challenge 7 passed.");
} else {
  console.log("Challenge 7 failed.");
}
