// import './App.css';
import { getAllStartups } from './services/api';
import Home from './pages/Home';

function App() {
  return (
    <div className='h-screen-grid bg-gradient-to-r from-purple-500 to-pink-400'>
     <Home/>
    </div>
  );
}

export default App;
