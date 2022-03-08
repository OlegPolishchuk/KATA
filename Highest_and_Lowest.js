/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/
/*
Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"*/

const highAndLow = (numbers) => {
    const arrOfNumbers = numbers.split(' ');
    const min = Math.min.apply(null, arrOfNumbers);
    const max = Math.max.apply(null, arrOfNumbers);

    return `${max} ${min}`
}

highAndLow('1 2 3')
