import CustomerCard from '../../components/CustomerCard';
import useUsers from '../../hooks/useUsers';
import Loading from '../Shared/Loading';

export default function Customers() {
   const { users, loading } = useUsers();

   if (loading) {
      return <Loading />;
   }

   return (
      <div className='bg-blue-50'>
         <div className='px-4 pb-3 border-b border-gray-200 mx-2'>
            <h4 className='text-2xl font-semibold pt-10'>Our Customers</h4>
         </div>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-4'>
            {users.map(customer => (
               <CustomerCard key={customer?.id} customer={customer} />
            ))}
         </div>
      </div>
   );
}
