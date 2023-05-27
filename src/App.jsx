import { useEffect, useState } from 'react';
import { FcShop } from 'react-icons/fc';
import { useLocation } from 'react-router-dom';
import Footer from './Pages/Shared/Footer';
import Router from './Routers/Router';
import TopBar from './components/AppHeader';
import Sidebar from './components/Sidebar';

function App() {
   const location = useLocation();
   const isLoginPage = location.pathname === '/';

   const [isMobile, setIsMobile] = useState(false);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 768);
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   };

   return (
      <div className={`flex ${isMobile ? 'flex-col' : 'bg-blue-100'}`}>
         {isLoginPage || <TopBar />}

         <div
            className={`flex flex-col flex-1 ml-${
               isMobile ? '0' : '16'
            } md:ml-${
               !isMobile ? '0' : '40'
            } transition-all ease-in-out duration-500 bg-blue-50`}
         >
            {!isLoginPage && (
               <>
                  {isMobile && (
                     <button
                        className='fixed top-[16px] left-[10px] z-50 bg-gray-600 rounded-full p-1 transition-all ease-in-out duration-300'
                        onClick={toggleSidebar}
                     >
                        <FcShop className='text-4xl' />
                        <span className='hidden md:block text-gray-200 font-bold text-lg transition-all ease-out duration-300'>
                           EBS
                        </span>
                     </button>
                  )}
                  {!isMobile || isSidebarOpen ? <Sidebar /> : null}
               </>
            )}
            <div
               onClick={() => setIsSidebarOpen(false)}
               className={`flex-1 bg-blue-50 ml-0 md:ml-40 ${
                  isLoginPage ? 'mt-20' : 'mt-10'
               }`}
            >
               <Router />
               <Footer />
            </div>
         </div>
      </div>
   );
}

export default App;
