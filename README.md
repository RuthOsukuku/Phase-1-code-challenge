# Phase-1-code-challenge
# Phase 1 Project Guidelines

## Learning Goals

- Design and architect features across a frontend
- Communicate and collaborate in a technical environment
- Integrate JavaScript and an external API
- Debug issues in small- to medium-sized projects
- Build and iterate on a project MVP

## Introduction

Welcome to JavaScript Project Mode!

You’ve worked so hard to get here and have learned a ton. Now it's time to bring
it all together!

For this project, you're going build a Single Page Application (**SPA**).
Building this application will be challenging because it will integrate
everything you've learned up to this point. Your frontend will be built with
HTML, CSS, and JavaScript and will communicate with a public API.

### Project Requirements

1. Your app must be a HTML/CSS/JS frontend that accesses data from a public API.
   All interactions between the client and the API should be handled
   asynchronously and use JSON as the communication format.

2. Your entire app must run on a single page. There should be NO redirects. In
   other words, your project will contain a single HTML file.

3. Your app needs to incorporate at least 3 separate event listeners
   (DOMContentLoaded, click, change, submit, etc).

4. Some interactivity is required. This could be as simple as adding a "like"
   button or adding comments. These interactions do not need to persist after
   reloading the page.

5. Follow good coding practices. Keep your code DRY (Do not repeat yourself) by
   utilizing functions to abstract repetitive code.

### Stretch Goals

1. Use [json-server][] in your project to persist your app's interactivity.

## Strategy, Timeline, and Tips

### Planning

- Plan out your features
- Develop user stories
  - “As [ a user ], I want [ to perform this action ] so that
    [ I can accomplish this goal ].”
  - Features should not need you there to explain them to users
- Plan out the structure of your JSON requests

### Project Pitches

Before you start working on your project, you'll pitch your project idea to your
instructors for approval and feedback.

For your project pitch, you should include:

- The basic story of your application
- The core features of your MVP
- The API data you'll be using and how you'll use it
- Challenges you expect to face
- How you are meeting the requirements of the project

Feel free to send this pitch to your instructor via slack asynchronously.

### MVP ASAP

- Build a Minimum Viable Product (MVP) as quickly as possible.
  - Pick an API and explore it early on to ensure it will work for your need

### Instructor Guidance

You should strive to solve problems independently, but you also shouldn't waste
your time stuck on a problem. A good guideline for a small bug is the rule of
10s:

- 10 minutes debugging the code
- 10 minutes using Google and StackOverflow to try to find an answer
- 10 minutes asking your fellow students for help
- Asking an instructor

If you seek out instructor guidance on your design from the start, they might
help steer you into design and architectural decisions that will help you down
the road. That will also give the instructors context for what your app is
supposed to do, so you won't need to explain everything to them when asking for
help debugging.

### Guidelines for Staying Organized

**Write down** the decisions you make about your project. This will not only
help you think more clearly, it will also help you communicate your project to
instructors when asking for help. In addition to writing everything down, we
also recommend the following to help stay organized and on track:

- Describe/sketch your ideas (use diagrams!).
- Start by creating a frontend directory with the basic files you'll need
- Next, build enough code to get some API data to work with. Don't worry about
  building all of your async code yet, just get to the point where you can
  access one endpoint on an API, then start working on getting that data
  displayed.
- Then, continue to build additional async code and frontend features.
- Continue building features one by one.

Check in with your instructors to make sure your scope and timeline are
manageable.

### JSON Server Instructions

> **Note**: Using `json-server` is a stretch goal, so make sure you have a
> working MVP before trying to set up `json-server`!

You can use this [json-server template][] to generate your backend code. Using
this template will make it easier to deploy your backend later on.

[json-server template]: https://github.com/learn-co-curriculum/json-server-template

If you prefer, instead of using the template, you can create a `db.json` file
with a structure in the root of your project that looks like this:

```json
{
  "toys": [
    {
      "id": 1,
      "name": "Woody",
      "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
      "likes": 8
    },
    {
      "id": 2,
      "name": "Buzz Lightyear",
      "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
      "likes": 14
    }
  ]
}
```

Then, assuming you have `json-server` installed globally, you can run this
command to run the server:

```console
$ json-server --watch db.json
```

Whatever top-level keys exist in your `db.json` file will determine the routes
available. In the example above, since we have a key of `toys` pointing to an
array of toy objects, `json-server` will generate the following routes:

- `GET /toys`
- `POST /toys`
- `GET /toys/:id`
- `PATCH /toys/:id`
- `DELETE /toys/:id`

You can consult the [json-server docs][] for more information.

[json-server docs]: https://www.npmjs.com/package/json-server

## Resources

- [Public APIs](https://github.com/public-apis/public-apis)
- [Fun APIs](https://apilist.fun/)
- [json-server][]

[json-server]: https://www.npmjs.com/package/json-server
//fetchQuotes(): This function sends a GET request to the API endpoint "https://type.fit/api/quotes" to retrieve an array of quote objects. It then loops through each quote object and creates a list item element that displays the quote text and author (if available), and appends it to an unordered list element with the ID "quote-list".

//generateRandomQuote(): This function listens for a click event on an element with the ID "new-quote". When triggered, it sends a GET request to the same API endpoint to retrieve the array of quote objects. It then generates a random index to select a quote object from the array, and sets the text content of two elements with the IDs "quote" and "author" to the selected quote's text and author (if available). If the quote is longer than 120 characters, it adds a "long-quote" class to the "quote" element.

//tweetQuote(): This function listens for a click event on an element with the ID "twitter". When triggered, it constructs a URL with the text content of the "quote" element and the "author" element, and opens a new window to the Twitter intent page with the constructed URL. This allows the user to tweet the quote.

//createNewQuotes(): This function listens for a form submission event on an element with the ID "quote-form". When triggered, it prevents the default form submission behavior, retrieves the user input from two input fields with the IDs "quote-text" and "quote-author", constructs a POST request body object with the input values, and sends a POST request to a local server endpoint "http://localhost:3000/quotes". The function then logs a message to the console and resets the form.

//viewQuotes(): This function listens for a click event on an element with the ID "display-quotes". When triggered, it sends a GET request to the same local server endpoint to retrieve an array of quote objects. It then loops through each quote object and creates a list item element that displays the quote text, and appends it to an unordered list element with the ID "quote-text".

//deleteQuote(): This function listens for a form submission event on an element with the ID "delete-form". When triggered, it retrieves the ID value from an input field with the ID "id", constructs a DELETE request to the local server endpoint with the retrieved ID, and sends the request. The function then logs a response message to the console.

//makePatchRequest(): This function sends a PATCH request to the local server endpoint with the ID value of 2, and a request body object that updates the author name of the quote with the ID of 2. The function then logs the response object to the console. However, this function is commented out and not currently being used in the code.
