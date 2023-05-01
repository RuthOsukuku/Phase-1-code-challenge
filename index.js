document.addEventListener('DOMContentLoaded', function() {
    fetchQuotes();
    generateRandomQuote();
    tweetQuote();
    addQuote(quote);
    createNewQuotes();
    viewQuotes();
    deleteQuote();
  });
// Use fetch request to get all the quotes
const fetchQuotes = () => {
    fetch('https://type.fit/api/quotes')
      .then(res => res.json())
      .then(data => {
        data.forEach(quoteObject => {
          const quoteList = document.getElementById('quote-list');
          const quoteEl = document.createElement('li');
          const spanAuthor = document.createElement('p');
  
          quoteEl.innerText = `${quoteObject.text}`;
          spanAuthor.innerText = `${quoteObject.author}`;
          spanAuthor.className = 'quote-span';
          quoteEl.appendChild(spanAuthor);
          quoteList.appendChild(quoteEl);
        });
      });
  };
  
  // Generate a random quote on click of a button
function generateRandomQuote() {
    quoteEl = document.getElementById('quote');
    quoteAuthorEl = document.getElementById('author');
  
    document.getElementById('new-quote').addEventListener('click', function(e) {
      fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
          const randomQuoteIndex = Math.floor(Math.random() * data.length);
          const quoteText = data[randomQuoteIndex].text;
          let author = data[randomQuoteIndex].author;
  
          if (!author) {
            author = 'Unknown';
          }
  
          if (quoteText.length > 120) {
            quoteEl.classList.add('long-quote');
          } else {
            quoteEl.classList.remove('long-quote');
          }
          quoteEl.textContent = quoteText;
          quoteAuthorEl.textContent = author;
        });
    });
  }
  