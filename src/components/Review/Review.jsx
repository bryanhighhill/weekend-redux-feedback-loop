import { useSelector } from 'react-redux';

const Review = () => {
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

const onClickHandler = () => {
    return (
        console.log('you clicked submit')
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