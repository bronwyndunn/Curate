import React from 'react';
import BoardIndexContainer from '../board/board_index_container';
import BoardCardContainer from  '../board/board_card_container';
import BoardFormContainer from '../board/board_form_container';
import NavBar from '../nav_bar';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div>
        <NavBar />
        <BoardFormContainer />
        <BoardIndexContainer />
      </div>
    );
  }
}


export default UserProfile;
