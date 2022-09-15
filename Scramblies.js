// Complete the function scramble(str1, str2) that returns true if a portion of str1
// characters can be rearranged to match str2, otherwise returns false.
//
//     Notes:
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.
//     Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function assignValue(obj,property){
    if (obj[property]){
        obj[property] += 1
    } else {
        obj[property] = 0;
        obj[property] += 1;
    }
}

function scramble(str1, str2) {
    // Execution Timed Out (12000 ms) !!!!
    // let resultStr = str1;
    //
    // return str2.split('').every(current => {
    //     const regExp = new RegExp(current, 'gi');
    //     const isTrue = regExp.test(resultStr)
    //
    //     if (isTrue) {
    //         const index = resultStr.indexOf(current);
    //         // resultStr = resultStr.replace(current, '');
    //         resultStr = resultStr.slice(0, index) + resultStr.slice(index + 1)
    //         return true
    //     }
    //     return false;
    // })

    const letters1 = {};
    const letters2 = {};

    str1.split('').forEach(letter => {
       assignValue(letters1, letter)
    })
    console.log(letters1)
    str2.split('').forEach(letter => {
        assignValue(letters2, letter)
    })

    for (let letter in letters2) {
        if (!letters1[letter]) { return false }
        if(letters2[letter] > letters1[letter]) { return false }
    }

    return true;
}

console.log(scramble('cedewaraaossoqqyt', 'codewars')); // true
// console.log(scramble('rkqodlw', 'world')); // true
// console.log(scramble('katas', 'steak')); // false
// console.log(scramble('scriptjavx', 'javascript')); // false
// console.log(scramble('scriptingjava', 'javascript'));// true
// console.log(scramble('scriptsjava', 'javascripts'));//true
// console.log(scramble('javscripts', 'javascript')); //false
// console.log(scramble('jscripts', 'javascript')); //false
// console.log(scramble('aabbcamaomsccdd', 'commas')); //true
// console.log(scramble('commas', 'commas'));//true
// console.log(scramble('sammoc', 'commas'));//true