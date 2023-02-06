import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { useState } from 'react';
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

//keep track of if a page has been "submitted"
const feelingCompleted = (state = false, action) => {
    if (action.type === 'SET_FEELING_COMPLETED') {
        return action.payload;
    }
    return state;
}

const understandingCompleted = (state = false, action) => {
    if (action.type === 'SET_UNDERSTANDING_COMPLETED') {
        return action.payload;
    }
    return state;
}

const supportCompleted = (state = false, action) => {
    if (action.type === 'SET_SUPPORT_COMPLETED') {
        return action.payload;
    }
    return state;
}

const commentsCompleted = (state = false, action) => {
    if (action.type === 'SET_COMMENTS_COMPLETED') {
        return action.payload;
    }
    return state;
}

//SET feedbackList with GET data
const feedbackList = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK_LIST') {
        return action.payload;
    }
    return state;
};

const reduxStore = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments,
        feelingCompleted,
        understandingCompleted,
        supportCompleted,
        commentsCompleted,
        feedbackList
    })
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
