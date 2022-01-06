
import '../CSS/AutoFill.css';
import Suggestion from './Suggestion';

function AutoFill(props) {
  return (
    <div className="AutoFill">
        <form className='search-container'>
            <input 
              className='inputBox' 
              onChange={(event)=>{props.handleChange(event);}}
            />

       { props.suggestions.length >0 &&
          <div className='search-results'>
            { props.suggestions.map((suggestion,k) => <Suggestion 
            textSuggestion={suggestion} 
            key = {k}
            />)}
          </div>
          }
        </form>
    </div>
  );
}

/*
  api 
  trie c++
*/

export default AutoFill;