// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
// You can guarantee that input is non-negative.
//
//     Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

const countBits = function(n) {
    return n === 0 ? 0 : n.toString(2).match(/1/g).length
};

console.log(countBits(1234)); // 5 <= 10011010010
console.log(countBits(0)); // 5 <= 10011010010
