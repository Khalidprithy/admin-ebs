import PropTypes from 'prop-types';
import React from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';

export default function OrderInfoCard(props) {
   const { name, value, icon } = props;

   return (
      <div className='flex items-center justify-between bg-primary py-3 px-4 m-1 rounded-md text-gray-50 '>
         <div className='flex items-center justify-start gap-2'>
            {React.createElement(icon, {
               className: `text-4xl`
            })}{' '}
            <div>
               <h4 className='text-2xl'>{name}</h4>
               <span className='text-lg'>{value}</span>
            </div>
         </div>
         <button>
            <BsArrowRightSquare className='text-2xl hover:text-3xl transition-all ease-in duration-150' />
         </button>
      </div>
   );
}

OrderInfoCard.propTypes = {
   name: PropTypes.any,
   value: PropTypes.any,
   icon: PropTypes.any
};
