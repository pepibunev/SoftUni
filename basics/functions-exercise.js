function smallesOfThreNumbers(num1, num2, num3) {
    let smallestNumber = Math.min(num1, num2, num3);
    console.log(smallestNumber);
}
smallesOfThreNumbers(2, 5, 3);

function addAndSubtract(num1, num2, num3) {

    function addTwoNumbers(num1, num2) {
        let sumOfTwoNumbers = num1 + num2;
        return sumOfTwoNumbers;
    }

    let sum = addTwoNumbers(num1, num2)

    function subtractTwoNumbers(sum, num3) {
        let minusTwoNumbers = sum - num3;
        return minusTwoNumbers;
    }

    let result = subtractTwoNumbers(sum, num3);
    console.log(result);
}
addAndSubtract(23, 6, 10);

function charInRange(char1, char2) {
    let startRange = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let lastRange = Math.max(char1.charCodeAt(), char2.charCodeAt());
    let resultString = ''

    for (let currentChar = startRange + 1; currentChar < lastRange; currentChar++) {
        let singleChar = String.fromCharCode(currentChar);

        if (currentChar + 1 === lastRange) {
            resultString += `${singleChar}`;
        } else {
            resultString += `${singleChar} `;
        }
    }
    console.log(resultString);
}
charInRange('#', ':');

function oddAndEvenSum(num) {
    let numberAsString = num.toString();
    let evenSum = 0;
    let oddSum = 0;
    let numberAsStringLength = numberAsString.length;


    for (let index = 0; index < numberAsStringLength; index++) {
        let singleNumber = Number(numberAsString[index]);

        if (singleNumber % 2 === 0) {
            evenSum += singleNumber;
        } else {
            oddSum += singleNumber;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);

function palindromeIntiger(numberArray) {
    let numberArrayLength = numberArray.length;

    for (let index = 0; index < numberArrayLength; index++) {

        let numberAsString = numberArray[index].toString();
        let reversedString = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedString) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

}
palindromeIntiger([123, 323, 421, 121]);

function loadingBar(num) {
    let percentCount = '%'.repeat(num / 10);
    let dotsCount = '.'.repeat(10 - percentCount.length);
    if (num === 100) {
        console.log('100% Complete');
    } else if (num < 100) {
        console.log(`${num}% [${percentCount}${dotsCount}]`);
        console.log('Still loading...');
    }
}
loadingBar(30);

function matrix(num) {
    let rowGen = () => {
        let singleRow = '';
        for (let l = 1; l <= num; l++) {
            singleRow += `${num} `;
        }
        return singleRow
    };

    for (let r = 1; r <= num; r++) {
        console.log(rowGen());
    }
}
matrix(3);

function passwordValidator(password){
    let digitsCounter = 0;
    let passwordLength = password.length;
    let isSymbol = false;

    for (let i = 0; i < passwordLength; i++) {
        let charNum = password[i].charCodeAt();
        let isDigit = charNum >= 48 && charNum <= 57;
        let isSmallLetter = charNum >= 97 && charNum <= 122;
        let isBigLetter = charNum >= 65 && charNum <= 90;


        if (isDigit) {
            digitsCounter++;
        }

        if (!isDigit && !isSmallLetter && !isBigLetter) {
            isSymbol = true;
        }
    }

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (isSymbol) {
        console.log('Password must consist only of letters and digits');
    }

    if (digitsCounter < 2) {
        console.log('Password must have at least 2 digits');
    }

    if (digitsCounter >= 2 && !isSymbol && (password.length >= 6 || password.length <= 10)) {
        console.log('Password is valid');
    }
}
passwordValidator('logIn')

function factorialDivision(a, b){
        let firstFactorial = function (firstNum) {
            if (firstNum <= 0) { // terminal case
                return true;
            } else { // block to execute
                return (firstNum * firstFactorial(firstNum - 1));
            }
        };
    
        let secondFactorial = function (secondNum) {
            if (secondNum <= 0) { // terminal case
                return true;
            } else { // block to execute
                return (secondNum * secondFactorial(secondNum - 1));
            }
        };
    
        console.log((firstFactorial(num1) / secondFactorial(num2)).toFixed(2));
    }

factorialDivision(5, 2);

function perfectNumber(num) {
    temp = 0;

    for (let i = 0; i <= num / 2; i++) {
        if (num % i === 0) {
            temp += i;
        }
    }

    if (temp === num && temp !== 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
