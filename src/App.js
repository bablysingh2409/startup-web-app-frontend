import Home from './pages/Home';
import CreateStartup from './components/CreateStartup';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {

  const router=createBrowserRouter([
    {path:'/',
    element:<Home/>
    },
    {
      path:'/createnewstartup',
      element:<CreateStartup/>
    }
  ])
  return (
   
    <div className='h-screen-grid bg-gradient-to-r from-teal-300 to-pink-400'>
       <RouterProvider router={router}></RouterProvider>
    </div>
    
  );
}

export default App;
