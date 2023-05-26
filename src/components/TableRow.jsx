import PropTypes from 'prop-types';

export default function TableRow({ product }) {
   const { title, price, brand, category, thumbnail } = product || {};

   return (
      <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
         <th
            scope='row'
            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
         >
            <img className='w-20 max-h-14 rounded-md' src={thumbnail} alt='' />
         </th>
         <td className='px-6 py-4'>
            <h4>{title}</h4>
            <p className='text-sm text-gray-600'>{brand}</p>
         </td>
         <td className='px-6 py-4'>{category}</td>
         <td className='px-6 py-4'>${price}</td>
         <td className='px-6 py-4 text-right'>
            <a
               href='#'
               className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
            >
               Edit
            </a>
         </td>
      </tr>
   );
}

TableRow.propTypes = {
   product: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      brand: PropTypes.string,
      category: PropTypes.string,
      thumbnail: PropTypes.string,
      company: PropTypes.object
   })
};
