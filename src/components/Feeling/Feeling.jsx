import { useState, useRoute } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Feeling = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState(0);
    const [buttonDisable, setButtonDisable] = useState(true);
    const [updateButton, setUpdateButton] = useState(false);

    const changeHandler = (value) => {
        setFeeling(value);
        setButtonDisable(false);
    }

    //function called when Next button is pressed
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'SET_FEELING', payload: feeling}),
        history.push('/understanding')
        }

    //function to update feedback and return to review page
    const updateFeedback = (e) => {
        e.preventDefault();
        dispatch({type: 'UPDATE_FEEDBACK', payload: feeling}),
        history.push('/review')
    }

    return(
        <div className="feelingOuterDiv">
            <div className="feelingInnerDiv">
                <form onSubmit={!updateButton ? handleSubmit : updateFeedback}>
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
                            defaultValue="default"
                            className="feelingList"
                            onChange={(e) => changeHandler(e.target.value)}
                        >
                            <option value="default" disabled={true}>
                                --Choose an option--
                            </option>
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
                            disabled={buttonDisable} 
                            type="submit"
                            className="nextButton"
                        >
                            {!updateButton ? "Next" : "Update"}
                        </button>
                </form>
            </div>
        </div>
    )
}



export default Feeling;