//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 

function rotateStr(str) {
    let arr = str.split('');

    function rotate() {
        let i = 0;
        while (i < arr.length) {
            const lastChar = arr.pop();

            arr.unshift(lastChar);

            console.log(arr.join(''));
            i++;
        }
    }
    rotate()
}
rotateStr('w3resource');