import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const StatusBar = () => {
    const history = useHistory();

    const feelingCompleted = useSelector(store => store.feelingCompleted);
    const understandingCompleted = useSelector(store => store.understandingCompleted);
    const supportCompleted = useSelector(store => store.supportCompleted);
    const commentsCompleted = useSelector(store => store.commentsCompleted);
    const pageId = useSelector(store => store.pageId);

    const [navOneDisabled, setNavOneDisabled] = useState(true);
    const [navTwoDisabled, setNavTwoDisabled] = useState(true);
    const [navThreeDisabled, setNavThreeDisabled] = useState(true);
    const [navFourDisabled, setNavFourDisabled] = useState(true);

    useEffect(() => {
        if (pageId === 1 && feelingCompleted) {
            return setNavOneDisabled(false);
        }
        // if (pageId === 1 && feelingCompleted === true){
        //     return setNavOneDisabled(false);
        // }
        if (pageId === 2 && understandingCompleted) {
            return setNavTwoDisabled(false);
        }
        // if (pageId === 1 && understandingCompleted === true){
        //     return setNavTwoDisabled(false);
        // }
        if (pageId === 3 && supportCompleted) {
            return setNavThreeDisabled(false);
        }
        // if (pageId === 1 && supportCompleted === true){
        //     return setNavThreeDisabled(false);
        // }
        if (pageId === 4 && commentsCompleted) {
            return setNavFourDisabled(false);
        }
        // if (pageId === 1 && commentsCompleted === true){
        //     return setNavFourDisabled(false);
        // }
        return;
    })
    
    return (
        <>
            <h2>STATUS BAR</h2>
            <div className="status-bar">
                <button disabled={navOneDisabled} className="feeling-button" onClick={() => history.push('/')}>Feeling (1/4)</button>
                <button disabled={navTwoDisabled} className="understanding-button" onClick={() => history.push('/understanding')}>Understanding (2/4)</button>
                <button disabled={navThreeDisabled} className="support-button" onClick={() => history.push('/support')}>Support (3/4)</button>
                <button disabled={navFourDisabled} className="comments-button" onClick={() => history.push('/comments')}>Comments (4/4)</button>
            </div>
        </>
    )
}

export default StatusBar;