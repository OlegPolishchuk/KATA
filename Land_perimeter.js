// Task:
//     Given an array arr of strings complete the function landPerimeter by calculating
//     the total perimeter of all the islands. Each piece of land will be marked with 'X'
//     while the water fields are represented as 'O'. Consider each tile being a perfect 1 x
//     1piece of land. Some examples for better visualization:
//
//
//     ['XOOXO',
//         'XOOXO',
//         'OOOXO',
//         'XXOXO',
//         'OXOOO']
// or
//
//
// should return: "Total land perimeter: 24",
// while
//
//
//
//     ['XOOO',
//         'XOXO',
//         'XOXO',
//         'OOXX',
//         'OOOO']
//
//
//     should return: "Total land perimeter: 18"
//
// Good luck!

function landPerimeter(arr) {
    let result = 0;

    arr.forEach((cur, index) => {
        const subArr = cur.split('');

        subArr.forEach((cur, i) => {
            if (cur === 'X') {
                if(subArr[i-1] !== cur) { result += 1 }
                if(subArr[i+1] !== cur) { result += 1 }

                if (arr[index-1]) {
                    if (arr[index-1][i] !== cur) result +=1;
                } else { result += 1 }
                if (arr[index+1]) {
                    if (arr[index+1][i] !== cur) result +=1;
                } else { result += 1 }
            }
        })
    })
    return `Total land perimeter: ${result}`;
}

// console.log(landPerimeter(['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO'])); // 24
// console.log(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"])); // 52
console.log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"])); // 60