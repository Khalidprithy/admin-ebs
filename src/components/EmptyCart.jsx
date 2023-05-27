import PropTypes from 'prop-types';

export default function EmptyCart({ customerCart }) {
   const { total } = customerCart || {};
   return (
      <div className='mt-10 p-5'>
         <h4 className='text-xl'>Total: {total}</h4>
         <h4 className='text-lg font-medium text-gray-600'>
            No Cart Data Available
         </h4>
      </div>
   );
}

EmptyCart.propTypes = {
   customerCart: PropTypes.shape({
      total: PropTypes.number
   }).isRequired
};
