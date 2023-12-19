// ./routes/mine.js
// * The server mines a new block, and adds it to its personal chain.

function mine(app) {
    app.get("/mine", (request, response) => {
        let responseMessage = global.navbar;

        // add a block in the chain
        global.blockchain.addBlock();

        // clear our transactions
        global.transactions = [];

        // send the block that was mined
        responseMessage += `<p>Block added: ${global.blockchain.getLastBlock().prettify()} </p>`;
        response.status(200).send(responseMessage);
    });
}

module.exports = mine;
