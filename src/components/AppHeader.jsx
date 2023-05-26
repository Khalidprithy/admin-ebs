import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AppHeader = () => {
   const { isAuthenticated, user } = useSelector(state => state.authentication);

   console.log('App Header', isAuthenticated, user);

   return (
      <div className='fixed top-0 left-16 z-50 md:left-40 right-0 h-16 transition-all ease-in-out duration-500 p-1 backdrop-blur-md'>
         <div className='navbar bg-gray-700 shadow shadow-gray-700 px-2 rounded-lg'>
            <div className='w-full flex items-center justify-between gap-2 px-2'>
               <h4 className='text-lg text-gray-300'>
                  Hello {user?.firstName} {user?.lastName}
               </h4>
               <div className='dropdown dropdown-end'>
                  <label
                     tabIndex={0}
                     className='btn btn-ghost btn-circle avatar'
                  >
                     <div className='w-12 rounded-full border border-gray-500'>
                        <img src={user?.image} alt='' />
                     </div>
                  </label>
                  <ul
                     tabIndex={0}
                     className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-gray-700 text-gray-50 rounded-md w-52'
                  >
                     <li>
                        <Link to='/profile' className='justify-between'>
                           {user?.firstName} {user?.lastName}
                        </Link>
                     </li>
                     <li>
                        <a>Settings</a>
                     </li>
                     <li>
                        <a>Logout</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AppHeader;
