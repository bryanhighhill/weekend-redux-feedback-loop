import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();
    const history = useHistory();

const newFeedback = {
        feeling,
        understanding,
        support,
        comments
}

const onClickHandler = () => {
    return (
        dispatch({type: 'POST_FEEDBACK', payload: newFeedback}),
        history.push('/success')
    )
}

    return (
        <div className="reviewOuterDiv">
            <div className="reviewInnerDiv">
                <h2> Please review your feedback</h2>
                <br />
                Feeling: {feeling}
                <br />
                Understanding: {understanding}
                <br />
                Support: {support}
                <br />
                <br />
                <div className="comments">
                    Comments: 
                    <br />
                    {comments}
                </div>
            </div>
            <br />
            <button className="submitButton" onClick={onClickHandler}>SUBMIT</button>
        </div>

    )
}

export default Review;