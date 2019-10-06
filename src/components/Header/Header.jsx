import * as React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <button className="logo" type="button" aria-label="logo" />
      </Link>
    </div>
  );
};

export default Header;
