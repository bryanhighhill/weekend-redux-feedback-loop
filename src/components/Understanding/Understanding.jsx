import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles.css';

const Understanding = () => {
    const [understanding, setUnderstanding] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();
    const [buttonDisable, setButtonDisable] = useState(true);
    const pageCompleted = useSelector(store => store.understandingCompleted);

    //function called when Next button is pressed
    const handleSubmit = (e) => {
        e.preventDefault();
        //save feedback to store
        dispatch({type: 'SET_UNDERSTANDING', payload: understanding});
        //save page completion status to store
        dispatch({type: 'SET_UNDERSTANDING_COMPLETED', payload: true});
        //forward navigation goes here - conditional to check if page update or first time filling out
        if (pageCompleted) {
            return (
                history.push('/review') 
            )
        }
        history.push('/support');
    }
    //set values from form
    const changeHandler = (value) => {
        setUnderstanding(value);
        setButtonDisable(false);
    }

    return(
        <div className="outer-div">
            <div className="admin"><Link to="/admin">Admin</Link></div>
            <br />
            <br />
            <div className="inner-div">
                <form onSubmit={handleSubmit}>
                    <label className="understandingLabel">
                        <div className="header">
                            <h2>How well do you understand the content?</h2>
                            <i>
                                please select an option 0 through 5
                                <br />
                                (0 being "I have no clue what I'm doing" and 5 being "I totally get it")
                            </i>
                            <br />
                            <br />
                        </div>
                        <br />
                        <br />
                        <select 
                            name="understanding"
                            title="Understanding Level" 
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

export default Understanding;