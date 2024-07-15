// Write a JavaScript program to get the first n Fibonacci numbers.
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 
// 21, 34, . . . Each subsequent number is the sum of the previous two.


function fibonacci(n, a = 0, b = 1, sequence = []) {
    if (n === 0) {
        return sequence;
    }
    sequence.push(a);
    return fibonacci(n - 1, b, a + b, sequence);
}

console.log(fibonacci(5));
console.log(fibonacci(10));
