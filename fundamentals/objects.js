// const companies = [
//     {name : 'First Companie', category: 'Finance', start: 1999, end: 2003},
//     {name : 'Second Companie', category: 'Retail', start: 1998, end: 2004},
//     {name : 'Third Companie', category: 'Auto', start: 1997, end: 2004},
//     {name : 'Fourth Companie', category: 'Technology', start: 1996, end: 2004},
//     {name : 'Fift Companie', category: 'Finance', start: 1995, end: 2004},
//     {name : 'Sixth Companie', category: 'Retail', start: 1994, end: 2005},
//     {name : 'Seventh Companie', category: 'Technology', start: 1995, end: 2007},
//     {name : 'Eigth Companie', category: 'Finance', start: 1995, end: 2003},
// ];

// const ages = [33, 11, 24, 53, 45, 12, 15, 43, 23, 54, 15, 24, 15, 57];

// // for(let i = 0; i < companies.length; i++){
// //     console.log(companies[i]);
// // }

// //forEach

// // companies.forEach(function(company) {
// //     console.log(company);
// // })

// //filter

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// //filter retail companies
// const retailCompanies = companies.filter(function(company) {
//     if (company.category === 'Retail'){
//         return true;
//     }
// });

// console.log(retailCompanies);

// const financeCompanies = companies
//     .filter(company => company.category === 'Finance');
//     console.log(financeCompanies);

// //get yer specific companies
// const specificYearCompanies = companies
//     .filter(company => (company.start >= 1995 && company.start < 2000));
//     console.log(specificYearCompanies);

// //get companies that laster for specific years
// const lastedTenYears = companies
//     .filter(company => (company.end - company.start > 10));
//     console.log(lastedTenYears);

// //map
// //create array of company names
// const companyNames = companies.map(company =>
//  `${company.name} [${company.start} - ${company.end}]`
// );
// console.log(companyNames);

// const agesSquare = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);
//     console.log(agesSquare);

// //sort
// // const sortedCompanies = companies.sort(function(c1, c2){
// //     if (c1.start > c2.start){
// //         return 1;
// //     } else {
// //         return -1;
// //     }
// // });

// const sortedCompanies = companies
//     .sort((c1, c2) => (c1.start > c2.start ? 1 : -1))
//     console.log(sortedCompanies);

// //sort ages
// const sortAges = ages
//     .sort((a, b) => a-b);
//     console.log(sortAges);

// // //reduce
// // let ageSum = 0;
// // for (let i = 0; i < ages.length; i++) {
// //     ageSum += ages[i];
// // }

// const agesSum = ages
//     .reduce((total, age) => total + age, 0);
//     console.log(agesSum);

// // get total years for all companies
// const totalYears = companies
//     .reduce((total, company) =>total + (company.end - company.start, 0));
//     console.log(totalYears);

// //combine methods
// const combined = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0);

//     console.log(combined);

// const interation = () => {
//     for (const objectIteration of Object.values(companies));
// }
// console.log(objectIteration);

function personInfo(firstName, lastName, age) {
    infoObject = {
        firstname: firstName,
        lastname: lastName,
        ageOfPerson: age,
    };
    return infoObject;
}
personInfo("Peter", "Pan", "20");

function cityInfo(objectInfo) {
    for (const key in objectInfo) {
        console.log(`${key} -> ${objectInfo[key]}`);
    }
}
cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})

function convertToObject(stringInJson) {
    let person = JSON.parse(stringInJson);

    Object.keys(person).forEach(key => {
        console.log(`${key}: ${person[key]}`);
    });
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

function convertToJson(name, lastName, hairColor) {
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    };

    console.log(JSON.stringify(person));
}
convertToJson('George', 'Jones', 'Brown');

function createCats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
        //The meow method is in the Cat class because it is specific to cats.
        // It allows us to invoke the method on each instance of the Cat class, making it easier to print out each cat's name and age with the "says Meow" statement. This would be much more difficult to do if the method was not in the Cat class.
        //why are we creating a class
    }

    arr.forEach(str => {
        const [name, age] = str.split(" ");
        const cat = new Cat(name, age);
        cat.meow();
    });
}
createCats(['Mellow 2', 'Tom 5']);

function classSongs(string) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let favouriteSong = [];
    const numberOfSongs = string.shift();
    const typeOfSong = string.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        const [type, name, time] = string[i].split('_');
        const songObject = new Song(type, name, time);
        favouriteSong.push(songObject);
    }

    if (typeOfSong === 'all') {
        favouriteSong.forEach((i) => console.log(i.name));
    } else {
        const filtered = favouriteSong.filter((i) => i.type === typeOfSong);
        filtered.forEach((i) => console.log(i.name));
    }

}
classSongs([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
])

function employees(stringOfEmployees) {
    class Employees {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }
        allemplyees() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
        }
    }

    stringOfEmployees.forEach(str => {
        const name = str;
        const personalNumber = str.length;
        const employee = new Employees(name, personalNumber);
        employee.allemplyees()
    })
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])

function towns(stringOfInfo) {
    let townInfo = {
        town: null,
        latitude: null,
        longitude: null
    };

    stringOfInfo.forEach(element => {
        let [town, latitude, longitude] = element.split(" | ");

        townInfo.town = town;
        townInfo.latitude = Number(latitude).toFixed(2);
        townInfo.longitude = Number(longitude).toFixed(2);

        console.log(townInfo)
    });

}
towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
])

function storeProvision(storeStock, deliveryProducts) {
    let storeInventory = {};

    for (let i = 0; i < storeStock.length; i += 2) {
        const product = storeStock[i];
        const quantity = parseInt(storeStock[i + 1])

        storeInventory[product] = quantity;
    }

    for (let i = 0; i < deliveryProducts.length; i += 2) {
        const product = deliveryProducts[i];
        const quantity = parseInt(deliveryProducts[i + 1])

        if (storeInventory[product]) {
            storeInventory[product] += quantity;
        } else {
            storeInventory[product] = quantity;
        }
    }

    for (const product in storeInventory) {
        console.log(`${product} -> ${storeInventory[product]}`);
    }
}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas',
        '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30']
)

function moviesObjects(moviesInformation) {
    let movies = [];

    moviesInformation.forEach(string => {

        if (string.includes('addMovie ')) {

            let name = string.split('addMovie ')[1];
            movies.push({ name });

        } else if (string.includes('directedBy')) {

            let [name, director] = string.split(' directedBy ');
            let movie = movies.find(string => string.name === name);

            if (movie) {
                movie.director = director;
            }

        } else if (string.includes('onDate')) {

            let [name, date] = string.split(' onDate ');
            let movie = movies.find(string => string.name === name);

            if (movie) {
                movie.date = date;
            }
        }
    })

    movies.forEach(movie => {

        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })
}
moviesObjects([

    'addMovie Fast and Furious',

    'addMovie Godfather',

    'Inception directedBy Christopher Nolan',

    'Godfather directedBy Francis Ford Coppola',

    'Godfather onDate 29.07.2018',

    'Fast and Furious onDate 30.07.2018',

    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen'

]);

function inventory(inventoryInfo) {
        
    let heroes = [];

    inventoryInfo.forEach(string => {
        let [name, level, ...items] = string.split(' / ');
        let hero = {
            name: name,
            level: Number(level),
            items: items
        }
        
        heroes.push(hero);
    })

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(',')}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])

function classVehicle(){
    class Vehicle{
        constructor(type, model, parts, fuel){
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.fuel = fuel;
            this.parts.quality = parts.engine * parts.power;

        }

        drive(fuelLoss){
            this.fuel -= fuelLoss;
        }
    }
    
    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    
    vehicle.drive(100);

    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);
}
classVehicle();
