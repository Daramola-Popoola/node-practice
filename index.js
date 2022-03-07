import fs from 'fs';
// import path from 'path';


/**
 * to  use the writeFile method of the fs module in nodejs it takes 3 parameters 
 * 1. name of the file
 * 2. the intented content
 * 3. a callback function
 */

fs.writeFile('content.txt', 'this is my filrst file i wil be creating from the fs nodejs module', (err) => {
    if(err) throw err;
    
    console.log("file created successfully");
})