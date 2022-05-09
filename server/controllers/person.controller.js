// module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
//     response.json({     // This is where we're setting the API's response to the requesting client
//        message: "Hello MERNy World"
//     });
// }

// above copy/paste from site ; redone below

const Person = require("../models/person.model"); 

const personIndex = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
       message: "Hello MERNy World"
    });
}; 

const createPerson = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Person.create(request.body) //This will use whatever the body of the client's request sends over
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

const getAllPersons = (request, response) => {
    Person.find({})
    .then((persons) => {
        response.json(persons); 
    })
    .catch((err) => {
        response.status(500).json(err); 
    }); 
}; 

module.exports = {
    personIndex
    , createPerson
    , getAllPersons
}; 