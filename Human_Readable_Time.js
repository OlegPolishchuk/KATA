// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    const hours = seconds / 3600 >=1
        ? Math.floor(seconds / 3600) > 9
            ? Math.floor(seconds / 3600)
            : `0${Math.floor(seconds / 3600)}`
        : '00'

    const minutesRemainder = hours >= 1 ? seconds % 3600 : seconds
    const minutes = minutesRemainder >= 60
        ? Math.floor(minutesRemainder / 60) > 9
            ? Math.floor(minutesRemainder / 60)
            : `0${Math.floor(minutesRemainder / 60)}`
        : `00`
    const secondsReminder = minutesRemainder % 60 >= 10 ? minutesRemainder % 60 : `0${minutesRemainder % 60}`


    return `${hours}:${minutes}:${secondsReminder}`;
}

// console.log(humanReadable(359999 )); // (99:59:59)
// console.log(humanReadable(0 )); // (00:00:00)
// console.log(humanReadable(59 )); // (00:00:59)
// console.log(humanReadable(90 )); // (00:01:30)
// console.log(humanReadable(60 )); // (00:01:30)
// console.log(humanReadable(86400 )); // 24:00:00
// console.log(humanReadable(86399 )); // 23:59:59'
// console.log(humanReadable(3600 )); // 23:59:59'
console.log(humanReadable(286630  )); // '79:37:10'