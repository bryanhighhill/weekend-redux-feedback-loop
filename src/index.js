import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { feeling, understanding, support, comments, feelingCompleted, understandingCompleted, supportCompleted, commentsCompleted, feedbackList } from '../src/components/Reducers/Reducers';

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
