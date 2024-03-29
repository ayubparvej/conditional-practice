/* 
2. Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let num = 1;
let sum = 0;

while (num < 200) {

    sum = sum + num;

    if (sum > 200) {
        break;
    }
    // console.log(sum);
    num++;
}

/* 
3. Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let i = 1;
while (i <= 100) {
    if (i * i === i) {
        // console.log(i)
        break;
    }
    // console.log(i)
    i++;
}


/* 
2.1. Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

for (let i = 1; i <= 40; i++) {
    if (i % 2 !== 0) {
        continue;
    } else {
        // console.log(i);
    }
}

/*
2.2 (continue) display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (let i = 55; i <= 85; i++) {
    if (i % 5 === 0) {
        continue;
        // } console.log(i);
    }
}

/***

3.1(for) "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

for (let i = 1; i <= 60; i++) {
    // console.log(i + '. I will invest at least 6 hrs every single day for next 60 days!')
}

/***

3. Subtask-1:

Find all the odd numbers from 61 to 100.

 */

for (let i = 61; i <= 100; i++) {
    if (i % 2 !== 0) {
        // console.log(i);
    }
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
for (let i = 78; i <= 98; i++) {
    if (i % 2 === 0) {
        // console.log(i);
    }
}


/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */


for (let i = 91; i <= 129; i++) {

    if (i % 2 !== 0) {
        let sum = 0;
        sum = sum + i;


    }
}
// console.log(sum);


/***
 
Subtask-2:
 
Display sum of all the even numbers from 51 to 85.
 
 */

for (let i = 51; i <= 81; i++) {
    if (i % 2 === 0) {
        let sum = 0;
        sum = sum + i;

    }
}
// console.log(sum);


/***
 
Generate a multiplication table for number 9
 
 */

for (let i = 1; i <= 9; i++) {
    let result = '';

    result = 9 * i;
    // console.log(result);
}


// Implement a countdown timer that counts down from 81 to 65.

for (let i = 81; i >= 65; i--) {
    setTimeout(() => {
        // console.log(i);
    }, (81 - i) * 1000);
}



function numbers(number) {

    let sum = 0;
    for (const num of number) {
        sum = sum + num;
    }
    return sum;
}

const nums = [2, 4, 6, 8];

const sums = numbers(nums);
console.log(sums);
