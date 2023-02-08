// Convert a hash into an array. Nothing more, Nothing less.
//
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into
//
//   [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.
//
//   Good Luck!

function convertHashToArray(hash){
 return Object.entries(hash).sort()
}

console.log(convertHashToArray({name: "Jeremy"})); //[["name", "Jeremy"]]
console.log(convertHashToArray({name: "Jeremy", age: 24})); //[["age", 24], ["name", "Jeremy"]]