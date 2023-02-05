import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles.css';

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
        <div className="outer-div">
            <br />
            <br />
            <div className="inner-div">
                <form onSubmit={handleSubmit}>
                <label className="Label">
                    <div className="header">
                        <h2>How are you feeling today?</h2>
                        <i>
                            please select an option 0 through 5
                            <br />
                            (0 being awful and 5 being incredible)
                        </i>
                        <br />
                        <br />
                    </div>
                    <br />
                    <br />
                    <div className="feeling-select-div">
                        <select 
                            name="feeling" 
                            defaultValue="default"
                            className="list"
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
                    </div>
                </label>
                <br />
                <br /> 
                <div className="button">
                    <Stack>
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