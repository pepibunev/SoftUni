const phonebook = require('../phonebook');
const Contact = require('../models/Contact');

module.exports = {
  index: (req, res) => {
    const contacts = phonebook.getContacts();

    res.render('index', {contacts});
    // TODO: load index page
  },
  addPhonebookPost:(req, res) => {
    //Get input from client
    let name = req.body.name;
    let number = req.body.number;

    //Create model
    const contact = new Contact(name, number);

    //Check if contact is already in contact
    if (phonebook.hasContact(contact)){
      return res.render('404');
    }

    //Push model to database
    phonebook.addContacts(contact);

    //Redirect to home page
    res.redirect('/');

    // TODO: add a phonebook object to the array
  },
  removeContact:(req, res) => {
    const contact = req.body.contacts;
    phonebook.removeContact(contact);
    res.redirect('/');
  }
}