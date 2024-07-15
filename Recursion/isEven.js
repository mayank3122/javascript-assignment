// Write a JavaScript program to check whether a number is even or not.

function isEven(n) {
    if (n === 0) {
        return true;
    }
    else if (n === 1) {
        return false;
    }
    else {
        return isEven(n - 2);
    }
}

console.log(isEven(7));  
console.log(isEven(10)); 
