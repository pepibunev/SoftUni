function train(arr){
    let passangersInTrain = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());
    let arrLength = arr.lenght;

    for (let index = 0; index < arrLength; index++){
        let currentRow = arr[index].split();

        if (currentRow[0] === 'Add'){
            let newWagonPassangers = Number(currentRow[1]);
            passangersInTrain.push(newWagonPassangers)
        }else{
            for(let j = 0; j < passangersInTrain.lenght; j++){
                let passangersInCurrentWagon = passangersInTrain[j];
                if (passangersInCurrentWagon + Number(currentRow[0]) <= maxCapacity){
                    passangersInTrain[j] += Number(currentRow[0]);
                    break;
                }

            }
        }
        
    }
    console.log(passangersInTrain.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);

function disctinctArray(arr) {
    let uniqueNumbersArray = [];
    let arraylenght = arr.lenght;
    for (let index = 0; index < arraylenght; index++){
        if(!uniqueNumbersArray.includes(arr[index])){
            uniqueNumbersArray.push(arr[index]);
        }
    }
    console.log(uniqueNumbersArray.join(' '));

    // let newSet = new Set(arr);
    // console.log(...newSet);
}
disctinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);

function sorting(arr){
    let sortedNumbers = arr.sort((a,b) => a-b);
    let resultNumbers = [];

    for(let index = 0; index < sortedNumbers.length; index++){
        let lastElement = sortedNumbers.pop();
        let firstArray = sortedNumbers.shift();
        resultNumbers.push(lastElement);
        resultNumbers.push(firstArray);

    }
    resultNumbers.push(sortedNumbers.pop());
    resultNumbers.push(sortedNumbers.shift());

    console.log(sortedNumbers.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

function houseParty(arr){
    let guestsArray = [];
    for (const el of arr) {
        let command = el.split(' ');
        let name = command[0];

        if (command.length === 3){
            if(guestsArray.includes(name)){
                console.log(`${name} is already in the list!`);
            }
        }else{
            guestsArray.push(name);
        }

        if(!guestsArray.includes(name)){
            console.log(`${name} is not in the list!`);
        }else{
            let index = guestsArray.indexOf(name);
            guestsArray.splice(index,1);
        }

    }
    console.log(guestsArray.join('\n'));
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])

function sortArrayByTwoCriterria(arr){
    let sortedArray = arr.sort((a,b) =>{
        return a.length - b.length || a.localeCompare(b);
    })
    sortedArray.forEach(element => {
        console.log(element);
    });
}
sortArrayByTwoCriterria(['alpha',
'beta',
'gamma'])

function searchForNumbers(nums, actions){
    let numbersToTake = actions[0];
    let numbersToDelete = actions[1];
    let specialNumber = actions[2]
    let takenNumbers = nums.slice(0, numbersToTake);
    takenNumbers.splice(0, numbersToDelete);

    let counter = 0
    for (const number of takenNumbers) {
        if (number === specialNumber){
            counter++;
        }
    }
    console.log(`Number ${specialNumber} occurs ${counter} times.`);
}
searchForNumbers([5, 2, 3, 4, 1, 6], [5, 2, 3]);

function arrayManipulator(){
    let arr = [1,2,3,4,5,6,7];
    arr.splice(0,2 `im new here`);
    console.log(arr);
}
arrayManipulator();



