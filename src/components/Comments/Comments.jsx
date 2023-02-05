import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles.css';

const Comments = () => {
    const [comments, setComments] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const pageCompleted = useSelector(store => store.commentsCompleted);

    //function called when Next button is pressed
    const handleSubmit = (e) => {
        e.preventDefault();
        //save comments to store
        dispatch({type: 'SET_COMMENTS', payload: comments});
        //save page completion status to store
        dispatch({type: 'SET_COMMENTS_COMPLETED', payload: true})
        //forward navigation goes here - conditional to check if page update or first time filling out
        if (pageCompleted) {
            return (
                history.push('/review') 
            )
        }
        history.push('/review');
    }

    return(
        <div className="outer-div">
            <br />
            <br />
            <div className="inner-div">
                <form onSubmit={handleSubmit}>
                    <label className="commentsLabel">
                        <div className="header">
                            <h2>Please share any comments you may have</h2> 
                            <h5><i>(optional)</i></h5>
                        </div>
                        <br />
                        <br />
                        <input 
                            name="comments" 
                            value={comments}
                            className="list"
                            placeholder="type comments here"
                            onChange={(e) => setComments(e.target.value)}
                        >
                        </input>
                    </label>
                    <br />
                    <br />
                    <div className="button">
                        <Stack>
                            <Button
                                variant="outlined" 
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

export default Comments;