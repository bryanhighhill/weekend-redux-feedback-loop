import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles.css';

const Review = ({fetchFeedback}) => {
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
        axios.post('/feedback', newFeedback). then(()=> {
            fetchFeedback();
            history.push('/success')
        })
        .catch(error => {
            console.log('error with posting feedback: ', error)
        })
    );
}
       
    return (
        <div className="outer-div">
                <br />
                <br />
            <div className="inner-div">
                <div className="header">
                    <h2> Please review your feedback</h2>
                    <h5><i>if you'd like to make changes to your feedback, please click the section name above</i></h5>
                <br />
                <br />
                <div className="feedback-results">
                    <b>Feeling:</b> {feeling}
                    <br />
                    <br />
                    <b>Understanding:</b> {understanding}
                    <br />
                    <br />
                    <b>Support:</b> {support}
                    <br />
                    <br />
                    <div className="comments">
                    <b>Comments:</b> 
                        <br />
                        {comments}
                </div>
            </div>
                    <br />
                </div>
            </div>
            <br />
            <div className="button">
                <Stack>
                    <Button variant="outlined" className="submitButton" onClick={onClickHandler}>SUBMIT</Button>
                </Stack>
            </div>
        </div>

    )
}

export default Review;