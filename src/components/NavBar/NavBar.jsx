import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const history = useHistory();

    const feelingCompleted = useSelector(store => store.feelingCompleted);
    const understandingCompleted = useSelector(store => store.understandingCompleted);
    const supportCompleted = useSelector(store => store.supportCompleted);
    const commentsCompleted = useSelector(store => store.commentsCompleted);

    const [navDisabled, setNavDisabled] = useState(true);

    useEffect(() => {
        if (feelingCompleted && understandingCompleted && supportCompleted && commentsCompleted) {
            return setNavDisabled(false);
        }
        return setNavDisabled(true);
    })
    
    return (
        <>
            <h2>STATUS BAR</h2>
            <div className="status-bar">
                <button disabled={navDisabled} className="feeling-button" onClick={() => history.push('/')}>Feeling (1/4)</button>
                <button disabled={navDisabled} className="understanding-button" onClick={() => history.push('/understanding')}>Understanding (2/4)</button>
                <button disabled={navDisabled} className="support-button" onClick={() => history.push('/support')}>Support (3/4)</button>
                <button disabled={navDisabled} className="comments-button" onClick={() => history.push('/comments')}>Comments (4/4)</button>
            </div>
        </>
    )
}

export default NavBar;