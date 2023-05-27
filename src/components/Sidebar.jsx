import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { FcShop } from 'react-icons/fc';
import {
   MdOutlineProductionQuantityLimits,
   MdSpaceDashboard
} from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = () => {
   const mainMenu = [
      {
         id: '125464',
         name: 'Dashboard',
         path: '/dashboard',
         icon: MdSpaceDashboard,
         color: '#D35400 '
      },
      {
         id: '125dsa464',
         name: 'Products',
         path: '/products',
         icon: MdOutlineProductionQuantityLimits,
         color: '#D35400 '
      },
      {
         id: '125dsg464',
         name: 'Customers',
         path: '/customers',
         icon: FaUsers,
         color: '#28B463 '
      }
   ];

   return (
      <div className='menu p-2 fixed top-0 left-0 z-40 w-16 md:w-40 h-screen bg-gray-800 pt-5 text-base-content transition-all ease-in-out duration-500 '>
         <Link
            to='/dashboard'
            className='flex items-center justify-center gap-4 mb-10'
         >
            {' '}
            <FcShop className='text-4xl' />
            <span className='hidden md:block text-gray-200 font-bold text-lg transition-all ease-out duration-300'>
               EBS
            </span>
         </Link>
         <ul>
            {mainMenu.map(menu => (
               <li key={menu.id}>
                  <Link
                     to={menu?.path}
                     className='flex items-center justify-left px-3 py-3 mb-2 text-base font-normal text-gray-100 rounded-md hover:text-gray-700 dark:text-white hover:dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700'
                  >
                     {React.createElement(menu.icon, {
                        className: `text-2xl`,
                        style: { color: menu.color }
                     })}{' '}
                     <span className='font-semibold hidden md:block'>
                        {menu.name}
                     </span>
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Sidebar;
