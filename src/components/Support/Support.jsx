import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles.css';

const Support = () => {
    const [support, setSupport] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();
    const [buttonDisable, setButtonDisable] = useState(true);
    const pageCompleted = useSelector(store => store.supportCompleted);

    //function called when Next button is pressed
    const handleSubmit = (e) => {
        e.preventDefault();
        //save feedback to store
        dispatch({type: 'SET_SUPPORT', payload: support});
        //save page completion status to store
        dispatch({type: 'SET_SUPPORT_COMPLETED', payload: true})
        //forward navigation goes here - conditional to check if page update or first time filling out
        if (pageCompleted) {
            return (
                history.push('/review') 
            )
        }
        history.push('/comments');
    }
    //set values from form
    const changeHandler = (value) => {
        setSupport(value);
        setButtonDisable(false);
    }

    return(
        <div className="outer-div">
            <div className="admin"><Link to="/admin">Admin</Link></div>
            <br />
            <br />
            <div className="inner-div">
                <form onSubmit={handleSubmit}>
                    <label className="supportLabel">
                        <div className="header">
                            <h2>How well do you feel supported?</h2>
                            <i>
                                please select an option 0 through 5 
                                <br />
                                (0 being not supported and 5 being totally supported)
                            </i>
                            <br />
                            <br />
                        </div>
                        <br />
                        <br />
                        <select 
                            name="support" 
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

export default Support;