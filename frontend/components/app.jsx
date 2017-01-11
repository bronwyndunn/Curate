import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <h1>Curate</h1>
    <GreetingContainer />
    { children }
  </div>
);

export default App;