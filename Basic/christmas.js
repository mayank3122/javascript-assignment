// Write a JavaScript program to calculate days left until next Christmas. 

const today = new Date();

const currentYear = today.getFullYear();

const christmas = new Date(currentYear, 11, 25);

const difference = christmas - today;

const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

console.log(`There are ${daysLeft} days left until Christmas.`);