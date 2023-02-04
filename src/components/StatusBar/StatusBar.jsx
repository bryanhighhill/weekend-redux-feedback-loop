import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const StatusBar = () => {
    const history = useHistory();
    const pageId = useSelector(store => store.pageId);
    const [navOneDisabled, setNavOneDisabled] = useState(false);
    const [navTwoDisabled, setNavTwoDisabled] = useState(false);
    const [navThreeDisabled, setNavThreeDisabled] = useState(false);
    const [navFourDisabled, setNavFourDisabled] = useState(false);

    useEffect(() => {
        if (pageId === 1) {
            return setNavOneDisabled(true);
        }
        if (pageId === 2) {
            return setNavTwoDisabled(true);
        }
        if (pageId === 3) {
            return setNavThreeDisabled(true);
        }
        if (pageId === 4) {
            return setNavFourDisabled(true);
        }
    })
    
    return (
        <>
            <h2>STATUS BAR</h2>
            <div className="status-bar">
                <button disabled={navOneDisabled} className="feeling-button" onClick={() => history.push('/')}>Feeling (1/4)</button>
                <button disabled={navTwoDisabled} className="understanding-button" onClick={() => history.push('/understanding')}>Understanding (2/4)</button>
                <button disabled={navThreeDisabled} className="support-button" onClick={() => history.push('/support')}>Support (3/4)</button>
                <button disabled={navFourDisabled} className="comments-button" onClick={() => history.push('/comments')}>Support (4/4)</button>
            </div>
        </>
    )
}

export default StatusBar;