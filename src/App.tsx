import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Route path="/" exact>
      
      </Route>
      
    </div>
  );
}

export default App;
