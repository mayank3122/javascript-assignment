function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

let num1 = 56;
let num2 = 98;
let result = gcd(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is ${result}`);