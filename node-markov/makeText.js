/** Command-line tool to generate Markov text. */

const fs = require('fs');
const axios = require('axios');
const markov = require('./markov');
const process = require('process');

function generateMarkovText(text) {
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText())
}

//* function below takes a .txt file and does markov wonders upon it

function makeText(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}`);
            console.error(err);
            return;
        }
        generateMarkovText(data);
    });
}

//* function below takes a URL and makes text from it

async function makeURLText(url) {
    try {
        const response = await axios.get(url);
        console.log(response.data);
        generateMarkovText(response.data)
    } catch (error) {
        console.error(`Error fetching ${url}`);
        console.error(error);
    }
}

//* here we actually take input on the cmd line in our console and spit it out

const [method, path] = process.argv.slice(2);

switch (method) {
    case 'file':
        makeText(path);
        break;
    case 'url':
        makeURLText(path);
        break;
    default:
            console.error(`Invalid method: ${method}`);
            process.exit(1);
}