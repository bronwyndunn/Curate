import React from 'react';
import { Link } from 'react-router';
import { personalGreeting } from './greeting/greeting';
import GreetingContainer from './greeting/greeting_container';
import PinContainer from './pin/pin_card_container';
import NavBarContainer from './nav/nav_bar_container';
import HomeContainer from './home/home_container';

const App = ({ children }) => (
  <div>
    <HomeContainer />
    <NavBarContainer />
    {children}
  </div>
);

export default App;
