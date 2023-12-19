// ./routes/listtransactions.js
// * Lists all transactions in the system, not currently on blocks.

// * Imports
const Transaction = require("../src/transaction");

function listtransactions(app) {
    // List all transactions
    app.get("/listtransactions", function (request, response) {
        let txStr = global.navbar;
        // iterate through all transactions and print them
        for (let i = 0; i < global.transactions.length; i++){
            txStr += global.transactions[i].prettify();
        }
        response
            .status(200)
            .send(txStr);
    });
}

module.exports = listtransactions;