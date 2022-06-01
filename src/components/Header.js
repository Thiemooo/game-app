import React from 'react';
import './css/Header.css';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

function Header() {
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
        <PersonIcon className='mui' />
      </div>
    </div>
  );
}

export default Header;
