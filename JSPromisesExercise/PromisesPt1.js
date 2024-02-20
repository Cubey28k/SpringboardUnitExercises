// 1. make a request to the numbers API to get a random number fact.
// 2. get data on multiple numbers in a single request, make the request and when you get the data back, put the number facts on a page
// 3. use the api to get 4 facts on fav number, once had, put them on the page 


//1 Step one!
let favNumber = 7;
let baseURL = "http://numbersapi.com";

fetch(`${baseURL}/${favNumber}?json`)
    .then(response => response.json())
    .then(data => {
        //display the response from the api on the page
        console.log(data.text)
    })
    .catch(error => {
        console.error('Error fetching data', error);
    });

// Step two: Get data on multiple numbers in a single request and display the facts.
let multipleNumbers = [3, 4, 5, 6];

let requestsFourNumbers = multipleNumbers.map(number => fetch(`${baseURL}/${number}?json`));

Promise.all(requestsFourNumbers)
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(dataArray => {
        dataArray.forEach(data => {
            // Display the data on the page
            console.log(data.text);
        });
    })
    .catch(error => {
        console.error('Error fetching data', error);
    });

// Step three: Use the API to get 4 facts on favorite number and display them.
let requestsFourFacts = Array.from({ length: 4 }, () => {
    return fetch(`${baseURL}/${favNumber}?json`)
        .then(response => response.json());
});

Promise.all(requestsFourFacts)
    .then(dataArray => {
        dataArray.forEach(data => {
            // Display facts
            console.log(data.text);
        });
    })
    .catch(error => {
        console.error('Error fetching data', error);
    });