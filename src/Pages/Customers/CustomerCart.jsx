import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import EmptyCart from '../../components/EmptyCart';
import { fetchCustomerCart } from '../../redux/slice/customers';

export default function CustomerCart() {
   const { id } = useParams();
   const dispatch = useDispatch();
   const customerCart = useSelector(state => state.customers.data);
   const isLoading = useSelector(state => state.customers.isLoading);
   const cartInfo = customerCart?.carts?.[0];

   useEffect(() => {
      dispatch(fetchCustomerCart(id));
   }, [dispatch, id]);

   if (!cartInfo) {
      return <EmptyCart customerCart={customerCart} />;
   }
   if (isLoading) {
      return <isLoading />;
   }

   // Render the customer cart data
   return (
      <div className='mt-5 p-2'>
         <h2 className='text-lg md:text-xl font-semibold border-b border-gray-200 pb-2'>
            Customer&apos;s Cart
         </h2>

         <div>
            <h4 className='font-medium my-4'>Items Added</h4>

            <div className='flex flex-col lg:flex-row gap-2 items-start justify-between'>
               <div className='relative overflow-x-auto w-screen lg:w-7/12 bg-white shadow-md rounded p-5'>
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

               <div className='w-[400px] bg-gray-300 p-5 m-4 rounded-sm lg:mt-5'>
                  <h4 className='text-xl font-semibold'>Oder Summery</h4>
                  <div className=' flex items-center justify-between font-medium text-gray-600'>
                     <h4>Total Products:</h4>
                     <h4> {cartInfo?.totalProducts}</h4>
                  </div>
                  <div className=' flex items-center justify-between font-medium text-gray-600'>
                     <h4>Total Quantity:</h4>
                     <h4> {cartInfo?.totalQuantity}</h4>
                  </div>
                  <div className=' flex items-center justify-between font-medium text-gray-600'>
                     <h4>Sub Total:</h4>
                     <h4> ${cartInfo?.total}</h4>
                  </div>

                  <div className=' flex items-center justify-between font-medium text-gray-600'>
                     <h4>After Discount:</h4>
                     <h4 className='text-2xl text-orange-700'>
                        {' '}
                        ${cartInfo?.discountedTotal}
                     </h4>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
