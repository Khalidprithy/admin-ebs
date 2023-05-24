import { useLocation } from 'react-router-dom';
import Router from './Router/Router';
import Sidebar from './components/Sidebar';
import TopBar from './components/Topbar';

function App() {
   const location = useLocation();
   const isLoginPage = location.pathname === '/';

   return (
      <>
         <div className='flex'>
            {!isLoginPage ? <Sidebar /> : null}

            <div className='fixed top-16 left-16 md:left-40 right-0 transition-all ease-in-out duration-500 p-2 bg-blue-50'>
               {!isLoginPage ? <TopBar /> : null}
               <Router />
            </div>
         </div>
      </>
   );
}

export default App;
