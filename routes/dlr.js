// ./routes/dlr.js
// * Dynamically loads route files included in this folder.

// * Imports
const fs = require("fs"); // Used for file indexing; Built-in

function dynamicallyLoadRoutes(app) {
    // Read all of the filenames in the current folder, then apply this function
    //  to each of them
    let filenames = fs.readdirSync(__dirname);
    console.log(filenames.length);
    filenames.forEach((filename)=>{
        if (
            filename === "dlr.js" ||
            filename.split(".")[1] !== "js"
        ){
            return;
        }
        let jsModule = filename.split(".")[0];
        require("./" + jsModule)(app);
    });
}
module.exports = dynamicallyLoadRoutes;

