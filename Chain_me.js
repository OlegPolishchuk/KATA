// Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).
//
// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input).
// Return the final value after execution is complete.
//
//     function add(num) {
//     return num + 1;
// }
//
// function mult(num) {
//     return num * 30;
// }
//
// chain(2, [add, mult]);
// // returns 90;

function chain(input, func) {
    try { return func.reduce((acc, el) => el(acc), input)
    }
    catch {
        return "Error: chain function does not work"
    }
}

console.log(chain(2, [add, mult]));


