let num1 = 0;
let num2 = -1;
let num3 = 4;

let first, second, third;

if (num1 >= num2 && num1 >= num3) {
    first = num1;
    if (num2 >= num3) {
        second = num2;
        third = num3;
    } else {
        second = num3;
        third = num2;
    }
} else if (num2 >= num1 && num2 >= num3) {
    first = num2;
    if (num1 >= num3) {
        second = num1;
        third = num3;
    } else {
        second = num3;
        third = num1;
    }
} else {
    first = num3;
    if (num1 >= num2) {
        second = num1;
        third = num2;
    } else {
        second = num2;
        third = num1;
    }
}

let result = `${first}, ${second}, ${third}`;

console.log(`Sorted numbers: ${result}`);
