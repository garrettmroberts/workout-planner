import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from './utils/GlobalState';
import Nav from './components/Nav';
import Home from './pages/Home';
import User from './pages/User';
import Calendar from './pages/Calendar';
import CreateWorkout from './pages/CreateWorkout';
import RecentWorkouts from './pages/RecentWorkouts';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/user' component={User} />
              <Route exact path='/calendar' component={Calendar} />
              <Route exact path='/create' component={CreateWorkout} />
              <Route exact path='/recent' component={RecentWorkouts} />
              <Route exact path='/search' component={Search} />
            </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
