import fs from 'fs';
import path from 'path';


/**
 * to  use the writeFile method of the fs module in nodejs it takes 3 parameters 
 * 1. name of the file
 * 2. the intented content
 * 3. a callback function
 * 
 * note: is the file exists with the same name then wirteFile will overwrite it in that directory
 */

fs.writeFile('content.txt', 'this is my filrst file i wil be creating from the fs nodejs module', (err) => {
    if(err) throw err;
    
    console.log("file created successfully");
})

/**
 * to read from a file
 * to be able to read the content of a file, you need to be able to get the path to the file
 * 
 * so the path moudle is required
 * required parameters 
 * 1. thee file path
 * 2. a callback function
 */

const FilePath = path.join(process.cwd(), 'content.txt');

fs.readFile(FilePath, (err, data) => {
    if(err) throw err;
    console.log(data.toString(), `\n file read successfully`);
})

/**
 * this enbles node to delete a file and not  directory
 * parameters 
 *  1. file path
 * 2. callback function
 */

 fs.unlink(FilePath, (err) => {
    if(err) throw err;
    console.log(`file deleted successfully`)
})

/**
 * creating a new directory is pretty simple use the mkdir method 
 * parameters
 * 1. the intended filepath
 * 2. an object to specify id the directory is recrsive of not
 * 3. a callabck function
 * 
 * note the recursive set to true enable the module to generate flders in sidde folders,
 * without it set to true, you cannot create multiple folders inside wach other
 */

const IntentdedDir = `${process.cwd()}/dirFolders/thisFolder1`;

fs.mkdir(IntentdedDir, {recursive: true}, (err) => {
    if(err )throw err;
    console.log(`directory generated, i dont what i want ot use this knowledge for o`);
})



/**
 * to read all the content in a particular directory 
 * requirements
 * 1. path to the file
 * 2. the callback function
 * parameters of the callback function
 * 1. err
 * 2. files
 * 
 * returns a array of files
 */
fs.readdir(process.cwd(), (err, files) => {
    if(err) throw err;
    
    console.log(files);
});

/**
 * to delete a folder
 * parameters
 * 1. the path to the folder
 * 2. the recursive property
 * 3. the callback function
 */

 fs.rmdir(IntentdedDir, {recursive: false}, (err) => {
     if(err) throw err;
     console.log(`directory droped`);
     
 })