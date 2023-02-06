import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import SuccessPage from '../SuccessPage/SuccessPage';
import NavBar from '../NavBar/NavBar';
import Admin from '../Admin/Admin';

function App() {
  const dispatch = useDispatch();

   //GET request to feedback
   const fetchFeedback = (state = {}, action) => {
      axios.get('/feedback')
      .then(response => {
          console.log('response from fetchFeedback: ', response.data);
          dispatch({type: 'SET_FEEDBACK_LIST', payload: response.data});
      })
      .catch(error => {
        console.log('error with fetchFeedback: ', error);
      });
    }

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        
        {/* Add Navigation/Progress Bar Here */}
        <div className="progress-bar-div"> <NavBar /></div>

        {/* define route paths here */}
        <Route path="/" exact>
          <Feeling />
        </Route>
        <Route path="/understanding" exact>
          <Understanding />
        </Route>
        <Route path="/support" exact>
          <Support />
        </Route>
        <Route path="/comments" exact>
          <Comments />
        </Route>
        <Route path="/review" exact>
          <Review fetchFeedback={fetchFeedback}/>
        </Route>
        <Route path="/success" exact>
          <SuccessPage />
        </Route>
        <Route path="/admin" exact>
          <Admin fetchFeedback={fetchFeedback}/>
        </Route>
      </div>
      <br />
      <br />
    </Router>
  );
}

export default App;
