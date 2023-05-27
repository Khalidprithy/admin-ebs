import PropTypes from 'prop-types';
import React from 'react';

export default function SellsInfoCard(props) {
   const { name, value, icon } = props;

   return (
      <div className='bg-gray-600 p-2 px-4 m-1 rounded-md flex items-center justify-start gap-5 text-gray-200 '>
         {React.createElement(icon, {
            className: `text-4xl`
         })}{' '}
         <div>
            <h4 className='text-xl'>{name}</h4>
            <span className=''>{value}</span>
         </div>
      </div>
   );
}

SellsInfoCard.propTypes = {
   name: PropTypes.any,
   value: PropTypes.any,
   icon: PropTypes.any
};
