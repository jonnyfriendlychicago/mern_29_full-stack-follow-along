const express = require("express"); 
const cors = require("cors"); 
const app = express(); 

app.use(cors())                 

// below is "body parser"
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

/* This is a short-hand notation we use: */
require('./config/mongoose.config'); 

// all routes must be listed here: below the express.json/urlencoded and above the port/app.listen 
// ! update name of route file(s) below
require('./routes/ent.routes')(app); 
require('./routes/person.routes')(app); 




const port = 8000; 
app.listen(port, () => {
    console.log(`Express server running on port ${port}.  Rack 'em.`)
});

