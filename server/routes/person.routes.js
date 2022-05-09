// const PersonController = require('../controllers/person.controller');  //Import the code from Code Block 1
// module.exports = (app) => {
//     app.get('/api', PersonController.index);
// }

// above pasted from platform; refactored below

const PersonController = require('../controllers/person.controller');  //Import the code from Code Block 1

module.exports = (app) => {
    app.get('/api', PersonController.personIndex);
    app.post('/api/people', PersonController.createPerson); 
    app.get('/api/people', PersonController.getAllPersons)
}; 
