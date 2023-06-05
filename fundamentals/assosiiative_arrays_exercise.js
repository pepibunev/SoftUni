function wordTracker(input) {
    const words = input.shift().split(' ');
    let result = {};

    for (const word of words) {
        result[word] = 0;
    }

    for (const word of input) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }

    const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }

}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);

function oddOccurences(words) {
    let resultObject = {};
    let allWords = words.split(' ').map(w => w.toLowerCase());

    for (let word of allWords) {
        if (resultObject[word] == undefined) {
            resultObject[word] = 1;
        } else {
            resultObject[word]++;
        }
    }
    console.log(resultObject);
    let result = '';

    for (const word of allWords) {
        if (resultObject[word] % 2 === 1) {
            result += `${word} `;
            delete resultObject[word];
        }
    }

    console.log(result);
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

function piccolo(array) {
    let parkingList = new Map();

    array.map(element => element.split(', '))
        .forEach(element => {
            const command = element[0];
            const carNumber = element[1];

            if (command === 'IN') {
                parkingList.set(carNumber, command);
            } else if (command === 'OUT') {
                parkingList.delete(carNumber);
            }
        });

    let sortedCarNumber = Array.from(parkingList).sort((a, b) => a[0].localeCompare(b[0]));

    if (sortedCarNumber.length === 0) {
        console.log('Parking Lot is Empty');
    }
    sortedCarNumber.forEach((carNumber) => console.log(carNumber[0]))
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
])

function partyTime(array) {
    let vipList = [];
    let regularList = [];

    let currentGuest = array.shift()

    while(currentGuest !== 'PARTY'){
        const isVip = !isNaN(currentGuest[0]);

        if (isVip){
            vipList.push(currentGuest);
        } else {
            regularList.push(currentGuest);
        }

        currentGuest = array.shift();
    }

    let allGuests = vipList.concat(regularList);

    for (const guest of array) {
        allGuests.splice(allGuests.indexOf(guest), 1);
    }
    console.log(allGuests.length);
    allGuests.forEach(guests => console.log(guests))
    
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ', 
    'Ce8vwPmE', 
    'SVQXQCbc', 
    'tSzE5t0p', 
    'PARTY', 
    '9NoBUajQ', 
    'Ce8vwPmE', 
    'SVQXQCbc'
])

function minerTask(array){
    let collection = {};

    for (let index = 0; index < array.length; index+=2) {
        const resource = array[index];
        const quantity = Number(array[index + 1]);

        if(!collection.hasOwnProperty(resource)){
            collection[resource] = 0;
        }
        collection[resource] += quantity;
    }
    for (const item in collection) {
        console.log((`${item} -> ${collection[item]}`));
    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17' 
])

function companyUsers(array){
    let result = {};

    array.forEach(line => {
        let [companyName, personID] = line.split(' -> ');
        
        if(!result.hasOwnProperty(companyName)){
            result[companyName] = [];
        }
        result[companyName].push(personID);
    });

    let sortedCompanies = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
    
    sortedCompanies.forEach(element => {
        const companyName = element[0];
        const allIDS = element[1];
        console.log(companyName);
        
        let uniqueIds = new Set(allIDS);
        for (const id of uniqueIds) {
            console.log(`-- ${id}`);
        }
    })
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345', 
    'HP -> BB12345' 
])