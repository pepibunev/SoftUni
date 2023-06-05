function activationKeys(array) {
    //input data
    let key = array.shift();
    let commands = array.slice();

    //loop through instructions
    let command = commands.shift();

    while (command !== "Generate") {
        //apply command
        let arguments = command.split(">>>");
        let commandName = arguments.shift();

        switch (commandName) {
            case "Contains": {
                let substring = arguments[0];
                if (key.includes(substring)) {
                    console.log(`${key} contains ${substring}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
            }
            case "Flip": {
                let casing = arguments[0];
                let startIndex = arguments[1];
                let endIndex = arguments[2];

                let part = key.substring(startIndex, endIndex);
                let newPart = casing == "Upper" ? part.toUpperCase() : part.toLowerCase();
                key = key.replace(part, newPart);
                console.log(key);
                break;
            }
            case "Slice": {
                let startIndex = arguments[0];
                let endIndex = arguments[1];
                let substring = key.substring(startIndex, endIndex);
                key = key.replace(substring, '');
                console.log(key);
                break;
            }
            default:
                break;
        }

        //get next command
        command = commands.shift();
    }

    //print generated key
    console.log(`Your activation key is: ${key}`);
}
activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate",
]);

function emojiDetector(input) {
    //input
    let text = input.shift();

    //get all digits and calculate treshhold
    let threshold = 1;
    let digits = text.match(/\d/g);

    for (const digit of digits) {
        let number = Number(digit[0]);
        threshold *= number;
    }
    console.log(`Cool threshold: ${threshold}`);

    //get all emojis
    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);
    let emojiCount = 0;
    let coolEmojis = [];

    for (const emojiMatch of emojiMatches) {
        let emoji = emojiMatch[0];
        let emojiName = emojiMatch.groups.name;
        emojiCount++;

        //calculate emoji coolnes
        let emojiCoolnes = 0;
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolnes += emojiName.charCodeAt(i);
        }

        if (emojiCoolnes >= threshold) {
            coolEmojis.push(emoji);
        }
    }

    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);

    //print cool emojis
    for (const emoji of coolEmojis) {
        console.log(emoji);
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total!::Smiley:: This includes 3 **Tigers**, 1 ::Elephant: 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);


function plantDiscovery(input) {
    // initial variables
    const plantCount = Number(input.shift());
    let plants = {};

    // collect initial plants
    for (let i = 0; i < plantCount; i++) {
        // collect plant data
        let plantInfo = input.shift();
        let [name, rarity] = plantInfo.split('<->');

        // store plant data
        plants[name] = {
            rarity: Number(rarity),
            ratings: [],
        };
    }

    // loop through commands
    let commandLine = input.shift(); // 'Rate: Woodii - 10'
    while (commandLine != 'Exhibition') {
        // extract data from line
        let [command, args] = commandLine.split(': ');
        let [name, argument] = args.split(' - ');
        let plant = plants[name];

        if (plant) {
            switch (command) {
                case 'Rate':
                    let rating = Number(argument);
                    plant.ratings.push(rating);
                    break;
                case 'Update':
                    let rarity = Number(argument);
                    plant.rarity = rarity;
                    break;
                case 'Reset':
                    plant.ratings = [];
                    break;
            }
        } else {
            console.log('error');
        }

        commandLine = input.shift();
    }

    // print result
    console.log('Plants for the exhibition:');
    for (const name in plants) {
        // calculate average rating
        let averageRating = average(plants[name].ratings);

        // print plant information
        console.log(`- ${name}; Rarity: ${plants[name].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

    function average(numbers) {
        if (numbers.length === 0) {
            return 0;
        }

        let sum = numbers.reduce((s, num) => s + num, 0);
        let result = sum / numbers.length;

        return result;
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);

function examPrep(arr) {
    let array = arr.slice();
    let message = array.shift();
    let currentLine = array.shift();
    let tempMessage = " ";

    while (currentLine !== 'Decode') {
        let tokens = currentLine.split('|');
        let command = tokens[0];

        switch (command) {
            case 'Move':
                let lettersNumber = Number(tokens[1]);
                let lettersToMove = message.substring(0, lettersNumber);
                tempMessage = message.replace(lettersToMove, "");
                tempMessage += lettersToMove;
                message = tempMessage;
                break;
            case 'Insert':
                let index = +tokens[1];
                let value = tokens[2];

                tempMessage = message.split("");
                tempMessage.splice(index, 0, value);
                message = tempMessage.join("");
                break;
            case 'ChangeAll':
                let substring = tokens[1];
                let replacement = tokens[2];

                while (message.includes(substring)) {
                    tempMessage = message.replace(substring, replacement);
                    message = tempMessage;
                }
                break;
            default:
                break;
        }
        currentLine = arr.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}
examPrep([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])

function adAsstra(input) {
    let pattern = /([\|#])(?<name>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/gm;
    let exec = pattern.exec(input);
    let tottalCkal = 0;
    let productStore = [];

    while (exec) {
        let name = exec.groups['name'];
        let date = exec.groups['date'];
        let kcal = exec.groups['kcal'];

        if (kcal > 10000) {
            continue;
        }

        tottalCkal += Number(kcal);

        let currentProductData = `Item: ${name}, Best before: ${date}, Nutrition: ${kcal}`;
        productStore.push(currentProductData);

        exec = pattern.exec(input);
    }

    let days = Math.floor(tottalCkal / 2000);

    console.log(`You have food to last you for: ${days} days!`);
    productStore.forEach(p => console.log(p));
}
adAsstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])

function pirates(input) {
    let cities = {};
    let array = [];

    while (input[0] !== 'Sail') {
        let command = input.shift().split('||');

        let city = command[0];
        let population = Number(command[1]);
        let gold = Number(command[2]);

        let result = array.find(x => x.city === city);
        let index = array.indexOf(result);

        if (result) {
            array[index].population += population;
            array[index].gold += gold;
        } else {
            cities = { city, population, gold };
            array.push(cities);
        }
    }

    while (input[0] !== 'End') {
        let commands = input.shift().split('=>');
        let currentCommand = commands.shift();

        switch (currentCommand) {
            case 'Plunder':
                let cityName = commands[0];
                let people = Number(commands[1]);
                let gold = Number(commands[2]);

                console.log(`${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                let result = array.find(x => x.city === cityName);
                let index = array.indexOf(result);

                array[index].population -= people;
                array[index].gold -= gold;

                if (array[index].population <= 0 || array[index].gold <= 0) {
                    array.splice(index, 1);
                    console.log(`${cityName} has been wiped off the map!`);
                }

                break;
            case 'Prosper':
                let town = commands[0];
                let treasure = Number(commands[1]);

                if (treasure < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    let result = array.find(x => x.city === town);
                    let index = array.indexOf(result);

                    array[index].gold += treasure;
                    console.log(`${treasure} gold added to the city treasury. ${town} now has ${array[index].gold} gold.`);
                }
                break;
            default:
                break;
        }
    }

    if (array.length !== 0) {
        console.log(`Ahoy, Captain! There are ${array.length} wealthy settlements to go to:`);
        array.forEach(x => console.log(`${x.city} -> Population: ${x.population} citizens, Gold: ${x.gold} kg`));
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }

}
pirates(["Tortuga||345000||1250",

    "Santo Domingo||240000||630",

    "Havana||410000||1100",

    "Sail",

    "Plunder=>Tortuga=>75000=>380",

    "Prosper=>Santo Domingo=>180",

    "End"
])