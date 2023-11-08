const memeForm = document.getElementById('meme-form');
const memeContainer = document.getElementById('meme-container');

memeForm.addEventListener('submit', function(event) {
  event.preventDefault();

  //Inputs for web user are in the next three elements
  const topText = document.getElementById('top-text').value;
  const bottomText = document.getElementById('bottom-text').value;
  const imageUrl = document.getElementById('image-url').value;

  //creates space for the meme to appear after inputs
  const memeElement = document.createElement('div');
  memeElement.className = 'meme';

  //references above variable with link to image
  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;

  //creates top image field from input at top of the image
  const topTextElement = document.createElement('div');
  topTextElement.className = 'top-text';
  topTextElement.textContent = topText;

  //creates bottom image field from input at the bottom of the image
  const bottomTextElement = document.createElement('div');
  bottomTextElement.className = 'bottom-text';
  bottomTextElement.textContent = bottomText;

  //makes it so these above elements actually generate on the page
  memeElement.appendChild(imgElement);
  memeElement.appendChild(topTextElement);
  memeElement.appendChild(bottomTextElement);

  memeContainer.appendChild(memeElement);

  //allows user to click to delete the image
  imgElement.addEventListener('click', function() {
    memeContainer.removeChild(memeElement);
  });

  memeForm.reset();
});
