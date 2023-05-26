import PropTypes from 'prop-types';

export default function CartItem({ item }) {
   const { discountedPrice, price, quantity, title, total } = item || {};

   return (
      <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
         <th
            scope='row'
            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
         >
            {title}
         </th>
         <td className='px-6 py-4'>{quantity}</td>
         <td className='px-6 py-4'>${discountedPrice}</td>
         <td className='px-6 py-4'>${price}</td>
         <td className='px-6 py-4 text-right'>${total}</td>
      </tr>
   );
}

CartItem.propTypes = {
   item: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
      discountedPrice: PropTypes.number,
      total: PropTypes.number
   }).isRequired
};
