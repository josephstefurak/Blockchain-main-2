[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10490409&assignment_repo_type=AssignmentRepo)
# Blockchain (JavaScript)

This project is a blockchain server-client node implementation in JavaScript.

## Overview of the Mockchain structure

The project focuses on implementation of the chain itself and functionality
surrounding it as a list. To this end, hashing functions and chain validation is
the major focus.

The project is simply interactive through the browser, and can be accessed at
the following endpoints:

-   `/mine`: A new block is generated and added to the listing.
-   `/chain`: The full chain is printed out.
-   `/newtransaction`: A new transaction is generated, from a mock source IP to
    a mock destination IP.
-   `/validate`: The chain on the node is validated for correctness.
-   `/listtransactions`: All transactions are listed out.
-   `/brew`: The server attempts to brew coffee.

These more demonstrate the functionality of blockchain as a data structure. More
emphasis on network and connectivity is covered in other projects.

# Grading

60 points: Code Functionality (based on usability through routes)

40 points: Essay 

20 pts: Draw out a diagram showing what is contained in each
block, and how they are connected to make a blockchain. Show where this is created in your code

20 pts: explain at a
basic level what one would need to add to allow PoS on this blockchain (150+
words will do for full credit assuming these words pertain to the question)
