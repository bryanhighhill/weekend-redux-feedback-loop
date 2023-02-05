import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles.css';

//display db data
const Admin = () => {
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        fetchFeedback();
    });
    
    //GET request to get feedback
    const fetchFeedback = (state = {}, action) => {
        axios.get('/feedback')
        .then(response => {
            console.log('response from fetchFeedback: ', response.data);
            setFeedbackList(response.data);
        });
    }
    
    return (
        <>
            <h2>All feedback received</h2>
            <br />
            <br />
            <div className="feedback-list">
                {feedbackList.map((feedback, index) => (
                    <div className="feedback-div" key={index}>
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
                    </div>
                ))}
            </div>
        </>
    )
}


export default Admin;