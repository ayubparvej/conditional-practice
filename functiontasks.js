// Task 1
// Take four parameters. multiply the four numbers and then return the result

function multiply(a, b, c, d) {
    product = a * b * c * d;
    return product;
}
// console.log(multiply(2, 3, 4, 5));

// Task 2
// Take a number if the numer is odd myltiply it by 2 and return the XPathResult. if the number is even divide it by 2 and return the result

function number(result) {
    if (result % 2 !== 0) {
        let odd = 2 * result;
        return odd;
    } else if (result % 2 === 0) {
        let even = 2 * result;
        return even;
    }
}

const num = 3;
const result = number(num)
// console.log(result);


//Task-3
// write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}
const numb = [10, 20, 30]
const avg = make_avg(numb)
// console.log(avg)


//Task-4
// Write a function called count_zero() which will take a binary string a parameter and count how many 0's are there in that string.

function count_zero(strng) {
    let zeroCount = 0;
    for (let i = 0; i < strng.length; i++) {
        if (strng[i] === '0') {
            zeroCount++;
        }
    }
    return zeroCount;

}

const strn = '01001001';
const zeroCount = count_zero(strn);

// console.log(zeroCount);

// Task -5
//write a function called odd_even() which takes an integer value and tells whether this value is even or odd. if even returns "Even". if Odd returns "Odd".

function odd_even(nmb) {
    if (nmb % 2 === 0) {
        return "Even";
    } else {
        return "Odd"
    }
}

const nmbr = 7;
const results = odd_even(nmbr);
console.log(results);
