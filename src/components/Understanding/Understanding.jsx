import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Understanding = () => {
    const [understanding, setUnderstanding] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();

    //function called when Next button is pressed
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'SET_UNDERSTANDING', payload: understanding});
        history.push('/support');


    }

    return(
        <div className="understandingOuterDiv">
            <div className="understandingInnerDiv">
                <form onSubmit={handleSubmit}>
                    <label className="understandingLabel">
                        <h2>How well do you understand the content?</h2>
                        <i>
                            please select an option 0 through 5
                            <br />
                            (0 being "I have no clue what I'm doing" and 5 being "I totally get it")
                            <br />
                            then click "Next"
                        </i>
                        <br />
                        <br />
                        <select 
                            name="understanding"
                            title="Understanding Level" 
                            value={understanding}
                            className="understandingList"
                            onChange={(e) => setUnderstanding(e.target.value)}
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

export default Understanding;