import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header/Header';
import BoardsContainer from './BoardsContainer/BoardsContainer';
import ActiveBoard from './ActiveBoard/ActiveBoard';

const MainContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  color: #333;
`;

const Main = () => {
  return (
    <Router>
      <MainContainer>
        <Header />
        <Switch>
          <Route exact path="/" component={BoardsContainer} />
          <Route path="/:boardId" component={ActiveBoard} />
        </Switch>
      </MainContainer>
    </Router>
  );
};

export default Main;
