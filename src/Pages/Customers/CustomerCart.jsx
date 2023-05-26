import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { fetchCustomerCart } from '../../redux/slice/customers';

export default function CustomerCart() {
   const { id } = useParams();
   const dispatch = useDispatch();
   const customerCart = useSelector(state => state.customers.data);

   const cartInfo = customerCart?.carts[0];
   console.log(cartInfo);

   useEffect(() => {
      dispatch(fetchCustomerCart(id));
   }, [dispatch, id]);

   if (!customerCart) {
      return <div>Loading customer cart...</div>;
   }

   // Render the customer cart data
   return (
      <div className='mt-5 p-2'>
         <h2 className='text-lg md:text-xl font-semibold border-b border-gray-200 pb-2'>
            Customer&apos;s Cart
         </h2>

         <div>
            <div className='flex items-center justify-between'>
               <h4 className='font-medium'>Order Summary</h4>
               <h6 className='text-sm font-semibold'>
                  Total Items {cartInfo?.totalQuantity}
               </h6>
            </div>
            <div className='flex flex-col lg:flex-row gap-2 items-start justify-between'>
               <div className='relative overflow-x-auto w-72 lg:w-7/12 bg-white shadow-md rounded p-5'>
                  <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-md'>
                     <thead className='text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                           <th scope='col' className='px-6 py-3'>
                              Product name
                           </th>
                           <th scope='col' className='px-6 py-3'>
                              Quantity
                           </th>
                           <th scope='col' className='px-6 py-3'>
                              Price
                           </th>
                           <th scope='col' className='px-6 py-3'>
                              Discounted Price
                           </th>
                           <th scope='col' className='px-6 py-3 text-end'>
                              Total
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        {cartInfo?.products.map(item => (
                           <CartItem key={item.id} item={item} />
                        ))}
                     </tbody>
                  </table>
               </div>

               <div className='w-full lg:w-5/12 bg-gray-300 p-2 rounded-md mt-0 lg:mt-5'>
                  <h4>Total Products: {cartInfo?.totalProducts}</h4>
                  <h4>Total Quantity: {cartInfo?.totalQuantity}</h4>
                  <h4>Sub Total: {cartInfo?.total}</h4>

                  <h3>After Discount: {cartInfo?.discountedTotal}</h3>
               </div>
            </div>
         </div>
      </div>
   );
}
