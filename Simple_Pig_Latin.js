// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
//     Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



function pigIt(str){
    return str
        .split(' ')
        .map(el =>{
            const punctMark = /\W/gi.test(el) ? '' : 'ay'
            return el.slice(1) + '' + el[0] + punctMark
        })
        .join(' ')
}

// console.log(pigIt('Pig Latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('O tempora o mores !')); // Oay emporatay oay oresmay !ay