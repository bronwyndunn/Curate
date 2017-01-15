import React from 'react';
import BoardIndexContainer from '../board/board_index_container';
import BoardCardContainer from  '../board/board_card_container';
import BoardFormContainer from '../board/board_form_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div>
        <BoardIndexContainer />
        <BoardFormContainer />
      </div>
    );
  }
}


export default UserProfile;
