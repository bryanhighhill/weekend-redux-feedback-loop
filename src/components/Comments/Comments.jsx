import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Comments = () => {
    const [comments, setComments] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    // const pageId = 4;
    const pageCompleted = useSelector(store => store.commentsCompleted);

    // useEffect(() => {
    //     dispatch({type: 'SET_ID', payload: pageId})
    // })

    //function called when Next button is pressed
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'SET_COMMENTS', payload: comments});
        dispatch({type: 'SET_COMMENTS_COMPLETED', payload: true})
        
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
                    <button 
                        type="submit"
                        className="nextButton"
                    >
                        {!pageCompleted ? 'Next' : 'Update'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Comments;