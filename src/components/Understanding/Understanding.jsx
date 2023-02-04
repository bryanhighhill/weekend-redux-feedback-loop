import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Understanding = () => {
    const [understanding, setUnderstanding] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();
    const [buttonDisable, setButtonDisable] = useState(true);
    const pageId = 2;
    const pageCompleted = useSelector(store => store.understandingCompleted);

    useEffect(() => {
        dispatch({type: 'SET_ID', payload: pageId})
    })

    //function called when Next button is pressed
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'SET_UNDERSTANDING', payload: understanding});
        dispatch({type: 'SET_UNDERSTANDING_COMPLETED', payload: true})
        
        if (pageCompleted) {
            return (
                history.push('/review') 
            )
        }
        history.push('/support');
    }

    const changeHandler = (value) => {
        setUnderstanding(value);
        setButtonDisable(false);
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
                            defaultValue="default"
                            className="understandingList"
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
                        Next
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Understanding;