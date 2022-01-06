
import '../CSS/AutoFill.css';

function Suggestion(props) {

    function changeThis(){
        props.selectWord(props.textSuggestion);
        console.log(props.textSuggestion);
    }

  return (
    <div className='text-suggestion' onClick={changeThis} >
        {props.textSuggestion}
    </div>
  );
}

export default Suggestion;