function isPalindrome(str) {
    str = str.toLowerCase();
    
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}

let string1 = "Madam";
console.log(`Is "${string1}" a palindrome?`, isPalindrome(string1));

let string2 = "Hello";
console.log(`Is "${string2}" a palindrome?`, isPalindrome(string2));