import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling'

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        {/* define route paths here */}
        <Route path="/feeling" exact>
          <Feeling />
        </Route>
      </div>
    </Router>
  );
}

export default App;
