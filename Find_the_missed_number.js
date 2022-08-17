// In this kata, you will be given a string containing numbers from a to b, one number can be missing from these numbers, then the string will be shuffled, you're expected to return an array of all possible missing numbers.
//
// Examples (input => output)
// Here's a string with numbers from 1 - 21, its missing one number and the string is then shuffled, your'e expected to return a list of possible missing numbers.
//
// 1, 21, "2198765123416171890101112131415"  => [ 12, 21 ]
// You won't be able to tell if its 21 or 12, you must return all possible values in an array.
//
//
// ## Another Example
// 5, 10, "578910" => [ 6 ]
//
//     ```javascript
// let str = "578910"
//
// findNumber(5, 10, str)
//   // => [ 6 ]
// Documentation:
// The parameters will be in order two numbers and a string:
//
// start => from
// stop => to
// string => numbers from start to stop in string form (shuffled), but missing one number
// Note:
//
// if there're no missing numbers return an empty list

function findNumber(start, stop, string){
    let count = '';

    for (let i = start; i <= stop; i++) {
        count += i;
    }

    for (const char of string) {
        count = count.replace(char, '');
    }

    const result = [];

    for (let i = start; i <= stop; i++) {
        let current = i.toString();

        if (current.length !== count.length) {
            continue;
        }

        for (const char of count) {
            current = current.replace(char, '');
        }

        if (current === '') {
            result.push(i);
        }
    }

    return result;
}

console.log(findNumber(1, 21, "1116122137143151617181920849510")); // [12, 21],
// console.log(findNumber(5, 10, "578910")); // [6]