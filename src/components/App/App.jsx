import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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
          <Review />
        </Route>
        <Route path="/success" exact>
          <SuccessPage />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
      </div>
      <br />
      <br />
      <div className="admin"><Link to="/admin">Admin</Link></div>
    </Router>
  );
}

export default App;
