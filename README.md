# jQuery Jeopardy

Welcome to Jeopardy! In this assignment, you'll create an application that asks the user Jeopardy questions and saves their score (even when the page is refreshed).

Check out a demo of what this might look like below:

<img src="demo.gif"/>

## Requirements

* A grid of Jeopardy dollar amounts are displayed on the screen
* Upon clicking an dollar amount, a question is displayed
* The user can submit an answer
  * If they are correct, their score is updated
* The user's score should be saved even if the page is refreshed
* jQuery is used throughout the Javascript instead of `document.createElement`, `document.querySelector`, etc.

## Overview

Included in this assignment is `jeopardy.js`, a file defines a variable "QUESTIONS" which is an array that contains ~50,000 Jeopardy questions. It looks like this:

```javascript
const QUESTIONS = [
  {
    "showNumber": 4680,
    "date": "12/31/04",
    "round": "Jeopardy!",
    "category": "HISTORY",
    "value": "$200",
    "question": "For the last 8 years of his life, Galileo was under house arrest for espousing this man's theory",
    "answer": "Copernicus"
  },
  "..."
```

You'll use this data file to get Jeopardy questions and answers. 

For the base assignment, if the user clicks a $200 question, the app will display a random $200 question from the dataset (and same with the other dollar amounts).

## Steps

#### 1. Create your files

* Start off by creating an `index.html`, `main.js`, and `styles.css`
* In `index.html`, add two `script` tags to import firt `jeopardy.js` followed by `main.js`
* Also add a `link` tag to import `styles.css`

#### 2. Build the grid of $ amounts

Write code to build the grid of $100, $200, etc. This could be done in `index.html`, but I'd recommend doing this through `main.js` using the jQuery equivalents of `document.createElement` and `.appendChild`.

Also add some style rules in `styles.css` to make things look reasonable.

#### 3. 
