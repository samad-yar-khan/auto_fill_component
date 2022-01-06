import React from 'react'
import AutoFill from './AutoFill.js';
import axios from 'axios'; 
import '../CSS/App.css'

function Node(value){
  this.value = value
  this.isEndOfWord = false // false by default, a green node means this flag is true
  this.children = {} // children are stored as Map, where key is the letter and value is a TrieNode for that letter 
  this.suggestions = []
}

class Trie{
  constructor(){
    this.root = new Node(null)
  }

  insert(word){
    let current = this.root
    // iterate through all the characters of word
    for(let character of word){
         // if node doesn't have the current character as child, insert it
         if(current.children[character] === undefined){
             current.children[character] = new Node(character)
         }
        // move down, to insert next character
        current = current.children[character]  
    }
    // mark the last inserted character as end of the word
    current.isEndOfWord = true
  }

  search(word){
     let current = this.root
    // iterate through all the characters of word
    for(let character of word){
         if(current.children[character] === undefined){
             // could not find this character in sequence, return false
             return false
         }
        // move down, to match next character
        current = current.children[character]  
    }
     // found all characters, return true if last character is end of a word
    return current.isEndOfWord
  }
}

class App extends React.Component {

    constructor(){
      //redux
      super(); //must call parents constructor first 
      this.state = {
        seachText : "",
        suggestions : [],
        dictionary : Trie
      }
    }

     handleChange= async (e)=>{


      let text = e.target.value;
      //text -> filter
      if(text === ""){
        this.setState({
          suggestions:[]
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
    
        console.log(data.data);

        let suggestions = data.data.map((element) => element.word);
       this.setState({
         suggestions : suggestions
       });
        // this.setState({
        //   suggestions:suggestions
        // });
       
      }catch(err){
        console.log(err);
      }
    
    }

    render(){

      return (
        <div className="App">
          <div className="App-body">
            <AutoFill
              textValue={this.state.seachText}
              handleChange={this.handleChange}
              suggestions={this.state.suggestions}
            />
          </div>
        </div>
      );
      }
  }

export default App;