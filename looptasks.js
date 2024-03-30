//Break
//1. write a loop 1-200. Use break to exit the loop once you find 100.
//With while loop

let num1 = 1;

while (num1 < 200) {
    // console.log(num1);
    num1++;
    if (num1 == 100)
        break;
}

//with for loop

for (let i = 1; i <= 200; i++) {
    // console.log(i);
    if (i === 100)
        break;

}


