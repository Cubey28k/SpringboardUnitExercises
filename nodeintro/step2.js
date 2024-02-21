//NB: the exercise instructed to paste the step1 JS document in here, this caused hoisting issues
//that created unsightly errors and also caused issues to arise around duplication because of the cat fn being called twice.
//therefore that part was modified to make the execution more streamlined.

const fs = require('fs');
const axios = require('axios');

// Function to read file content
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

// Function to read web content
async function webCat(url) {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.error(`Error fetching ${url}`);
        console.error(error);
    }
}

// Take the third argument (file path or URL) provided by the user in the console
const arg = process.argv[2];

// Verify an argument was provided, error if not
if (!arg) {
    console.error('Please provide a URL or a file path.');
    process.exit(1);
}

// Discern between a file path or URL in the arg
if (arg.startsWith('http://') || arg.startsWith('https://')) {
    // If it's a URL
    webCat(arg);
} else {
    // If it's a file path
    cat(arg);
}
