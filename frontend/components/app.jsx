import React from 'react';
import { Link } from 'react-router';
import { personalGreeting } from './greeting/greeting';
import GreetingContainer from './greeting/greeting_container';
import PinContainer from './pin/pin_card_container';
import NavBar from './nav_bar';

const App = ({ children }) => (
  <div>
    <NavBar />
    {children}
  </div>
);

export default App;
