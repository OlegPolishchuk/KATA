// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

const getCount = (str)=> {
    let vowel = /[aeiou]/g;

    return str.match(vowel) !== null ? str.match(vowel).length : 0
};

console.log(getCount("abracadabra"));
console.log(getCount("my pyx"));