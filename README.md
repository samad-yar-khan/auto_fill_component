<h1 align="center">
    AutoFill Suggestions
</h1>

<blockquote align="center">
  <b><i>
        This is React Componet which can be used in any React Application to provide the user with auto-fill/auto-complete keywords while writing content. 
  </i></b>
</blockquote>

<br/>

## Installation

To run the Web Application on your local system download Node.js - https://nodejs.org/en/download/ . This will give you access to the node package manager which is essential to run the project .

### 📌 Setting up project using `npm` :

1. Open this cloned folder in the text editor of your choice.
2. If you want to use the project using `npm` then that comes alongside when you download and install node js.

### 🚩 Running in Development mode :

1. Open the terminal and type in `npm install`, to install all the dependencies.
2. Run: `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
4. The page will reload if you make edits.

### 🚩 Testing changes :

1. After doing changes type `npm test`. This launches the test runner in the interactive watch mode.
2. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 🚩 Building project :

1. Run the command `npm run build`
2. Builds the app for production to the `build` folder.
3. It correctly bundles React in production mode and optimizes the build for the best performance.
4. The build is minified and the filenames include the hashes.
   Your app is ready to be deployed!
5. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Usage

After typing `npm start` in the terminal , the project can be used opened on [http://localhost:3000](http://localhost:3000).

### 1)App   
The App Component is the parent compoent of AutoFill componet where the user can type input.The App component has essential functions and classes which are needed for the AutoFill Component to work effecintly.


### 2)AutoFill 
The Auto fill component is a stateless contolled component which takes props from its parent , which report its channges to the parents and fetch results accordingly.


### 3)Suggestion
The Autofill will display an array of suggestion for each incomplete word and these arey dispalyed in the form of pills.


## 💻 Working/WorkFlow

### 1)Input
The AutoFill component has an event handler which calls the handleChange function whenever a change is done to the input.


### 2)handleChange 
The handle change function will make an api call for the incomplete word of the input and fetch suggestions from the server.


### 3)Caching (Optimisation using Trie)
In an effort to minimise redundant API Calls we have used a Trie for which stores the suggestions for different prefexes. The Trie is stored in our Cache(local storage of user) and is reset every 30 seconds. The system is checked for pre-existing Trie in Cache whenever the component is rendered.  

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.Please make sure to update tests as appropriate.
### 📌 Prerequisites

### 💻 1. System requirement :

1. Any system with basic configuration.
2. Operating System : Any (Windows / Linux / Mac).

### 💿 2. Software requirement :

1. Updated browser
2. Node.js installed (If not download it [here](https://nodejs.org/en/download/)).
3. Any text editor of your choice.

### ⚡ 3. Skill set :

1. Knowledge of git & github.
2. JavaScript
3. [ReactJS](https://reactjs.org/)

## Feel free to test the hosted  version of the component and dont forget to star the repo if it proves helpful !

