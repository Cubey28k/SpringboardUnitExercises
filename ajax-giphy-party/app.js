// console.log("Let's get this party started!");


// //inputs and buttons
// gifForm.addEventListener('submit', function(event) {
//    event.preventDefault});





//   //Gif post handling
//   async function getGif(q, api_key) {
//     const res = await axios.get('http://api.giphy.com/v1/gifs/search', 
//     {params: {q: searchTerm,api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}})

//     const gifContainer = document.getElementById("gif-container");
//     gifContainer.appendChild(imgElement)
//   }


console.log("Let's get this party started!");

const gifForm = document.getElementById('gif-form');
const gifContainer = document.getElementById('gif-container');

gifForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const searchTerm = document.getElementById('search-input').value;
  const apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

  try {
    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        q: searchTerm,
        api_key: apiKey,
      }
    });

    if (response.data.data.length > 0) {
      response.data.data.forEach((gifData) => {
        const imgElement = document.createElement('img');
        imgElement.src = gifData.images.fixed_height.url;
        gifContainer.appendChild(imgElement);
      });
    }
  } catch (error) {
    console.error('Error fetching GIFs:', error);
  }
});


/* Remove gif */
document.getElementById("remove-btn").addEventListener("click", function () {
  gifContainer.innerHTML = "";
});
