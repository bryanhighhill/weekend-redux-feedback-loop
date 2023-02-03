import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Feeling = () => {
    const [feeling, setFeeling] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();

    //function called when Next button is pressed
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'SET_FEELING', payload: feeling});
        history.push('/understanding');


    }

    return(
        <div className="feelingOuterDiv">
            <div className="feelingInnerDiv">
                <form onSubmit={handleSubmit}>
                    <label className="feelingLabel">
                        <h2 className="feelingHeader">How are you feeling today?</h2>
                        <i>
                            please select an option 0 through 5
                            <br />
                            (0 being awful and 5 being incredible)
                            <br />then click "Next"
                        </i>
                        <br />
                        <br />
                        <select 
                            name="feeling" 
                            value={feeling}
                            className="feelingList"
                            onChange={(e) => setFeeling(e.target.value)}
                        >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <button 
                        type="submit"
                        className="nextButton"
                    >
                        Next
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Feeling;