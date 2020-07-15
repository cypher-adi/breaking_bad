import React from 'react';
import Header from './components/ui/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterMain from './components/characters/CharacterMain';
import QuotesMain from './components/quotes/QuotesMain';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Switch>
          <Route exact path='/breaking_bad/' component={CharacterMain} />
          <Route exact path='/breaking_bad/quotes' component={QuotesMain} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
