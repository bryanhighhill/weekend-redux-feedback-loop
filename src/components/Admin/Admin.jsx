import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles.css';

const Admin = ({fetchFeedback}) => {
    const feedbackList = useSelector(store => store.feedbackList);
    
    // GET request on page load
    useEffect(() => {
        fetchFeedback();
    })

    return (
        <>
            <div className="admin"><Link to="/">Home</Link></div>
            <br />
            <br />
            <h2>All feedback received</h2>
            <br />
            <br />
            <div className="feedback-list">
        {/* display db data */}
                {feedbackList.map((feedback, index) => (
                    <div className="feedback-div" key={index}>
                        <u><h3>Feedback</h3></u>
                        <b>Feeling rating:</b> 
                        <br />
                        {feedback.feeling} 
                        <br />
                        <b>Understanding rating:</b> 
                        <br />
                        {feedback.understanding} 
                        <br />
                        <b>Support rating:</b> 
                        <br />
                        {feedback.support} 
                        <br />
                        <b>Comments rating:</b> 
                        <br />
                        {feedback.comments}
                        <br />
                        <br />
                    </div>
                ))}
            </div>
        </>
    );
}


export default Admin;