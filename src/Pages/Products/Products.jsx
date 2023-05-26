import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableRow from '../../components/TableRow';
import { fetchProducts } from '../../redux/slice/products';
import Loading from '../Shared/Loading';

export default function Products() {
   const dispatch = useDispatch();
   const state = useSelector(state => state);
   const products = state.products?.data?.products;

   console.log('From redux', state);

   useEffect(() => {
      dispatch(fetchProducts());
   }, [dispatch]);

   if (state.products.isLoading) {
      return <Loading />;
   }

   return (
      <div className='p-2'>
         <div className='px-4 pb-3 border-b border-gray-200 mx-2'>
            <h4 className='text-2xl font-semibold pt-10'>Products</h4>
         </div>
         <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
               <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                     <th scope='col' className='px-6 py-3'>
                        Image
                     </th>
                     <th scope='col' className='px-6 py-3'>
                        Product name
                     </th>
                     <th scope='col' className='px-6 py-3'>
                        Category
                     </th>
                     <th scope='col' className='px-6 py-3'>
                        Price
                     </th>
                     <th scope='col' className='px-6 py-3'>
                        <span className='sr-only'>Edit</span>
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {/* Table row  */}
                  {products?.map(product => (
                     <TableRow key={product?.id} product={product} />
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
