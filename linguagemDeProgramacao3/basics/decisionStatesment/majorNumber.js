const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (firstNumber) => {
    rl.question('Enter the second number: ', (secondNumber) => {
        rl.question('Enter the third number: ', (thirdNumber) => {
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);
            const num3 = parseFloat(thirdNumber);

            let largest = num1;

            if (num2 > largest) {
                largest = num2;
            }

            if (num3 > largest) {
                largest = num3;
            }

            console.log(`The largest number is: ${largest}`);

            rl.close();
        });
    });
});