function reverseNumber(num) {
    let reversed = 0;
    
    while (num !== 0) {
        let digit = num % 10;
        
        reversed = reversed * 10 + digit;
        
        num = Math.floor(num / 10);
    }
    
    return reversed;
}

let x = 32243;
let reversed = reverseNumber(x);
console.log(`Reversed number of ${x} is ${reversed}`);
