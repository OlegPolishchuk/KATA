// Given an array of integers, find the one that appears an odd number of times.
//
//     There will always be only one integer that appears an odd number of times.
//
//     Examples
//     [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


// this is work, but it is not a good solution
// const findOdd = (arr) => {
//     if (arr.length === 1) return arr[0]
//
//
//     let numbCount = {}
//
//     arr.forEach((el, i, arr) => {
//         if (numbCount[arr[i]]) {
//             if (arr.indexOf(el, i + 1)) {
//                 numbCount[arr[i]] += 1
//             }
//         } else {
//             numbCount[arr[i]] = 1
//         }
//     })
//
//
//     for (let key in numbCount) {
//         if (numbCount[key] === 1) return +key
//         if (numbCount[key] % 2 !== 0) return +key
//     }
// }

// another solution:

const  findOdd = (arr) => {
    let x;
    arr.forEach((el,i) => {
        x = x ^ arr[i]
    })
    return x
}


// solution from Codewars
const findOddSolution = (A) => {
    return A.reduce((l, r) => l ^ r);
}



// console.log(findOdd([1, 1, 2])); // 2
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
// console.log(findOddSolution([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ])); // 5