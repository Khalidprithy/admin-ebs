import TableRow from '../../components/TableRow';
import useProducts from '../../hooks/useProducts';
import Loading from '../Shared/Loading';

export default function Products() {
   const { products, loading } = useProducts();

   if (loading) {
      return <Loading />;
   }

   return (
      <div className='p-2 mt-5'>
         <h4 className='text-xl font-semibold'>All product list</h4>
         <div className='overflow-x-auto w-full py-2'>
            <table className='table w-full'>
               {/* head */}
               <thead>
                  <tr>
                     <th>Title</th>
                     <th>Category</th>
                     <th>Price</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {/* Table row  */}
                  {products.map(product => (
                     <TableRow key={product?.id} product={product} />
                  ))}
               </tbody>
               {/* foot */}
               <tfoot>
                  <tr>
                     <th>Title</th>
                     <th>Category</th>
                     <th>Price</th>
                     <th>Actions</th>
                  </tr>
               </tfoot>
            </table>
         </div>
      </div>
   );
}
