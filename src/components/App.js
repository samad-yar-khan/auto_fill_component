import React from 'react'
import AutoFill from './AutoFill.js'; 
import '../CSS/App.css'


class App extends React.Component {

    constructor(){
      super(); //must call parents constructor first 
      this.state = {
        seachText : "",  
      }
    }

    handleChange=(event)=>{
      let text = event.target.value;
      console.log(text);
    }

    render(){

      return (
        <div className="App">
          <div className="App-body">
          <AutoFill
              text={this.state.seachText}
              handleChange={this.handleChange}
            />
          </div>
        </div>
      );
      }
  }

export default App;