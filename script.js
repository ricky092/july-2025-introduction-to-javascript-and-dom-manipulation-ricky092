// ================================
// PART 1: Variables & Conditionals
// ================================
let userName = "Ridwan";
let userAge = 20;

// Conditional example
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// ================================
// PART 2: Custom Functions
// ================================

// Function 1: Greeting
function greetUser(name) {
  return "Hello, " + name + "! Welcome to the site.";
}

// Function 2: Calculate Sum of Numbers
function calculateSum(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

// ================================
// PART 3: Loops
// ================================

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

// Example 2: While loop
let counter = 0;
while (counter < 3) {
  console.log("While loop count:", counter);
  counter++;
}

// ================================
// PART 4: DOM Interactions
// ================================

// Interaction 1: Show greeting on button click
document.getElementById("greetBtn").addEventListener("click", function () {
  document.getElementById("greetMessage").innerText = greetUser(userName);
});

// Interaction 2: Calculate sum and show result
document.getElementById("calcBtn").addEventListener("click", function () {
  let numbers = [5, 10, 15];
  let sum = calculateSum(numbers);
  document.getElementById("sumResult").innerText = "Sum: " + sum;
});

// Interaction 3: Populate a list dynamically
let listItems = ["Apple", "Banana", "Cherry"];
let listContainer = document.getElementById("listContainer");

listItems.forEach(function (item) {
  let li = document.createElement("li");
  li.innerText = item;
  listContainer.appendChild(li);
});
