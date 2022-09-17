// You need to write regex that will validate a password to make sure it meets the following criteria:
//
//     At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)

// const REGEXP = /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*[\W|_])).{6,}/;
const REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;

console.log(REGEXP.test('fjd3IR9')); // true