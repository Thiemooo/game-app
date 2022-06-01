import React from 'react';
import Preview from '../components/Preview';
import './css/Menu.css';

function Menu() {
  return (
    <div className='menu'>
      {/* <h1>Moin, ich bin des Menu</h1> */}
      <div className='menu-gamelist'>
        <div className='menu-game'><Preview gameInfo={{img: 'https://images-na.ssl-images-amazon.com/images/I/21ZzpgClpiL.png', title: 'Flappy Bird', description: 'You\'re a bird, that must dodge various pipes. If you hit them, you die!'}} /></div>
        <div className='menu-game'><Preview gameInfo={{img: 'https://images-na.ssl-images-amazon.com/images/I/21ZzpgClpiL.png', title: 'Flappy Bird', description: 'You\'re a bird, that must dodge various pipes. If you hit them, you die!'}} /></div>
        <div className='menu-game'><Preview gameInfo={{img: 'https://images-na.ssl-images-amazon.com/images/I/21ZzpgClpiL.png', title: 'Flappy Bird', description: 'You\'re a bird, that must dodge various pipes. If you hit them, you die!'}} /></div>
        <div className='menu-game'><Preview gameInfo={{img: 'https://images-na.ssl-images-amazon.com/images/I/21ZzpgClpiL.png', title: 'Flappy Bird', description: 'You\'re a bird, that must dodge various pipes. If you hit them, you die!'}} /></div>
        <div className='menu-game'><Preview gameInfo={{img: 'https://images-na.ssl-images-amazon.com/images/I/21ZzpgClpiL.png', title: 'Flappy Bird', description: 'You\'re a bird, that must dodge various pipes. If you hit them, you die!'}} /></div>
        <div className='menu-game'><Preview gameInfo={{img: 'https://images-na.ssl-images-amazon.com/images/I/21ZzpgClpiL.png', title: 'Flappy Bird', description: 'You\'re a bird, that must dodge various pipes. If you hit them, you die!'}} /></div>
        <div className='menu-game'><Preview gameInfo={{img: 'https://images-na.ssl-images-amazon.com/images/I/21ZzpgClpiL.png', title: 'Flappy Bird', description: 'You\'re a bird, that must dodge various pipes. If you hit them, you die!'}} /></div>
      </div>
    </div>
  );
}

export default Menu;
