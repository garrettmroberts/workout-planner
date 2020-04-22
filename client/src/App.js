import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from './utils/GlobalState';
import Nav from './components/Nav';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/user' component={User} />
            </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
