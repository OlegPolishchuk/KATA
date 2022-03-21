// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

const isIsogram = (str) =>{
    const strArr = str.toLowerCase().split('');
    const result = [];

    strArr.forEach((letter,i) => {
        let substr = str.toLowerCase().slice(i+1)

        if (substr.includes(letter)) result.push(letter)
    })

    return result.length ? false : true
}

// interesting way from codewars
//  return new Set(str.toUpperCase()).size == str.length;

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));