import { Link } from 'react-router-dom';

const TopBar = () => {
   let tempUser = null;

   return (
      <div className='sticky top-0 left-16 z-50 md:left-40 right-0 h-16 transition-all ease-in-out duration-500 p-1 backdrop-blur-md'>
         <div className='navbar bg-gray-700 shadow shadow-gray-700 px-2 rounded-lg'>
            <div className='w-full flex items-center justify-between gap-2 px-2'>
               <h4>Hello</h4>
               <div className='dropdown dropdown-end'>
                  <label
                     tabIndex={0}
                     className='btn btn-ghost btn-circle avatar'
                  >
                     <div className='w-12 rounded-full border border-orange-500'>
                        {tempUser?.profilePicture ? (
                           <img src={tempUser?.profilePicture} alt='' />
                        ) : (
                           <lord-icon
                              src='https://cdn.lordicon.com/ajkxzzfb.json'
                              trigger='hover'
                              colors='primary:#ffc738,secondary:#4bb3fd'
                              state='hover-looking-around'
                              style={{ width: '40px', height: '40px' }}
                           ></lord-icon>
                        )}
                     </div>
                  </label>
                  <ul
                     tabIndex={0}
                     className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-gray-700 text-gray-50 rounded-md w-52'
                  >
                     <li>
                        <Link to='/profile' className='justify-between'>
                           Profile
                           <span className='badge'>{tempUser?.name}</span>
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

export default TopBar;
