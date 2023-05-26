import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { fetchProducts } from '../../redux/slice/products';
import Loading from '../Shared/Loading';

export default function Products() {
   const dispatch = useDispatch();
   const state = useSelector(state => state);
   const products = state.products?.data?.products;

   const filterDeletedProducts = products?.filter(
      product => !product?.isDeleted
   );

   console.log('After Delete', filterDeletedProducts);

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
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2'>
            {filterDeletedProducts?.map(product => (
               <ProductCard key={product?.id} product={product} />
            ))}
         </div>
      </div>
   );
}
