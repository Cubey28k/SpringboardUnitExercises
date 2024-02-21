const fs = require('fs');

//creates the cat function for reading files and putting
//them into the console
function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}`);
            console.error(err);
            return;
        }
        console.log(data);
    });
}

//takes the third argument (file path) provided by the user in the console
const filePath = process.argv[2];

//verifies a file path was given and gives an error if not
if (!filePath) {
    console.error('please provide a file path as an argument.');
    process.exit(1);
}

//finally calls the cat function with the filepath provided
cat(filePath);