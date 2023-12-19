// ./index.js
// * Imports
const express = require("express"); // Imports Express's class definition
const morgan = require("morgan"); // Imports Morgan's class definition
// Imports from our class modules
const Blockchain = require("./src/blockchain");

// global variables
global.difficulty = 5; // target number of 0's
global.blockchain = new Blockchain(); // creating a blockchain instance
global.transactions = []; // creating an empty transactions list

// create an express app
const app = express();
// use morgan again for logging
app.use(morgan("dev"));

// port to listen on
const port = 8080;

global.navbar = `<div>
<a href = "http://localhost:${port}/">
    <button type = "button">Home</button>
</a>
<a href = "http://localhost:${port}/mine">
    <button type = "button">Mine</button>
</a>
<a href = "http://localhost:${port}/newtransaction">
    <button type = "button">New Transaction</button>
</a>
<a href = "http://localhost:${port}/listtransactions">
    <button type = "button">List Transactions</button>
</a>
<a href = "http://localhost:${port}/validate">
    <button type = "button">Validate</button>
</a>
<a href = "http://localhost:${port}/brew">
    <button type = "button">Brew Coffee</button>
</a>
<br>
</div>`;

// dynamically load
require("./routes/DLR.js")(app);
// get the server
app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}/`);
})