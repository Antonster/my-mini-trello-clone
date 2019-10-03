import * as React from 'react';

import Header from './Header/Header';
import BoardsContainer from './BoardsContainer/BoardsContainer';
import ActiveBoard from './ActiveBoard/ActiveBoard';

const Main = () => {
  return (
    <>
      <Header />
      <ActiveBoard />
    </>
  );
};

export default Main;
