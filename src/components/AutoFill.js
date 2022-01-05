
import '../CSS/AutoFill.css';

function AutoFill(props) {
  return (
    <div className="AutoFill">
        <form className='search-container'>
            <input className='inputBox' onChange={(event)=>{props.handleChange(event);}}>
            </input>
        </form>
    </div>
  );
}

export default AutoFill;