import { Link, useHistory } from 'react-router-dom';


const StatusBar = () => {
    const history = useHistory();

    const updateFeeling = () => {
        return (
            console.log('clicked on button to change your feeling feedback')
        )
    }
    
    return (
        <>
            <h2>STATUS BAR</h2>
            <div className="status-bar">
                <button className="feeling-button" onClick={() => history.push('/')}>Feeling (1/4)</button>
                <button className="understanding-button" onClick={() => history.push('/understanding')}>Understanding (2/4)</button>
                <button className="support-button" onClick={() => history.push('/support')}>Support (3/4)</button>
                <button className="comments-button" onClick={() => history.push('/comments')}>Support (4/4)</button>
                {/* <Link to="comments">Comments (4/4)</Link> */}
            </div>
        </>
    )
}

export default StatusBar;