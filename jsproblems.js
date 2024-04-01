//22-1: Can you find out who will get the delicious Cake?

const disha = 56;
const salman = 95;

if (disha > salman) {
    // console.log('Disha will eat the strawberry')
} else {
    // console.log('Salman will eat the strawberry')
}

//22-2: find the max number in an array?



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

//22-3: Use Add and Multiplication to calculate Wood Requirements

//22-4 Find the Cheapest phone from an array of phone objects.

const price = [20000, 16000, 50000, 23000, 12000, 10000];

function cheapest(numbers) {

    let min = numbers[0];
    for (const num of numbers) {

        if (num < min) {
            min = num;
        }
    } return min;
}

const cheapestprice = cheapest(price);
// console.log(cheapestprice);

//22-4 Find the Cheapest phone from an array of phone objects.
const phones = [{ name: 'samsung', price: 20000, camera: '12mp', color: 'black' },
{ name: 'samsung', price: 20000, camera: '13mp', color: 'black' },
{ name: 'xiaomi', price: 21000, camera: '14mp', color: 'white' },
{ name: 'Oppo', price: 25000, camera: '15mp', color: 'grey' },
{ name: 'iphone', price: 100000, camera: '112mp', color: 'gold' }
]

function getChipestPhone(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price > min.price) {
            min = phone;
        }
    } return min;
}

const cheap = getChipestPhone(phones)
// console.log(cheap)


