const program = require("commander");

const { prompt } = require("inquirer");

const {
  addContact,
  findContact,
  getAllContact,
  updateContact,
  removeContact,
} = require("./index");

const question = [
  {
    type: "input",
    name: "firstname",
    message: "Enter First Name",
  },
  {
    type: "input",
    name: "lastname",
    message: "Enter Last Name",
  },
  {
    type: "input",
    name: "phone",
    message: "Enter Phone Number",
  },
  {
    type: "input",
    name: "email",
    message: "Enter email Name",
  },
];

program
  .version("1.0.0")
  .description("Cli Contact app with fully CRUD facilities");

// program
//      .command( 'add <firstname> <lastname> <email> <phone>' )
//      .alias( 'a' )
//      .description( 'Add a Contact' )
//      .action( ( firstname, lastname, email, phone ) => {
//           addContact( {firstname, lastname, email, phone})
//      } )


//add Contact to Mongodb
program
  .command("add")
  .alias("a")
  .description("Add a New Contact")
  .action(() => {
    prompt(question)
      .then((answer) => {
        addContact(answer);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
//Find a contact with database _id
program
  .command("find <name>")
  .alias("f")
  .description("Find a contact")
  .action((name) => {
    findContact(name);
  });
//List of all Contact
program
  .command("all")
  .alias("l")
  .description("Get all Contact")
  .action(() => {
    getAllContact();
  });
//Update contact with Database _id
program
  .command("update <_id>")
  .alias("a")
  .description("Update Contact")
  .action((_id) => {
    prompt(question)
      .then((answer) => {
        updateContact(_id, answer);
      })
      .catch((err) => {
        console.log(err.message);
      });
  } );
  
program
     .command( 'remove <_id>' )
     .alias( 'r' )
     .description( "Remove a contact" )
     .action( (_id) => {
       removeContact(_id)
  })

program.parse(process.argv);
