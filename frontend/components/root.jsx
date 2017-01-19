import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import BoardIndexContainer from './board/board_index_container';
import UserProfile from './user/user_profile';
import BoardFormContainer from './board/board_form_container';
import BoardPinsContainer from './board/board_pins_container';
import PinContainer from './pin/pin_card_container';
import SearchIndexContainer from './search/search_index_container';
import HomeContainer from './home/home_container';


const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (!currentUser) {
    replace('/signup');
  }
};

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
        <Route path="/" component={ App } onEnter={_ensureLoggedIn} >
          <IndexRoute component={HomeContainer} />
          <Route path='/search' component={SearchIndexContainer} />
          <IndexRoute component={PinContainer} />
          <Route path="/boards" component ={ UserProfile } />
          <Route path="/:user_id" component ={ UserProfile } />
          <Route path="/boards/:boardId" component ={BoardPinsContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
