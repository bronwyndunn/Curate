import React from 'react';
import BoardIndexContainer from '../board/board_index_container';
import BoardCardContainer from  '../board/board_card_container';

const UserProfile = ({ children }) => (
  <div>
    <h1>Profile</h1>
    <BoardIndexContainer />
    { children }
  </div>
);

export default UserProfile;
