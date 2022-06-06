import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-section'>
        <Link className='mui' to='/'><HomeIcon /></Link>
      </div>
      <div className='header-section'>
        <h1>Welcome to the GameHub!</h1>
      </div>
      <div className='header-section header-user'>
        <h2>Thiemooo</h2>  
        <a href='https://github.com/Thiemooo/game-app' target='_blank' rel='noreferrer' className='mui'><PersonIcon /></a>
      </div>
    </div>
  );
}

export default Header;
