import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, useRoute, Link, useHistory } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import SuccessPage from '../SuccessPage/SuccessPage';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        
        <div class="progress-bar-div"> --PROGRESS BAR HERE-- </div>

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
          <Review />
        </Route>
        <Route path="/success" exact>
          <SuccessPage />
        </Route>

      </div>
    </Router>
  );
}

export default App;
