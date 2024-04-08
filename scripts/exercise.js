const form = document.getElementById('cardForm');
const cardContainer = document.getElementById('cardContainer');

form.addEventListener('submit', function (event) {

  event.preventDefault();
  const imageLink = document.getElementById('imageLink').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;


  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = imageLink;

  const titleElement = document.createElement('h3');
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;


  card.appendChild(image);
  card.appendChild(titleElement);
  card.appendChild(descriptionElement);

  cardContainer.appendChild(card);

 // form.reset();

});