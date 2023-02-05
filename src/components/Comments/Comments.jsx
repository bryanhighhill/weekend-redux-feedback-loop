import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Comments.css';

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
        <div className="commentsOuterDiv">
            <div className="commentsInnerDiv">
                <form onSubmit={handleSubmit}>
                    <label className="commentsLabel">
                        <h2>Please share any comments you may have</h2>
                        <input 
                            name="comments" 
                            value={comments}
                            className="commentsList"
                            placeholder="type comments here"
                            onChange={(e) => setComments(e.target.value)}
                        >
                        </input>
                    </label>
                    <div className="comments-button">
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