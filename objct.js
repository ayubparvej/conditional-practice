const age = 21; //number variable
const school = 'rifle square'; //string variable
const isPassed = true;//boolean variable
let isDeveloper; //undefined variable
const subjects = ['bangla', 'english', 'math'] //Array


//Object

const bottle = {
    brand: 'apple',
    price: 45,
    color: 'white',
    isClean: false,
    chapter: ['one', 'two', 'three']
};

//Multiple ways to Get_Set object properties

//get with Dot notation
//console.log(bottle.brand);
const brnd = bottle.brand;


//bracket notation
//third bracket die access kora
//console.log(bottle['color'])

//Set Values
bottle.price = 450;     //set value with dot notation
bottle['price'] = 500;  //set value with bracket notation
// console.log(bottle);

//get and set with variable
const askPrice = 'price';
bottle[askPrice] = 1000;
//console.log(bottle)


//19-7: Keys, values, nested object and delete

const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb',
    monitor: 'hp'
}

const keys = Object.keys(computer);
//console.log(keys)

const values = Object.values(computer);
//console.log(values)

//nested
const college = {
    name: 'vncc',
    class: ['11', '12'],
    events: ['sfair', 'bijoy dibosh', '21 feb'],
    unique: {
        color: 'blue', result: { gpa: 5, merit: 'top' }
    }
}

//get color
// console.log(college.unique.color);

//get merit from uniqe

// console.log(college.unique.result.merit);
//console.log(college['unique'].result.merit);

college.events[1] = '16 december';

//console.log(college.events[1]);

//delete
delete college.class;

//console.log(college);


//19-8: Loop an object and ways to declare an object

const mobile = {
    brand: 'samsung',
    price: '25000',
    color: 'black',
    camera: '12mp'
}

for (const prop in mobile) {
    console.log(prop)
    console.log(mobile[prop])
}
