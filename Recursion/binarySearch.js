// Write a JavaScript program for binary search.
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) / 2);
    console.log(mid, '/////mid');

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right);
    } else {
        return binarySearch(arr, target, left, mid - 1);
    }
}


const sampleArray = [0, 1, 2, 3, 4, 5, 6];
console.log(binarySearch(sampleArray, 5));  
console.log(binarySearch(sampleArray, 3));  
console.log(binarySearch(sampleArray, 7));
