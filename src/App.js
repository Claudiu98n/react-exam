import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Error404 from './pages/Error404';
import People from './pages/People';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/people" component={People} />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
