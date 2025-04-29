const sumAll = function(num1, num2) {
    let sum = 0;
    let firstNumber;
    let lastNumber;

    switch (true) {
        case num1 < num2:
            firstNumber = num1;
            lastNumber = num2;
            break;
        case num1 > num2:
            firstNumber = num2;
            lastNumber = num1;
            break;
    }
    
    for (let i  = firstNumber; i <= lastNumber; i++) {
        sum+= i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
