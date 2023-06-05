//syntaxis

// let propertyName = 'stamat stamatov';

// let phoneBook = {
//     ivaylo: '08232422',
//     'petur': '0877581691',
//     stoyan: '908088008',
//     [propertyName]: '248191091240' // dynamic property name
// };
// console.log(phoneBook.ivaylo);
// console.log(phoneBook['petur']);
// console.log(phoneBook[propertyName]);

// let phoneBook = {
//     ivaylo: '122355124',
//     petur: '23231321',
//     gosho: '22323232',
//     stamat: '231232112',
//     vito: '2323232321',
// };

// for (let name in phoneBook){
//     console.log(`${name} -> ${phoneBook[name]}`);
// }

function printPhoneBook(input){
    let phoneBook = {};

    for (const entry of input){
        let [name, phone ] = entry.split(' ');
        //let entryArr = entry.split(' '); // ['Tim', '083421231']
        // phoneBook[entryArr[0] = entry[1]];
        
        
        // let name = entryArr[0];
        // let phone = entryArr[1];

         phoneBook[name] = phone;
    }

    for (let name in phoneBook){
        console.log(`${name} -> ${phoneBook[name]}`);
    }

}

let phoneBook = {
        ivaylo: '122355124',
        petur: '23231321',
        gosho: '22323232',
        stamat: '231232112',
        vito: '2323232321',
    };

let {petur, gosho} = phoneBook;
console.log(petur);
console.log(gosho);

let phoneBookEntreis = Object.entries(phoneBook);

for (const kvp of phoneBookEntreis) {
    name = kvp[0];
    phone = kvp[1];

    console.log(`${name} -> ${phone}`);
}

for (const kvp of Object.entries(phoneBook)){
    let [name, phone] = kvp;

    console.log();
}

for (let [name, phone] of Object.entries(phoneBook)){
    console.log();
}

function meetings (input){
    const meetings = {};

    for (const entry of input) {
        let [day, name] = entry.split(' ');

        if (meetings[day]){
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let )

}
meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);


let phoneBook = {
    ivaylo: '122355124',
    petur: '23231321',
    gosho: '22323232',
    stamat: '231232112',
    vito: '2323232321',
};

// convert associative arr to normal arr
let phoneBookEntreis = Object.entries(phoneBook);
// sort the arr
phoneBookEntreis.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
console.log(phoneBookEntries);
//optional : convert back to associative arr
let sortedPhoneBook = Object.entries(phoneBookEntreis);
console.log(sortedPhoneBook);


function createAddressBook(input){
    addressBook = {};

    for (const line of input) {
        let [name, address] = line.split(':');
        
        addressBook[name] = address;
    }

    adressBookEntries = Object.entries(addressBook);
    adressBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const entry of adressBookEntries) {
        name = entry[0];
        adress = entry[1];

        console.log(`${name} -> ${address}`);
        
    }
}
createAddressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);

//sort arr by value
let addressBook = {
    Tim:'Doe Crossing',
    Bill:'Nelson Place',
    Peter:'Carlyle Ave',
    Bill:'Ornery Rd',

};

adressBookEntries = Object.entries(adressBook);

adressBookEntries.sort((entryA, entryB) => entryA[1].localeCompare(entryB[1]));

console.log(adressBookEntries);

//map

map = new Map();

map.set('Petur', '12312313');
map.set('Hosho', '23123123');
console.log(map);

console.log(map.get('Petur'));
console.log(map.size);

if (map.has('Hosho')) {
    console.log('Hosho is in the house');
}

map.delete('Hosho');

for (const key of map.keys()){
    console.log(key);
}
