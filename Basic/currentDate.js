//Write a JavaScript program to get the current date. 

const now = new Date();

let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();

day = day < 10 ? `0${day}` : day;
month = month < 10 ? `0${month}` : month;

const formattedDate = `${day}/${month}/${year}`;

console.log(formattedDate);
