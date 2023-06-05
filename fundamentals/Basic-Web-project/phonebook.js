/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
const fs = require('fs');

const phonebookJson = fs.readFileSync('db.json');
const phonebookArray = JSON.parse(phonebookJson, null, 2);

function getContacts(){
	return phonebookArray.slice();
}

function addContacts(contact){
	phonebookArray.push(contact);
	let jsonData = JSON.stringify(phonebookArray, null, 2);
	fs.writeFileSync('db.json', jsonData);
	
}

function hasContact(contact){
	const exists = phonebookArray.some(x => x.name === contact.name && x.number === contact.number);
	return exists;
}

function removeContact(contact){
	delete this.contacts[contact.name, contact.number];
}

module.exports = {
	getContacts,
	addContacts,
	hasContact,
	removeContact,
};