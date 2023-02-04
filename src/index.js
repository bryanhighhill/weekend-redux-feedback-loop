import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';

const feeling = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    } 
    return state;
}

const understanding = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    } 
    return state;
}

const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    } 
    return state;
}

const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    } 
    return state;
}

// variable to keep track of which page is being viewed - part of stretch goal 1
const pageId = (state = 0, action) => {
    if (action.type === 'SET_ID') {
        return action.payload;
    }
    return state;
}

//POST request to add feedback
const postFeedback = (state = {}, action) => {
    if (action.type === 'POST_FEEDBACK') {
        console.log('made post request with: ', action.payload);
        axios.post('/feedback', action.payload);
    }
    return state;
}
//PUT request to change feedback
// action.payload needs the following:
//    - req.params.type, req.params.feedback, req.params.id
// const changeFeedback = (state = {}, action) => {
//     const id = action.payload.id;
//     if (action.type === 'CHANGE_FEEDBACK') {
//         console.log('made put request for id: ', id);
//         axios.put(`/feedback/${id}`, action.payload)
//     }
// }

const reduxStore = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments,
        postFeedback,
        pageId
        // changeFeedback
    })
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
