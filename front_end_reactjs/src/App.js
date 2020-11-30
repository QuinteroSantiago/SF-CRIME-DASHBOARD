import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import CrimesOverTime from './pages/CrimesOverTime';
import CrimeResolution from './pages/CrimeResolution';
import CrimeByArea from './pages/CrimeByArea';
import SafestTimes from './pages/SafestTimes';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/About' exact component={About} />
            <Route path='/CrimesOverTime' exact component={CrimesOverTime} />
            <Route path='/CrimeResolution' exact component={CrimeResolution} />
            <Route path='/CrimeByArea' exact component={CrimeByArea} />
            <Route path='/SafestTimes' exact component={SafestTimes} />
          </Switch>
        </Router>
      </div>
    </div>

  );
}

export default App;
