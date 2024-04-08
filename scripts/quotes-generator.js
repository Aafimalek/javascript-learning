const addApiURL = "https://api.quotable.io/random";
const quote = document.getElementById('quote');
const author = document.getElementById('autor');


async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;

}
getQuote(addApiURL);

function tweet() {
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "  ------ by " + author.innerHTML, "Tweet Window", "width=600px, height=300px");
}