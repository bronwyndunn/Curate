import React from 'react';
import BoardIndexContainer from '../board/board_index_container';
import BoardCardContainer from  '../board/board_card_container';
import BoardFormContainer from '../board/board_form_container';
import GreetingContainer from '../greeting/greeting_container';
import NavBar from '../nav/nav_bar';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div>
        <BoardIndexContainer />
      </div>
    );
  }
}


export default UserProfile;
