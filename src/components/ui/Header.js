import React from 'react';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className='center'>
        <img src={logo} alt='' />
      </header>
      <h1 className='center' style={{ marginBottom: 20 }}>
        <Link to='/breaking_bad'>Cast</Link> • <Link to='/quotes'>Quotes</Link>
      </h1>
    </div>
  );
};

export default Header;
