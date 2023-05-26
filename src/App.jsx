import { useLocation } from 'react-router-dom';
import Router from './Router/Router';
import TopBar from './components/AppHeader';
import Sidebar from './components/Sidebar';

function App() {
   const location = useLocation();
   const isLoginPage = location.pathname === '/';

   return (
      <>
         <div className='flex'>
            {!isLoginPage ? <Sidebar /> : null}
            <div className='flex flex-col flex-1 ml-16 md:ml-40 transition-all ease-in-out duration-500 bg-blue-50'>
               {!isLoginPage ? <TopBar /> : null}
               <div className='flex-1 bg-blue-50 mt-14'>
                  <Router />
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
