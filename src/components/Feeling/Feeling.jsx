import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Feeling.css';

const Feeling = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState(0);
    const [buttonDisable, setButtonDisable] = useState(true);
    const pageCompleted = useSelector(store => store.feelingCompleted);

    //set values from form
    const changeHandler = (value) => {
        setFeeling(value);
        setButtonDisable(false);
    }

    //function called when Next button is pressed
    const handleSubmit = (e) => {
        e.preventDefault(); 
        //save feedback to store
        dispatch({type: 'SET_FEELING', payload: feeling}),
        //save page completion status to store
        dispatch({type: 'SET_FEELING_COMPLETED', payload: true})
        //forward navigation goes here - conditional to check if page update or first time filling out
        if (pageCompleted) {
            return (
                history.push('/review') 
            )
        }
        return (
            history.push('/understanding') 
        )
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
                    <div className="feeling-button">
                        <Stack direction ="row">
                            <Button 
                                variant="outlined"
                                disabled={buttonDisable} 
                                type="submit"
                                className="nextButton"
                            >
                                {!pageCompleted ? 'Next' : 'Update'}
                            </Button>
                        </Stack>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default Feeling;