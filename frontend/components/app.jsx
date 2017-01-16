import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import PinContainer from './pin/pin_card_container';

const App = ({ children }) => (
  <div>
    <GreetingContainer />
    <PinContainer />
  </div>
);

export default App;
