import { getAllStartups } from './services/api';
import Home from './pages/Home';
import CreateStartup from './components/CreateStartup';

function App() {
  return (
    <div className='h-screen bg-gradient-to-r from-teal-300 to-pink-400'>
     {/* <Home/> */}
     <CreateStartup/>
    </div>
  );
}

export default App;
