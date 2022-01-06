
import '../CSS/AutoFill.css';
import Suggestion from './Suggestion';

function AutoFill(props) {
  return (
    <div className="AutoFill search-container">
        <div className='search-container'>
            <input 
              className='inputBox' 
              value={props.textValue}
              onChange={(event)=>{props.handleChange(event);}}
            />
        </div>
        { props.suggestions.length >0 &&
          <div className='search-results'>
            { 
            props.suggestions.map((suggestion,k) => <Suggestion 
            textSuggestion={suggestion} 
            key = {k}
            selectWord = {props.selectWord}
            />)
            }
          </div>
          }
    </div>
  );
}

/*
  api 
  trie c++
*/

export default AutoFill;
