// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
//
//     The function must accept a non-negative integer. If it is zero, it just returns "now".
//     Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
//
//     It is much easier to understand with an example:
//
//     * For seconds = 62, your function should return
// "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
// "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
//
//     Note that spaces are important.
//
//     Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general,
// a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
//
// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ",
// just like it would be written in English.
//
//     A more significant units of time will occur before than a least significant one.
//     Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
//
//     Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
//
//     A component will not appear at all if its value happens to be zero. Hence,
//     1 minute and 0 seconds is not valid, but it should be just 1 minute.
//
//     A unit of time must be used "as much as possible". It means that the function should not return 61 seconds,
//     but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
    const secondOfYear = 31536000;
    const secondOfDay = 86400;
    const secondOfHour = 3600;
    const secondOfMinute = 60;

    let result = '';

    if(seconds < 60) return `${seconds} second${seconds > 1 ? 's' : ''}`;

    if(seconds >= secondOfYear) {
        result = getResult(seconds, secondOfYear,'year')
    }

    else if (seconds >= secondOfDay) {
        result = getResult(seconds, secondOfDay, 'day');
    }

    else if (seconds >= secondOfHour) {
        result = getResult(seconds, secondOfHour, 'hour')
    }

    else if (seconds >= secondOfMinute) {
        result = getResult(seconds, secondOfMinute, 'minute')
    }

    let index = result.lastIndexOf(',');
    if (index >=0) {
        let isAlreadySetAnd = result.includes('and');

        return result.slice(0, index) + `${isAlreadySetAnd ? ',' : ' and'}` + result.slice(index + 1);
    }
    return result;

    function getResult(seconds,periodOfTime, nameOfPeriod) {
        const [result, rest] = getNumber(seconds, periodOfTime, nameOfPeriod);
        return result + `${rest > 0 ? `, ${formatDuration(rest)}` : ''}`;
    }

    function getNumber(seconds, secondOfPeriod, nameOfPeriod){
        const count = Math.floor(seconds / secondOfPeriod);
        const rest = seconds % secondOfPeriod;
        return [`${count} ${nameOfPeriod}${count > 1 ? 's' : ''}` , rest]
    }
}


console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"
// console.log(formatDuration(3600)); // "1 hour"
// console.log(formatDuration(61)); // "1 hour, 1 minute and 2 seconds"

// console.log(formatDuration(31536001)); // "1 hour, 1 minute and 2 seconds"
// console.log(formatDuration(2419201)); // "1 hour, 1 minute and 2 seconds"
// console.log(formatDuration(604801)); // "1 hour, 1 minute and 2 seconds"
