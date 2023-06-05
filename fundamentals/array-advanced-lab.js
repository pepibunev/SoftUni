function sumFirstAndLast(arr) {
    let fisrtElement = Number(arr[0]);
    let lastElement = Number(arr.pop());

    let sum = fisrtElement + lastElement;
    console.log(sum);
}
sumFirstAndLast(['20', '30', '40']);

function negativeOrPositive(arr) {
    let numbers = [];
    for (const elements of arr) {
        let number = Number(elements);

        if (number < 0) {
            numbers.unshift(number);
        } else {
            numbers.push(number);
        }
    }

    for (const number of numbers) {
        console.log(number);
    }
}
negativeOrPositive(['7', '-2', '8', '9']);

function firstLastKNumbers(arr) {
    let count = arr.shift();
    let firstElements = arr.slice(0, count);
    let lastElement = arr.slice(arr.length - count);

    console.log(firstElements.join(' '));
    console.log(lastElement.join(' '));
}
firstLastKNumbers([2, 7, 8, 9]);

function numbers(length, k) {
    let sequence = [1];
    for (let i = 1; i < length; i++) {
        let index = Math.max(sequence.length - k, 0);
        let lastElement = sequence.slice(index);

        let sum = 0;
        for (const el of lastElement) {
            sum += el;
        }
        sequence.push(sum);
    }
    console.log(sequence.join(' '));
}
numbers(6, 3);

function oddNumbersProcessor(arr) {
    let result = arr.filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse();
    console.log(result.join(' '));
}
oddNumbersProcessor([10, 15, 20, 25]);

function smallestTwoNumbers(arr){
    let sortedArr = arr.sort((a,b) => a-b);
    console.log(sortedArr[0], sortedArr[1]);
}
smallestTwoNumbers([30, 15, 50, 5])

function listOfProducts(arr){
    let sorted = arr.sort();
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i+1}.${sorted[i]} `);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions',
'Apples'])

function arrayManipulations(commands){
    let arr = commands.shift().split(' ').map(Number);
    console.log(arr);

}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])


