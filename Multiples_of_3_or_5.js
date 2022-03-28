// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
//
// Note: If the number is a multiple of both 3 and 5, only count it once.


const solution = (number) => {
    if (number <= 0) return 0

    let result = 0;

    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i
        }
    }
    return result
}

const solutionForCodewars = (number) => {
    if (number <= 0) return 0;

    return [...new Array(number).keys()].filter(el=> el % 3 === 0 || el % 5 === 0).reduce((a,b) => a + b)
}


console.log(solution(9)); // 23 => 3 + 5 + 6 + 9
console.log(solutionForCodewars(15)); // 23 => 3 + 5 + 6 + 9