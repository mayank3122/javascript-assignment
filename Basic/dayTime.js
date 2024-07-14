//Write a JavaScript program to display the current day and time in the following format.  

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const now = new Date();

const day = weekdays[now.getDay()];

let hours = now.getHours();
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;
const minutes = now.getMinutes();
const seconds = now.getSeconds();

const timeString = `${hours} ${ampm} : ${minutes} : ${seconds}`;

console.log(`Today is : ${day}.`);
console.log(`Current time is : ${timeString}`);