import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const ratings = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    } else if 
        (action.type === 'SET_UNDERSTANDING') {
            return action.payload;
    } else if
        (action.type === 'SET_SUPPORT') {
            return action.payload;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        ratings
    })
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
