// Function to find the larger of two integers
function findLarger(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let num1 = 10, num2 = 5;
let largerNumber = findLarger(num1, num2);

console.log(`The larger number between ${num1} and ${num2} is: ${largerNumber}`);


// Write a JavaScript conditional statement to find the largest of five numbers. 
// Display an alert box to show the result.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0


let numbers = [-5, -2, -6, 0, -1];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log(`The largest number is: ${largest}`);
