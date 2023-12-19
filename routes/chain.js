// ./routes/chain.js
// * The server prints out the entire blockchain.

function chain(app) {
    // Print out the entire blockchain
    app.get("/", function (request, response) {
        let chainStr = global.navbar;
        chainStr += global.blockchain.prettify();

        response
            .status(200)
            .send(chainStr);
    });
}

module.exports = chain;
