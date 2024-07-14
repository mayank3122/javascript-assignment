//Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050. 

const startYear = 2014;
const endYear = 2050;
const sundays = [];
for (let year = startYear; year <= endYear; year++) {
    const date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
        sundays.push(year);
    }
}

console.log(sundays.join(", "));
