import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import PinContainer from './pin/pin_card_container';
import NavBar from './nav_bar';

const App = ({ children }) => (
  <div>
    <GreetingContainer />
    <NavBar />
    <PinContainer />
  </div>
);

export default App;
