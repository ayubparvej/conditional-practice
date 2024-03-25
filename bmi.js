//BMI Calculator

var weight = 74;
var height = 1.80;

var heightSq = 1.80 * 1.80;

var bmi = weight / heightSq;

if (bmi < 18.5) {
    console.log('You are underweight')
} else if (bmi >= 18.5) {
    console.log('You are normal')
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log('You are overweight')
} else {
    console.log('You are obese')

}