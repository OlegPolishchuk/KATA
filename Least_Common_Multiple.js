// Write a function that calculates the least common multiple of its arguments;
// each argument is assumed to be a non-negative integer.
// In the case that there are no arguments (or the provided array in compiled languages is empty),
// return 1. If any argument is 0, return 0.

const lcm = (...args) => {
    const gcd = (x, y) => (!y ? x : gcd(y, x % y));
    const _lcm = (x, y) => (x * y) / gcd(x, y);
    return [...args].reduce((a, b) => _lcm(a, b));
}

console.log(lcm(2, 5, 3)); // 30
// console.log(lcm(3, 5, 2)); // 30
// console.log(lcm(2, 3,4)); // 12
// console.log(lcm(14, 17, 15)); // 12
// console.log(lcm(9)); // 9