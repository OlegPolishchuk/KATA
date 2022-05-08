// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
//
//     Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
//
//     The following are examples of expected output values:
//
//     rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r,g,b) {

    return [r,g,b].map(el => {
        return el > 255 ? 255: el < 0 ? 0 : el
    }).reduce((acc,el) => {
        let hex = el.toString(16)
        return acc += hex.length === 1? '0' + hex : hex
    },'')
        .toUpperCase()

}


console.log(rgb(0,0,0)); // 000000
console.log(rgb(173,255,47)); // ADFF2F