
// console.table(stringToParse);// Declare the regular expression 
// const regex = /\b[A-Z][a-z]+\s[A-Z][a-z]+\b/g;

// // Read the input
// let input = "Ivan Ivanov ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov";

// // Extract names from the input and put them in an array
// let validNames = [];
// let result;
// while ((result = regex.exec(input)) !== null) {
//     validNames.push(result[0]);
// }

// // Print the result
// console.log(validNames.join(' '));

// RegExp literal
let pattern = /[A-Za-z0-9]/;


// RegExp constructor
let regexp = new RegExp('[A-Za-z0-9]', 'gm');

// RegExp methods
let text = 'Nisi sint nisi consectetur sint mollit sunt id tempor fugiat occaecat sunt quis Lorem consequat.';

let hasMatch = pattern.test(text);
console.log(hasMatch);

// RegExp exp
let match = pattern.exec(text);

console.log(match[0]);

match = pattern.exec(text);
console.log(match[0]);



function matchNames(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let names = input.match(pattern);
    console.log(names.join(' '));
}
matchNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")

function matchNumber(input) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let phoneNumber = input.shift();
    let result = phoneNumber.match(pattern);

    console.log(result.join(', '));
}
matchNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222']);

function matchDates(input) {
    let text = input.shift();
    let pattern = /\b(?<day>\d{2})([/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;

    let matches = text.matchAll(pattern);

    for (const match of matches) {
        console.log(`Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])

function matchFurniture(input) {
    let pattern = /[>]{2}(?<name>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/gm;

    let totalMoney = 0;
    let index = 0;

    console.log('Bought furniture:');

    while (input[index] !== 'Purchase') {
        let productRow = input[index];
        let validProduct = pattern.exec(productRow)

        while (validProduct !== null) {
            const productName = validProduct.groups['name'];
            console.log(productName);
            const productPrice = validProduct.groups['price'];
            const productQuantity = validProduct.groups['quantity'];

            totalMoney += productPrice * productQuantity;
            validProduct = pattern.exec(productRow);
        }
        index++;
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);

}
matchFurniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])

function matchRace(input) {
    let racersNames = input.shift().split(', ');
    let raceObject = {};
    const patternNames = /[A-Za-z]+/gm;
    const patternDistance = /[0-9]+/gm;

    let command = input.shift();

    while (command !== 'end of race') {
        const currentName = command.match(patternNames).join('');
        const currentDistance = command.match(patternDistance).join('');

        if (racersNames.includes(currentName)) {
            let distance = 0;

            for (const digit of currentDistance) {
                distance += Number(digit);
            };

            if (!raceObject.hasOwnProperty(currentName)) {
                raceObject[currentName] = distance;
            } else {
                raceObject[currentName] += distance;
            }
        }

        command = input.shift();
    }

    let sortedRacers = Object.entries(raceObject).sort((a, b) => b[1] - a[1]);

    const firstPlace = sortedRacers[0][0];
    const secondPlace = sortedRacers[1][0];
    const thirdPlace = sortedRacers[2][0];

    console.log(`1st place: ${firstPlace}`);
    console.log(`2nd place: ${secondPlace}`);
    console.log(`3rd place: ${thirdPlace}`);
}
matchRace(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])

function barIncome(customerArray) {
    const pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9|\.]+)\$/g;

    let totalIncome = 0;
    let command = customerArray.shift();

    while (command !== 'end of shift') {
        let currentData = pattern.exec(command);

        if (currentData) {
            let currentCustomer = currentData.groups['customer'];
            let currentProduct = currentData.groups['product'];
            let currentCount = Number(currentData.groups['count']);
            let currentPrice = Number(currentData.groups['price']);

            let totalProductPrice = currentCount * currentPrice;
            console.log(`${currentCustomer}: ${currentProduct} - ${totalProductPrice.toFixed(2)}`);

            totalIncome += totalProductPrice;

            command = customerArray.shift();
            currentData = pattern.exec(command);
        } else {
            command = customerArray.shift();
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);

}
barIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])
