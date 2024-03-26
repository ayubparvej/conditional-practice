// Slice

const address = 'andorkilla';

const part = address.slice(0, 6);
//console.log(part);


const sentence = 'I am a good and hardworking person.';

// console.log(sentence.split(' '))

// concat

const firstName = "ahmad";
const lastName = "huq";

//const fullName = firstName + " " + lastName;

const fullName = firstName.concat(' ').concat(lastName);
//console.log(fullName);


//Reverse a string in three different ways
const anotherSentence = 'I am learning web dev';
let rev = ''
for (let i = 0; i < anotherSentence.length; i++) {
    //console.log(i);

    const letter = anotherSentence[i];
    rev = letter + rev;

}
// console.log(rev);


//reverse shortcut

const reversed = anotherSentence.split('').reverse().join('');
//console.log(reversed)