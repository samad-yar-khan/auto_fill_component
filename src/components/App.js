import React from 'react'
import AutoFill from './AutoFill.js';
import axios from 'axios'; 
import '../CSS/App.css'

// Trie can be used for caching to avoid API calls
function Node(value){
  this.value = value
  this.isEndOfWord = false // false by default, a green node means this flag is true
  this.children = {} // children are stored as Map, where key is the letter and value is a TrieNode for that letter 
  this.suggestions = {}
}

class Trie{
  constructor(){
    this.root = new Node(null)
  }
  // constructor (newTrie){
  //   this.root = new Node(newTrie.root);
  // }

  insert(word,suggestions){
    let current = this.root;
    // iterate through all the characters of word
    for(let character of word){
         // if node doesn't have the current character as child, insert it
         if(current.children[character] === undefined){
             current.children[character] = new Node(character);
         }
        // move down, to insert next character
        current = current.children[character]  
    }
    // mark the last inserted character as end of the word
    // objectcurrent.suggestions = suggestions;
    Object.assign(current.suggestions,suggestions);
    current.isEndOfWord = true;
  }

  search(word){
     let current = this.root
    // iterate through all the characters of word
    for(let character of word){
         if(current.children[character] === undefined){
             // could not find this character in sequence, return false
             return {
              foundWord:false
             }
         }
        // move down, to match next character
        current = current.children[character]  
    }
     // found all characters, return true if last character is end of a word
    return {
      foundWord : current.isEndOfWord,
      suggestions : Object.values(current.suggestions)
    }
  }
}

class App extends React.Component {

    constructor(){
      //redux
      super(); //must call parents constructor first 
      this.state = {
        seachText : "",
        suggestions : [],
        dictionary : new Trie()
      }
    }

    componentDidMount(){
      let dictionary = JSON.parse(localStorage.getItem('auto-fill-dictionary'));
      
      
      //taking dictonary from cache
      if(dictionary!==null && dictionary!==undefined){
        let dictTemp = this.state.dictionary;
      dictTemp.root = dictionary.root;
        this.setState({
          dictionary:dictTemp
        })
      }

      //we reset the cache to new value every 30 secs
      this.setEventCache = setInterval(()=>{
        localStorage.setItem('auto-fill-dictionary',JSON.stringify(this.state.dictionary));
      }, 30000);
    }

    componentWillUnmount(){
      clearInterval(this.setEventCache);
    }

    handleChange= async (e)=>{



      let text = e.target.value;
      //text -> filter
      if(text === ""){
        this.setState({
          seachText:text,
          suggestions:[]
        });
        return;
      }

      //check if we alrewayd have results for the word

      let searchResult = this.state.dictionary.search(text);

      if(searchResult.foundWord){
        // console.log("found in dict!");
        this.setState({
          seachText:text,
          suggestions:searchResult.suggestions
        });
        return;
      }

      try{
      
        let data = await axios(
          {
            method:'get',
            url : `https://api.datamuse.com/sug?s=${text}`
          }
        );
    
     

        let suggestions = data.data.map((element) => element.word);
        // console.log("called Api");
        this.state.dictionary.insert(text,suggestions);
       this.setState({
        seachText :text,
         suggestions : suggestions
       });
        // this.setState({
        //   suggestions:suggestions
        // });
       
      }catch(err){
        console.log(err);
      }
    
    }

    selectWord = (word)=>{
      this.setState(
        {
          seachText : word
        });
    }

    render(){

      return (
        <div className="App">
          <div className="App-body">
            <AutoFill
              textValue={this.state.seachText}
              handleChange={this.handleChange}
              suggestions={this.state.suggestions}
              selectWord= {this.selectWord}
            />
          </div>
        </div>
      );
      }
  }

export default App;