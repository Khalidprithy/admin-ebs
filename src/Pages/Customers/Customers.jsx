import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomerCard from '../../components/CustomerCard';
import { fetchCustomers } from '../../redux/slice/customers';
import Loading from '../Shared/Loading';

export default function Customers() {
   const dispatch = useDispatch();
   const state = useSelector(state => state);
   const customers = state.customers?.data?.users;

   console.log('From redux Customers', state);

   useEffect(() => {
      dispatch(fetchCustomers());
   }, [dispatch]);

   if (state.customers.isLoading) {
      return <Loading />;
   }

   return (
      <div className='bg-blue-50'>
         <div className='px-4 pb-3 border-b border-gray-200 mx-2'>
            <h4 className='text-2xl font-semibold pt-10'>Our Customers</h4>
         </div>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-4'>
            {customers?.map(customer => (
               <CustomerCard key={customer?.id} customer={customer} />
            ))}
         </div>
      </div>
   );
}
