// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.
//
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
    if (parens[0] === ')') return false
    if (parens[parens.length-1] === '(') return false

    const newStr = parens.replace(/\(\)/g, '')

    let result = 0
    for (let i = 0; i < newStr.length; i++) {
        result += newStr[i] === '(' ? 1 : -1
    }
    return newStr[0] === ')' || newStr[newStr.length-1] === '(' ? false :  result === 0
}

// console.log(validParentheses("(())((()())())")); // true
// console.log(validParentheses(")(()))")); // false
// console.log(validParentheses("())(()")); // false
console.log(validParentheses("((((()))))")); // true