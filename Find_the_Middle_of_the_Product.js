// / Given a string of characters, I want the function findMiddle()/find_middle()
// to return the middle number in the product of each digit in the string.
//
//     Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.
//
//     Not all strings will contain digits. In this case and the case for any non-strings, return -1.
//
// If the product has an even number of digits, return the middle two digits
//
// Example: 1563 -> 56
//
// NOTE: Remove leading zeros if product is even and the first digit of the two is a zero. Example 2016 -> 1
//
function findMiddle(str){
    let regExp = /\d/g;

    if (typeof str !== "string" || str.match(regExp) === null) return -1;

    let multiply = str.match(regExp).reduce((a,b)=>a*b).toString().split('');
    let result;


    if (multiply.length % 2 !== 0){
        result = multiply[Math.floor(multiply.length/2)]
    } else {
        result = `${multiply[Math.floor(multiply.length/2 - 1)]}`+ `${multiply[Math.floor(multiply.length/2)]}`
    }

    return parseInt(result);
}

console.log(findMiddle('s7d8jd9')); // 0 7*8*9 = 504 => по центру 0
console.log(findMiddle('58jd9fgh/fgh6s.,sdf'));
console.log(findMiddle(546));