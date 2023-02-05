import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const SuccessPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const resetFeedback = () => {
        return (
            dispatch({type: 'POST_FEEDBACK', payload: ''}),
            dispatch({type: 'SET_SUPPORT', payload: 0}),
            dispatch({type: 'SET_UNDERSTANDING', payload: 0}),
            dispatch({type: 'SET_FEELING', payload: 0}),
            dispatch({type: 'SET_FEELING_COMPLETED', payload: false}),
            dispatch({type: 'SET_UNDERSTANDING_COMPLETED', payload: false}),
            dispatch({type: 'SET_SUPPORT_COMPLETED', payload: false}),
            dispatch({type: 'SET_COMMENTS_COMPLETED', payload: false}),
            history.push('/')
        )
    }

    return (
        <div>
            <h2>Thank you for your feedback!</h2>
            <button 
                className="newFeedbackForm"
                onClick={resetFeedback}>
                Leave new feedback
            </button>
        </div>
    )
}

export default SuccessPage;