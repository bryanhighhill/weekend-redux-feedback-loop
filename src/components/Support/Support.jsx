import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Support = () => {
    const [support, setSupport] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();
    const [buttonDisable, setButtonDisable] = useState(true);

    //function called when Next button is pressed
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'SET_SUPPORT', payload: support});
        history.push('/comments');
    }

    const changeHandler = (value) => {
        setSupport(value);
        setButtonDisable(false);
    }

    return(
        <div className="supportOuterDiv">
            <div className="supportInnerDiv">
                <form onSubmit={handleSubmit}>
                    <label className="supportLabel">
                        <h2>How well do you feel supported?</h2>
                        <i>
                            please select an option 0 through 5 
                            <br />
                            (0 being not supported and 5 being totally supported)
                            <br />
                            then click "Next"
                        </i>
                        <br />
                        <br />
                        <select 
                            name="support" 
                            defaultValue="default"
                            className="supportList"
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

export default Support;