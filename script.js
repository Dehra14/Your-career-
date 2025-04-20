let number = promt("Enter a number:");
number = Number(number);
if (isNaN(number)){
    alert("That is not a valid number");
}
else{
    if (number % 2 === 0){
        alert("The number is even");
    }
    else{
        alert("The number is not even")
    }
}


let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let operator = prompt("Enter an operator:");
num1 = Number(num1);
num2 = Number(num2);
let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 === 0) {
        result = "Cannot divide by zero!";
    } else {
        result = num1 / num2;
    }
} else {
    result = "Invalid operator!";
}

alert("Result: " + result)


let age = prompt("Enter your age:");
age = Number(age);

if (age >= 18) {
    alert("Eligible");
} else {
    alert("Not eligible");
}


for (let i = 1; i <= 10; i++) {
    console.log(i);
}


let num = prompt("Enter a number:");
num = Number(num);
for (let i = 1; i <= 12; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}


let score = prompt("Enter your score (0-100):");
score = Number(score);

if (score >= 70 && score <= 100) {
  alert("Excellent");
} else if (score >= 50 && score <= 69) {
  alert("Good");
} else if (score >= 0 && score < 50) {
  alert("Needs Improvement");
} else {
  alert("Invalid score. Please enter a number between 0 and 100.");
}


let randomNumber = Math.floor(Math.random() * 5) + 1;
let userGuess = prompt("Guess a number between 1 and 5:");
userGuess = Number(userGuess);
if (userGuess === randomNumber) {
    alert(" You got the number right.");
} 
else {
    alert("The correct number was " + randomNumber + ".");
}


for (let i = 1; i <= 15; i++) {
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