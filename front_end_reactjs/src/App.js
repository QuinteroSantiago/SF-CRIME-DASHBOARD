import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/homepage/Home';
import CrimeCategorization from './components/pages/CrimeCategorization';

function App() {
  return (
    <div className = "app">
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/CrimeCategorization' exact component={CrimeCategorization}/>
      </Switch>
    </Router>
    </div>

  );
}

export default App;
