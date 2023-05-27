import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddProductModal from '../../components/Modal/AddProductModal';
import ProductCard from '../../components/ProductCard';
import { addProduct, fetchProducts } from '../../redux/slice/products';
import Loading from '../Shared/Loading';

export default function Products() {
   const dispatch = useDispatch();
   const state = useSelector(state => state);

   const updatedData = JSON.parse(localStorage.getItem('productsData'));
   console.log(updatedData);
   const products = updatedData?.products;

   useEffect(() => {
      dispatch(fetchProducts());
   }, [dispatch]);

   if (state.products.isLoading) {
      return <Loading />;
   }

   const handleAddProduct = async productData => {
      await dispatch(addProduct(productData));
      const updatedData = JSON.parse(localStorage.getItem('productsData'));

      updatedData.products.push(productData);

      localStorage.setItem('productsData', JSON.stringify(updatedData));

      console.log('Updated data:', updatedData);
   };

   return (
      <div className='p-2'>
         <div className='flex items-center justify-between px-4 pb-3 border-b border-gray-200 mx-2 pt-10'>
            <h4 className='text-2xl font-semibold'>Products</h4>
            <label
               htmlFor='productModalAdd'
               className='btn btn-outline rounded'
            >
               Add Product
            </label>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2'>
            {products?.map(product => (
               <ProductCard key={product?.id} product={product} />
            ))}
         </div>

         <AddProductModal addProduct={handleAddProduct} />
      </div>
   );
}
