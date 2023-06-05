function zadacha(n) {
    let num = 1;
    let sum = 0;
    let counter = 0;

    while (counter < n) {
        if (num % 2 !=0){
            console.log(num);
            counter++;
            sum += num;
        }
        num++
    }
    console.log(`Sum: ${sum}`);
}   
zadacha(5)


function functionDemo(a, b, c){
    let smallestnum = Math.min(a,b,c);
    console.log(smallestnum);

}
functionDemo(2,5,3);

function addAndSubtract(a,b,c){

    function add(a, b){
        let sumOfTwoNumbers = a + b;
        return sumOfTwoNumbers
    }
    
    let sum = add(a, b);
    
    function subtract(sum, lastSum){
        return sum - lastSum;
    }
    
    let result = subtract(sum, c);
    console.log(result);

}
addAndSubtract(23,6,10)

function CharactersInRnage(firstChar, secondChar){

    let rangeStart = Math.min(firstChar.charCodeAt(),secondChar.charCodeAt());
    let rangeEnd = Math.max(firstChar.charCodeAt(),secondChar.charCodeAt());
    let result = '';

    for( let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++){
        let singleChar = String.fromCharCode(currentChar);

        if(currentChar + 1 === rangeEnd){
            resultString += `${singleChar}`; 
        }else{
            resultString += `${singleChar}`;
        }
    }

    console.log(result)
}
CharactersInRnage(':', "#")

function oddAndEvenSum(){
    let numberAsString = number.toString();
    let evenSum = 0;
    let oddSum = 0;
    let stringLenght = numberAsString.lenght;

    for(let index = 0; index < stringLenght, index++); {
        let singleNumber = Number(numberAsString[index]);

        if(singleNumber % 2 ===0){
            evenSum += singleNumber;
        }else{
            oddSum += singleNumber;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)

function palindomeIntegers(numbersArray) {

    let numberArrayLenght = numbersArray.lenghth;
    for(let index = 0; index < numberArrayLenght; index++){

        let numberAsString = numbersArray[index].toString();
        let reversedString = numberAsString.split('').reverse().join('');
        console.log(reversedString);
    }

    if (numberAsString === reversedString){
        console.log(true);
    }else{
        console.log(false);
    }

}
palindomeIntegers(123,323,421,121)

function loadingBar(number) {

    let percentCount = '%'.repeat(number/10);
    let dotsCount = '.'.repeat(10 - (number/10));
   
    if (number === 100){
        console.log('100% Complete!');
    }else if (number < 100){
        console.log(`${number}% [${percentCount}${dotsCount}]`);
        console.log('Still loading...');
    }
}
loadingBar(30);