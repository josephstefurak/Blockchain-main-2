// ./routes/validate.js
// * The server validates the blockchain.

function validate(app) {
    // Validate the server's instance of a blockchain
    app.get("/validate", function (request, response) {
        let responseMsg = global.navbar;

        // check the validity of chain using the ischainvalid function
        let isValid = global.blockchain.isChainValid();

        // create response
        if (isValid){
            responseMsg += "<p>Blockchain is valid</p>"
        }else{
            responseMsg += "<p>Blockchain is not valid</p>"
        }
        response.status(200).send(responseMsg);
    });
}

module.exports = validate;
