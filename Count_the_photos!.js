// In a string we describe a road. There are cars that move to the right and we denote them with ">"
// and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
//     A camera takes a photo of a car if it moves to the direction of the camera.
//
//     Task
// Your task is to write a function such that, for the input string that represents a road as described,
// returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.
//
//
//     Examples
// For ">>." -> 2 photos were taken
// For ".>>" -> 0 photos were taken
// For ">.<." -> 3 photos were taken
// For ".><.>>.<<" -> 11 photos were taken

function countPhotos(road) {
    // let index = road.indexOf('.');
    //
    // if(index === -1) return 0;
    // let count = 0;
    //
    // for(let i =0; i < index; i++) {
    //     if (road[i] === '>') {
    //         count += 1
    //     }
    // }
    //
    // for (let i = index; i< road.length; i++) {
    //     if(road[i] === '<') {
    //         count += 1
    //     }
    // }
    //
    // let subStr = road.slice(0, index) + road.slice(index+1)
    // return count + countPhotos(subStr)

    // let str = road;
    // let result = 0;
    //
    // while(str.indexOf('.') >= 0) {
    //     let index = str.indexOf('.')
    //     for (let i = 0; i < index; i++) {
    //         if (str[i] === '>') {
    //             result += 1
    //         }
    //     }
    //     for (let i = index +1; i < str.length; i++) {
    //         if (str[i] === '<') {
    //             result += 1
    //         }
    //     }
    //     // str = str.replace('.', '');
    //     str = str.slice(0, index) + str.slice(index+1)
    // }
    // return result;
    // let res = 0;
    //
    // for (let i = 0; i < road.length; i++) {
    //
    //     if (road[i] === '.') {
    //         let startStr = road.slice(0, i);
    //         let endStr = road.slice(i+1);
    //
    //         if (i === 0) {
    //             res += getLength(endStr, /[<]/gi)
    //         }
    //         else {
    //             res += getLength(startStr, /[>]/gi) + getLength(endStr, /[<]/gi);
    //         }
    //     }
    //
    // }
    // return res;

    let prev = 0;
    let next = 0;
    let result = 0;

    for (let i = 0; i < road.length; i++) {
        if (road[i] === '>') {
            prev += 1
        }
        if (road[i] === '.') {
            result += prev;
        }
    }
    console.log('result after loop', result)
    for (let i = road.length -1; i >= 0; i--) {
        if (road[i] === '<') {
            next += 1
        }
        if (road[i] === '.') {
            result += next;
        }
    }
    // Now it is O(n)
    return result;
}

// function getLength(str, regexp) {
//     return str.match(regexp) ? str.match(regexp).length : 0;
// }

// console.log(countPhotos('>.>..<')); //8
console.log(countPhotos('.><.>>.<<')); //11
// console.log(countPhotos('.>>>')); //0
// console.log(countPhotos('>..<<.>.<.')); //15
// console.log(countPhotos('<<.')); //0

