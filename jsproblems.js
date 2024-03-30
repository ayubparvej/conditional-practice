//22-1: Can you find out who will get the delicious Cake?

const disha = 56;
const salman = 95;

if (disha > salman) {
    console.log('Disha will eat the strawberry')
} else {
    console.log('Salman will eat the strawberry')
}

//22-1: find the max number in an array?



function getMax(numbers) {

    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const heights = [30, 40, 50, 60, 70, 80, 50, 60];
const max = getMax(heights);
// console.log(max);