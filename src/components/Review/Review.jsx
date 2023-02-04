import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    const changeFeedback = useSelector(store => store.changeFeedback);
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

const feelingClickHandler = () => {
    return (
        console.log('clicked on button to change your feeling feedback')
    )
}

const understandingClickHandler = () => {
    return (
        console.log('clicked on button to change your understanding feedback')
    )
}

const supportClickHandler = () => {
    return (
        console.log('clicked on button to change your support feedback')
    )
}

const commentsClickHandler = () => {
    return (
        console.log('clicked on button to change your comments')
    )
}

    return (
        <div className="reviewOuterDiv">
            <div className="reviewInnerDiv">
                <h2> Please review your feedback</h2>
                <br />
                <p><b>if you'd like to make changes to your feedback, click the page name in the progress bar</b></p>
                <br />
                <br />
                Feeling: {feeling}
                <br />
                Understanding: {understanding}
                <br />
                Support: {support}
                <br />
                <div className="comments">
                    Comments: 
                    <br />
                    {comments}
                    <br />
                </div>
            </div>
            <br />
            <button className="submitButton" onClick={onClickHandler}>SUBMIT</button>
        </div>

    )
}

export default Review;