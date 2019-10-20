import * as React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import BoardsContainer from './BoardsContainer/BoardsContainer';
import ActiveBoard from './ActiveBoard/ActiveBoard';

const Main = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={BoardsContainer} />
        <Route path="/:boardId" component={ActiveBoard} />
      </Switch>
    </>
  );
};

export default Main;
