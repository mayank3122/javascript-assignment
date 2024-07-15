// Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used 
// as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(8, 2));
console.log(power(2, 3));
