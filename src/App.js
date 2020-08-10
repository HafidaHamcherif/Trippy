import React from 'react';
import '../src/App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Home from './components/core/Home';
import Hotels from './components/core/Hotels';
import Login from './components/core/Login';
import Restaurant from './components/core/Reastaurant';
import Singup from './components/core/Singup';
import HomeContainer from './containers/HomeContainer';

class App extends React.Component{
  render() {
    
    return(
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Hotels/">Hotels</Link></li>
              <li><Link to="/Restaurant/">Restaurant</Link></li>
              <li><Link to="/Login/">Login</Link></li>
              <li><Link to="/Singup">Singup</Link></li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/Hotels/">
            <Hotels />
          </Route>
          <Route path="/Login/">
            <Login />
          </Route>
          <Route path="/Restaurant/">
            <Restaurant />
          </Route>
          <Route path="/Singup/">
            <Singup />
          </Route>
          <Route path="/">
            <Home />
            <HomeContainer/>
          </Route>
        </Switch>
    </Router>
    );
  }
}

export default App;
