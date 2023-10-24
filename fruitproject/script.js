const input = document.querySelector('#fruit');
const suggestionsList = document.querySelector('.suggestions ul');

const fruit = [
  'Apple', 'Apricot', 'Avocado 🥑', // ... (other fruits)
  'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'
];

function search(query) {
  const filteredFruits = fruit.filter(fruitName =>
    fruitName.toLowerCase().includes(query.toLowerCase())
  );
  return filteredFruits;
}

function searchHandler() {
  const query = input.value.trim();
  if (query.length > 0) {
    const results = search(query);
    showSuggestions(results);
  } else {
    suggestionsList.innerHTML = ''; // Clear suggestions if input is empty  
  }
}

function showSuggestions(results) {
  if (results.length > 0) {  //before show suggestions
    suggestionsList.innerHTML = ''; // Clear any previous suggestions

    results.forEach(result => {
      const listItem = document.createElement('li');
      listItem.textContent = result;
      suggestionsList.appendChild(listItem);
    });

    suggestionsList.style.display = 'block'; // Show the suggestion list
  } else {
    suggestionsList.style.display = 'none'; // Hide the suggestion list if there are no results
  }
}

function useSuggestion(e) {
  if (e.target.tagName === 'LI') {
    input.value = e.target.textContent;
    suggestionsList.style.display = 'none'; // Hide suggestions after selecting
  }
}

input.addEventListener('input', searchHandler);
suggestionsList.addEventListener('click', useSuggestion);


//this is an addon not neccesary, shelf until the search functionality is handled.
document.querySelector('#myButton.btn-getfruit').addEventListener('click', function(event) {
	setTimeout(() => {
		alert("You now have that imaginary fruit in front of you. Yayyyy!");
	  }, 500);
	});