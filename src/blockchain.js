// ./src/blockchain.js
// * Contains the class definition for a blockchain.

// * Imports
const Block = require("./block"); // Our class definition for a block

class Blockchain {
    constructor() {
        // creating a genesis block
        this.chain = [new Block(Array(65).join("0"))];
    }

    // Returns the last block in the chain
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    // Returns the length of our chain
    getChainLength() {
        return this.chain.length;
    }

    // Adds a new block to the chain
    addBlock() {
        let newBlock = new Block(this.getLastBlock().hash, global.transactions);

        this.chain.push(Object.freeze(newBlock));
    }

    // Validates the chain
    isChainValid(blockchain = this) {
        // iterating over the chain to check that the hashes are correct
        for (let i = 1; i < blockchain.chain.length; i++) {
            const currentBlock = blockchain.chain[i];
            const prevBlock = blockchain.chain[i - 1];

            // validate hashes
            if (
                currentBlock.hash !== currentBlock.getHash() ||
                prevBlock.hash !== currentBlock.prevHash
            ) {
                return false;
            }
            // checking that difficulty target has been hit on all blocks
            let checkString = Array(global.difficulty + 1).join("0");
            if (!currentBlock.hash.startsWith(checkString)) {
                return false;
            }
        }
        // if every single block is ok we return true
        return true;
    }

    // Update the chain with a new blockchain
    replaceChain(newChain) {
        // check the length of the new chain
        if (newChain.length <= this.chain.length) return;

        // check validity
        if (!this.isChainValid(newChain)) return;

        // replace your blockchain with the new blockchain
        this.chain = newChain;
    }

    // Returns a string representation of the blockchain
    prettify() {
        let chainStr = "";
        for (let i = 0; i < this.chain.length; i++){
            chainStr += this.chain[i].prettify();
            chainStr += "<br><hr>";
        }
        return chainStr;
    }
}

// Export this object to be used elsewhere
module.exports = Blockchain;
