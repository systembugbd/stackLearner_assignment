const mongoose = require("mongoose");

//connect to db
// Map global promise - get rid of warnings
mongoose.Promise = global.Promise;

const db = mongoose.connect(
  "mongodb+srv://user:password@storages.blqnk.mongodb.net/Contact?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//import module
const Contact = require("./models/Contact");

mongoose.set("useFindAndModify", false);

//add Contact
const addContact = (contact) => {
  Contact.create(contact)
    .then((contact) => {
      console.info("new Contact Added");
      console.info("Your New Contact", contact);
    })
    .catch((err) => {
      console.error(err);
    });
};

//Find Contact
const findContact = (name) => {
  //Make case insensitive
  const search = new RegExp(name, "i");
  Contact.find({
    $or: [
      { firstname: search },
      { lastname: search },
      { phone: search },
      { email: search },
    ],
  })
    .then((contact) => {
      console.info(contact);
      console.info(`${contact.length} matches`);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getAllContact = () => {
  Contact.find()
    .then((contact) => {
      console.info(contact);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const updateContact = (_id, contact) => {
  Contact.updateOne({ _id }, contact)
    .then((contact) => {
      console.info(contact.length, "Contact Updated");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const removeContact = (_id) => {
  Contact.findOneAndRemove({ _id })
    .then((contact) => {
      console.info(contact, "contact removed from database");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//Export all Methods
module.exports = {
  addContact,
  findContact,
  getAllContact,
  updateContact,
  removeContact,
};
