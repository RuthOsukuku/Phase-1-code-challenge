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
 // Tweet a quote
function tweetQuote() {
    document.getElementById('twitter').addEventListener('click', function() {
      const twitterQuoteUrl = `https://twitter.com/intent/tweet?text=${quoteEl.textContent} - ${quoteAuthorEl.textContent}`;
      window.open(twitterQuoteUrl, '_blank');
    });
  }

  // Create new quotes
function createNewQuotes() {
    document.getElementById('quote-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const url = "http://localhost:3000/quotes";
      const inputQuote = document.getElementById('quote-text').value;
      const inputAuthor = document.getElementById('quote-author').value;
      const post = { inputQuote, inputAuthor };
      const configurationObject = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(post),
      };
      fetch(url, configurationObject)
        .then(res => res.json())
        .then(results => console.log("successful addition"));
      e.target.reset();
    });
  }
  
  // View quotes
function viewQuotes() {
    document.getElementById('display-quotes').addEventListener('click', function() {
      fetch('http://localhost:3000/quotes')
        .then(quoteres => quoteres.json())
        .then(newResult => newResult.forEach(quotesObj => {
          const myQuotesList = document.getElementById('quote-text');
          const newQuoteEl = document.createElement('li');
          newQuoteEl.innerText = quotesObj.inputQuote;
          myQuotesList.appendChild(newQuoteEl);
          console.log(quotesObj.inputQuote);
        }));
    });
  }
  // Delete a quote
function deleteQuote() {
    document.getElementById('delete-form').addEventListener('submit', function() {
      const id = document.getElementById('id').value;
      fetch('http://localhost:3000/quotes/' + id, {
   
      method: 'DELETE',
    })
    .then(res => res.json()) // or res.json()
    .then(res => console.log(res))
  })
    }
  