// You will get an odd integer n (>= 3) and your task is to draw an X. Each line is separated with \n.
//
//     Use the following characters: ■ □ For Ruby, Crystal and PHP: whitespace and o
//
// Examples
//
//                                   ■□□□■
//          ■□■                      □■□■□
//x(3) =>   □■□             x(5) =>  □□■□□
//          ■□■                      □■□■□
//                                   ■□□□■


function x(n){
    let result = '';
    let subStr = new Array(n);

    for (let i = 0; i < n; i++) {
        subStr.fill('□')
      for (let j = 0; j < n; j++) {
            if (j === i ) {
                subStr[j] = '■';
                subStr[n-1-j] = '■'
            }
      }
      if (i === n-1){
          result += subStr.join('');
      } else {
          result += subStr.join('') + '\n';
      }
    }

    return result;
}

console.log(x(5));
console.log(x(3));