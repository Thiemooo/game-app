import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Menu from './views/Menu';
import Header from './components/Header';
import FlappyBird from './games/FlappyBird';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<><Header /> <Menu /></>}/>
          <Route path='/flappy-bird' element={<><Header /> <FlappyBird /></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
