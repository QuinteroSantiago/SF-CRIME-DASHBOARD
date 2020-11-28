import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import CrimeCategorization from './components/pages/CrimeCategorization';
import SFCrimeResolution from './components/pages/SFCrimeResolution';
import SFLawEnforcement from './components/pages/SFLawEnforcement';
import SFSafety from './components/pages/SFSafety';
import SFTourism from './components/pages/SFTourism';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/About' exact component={About} />
            <Route path='/CrimeCategorization' exact component={CrimeCategorization} />
            <Route path='/SFCrimeResolution' exact component={SFCrimeResolution} />
            <Route path='/SFLawEnforcement' exact component={SFLawEnforcement} />
            <Route path='/SFSafety' exact component={SFSafety} />
            <Route path='/SFTourism' exact component={SFTourism} />
          </Switch>
        </Router>
      </div>
    </div>

  );
}

export default App;
