import React from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Link } from 'react-router-dom';
import './css/Preview.css';

const Preview = ({ gameInfo }) => {
  return (
    <div className='preview'>
      <div className='preview-left'>
        <img src={gameInfo.img} alt='game preview' />
        <div className='preview-play'><Link to={`${gameInfo.title.toLowerCase().replace(' ', '-')}`}><PlayCircleOutlineIcon /></Link></div>
      </div>
      <div className='preview-right'>
        <h4><u>{gameInfo.title}</u></h4>
        <p>{gameInfo.description}</p>
      </div>
    </div>
  );
}

export default Preview;
