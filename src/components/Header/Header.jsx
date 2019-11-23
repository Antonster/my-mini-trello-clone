import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import buttonImg from '../../assets/logo.svg';

const HeaderBlock = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

const HeaderButton = styled.button`
  width: 65px;
  height: 65px;
  display: block;
  border-radius: 50%;
  background: url(${buttonImg}) no-repeat 50% 50%;
  filter: drop-shadow(3px 3px 3px #333);
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    filter: drop-shadow(6px 6px 6px #333);
    transform: scale(1.1) rotate(-10deg);
  }

  &:active {
    transform: scale(0.8) rotate(-10deg);
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Link to="/">
        <HeaderButton type="button" aria-label="logo" />
      </Link>
    </HeaderBlock>
  );
};

export default Header;
