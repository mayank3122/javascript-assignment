function sumArray(array) {
    if (array.length === 0) {
        return 0;
    }
    return array[0] + sumArray(array.slice(1));
}

var array = [1, 2, 3, 4, 5, 6];
var result = sumArray(array);
console.log(`The sum of the array is ${result}`);