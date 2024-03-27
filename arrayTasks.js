// JS array tasks

// 1. Declare an Array
// Declare an array with 5 elements containing fruits

const fruits = ['apple', 'banana', 'mango', 'orange', 'pineapple'];
// console log the 3rd index element
// console.log(fruits[3]);

//change the value of the 2nd indext element to jambura
fruits[2] = 'jambura';
// console.log(fruits);

// 2. Add or remove Elements
// 2.1. Declare an array of 3 tourist destination 
const destinations = ['Kashmir', 'turkey', 'paris'];
//2.2. Add a new tourist destination to your tourist array
destinations.push('Switzerland');
// console.log(destinations)

//2.3. Add two more to your array
destinations.push('Italy', 'Srilanka')
// console.log(destinations)

//2.4. Remove the last tourist destination you have added
destinations.pop()
// console.log(destinations)

// 2.5. Display the final array as output
// console.log(destinations)

// 3. Checking array membership with 'includes'

// 3.1 Create an array of books containing different books

const books = ['bangla', 'english', 'math', 'science', 'Ob', 'fundamental of HRM'];

books.includes('Ob');
// console.log(books.includes('Ob'))

//3.2 Print a message to the console indicating whether the element is present in the array or not

if (books.includes('Ob')) {
    // console.log('the Ob is available in the array')
} else {
    // console.log('the Ob book is not available in the books array')
}

// 4. Checking if it's an Array

//4.1. Create different variables, each containig eithere an array or a non-array value.

const destination = 'tourist destination';
const numberOfPlaces = 5;
const isVisitable = true;
const foodItems = ['chola', 'jilapi', 'halim', 'kacchi'];

//4.2 Now use isArray to check if each variable is an array

// console.log(Array.isArray(destination))
// console.log(Array.isArray(foodItems))

//4.3. Print a message to the console indicating whether each variable is an array or not

if (Array.isArray(destination) === true) {
    console.log('destination is an array')
} else if (Array.isArray(numberOfPlaces) === true) {
    console.log('Number is an array')
}