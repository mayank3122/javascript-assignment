// Write a JavaScript program to get the integers in range (x, y).
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]


function range(x, y) {
    if (x >= y - 1) {
        return [];
    } else {
        return [x + 1].concat(range(x + 1, y));
    }
}

console.log(range(2, 9));